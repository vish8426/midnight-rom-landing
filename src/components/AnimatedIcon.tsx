import './AnimatedIcon.css'

interface AnimatedIconProps {
  type: 'circle' | 'square' | 'triangle' | 'hexagon' | 'star';
  size?: number;
}

function AnimatedIcon({ type, size = 45 }: AnimatedIconProps) {
  return (
    <div 
      className={`animated-icon ${type}`} 
      style={{ width: size, height: size }}
    />
  )
}

export default AnimatedIcon