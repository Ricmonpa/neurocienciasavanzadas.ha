# CMS de la Revista (Sanity)

Los **Artículos del Centro** se escriben en Sanity Studio y se publican solos en
`centroneurociencias.org/articulos/<slug>.html`, con el mismo diseño y SEO
(meta, Open Graph, JSON-LD MedicalWebPage + FAQPage) del primer artículo.

```
Editor publica en Studio ──webhook──▶ Vercel Deploy Hook ──▶ npm run build
                                                              ├─ vite build
                                                              └─ scripts/build-articulos.mjs
                                                                   lee Sanity → dist/articulos/*.html
                                                                                dist/articulos/index.json
                                                                                dist/sitemap.xml
```

| Pieza | Dónde |
|---|---|
| Panel editorial (Studio) | `studio/` — esquemas en `studio/schemaTypes/` |
| Plantilla HTML del artículo | `scripts/articulo-template.mjs` |
| Generador (build) | `scripts/build-articulos.mjs` |
| Migración del 1er artículo | `scripts/migrar-a-sanity.mjs` + `scripts/contenido-inicial.mjs` |
| Tarjetas en la Revista | `src/components/Revista.jsx` (lee `/articulos/index.json`) |

Proyecto Sanity: **e3spfcgz** / dataset `production` (público: los borradores no se exponen).
Studio: <https://neurociencias-revista.sanity.studio>. Si Sanity responde con error, el
build falla y Vercel conserva el deploy anterior.

## Configuración (ya hecha el 2026-10-10)

- Proyecto Sanity `e3spfcgz`, dataset `production` público. Dueño: cuenta Google de Ricardo.
- Studio desplegado con `cd studio && npm run deploy` (requiere `npx sanity login`).
- Primer artículo migrado con `scripts/migrar-a-sanity.mjs`.
- Vercel → proyecto `neurocienciasavanzadas-ha` → Settings → Git → Deploy Hook **"Sanity CMS"** (rama `main`).
- Sanity → API → Webhooks → **"Vercel deploy (Revista)"**: llama al Deploy Hook al crear/editar/borrar
  documentos `articulo` o `autor` publicados.
- No se necesitan variables de entorno en Vercel (el Project ID está en el código).

**Agregar editores:** sanity.io/manage → proyecto → *Members* → *Invite* (rol *Editor*).

## Uso diario (equipo editorial)

Studio → **Artículos** → *Crear* → llenar Contenido, Preguntas frecuentes y SEO →
**Publish**. En ~1 minuto el artículo está en el sitio y aparece en la Revista
(el más reciente sale como destacado).

## Desarrollo

- `npm run articulos:preview` — genera el primer artículo en `dist/` sin Sanity
  (útil para ajustar la plantilla; luego `npm run preview`).
- `npm run studio` — levanta el Studio local.
