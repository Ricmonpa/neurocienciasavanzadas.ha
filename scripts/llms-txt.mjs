// Contenido de /llms.txt (formato llmstxt.org). La parte fija describe el Centro
// (datos de src/components/Especialidades.jsx y Tecnologia.jsx); los artículos se
// agregan solos desde Sanity en cada build.
import { SITE } from './articulo-template.mjs'

const CLINICAS_VERTICALES = [
  'Cefaleas y Dolor Facial', 'Cirugía de Columna Vertebral', 'Neurología Cognitiva y Demencias',
  'Epilepsia', 'Espasticidad', 'Movimientos Anormales', 'Neuromuscular y Disautonomía',
  'Neuroinmunología y Desmielinizantes', 'Neurooncología', 'Neurotología y Audiología',
  'Neurovascular (Agudo y Ambulatorio)', 'Neuropediatría',
]
const CLINICAS_TRANSVERSALES = [
  'Algología y Cuidados Paliativos', 'Psiquiatría y Neuropsiquiatría', 'Neurogenética y Genética Médica',
  'Radioterapia y Radiocirugía (Gamma Knife)', 'Neurorrehabilitación', 'Neuroimagen y Neurosonología',
  'Medicina Nuclear e Imagen Molecular', 'Neuropatología', 'Neuroendocrinología', 'Trastornos del Sueño',
]
const TECNOLOGIA = [
  'Robot Mazor X', 'Neuronavegación quirúrgica', 'Neurofisiología clínica',
  'Neuroimagen y Neurosonología', 'Medicina Nuclear e Imagen Molecular', 'IA y Anatomía Digital',
]

export function renderLlmsTxt(articulos) {
  const listaArticulos = articulos.length
    ? articulos.map((a) => `- [${a.titulo}](${SITE}/articulos/${a.slug}.html): ${a.extracto}`).join('\n')
    : '- (Próximamente)'

  return `# Centro de Neurociencias Avanzadas — Hospital Ángeles Pedregal

> Centro médico de alta especialidad en neurología y neurocirugía en el Hospital Ángeles del Pedregal, Ciudad de México. Dirigido por el neurocirujano Dr. José Antonio Soriano Sánchez, reúne 22 Clínicas de Alta Especialidad con un modelo multidisciplinario centrado en el paciente.

## Sitio

- [Inicio](${SITE}/): presentación del Centro, modelo de atención, equipo médico, tecnología y contacto
- [Contacto y citas](${SITE}/#contacto): formulario para agendar valoración

## Clínicas verticales (padecimientos)

${CLINICAS_VERTICALES.map((c) => `- ${c}`).join('\n')}

## Clínicas transversales (apoyo especializado)

${CLINICAS_TRANSVERSALES.map((c) => `- ${c}`).join('\n')}

## Tecnología

${TECNOLOGIA.map((t) => `- ${t}`).join('\n')}

## Artículos del Centro

${listaArticulos}
`
}
