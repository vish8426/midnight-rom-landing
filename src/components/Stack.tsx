import { useState, useRef, useEffect } from 'react'
import { motion, useMotionValue, useTransform, type PanInfo } from 'framer-motion'
import './Stack.css'

interface StackProps {
  cards: React.ReactNode[]
  randomRotation?: boolean
  sensitivity?: number
  sendToBackOnClick?: boolean
  autoplay?: boolean
  autoplayDelay?: number
  pauseOnHover?: boolean
}

function Stack({
  cards,
  randomRotation = false,
  sensitivity = 200,
  sendToBackOnClick = true,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false
}: StackProps) {
  const [stack, setStack] = useState(cards)
  const [isDragging, setIsDragging] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useTransform(y, [-100, 100], [10, -10])
  const rotateY = useTransform(x, [-100, 100], [-10, 10])

  useEffect(() => {
    if (autoplay && !isDragging && (!pauseOnHover || !isHovered)) {
      const interval = setInterval(() => {
        sendCardToBack()
      }, autoplayDelay)
      return () => clearInterval(interval)
    }
  }, [autoplay, autoplayDelay, isDragging, isHovered, pauseOnHover])

  const sendCardToBack = () => {
    setStack((prev) => {
      const newStack = [...prev]
      const topCard = newStack.shift()
      if (topCard) newStack.push(topCard)
      return newStack
    })
    x.set(0)
    y.set(0)
  }

  const handleDragEnd = (_: any, info: PanInfo) => {
    setIsDragging(false)
    const threshold = sensitivity
    
    if (Math.abs(info.offset.x) > threshold || Math.abs(info.offset.y) > threshold) {
      sendCardToBack()
    } else {
      x.set(0)
      y.set(0)
    }
  }

  const handleClick = () => {
    if (sendToBackOnClick && !isDragging) {
      sendCardToBack()
    }
  }

  const getRotation = (index: number) => {
    if (!randomRotation) return 0
    const seed = index * 1234
    return ((seed % 20) - 10) * 0.5
  }

  return (
    <div 
      className="stack-container"
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {stack.map((card, index) => {
        const isTop = index === 0
        const zIndex = stack.length - index

        return (
          <motion.div
            key={index}
            className={isTop ? 'card-rotate' : 'card-rotate-disabled'}
            style={{
              zIndex,
              x: isTop ? x : 0,
              y: isTop ? y : 0,
              rotateX: isTop ? rotateX : 0,
              rotateY: isTop ? rotateY : 0,
              rotate: getRotation(index),
              scale: 1 - index * 0.05,
              transformOrigin: 'center center'
            }}
            drag={isTop}
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            dragElastic={0.6}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={handleDragEnd}
            onClick={handleClick}
            animate={{
              scale: 1 - index * 0.05,
              y: index * -4,
              opacity: index < 3 ? 1 : 0
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div className="card">
              {card}
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

export default Stack