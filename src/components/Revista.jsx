import { useState, useEffect } from 'react'

// Artículos editoriales propios del Centro (Fase 2: vendrán del CMS)
const ARTICULOS = [
  {
    title: '¿Qué es la cirugía robótica de columna y cómo elimina el dolor de espalda?',
    excerpt: 'Cirugía mínimamente invasiva con el robot Mazor X, liderada por el Dr. José Antonio Soriano Sánchez: menos dolor, menos analgésicos y recuperación el mismo día.',
    image: '/articulos/cirugia-robotica-columna.jpg',
    link: '/articulos/cirugia-robotica-de-columna.html',
    category: 'Cirugía de Columna',
    author: 'Priscila Alvarado Solana',
  },
]

// Imágenes de marca como respaldo cuando la fuente no trae imagen
const FALLBACK_IMGS = ['/a3-portada.png', '/a3-neurona.png', '/a1-conectividad.png', '/a3-podcast.png', '/a1-hero-brain.png', '/a1-mri.png']

const FALLBACK_NEWS = [
  { title: 'Neuroplasticidad: cómo el cerebro se reconstruye a sí mismo', summary: 'Avances recientes en la capacidad del cerebro para adaptarse y regenerar conexiones.', category: 'Investigación', color: '#1a6fc4', source: 'Centro de Neurociencias', date: null, link: '#', image: '/a3-portada.png' },
  { title: 'Estimulación neuronal: nuevas fronteras en el Parkinson', summary: 'El papel de la neuromodulación en el manejo de los trastornos del movimiento.', category: 'Trastornos del Movimiento', color: '#ea580c', source: 'Centro de Neurociencias', date: null, link: '#', image: '/a3-neurona.png' },
  { title: 'Conectividad cerebral: el nuevo mapa de la mente', summary: 'Cómo la neuroimagen avanzada está redefiniendo el estudio del cerebro.', category: 'Salud Cerebral', color: '#059669', source: 'Centro de Neurociencias', date: null, link: '#', image: '/a1-conectividad.png' },
]

function fmtDate(iso) {
  if (!iso) return null
  try { return new Date(iso).toLocaleDateString('es-MX', { day: 'numeric', month: 'short', year: 'numeric' }) } catch { return null }
}

export default function Revista() {
  const [news, setNews] = useState(FALLBACK_NEWS)
  const [auto, setAuto] = useState(false)

  useEffect(() => {
    let alive = true
    fetch('/api/noticias')
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((data) => { if (alive && data?.items?.length) { setNews(data.items); setAuto(true) } })
      .catch(() => {})
    return () => { alive = false }
  }, [])

  const destacado = ARTICULOS[0]
  const newsList = news.slice(0, 3)
  const img = (a, i) => a.image || FALLBACK_IMGS[i % FALLBACK_IMGS.length]

  return (
    <section id="revista" className="py-16 sm:py-24 px-4 sm:px-6" style={{ background: '#f7f9fc' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-blue-600 mb-3">Revista Digital</p>
          <h2 className="font-bold text-gray-900" style={{ fontSize: 'clamp(1.75rem, 6vw, 2.75rem)', letterSpacing: '-0.02em' }}>
            Conocimiento que transforma
          </h2>
        </div>

        {/* ── Artículos del Centro (editorial propio) ── */}
        <p className="text-xs font-semibold tracking-[0.18em] uppercase text-blue-600 mb-4">Artículos del Centro</p>
        <a href={destacado.link}
          className="group grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden bg-white border border-gray-100 mb-12"
          style={{ boxShadow: '0 20px 60px rgba(10,79,143,0.12)' }}>
          <div className="relative min-h-[220px] overflow-hidden">
            <img src={destacado.image} alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>
          <div className="p-7 sm:p-9 flex flex-col justify-center">
            <span className="inline-block self-start text-[0.65rem] font-bold tracking-wider uppercase px-3 py-1 rounded mb-3 text-white" style={{ background: '#0a4f8f' }}>
              {destacado.category}
            </span>
            <h3 className="font-bold text-gray-900 text-xl sm:text-2xl leading-tight" style={{ letterSpacing: '-0.01em' }}>
              {destacado.title}
            </h3>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mt-3">{destacado.excerpt}</p>
            <div className="flex items-center justify-between mt-5">
              <span className="text-xs text-gray-400">Por {destacado.author}</span>
              <span className="text-sm font-semibold text-blue-700 inline-flex items-center gap-1 group-hover:gap-2 transition-all">Leer artículo →</span>
            </div>
          </div>
        </a>

        {/* ── Noticias de neurociencia (curadas) ── */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-blue-600">Noticias de Neurociencia</p>
          {auto && (
            <span className="flex items-center gap-2 text-xs text-gray-400">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#059669' }} />
              Actualización automática
            </span>
          )}
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          {newsList.map((a, i) => (
            <a key={a.title} href={a.link} target={a.link !== '#' ? '_blank' : undefined} rel="noopener noreferrer"
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 transition-all hover:-translate-y-1 flex flex-col"
              style={{ boxShadow: '0 4px 16px rgba(10,79,143,0.05)' }}>
              <img src={img(a, i)} alt="" className="w-full h-36 object-cover" />
              <div className="p-5 flex flex-col flex-1">
                <span className="text-[0.65rem] font-bold uppercase tracking-wider" style={{ color: a.color || '#1a6fc4' }}>{a.category}</span>
                <h4 className="font-semibold text-gray-900 text-sm leading-snug mt-1.5 flex-1">{a.title}</h4>
                <p className="text-gray-400 text-xs mt-2">{a.source}{fmtDate(a.date) ? ` · ${fmtDate(a.date)}` : ''}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
