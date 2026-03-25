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

        {/* Navigation — más compacto, max-w-5xl */}
        <nav className="flex flex-row justify-between items-center px-6 py-4 max-w-5xl mx-auto w-full">
          {/* Logo — 26px */}
          <span
            className="tracking-tight text-white"
            style={{ fontFamily: "'Instrument Serif', serif", fontSize: '26px' }}
          >
            MIRÓ Labs<sup style={{ fontSize: '9px' }}>®</sup>
          </span>

          {/* Nav links — 13px */}
          <div className="hidden md:flex items-center gap-2.5">
            {['Inicio', 'Estudio', 'Nosotros', 'Diario', 'Contacto'].map((link, i) => (
              <div key={link} className="flex items-center gap-2.5">
                {i !== 0 && (
                  <span style={{ color: 'hsl(240,4%,50%)', fontSize: '9px' }}>•</span>
                )}
                <a
                  href="#"
                  className="transition-colors"
                  style={{
                    fontSize: '13px',
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
              </div>
            ))}
          </div>

          {/* CTA nav — más pequeño */}
          <button
            className="liquid-glass rounded-full px-5 py-2 text-white cursor-pointer transition-transform hover:scale-[1.03]"
            style={{ fontSize: '13px' }}
          >
            Comenzar
          </button>
        </nav>

        {/* Hero */}
        <section className="flex flex-col items-center text-center px-6 pt-[18vh] pb-0">
          <h1
            className="font-normal animate-fade-rise"
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: 'clamp(28px, 3.5vw, 48px)',
              lineHeight: '1.1',
              letterSpacing: '-1.2px',
              maxWidth: '720px',
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
            className="animate-fade-rise-delay"
            style={{
              fontSize: '14px',
              maxWidth: '480px',
              marginTop: '24px',
              lineHeight: '1.7',
              color: 'hsl(240,4%,66%)',
            }}
          >
            Somos un laboratorio creativo-tecnológico — diseñadores que programan
            y constructores que piensan con estética. Traducimos sistemas complejos
            en experiencias intuitivas, e ideas en productos vivos y responsivos.
          </p>

          <button
            className="liquid-glass rounded-full text-white cursor-pointer transition-transform hover:scale-[1.03] animate-fade-rise-delay-2"
            style={{ padding: '12px 48px', fontSize: '14px', marginTop: '36px' }}
          >
            Comenzar
          </button>
        </section>
      </div>
    </div>
  )
}
