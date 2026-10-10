import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'autor',
  title: 'Autor',
  type: 'document',
  fields: [
    defineField({ name: 'nombre', title: 'Nombre completo', type: 'string', validation: (r) => r.required() }),
    defineField({
      name: 'rol', title: 'Rol / cargo', type: 'string',
      description: 'Ej. "Periodista y neuroescritora · Directora de Neurona Magazine"',
    }),
    defineField({
      name: 'medio', title: 'Medio o institución', type: 'string',
      description: 'Aparece junto al nombre en la cabecera del artículo. Ej. "Neurona Magazine"',
    }),
    defineField({ name: 'bio', title: 'Biografía breve', type: 'text', rows: 3, validation: (r) => r.max(400) }),
    defineField({ name: 'foto', title: 'Foto', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'enlace', title: 'Enlace al perfil', type: 'url' }),
    defineField({ name: 'textoEnlace', title: 'Texto del enlace', type: 'string', initialValue: 'Ver perfil →' }),
  ],
  preview: { select: { title: 'nombre', subtitle: 'rol', media: 'foto' } },
})
