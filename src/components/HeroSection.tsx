import './HeroSection.css'
import '../fonts/fonts.css'

function HeroSection() {
  return (
    <section className="hero-section" style={{
      position: 'relative',
      backgroundColor: '#2F3136',
      padding: '8rem 2rem',
      textAlign: 'center',
      overflow: 'hidden'
    }}>
      {/* Blurred Background Image */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'url(/imgs/1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'blur(4px) brightness(0.6)',
        zIndex: 0
      }} />

      {/* Noise/Grain Overlay for Vintage Effect */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `
          repeating-conic-gradient(rgba(0,0,0,0.05) 0%, rgba(255,255,255,0.05) 0.0001%, rgba(0,0,0,0.05) 0.0002%),
          linear-gradient(180deg, rgba(47, 49, 54, 0.5) 0%, rgba(28, 28, 30, 0.7) 100%)
        `,
        opacity: 0.8,
        mixBlendMode: 'multiply',
        zIndex: 1
      }} />

      <div className="hero-content" style={{ position: 'relative', zIndex: 2 }}>
        <div className="hero-text-wrapper">
          <h1 className="hero-title" style={{
            color: '#F5F5F0',
            fontSize: 'clamp(2.5rem, 8vw, 5rem)',
            fontWeight: 'normal',
            fontFamily: '"AMORIA", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            letterSpacing: '0.15em',
            marginBottom: '1.5rem',
            whiteSpace: 'nowrap',
            opacity: 0,
            animation: 'fadeIn 1.2s ease-out 0.3s forwards'
          }}>Midnight ROM</h1>
          <p className="hero-subtitle" style={{
            color: '#C8C8D0',
            fontSize: '1.6rem',
            fontWeight: '300',
            fontFamily: "'Crimson Pro', serif",
            fontStyle: 'italic',
            letterSpacing: '0.15em',
            textShadow: `
              0 2px 8px rgba(0, 0, 0, 0.8),
              0 0 20px rgba(245, 245, 240, 0.3),
              0 0 40px rgba(245, 245, 240, 0.2),
              0 0 60px rgba(200, 200, 208, 0.15)
            `,
            marginTop: '2rem',
            opacity: 0,
            animation: 'fadeIn 1.2s ease-out 1s forwards'
          }}>cinematography through emotion 💿</p>
        </div>
      </div>
    </section>
  )
}

export default HeroSection