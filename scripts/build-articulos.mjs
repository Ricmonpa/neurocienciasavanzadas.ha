// Genera las páginas estáticas de "Artículos del Centro" desde Sanity.
// Corre después de `vite build` y escribe en dist/:
//   dist/articulos/<slug>.html   — una página por artículo publicado
//   dist/articulos/index.json    — listado que consume la sección Revista
//   dist/sitemap.xml             — home + artículos
//
// Proyecto Sanity: e3spfcgz / production (sobrescribible con SANITY_PROJECT_ID / SANITY_DATASET).
// Si Sanity falla, el build falla a propósito: Vercel mantiene el deploy anterior
// en vez de publicar un sitio sin artículos.
//
// Uso local sin Sanity: node scripts/build-articulos.mjs --local
// (renderiza el contenido de scripts/contenido-inicial.mjs para revisar el diseño)
import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { createClient } from '@sanity/client'
import { renderArticulo, imgUrl, SITE } from './articulo-template.mjs'

const OUT = path.resolve(process.argv.includes('--out') ? process.argv[process.argv.indexOf('--out') + 1] : 'dist')

const QUERY = `*[_type == "articulo" && defined(slug.current) && !(_id in path("drafts.**"))] | order(fecha desc) {
  _id, _updatedAt, titulo, "slug": slug.current, categoria, fecha, extracto,
  tituloSeo, descripcionSeo, temaMedico, ctaTitulo, ctaTexto, faq,
  "portada": { "url": portada.asset->url, "alt": portada.alt },
  "autor": autor->{ nombre, rol, medio, bio, enlace, textoEnlace, "foto": foto.asset->url },
  cuerpo[]{ ..., _type == "image" => { ..., "url": asset->url } }
}`

async function obtenerArticulos() {
  if (process.argv.includes('--local')) {
    const { articuloLocal } = await import('./contenido-inicial.mjs')
    return [articuloLocal()]
  }
  const client = createClient({
    projectId: process.env.SANITY_PROJECT_ID || 'e3spfcgz',
    dataset: process.env.SANITY_DATASET || 'production',
    apiVersion: '2025-02-19',
    useCdn: false, // siempre lo recién publicado (el webhook dispara el build al instante)
  })
  return client.fetch(QUERY)
}

const articulos = await obtenerArticulos()

const dir = path.join(OUT, 'articulos')
await mkdir(dir, { recursive: true })

for (const a of articulos) {
  if (!/^[a-z0-9-]+$/.test(a.slug)) {
    console.warn(`[articulos] slug inválido, se omite: "${a.slug}"`)
    continue
  }
  await writeFile(path.join(dir, `${a.slug}.html`), renderArticulo(a))
  console.log(`[articulos] ✓ /articulos/${a.slug}.html`)
}

const indice = articulos.map((a) => ({
  title: a.titulo,
  excerpt: a.extracto,
  image: imgUrl(a.portada?.url, 1200),
  link: `/articulos/${a.slug}.html`,
  category: a.categoria,
  author: a.autor?.nombre || '',
  date: a.fecha,
}))
await writeFile(path.join(dir, 'index.json'), JSON.stringify({ items: indice }))

const urls = [`${SITE}/`, ...articulos.map((a) => `${SITE}/articulos/${a.slug}.html`)]
const lastmod = Object.fromEntries(articulos.map((a) => [`${SITE}/articulos/${a.slug}.html`, (a._updatedAt || a.fecha || '').slice(0, 10)]))
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u}</loc>${lastmod[u] ? `<lastmod>${lastmod[u]}</lastmod>` : ''}</url>`).join('\n')}
</urlset>
`
await writeFile(path.join(OUT, 'sitemap.xml'), sitemap)
console.log(`[articulos] ${articulos.length} artículo(s) + index.json + sitemap.xml`)
