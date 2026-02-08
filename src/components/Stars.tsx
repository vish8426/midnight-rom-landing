import { useEffect, useRef } from 'react'
import './Stars.css'

interface Star {
  x: number
  y: number
  size: number
  opacity: number
  twinkleSpeed: number
}

function Stars() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set Canvas Size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Function to draw a star shape with glow
    const drawStar = (
      cx: number,
      cy: number,
      spikes: number,
      outerRadius: number,
      innerRadius: number,
      opacity: number
    ) => {
      let rot = (Math.PI / 2) * 3
      let x = cx
      let y = cy
      const step = Math.PI / spikes

      // Create Glow Effect - Multiple Layers
      const glowLayers = 3
      for (let i = glowLayers; i > 0; i--) {
        ctx.beginPath()
        ctx.moveTo(cx, cy - outerRadius * (1 + i * 0.3))
        
        let glowRot = rot
        for (let j = 0; j < spikes; j++) {
          x = cx + Math.cos(glowRot) * outerRadius * (1 + i * 0.3)
          y = cy + Math.sin(glowRot) * outerRadius * (1 + i * 0.3)
          ctx.lineTo(x, y)
          glowRot += step

          x = cx + Math.cos(glowRot) * innerRadius * (1 + i * 0.3)
          y = cy + Math.sin(glowRot) * innerRadius * (1 + i * 0.3)
          ctx.lineTo(x, y)
          glowRot += step
        }

        ctx.lineTo(cx, cy - outerRadius * (1 + i * 0.3))
        ctx.closePath()
        
        // Glow gets fainter and more transparent as it goes outward
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.abs(opacity) * (0.15 / i)})`
        ctx.fill()
      }

      // Draw the Main Star
      ctx.beginPath()
      ctx.moveTo(cx, cy - outerRadius)

      for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius
        y = cy + Math.sin(rot) * outerRadius
        ctx.lineTo(x, y)
        rot += step

        x = cx + Math.cos(rot) * innerRadius
        y = cy + Math.sin(rot) * innerRadius
        ctx.lineTo(x, y)
        rot += step
      }

      ctx.lineTo(cx, cy - outerRadius)
      ctx.closePath()
      
      // Bright Center
      ctx.fillStyle = `rgba(255, 255, 255, ${Math.abs(opacity)})`
      ctx.fill()
      
      // Add extra Brightness to Center
      ctx.shadowBlur = 10 * Math.abs(opacity)
      ctx.shadowColor = `rgba(255, 255, 255, ${Math.abs(opacity) * 0.8})`
      ctx.fill()
      ctx.shadowBlur = 0
    }

    // Create Stars
    const starCount = 800
    const stars: Star[] = []

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        opacity: Math.random(),
        twinkleSpeed: Math.random() * 0.01 + 0.001
      })
    }

    // Animation loop
    let animationFrameId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      stars.forEach(star => {
        // Update Opacity for Twinkling Effect
        star.opacity += star.twinkleSpeed
        if (star.opacity > 1 || star.opacity < 0) {
          star.twinkleSpeed = -star.twinkleSpeed
        }

        // Draw 8-pointed Star with Glow
        drawStar(
          star.x,
          star.y,
          10,  // 8 points
          star.size,
          star.size * 0.4,
          star.opacity
        )
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="stars-canvas" />
}

export default Stars