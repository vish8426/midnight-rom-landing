import { useState, useEffect, useRef } from 'react'
import ExpandingNav from '../components/ExpandingNav'
import HeroSection from '../components/HeroSection'
import '../App.css'

function Homepage() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      {
        threshold: 0.2,
        rootMargin: '0px'
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <div className="app" style={{
      backgroundColor: '#2F3136',
      minHeight: '100vh'
    }}>
      {/* Expanding Navigation */}
      <ExpandingNav />

      {/* Hero Section */}
      <HeroSection />

      {/* Featured Collections Section */}
      <section
        ref={sectionRef}
        style={{
          backgroundColor: '#1C1C1E',
          padding: '6rem 2rem',
          borderTop: '1px solid rgba(200, 200, 208, 0.1)',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
        }}
      >
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 style={{
            color: '#E8E6E1',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 'normal',
            fontFamily: '"AMORIA", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            letterSpacing: '0.12em',
            textAlign: 'center',
            marginBottom: '3rem'
          }}>
            Featured Collections
          </h2>
          {/* Collection content will go here */}
        </div>
      </section>

      {/* Homepage Content */}
      <div className="cover-content" style={{
        padding: '4rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto',
        color: '#F5F5F0'
      }}>
        {/* Add Content Here */}
      </div>
    </div>
  )
}

export default Homepage