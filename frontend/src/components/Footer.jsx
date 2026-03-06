import { Link } from 'react-router-dom'
import useScrollAnimation from '../hooks/useScrollAnimation'
import './Footer.css'

const Footer = () => {
  const footerRef = useScrollAnimation({ threshold: 0.1 })
  
  return (
    <footer ref={footerRef} className="footer scroll-animate">
      <div className="footer-container">
        {/* Left Section - About */}
        <div className="footer-section footer-about">
          <div className="footer-logo">
            <span className="footer-logo-text">VEEMAG</span>
          </div>
          <p className="footer-description">
            VEEMAG, where our pioneering spirit knows no bounds. 
            Here, we're not just shaping the future we're sculpting it with the 
            transformative power of Artificial Intelligence.
          </p>
          <div className="footer-social">
            <a href="#facebook" className="social-icon" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="#twitter" className="social-icon" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
            <a href="#instagram" className="social-icon" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#telegram" className="social-icon" aria-label="Telegram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </a>
          </div>
        </div>

        {/* Pages Section */}
        <div className="footer-section footer-links">
          <h3 className="footer-heading">Pages</h3>
          <ul className="footer-list">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/research">RESEARCH</Link></li>
            <li><Link to="/projects">PROJECT</Link></li>
            
            <li><Link to="/contact">CONTACT</Link></li>
          </ul>
        </div>

        {/* Help Section */}
        <div className="footer-section footer-help">
          <h3 className="footer-heading">Help</h3>
          <ul className="footer-list">
            <li><a href="#faqs">FAQs</a></li>
            <li><a href="#how-it-works">How it works</a></li>
            <li><a href="#privacy">Privacy policy</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section footer-contact">
          <h3 className="footer-heading">Get in touch</h3>
          <ul className="footer-list">
            <li><a href="mailto:veemag@gmail.com">veemagrnd@gmail.com</a></li>
            <li><a href="tel:+1234567890">+1234567890</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p className="footer-copyright">
            © Copyright. All rights reserved Veemag
          </p>
          <a href="#terms" className="footer-terms">
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
