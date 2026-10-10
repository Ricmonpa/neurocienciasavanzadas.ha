// Plantilla HTML de un "Artículo del Centro". Replica el diseño y SEO del artículo
// original (public/articulos/cirugia-robotica-de-columna.html): meta + Open Graph +
// JSON-LD MedicalWebPage + FAQPage.
import { toHTML, escapeHTML } from '@portabletext/to-html'

export const SITE = 'https://www.centroneurociencias.org'
const SITE_NAME = 'Centro de Neurociencias Avanzadas'
const PUBLISHER = 'Centro de Neurociencias Avanzadas — Hospital Ángeles Pedregal'

const esc = (s) => escapeHTML(String(s ?? ''))
// JSON dentro de <script>: evita que "</script>" en el contenido cierre la etiqueta
const jsonLd = (obj) => JSON.stringify(obj, null, 2).replace(/</g, '\\u003c')

// URL de imagen del CDN de Sanity con tamaño/formato fijos
export const imgUrl = (url, w) => (url ? `${url}?w=${w}&fm=jpg&q=80&fit=max` : null)

function minutosLectura(bloques, faq) {
  const texto = (bloques || [])
    .filter((b) => b._type === 'block')
    .map((b) => (b.children || []).map((c) => c.text).join(''))
    .concat((faq || []).map((f) => `${f.pregunta} ${f.respuesta}`))
    .join(' ')
  const palabras = texto.split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(palabras / 200))
}

const ptComponents = {
  block: {
    lead: ({ children }) => `<p class="lead">${children}</p>`,
    h2: ({ children }) => `<h2>${children}</h2>`,
    h3: ({ children }) => `<h3>${children}</h3>`,
    blockquote: ({ children }) => `<blockquote>${children}</blockquote>`,
  },
  list: {
    bullet: ({ children }) => `<ul class="steps">${children}</ul>`,
    number: ({ children }) => `<ol class="num">${children}</ol>`,
  },
  marks: {
    link: ({ children, value }) => {
      const href = value?.href || '#'
      const ext = /^https?:\/\//.test(href) && !href.startsWith(SITE)
      return `<a href="${esc(href)}"${ext ? ' target="_blank" rel="noopener"' : ''}>${children}</a>`
    },
  },
  types: {
    image: ({ value }) => {
      if (!value?.url) return ''
      const pie = value.pie ? `<figcaption>${esc(value.pie)}</figcaption>` : ''
      return `<figure class="fig"><img src="${esc(imgUrl(value.url, 1440))}" alt="${esc(value.alt)}" loading="lazy" />${pie}</figure>`
    },
  },
}

