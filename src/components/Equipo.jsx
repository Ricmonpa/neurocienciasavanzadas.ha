// Sección "Equipo" — estructura oficial del Documento Rector del Centro de Neurociencias.
// Dr. José Antonio Soriano Sánchez como Director (líder). Clínicas de Alta Especialidad
// (12 Verticales + 10 Transversales) con sus coordinadores.

const VERTICALES = [
  { c: 'Cefaleas y Dolor Facial', co: ['Dr. Rogelio Domínguez Moreno'] },
  { c: 'Cirugía de Columna Vertebral', co: ['Dr. Sergio Soriano Solís'] },
  { c: 'Neurología Cognitiva y Demencias', co: ['Dr. Raúl Medina Rioja', 'Dr. Ramiro Ruíz García'] },
  { c: 'Epilepsia', co: ['Dr. Enrique De Font Reaulx Rojas', 'Dr. Noel Isaías Plascencia Álvarez'] },
  { c: 'Espasticidad', co: ['Dr. José Damián Carrillo Ruiz', 'Dr. Emmanuel Simental Aldaba', 'Dr. Humberto Carrasco Vargas'] },
  { c: 'Movimientos Anormales', co: ['Dr. Fiacro Jiménez Ponce'] },
  { c: 'Neuromuscular y Disautonomía', co: ['Dr. Edwin Steven Vargas Cañas'] },
  { c: 'Neuroinmunología y Desmielinizantes', co: ['Dra. Verónica Rivas Alonso'] },
  { c: 'Neurooncología', co: ['Dra. Ytel Garcilazo Reyes', 'Dr. Diego Méndez Rosito'] },
  { c: 'Neurotología y Audiología', co: ['Dr. Francisco José Gallardo Ollervides', 'Dra. Alejandra Altamirano González'] },
  { c: 'Neurovascular (Agudo y Ambulatorio)', co: ['Dr. Carlos Cantú Brito', 'Dr. Fernando Flores Silva', 'Dr. Antonio Arauz Góngora', 'Dra. Vanesa Cano Nigenda'] },
  { c: 'Neuropediatría', co: ['Dr. Alfonso Marx Bracho'] },
]

const TRANSVERSALES = [
  { c: 'Algología y Cuidados Paliativos', co: ['Dra. Elisa Hernández Ramírez', 'Dr. Fiacro Jiménez Ponce'] },
  { c: 'Psiquiatría y Neuropsiquiatría', co: ['Dra. Cecilia Berlanga', 'Dr. Ramiro Ruíz García'] },
  { c: 'Neurogenética y Genética Médica', co: ['Dr. Edmar Obed Benítez Alonso'] },
  { c: 'Radioterapia y Radiocirugía · Gamma Knife', co: ['Dr. José Edgardo Valerio'] },
  { c: 'Neurorrehabilitación', co: ['Dra. Tania Vázquez Roa', 'Dr. Emmanuel Simental Aldaba'] },
  { c: 'Neuroimagen y Neurosonología', co: ['Dr. Roger Carrillo Mezo'] },
  { c: 'Medicina Nuclear e Imagen Molecular', co: ['Dr. Jorge Martín Schalch Ponce de León', 'Dr. Ivan Díaz Meneses'] },
  { c: 'Neuropatología', co: ['Dr. Erick Gómez Apo'] },
  { c: 'Neuroendocrinología', co: ['Dra. Claudia Alejandra de la Riva Espinoza'] },
  { c: 'Trastornos del Sueño', co: ['Dr. Gerson Ángel Alavez', 'Dr. Noel Isaías Plascencia Álvarez'] },
]

const DIVISIONES = [
  'Neurología Clínica', 'Neurocirugía', 'Neurofisiología', 'Investigación', 'Formación de Recursos Humanos',
]

function ClinicaCard({ item, color }) {
  return (
    <div className="bg-white rounded-2xl p-5 border border-gray-100" style={{ boxShadow: '0 4px 16px rgba(10,79,143,0.05)' }}>
      <div className="flex items-center gap-2 mb-2.5">
        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: color }} />
        <h4 className="font-bold text-gray-900 text-sm leading-tight">{item.c}</h4>
      </div>
      <p className="text-[0.6rem] font-semibold uppercase tracking-wider text-gray-400 pl-3.5 mb-1">
        {item.co.length > 1 ? 'Coordinadores' : 'Coordinador(a)'}
      </p>
      <ul className="space-y-1 pl-3.5">
        {item.co.map((name) => (
          <li key={name} className="text-xs text-gray-600 leading-snug">{name}</li>
        ))}
      </ul>
    </div>
  )
}

