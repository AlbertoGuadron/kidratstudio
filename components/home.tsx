'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [currentCodeSnippet, setCurrentCodeSnippet] = useState(0)
  const [time, setTime] = useState(new Date())

  const codeSnippets = [
    "console.log('Kid Rat is coding! 🐭');",
    "const creativity = infinite;",
    "function buildDreams() { return '✨'; }",
    "// Creando el futuro digital...",
    "if (ideas) { makeItReal(); }",
    "git commit -m 'feat: más magia'",
    "npm install awesome-vibes",
    "const kidRat = new Developer('🔥');"
  ]

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCodeSnippet((prev) => (prev + 1) % codeSnippets.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsTyping(true)
    setTimeout(() => {
      setEmail('')
      setIsTyping(false)
    }, 1500)
  }

  const services = [
    { 
      icon: '📱', 
      title: 'Apps Móviles', 
      description: 'Flutter & React Native que conectan con Gen Z',
      tech: 'Flutter • React Native'
    },
    { 
      icon: '🌐', 
      title: 'Web Development', 
      description: 'Sitios web modernos y responsivos que impactan',
      tech: 'Next.js • React • TypeScript'
    },
    { 
      icon: '🎮', 
      title: 'UI/UX Design', 
      description: 'Interfaces que enamoran y experiencias memorables',
      tech: 'Figma • Adobe • Prototyping'
    },
    { 
      icon: '⚡', 
      title: 'Backend Solutions', 
      description: 'APIs robustas y arquitecturas escalables',
      tech: 'Node.js • Python • Databases'
    }
  ]

  const techStack = [
    { name: 'React', icon: '⚛️', color: 'hover:text-blue-400' },
    { name: 'Next.js', icon: '▲', color: 'hover:text-gray-300' },
    { name: 'TypeScript', icon: '🔷', color: 'hover:text-blue-500' },
    { name: 'Node.js', icon: '🟢', color: 'hover:text-green-400' },
    { name: 'Python', icon: '🐍', color: 'hover:text-yellow-400' },
    { name: 'Flutter', icon: '💙', color: 'hover:text-blue-300' },
    { name: 'Figma', icon: '🎨', color: 'hover:text-purple-400' },
    { name: 'MongoDB', icon: '🍃', color: 'hover:text-green-500' }
  ]

  const socialLinks = [
    { 
      name: 'GitHub', 
      href: '#', 
      icon: '🐙',
      hoverColor: 'hover:bg-gray-700'
    },
    { 
      name: 'Discord', 
      href: '#', 
      icon: '🎮',
      hoverColor: 'hover:bg-indigo-600'
    },
    { 
      name: 'Instagram', 
      href: '#', 
      icon: '📸',
      hoverColor: 'hover:bg-pink-500'
    },
    { 
      name: 'TikTok', 
      href: '#', 
      icon: '🎵',
      hoverColor: 'hover:bg-black'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Elementos decorativos animados */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-3 h-3 bg-brand-orange rounded-full animate-ping"></div>
        <div className="absolute top-32 right-20 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-40 right-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping"></div>
        <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-pink-400 rounded-full animate-bounce"></div>
      </div>

      {/* Líneas de código flotantes */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 text-green-400/20 text-sm font-mono animate-pulse">
          {'<KidRat/>'}
        </div>
        <div className="absolute top-40 right-16 text-blue-400/20 text-sm font-mono animate-bounce">
          {'{ code }'}
        </div>
        <div className="absolute bottom-32 left-1/4 text-purple-400/20 text-sm font-mono animate-pulse">
          {'() => magic'}
        </div>
        <div className="absolute top-1/3 right-1/3 text-brand-orange/20 text-xs font-mono animate-ping">
          {'🐭.create()'}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <section className="py-20 md:py-32 text-center">
          <div className="max-w-5xl mx-auto">
            {/* Logo animado */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-brand-orange to-orange-600 rounded-3xl flex items-center justify-center transform transition-all duration-700 hover:scale-110 hover:rotate-12 shadow-2xl shadow-orange-500/25 animate-pulse">
                  <img 
                    src="/logo.png" 
                    alt="Kid Rat Studio Logo" 
                    className="w-16 h-16 md:w-24 md:h-24 object-contain filter drop-shadow-lg"
                  />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full animate-bounce flex items-center justify-center">
                  <span className="text-xs">🐭</span>
                </div>
                {/* Anillos animados */}
                <div className="absolute inset-0 rounded-3xl animate-ping opacity-20">
                  <div className="w-full h-full border-4 border-brand-orange rounded-3xl"></div>
                </div>
              </div>
            </div>

            <h1 className="text-5xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
              Kid Rat
              <span className="block text-brand-orange animate-pulse">Studio</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
              Creamos <span className="text-brand-orange font-semibold">experiencias digitales épicas</span> que conectan con las nuevas generaciones 🚀
            </p>

            {/* Terminal animado */}
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto mb-12 border border-gray-700 shadow-2xl">
              <div className="flex items-center mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <span className="ml-4 text-sm text-gray-400 font-mono">kidrat-terminal.js</span>
              </div>
              <div className="text-left font-mono text-lg">
                <span className="text-green-400">$ </span>
                <span className="text-white">
                  {codeSnippets[currentCodeSnippet]}
                </span>
                <span className="animate-blink text-brand-orange">|</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-brand-orange to-orange-600 text-white font-bold rounded-2xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25 group text-lg"
              >
                <span className="flex items-center">
                  Empezar Proyecto
                  <span className="ml-2 text-xl group-hover:rotate-12 transition-transform duration-300">🚀</span>
                </span>
              </Link>
              
              <Link
                href="#projects"
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-2xl hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 text-lg"
              >
                Ver Proyectos
              </Link>
            </div>
          </div>
        </section>

        {/* Servicios */}
        <section className="py-20 border-t border-gray-800">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">¿Qué hacemos?</span>
              <span className="block text-brand-orange">Todo lo digital 🔥</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-brand-orange transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="text-sm text-brand-orange font-mono bg-gray-800/50 rounded-lg px-3 py-2 inline-block">
                  {service.tech}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-20 border-t border-gray-800">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-white">Nuestro </span>
              <span className="text-brand-orange">Arsenal ⚡</span>
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className={`bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 flex flex-col items-center text-center hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 cursor-pointer group ${tech.color}`}
              >
                <span className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">
                  {tech.icon}
                </span>
                <span className="text-sm font-semibold">{tech.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-20 border-t border-gray-800">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center bg-gray-800/50 rounded-full px-8 py-3 mb-8 border border-gray-700">
              <span className="text-3xl mr-3">📡</span>
              <span className="text-xl font-bold">Únete al Kid Rat Lab</span>
            </div>
            
            <h3 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-white">Recibe </span>
              <span className="text-brand-orange">contenido épico 🔥</span>
            </h3>
            
            <p className="text-xl text-gray-400 mb-12">
              Tips de desarrollo, tutoriales exclusivos y los mejores memes de programación
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <div className="flex-1 relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  className="w-full px-6 py-4 bg-gray-800/50 border border-gray-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all duration-300 font-mono text-lg"
                  required
                />
                {isTyping && (
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <div className="w-6 h-6 border-2 border-brand-orange border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
              </div>
              <button
                type="submit"
                disabled={isTyping}
                className="px-8 py-4 bg-gradient-to-r from-brand-orange to-orange-600 text-white font-bold rounded-2xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25 group disabled:opacity-50 text-lg"
              >
                <span className="flex items-center justify-center">
                  {isTyping ? 'Enviando...' : 'Suscribirse'}
                  <span className="ml-2 text-xl group-hover:rotate-12 transition-transform duration-300">
                    {isTyping ? '⏳' : '🚀'}
                  </span>
                </span>
              </button>
            </form>
          </div>
        </section>

        {/* Redes Sociales */}
        <section className="py-20 border-t border-gray-800">
          <div className="text-center">
            <h3 className="text-3xl md:text-5xl font-bold mb-12">
              <span className="text-white">Síguenos en </span>
              <span className="text-brand-orange">las redes 🌐</span>
            </h3>

            <div className="flex justify-center gap-6">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className={`w-20 h-20 bg-gray-800/50 rounded-2xl flex items-center justify-center text-3xl hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg border border-gray-700 ${social.hoverColor} group`}
                  aria-label={social.name}
                  title={social.name}
                >
                  <span className="transform transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">
                    {social.icon}
                  </span>
                </Link>
              ))}
            </div>

            {/* Status en vivo */}
            <div className="mt-12 inline-flex items-center bg-gray-800/50 rounded-full px-6 py-3 border border-gray-700">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse mr-3"></div>
              <span className="text-gray-400 font-mono">
                Kid Rat Studio • Online • {time.toLocaleTimeString()}
              </span>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
      `}</style>
    </div>
  )
}