export function renderArticulo(a) {
  const url = `${SITE}/articulos/${a.slug}.html`
  const titulo = a.titulo
  const tituloSeo = a.tituloSeo || titulo
  const descripcion = a.descripcionSeo || a.extracto
  const portada = imgUrl(a.portada?.url, 1600)
  const autor = a.autor || {}
  const faq = (a.faq || []).filter((f) => f?.pregunta && f?.respuesta)
  const minutos = minutosLectura(a.cuerpo, faq)
  const ctaTitulo = a.ctaTitulo || '¿Quieres una valoración?'
  const ctaTexto = a.ctaTexto || 'Agenda una cita con los especialistas del Centro de Neurociencias Avanzadas.'

  const graph = [
    {
      '@type': 'MedicalWebPage',
      headline: titulo,
      description: descripcion,
      url,
      mainEntityOfPage: url,
      image: portada || undefined,
      datePublished: a.fecha || undefined,
      dateModified: a._updatedAt || a.fecha || undefined,
      inLanguage: 'es-MX',
      author: { '@type': 'Person', name: autor.nombre, url: autor.enlace || undefined },
      publisher: { '@type': 'Organization', name: PUBLISHER, logo: { '@type': 'ImageObject', url: `${SITE}/logo-oficial.png` } },
      about: a.temaMedico ? { '@type': 'MedicalProcedure', name: a.temaMedico } : undefined,
    },
  ]
  if (faq.length) {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: faq.map((f) => ({
        '@type': 'Question',
        name: f.pregunta,
        acceptedAnswer: { '@type': 'Answer', text: f.respuesta },
      })),
    })
  }

  const autorMeta = [autor.nombre, autor.medio].filter(Boolean).join(' — ')
  const fechaLegible = a.fecha
    ? new Date(a.fecha).toLocaleDateString('es-MX', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'America/Mexico_City' })
    : null

  const cajaAutor = autor.nombre ? `
    <div class="author">
      ${autor.foto ? `<img class="av-img" src="${esc(imgUrl(autor.foto, 160))}" alt="${esc(autor.nombre)}" />` : ''}
      <div>
        <div class="n">${esc(autor.nombre)}</div>
        ${autor.rol ? `<div class="r">${esc(autor.rol)}</div>` : ''}
        ${autor.bio ? `<p class="bio">${esc(autor.bio)}</p>` : ''}
        ${autor.enlace ? `<a class="link" href="${esc(autor.enlace)}" target="_blank" rel="noopener">${esc(autor.textoEnlace || 'Ver perfil →')}</a>` : ''}
      </div>
    </div>` : ''

  const seccionFaq = faq.length ? `
    <section class="faq">
      <h2>Preguntas frecuentes</h2>
      ${faq.map((f, i) => `<details${i === 0 ? ' open' : ''}><summary>${esc(f.pregunta)}</summary><p>${esc(f.respuesta)}</p></details>`).join('\n      ')}
    </section>` : ''

  return `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${esc(tituloSeo)} | ${SITE_NAME}</title>
<meta name="description" content="${esc(descripcion)}" />
<link rel="canonical" href="${url}" />
${autorMeta ? `<meta name="author" content="${esc(autorMeta)}" />` : ''}
<meta name="robots" content="index, follow, max-image-preview:large" />
<!-- Open Graph -->
<meta property="og:type" content="article" />
<meta property="og:title" content="${esc(titulo)}" />
<meta property="og:description" content="${esc(descripcion)}" />
${portada ? `<meta property="og:image" content="${esc(portada)}" />` : ''}
<meta property="og:url" content="${url}" />
<meta property="og:site_name" content="${SITE_NAME} — Hospital Ángeles" />
<meta property="og:locale" content="es_MX" />
${a.fecha ? `<meta property="article:published_time" content="${esc(a.fecha)}" />` : ''}
<meta name="twitter:card" content="summary_large_image" />
<link rel="icon" type="image/png" href="/favicon-32x32.png" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
<style>
  :root{ --blue:#0a4f8f; --blue-l:#1a6fc4; --ink:#1f2937; --soft:#475569; --muted:#6b7280; --line:#e5e7eb; --pale:#e8f1fb; --deep:#021228; }
  *{ box-sizing:border-box; margin:0; padding:0; }
  body{ font-family:'Inter',system-ui,-apple-system,sans-serif; color:var(--ink); background:#fff; -webkit-font-smoothing:antialiased; line-height:1.65; }
  img{ max-width:100%; display:block; }
  a{ color:var(--blue); }
  /* Header */
  .nav{ position:sticky; top:0; z-index:10; background:rgba(255,255,255,.9); backdrop-filter:blur(10px); border-bottom:1px solid var(--line); }
  .nav .in{ max-width:820px; margin:0 auto; padding:14px 20px; display:flex; align-items:center; justify-content:space-between; }
  .nav img{ height:34px; }
  .nav a.back{ font-size:13px; font-weight:600; color:var(--blue); text-decoration:none; }
  /* Hero */
  .hero{ max-width:820px; margin:0 auto; padding:28px 20px 0; }
  .eye{ font-size:12px; letter-spacing:.14em; text-transform:uppercase; font-weight:700; color:var(--blue-l); }
  h1{ font-size:clamp(1.7rem,5vw,2.5rem); line-height:1.15; letter-spacing:-.02em; color:var(--deep); margin:10px 0 14px; }
  .meta{ font-size:13px; color:var(--muted); display:flex; flex-wrap:wrap; gap:6px 14px; align-items:center; margin-bottom:20px; }
  .cover{ border-radius:16px; overflow:hidden; box-shadow:0 20px 60px rgba(10,79,143,.18); }
  .cover img{ width:100%; aspect-ratio:16/9; object-fit:cover; }
  /* Body */
  article{ max-width:720px; margin:0 auto; padding:10px 20px 40px; }
  article p{ margin:16px 0; color:var(--soft); font-size:17px; }
  article h2{ font-size:1.4rem; color:var(--blue); margin:34px 0 8px; letter-spacing:-.01em; line-height:1.25; }
  article h3{ font-size:1.15rem; color:var(--ink); margin:26px 0 6px; line-height:1.3; }
  .lead{ font-size:19px !important; color:var(--ink) !important; font-weight:500; }
  .steps{ margin:16px 0; padding:0; list-style:none; }
  .steps li{ position:relative; padding:14px 16px 14px 18px; margin-bottom:10px; background:#f7f9fc; border-left:4px solid var(--blue-l); border-radius:0 10px 10px 0; font-size:16px; color:var(--soft); }
  .steps strong{ color:var(--ink); }
  .num{ margin:16px 0 16px 22px; color:var(--soft); font-size:17px; }
  .num li{ margin-bottom:8px; padding-left:4px; }
  blockquote{ margin:24px 0; padding:4px 0 4px 18px; border-left:4px solid var(--blue); font-size:18px; font-style:italic; color:var(--ink); }
  .fig{ margin:26px 0; }
  .fig img{ width:100%; border-radius:12px; }
  .fig figcaption{ font-size:13px; color:var(--muted); margin-top:8px; text-align:center; }
  /* Autor */
  .author{ display:flex; gap:16px; align-items:flex-start; background:var(--pale); border:1px solid rgba(10,79,143,.12); border-radius:16px; padding:18px 20px; margin:30px 0; }
  .author img.av-img{ width:62px; height:62px; border-radius:50%; object-fit:cover; flex-shrink:0; border:2px solid #fff; box-shadow:0 3px 10px rgba(10,79,143,.2); }
  .author .n{ font-weight:700; color:var(--ink); font-size:15px; }
  .author .r{ font-size:12px; color:var(--blue); font-weight:600; margin-top:1px; }
  .author .bio{ font-size:13px; color:var(--soft); margin:8px 0 7px; line-height:1.55; }
  .author .link{ font-size:12px; font-weight:600; color:var(--blue); text-decoration:none; }
  .author .link:hover{ text-decoration:underline; }
  /* FAQ */
  .faq{ margin-top:30px; }
  .faq h2{ margin-bottom:14px; }
  details{ border:1px solid var(--line); border-radius:12px; padding:4px 16px; margin-bottom:10px; }
  details summary{ cursor:pointer; font-weight:600; color:var(--ink); padding:12px 0; list-style:none; font-size:16px; }
  details summary::-webkit-details-marker{ display:none; }
  details summary::after{ content:'+'; float:right; color:var(--blue-l); font-weight:700; font-size:20px; line-height:1; }
  details[open] summary::after{ content:'–'; }
  details p{ margin:0 0 14px; font-size:15px; }
  /* CTA */
  .cta{ max-width:720px; margin:36px auto; padding:0 20px; }
  .cta .box{ background:linear-gradient(145deg,var(--blue),var(--deep)); color:#fff; border-radius:18px; padding:28px 24px; text-align:center; }
  .cta h3{ font-size:1.3rem; margin-bottom:6px; } .cta p{ color:#bcd6f3; font-size:14px; margin-bottom:16px; }
  .btn{ display:inline-block; background:#fff; color:var(--blue); font-weight:700; text-decoration:none; padding:13px 26px; border-radius:999px; font-size:15px; }
  /* Footer */
  footer{ background:var(--deep); color:#9fc1e8; text-align:center; padding:28px 20px; }
  footer img{ height:30px; margin:0 auto 10px; } footer .cp{ font-size:11px; color:#5b7da3; margin-top:8px; }
  footer a{ color:#bcd6f3; }
</style>
<!-- Datos estructurados: Artículo + FAQ (SEO / GEO) -->
<script type="application/ld+json">
${jsonLd({ '@context': 'https://schema.org', '@graph': graph })}
</script>
</head>
<body>
  <nav class="nav">
    <div class="in">
      <a href="/"><img src="/logo-oficial.png" alt="Hospital Ángeles — Centro de Neurociencias Avanzadas" /></a>
      <a class="back" href="/#revista">← Revista</a>
    </div>
  </nav>

  <div class="hero">
    <p class="eye">Artículo del Centro · ${esc(a.categoria)}</p>
    <h1>${esc(titulo)}</h1>
    <div class="meta">${autor.nombre ? `<span>Por <strong>${esc(autor.nombre)}</strong>${autor.medio ? ` · ${esc(autor.medio)}` : ''}</span><span>·</span>` : ''}${fechaLegible ? `<time datetime="${esc(a.fecha)}">${fechaLegible}</time><span>·</span>` : ''}<span>${minutos} min de lectura</span></div>
    ${portada ? `<figure class="cover"><img src="${esc(portada)}" alt="${esc(a.portada?.alt)}" /></figure>` : ''}
  </div>

  <article>
    ${toHTML(a.cuerpo || [], { components: ptComponents })}
${cajaAutor}
${seccionFaq}
  </article>

  <div class="cta">
    <div class="box">
      <h3>${esc(ctaTitulo)}</h3>
      <p>${esc(ctaTexto)}</p>
      <a class="btn" href="/#contacto">Agendar valoración</a>
    </div>
  </div>

  <footer>
    <img src="/logo-oficial-blanco.png" alt="Hospital Ángeles — Centro de Neurociencias Avanzadas" />
    <div><a href="/">centroneurociencias.org</a></div>
    <div class="cp">© ${new Date().getFullYear()} Hospital Ángeles · Centro de Neurociencias Avanzadas</div>
  </footer>
</body>
</html>
`
}
