'use client'

import { useEffect, useRef, useState } from 'react'

export default function Game() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const rafRef = useRef<number | null>(null)

  const [playing, setPlaying] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [score, setScore] = useState(0)

  const W = 320
  const H = 180
  const speed = 120
  const G = 700
  const JUMP = -280

  // Usar useRef para mantener el estado del juego entre renders
  const gameStateRef = useRef({
    mouse: { x: 48, y: H - 40, w: 22, h: 16, vy: 0, onGround: true },
    worldX: 0,
    objects: [] as Array<{
      x: number
      y: number
      w: number
      h: number
      type: 'cheese' | 'cat'
      born: number
      taken?: boolean
    }>,
    tLast: 0,
    score: 0
  })

  const reset = () => {
    setPlaying(false)
    setGameOver(false)
    setScore(0)
    gameStateRef.current.worldX = 0
    gameStateRef.current.score = 0
    gameStateRef.current.mouse = { 
      x: 48, 
      y: H - 40, 
      w: 22, 
      h: 16, 
      vy: 0, 
      onGround: true 
    }
    const now = performance.now()
    gameStateRef.current.objects = [
      { x: 220, y: H - 52, w: 12, h: 10, type: 'cheese', born: now },
      { x: 420, y: H - 44, w: 20, h: 16, type: 'cat', born: now },
    ]
    gameStateRef.current.tLast = 0
  }

  const startGame = () => {
    setPlaying(true)
    setGameOver(false)
    gameStateRef.current.tLast = 0
  }

  // Entradas
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const k = e.key.toLowerCase()
      if (k === ' ' || k === 'arrowup' || k === 'w') {
        e.preventDefault()
        if (!playing && !gameOver) {
          startGame()
        } else if (playing && gameStateRef.current.mouse.onGround) {
          gameStateRef.current.mouse.vy = JUMP
          gameStateRef.current.mouse.onGround = false
        } else if (gameOver) {
          reset()
        }
      }
    }
    const onClick = () => {
      if (!playing && !gameOver) {
        startGame()
      } else if (playing && gameStateRef.current.mouse.onGround) {
        gameStateRef.current.mouse.vy = JUMP
        gameStateRef.current.mouse.onGround = false
      } else if (gameOver) {
        reset()
      }
    }

    window.addEventListener('keydown', onKey)
    window.addEventListener('pointerdown', onClick)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('pointerdown', onClick)
    }
  }, [playing, gameOver])

  // Loop principal
  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d')
    if (!ctx) return
    reset()

    let running = true
    const step = (t: number) => {
      if (!running) return
      const dt = Math.min(0.032, (t - gameStateRef.current.tLast) / 1000 || 0.016)
      gameStateRef.current.tLast = t
      tick(ctx, dt, t)
      rafRef.current = requestAnimationFrame(step)
    }
    rafRef.current = requestAnimationFrame(step)
    return () => {
      running = false
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  // Actualizar tick para usar playingRef y gameOverRef
  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d')
    if (!ctx) return

    const step = (t: number) => {
      const dt = Math.min(0.032, (t - gameStateRef.current.tLast) / 1000 || 0.016)
      gameStateRef.current.tLast = t
      tick(ctx, dt, t)
      rafRef.current = requestAnimationFrame(step)
    }
    
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current)
    }
    rafRef.current = requestAnimationFrame(step)
  }, [playing, gameOver])

  function tick(ctx: CanvasRenderingContext2D, dt: number, time: number) {
    const { mouse, objects } = gameStateRef.current

    if (!playing) {
      draw(ctx, false, time)
      return
    }

    // Movimiento del mundo
    gameStateRef.current.worldX += speed * dt
    mouse.vy += G * dt
    mouse.y += mouse.vy * dt
    const groundY = H - 40
    if (mouse.y >= groundY) {
      mouse.y = groundY
      mouse.vy = 0
      mouse.onGround = true
    }

    // Mover objetos
    objects.forEach((o) => (o.x -= speed * dt))

    // Nuevos objetos
    const far = gameStateRef.current.worldX + W + 100
    const lastX = objects.length ? Math.max(...objects.map((o) => o.x)) : 0
    if (lastX < far) {
      const gap = 80 + Math.random() * 120
      const x = (lastX || gameStateRef.current.worldX + W) + gap
      const now = time
      if (Math.random() < 0.6) {
        const levels = [H - 52, H - 68, H - 84]
        const y = levels[Math.floor(Math.random() * levels.length)]
        objects.push({ x, y, w: 12, h: 10, type: 'cheese', born: now })
      } else {
        objects.push({ x, y: H - 44, w: 20, h: 16, type: 'cat', born: now })
      }
    }

    // Colisiones
    for (const o of objects) {
      if (o.taken) continue
      if (overlap(mouse, o)) {
        if (o.type === 'cheese') {
          o.taken = true
          gameStateRef.current.score += 1
          setScore(gameStateRef.current.score)
        } else if (o.type === 'cat') {
          // Game Over
          setPlaying(false)
          setGameOver(true)
          mouse.vy = 0
          mouse.y = groundY
          mouse.onGround = true
          break
        }
      }
    }
    gameStateRef.current.objects = objects.filter((o) => o.x > -40 && !o.taken)
    draw(ctx, true, time)
  }

  function overlap(a: { x: number; y: number; w: number; h: number }, b: { x: number; y: number; w: number; h: number; taken?: boolean }) {
    return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y
  }

  // Dibujo principal
  function draw(ctx: CanvasRenderingContext2D, animate: boolean, time: number) {
    const { mouse, objects } = gameStateRef.current
    
    ctx.clearRect(0, 0, W, H)
    const g = ctx.createLinearGradient(0, 0, 0, H)
    g.addColorStop(0, '#0b0b0b')
    g.addColorStop(1, '#111')
    ctx.fillStyle = g
    ctx.fillRect(0, 0, W, H)

    ctx.fillStyle = 'rgba(255,255,255,0.06)'
    ctx.fillRect(0, H - 24, W, 2)

    for (const o of objects) {
      if (o.type === 'cheese') drawCheese(ctx, o, time)
      else drawCat(ctx, o.x, o.y, o.w, o.h)
    }

    drawMouse(ctx, mouse.x, mouse.y, mouse.w, mouse.h, animate && !mouse.onGround)

    // Mensajes
    if (!playing && !gameOver) {
      ctx.fillStyle = 'rgba(0,0,0,0.55)'
      ctx.fillRect(0, 0, W, H)
      ctx.fillStyle = '#fff'
      ctx.font = 'bold 16px monospace'
      ctx.textAlign = 'center'
      ctx.fillText('Presiona Iniciar para jugar', W / 2, H / 2)
      ctx.textAlign = 'left'
    }

    if (gameOver) {
      ctx.fillStyle = 'rgba(0,0,0,0.55)'
      ctx.fillRect(0, 0, W, H)
      ctx.fillStyle = '#fff'
      ctx.font = 'bold 16px monospace'
      ctx.textAlign = 'center'
      ctx.fillText('¡Ups! El gato te alcanzó', W / 2, H / 2 - 10)
      ctx.font = '12px monospace'
      ctx.fillText(`Quesos atrapados: ${score}`, W / 2, H / 2 + 10)
      ctx.fillText('Pulsa Reiniciar para intentar de nuevo', W / 2, H / 2 + 28)
      ctx.textAlign = 'left'
    }

    // Score durante el juego
    if (playing) {
      ctx.fillStyle = 'rgba(0,0,0,0.6)'
      ctx.fillRect(8, 8, 80, 24)
      ctx.fillStyle = '#facc15'
      ctx.font = 'bold 14px monospace'
      ctx.fillText(`🧀 ${gameStateRef.current.score}`, 16, 25)
    }
  }

  // Dibujos individuales
  function drawMouse(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, jumping: boolean) {
    ctx.fillStyle = '#ffffff'
    roundRect(ctx, x, y, w, h, 4, true)
    ctx.beginPath()
    ctx.arc(x + 5, y - 2, 4, 0, Math.PI * 2)
    ctx.arc(x + 12, y - 3, 3.2, 0, Math.PI * 2)
    ctx.fill()
    ctx.fillStyle = '#0b0b0b'
    ctx.beginPath()
    ctx.arc(x + w - 6, y + 5, 1.5, 0, Math.PI * 2)
    ctx.fill()
    ctx.fillStyle = '#f97316'
    ctx.fillRect(x + w - 1.5, y + h / 2 - 1, 2, 2)
    ctx.strokeStyle = '#ffffff'
    ctx.lineWidth = 1.5
    ctx.beginPath()
    ctx.moveTo(x - 2, y + h - 2)
    ctx.quadraticCurveTo(x - 8, y + h - (jumping ? 16 : 6), x - 14, y + h - (jumping ? 20 : 8))
    ctx.stroke()
  }

  function drawCheese(ctx: CanvasRenderingContext2D, o: { x: number; y: number; w: number; h: number; born: number }, time: number) {
    const pulse = 0.6 + Math.abs(Math.sin((time - o.born) / 300)) * 0.4
    ctx.fillStyle = `rgba(250,204,21,${pulse})`
    ctx.beginPath()
    ctx.moveTo(o.x, o.y + o.h)
    ctx.lineTo(o.x + o.w, o.y + o.h)
    ctx.lineTo(o.x + o.w * 0.6, o.y)
    ctx.closePath()
    ctx.fill()
  }

  function drawCat(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number) {
    ctx.fillStyle = '#e5e7eb'
    roundRect(ctx, x, y, w, h, 3, true)
    
    // Orejas triangulares
    ctx.fillStyle = '#e5e7eb'
    ctx.beginPath()
    ctx.moveTo(x + 3, y)
    ctx.lineTo(x + 6, y - 4)
    ctx.lineTo(x + 9, y)
    ctx.closePath()
    ctx.fill()
    
    ctx.beginPath()
    ctx.moveTo(x + w - 9, y)
    ctx.lineTo(x + w - 6, y - 4)
    ctx.lineTo(x + w - 3, y)
    ctx.closePath()
    ctx.fill()
    
    // Interior de las orejas (rosa)
    ctx.fillStyle = '#fca5a5'
    ctx.beginPath()
    ctx.moveTo(x + 4.5, y - 0.5)
    ctx.lineTo(x + 6, y - 3)
    ctx.lineTo(x + 7.5, y - 0.5)
    ctx.closePath()
    ctx.fill()
    
    ctx.beginPath()
    ctx.moveTo(x + w - 7.5, y - 0.5)
    ctx.lineTo(x + w - 6, y - 3)
    ctx.lineTo(x + w - 4.5, y - 0.5)
    ctx.closePath()
    ctx.fill()
    
    // Ojos
    ctx.fillStyle = '#0b0b0b'
    ctx.fillRect(x + 6, y + 5, 2, 2)
    ctx.fillRect(x + w - 10, y + 5, 2, 2)
  }

  function roundRect(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    w: number,
    h: number,
    r: number,
    fill = false
  ) {
    const rr = Math.min(r, w / 2, h / 2)
    ctx.beginPath()
    ctx.moveTo(x + rr, y)
    ctx.arcTo(x + w, y, x + w, y + h, rr)
    ctx.arcTo(x + w, y + h, x, y + h, rr)
    ctx.arcTo(x, y + h, x, y, rr)
    ctx.arcTo(x, y, x + w, y, rr)
    ctx.closePath()
    if (fill) ctx.fill()
  }

  return (
    <section id="game" className="relative py-8 bg-black text-white">
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-4">
          <p className="text-xs tracking-widest text-gray-400">DEMO INTERACTIVA</p>
          <h2 className="text-xl md:text-2xl font-black leading-tight mt-1">Kid Rat Sprint</h2>
          <p className="text-gray-300 text-sm md:text-base mt-2">
            Mini-demo visual y divertida. Haz clic o pulsa{' '}
            <span className="font-semibold text-white">Espacio/↑</span> para saltar. Atrapa el queso brillante y evita
            al gato.
          </p>
        </div>

        <div className="mx-auto max-w-[400px]">
          <div className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md p-3 shadow-[0_0_0_1px_rgba(255,255,255,0.05)]">
            <div className="flex items-center justify-between">
              <button
                onClick={reset}
                className="px-3 py-1 rounded-full bg-gray-700 text-white hover:bg-gray-600 text-xs font-semibold"
              >
                Reiniciar
              </button>
              <button
                onClick={startGame}
                className="px-3 py-1 rounded-full bg-orange-500 text-white hover:bg-orange-600 text-xs font-semibold"
              >
                Iniciar
              </button>
            </div>

            <div className="rounded-xl overflow-hidden border border-white/10 bg-black mt-2">
              <canvas
                ref={canvasRef}
                width={W}
                height={H}
                style={{
                  width: '100%',
                  height: 'auto',
                  imageRendering: 'pixelated',
                  display: 'block',
                }}
              />
            </div>
          </div>

          <p className="mt-3 text-center text-gray-400 text-xs">
            Podemos personalizar sprites, colores y animaciones para tu marca o campañas.
          </p>
        </div>
      </div>
    </section>
  )
}