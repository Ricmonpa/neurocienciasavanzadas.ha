// Sección "Áreas y Padecimientos"

const AREAS = [
  { t: 'Cirugía de columna', d: 'Técnicas mínimamente invasivas y cirugía robótica de columna vertebral.', icon: (<path d="M12 2v20M8 5h8M8 9h8M8 13h8M8 17h8" />) },
  { t: 'Neurocirugía', d: 'Tumores cerebrales, aneurismas y patología craneal de alta complejidad.', icon: (<path d="M12 3a7 7 0 00-7 7c0 2 1 3 1 5h12c0-2 1-3 1-5a7 7 0 00-7-7z" />) },
  { t: 'Neurología', d: 'Epilepsia, cefaleas, esclerosis y trastornos del movimiento.', icon: (<path d="M4 12h4l2-5 4 10 2-5h4" />) },
  { t: 'Dolor y funcional', d: 'Neuromodulación y manejo integral del dolor crónico.', icon: (<path d="M12 21s-7-4.5-9-9a5 5 0 019-3 5 5 0 019 3c-2 4.5-9 9-9 9z" />) },
  { t: 'Neurofisiología', d: 'Monitoreo neurofisiológico intraoperatorio y estudios diagnósticos.', icon: (<path d="M3 12h3l2 6 4-14 2 8h5" />) },
  { t: 'Rehabilitación', d: 'Neurorrehabilitación para el restablecimiento funcional del paciente.', icon: (<path d="M13 3l-2 6h4l-2 6M6 21a3 3 0 100-6 3 3 0 000 6z" />) },
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
            Atención integral de las principales áreas y condiciones neurológicas, con rutas de
            tratamiento personalizadas para cada paciente.
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
      </div>
    </section>
  )
}
