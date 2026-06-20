import { useState, useEffect } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        // Arriba: casi invisible. Al hacer scroll: cristal blanco esmerilado.
        background: scrolled ? 'rgba(255,255,255,0.72)' : 'rgba(255,255,255,0)',
        backdropFilter: scrolled ? 'blur(16px) saturate(160%)' : 'blur(0px)',
        borderBottom: scrolled
          ? '1px solid rgba(10,79,143,0.10)'
          : '1px solid rgba(255,255,255,0)',
        boxShadow: scrolled ? '0 4px 24px rgba(2,18,40,0.06)' : 'none',
      }}
    >
      <nav
        className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-center md:justify-between transition-all duration-500"
        style={{ paddingTop: scrolled ? '0.6rem' : '1rem', paddingBottom: scrolled ? '0.6rem' : '1rem' }}
      >
        {/* Logo + chip falso. Arriba: chip azul translúcido + logo blanco.
            Scroll: chip se desvanece + logo azul para legibilidad sobre blanco. */}
        <a
          href="#top"
          className="flex items-center rounded-2xl transition-all duration-500"
          style={{
            background: scrolled ? 'rgba(26,111,196,0)' : 'rgba(26,111,196,0.55)',
            backdropFilter: scrolled ? 'blur(0px)' : 'blur(10px)',
            border: scrolled
              ? '1px solid rgba(255,255,255,0)'
              : '1px solid rgba(255,255,255,0.22)',
            boxShadow: scrolled ? 'none' : '0 4px 20px rgba(2,18,40,0.25)',
            padding: scrolled ? '0.25rem 0.5rem' : '0.75rem 1.5rem',
          }}
        >
          {/* Dos imágenes superpuestas con fundido cruzado para cambiar de color sin parpadeo */}
          <span className="relative inline-flex h-11 sm:h-14">
            <img
              src="/logo-blanco.png"
              alt="Hospital Angeles — Centro de Neurociencias Avanzadas"
              className="h-full w-auto transition-opacity duration-500"
              style={{ opacity: scrolled ? 0 : 1 }}
            />
            <img
              src="/logo-azul.png"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-auto transition-opacity duration-500"
              style={{ opacity: scrolled ? 1 : 0 }}
            />
          </span>
        </a>

        {/* Links de navegación: color adaptativo según el fondo */}
        <div
          className="hidden md:flex items-center gap-8 text-sm font-medium transition-colors duration-500"
          style={{ color: scrolled ? 'rgba(31,41,55,0.85)' : 'rgba(255,255,255,0.9)' }}
        >
          <a href="#modelo" className="hover:opacity-70 transition-opacity">El Modelo</a>
          <a href="#viaje" className="hover:opacity-70 transition-opacity">El Viaje del Paciente</a>
          <a href="#equipo" className="hover:opacity-70 transition-opacity">Equipo</a>
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
      </nav>
    </header>
  )
}
