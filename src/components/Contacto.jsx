// Sección "Contacto / Agendar" + Footer global

export default function Contacto() {
  return (
    <>
      <section id="contacto" className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden"
        style={{ background: 'linear-gradient(160deg,#0a4f8f,#021228 70%,#0a2a4d)' }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(circle at 20% 30%, rgba(26,111,196,0.35), transparent 55%)' }} />
        <div className="relative max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          <div className="text-white">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: '#7fb0e6' }}>Contacto</p>
            <h2 className="font-bold mb-5" style={{ fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              Agenda tu valoración
            </h2>
            <p className="text-blue-100 text-base sm:text-lg leading-relaxed mb-8">
              Da el primer paso hacia tu salud cerebral. Nuestro equipo te orientará hacia el
              especialista indicado.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(255,255,255,0.1)' }}>
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#93c5fd" strokeWidth="1.8"><path d="M12 21s-7-4.5-9-9a5 5 0 019-3 5 5 0 019 3c-2 4.5-9 9-9 9z" strokeLinecap="round" strokeLinejoin="round" /><circle cx="12" cy="10" r="2.5" /></svg>
                </div>
                <div><p className="text-white text-sm font-medium">Hospital Ángeles del Pedregal</p><p className="text-blue-300 text-xs">Centro de Neurociencias Avanzadas</p></div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(255,255,255,0.1)' }}>
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#93c5fd" strokeWidth="1.8"><path d="M4 5h5l2 5-3 2a12 12 0 006 6l2-3 5 2v5a2 2 0 01-2 2A17 17 0 013 7a2 2 0 012-2z" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <div><p className="text-white text-sm font-medium">Agenda telefónica</p><p className="text-blue-300 text-xs">Lun a Vie · 8:00 – 20:00</p></div>
              </div>
            </div>
          </div>

          {/* Formulario (demo, sin envío) */}
          <div className="rounded-3xl p-6 sm:p-8" style={{ background: 'rgba(255,255,255,0.97)', boxShadow: '0 20px 60px rgba(2,18,40,0.4)' }}>
            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div><label className="block text-xs font-semibold text-gray-500 mb-1.5">Nombre</label><input className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-blue-500" placeholder="Tu nombre" /></div>
                <div><label className="block text-xs font-semibold text-gray-500 mb-1.5">Teléfono</label><input className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-blue-500" placeholder="Tu teléfono" /></div>
              </div>
              <div><label className="block text-xs font-semibold text-gray-500 mb-1.5">Correo</label><input className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-blue-500" placeholder="tu@correo.com" /></div>
              <div><label className="block text-xs font-semibold text-gray-500 mb-1.5">Motivo de consulta</label><textarea rows="3" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-blue-500 resize-none" placeholder="Cuéntanos brevemente" /></div>
              <button type="button" className="w-full py-4 rounded-full font-semibold text-white transition-all hover:scale-[1.02]"
                style={{ background: 'linear-gradient(135deg,#1a6fc4,#0a4f8f)', boxShadow: '0 8px 24px rgba(10,79,143,0.4)' }}>
                Solicitar cita
              </button>
              <p className="text-center text-gray-400 text-xs">Te contactaremos en menos de 24 horas hábiles.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#021228' }} className="px-4 sm:px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-8 border-b border-white/10">
            <img src="/logo-oficial-blanco.png" alt="Hospital Angeles — Centro de Neurociencias Avanzadas" className="h-10 w-auto" />
            <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
              {[['El Modelo', '#modelo'], ['Viaje del Paciente', '#viaje'], ['Especialidades', '#especialidades'], ['Equipo', '#equipo'], ['Revista', '#revista'], ['Contacto', '#contacto']].map(([l, h]) => (
                <a key={h} href={h} className="text-blue-200 hover:text-white transition-colors">{l}</a>
              ))}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-6">
            <p className="text-blue-400 text-xs">© 2026 Hospital Angeles · Centro de Neurociencias Avanzadas</p>
            <p className="text-blue-500 text-xs">Innovación con IA médica · N3 Labs</p>
          </div>
        </div>
      </footer>
    </>
  )
}
