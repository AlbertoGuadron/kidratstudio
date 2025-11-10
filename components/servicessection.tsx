'use client'

import type { ReactNode } from 'react'
import Link from 'next/link'

type Service = {
  id: string
  title: string
  subtitle: string
  points: string[]
  icon: ReactNode
}

const SERVICES: Service[] = [
  {
    id: 'sitios',
    title: 'Sitios Web',
    subtitle: 'Presencia clara y lista para compartir.',
    points: ['Diseño adaptable', 'Contacto y secciones básicas'],
    icon: <span className="text-xl">🌐</span>,
  },
  {
    id: 'config',
    title: 'Configuración',
    subtitle: 'De cero a online sin enredos.',
    points: ['Dominio y hosting', 'WhatsApp y redes'],
    icon: <span className="text-xl">⚙️</span>,
  },
  {
    id: 'manto',
    title: 'Mantenimiento',
    subtitle: 'Tu sitio siempre al día.',
    points: ['Actualizaciones y backups', 'Revisión de seguridad'],
    icon: <span className="text-xl">🛡️</span>,
  },
  {
    id: 'webapp',
    title: 'Aplicaciones Web',
    subtitle: 'Herramientas simples en el navegador.',
    points: ['Paneles básicos', 'Usuarios y reportes'],
    icon: <span className="text-xl">🧩</span>,
  },
  {
    id: 'mobile',
    title: 'Apps Móviles',
    subtitle: 'Tu idea en iPhone y Android.',
    points: ['Prototipo rápido', 'Notificaciones'],
    icon: <span className="text-xl">📱</span>,
  },
  {
    id: 'desktop',
    title: 'Apps de Escritorio',
    subtitle: 'Windows o macOS sin complicarse.',
    points: ['Instalador simple', 'Actualizaciones fáciles'],
    icon: <span className="text-xl">💻</span>,
  },
]

function Card({ s }: { s: Service }) {
  return (
    <div
      className="group h-full rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md 
                 hover:border-white/40 hover:bg-white/10 transition-all duration-300
                 shadow-[0_0_0_1px_rgba(255,255,255,0.05)]"
    >
      <div className="p-5 flex flex-col h-full">
        <div className="flex items-center gap-3 text-white">
          <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
            {s.icon}
          </div>
          <div>
            <h3 className="text-lg font-bold leading-tight">{s.title}</h3>
            <p className="text-gray-300 text-sm line-clamp-2">{s.subtitle}</p>
          </div>
        </div>

        <ul className="mt-4 space-y-2 text-sm text-gray-200">
          {s.points.map((p, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-1 inline-block w-1.5 h-1.5 rounded-full bg-white/80" />
              <span className="line-clamp-1">{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-14 bg-black text-white">
      {/* fondo sutil */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* encabezado compacto */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="text-xs tracking-widest text-gray-400">SERVICIOS</p>
            <h2 className="text-2xl md:text-4xl font-black leading-tight mt-1">
              Soluciones esenciales
            </h2>
            <p className="text-gray-300 text-sm md:text-base mt-2 max-w-xl">
              Pequeñas, claras y efectivas: lo necesario para empezar y crecer.
            </p>
          </div>
        </div>

        {/* grid simétrica */}
        <div
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5
                     [grid-auto-rows:1fr]"
        >
          {SERVICES.map((s) => (
            <div key={s.id} className="h-full">
              <Card s={s} />
            </div>
          ))}
        </div>

        {/* botón global de WhatsApp */}
        <div className="mt-12 flex justify-center">
          <Link
            href="https://api.whatsapp.com/send?phone=50370078935&text=¡Hola!%20Me%20gustaría%20solicitar%20una%20cotización%20con%20Kid%20Rat%20Studio."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-full bg-green-500 text-white font-semibold
                       hover:bg-green-600 transition-all hover:scale-105 shadow-lg shadow-green-500/20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5 mr-2"
            >
              <path d="M20.52 3.48A11.77 11.77 0 0012.01 0C5.4 0 .01 5.39.01 12c0 2.11.55 4.17 1.6 5.99L0 24l6.19-1.63A11.9 11.9 0 0012 24h.01c6.6 0 12-5.39 12-12 0-3.2-1.24-6.22-3.49-8.52zM12 22a9.94 9.94 0 01-5.06-1.38l-.36-.21-3.67.96.98-3.58-.23-.37A9.9 9.9 0 012 12c0-5.52 4.48-10 10-10 2.67 0 5.18 1.04 7.07 2.93A9.92 9.92 0 0122 12c0 5.52-4.48 10-10 10zm5.17-7.38c-.28-.14-1.65-.81-1.9-.9-.26-.1-.45-.14-.64.14-.19.28-.74.9-.91 1.09-.17.19-.34.21-.63.07a8.11 8.11 0 01-2.39-1.47 9.02 9.02 0 01-1.67-2.07c-.17-.29-.02-.44.13-.58.14-.13.29-.34.43-.51.14-.17.19-.29.28-.48.09-.19.04-.35-.02-.49-.07-.14-.64-1.53-.88-2.1-.23-.56-.47-.49-.64-.5h-.55c-.18 0-.49.07-.74.35-.25.28-.97.95-.97 2.3 0 1.34.99 2.64 1.12 2.82.14.19 1.95 2.99 4.72 4.19.66.28 1.17.45 1.57.58.66.21 1.26.18 1.73.11.53-.08 1.65-.68 1.89-1.33.23-.64.23-1.19.16-1.33-.06-.14-.25-.22-.53-.35z" />
            </svg>
            Solicitar una cotización
          </Link>
        </div>
      </div>
    </section>
  )
}

