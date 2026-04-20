const projects = [
  {
    num: '01',
    title: 'Landing Pages',
    description:
      'Páginas de alta conversión diseñadas para capturar leads y vender. Veloces, claras y optimizadas para mobile y SEO.',
    tags: ['Next.js', 'Tailwind CSS', 'Animaciones', 'SEO'],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.25V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V8.25m-18 0V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v2.25m-18 0h18M9.75 16.5h4.5" />
      </svg>
    ),
    featured: false,
  },
  {
    num: '02',
    title: 'Sitios Web y Tiendas',
    description:
      'Desde portfolios hasta e-commerce completos. Incluye panel de administración, base de datos y todo lo que tu negocio necesita.',
    tags: ['React', 'Supabase', 'E-commerce', 'CMS'],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253" />
      </svg>
    ),
    featured: false,
  },
  {
    num: '03',
    title: 'Videojuegos',
    description:
      'Experiencias interactivas que los usuarios no olvidan. Juegos web, mobile y de escritorio con mecánicas y arte únicos.',
    tags: ['Unity', 'Godot', 'Canvas API', 'WebGL'],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.959.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
      </svg>
    ),
    featured: true,
  },
]

export default function WhatWeBuild() {
  return (
    <section id="projects" className="relative py-24 bg-[#080808] overflow-hidden">
      {/* Top edge line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      {/* Glow */}
      <div
        className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(227,116,3,0.06) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <p className="text-[#e37403] text-xs font-bold uppercase tracking-widest mb-3">
            Lo que construimos
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight tracking-tight max-w-xl">
            Un studio.<br />
            Todas las pantallas.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {projects.map((p) => (
            <div
              key={p.num}
              className={`group relative rounded-2xl p-7 flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1 ${
                p.featured
                  ? 'bg-[#e37403]/5 border border-[#e37403]/30 hover:border-[#e37403]/60 hover:shadow-xl hover:shadow-orange-500/10'
                  : 'bg-white/3 border border-white/8 hover:border-white/20 hover:bg-white/5'
              }`}
            >
              {/* Number */}
              <span
                className={`text-xs font-black tracking-widest ${
                  p.featured ? 'text-[#e37403]/60' : 'text-white/15'
                }`}
              >
                {p.num}
              </span>

              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                  p.featured
                    ? 'bg-[#e37403]/15 text-[#e37403] group-hover:bg-[#e37403]/25'
                    : 'bg-white/8 text-white/60 group-hover:bg-white/12 group-hover:text-white'
                }`}
              >
                {p.icon}
              </div>

              {/* Text */}
              <div className="flex-1">
                <h3 className="text-white font-black text-xl tracking-tight mb-2">
                  {p.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.description}</p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${
                      p.featured
                        ? 'bg-[#e37403]/10 text-[#e37403]/80'
                        : 'bg-white/5 text-gray-600'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Featured badge */}
              {p.featured && (
                <div className="absolute top-5 right-5 px-2.5 py-1 bg-[#e37403] text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                  Destacado
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <p className="text-gray-600 text-sm mb-4">¿Tienes algo diferente en mente?</p>
          <a
            href="https://api.whatsapp.com/send?phone=50372319551&text=¡Hola!%20Tengo%20una%20idea%20de%20proyecto%20para%20Kid%20Rat%20Studio."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/12 text-gray-300 hover:text-white hover:border-white/30 rounded-xl text-sm font-semibold transition-all duration-300 hover:bg-white/5"
          >
            Cuéntanos tu idea
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
