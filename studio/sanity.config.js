// Sanity Studio — panel editorial de la Revista del Centro de Neurociencias.
// Aquí el equipo editorial crea y publica los "Artículos del Centro".
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || 'e3spfcgz'
const dataset = process.env.SANITY_STUDIO_DATASET || 'production'

export default defineConfig({
  name: 'default',
  title: 'Revista · Centro de Neurociencias',
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Contenido')
          .items([
            S.documentTypeListItem('articulo').title('Artículos'),
            S.documentTypeListItem('autor').title('Autores'),
          ]),
    }),
    visionTool(),
  ],
  schema: { types: schemaTypes },
})
