'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const navItems = [
  { name: 'Inicio', href: '#home' },
  { name: 'Proyectos', href: '#projects' },
  { name: 'Servicios', href: '#services' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-md border-b border-white/5 shadow-xl shadow-black/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex-shrink-0">
              <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-105">
                <img
                  src="/galeria/logo2.png"
                  alt="Kid Rat Studio"
                  className="w-9 h-9 object-contain rounded-full"
                />
              </div>
              <div className="absolute inset-0 rounded-full animate-ping opacity-10 pointer-events-none">
                <div className="w-full h-full border-2 border-[#e37403] rounded-full" />
              </div>
            </div>
            <span className="text-white font-black text-base tracking-wider hidden sm:block">
              KID RAT STUDIO
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-gray-400 hover:text-white text-sm font-semibold tracking-wide transition-colors duration-200 group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#e37403] transition-all duration-300 group-hover:w-full rounded-full" />
              </Link>
            ))}
          </nav>

          {/* CTA desktop */}
          <div className="hidden md:block">
            <Link
              href="https://api.whatsapp.com/send?phone=50372319551&text=¡Hola!%20Me%20gustaría%20solicitar%20una%20cotización%20con%20Kid%20Rat%20Studio."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#e37403] text-white font-bold text-sm rounded-lg hover:bg-orange-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30"
            >
              Cotizar proyecto
              <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menú"
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 w-0' : 'w-full'}`} />
              <span className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-black/95 backdrop-blur-md border-t border-white/5 ${
          isMobileMenuOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-5 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block px-3 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg font-medium text-sm transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              href="https://api.whatsapp.com/send?phone=50372319551&text=¡Hola!%20Me%20gustaría%20solicitar%20una%20cotización%20con%20Kid%20Rat%20Studio."
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-3 bg-[#e37403] text-white font-bold rounded-lg text-sm hover:bg-orange-500 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Cotizar proyecto
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
