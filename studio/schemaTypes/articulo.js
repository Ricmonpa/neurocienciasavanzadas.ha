import { defineArrayMember, defineField, defineType } from 'sanity'

const CATEGORIAS = [
  'Cirugía de Columna', 'Neurocirugía', 'Neurología', 'Trastornos del Movimiento',
  'Vascular Cerebral', 'Epilepsia', 'Demencias', 'Salud Cerebral', 'Investigación',
]

export default defineType({
  name: 'articulo',
  title: 'Artículo',
  type: 'document',
  groups: [
    { name: 'contenido', title: 'Contenido', default: true },
    { name: 'faq', title: 'Preguntas frecuentes' },
    { name: 'seo', title: 'SEO y cierre' },
  ],
  fields: [
    defineField({
      name: 'titulo', title: 'Título', type: 'string', group: 'contenido',
      description: 'Idealmente en forma de pregunta que la gente buscaría en Google.',
      validation: (r) => r.required().max(110),
    }),
    defineField({
      name: 'slug', title: 'URL del artículo', type: 'slug', group: 'contenido',
      description: 'Se genera desde el título. Una vez publicado, no lo cambies (rompe enlaces).',
      options: { source: 'titulo', maxLength: 80 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'categoria', title: 'Categoría', type: 'string', group: 'contenido',
      options: { list: CATEGORIAS },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'autor', title: 'Autor', type: 'reference', to: [{ type: 'autor' }], group: 'contenido',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'fecha', title: 'Fecha de publicación', type: 'datetime', group: 'contenido',
      initialValue: () => new Date().toISOString(),
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'extracto', title: 'Resumen corto', type: 'text', rows: 3, group: 'contenido',
      description: 'Aparece en la tarjeta de la Revista y en Google (150–160 caracteres ideal).',
      validation: (r) => r.required().max(300),
    }),
    defineField({
      name: 'portada', title: 'Imagen de portada', type: 'image', group: 'contenido',
      options: { hotspot: true },
      description: 'Horizontal (16:9), mínimo 1600 px de ancho.',
      fields: [
        defineField({
          name: 'alt', title: 'Descripción de la imagen (alt)', type: 'string',
          description: 'Qué se ve en la imagen. Importante para accesibilidad y SEO.',
          validation: (r) => r.required(),
        }),
      ],
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'cuerpo', title: 'Cuerpo del artículo', type: 'array', group: 'contenido',
      description: 'Empieza con un párrafo de estilo "Entradilla" que responda la pregunta del título.',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [
            { title: 'Párrafo', value: 'normal' },
            { title: 'Entradilla (primer párrafo)', value: 'lead' },
            { title: 'Subtítulo', value: 'h2' },
            { title: 'Subtítulo menor', value: 'h3' },
            { title: 'Cita', value: 'blockquote' },
          ],
          lists: [
            { title: 'Pasos destacados', value: 'bullet' },
            { title: 'Lista numerada', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Negrita', value: 'strong' },
              { title: 'Cursiva', value: 'em' },
            ],
            annotations: [
              {
                name: 'link', type: 'object', title: 'Enlace',
                fields: [{ name: 'href', type: 'url', title: 'URL', validation: (r) => r.uri({ allowRelative: true, scheme: ['http', 'https', 'mailto'] }) }],
              },
            ],
          },
        }),
        defineArrayMember({
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'alt', type: 'string', title: 'Descripción (alt)', validation: (r) => r.required() },
            { name: 'pie', type: 'string', title: 'Pie de foto' },
          ],
        }),
      ],
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'faq', title: 'Preguntas frecuentes', type: 'array', group: 'faq',
      description: 'Preguntas reales de pacientes con respuestas de 2–3 frases. Google y las IAs las usan como respuesta directa.',
      of: [
        defineArrayMember({
          type: 'object', name: 'pregunta',
          fields: [
            defineField({ name: 'pregunta', title: 'Pregunta', type: 'string', validation: (r) => r.required() }),
            defineField({ name: 'respuesta', title: 'Respuesta', type: 'text', rows: 4, validation: (r) => r.required() }),
          ],
          preview: { select: { title: 'pregunta', subtitle: 'respuesta' } },
        }),
      ],
    }),
    defineField({
      name: 'tituloSeo', title: 'Título para Google (opcional)', type: 'string', group: 'seo',
      description: 'Si se deja vacío se usa el título del artículo.',
      validation: (r) => r.max(70).warning('Google corta títulos de más de ~60–70 caracteres'),
    }),
    defineField({
      name: 'descripcionSeo', title: 'Descripción para Google (opcional)', type: 'text', rows: 3, group: 'seo',
      description: 'Si se deja vacía se usa el resumen corto.',
      validation: (r) => r.max(170).warning('Google corta descripciones de más de ~160 caracteres'),
    }),
    defineField({
      name: 'temaMedico', title: 'Tema médico principal (opcional)', type: 'string', group: 'seo',
      description: 'Procedimiento o padecimiento del que trata. Ej. "Cirugía de columna mínimamente invasiva asistida por robot Mazor X"',
    }),
    defineField({
      name: 'ctaTitulo', title: 'Título del recuadro final', type: 'string', group: 'seo',
      initialValue: '¿Quieres una valoración?',
    }),
    defineField({
      name: 'ctaTexto', title: 'Texto del recuadro final', type: 'string', group: 'seo',
      initialValue: 'Agenda una cita con los especialistas del Centro de Neurociencias Avanzadas.',
    }),
  ],
  orderings: [{ title: 'Más recientes', name: 'fechaDesc', by: [{ field: 'fecha', direction: 'desc' }] }],
  preview: {
    select: { title: 'titulo', subtitle: 'categoria', media: 'portada' },
  },
})
