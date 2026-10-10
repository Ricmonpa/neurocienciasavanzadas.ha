// Contenido del primer artículo (cirugía robótica de columna) en formato Sanity.
// Lo usan:
//   - scripts/migrar-a-sanity.mjs  → lo sube a Sanity (una sola vez)
//   - scripts/build-articulos.mjs --local → vista previa del diseño sin Sanity
import { randomUUID } from 'node:crypto'

const key = () => randomUUID().slice(0, 12)

// Bloque de texto; **así** = negrita
function bloque(texto, style = 'normal', extra = {}) {
  const children = texto.split(/(\*\*[^*]+\*\*)/).filter(Boolean).map((t) => {
    const bold = t.startsWith('**')
    return { _type: 'span', _key: key(), text: bold ? t.slice(2, -2) : t, marks: bold ? ['strong'] : [] }
  })
  return { _type: 'block', _key: key(), style, markDefs: [], children, ...extra }
}
const paso = (texto) => bloque(texto, 'normal', { listItem: 'bullet', level: 1 })

export const AUTOR_ID = 'autor-priscila-alvarado'
export const ARTICULO_ID = 'articulo-cirugia-robotica-de-columna'

export const imagenes = {
  portada: 'public/articulos/cirugia-robotica-columna.jpg',
  fotoAutor: 'public/articulos/priscila-alvarado.jpg',
}

export const autor = {
  _id: AUTOR_ID,
  _type: 'autor',
  nombre: 'Priscila Alvarado Solana',
  rol: 'Periodista y neuroescritora · Directora de Neurona Magazine',
  medio: 'Neurona Magazine',
  bio: 'Fundadora de Banshee Editorial y catedrática universitaria. Fusiona periodismo, literatura y neurociencia para decodificar el impacto de las palabras en la mente humana.',
  enlace: 'https://neuronamagazine.com/author/priscila/',
  textoEnlace: 'Ver perfil en Neurona Magazine →',
}

