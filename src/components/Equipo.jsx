// Sección "Equipo" — Centro de Neurociencias Avanzadas
// Nota: las fotos reales se integran cuando el cliente las envíe; por ahora se usan
// avatares con iniciales sobre gradiente azul (mismo lenguaje visual del sitio).

function initials(name) {
  const clean = name.replace(/^(Dr\.|Dra\.|Lic\.)\s*/i, '')
  const parts = clean.split(' ').filter(Boolean)
  return ((parts[0]?.[0] || '') + (parts[1]?.[0] || '')).toUpperCase()
}

function Avatar({ name, size = 64, photo }) {
  if (photo) {
    return (
      <img
        src={photo}
        alt={name}
        className="rounded-2xl object-cover flex-shrink-0"
        style={{ width: size, height: size }}
      />
    )
  }
  return (
    <div
      className="rounded-2xl flex items-center justify-center flex-shrink-0 text-white font-bold"
      style={{
        width: size,
        height: size,
        fontSize: size * 0.32,
        background: 'linear-gradient(135deg, #1a6fc4, #0a4f8f)',
        letterSpacing: '-0.02em',
      }}
    >
      {initials(name)}
    </div>
  )
}

const CUERPO_MEDICO = [
  { name: 'Dr. Victor David López García', role: 'Neurocirugía', photo: '/dr-lopez.png' },
  { name: 'Dr. Manuel Rodríguez García', role: 'Neurocirugía', photo: '/dr-rodriguez.png' },
  { name: 'Dr. Sergio Soriano Solís', role: 'Neurocirugía', photo: '/dr-soriano-solis.png' },
  { name: 'Dr. Ivan Ledezma Bautista', role: 'Neurocirugía', photo: '/dr-ledezma.png' },
]

const APOYO = [
  { grupo: 'Anestesiología', personas: ['Dr. Enrique Raúl Flores Soria', 'Dr. Atzin Suá Ruiz Hernández', 'Dra. Mariana Vega Angeles'] },
  { grupo: 'Neurofisiología', personas: ['Dra. Ingrid Charlotte Contreras Guerrero'] },
  { grupo: 'Formación', personas: ['Dra. Perla Karen Ordoñez Moreno — Alumno Diplomado'] },
  { grupo: 'Enfermería Quirúrgica', personas: ['Lic. Herendira Gaspar Rojas'] },
]

export default function Equipo() {
  return (
    <section id="equipo" className="py-16 sm:py-24 px-4 sm:px-6" style={{ background: '#f7f9fc' }}>
      <div className="max-w-6xl mx-auto">

        {/* Encabezado */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-blue-600 mb-3">El Equipo</p>
          <h2 className="font-bold text-gray-900 mb-4" style={{ fontSize: 'clamp(1.75rem, 6vw, 2.75rem)', letterSpacing: '-0.02em' }}>
            Especialistas que lideran el cambio
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Un cuerpo médico multidisciplinario que integra neurocirugía, anestesiología,
            neurofisiología e innovación tecnológica.
          </p>
        </div>

        {/* Líder / Director */}
        <div
          className="rounded-3xl overflow-hidden mb-8 grid md:grid-cols-[auto_1fr] gap-6 md:gap-8 items-center p-6 sm:p-8"
          style={{ background: 'linear-gradient(145deg, #ffffff, #eef4fb)', border: '1px solid rgba(10,79,143,0.12)', boxShadow: '0 20px 60px rgba(10,79,143,0.08)' }}
        >
          <div className="flex items-center gap-5 md:block">
            <Avatar name="Dr. José Antonio Soriano Sánchez" size={130} photo="/dr-soriano.png" />
          </div>
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
              {['2º Vicepresidente WFNS', 'Ex Presidente SILACO', 'Ex Presidente CMCN', 'Fundador SICCMI', 'Embajador UNESCO', 'Academia Mexicana de Cirugía'].map((c) => (
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

        {/* Cuerpo médico */}
        <p className="text-xs font-semibold tracking-[0.18em] uppercase text-blue-600 mb-4">Cuerpo Médico · Neurocirugía</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {CUERPO_MEDICO.map((m) => (
            <div key={m.name} className="bg-white rounded-2xl p-5 border border-gray-100 flex flex-col items-center text-center"
              style={{ boxShadow: '0 4px 16px rgba(10,79,143,0.05)' }}>
              <Avatar name={m.name} size={72} photo={m.photo} />
              <h4 className="font-semibold text-gray-900 text-sm mt-3 leading-tight">{m.name}</h4>
              <p className="text-xs text-gray-500 mt-1">{m.role}</p>
            </div>
          ))}
        </div>

        {/* Equipo de apoyo */}
        <p className="text-xs font-semibold tracking-[0.18em] uppercase text-blue-600 mb-4">Equipo de Apoyo</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {APOYO.map((g) => (
            <div key={g.grupo} className="bg-white rounded-2xl p-5 border border-gray-100" style={{ boxShadow: '0 4px 16px rgba(10,79,143,0.05)' }}>
              <h4 className="font-bold text-gray-900 text-sm mb-3">{g.grupo}</h4>
              <ul className="space-y-2">
                {g.personas.map((p) => (
                  <li key={p} className="text-xs text-gray-600 leading-snug flex items-start gap-2">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#1a6fc4' }} />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
