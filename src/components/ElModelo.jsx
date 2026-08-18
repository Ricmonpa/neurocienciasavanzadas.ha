// Sección "El Modelo" — manifiesto + diferenciadores clínicos

const DIFERENCIADORES = [
  {
    t: 'Diagnóstico de precisión',
    d: 'Neuroimagen de alta resolución e inteligencia artificial para ver lo que antes era invisible.',
    icon: (<path d="M11 3a8 8 0 105.3 14l4.4 4.4 1.4-1.4-4.4-4.4A8 8 0 0011 3zm0 2a6 6 0 110 12 6 6 0 010-12z" />),
  },
  {
    t: 'Inteligencia colegiada',
    d: 'Un cuerpo médico multidisciplinario que decide en conjunto el mejor camino para cada paciente.',
    icon: (<path d="M12 2a5 5 0 00-5 5c0 2 1 3 1 5H8a4 4 0 108 0h0c0-2 1-3 1-5a5 5 0 00-5-5zm-3 18h6v2H9v-2z" />),
  },
  {
    t: 'Innovación terapéutica',
    d: 'Cirugía robótica y técnicas mínimamente invasivas que reducen riesgos y aceleran la recuperación.',
    icon: (<path d="M12 2l2.5 5 5.5.8-4 3.9.9 5.5L12 20l-4.9 2.6.9-5.5-4-3.9L9.5 7z" />),
  },
]

export default function ElModelo() {
  return (
    <section id="modelo" className="py-16 sm:py-24 px-4 sm:px-6" style={{ background: '#ffffff' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Manifiesto */}
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-blue-600 mb-4">El Modelo</p>
            <h2 className="font-bold text-gray-900 mb-5" style={{ fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              No tratamos enfermedades.<br />
              <span style={{ background: 'linear-gradient(90deg,#1a6fc4,#0a4f8f)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Cuidamos la salud cerebral.
              </span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4">
              El Centro de Neurociencias Avanzadas nace de un cambio de paradigma: pasar de la reacción
              ante la enfermedad a la <strong className="text-gray-800">gestión integral de la salud cerebral</strong>.
            </p>
            <p className="text-gray-500 text-base leading-relaxed">
              Integramos diagnóstico, decisión colegiada e innovación terapéutica en un solo ecosistema
              clínico, donde cada especialidad converge alrededor del paciente.
            </p>
            <a href="#viaje" className="inline-flex items-center gap-2 mt-7 px-7 py-3.5 rounded-full font-semibold text-white transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg,#1a6fc4,#0a4f8f)', boxShadow: '0 6px 20px rgba(10,79,143,0.4)' }}>
              Conoce el viaje del paciente →
            </a>
          </div>

          {/* Visual + diferenciadores */}
          <div>
            <div className="rounded-3xl overflow-hidden mb-6" style={{ boxShadow: '0 20px 60px rgba(10,79,143,0.15)' }}>
              <img src="/a1-hero-brain.png" alt="Salud cerebral" className="w-full h-52 sm:h-64 object-cover" />
            </div>
            <div className="space-y-3">
              {DIFERENCIADORES.map((d) => (
                <div key={d.t} className="flex items-start gap-4 p-4 rounded-2xl" style={{ background: '#f7f9fc', border: '1px solid rgba(10,79,143,0.08)' }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg,#1a6fc422,#0a4f8f11)' }}>
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#1a6fc4">{d.icon}</svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">{d.t}</h3>
                    <p className="text-gray-500 text-sm leading-snug mt-0.5">{d.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
