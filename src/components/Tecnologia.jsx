// Sección "Tecnología e Innovación"

const CAPACIDADES = [
  { t: 'Cirugía robótica', d: 'Iniciando la era de la cirugía robótica de columna en el Hospital Angeles Health System.' },
  { t: 'Neuroimagen de precisión', d: 'Resonancia y tomografía de alta resolución para diagnósticos milimétricos.' },
  { t: 'IA diagnóstica', d: 'Inteligencia artificial que asiste la detección temprana y la planeación quirúrgica.' },
  { t: 'Anatomía digital', d: 'Modelado 3D y planeación virtual — respaldados por la embajada UNESCO de Anatomía Digital.' },
]

export default function Tecnologia() {
  return (
    <section id="tecnologia" className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg,#021228,#0a2a4d 60%,#0a4f8f)' }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 85% 15%, rgba(26,111,196,0.35), transparent 55%)' }} />
      <div className="relative max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          <div className="rounded-3xl overflow-hidden order-2 lg:order-1" style={{ boxShadow: '0 24px 70px rgba(0,0,0,0.4)' }}>
            <img src="/a1-mri.png" alt="Sala de neuroimagen" className="w-full h-64 sm:h-80 object-cover" />
          </div>

          <div className="order-1 lg:order-2 text-white">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: '#7fb0e6' }}>Tecnología e Innovación</p>
            <h2 className="font-bold mb-5" style={{ fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              Infraestructura de<br />
              <span style={{ background: 'linear-gradient(90deg,#60a5fa,#93c5fd)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                alta especialidad
              </span>
            </h2>
            <p className="text-blue-100 text-base sm:text-lg leading-relaxed mb-8">
              Combinamos robótica, imagen de precisión e inteligencia artificial para llevar la
              neurocirugía a un nuevo estándar de seguridad y exactitud.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {CAPACIDADES.map((c) => (
                <div key={c.t} className="p-4 rounded-2xl"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', backdropFilter: 'blur(6px)' }}>
                  <h3 className="font-semibold text-white text-sm mb-1">{c.t}</h3>
                  <p className="text-blue-200 text-xs leading-snug">{c.d}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
