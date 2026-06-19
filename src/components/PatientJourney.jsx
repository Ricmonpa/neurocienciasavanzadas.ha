import { useState } from 'react'

const ORBITAS = [
  {
    id: '01',
    nombre: 'Diagnóstico de Precisión',
    tagline: 'Ver más allá de los síntomas',
    descripcion:
      'Integración de neuroimagen de ultra-alta resolución, biomarcadores genómicos y evaluación neuropsicológica computarizada para construir el perfil cerebral único de cada paciente.',
    tecnologias: ['MRI 7T funcional', 'PET metabólico', 'Genómica neurológica', 'IA diagnóstica'],
    color: '#0a4f8f',
    colorLight: '#e8f1fb',
    colorAccent: '#1a6fc4',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
        <circle cx="24" cy="24" r="10" strokeWidth="1.5" />
        <circle cx="24" cy="24" r="18" strokeWidth="1" strokeDasharray="3 2" />
        <line x1="24" y1="6" x2="24" y2="14" strokeWidth="2" />
        <line x1="24" y1="34" x2="24" y2="42" strokeWidth="2" />
        <line x1="6" y1="24" x2="14" y2="24" strokeWidth="2" />
        <line x1="34" y1="24" x2="42" y2="24" strokeWidth="2" />
        <circle cx="24" cy="24" r="3" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: '02',
    nombre: 'Inteligencia Colegiada',
    tagline: 'La suma de mentes expertas',
    descripcion:
      'Comités multidisciplinarios donde neurólogos, neurocirujanos, neuropsicólogos y especialistas en IA deliberan de forma estructurada para diseñar el plan terapéutico óptimo.',
    tecnologias: ['Tumor boards digitales', 'Segunda opinión IA', 'Colaboración remota', 'Protocolos evidence-based'],
    color: '#065f46',
    colorLight: '#ecfdf5',
    colorAccent: '#059669',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
        <circle cx="24" cy="16" r="5" />
        <circle cx="10" cy="32" r="4" />
        <circle cx="38" cy="32" r="4" />
        <line x1="24" y1="21" x2="14" y2="28" strokeWidth="1.5" />
        <line x1="24" y1="21" x2="34" y2="28" strokeWidth="1.5" />
        <line x1="14" y1="32" x2="34" y2="32" strokeWidth="1.5" strokeDasharray="3 2" />
        <circle cx="24" cy="16" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: '03',
    nombre: 'Innovación Terapéutica',
    tagline: 'Tratamientos del futuro, hoy',
    descripcion:
      'Acceso a protocolos de vanguardia: neurocirugía mínimamente invasiva guiada por IA, estimulación cerebral de última generación y terapias génicas en fase de implementación clínica.',
    tecnologias: ['Neurocirugía robótica', 'DBS adaptativo', 'Inmunoterapia neurológica', 'Ensayos clínicos fase III'],
    color: '#7c2d12',
    colorLight: '#fff7ed',
    colorAccent: '#ea580c',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
        <path d="M12 36 L24 8 L36 36" strokeLinejoin="round" />
        <path d="M16 28 L32 28" />
        <circle cx="24" cy="38" r="3" />
        <path d="M20 20 Q24 16 28 20" fill="none" />
      </svg>
    ),
  },
  {
    id: '04',
    nombre: 'Restablecimiento',
    tagline: 'Recuperar la vida plena',
    descripcion:
      'Programa de neurorrehabilitación personalizada que combina plasticidad cerebral guiada, tecnología de asistencia cognitiva y seguimiento longitudinal para medir la recuperación funcional real.',
    tecnologias: ['Neuroplasticidad dirigida', 'BCI rehabilitadores', 'Psicología neurológica', 'Seguimiento 5 años'],
    color: '#4c1d95',
    colorLight: '#f5f3ff',
    colorAccent: '#7c3aed',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
        <path d="M8 30 Q16 10 24 22 Q32 34 40 14" strokeLinecap="round" />
        <circle cx="40" cy="14" r="3" fill="currentColor" />
        <path d="M8 42 L40 42" strokeWidth="1" strokeDasharray="2 2" />
      </svg>
    ),
  },
]

