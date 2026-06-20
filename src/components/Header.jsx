import { useState, useEffect } from 'react'

const LINKS = [
  { href: '#modelo', label: 'El Modelo' },
  { href: '#viaje', label: 'El Viaje del Paciente' },
  { href: '#equipo', label: 'Equipo' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Bloquea el scroll del fondo cuando el menú móvil está abierto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // El menú abierto siempre usa estilo "claro" (panel blanco), aunque estemos arriba
  const darkText = scrolled || menuOpen

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: darkText ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0)',
        backdropFilter: darkText ? 'blur(16px) saturate(160%)' : 'blur(0px)',
        borderBottom: darkText
          ? '1px solid rgba(10,79,143,0.10)'
          : '1px solid rgba(255,255,255,0)',
        boxShadow: scrolled ? '0 4px 24px rgba(2,18,40,0.06)' : 'none',
      }}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between transition-all duration-500"
        style={{ paddingTop: scrolled ? '0.6rem' : '0.9rem', paddingBottom: scrolled ? '0.6rem' : '0.9rem' }}
      >
        {/* Logo: blanco sobre el hero, azul al hacer scroll / menú abierto */}
        <a href="#top" onClick={() => setMenuOpen(false)} className="flex items-center transition-all duration-500">
          <span
            className="relative inline-flex h-16 sm:h-20 transition-all duration-500"
            style={{ filter: darkText ? 'none' : 'drop-shadow(0 2px 10px rgba(2,18,40,0.45))' }}
          >
            <img
              src="/logo-blanco.png"
              alt="Hospital Angeles — Centro de Neurociencias Avanzadas"
              className="h-full w-auto transition-opacity duration-500"
              style={{ opacity: darkText ? 0 : 1 }}
            />
            <img
              src="/logo-azul.png"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-auto transition-opacity duration-500"
              style={{ opacity: darkText ? 1 : 0 }}
            />
          </span>
        </a>

        {/* Navegación escritorio */}
        <div
          className="hidden md:flex items-center gap-8 text-sm font-medium transition-colors duration-500"
          style={{ color: scrolled ? 'rgba(31,41,55,0.85)' : 'rgba(255,255,255,0.9)' }}
        >
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="hover:opacity-70 transition-opacity">
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="px-5 py-2 rounded-full transition-all"
            style={{
              border: scrolled
                ? '1px solid rgba(10,79,143,0.35)'
                : '1px solid rgba(255,255,255,0.3)',
            }}
          >
            Agendar cita
          </a>
        </div>

        {/* Botón hamburguesa (solo móvil) */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          className="md:hidden relative w-10 h-10 flex items-center justify-center -mr-1"
        >
          <span className="relative w-6 h-5 block">
            {/* 3 líneas que se transforman en X */}
            <span
              className="absolute left-0 w-6 h-0.5 rounded-full transition-all duration-300"
              style={{
                top: menuOpen ? '10px' : '0px',
                transform: menuOpen ? 'rotate(45deg)' : 'none',
                background: darkText ? '#0a4f8f' : '#ffffff',
              }}
            />
            <span
              className="absolute left-0 top-[10px] w-6 h-0.5 rounded-full transition-all duration-300"
              style={{
                opacity: menuOpen ? 0 : 1,
                background: darkText ? '#0a4f8f' : '#ffffff',
              }}
            />
            <span
              className="absolute left-0 w-6 h-0.5 rounded-full transition-all duration-300"
              style={{
                top: menuOpen ? '10px' : '20px',
                transform: menuOpen ? 'rotate(-45deg)' : 'none',
                background: darkText ? '#0a4f8f' : '#ffffff',
              }}
            />
          </span>
        </button>
      </nav>

      {/* Panel del menú móvil */}
      <div
        className="md:hidden overflow-hidden transition-all duration-400"
        style={{
          maxHeight: menuOpen ? '420px' : '0px',
          opacity: menuOpen ? 1 : 0,
          background: 'rgba(255,255,255,0.97)',
          backdropFilter: 'blur(16px)',
          borderBottom: menuOpen ? '1px solid rgba(10,79,143,0.10)' : 'none',
        }}
      >
        <div className="px-6 py-4 flex flex-col">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="py-3 text-gray-800 font-medium border-b border-gray-100 hover:text-blue-700 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setMenuOpen(false)}
            className="mt-4 text-center px-6 py-3 rounded-full font-semibold text-white transition-all"
            style={{ background: 'linear-gradient(135deg, #1a6fc4 0%, #0a4f8f 100%)' }}
          >
            Agendar cita
          </a>
        </div>
      </div>
    </header>
  )
}
