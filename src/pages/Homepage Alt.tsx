import PrismaticBurst from '../components/PrismaticBurst'
import ExpandingNav from '../components/ExpandingNav'
import HeroSection from '../components/HeroSection'
import Stack from '../components/Stack'
import '../App.css'

function Homepage() {
  const images = [
    "/imgs/1.jpg",
    "/imgs/2.jpg",
    "/imgs/3.jpg",
    "/imgs/4.jpg",
    "/imgs/5.jpg",
    "/imgs/6.jpg",
    "/imgs/7.jpg"
  ]

  return (
    <div className="app">
      {/* Prismatic Burst Background */}
      <PrismaticBurst
        animationType="rotate3d"
        intensity={2.5}
        speed={0.3}
        distort={5}
        paused={false}
        offset={{ x: 0, y: 0 }}
        hoverDampness={0.25}
        rayCount={12}
        mixBlendMode="lighten"
        colors={['#000000', '#000000', '#000000', '#000000', '#4a1768', '#ff006e']}
      />

      {/* Expanding Navigation */}
      <ExpandingNav />

      {/* Expanding Navigation */}
      <HeroSection />

      {/* Stack Component Section */}
      <div className="stack-section">
        <div style={{ width: 1000, height: 400, margin: '2rem auto' }}>
          <Stack
            randomRotation={true}
            sensitivity={200}
            sendToBackOnClick={true}
            cards={images.map((src, i) => (
              <img 
                key={i} 
                src={src} 
                alt={`car-${i + 1}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            ))}
            autoplay={false}
            autoplayDelay={3000}
            pauseOnHover={false}
          />
        </div>
      </div>

      {/* Homepage Content */}
      <div className="cover-content">

      </div>
    </div>
  )
}

export default Homepage