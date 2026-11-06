// Sección destacada "Cirugía de Columna" — protagonismo en el inicio para campaña Google Ads.
// Enfocada a conversión: propuesta de valor clara + CTAs (agendar / conocer cuándo operarse).

const BENEFICIOS = [
  { t: 'Precisión submilimétrica', d: 'Guiada por el robot Mazor X.', icon: (<path d="M12 2v4M12 18v4M2 12h4M18 12h4M12 8a4 4 0 100 8 4 4 0 000-8z" />) },
  { t: 'Mínimamente invasiva', d: 'Incisiones milimétricas, sin cortar el músculo.', icon: (<path d="M12 2v20M8 5h8M8 9h8M8 13h8M8 17h8" />) },
  { t: 'Recuperación el mismo día', d: 'Menos dolor y menos analgésicos.', icon: (<path d="M13 3l-2 6h4l-2 6M6 21a3 3 0 100-6 3 3 0 000 6z" />) },
  { t: 'Dr. Soriano Sánchez', d: 'Pionero de la Cirugía MIS de Columna.', icon: (<path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />) },
]

export default function CirugiaColumna() {
  return (
    <section id="columna" className="py-16 sm:py-24 px-4 sm:px-6 scroll-mt-20" style={{ background: '#ffffff' }}>
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

        {/* Texto */}
        <div className="order-2 lg:order-1">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-blue-600 mb-4">Cirugía Robótica de Columna</p>
          <h2 className="font-bold text-gray-900 mb-5" style={{ fontSize: 'clamp(1.9rem, 5vw, 2.9rem)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            Deja atrás el dolor de espalda con{' '}
            <span style={{ background: 'linear-gradient(90deg,#1a6fc4,#0a4f8f)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              cirugía mínimamente invasiva
            </span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-7 max-w-xl">
            Con el robot <strong className="text-gray-800">Mazor X</strong> y la técnica del
            <strong className="text-gray-800"> Dr. José Antonio Soriano Sánchez</strong>, operamos la columna
            sin abrir la espalda: menos dolor, menos sangrado y la posibilidad de volver a caminar el mismo día.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {BENEFICIOS.map((b) => (
              <div key={b.t} className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg,#1a6fc4,#0a4f8f)' }}>
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{b.icon}</svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm leading-tight">{b.t}</h3>
                  <p className="text-gray-500 text-xs leading-snug mt-0.5">{b.d}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a href="#contacto"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg,#1a6fc4,#0a4f8f)', boxShadow: '0 8px 24px rgba(10,79,143,0.4)' }}>
              Agendar valoración →
            </a>
            <a href="/articulos/cuando-es-necesaria-una-cirugia-de-columna.html"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-blue-700 border border-blue-200 transition-all hover:bg-blue-50">
              ¿Cuándo necesito operarme?
            </a>
          </div>
        </div>

        {/* Imagen */}
        <div className="order-1 lg:order-2">
          <div className="rounded-3xl overflow-hidden" style={{ boxShadow: '0 24px 70px rgba(10,79,143,0.22)' }}>
            <img src="/cirugia-columna-hero.webp" alt="Cirugía robótica de columna mínimamente invasiva en el Centro de Neurociencias Avanzadas"
              className="w-full h-full object-cover" style={{ aspectRatio: '3 / 2' }} />
          </div>
        </div>

      </div>
    </section>
  )
}