function OrbitaCard({ orbita, index, isActive, onClick }) {
  const delay = index * 150

  return (
    <button
      onClick={onClick}
      className="orbit-card group relative text-left w-full transition-all duration-500 focus:outline-none"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Número de paso — línea conectora */}
      <div className="flex items-start gap-3 sm:gap-5">
        {/* Columna izquierda: número + línea vertical */}
        <div className="flex flex-col items-center flex-shrink-0 pt-1">
          <div
            className="orbit-icon w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm transition-all duration-300 group-hover:scale-110"
            style={{
              background: isActive
                ? `linear-gradient(135deg, ${orbita.colorAccent}, ${orbita.color})`
                : '#e5e7eb',
              color: isActive ? 'white' : orbita.colorAccent,
            }}
          >
            {orbita.id}
          </div>
          {index < ORBITAS.length - 1 && (
            <div
              className="w-px flex-1 mt-3 transition-all duration-700"
              style={{
                minHeight: '40px',
                background: isActive
                  ? `linear-gradient(to bottom, ${orbita.colorAccent}, transparent)`
                  : '#e5e7eb',
              }}
            />
          )}
        </div>

        {/* Contenido principal */}
        <div
          className="flex-1 min-w-0 rounded-2xl p-4 sm:p-6 transition-all duration-400 mb-4 border"
          style={{
            background: isActive ? orbita.colorLight : '#f9fafb',
            borderColor: isActive ? orbita.colorAccent + '40' : '#f3f4f6',
            boxShadow: isActive
              ? `0 8px 32px ${orbita.color}18, 0 2px 8px ${orbita.color}10`
              : '0 1px 4px rgba(0,0,0,0.04)',
          }}
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-3">
            <div>
              <p
                className="text-xs font-semibold tracking-widest uppercase mb-1"
                style={{ color: orbita.colorAccent }}
              >
                Órbita {orbita.id}
              </p>
              <h3
                className="font-bold text-xl leading-tight"
                style={{ color: orbita.color }}
              >
                {orbita.nombre}
              </h3>
              <p className="text-sm text-gray-500 mt-0.5">{orbita.tagline}</p>
            </div>
            <div
              className="w-10 h-10 flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
              style={{ color: orbita.colorAccent }}
            >
              {orbita.icon}
            </div>
          </div>

          {/* Descripción expandible */}
          <div
            className="overflow-hidden transition-all duration-500"
            style={{ maxHeight: isActive ? '520px' : '0px', opacity: isActive ? 1 : 0 }}
          >
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              {orbita.descripcion}
            </p>
            <div className="flex flex-wrap gap-2">
              {orbita.tecnologias.map((tec) => (
                <span
                  key={tec}
                  className="inline-block px-3 py-1 rounded-full text-xs font-medium"
                  style={{
                    background: orbita.colorAccent + '18',
                    color: orbita.color,
                    border: `1px solid ${orbita.colorAccent}30`,
                  }}
                >
                  {tec}
                </span>
              ))}
            </div>
          </div>

          {/* Indicador de expandir cuando no está activo */}
          {!isActive && (
            <p className="text-xs text-gray-400 mt-2 flex items-center gap-1">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              Ver detalle
            </p>
          )}
        </div>
      </div>
    </button>
  )
}

