import { useNavigate } from 'react-router-dom'
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'
import Stars from '../components/Stars'
import RansomizerText from '../components/Ransomizer'
import '../App.css'

function LandingPage() {
  const handleEnterClick = () => {
    // Redirect to your Framer site
    window.location.href = 'https://your-framer-site.framer.app'
  }

  return (
    <div className="app">
      {/* Animated Gradient Background */}
      <ShaderGradientCanvas
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          zIndex: -1,
        }}
      >
        <ShaderGradient
          animate="on"
          brightness={0.8}
          cAzimuthAngle={270}
          cDistance={0.5}
          cPolarAngle={180}
          cameraZoom={15.1}
          color1="#73bfc4"
          color2="#ff810a"
          color3="#8da0ce"
          envPreset="city"
          grain="on"
          lightType="env"
          positionX={-0.1}
          positionY={0}
          positionZ={0}
          range="disabled"
          rangeEnd={40}
          rangeStart={0}
          reflection={0.4}
          rotationX={0}
          rotationY={130}
          rotationZ={70}
          shader="defaults"
          type="sphere"
          uAmplitude={3.2}
          uDensity={0.8}
          uFrequency={5.5}
          uSpeed={0.3}
          uStrength={0.3}
          uTime={0}
          wireframe={false}
        />
      </ShaderGradientCanvas>

      {/* Twinkling Stars */}
      <Stars /> 

      {/* Cover Page Content */}
      <div className="cover-content">
        <RansomizerText />
        <p>cinematography through emotion 💿</p>

        <button className="glass-button" onClick={handleEnterClick}>Enter</button>
      </div>
    </div>
  )
}

export default LandingPage