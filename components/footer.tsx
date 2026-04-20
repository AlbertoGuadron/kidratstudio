'use client'

import Link from 'next/link'

const navigationLinks = [
  { name: 'Inicio', href: '#home' },
  { name: 'Proyectos', href: '#projects' },
  { name: 'Servicios', href: '#services' },
]

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: 'TikTok',
    href: 'https://tiktok.com',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.73a4.85 4.85 0 01-1.01-.04z" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    href: 'https://github.com',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    name: 'WhatsApp',
    href: 'https://api.whatsapp.com/send?phone=50372319551&text=¡Hola!%20Me%20gustaría%20contactar%20a%20Kid%20Rat%20Studio.',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.52 3.48A11.77 11.77 0 0012.01 0C5.4 0 .01 5.39.01 12c0 2.11.55 4.17 1.6 5.99L0 24l6.19-1.63A11.9 11.9 0 0012 24h.01c6.6 0 12-5.39 12-12 0-3.2-1.24-6.22-3.49-8.52z" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#e37403]/40 to-transparent" />

      {/* Decorative glows */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#e37403]/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#e37403]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main grid */}
        <div className="py-14 grid grid-cols-1 md:grid-cols-12 gap-10">

          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3 mb-5 group">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg transition-transform duration-300 group-hover:scale-105">
                <img
                  src="/galeria/logo3.png"
                  alt="Kid Rat Studio"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <span className="text-xl font-black text-white tracking-wide">KID RAT STUDIO</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-6">
              Studio joven de programación en El Salvador. Construimos apps, webs y videojuegos que conectan con las nuevas generaciones.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-gray-500 hover:bg-[#e37403]/15 hover:border-[#e37403]/30 hover:text-[#e37403] transition-all duration-300"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-5">
              Navegación
            </h4>
            <nav className="space-y-3">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-white transition-colors duration-200 group"
                >
                  <span className="w-3 h-px bg-gray-700 group-hover:bg-[#e37403] group-hover:w-4 transition-all duration-200" />
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-5">
              Contacto
            </h4>
            <div className="space-y-4">
              <a
                href="https://api.whatsapp.com/send?phone=50372319551&text=¡Hola!%20Me%20gustaría%20saber%20más%20sobre%20Kid%20Rat%20Studio."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#e37403]/8 border border-[#e37403]/15 flex items-center justify-center flex-shrink-0 group-hover:bg-[#e37403]/20 transition-colors">
                  <svg className="w-4 h-4 text-[#e37403]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] text-gray-600 uppercase tracking-wide mb-0.5">WhatsApp</p>
                  <p className="text-sm text-gray-400 group-hover:text-white transition-colors">+503 7231-9551</p>
                </div>
              </a>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#e37403]/8 border border-[#e37403]/15 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#e37403]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] text-gray-600 uppercase tracking-wide mb-0.5">Ubicación</p>
                  <p className="text-sm text-gray-400">San Salvador, El Salvador</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Kid Rat Studio. Todos los derechos reservados.
          </p>
          <p className="text-xs text-gray-700 uppercase tracking-widest">
            Hecho con 🐭 en El Salvador
          </p>
        </div>
      </div>
    </footer>
  )
}
