// Sección "Revista Digital" — preview editorial (enlaza al Artefacto 03)

const ARTICULOS = [
  { img: '/a3-neurona.png', cat: 'Avances Terapéuticos', catColor: '#1a6fc4', t: 'Estimulación neuronal: nuevas fronteras en el Parkinson', meta: '5 min de lectura' },
  { img: '/a1-conectividad.png', cat: 'Salud Cerebral', catColor: '#059669', t: 'Conectividad cerebral: el nuevo mapa de la mente', meta: '6 min de lectura' },
  { img: '/a3-podcast.png', cat: 'Multimedia', catColor: '#ea580c', t: 'Podcast: hábitos que protegen tu salud cerebral', meta: 'Episodio 04 · 32 min' },
]

export default function Revista() {
  return (
    <section id="revista" className="py-16 sm:py-24 px-4 sm:px-6" style={{ background: '#f7f9fc' }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 gap-4">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-blue-600 mb-3">Revista Digital</p>
            <h2 className="font-bold text-gray-900" style={{ fontSize: 'clamp(1.75rem, 6vw, 2.75rem)', letterSpacing: '-0.02em' }}>
              Conocimiento que transforma
            </h2>
          </div>
          <a href="#contacto" className="text-sm font-semibold text-blue-700 hover:gap-2 inline-flex items-center gap-1 transition-all whitespace-nowrap">
            Ver toda la revista →
          </a>
        </div>

        {/* Destacado */}
        <div className="grid lg:grid-cols-2 gap-5 mb-5">
          <div className="relative rounded-3xl overflow-hidden min-h-[280px] flex items-end"
            style={{ boxShadow: '0 20px 60px rgba(10,79,143,0.15)' }}>
            <img src="/a3-portada.png" alt="Artículo destacado" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(2,18,40,0.92) 10%, rgba(2,18,40,0.2) 60%, transparent)' }} />
            <div className="relative p-7 text-white">
              <span className="inline-block text-[0.65rem] font-bold tracking-wider uppercase px-3 py-1 rounded mb-3" style={{ background: '#1a6fc4' }}>Investigación</span>
              <h3 className="font-bold text-2xl leading-tight">Neuroplasticidad: cómo el cerebro se reconstruye a sí mismo</h3>
              <p className="text-blue-200 text-sm mt-2">8 min de lectura</p>
            </div>
          </div>

          {/* Lista */}
          <div className="flex flex-col gap-4">
            {ARTICULOS.map((a) => (
              <div key={a.t} className="flex gap-4 bg-white rounded-2xl p-4 border border-gray-100 transition-all hover:-translate-y-0.5"
                style={{ boxShadow: '0 4px 16px rgba(10,79,143,0.05)' }}>
                <img src={a.img} alt="" className="w-24 h-20 object-cover rounded-xl flex-shrink-0" />
                <div className="flex flex-col justify-center">
                  <span className="text-[0.65rem] font-bold uppercase tracking-wider" style={{ color: a.catColor }}>{a.cat}</span>
                  <h4 className="font-semibold text-gray-900 text-sm leading-snug mt-1">{a.t}</h4>
                  <p className="text-gray-400 text-xs mt-1">{a.meta}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
