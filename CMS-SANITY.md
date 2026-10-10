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

## Puesta en marcha (una sola vez)

1. **Crear proyecto** en <https://www.sanity.io/manage> → *Create project*
   (plan Free, dataset `production`, visibilidad **Public**). Anotar el **Project ID**.
2. **Studio local**: copiar `studio/.env.example` a `studio/.env` con el Project ID y luego
   ```bash
   cd studio && npm install && npx sanity login && npm run dev
   ```
   Abre <http://localhost:3333>.
3. **Publicar el Studio** (para que el equipo editorial entre desde el navegador):
   ```bash
   cd studio && npm run deploy
   ```
   Queda en `https://neurociencias-revista.sanity.studio` (cambiar `studioHost` en
   `studio/sanity.cli.js` si ese nombre está tomado).
4. **Invitar editores**: sanity.io/manage → proyecto → *Members* → *Invite* (rol *Editor*).
5. **Migrar el primer artículo**: sanity.io/manage → *API* → *Tokens* → *Add API token*
   (permiso *Editor*). Luego, desde `neuro-app/`:
   ```bash
   SANITY_PROJECT_ID=xxxx SANITY_WRITE_TOKEN=sk... npm run articulos:migrar
   ```
   Después de migrar, borrar ese token (solo se usa una vez).
6. **Vercel** → Settings → Environment Variables: `SANITY_PROJECT_ID` y
   `SANITY_DATASET=production` (Production y Preview).
7. **Auto-publicar**:
   - Vercel → Settings → Git → *Deploy Hooks* → crear uno (rama `main`) y copiar la URL.
   - sanity.io/manage → *API* → *Webhooks* → *Create webhook*: URL = la del Deploy Hook,
     dataset `production`, *Trigger on* Create/Update/Delete, filtro
     `_type in ["articulo", "autor"]`, método POST.
8. Redeploy en Vercel. Cuando el artículo de Sanity esté en vivo, se puede borrar
   `public/articulos/cirugia-robotica-de-columna.html` (las imágenes de `public/articulos/`
   pueden quedarse).

## Uso diario (equipo editorial)

Studio → **Artículos** → *Crear* → llenar Contenido, Preguntas frecuentes y SEO →
**Publish**. En ~1 minuto el artículo está en el sitio y aparece en la Revista
(el más reciente sale como destacado).

## Desarrollo

- `npm run articulos:preview` — genera el primer artículo en `dist/` sin Sanity
  (útil para ajustar la plantilla; luego `npm run preview`).
- `npm run studio` — levanta el Studio local.
