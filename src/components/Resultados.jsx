// Sección "Resultados / Casos" — métricas de autoridad + testimonios

const KPIS = [
  { v: '+60', l: 'Especialistas Certificados' },
  { v: '4', l: 'Órbitas Clínicas Integradas' },
  { v: '98%', l: 'Satisfacción de Pacientes' },
  { v: 'IA', l: 'Diagnóstico Asistido' },
]

const TESTIMONIOS = [
  { q: 'Un diagnóstico claro y un trato profundamente humano. Recuperé mi movilidad y mi tranquilidad.', a: 'Paciente de cirugía de columna' },
  { q: 'La coordinación entre especialistas hizo que todo el proceso fuera claro y sin sorpresas.', a: 'Familiar de paciente' },
  { q: 'Tecnología de primer nivel con un equipo que realmente escucha. Marcó la diferencia.', a: 'Paciente de neurocirugía' },
]

export default function Resultados() {
  return (
    <section id="resultados" className="py-16 sm:py-24 px-4 sm:px-6" style={{ background: '#ffffff' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-blue-600 mb-3">Resultados</p>
          <h2 className="font-bold text-gray-900 mb-4" style={{ fontSize: 'clamp(1.75rem, 6vw, 2.75rem)', letterSpacing: '-0.02em' }}>
            La autoridad se mide en resultados
          </h2>
        </div>

        {/* KPIs sobre azul profundo (reutiliza patrón del Hero) */}
        <div className="rounded-3xl p-8 sm:p-10 mb-10 grid grid-cols-2 md:grid-cols-4 gap-6"
          style={{ background: 'linear-gradient(145deg,#0a4f8f,#021228)' }}>
          {KPIS.map((k) => (
            <div key={k.l} className="text-center">
              <p className="text-white font-bold" style={{ fontSize: 'clamp(1.8rem,5vw,2.6rem)', letterSpacing: '-0.02em' }}>{k.v}</p>
              <p className="text-blue-300 text-xs sm:text-sm mt-1 leading-tight">{k.l}</p>
            </div>
          ))}
        </div>

        {/* Testimonios */}
        <div className="grid md:grid-cols-3 gap-5">
          {TESTIMONIOS.map((t) => (
            <div key={t.a} className="rounded-2xl p-6" style={{ background: '#f7f9fc', border: '1px solid rgba(10,79,143,0.1)' }}>
              <svg className="w-8 h-8 mb-3" viewBox="0 0 24 24" fill="#1a6fc4" opacity="0.5"><path d="M7 7h4v4c0 3-2 5-4 6l-1-2c1-.5 2-1.5 2-3H7V7zm8 0h4v4c0 3-2 5-4 6l-1-2c1-.5 2-1.5 2-3h-1V7z" /></svg>
              <p className="text-gray-700 text-sm leading-relaxed italic">{t.q}</p>
              <p className="text-gray-400 text-xs mt-4">— {t.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