export const articulo = {
  _id: ARTICULO_ID,
  _type: 'articulo',
  titulo: '¿Qué es la cirugía robótica de columna y cómo elimina el dolor de espalda?',
  slug: { _type: 'slug', current: 'cirugia-robotica-de-columna' },
  categoria: 'Cirugía de Columna',
  fecha: '2026-10-02T14:55:00-06:00',
  extracto: 'Cirugía mínimamente invasiva con el robot Mazor X, liderada por el Dr. José Antonio Soriano Sánchez: menos dolor, menos analgésicos y recuperación el mismo día.',
  descripcionSeo: 'La cirugía de columna mínimamente invasiva (MISS) con el robot Mazor X, liderada por el Dr. José Antonio Soriano Sánchez, trata el dolor crónico de espalda y permite caminar el mismo día.',
  temaMedico: 'Cirugía de columna mínimamente invasiva asistida por robot Mazor X',
  ctaTitulo: '¿Vives con dolor de espalda?',
  ctaTexto: 'Agenda una valoración con el equipo del Dr. Soriano Sánchez.',
  cuerpo: [
    bloque('La cirugía de columna mínimamente invasiva (MISS), asistida por el sistema robótico **Mazor X** y liderada por el neurocirujano **José Antonio Soriano Sánchez**, es un procedimiento avanzado que trata el dolor crónico de espalda, permitiendo a los pacientes volver a caminar el mismo día de la intervención. A diferencia de la cirugía abierta, este método utiliza dilatadores tubulares que separan las fibras musculares sin cortarlas, combinándose con un brazo robótico de precisión submilimétrica que reduce drásticamente el uso de analgésicos y el tiempo de recuperación.', 'lead'),
    bloque('El impacto biopsicosocial del dolor de columna y la kinesiofobia', 'h2'),
    bloque('Los padecimientos de la columna vertebral afectan hasta al **80 % de la población mundial** en algún momento de su vida. Factores como la obesidad, el sedentarismo y el tabaquismo (que reduce la irrigación de los discos intervertebrales) aceleran este desgaste.'),
    bloque('El dolor persistente detona la **sensibilización central**, un proceso donde el sistema nervioso amplifica las señales de dolor, derivando frecuentemente en trastornos de depresión o ansiedad. Además, genera **kinesiofobia** (miedo a moverse), lo que debilita la musculatura espinal y resta autonomía al paciente, un cuadro clínico que requiere intervención estructural y psicológica.'),
    bloque('¿Cómo funciona la cirugía mínimamente invasiva (MISS) con el robot Mazor X?', 'h2'),
    bloque('La cirugía abierta tradicional exige desprender los músculos paravertebrales, aumentando el sangrado, el dolor y el riesgo del síndrome de cirugía fallida de espalda. La técnica de mínima invasión (MISS) del Dr. Soriano parte de un principio de **preservación anatómica**:'),
    paso('**Abordaje tubular:** se introducen dilatadores cilíndricos a través de incisiones milimétricas. Estos separan las fibras musculares sin cortarlas, creando un canal de trabajo para retirar hernias o fusionar vértebras. Al finalizar, el músculo recupera su posición original.'),
    paso('**Planificación 3D y asistencia robótica:** el sistema Mazor X construye un modelo tridimensional de las vértebras del paciente. El cirujano define la trayectoria exacta de los tornillos de titanio.'),
    paso('**Precisión submilimétrica:** un sistema de rastreo óptico registra los movimientos del paciente mientras el brazo robótico guía el instrumental.'),
    bloque('Autoridad médica: la trayectoria del Dr. José Antonio Soriano Sánchez', 'h2'),
    bloque('El desarrollo de esta técnica en México está respaldado por la trayectoria del Dr. José Antonio Soriano Sánchez, neurocirujano egresado de la **Universidad Nacional Autónoma de México (UNAM)** y primer lugar nacional en la certificación del Consejo Mexicano de Cirugía Neurológica.'),
    bloque('A nivel internacional, es **Segundo Vicepresidente** de la World Federation of Neurosurgical Societies (WFNS), académico de la World Academy of Neurological Surgery (WANS) y expresidente de la Federación Latinoamericana de Sociedades de Neurocirugía (FLANC). En 2011 fundó el primer programa de tutoría en cirugía de mínima invasión de América Latina, apostando por un enfoque multidisciplinario (neurofisiología, algología y psiquiatría) para tratar el dolor crónico.'),
  ],
  faq: [
    ['¿Qué es el dolor agudo y el dolor crónico de espalda?', 'El dolor agudo dura menos de seis semanas y suele deberse a lesiones tisulares recientes. El dolor crónico o neuropático persiste por más de tres meses, asociándose con hipersensibilidad y alteraciones en el procesamiento del dolor por el sistema nervioso central.'],
    ['¿Qué es la cirugía de columna mínimamente invasiva (MISS)?', 'Es una técnica quirúrgica que utiliza dilatadores tubulares para acceder a la columna vertebral separando las fibras musculares en lugar de cortarlas. Esto conserva la estructura de soporte de la espalda, minimiza el sangrado y acelera la recuperación.'],
    ['¿Cómo ayuda el robot Mazor X en las operaciones de columna?', 'Es una plataforma que combina planificación tridimensional mediante imágenes del paciente con un brazo robótico. Sirve como guía para colocar implantes y tornillos con precisión submilimétrica, reduciendo el margen de error del trabajo manual.'],
    ['¿Por qué los pacientes pueden caminar el mismo día tras una cirugía robótica?', 'Al no seccionar los músculos paravertebrales y utilizar la precisión robótica, el trauma quirúrgico en los tejidos es mínimo. Esto reduce radicalmente el dolor postoperatorio y la dependencia de analgésicos, permitiendo recuperar la movilidad el mismo día.'],
  ].map(([pregunta, respuesta]) => ({ _type: 'pregunta', _key: key(), pregunta, respuesta })),
}

export const PORTADA_ALT = 'Cirugía robótica de columna con sistema Mazor X en quirófano'

// Mismo artículo con la forma que devuelve la consulta GROQ del build (para --local)
export function articuloLocal() {
  return {
    ...articulo,
    slug: articulo.slug.current,
    portada: { url: '/' + imagenes.portada.replace(/^public\//, ''), alt: PORTADA_ALT },
    autor: { ...autor, foto: '/' + imagenes.fotoAutor.replace(/^public\//, '') },
  }
}
