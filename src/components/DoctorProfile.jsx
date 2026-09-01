// Perfil del especialista — Dr. José Antonio Soriano Sánchez
// Landing embebida (Artefacto 02). Foto real pendiente de recibir del cliente;
// por ahora usa el marco "perfil a llenar".

const PRESIDENCIAS = [
  'Ex Presidente · Sociedad Ibero Latinoamericana de Columna Vertebral (SILACO)',
  'Ex Presidente · Consejo Mexicano de Cirugía Neurológica A.C. (CMCN)',
  'Ex Presidente · Federación Latinoamericana de Sociedades de Neurocirugía (FLANC)',
  'Ex Presidente · Sociedad Mexicana de Cirugía Neurológica (SMCN)',
  'Ex Presidente · Asociación Mexicana de Cirugía de Columna (AMCICO)',
  'Fundador y ex Presidente · Sociedad Interamericana de Cirugía Mínimamente Invasiva de Columna (SICCMI)',
]

const DISTINCIONES = [
  'Past Second Vice President of the WFNS by the FLANC',
  'Presidente Honorario · Federación Mundial de Cirugía de Columna Mínimamente Invasiva (WFMISS)',
  'Embajador de Anatomía Digital para América Latina · UNESCO',
  'Ex miembro del Spine Committee · WFNS',
  'Académico · Academia Mexicana de Cirugía (AMC)',
  'Miembro · World Academy of Neurological Surgery (WANS)',
]

export default function DoctorProfile() {
  return (
    <section id="perfil-doctor" className="w-full">

      {/* ── Hero del perfil ── */}
      <div className="relative overflow-hidden px-4 sm:px-6 py-16 sm:py-20"
        style={{ background: 'linear-gradient(160deg, #0a4f8f 0%, #021228 70%, #0a2a4d 100%)' }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(circle at 78% 25%, rgba(26,111,196,0.4), transparent 55%), radial-gradient(circle at 15% 80%, rgba(10,79,143,0.35), transparent 55%)' }} />
        <div className="relative max-w-5xl mx-auto grid md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-center">

          {/* Foto del especialista */}
          <img
            src="/dr-soriano.png"
            alt="Dr. José Antonio Soriano Sánchez"
            className="mx-auto md:mx-0 rounded-3xl object-cover"
            style={{
              width: 220, height: 264,
              border: '1.5px solid rgba(255,255,255,0.25)',
              boxShadow: '0 12px 48px rgba(2,18,40,0.5)',
            }}
          />

          {/* Datos */}
          <div className="text-center md:text-left text-white">
            <p className="text-xs font-semibold tracking-[0.22em] uppercase mb-3" style={{ color: '#7fb0e6' }}>
              Director · Centro de Neurociencias Avanzadas
            </p>
            <h1 className="font-bold leading-tight" style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', letterSpacing: '-0.02em' }}>
              Dr. José Antonio<br className="hidden sm:block" /> Soriano Sánchez
            </h1>
            <p className="text-blue-100 text-lg mt-3">Neurocirugía · Cirugía mínimamente invasiva de columna</p>
            <p className="text-blue-300 text-sm mt-2 font-medium">Pionero de la Cirugía Mínimamente Invasiva de Columna</p>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start mt-6">
              <button className="px-7 py-3.5 rounded-full font-semibold text-white"
                style={{ background: 'linear-gradient(135deg, #1a6fc4, #0a4f8f)', boxShadow: '0 8px 24px rgba(10,79,143,0.5)' }}>
                Agendar consulta →
              </button>
              <a href="#top" className="px-7 py-3.5 rounded-full font-semibold text-white border border-white/30 hover:bg-white/10 transition-colors">
                Conocer el Centro
              </a>
            </div>
          </div>
        </div>

        {/* Stats de autoridad */}
        <div className="relative max-w-5xl mx-auto grid grid-cols-3 gap-4 mt-12">
          {[
            { v: 'HAP', l: 'Director del Centro' },
            { v: 'WFNS', l: 'Past Second Vice President' },
            { v: 'UNESCO', l: 'Embajador de Anatomía Digital' },
          ].map((s) => (
            <div key={s.l} className="text-center rounded-2xl py-4 px-2"
              style={{ background: 'rgba(2,18,40,0.5)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <p className="text-white font-bold text-lg sm:text-xl">{s.v}</p>
              <p className="text-blue-300 text-xs mt-1 leading-tight">{s.l}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Trayectoria ── */}
      <div className="px-4 sm:px-6 py-16 sm:py-20" style={{ background: '#fff' }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold tracking-[0.22em] uppercase text-blue-600 mb-3">Trayectoria y Liderazgo</p>
          <h2 className="font-bold text-gray-900 mb-4" style={{ fontSize: 'clamp(1.6rem, 5vw, 2.4rem)', letterSpacing: '-0.02em' }}>
            Una referencia internacional en neurocirugía de columna
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-3xl leading-relaxed mb-10">
            Pionero de la cirugía robótica en el Hospital Angeles Health System y líder en cirugía
            mínimamente invasiva de columna, con una trayectoria de presidencias en las principales
            sociedades de neurocirugía de México, Latinoamérica y el mundo.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Presidencias */}
            <div className="rounded-2xl p-6" style={{ background: '#f7f9fc', border: '1px solid rgba(10,79,143,0.1)' }}>
              <h3 className="font-bold text-blue-800 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full" style={{ background: '#0a4f8f' }} /> Presidencias y fundaciones
              </h3>
              <ul className="space-y-3">
                {PRESIDENCIAS.map((p) => (
                  <li key={p} className="text-sm text-gray-600 leading-snug flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#1a6fc4' }} />
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            {/* Distinciones */}
            <div className="rounded-2xl p-6" style={{ background: '#f7f9fc', border: '1px solid rgba(10,79,143,0.1)' }}>
              <h3 className="font-bold text-blue-800 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full" style={{ background: '#0a4f8f' }} /> Distinciones y membresías
              </h3>
              <ul className="space-y-3">
                {DISTINCIONES.map((d) => (
                  <li key={d} className="text-sm text-gray-600 leading-snug flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#1a6fc4' }} />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA final */}
          <div className="rounded-3xl mt-10 p-8 sm:p-10 text-center"
            style={{ background: 'linear-gradient(145deg, #0a4f8f, #021228)', color: '#fff' }}>
            <h3 className="font-bold text-2xl sm:text-3xl">¿Listo para tu consulta?</h3>
            <p className="text-blue-100 mt-2 mb-6">Agenda directamente con el Dr. Soriano Sánchez.</p>
            <button className="px-8 py-4 rounded-full font-bold text-blue-900 bg-white">Agendar consulta</button>
          </div>
        </div>
      </div>
    </section>
  )
}
