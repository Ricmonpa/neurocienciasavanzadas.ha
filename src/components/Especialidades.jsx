// Sección "Áreas y Padecimientos" — áreas principales del Documento Rector

const AREAS = [
  { t: 'Enfermedad Vascular Cerebral', d: 'Atención neurovascular aguda y ambulatoria del evento vascular cerebral.', icon: (<path d="M12 21s-7-4.5-9-9a5 5 0 019-3 5 5 0 019 3c-2 4.5-9 9-9 9z" />) },
  { t: 'Cirugía de Columna Vertebral', d: 'Técnicas mínimamente invasivas y cirugía robótica de columna.', icon: (<path d="M12 2v20M8 5h8M8 9h8M8 13h8M8 17h8" />) },
  { t: 'Epilepsia', d: 'Diagnóstico y tratamiento integral con soporte neurofisiológico avanzado.', icon: (<path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />) },
  { t: 'Neurología Cognitiva y Demencias', d: 'Evaluación de memoria y función cognitiva a lo largo del ciclo de vida.', icon: (<path d="M12 3a7 7 0 00-7 7c0 2 1 3 1 5h12c0-2 1-3 1-5a7 7 0 00-7-7z" />) },
  { t: 'Trastornos del Movimiento', d: 'Parkinson, espasticidad y movimientos anormales con análisis de la marcha.', icon: (<path d="M13 3l-2 6h4l-2 6M6 21a3 3 0 100-6 3 3 0 000 6z" />) },
  { t: 'Neurooncología', d: 'Tumores del sistema nervioso con abordaje de tumor board multidisciplinario.', icon: (<path d="M12 3a7 7 0 00-7 7c0 5 7 11 7 11s7-6 7-11a7 7 0 00-7-7z" />) },
]

export default function Especialidades() {
  return (
    <section id="especialidades" className="py-16 sm:py-24 px-4 sm:px-6" style={{ background: '#f7f9fc' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-blue-600 mb-3">Áreas y Padecimientos</p>
          <h2 className="font-bold text-gray-900 mb-4" style={{ fontSize: 'clamp(1.75rem, 6vw, 2.75rem)', letterSpacing: '-0.02em' }}>
            Un centro, todas las neurociencias
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Atención de alta complejidad organizada en <strong className="text-gray-700">22 Clínicas de
            Alta Especialidad</strong>, con rutas de tratamiento personalizadas para cada paciente.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {AREAS.map((a) => (
            <div key={a.t} className="group bg-white rounded-2xl p-6 border border-gray-100 transition-all hover:-translate-y-1"
              style={{ boxShadow: '0 4px 16px rgba(10,79,143,0.05)' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                style={{ background: 'linear-gradient(135deg,#1a6fc4,#0a4f8f)' }}>
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{a.icon}</svg>
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-1">{a.t}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{a.d}</p>
            </div>
          ))}
        </div>

        {/* Programa de Salud Cerebral (medicina preventiva) */}
        <div className="mt-6 rounded-3xl p-6 sm:p-8 grid md:grid-cols-[1fr_auto] gap-6 items-center"
          style={{ background: 'linear-gradient(145deg,#0a4f8f,#021228)', color: '#fff' }}>
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#7fb0e6' }}>Medicina Preventiva</span>
            <h3 className="font-bold text-xl sm:text-2xl mt-1 mb-2">Programa de Salud Cerebral</h3>
            <p className="text-blue-100 text-sm leading-relaxed max-w-2xl">
              Evaluación neurológica preventiva (Brain Health): función cognitiva y memoria, equilibrio y
              sistema vestibular, función auditiva y factores de riesgo — para la detección temprana y el
              envejecimiento cerebral saludable.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 md:justify-end">
            {['Cognición', 'Equilibrio', 'Audición', 'Prevención'].map((c) => (
              <span key={c} className="text-xs font-medium px-3 py-1.5 rounded-full text-white"
                style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.18)' }}>{c}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
