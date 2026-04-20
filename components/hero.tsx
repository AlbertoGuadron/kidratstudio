const capabilities = [
  'Landing Pages',
  'Sitios Web',
  'Apps Móviles',
  'Videojuegos',
  'Apps de Escritorio',
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-black flex flex-col justify-center overflow-hidden"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.022) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Orange glow – left */}
      <div
        className="absolute top-1/3 -left-32 w-[560px] h-[560px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(227,116,3,0.09) 0%, transparent 70%)' }}
      />
      {/* Orange glow – bottom right */}
      <div
        className="absolute bottom-0 right-0 w-[320px] h-[320px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(227,116,3,0.06) 0%, transparent 70%)' }}
      />

      {/* Decorative pixel corner – top right */}
      <div className="absolute top-32 right-8 md:right-16 flex flex-col gap-2 pointer-events-none opacity-30">
        {[...Array(4)].map((_, row) => (
          <div key={row} className="flex gap-2">
            {[...Array(4)].map((_, col) => (
              <div
                key={col}
                className="w-2 h-2 bg-[#e37403] rounded-sm"
                style={{ opacity: Math.random() > 0.5 ? 1 : 0.3 }}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#e37403]/30 bg-[#e37403]/8 text-[#e37403] text-xs font-bold uppercase tracking-widest mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#e37403] animate-pulse" />
          Estudio de programación · El Salvador
        </div>

        {/* Main headline */}
        <h1 className="text-[clamp(2.8rem,8vw,6rem)] font-black text-white leading-none tracking-tighter mb-6 max-w-4xl">
          Construimos
          <br />
          <span
            style={{
              background: 'linear-gradient(90deg, #e37403 0%, #f97316 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            lo que imaginas.
          </span>
        </h1>

        {/* Sub */}
        <p className="text-gray-400 text-lg sm:text-xl max-w-2xl leading-relaxed mb-10">
          Somos un studio joven que convierte ideas en experiencias digitales
          reales — desde una landing page de alta conversión hasta un videojuego
          completo.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mb-14">
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#e37403] text-white font-bold text-base rounded-xl hover:bg-orange-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20"
          >
            Ver servicios
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=50372319551&text=¡Hola!%20Me%20gustaría%20saber%20más%20sobre%20los%20servicios%20de%20Kid%20Rat%20Studio."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-bold text-base rounded-xl border border-white/15 hover:border-white/35 hover:bg-white/5 transition-all duration-300"
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.52 3.48A11.77 11.77 0 0012.01 0C5.4 0 .01 5.39.01 12c0 2.11.55 4.17 1.6 5.99L0 24l6.19-1.63A11.9 11.9 0 0012 24h.01c6.6 0 12-5.39 12-12 0-3.2-1.24-6.22-3.49-8.52z" />
            </svg>
            Contáctanos
          </a>
        </div>

        {/* Capability tags */}
        <div className="flex flex-wrap gap-2">
          {capabilities.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 text-sm text-gray-500 border border-white/8 rounded-full bg-white/3 hover:text-gray-300 hover:border-white/20 transition-colors duration-200 cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none">
        <span className="text-gray-700 text-[10px] uppercase tracking-[0.25em]">scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-gray-600 to-transparent" />
      </div>
    </section>
  )
}