export default function PatientJourney() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6" style={{ background: '#ffffff' }}>
      <div className="max-w-6xl mx-auto">

        {/* Encabezado de sección */}
        <div className="text-center mb-10 sm:mb-16">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-blue-600 mb-3">
            Metodología
          </p>
          <h2
            className="font-bold text-gray-900 mb-4"
            style={{ fontSize: 'clamp(1.75rem, 6vw, 2.75rem)', letterSpacing: '-0.02em' }}
          >
            El Viaje del Paciente
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Cuatro Órbitas clínicas que se intersectan para garantizar que cada
            paciente recibe el tratamiento correcto en el momento preciso.
          </p>

          {/* Divider decorativo */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-300" />
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-blue-300" />
          </div>
        </div>

        {/* Layout de dos columnas: accordion izquierda + visual derecha */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* Columna izquierda: Órbitas accordion */}
          <div className="space-y-0">
            {ORBITAS.map((orbita, i) => (
              <OrbitaCard
                key={orbita.id}
                orbita={orbita}
                index={i}
                isActive={activeIndex === i}
                onClick={() => setActiveIndex(i === activeIndex ? -1 : i)}
              />
            ))}
          </div>

          {/* Columna derecha: visualización dinámica (oculta en móvil: el acordeón ya muestra el detalle) */}
          <div className="hidden lg:block lg:sticky lg:top-8">
            <div
              className="relative rounded-3xl overflow-hidden"
              style={{
                background: `linear-gradient(145deg, ${ORBITAS[activeIndex]?.colorLight || '#f0f4ff'}, #ffffff)`,
                border: `1px solid ${ORBITAS[activeIndex]?.colorAccent || '#1a6fc4'}20`,
                minHeight: '420px',
                boxShadow: `0 20px 60px ${ORBITAS[activeIndex]?.color || '#0a4f8f'}12`,
                transition: 'all 0.5s ease',
              }}
            >
              {ORBITAS[activeIndex] && (
                <div className="p-10 flex flex-col justify-between h-full" style={{ minHeight: '420px' }}>

                  {/* Número grande de fondo */}
                  <div
                    className="absolute top-6 right-8 font-black select-none pointer-events-none"
                    style={{
                      fontSize: '120px',
                      lineHeight: 1,
                      color: ORBITAS[activeIndex].colorAccent + '0d',
                      letterSpacing: '-0.04em',
                    }}
                  >
                    {ORBITAS[activeIndex].id}
                  </div>

                  {/* Icono grande */}
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                    style={{
                      background: `linear-gradient(135deg, ${ORBITAS[activeIndex].colorAccent}22, ${ORBITAS[activeIndex].color}11)`,
                      color: ORBITAS[activeIndex].colorAccent,
                    }}
                  >
                    {ORBITAS[activeIndex].icon}
                  </div>

                  <div className="relative z-10">
                    <p
                      className="text-xs font-semibold tracking-widest uppercase mb-2"
                      style={{ color: ORBITAS[activeIndex].colorAccent }}
                    >
                      Órbita {ORBITAS[activeIndex].id} de 4
                    </p>
                    <h3
                      className="font-bold text-3xl mb-3 leading-tight"
                      style={{ color: ORBITAS[activeIndex].color, letterSpacing: '-0.02em' }}
                    >
                      {ORBITAS[activeIndex].nombre}
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed mb-8">
                      {ORBITAS[activeIndex].descripcion}
                    </p>

                    {/* Progress de órbitas */}
                    <div className="flex gap-2 mb-6">
                      {ORBITAS.map((o, i) => (
                        <button
                          key={o.id}
                          onClick={() => setActiveIndex(i)}
                          className="flex-1 h-1.5 rounded-full transition-all duration-300"
                          style={{
                            background:
                              i === activeIndex
                                ? ORBITAS[activeIndex].colorAccent
                                : i < activeIndex
                                ? ORBITAS[activeIndex].colorAccent + '50'
                                : '#e5e7eb',
                          }}
                        />
                      ))}
                    </div>

                    {/* Navegación */}
                    <div className="flex justify-between items-center">
                      <button
                        onClick={() => setActiveIndex((prev) => Math.max(0, prev - 1))}
                        disabled={activeIndex === 0}
                        className="flex items-center gap-2 text-sm font-medium transition-opacity disabled:opacity-30"
                        style={{ color: ORBITAS[activeIndex].colorAccent }}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Anterior
                      </button>
                      <button
                        onClick={() =>
                          setActiveIndex((prev) => Math.min(ORBITAS.length - 1, prev + 1))
                        }
                        disabled={activeIndex === ORBITAS.length - 1}
                        className="flex items-center gap-2 text-sm font-medium transition-opacity disabled:opacity-30"
                        style={{ color: ORBITAS[activeIndex].colorAccent }}
                      >
                        Siguiente
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Label de estado */}
            <p className="text-center text-xs text-gray-400 mt-4">
              Selecciona una Órbita en el panel izquierdo para explorar el detalle
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
