export default function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-[600px] sm:min-h-[700px] overflow-hidden flex items-center justify-center pt-24 pb-40 sm:pt-20 sm:pb-32">

      {/* ── Video de fondo ── */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          style={{ opacity: 0.85 }}
          src="/hero-video.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Degradado más ligero: deja ver el video pero mantiene legibilidad del texto */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(160deg, rgba(10,79,143,0.35) 0%, rgba(2,18,40,0.45) 55%, rgba(10,79,143,0.25) 100%)',
          }}
        />
        {/* Viñeta sutil para reforzar el contraste del texto central sin tapar el video */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(2,18,40,0) 35%, rgba(2,18,40,0.35) 100%)',
          }}
        />
      </div>

      {/* ── Marca de agua / ruido sutil ── */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 80%, rgba(26,111,196,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(10,79,143,0.12) 0%, transparent 50%)',
        }}
      />

      {/* ── Navbar superior con logo ── */}
      <nav className="absolute top-0 left-0 right-0 z-20 px-4 py-4 sm:px-6 sm:py-5">
        <div className="max-w-6xl mx-auto flex items-center justify-center md:justify-between">
          {/* Logo en chip azul translúcido (glassmorphism) con logo en blanco */}
          <div
            className="flex items-center rounded-2xl px-6 py-3 sm:px-7 sm:py-4"
            style={{
              background: 'rgba(26,111,196,0.55)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.22)',
              boxShadow: '0 4px 20px rgba(2,18,40,0.25)',
            }}
          >
            <img
              src="/logo-blanco.png"
              alt="Hospital Angeles — Centro de Neurociencias Avanzadas"
              className="h-14 sm:h-16 w-auto"
            />
          </div>

          {/* Links de navegación */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/90">
            <a href="#modelo" className="hover:text-white transition-colors">El Modelo</a>
            <a href="#viaje" className="hover:text-white transition-colors">El Viaje del Paciente</a>
            <a href="#equipo" className="hover:text-white transition-colors">Equipo</a>
            <a
              href="#contacto"
              className="px-5 py-2 rounded-full border border-white/30 hover:border-white/60 hover:bg-white/10 transition-all"
            >
              Agendar cita
            </a>
          </div>
        </div>
      </nav>

      {/* ── Contenido central ── */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">

        {/* Eyebrow */}
        <p
          className="animate-fade-in-up delay-200 text-[0.65rem] sm:text-xs font-semibold tracking-[0.2em] sm:tracking-[0.25em] uppercase text-blue-300 mb-3 sm:mb-6"
        >
          Centro de Neurociencias Avanzadas
        </p>

        {/* Título principal */}
        <h1
          className="animate-fade-in-up delay-400 text-white font-bold leading-tight mb-4 sm:mb-6"
          style={{
            fontSize: 'clamp(1.6rem, 6vw, 3.5rem)',
            letterSpacing: '-0.02em',
            textShadow: '0 2px 24px rgba(0,0,0,0.35)',
          }}
        >
          El Nuevo Paradigma:{' '}
          <span
            style={{
              background: 'linear-gradient(90deg, #60a5fa, #93c5fd)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            De la Enfermedad
          </span>{' '}
          a la Salud Cerebral
        </h1>

        {/* Subtítulo */}
        <p
          className="animate-fade-in-up delay-600 text-blue-100 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-6 sm:mb-10"
          style={{ opacity: 0, textShadow: '0 1px 8px rgba(0,0,0,0.4)' }}
        >
          Un ecosistema clínico integrado donde diagnóstico de precisión,
          inteligencia colegiada e innovación terapéutica convergen para
          transformar la neurología en resultados medibles.
        </p>

        {/* CTAs */}
        <div className="animate-fade-in-up delay-800 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center w-full max-w-sm sm:max-w-none mx-auto" style={{ opacity: 0 }}>
          <button
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:py-4 rounded-full font-semibold text-base text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, #1a6fc4 0%, #0a4f8f 100%)',
              boxShadow: '0 4px 24px rgba(10,79,143,0.5)',
            }}
          >
            <span className="relative z-10">Conoce el Modelo</span>
            <svg
              className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            {/* Brillo hover */}
            <span
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: 'linear-gradient(135deg, #2a80d8 0%, #1a5faa 100%)' }}
            />
          </button>

          <button
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:py-4 rounded-full font-semibold text-base text-white border border-white/30 backdrop-blur-sm transition-all duration-300 hover:border-white/60 hover:bg-white/10"
          >
            Ver el equipo
          </button>
        </div>

        {/* Indicador scroll */}
        <div className="animate-fade-in delay-1000 absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 opacity-0">
          <span className="text-white/40 text-xs tracking-widest uppercase">Explorar</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
        </div>
      </div>

      {/* ── Barra inferior con stats ── */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10"
        style={{ background: 'rgba(2,18,40,0.75)', backdropFilter: 'blur(12px)' }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 sm:py-5 grid grid-cols-2 gap-x-4 gap-y-3 sm:flex sm:flex-wrap sm:justify-center sm:gap-x-12 sm:gap-y-4">
          {[
            { value: '+20', label: 'Especialistas Certificados' },
            { value: '4', label: 'Órbitas Clínicas Integradas' },
            { value: '98%', label: 'Satisfacción de Pacientes' },
            { value: 'IA', label: 'Diagnóstico Asistido' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-white font-bold text-xl sm:text-2xl" style={{ letterSpacing: '-0.02em' }}>
                {stat.value}
              </p>
              <p className="text-blue-300 text-[0.7rem] sm:text-xs mt-0.5 leading-tight">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