export default function Equipo() {
  return (
    <section id="equipo" className="py-16 sm:py-24 px-4 sm:px-6" style={{ background: '#f7f9fc' }}>
      <div className="max-w-6xl mx-auto">

        {/* Encabezado */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-blue-600 mb-3">El Equipo</p>
          <h2 className="font-bold text-gray-900 mb-4" style={{ fontSize: 'clamp(1.75rem, 6vw, 2.75rem)', letterSpacing: '-0.02em' }}>
            Un cuerpo médico de alta especialidad
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            22 Clínicas de Alta Especialidad —12 verticales y 10 transversales— articuladas bajo un
            modelo de gobierno clínico y decisión colegiada.
          </p>
        </div>

        {/* Director / Líder */}
        <div
          className="rounded-3xl overflow-hidden mb-8 grid md:grid-cols-[auto_1fr] gap-6 md:gap-8 items-center p-6 sm:p-8"
          style={{ background: 'linear-gradient(145deg, #ffffff, #eef4fb)', border: '1px solid rgba(10,79,143,0.12)', boxShadow: '0 20px 60px rgba(10,79,143,0.08)' }}
        >
          <img
            src="/dr-soriano.png"
            alt="Dr. José Antonio Soriano Sánchez"
            className="mx-auto md:mx-0 rounded-2xl object-cover"
            style={{ width: 130, height: 156, boxShadow: '0 8px 24px rgba(10,79,143,0.2)' }}
          />
          <div>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-3"
              style={{ background: '#0a4f8f', color: '#fff' }}>
              Director del Centro
            </span>
            <h3 className="font-bold text-2xl sm:text-3xl text-gray-900" style={{ letterSpacing: '-0.02em' }}>
              Dr. José Antonio Soriano Sánchez
            </h3>
            <p className="text-blue-700 font-medium mt-1">Neurocirugía · Cirugía mínimamente invasiva de columna</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {['2º Vicepresidente WFNS', 'Ex Presidente SILACO', 'Fundador SICCMI', 'Embajador UNESCO'].map((c) => (
                <span key={c} className="text-xs font-medium px-3 py-1.5 rounded-full"
                  style={{ background: '#e8f1fb', color: '#0a4f8f', border: '1px solid rgba(10,79,143,0.15)' }}>
                  {c}
                </span>
              ))}
            </div>
            <a href="#perfil-doctor" className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-blue-700 hover:gap-3 transition-all">
              Ver perfil completo →
            </a>
          </div>
        </div>

        {/* Divisiones */}
        <div className="rounded-2xl p-5 sm:p-6 mb-10" style={{ background: 'linear-gradient(145deg,#021228,#0a4f8f)' }}>
          <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-3" style={{ color: '#7fb0e6' }}>Gobierno clínico · 5 Divisiones</p>
          <div className="flex flex-wrap gap-2.5">
            {DIVISIONES.map((d) => (
              <span key={d} className="text-sm font-medium px-4 py-2 rounded-full text-white"
                style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.18)' }}>
                {d}
              </span>
            ))}
          </div>
        </div>

        {/* Clínicas Verticales */}
        <div className="flex items-baseline justify-between mb-4">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-blue-600">Clínicas de Alta Especialidad · Verticales</p>
          <span className="text-xs text-gray-400 font-medium">12</span>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {VERTICALES.map((v) => <ClinicaCard key={v.c} item={v} color="#1a6fc4" />)}
        </div>

        {/* Clínicas Transversales */}
        <div className="flex items-baseline justify-between mb-4">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-blue-600">Clínicas de Alta Especialidad · Transversales</p>
          <span className="text-xs text-gray-400 font-medium">10</span>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {TRANSVERSALES.map((t) => <ClinicaCard key={t.c} item={t} color="#059669" />)}
        </div>

        {/* Innovación — N3 Labs */}
        <div className="rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left"
          style={{ background: 'linear-gradient(145deg, #021228, #0a4f8f)', color: '#fff' }}>
          <img
            src="/engel-fonseca.jpg"
            alt="Engel Fonseca Mallen"
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover flex-shrink-0"
            style={{ border: '1px solid rgba(255,255,255,0.25)', boxShadow: '0 8px 24px rgba(2,18,40,0.4)' }}
          />
          <div className="flex-1">
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#7fb0e6' }}>Innovación con IA Médica</span>
            <h3 className="font-bold text-xl sm:text-2xl mt-1">Engel Fonseca Mallen</h3>
            <p className="text-blue-100 text-sm mt-1">N3 Labs · Integración de inteligencia artificial en el ecosistema clínico y digital.</p>
          </div>
        </div>

      </div>
    </section>
  )
}
