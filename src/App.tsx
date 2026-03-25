import './index.css'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4'

export default function App() {
  return (
    <div
      className="relative min-h-screen w-full overflow-hidden"
      style={{ background: 'hsl(201,100%,13%)' }}
    >
      {/* ── Video background ── */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={VIDEO_URL}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* ── Face-reduction overlay ── */}
      <div
        className="absolute inset-0 z-[1]"
        style={{ background: 'rgba(0,0,0,0.28)' }}
      />

      {/* ── Content layer ── */}
      <div className="relative z-10 flex flex-col min-h-screen">

        {/* Navigation */}
        <nav className="flex flex-row justify-between items-center px-8 py-6 max-w-7xl mx-auto w-full">
          {/* Logo — subido de text-3xl a ~36px */}
          <span
            className="tracking-tight text-white"
            style={{ fontFamily: "'Instrument Serif', serif", fontSize: '36px' }}
          >
            MIRÓ Labs<sup className="text-xs">®</sup>
          </span>

          {/* Nav links — subido de text-sm a 15px */}
          <div className="hidden md:flex items-center gap-8">
            {['Inicio', 'Estudio', 'Nosotros', 'Diario', 'Contacto'].map((link, i) => (
              <a
                key={link}
                href="#"
                className="transition-colors"
                style={{
                  fontSize: '15px',
                  color: i === 0 ? 'hsl(0,0%,100%)' : 'hsl(240,4%,66%)',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'hsl(0,0%,100%)')}
                onMouseLeave={e =>
                  (e.currentTarget.style.color =
                    i === 0 ? 'hsl(0,0%,100%)' : 'hsl(240,4%,66%)')
                }
              >
                {link}
              </a>
            ))}
          </div>

          {/* CTA nav */}
          <button
            className="liquid-glass rounded-full px-6 py-2.5 text-sm text-white cursor-pointer transition-transform hover:scale-[1.03]"
          >
            Comenzar
          </button>
        </nav>

        {/* Hero — justify-center para centrado vertical */}
        <section className="flex flex-col items-center justify-center text-center px-6 flex-1">
          <h1
            className="text-3xl sm:text-5xl md:text-6xl leading-[1.05] max-w-4xl font-normal animate-fade-rise"
            style={{
              fontFamily: "'Instrument Serif', serif",
              letterSpacing: '-2.46px',
              color: 'hsl(0,0%,100%)',
            }}
          >
            Donde{' '}
            <em className="not-italic" style={{ color: 'hsl(240,4%,66%)' }}>
              la forma encuentra la función,
            </em>{' '}
            y las ideas se vuelven{' '}
            <em className="not-italic" style={{ color: 'hsl(240,4%,66%)' }}>
              sistemas vivos.
            </em>
          </h1>

          <p
            className="text-base sm:text-lg max-w-2xl mt-8 leading-relaxed animate-fade-rise-delay"
            style={{ color: 'hsl(240,4%,66%)' }}
          >
            Somos un laboratorio creativo-tecnológico — diseñadores que programan
            y constructores que piensan con estética. Traducimos sistemas complejos
            en experiencias intuitivas, e ideas en productos vivos y responsivos.
          </p>

          <button
            className="liquid-glass rounded-full px-14 py-5 text-base text-white mt-12 cursor-pointer transition-transform hover:scale-[1.03] animate-fade-rise-delay-2"
          >
            Comenzar
          </button>
        </section>
      </div>
    </div>
  )
}
