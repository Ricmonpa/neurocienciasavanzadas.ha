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

              {/* WhatsApp directo */}
              <a href="https://wa.me/5215516647108?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita%20en%20el%20Centro%20de%20Neurociencias%20Avanzadas."
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105" style={{ background: '#25D366' }}>
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#fff"><path d="M17.47 14.38c-.29-.15-1.7-.84-1.96-.93-.26-.1-.45-.15-.64.14-.19.29-.74.93-.9 1.12-.17.19-.33.21-.62.07-.29-.15-1.22-.45-2.33-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.59.13-.13.29-.34.43-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.55-.88-2.12-.23-.55-.47-.48-.64-.49l-.55-.01c-.19 0-.5.07-.76.36-.26.29-1 .98-1 2.38s1.02 2.76 1.17 2.95c.14.19 2.01 3.08 4.88 4.32.68.29 1.21.47 1.62.6.68.22 1.3.19 1.79.12.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.34z" /></svg>
                </div>
                <div><p className="text-white text-sm font-medium group-hover:text-green-300 transition-colors">WhatsApp · Centro de Neurociencias HAP</p><p className="text-blue-300 text-xs">+52 1 55 1664 7108</p></div>
              </a>
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
            <img src="/logo-oficial-blanco.png" alt="Hospital Angeles — Centro de Neurociencias Avanzadas" className="h-10 w-auto shrink-0 object-contain" />
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
