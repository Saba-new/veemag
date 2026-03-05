import { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
  const navigate = useNavigate()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [user, setUser] = useState(null)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Check if user is logged in
  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setUser(null)
    closeMobileMenu()
    window.location.href = '/'
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo">
          <Link to="/">
            <span className="logo-text">VEEMAG</span>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="nav-menu">
          <li className="nav-item">
            <NavLink to="/" className="nav-link" end>HOME</NavLink>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link">ABOUT</a>
          </li>
          <li className="nav-item">
            <NavLink to="/projects" className="nav-link">PROJECTS</NavLink>
          </li>
          <li className="nav-item">
            <a href="#technologies" className="nav-link">TECHNOLOGIES</a>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-link">CONTACT</NavLink>
          </li>
        </ul>

        {/* CTA Buttons */}
        <div className="nav-actions">
          {user ? (
            <>
              <span className="user-name">Hi, {user.name}</span>
              <button onClick={handleLogout} className="btn-secondary">Logout</button>
            </>
          ) : (
            <>
              <NavLink to="/auth" className="btn-secondary">Sign In</NavLink>
              <NavLink to="/contact" className="btn-primary">Get Started</NavLink>
            </>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <ul className="mobile-nav-links">
          <li><NavLink to="/" className="mobile-nav-link" onClick={closeMobileMenu} end>Home</NavLink></li>
          <li><a href="#about" className="mobile-nav-link" onClick={closeMobileMenu}>About</a></li>
          <li><NavLink to="/projects" className="mobile-nav-link" onClick={closeMobileMenu}>Projects</NavLink></li>
          <li><a href="#technologies" className="mobile-nav-link" onClick={closeMobileMenu}>Technologies</a></li>
          <li><NavLink to="/contact" className="mobile-nav-link" onClick={closeMobileMenu}>Contact</NavLink></li>
        </ul>
        <div className="mobile-nav-actions">
          {user ? (
            <>
              <span className="mobile-user-name">Hi, {user.name}</span>
              <button onClick={handleLogout} className="btn-secondary-mobile">Logout</button>
            </>
          ) : (
            <>
              <NavLink to="/auth" className="btn-secondary-mobile" onClick={closeMobileMenu}>Sign In</NavLink>
              <NavLink to="/contact" className="btn-primary-mobile" onClick={closeMobileMenu}>Get Started</NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
