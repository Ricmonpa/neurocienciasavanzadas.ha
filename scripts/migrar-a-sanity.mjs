// Sube el primer artículo (y su autora) a Sanity. Se corre UNA vez tras crear el proyecto:
//   SANITY_WRITE_TOKEN=sk... node scripts/migrar-a-sanity.mjs
// Es idempotente: usa IDs fijos (createOrReplace), así que repetirlo no duplica nada.
import { createReadStream } from 'node:fs'
import path from 'node:path'
import { createClient } from '@sanity/client'
import { autor, articulo, imagenes, PORTADA_ALT, AUTOR_ID } from './contenido-inicial.mjs'

const { SANITY_PROJECT_ID = 'e3spfcgz', SANITY_WRITE_TOKEN, SANITY_DATASET = 'production' } = process.env
if (!SANITY_PROJECT_ID || !SANITY_WRITE_TOKEN) {
  console.error('Faltan SANITY_PROJECT_ID y/o SANITY_WRITE_TOKEN')
  process.exit(1)
}

const client = createClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  token: SANITY_WRITE_TOKEN,
  apiVersion: '2025-02-19',
  useCdn: false,
})

const subir = (file) =>
  client.assets.upload('image', createReadStream(file), { filename: path.basename(file) })
const imgRef = (asset, extra = {}) => ({ _type: 'image', asset: { _type: 'reference', _ref: asset._id }, ...extra })

console.log('Subiendo imágenes…')
const [portada, foto] = await Promise.all([subir(imagenes.portada), subir(imagenes.fotoAutor)])

await client
  .transaction()
  .createOrReplace({ ...autor, foto: imgRef(foto) })
  .createOrReplace({
    ...articulo,
    portada: imgRef(portada, { alt: PORTADA_ALT }),
    autor: { _type: 'reference', _ref: AUTOR_ID },
  })
  .commit()

console.log(`✓ Migrado: ${articulo.titulo}`)
