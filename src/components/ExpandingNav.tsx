import { useState } from 'react'
import './ExpandingNav.css'

interface NavItem {
  icon: string;
  label: string;
  path: string;
}

/* const navItems: NavItem[] = [
  { icon: '🏠', label: 'Home', path: '/home' },
  { icon: '📸', label: 'Gallery', path: '/gallery' },
  { icon: '🎬', label: 'Videos', path: '/videos' },
  { icon: 'ℹ️', label: 'About', path: '/about' },
  { icon: '📧', label: 'Contact', path: '/contact' },
] */

const navItems: NavItem[] = [
  { icon: '/icons/home-icon.gif', label: 'Home', path: '/home' },
  { icon: '/icons/portfolio-icon.gif', label: 'Gallery', path: '/gallery' },
  { icon: '/icons/videos-icon.gif', label: 'Videos', path: '/videos' },
  { icon: '/icons/about-icon.gif', label: 'About', path: '/about' },
  { icon: '/icons/contact-icon.gif', label: 'Contact', path: '/contact' },
]

function ExpandingNav() {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleNavClick = (path: string) => {
    console.log('Navigate to:', path)
    // TODO: Add navigation functionality later
  }

  return (
    <div 
      className="expanding-nav"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Main Menu Icon */}
      <div className="nav-trigger">
        {/* <span className="menu-icon">☰</span> */}
        <img src="/icons/menu-icon.gif" alt="Menu" className="menu-icon-img" />
      </div>

      {/* Expanding Navigation Items */}
      <div className={`nav-items ${isExpanded ? 'expanded' : ''}`}>
        {navItems.map((item, index) => (
          <div
            key={item.path}
            className="nav-item"
            style={{ transitionDelay: `${index * 0.05}s` }}
            onClick={() => handleNavClick(item.path)}
            title={item.label}
          >
            {/* <span className="nav-icon">{item.icon}</span> */}
            {/* <span className="nav-label">{item.label}</span> */}
            <img src={item.icon} alt={item.label} className="nav-icon-img" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExpandingNav