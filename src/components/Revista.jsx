import { useState, useEffect } from 'react'

// Imágenes de marca como respaldo cuando la fuente no trae imagen
const FALLBACK_IMGS = ['/a3-portada.png', '/a3-neurona.png', '/a1-conectividad.png', '/a3-podcast.png', '/a1-hero-brain.png', '/a1-mri.png']

// Contenido de respaldo (si el endpoint no responde, p.ej. en desarrollo local)
const FALLBACK = [
  { title: 'Neuroplasticidad: cómo el cerebro se reconstruye a sí mismo', summary: 'Avances recientes en la capacidad del cerebro para adaptarse y regenerar conexiones.', category: 'Investigación', color: '#1a6fc4', source: 'Centro de Neurociencias', date: null, link: '#', image: '/a3-portada.png' },
  { title: 'Estimulación neuronal: nuevas fronteras en el Parkinson', summary: 'El papel de la neuromodulación en el manejo de los trastornos del movimiento.', category: 'Trastornos del Movimiento', color: '#ea580c', source: 'Centro de Neurociencias', date: null, link: '#', image: '/a3-neurona.png' },
  { title: 'Conectividad cerebral: el nuevo mapa de la mente', summary: 'Cómo la neuroimagen avanzada está redefiniendo el estudio del cerebro.', category: 'Salud Cerebral', color: '#059669', source: 'Centro de Neurociencias', date: null, link: '#', image: '/a1-conectividad.png' },
  { title: 'Hábitos que protegen tu salud cerebral', summary: 'Estrategias de prevención para el envejecimiento cerebral saludable.', category: 'Prevención', color: '#0a4f8f', source: 'Centro de Neurociencias', date: null, link: '#', image: '/a3-podcast.png' },
]

function fmtDate(iso) {
  if (!iso) return null
  try {
    return new Date(iso).toLocaleDateString('es-MX', { day: 'numeric', month: 'short', year: 'numeric' })
  } catch { return null }
}

export default function Revista() {
  const [items, setItems] = useState(FALLBACK)
  const [auto, setAuto] = useState(false)

  useEffect(() => {
    let alive = true
    fetch('/api/noticias')
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((data) => {
        if (alive && data?.items?.length) { setItems(data.items); setAuto(true) }
      })
      .catch(() => {}) // deja el fallback
    return () => { alive = false }
  }, [])

  const featured = items[0]
  const list = items.slice(1, 4)
  const img = (a, i) => a.image || FALLBACK_IMGS[i % FALLBACK_IMGS.length]

  return (
    <section id="revista" className="py-16 sm:py-24 px-4 sm:px-6" style={{ background: '#f7f9fc' }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 gap-4">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-blue-600 mb-3">Revista Digital</p>
            <h2 className="font-bold text-gray-900" style={{ fontSize: 'clamp(1.75rem, 6vw, 2.75rem)', letterSpacing: '-0.02em' }}>
              Conocimiento que transforma
            </h2>
            {auto && (
              <p className="flex items-center gap-2 text-xs text-gray-400 mt-2">
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#059669' }} />
                Curaduría automática de fuentes médicas · se actualiza solo
              </p>
            )}
          </div>
          <a href="#contacto" className="text-sm font-semibold text-blue-700 hover:gap-2 inline-flex items-center gap-1 transition-all whitespace-nowrap">
            Ver toda la revista →
          </a>
        </div>

        <div className="grid lg:grid-cols-2 gap-5 mb-5">
          {/* Destacado */}
          <a href={featured.link} target={featured.link !== '#' ? '_blank' : undefined} rel="noopener noreferrer"
            className="relative rounded-3xl overflow-hidden min-h-[280px] flex items-end group"
            style={{ boxShadow: '0 20px 60px rgba(10,79,143,0.15)' }}>
            <img src={img(featured, 0)} alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(2,18,40,0.94) 12%, rgba(2,18,40,0.25) 60%, transparent)' }} />
            <div className="relative p-7 text-white">
              <span className="inline-block text-[0.65rem] font-bold tracking-wider uppercase px-3 py-1 rounded mb-3" style={{ background: featured.color || '#1a6fc4' }}>{featured.category}</span>
              <h3 className="font-bold text-2xl leading-tight">{featured.title}</h3>
              <p className="text-blue-200 text-sm mt-2 line-clamp-2">{featured.summary}</p>
              <p className="text-blue-300/80 text-xs mt-3">{featured.source}{fmtDate(featured.date) ? ` · ${fmtDate(featured.date)}` : ''}</p>
            </div>
          </a>

          {/* Lista */}
          <div className="flex flex-col gap-4">
            {list.map((a, i) => (
              <a key={a.title} href={a.link} target={a.link !== '#' ? '_blank' : undefined} rel="noopener noreferrer"
                className="flex gap-4 bg-white rounded-2xl p-4 border border-gray-100 transition-all hover:-translate-y-0.5"
                style={{ boxShadow: '0 4px 16px rgba(10,79,143,0.05)' }}>
                <img src={img(a, i + 1)} alt="" className="w-24 h-20 object-cover rounded-xl flex-shrink-0" />
                <div className="flex flex-col justify-center min-w-0">
                  <span className="text-[0.65rem] font-bold uppercase tracking-wider" style={{ color: a.color || '#1a6fc4' }}>{a.category}</span>
                  <h4 className="font-semibold text-gray-900 text-sm leading-snug mt-1 line-clamp-2">{a.title}</h4>
                  <p className="text-gray-400 text-xs mt-1">{a.source}{fmtDate(a.date) ? ` · ${fmtDate(a.date)}` : ''}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
