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
        {/* Logo sin fondo. Arriba: logo blanco (sobre el hero oscuro).
            Scroll: logo azul para legibilidad sobre la sección blanca. */}
        <a href="#top" className="flex items-center transition-all duration-500">
          {/* Dos imágenes superpuestas con fundido cruzado para cambiar de color sin parpadeo.
              Sombra sutil solo arriba, para que el logo blanco se lea sobre el video. */}
          <span
            className="relative inline-flex h-11 sm:h-14 transition-all duration-500"
            style={{ filter: scrolled ? 'none' : 'drop-shadow(0 2px 10px rgba(2,18,40,0.45))' }}
          >
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
