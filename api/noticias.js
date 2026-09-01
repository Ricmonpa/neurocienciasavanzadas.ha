// Endpoint serverless (Vercel) — curaduría de noticias médicas.
// Lee feeds RSS de fuentes de prestigio, extrae título/resumen/imagen/enlace y los
// devuelve como JSON. Se auto-actualiza vía caché de Vercel (s-maxage + SWR).
import Parser from 'rss-parser'

const parser = new Parser({
  timeout: 8000,
  customFields: {
    item: [
      ['media:content', 'mediaContent', { keepArray: true }],
      ['media:thumbnail', 'mediaThumb'],
      ['content:encoded', 'contentEncoded'],
    ],
  },
  headers: { 'User-Agent': 'Mozilla/5.0 (compatible; CentroNeurociencias/1.0; +https://centroneurociencias.org)' },
})

// Fuentes confiables (whitelist). Cada una con su categoría y color de acento.
const FEEDS = [
  { source: 'ScienceDaily', url: 'https://www.sciencedaily.com/rss/mind_brain/neuroscience.xml', cat: 'Neurociencia', color: '#1a6fc4' },
  { source: 'ScienceDaily', url: 'https://www.sciencedaily.com/rss/mind_brain/stroke.xml', cat: 'Vascular Cerebral', color: '#059669' },
  { source: 'ScienceDaily', url: 'https://www.sciencedaily.com/rss/mind_brain/dementia.xml', cat: 'Demencias', color: '#7c3aed' },
  { source: 'ScienceDaily', url: "https://www.sciencedaily.com/rss/mind_brain/parkinson's.xml", cat: 'Trastornos del Movimiento', color: '#ea580c' },
  { source: 'ScienceDaily', url: "https://www.sciencedaily.com/rss/mind_brain/alzheimer's.xml", cat: 'Alzheimer', color: '#7c3aed' },
  { source: 'ScienceDaily', url: 'https://www.sciencedaily.com/rss/mind_brain/epilepsy.xml', cat: 'Epilepsia', color: '#0a4f8f' },
]

const SKIP_TITLE = /^(author|publisher) correction|^editorial|^erratum|^retraction/i

function extractImage(item) {
  if (item.enclosure?.url && /image/i.test(item.enclosure.type || 'image')) return item.enclosure.url
  if (item.mediaThumb?.$?.url) return item.mediaThumb.$.url
  if (Array.isArray(item.mediaContent)) {
    const img = item.mediaContent.find((m) => /image/i.test(m?.$?.medium || m?.$?.type || ''))
    if (img?.$?.url) return img.$.url
  }
  const html = item.contentEncoded || item.content || ''
  const m = html.match(/<img[^>]+src=["']([^"']+)["']/i)
  return m ? m[1] : null
}

function clean(text = '', max = 180) {
  const t = text.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim()
  return t.length > max ? t.slice(0, max).replace(/\s+\S*$/, '') + '…' : t
}

export default async function handler(req, res) {
  const results = await Promise.allSettled(FEEDS.map((f) => parser.parseURL(f.url).then((feed) => ({ f, feed }))))

  let items = []
  for (const r of results) {
    if (r.status !== 'fulfilled') continue
    const { f, feed } = r.value
    for (const it of feed.items.slice(0, 6)) {
      items.push({
        title: it.title?.trim() || '',
        summary: clean(it.contentSnippet || it.summary || it.content || ''),
        image: extractImage(it),
        link: it.link || '',
        date: it.isoDate || it.pubDate || null,
        source: f.source,
        category: f.cat,
        color: f.color,
      })
    }
  }

  // Dedupe por título y ordena por fecha (más reciente primero)
  const seen = new Set()
  items = items
    .filter((a) => a.title && a.link && a.summary.length > 40 && !SKIP_TITLE.test(a.title))
    .filter((a) => !seen.has(a.title) && seen.add(a.title))
    .sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0))
    .slice(0, 9)

  // Caché en el edge de Vercel: fresco 1h, sirve stale mientras revalida (auto-update)
  res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400')
  res.status(200).json({ updatedAt: new Date().toISOString(), count: items.length, items })
}
