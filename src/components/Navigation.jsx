import { useState, useEffect } from 'react'
import './Navigation.css'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-content">
        <div className="nav-logo" onClick={() => scrollToSection('hero')}>
          <span className="logo-text">J.D.</span>
        </div>
        <div className="nav-links">
          <button
            className="nav-link"
            onClick={() => scrollToSection('hero')}
          >
            Home
          </button>
          <button
            className="nav-link"
            onClick={() => scrollToSection('about')}
          >
            About
          </button>
          <button
            className="nav-link"
            onClick={() => scrollToSection('projects')}
          >
            Projects
          </button>
          <button
            className="nav-link"
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation

