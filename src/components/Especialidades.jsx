// Sección "Áreas y Padecimientos" — las 22 Clínicas de Alta Especialidad (Documento Rector)

const VERTICALES = [
  'Cefaleas y Dolor Facial',
  'Cirugía de Columna Vertebral',
  'Neurología Cognitiva y Demencias',
  'Epilepsia',
  'Espasticidad',
  'Movimientos Anormales',
  'Neuromuscular y Disautonomía',
  'Neuroinmunología y Desmielinizantes',
  'Neurooncología',
  'Neurotología y Audiología',
  'Neurovascular (Agudo y Ambulatorio)',
  'Neuropediatría',
]

const TRANSVERSALES = [
  'Algología y Cuidados Paliativos',
  'Psiquiatría y Neuropsiquiatría',
  'Neurogenética y Genética Médica',
  'Radioterapia y Radiocirugía · Gamma Knife',
  'Neurorrehabilitación',
  'Neuroimagen y Neurosonología',
  'Medicina Nuclear e Imagen Molecular',
  'Neuropatología',
  'Neuroendocrinología',
  'Trastornos del Sueño',
]

function ClinicaGrid({ items, color, colorSoft }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {items.map((name, i) => (
        <div key={name} className="flex items-center gap-3 bg-white rounded-xl p-4 border border-gray-100 transition-all hover:-translate-y-0.5"
          style={{ boxShadow: '0 4px 14px rgba(10,79,143,0.05)' }}>
          <span className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
            style={{ background: colorSoft, color }}>
            {String(i + 1).padStart(2, '0')}
          </span>
          <span className="font-semibold text-gray-800 text-sm leading-tight">{name}</span>
        </div>
      ))}
    </div>
  )
}

export default function Especialidades() {
  return (
    <section id="especialidades" className="py-16 sm:py-24 px-4 sm:px-6" style={{ background: '#f7f9fc' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-blue-600 mb-3">Áreas y Padecimientos</p>
          <h2 className="font-bold text-gray-900 mb-4" style={{ fontSize: 'clamp(1.75rem, 6vw, 2.75rem)', letterSpacing: '-0.02em' }}>
            22 Clínicas de Alta Especialidad
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Un modelo único que integra <strong className="text-gray-700">12 clínicas verticales</strong> y
            <strong className="text-gray-700"> 10 transversales</strong>, con rutas de tratamiento
            personalizadas para cada paciente.
          </p>
        </div>

        {/* Verticales */}
        <div className="flex items-baseline justify-between mb-4">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-blue-600">Clínicas Verticales</p>
          <span className="text-xs text-gray-400 font-medium">12</span>
        </div>
        <ClinicaGrid items={VERTICALES} color="#0a4f8f" colorSoft="#e8f1fb" />

        {/* Transversales */}
        <div className="flex items-baseline justify-between mb-4 mt-10">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase" style={{ color: '#059669' }}>Clínicas Transversales</p>
          <span className="text-xs text-gray-400 font-medium">10</span>
        </div>
        <ClinicaGrid items={TRANSVERSALES} color="#059669" colorSoft="#ecfdf5" />

        {/* Programa de Salud Cerebral (medicina preventiva) */}
        <div className="mt-12 rounded-3xl p-6 sm:p-8 grid md:grid-cols-[1fr_auto] gap-6 items-center"
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
