'use client'

import Link from 'next/link'

const capabilities = [
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

const services = [
  {
    id: 'sitios',
    title: 'Sitios Web',
    subtitle: 'Presencia clara y lista para compartir.',
    points: ['Diseño adaptable a todos los dispositivos', 'Secciones de contacto y servicios'],
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253" />
      </svg>
    ),
  },
  {
    id: 'config',
    title: 'Configuración',
    subtitle: 'De cero a online sin enredos.',
    points: ['Dominio, hosting y SSL incluidos', 'Integración con WhatsApp y redes sociales'],
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a6.759 6.759 0 010 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 010-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    id: 'manto',
    title: 'Mantenimiento',
    subtitle: 'Tu sitio siempre al día.',
    points: ['Actualizaciones, backups y monitoreo', 'Revisión de seguridad mensual'],
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    id: 'webapp',
    title: 'Aplicaciones Web',
    subtitle: 'Herramientas poderosas en el navegador.',
    points: ['Paneles de control y dashboards', 'Usuarios, roles y reportes'],
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    id: 'mobile',
    title: 'Apps Móviles',
    subtitle: 'Tu idea en iPhone y Android.',
    points: ['Prototipo funcional rápido', 'Notificaciones y pagos en línea'],
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
  },
  {
    id: 'desktop',
    title: 'Apps de Escritorio',
    subtitle: 'Windows y macOS sin complicaciones.',
    points: ['Instalador simple y ligero', 'Actualizaciones automáticas'],
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
      </svg>
    ),
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 bg-[#080808] text-white overflow-hidden">
      {/* Grid bg */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Glow */}
      <div
        className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(227,116,3,0.06) 0%, transparent 70%)' }}
      />

      {/* Edge lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/6 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section header ── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-[#e37403] text-xs font-bold uppercase tracking-widest mb-3">
              Lo que construimos
            </p>
            <h2 className="text-4xl sm:text-5xl font-black leading-tight tracking-tight">
              Un studio.<br />
              Todas las pantallas.
            </h2>
            <p className="text-gray-500 text-base mt-3 max-w-lg leading-relaxed">
              Todo lo que tu proyecto necesita, construido con código limpio y entregado a tiempo.
            </p>
          </div>

          <Link
            href="https://api.whatsapp.com/send?phone=50372319551&text=¡Hola!%20Me%20gustaría%20solicitar%20una%20cotización%20con%20Kid%20Rat%20Studio."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-5 py-3 bg-green-500/10 border border-green-500/25 text-green-400 font-semibold text-sm rounded-xl hover:bg-green-500/20 hover:border-green-500/50 transition-all duration-300 flex-shrink-0"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.52 3.48A11.77 11.77 0 0012.01 0C5.4 0 .01 5.39.01 12c0 2.11.55 4.17 1.6 5.99L0 24l6.19-1.63A11.9 11.9 0 0012 24h.01c6.6 0 12-5.39 12-12 0-3.2-1.24-6.22-3.49-8.52zM12 22a9.94 9.94 0 01-5.06-1.38l-.36-.21-3.67.96.98-3.58-.23-.37A9.9 9.9 0 012 12c0-5.52 4.48-10 10-10 2.67 0 5.18 1.04 7.07 2.93A9.92 9.92 0 0122 12c0 5.52-4.48 10-10 10zm5.17-7.38c-.28-.14-1.65-.81-1.9-.9-.26-.1-.45-.14-.64.14-.19.28-.74.9-.91 1.09-.17.19-.34.21-.63.07a8.11 8.11 0 01-2.39-1.47 9.02 9.02 0 01-1.67-2.07c-.17-.29-.02-.44.13-.58.14-.13.29-.34.43-.51.14-.17.19-.29.28-.48.09-.19.04-.35-.02-.49-.07-.14-.64-1.53-.88-2.1-.23-.56-.47-.49-.64-.5h-.55c-.18 0-.49.07-.74.35-.25.28-.97.95-.97 2.3 0 1.34.99 2.64 1.12 2.82.14.19 1.95 2.99 4.72 4.19.66.28 1.17.45 1.57.58.66.21 1.26.18 1.73.11.53-.08 1.65-.68 1.89-1.33.23-.64.23-1.19.16-1.33-.06-.14-.25-.22-.53-.35z" />
            </svg>
            Solicitar cotización
          </Link>
        </div>

        {/* ── Capability cards (large) ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {capabilities.map((p) => (
            <div
              key={p.num}
              className={`group relative rounded-2xl p-7 flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1 ${
                p.featured
                  ? 'bg-[#e37403]/5 border border-[#e37403]/30 hover:border-[#e37403]/60 hover:shadow-xl hover:shadow-orange-500/10'
                  : 'bg-white/3 border border-white/8 hover:border-white/20 hover:bg-white/5'
              }`}
            >
              <span className={`text-xs font-black tracking-widest ${p.featured ? 'text-[#e37403]/60' : 'text-white/15'}`}>
                {p.num}
              </span>

              <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                p.featured
                  ? 'bg-[#e37403]/15 text-[#e37403] group-hover:bg-[#e37403]/25'
                  : 'bg-white/8 text-white/60 group-hover:bg-white/12 group-hover:text-white'
              }`}>
                {p.icon}
              </div>

              <div className="flex-1">
                <h3 className="text-white font-black text-xl tracking-tight mb-2">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.description}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${
                      p.featured ? 'bg-[#e37403]/10 text-[#e37403]/80' : 'bg-white/5 text-gray-600'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {p.featured && (
                <div className="absolute top-5 right-5 px-2.5 py-1 bg-[#e37403] text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                  Destacado
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ── Divider ── */}
        <div className="flex items-center gap-4 mb-12">
          <div className="flex-1 h-px bg-white/6" />
          <p className="text-gray-600 text-xs font-bold uppercase tracking-widest whitespace-nowrap">
            Qué incluye cada proyecto
          </p>
          <div className="flex-1 h-px bg-white/6" />
        </div>

        {/* ── Service detail cards (small) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 [grid-auto-rows:1fr]">
          {services.map((s) => (
            <div
              key={s.id}
              className="group h-full rounded-2xl border border-white/8 bg-white/3 hover:border-[#e37403]/35 hover:bg-[#e37403]/4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-500/5"
            >
              <div className="p-6 flex flex-col h-full gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-gray-500 group-hover:bg-[#e37403]/12 group-hover:border-[#e37403]/25 group-hover:text-[#e37403] transition-all duration-300 flex-shrink-0">
                    {s.icon}
                  </div>
                  <div className="pt-0.5">
                    <h3 className="text-white font-bold text-base leading-tight">{s.title}</h3>
                    <p className="text-gray-500 text-xs mt-0.5 leading-snug">{s.subtitle}</p>
                  </div>
                </div>

                <ul className="space-y-2 mt-auto">
                  {s.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-gray-500">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-[#e37403]/50 flex-shrink-0 group-hover:bg-[#e37403] transition-colors" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="text-gray-600 text-sm">¿Tienes algo diferente en mente?</p>
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

          {/* Mobile WhatsApp CTA */}
          <Link
            href="https://api.whatsapp.com/send?phone=50372319551&text=¡Hola!%20Me%20gustaría%20solicitar%20una%20cotización%20con%20Kid%20Rat%20Studio."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex md:hidden items-center gap-2 px-6 py-3.5 bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 transition-all"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.52 3.48A11.77 11.77 0 0012.01 0C5.4 0 .01 5.39.01 12c0 2.11.55 4.17 1.6 5.99L0 24l6.19-1.63A11.9 11.9 0 0012 24h.01c6.6 0 12-5.39 12-12 0-3.2-1.24-6.22-3.49-8.52z" />
            </svg>
            Solicitar cotización
          </Link>
        </div>
      </div>
    </section>
  )
}
