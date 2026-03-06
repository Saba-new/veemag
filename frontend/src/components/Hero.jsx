import { Link } from 'react-router-dom'
import aiResearchHero from '../assets/ai-research-hero.png'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero-preview">
      <div className="hero-content">
        <div className="hero-text-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Powered by Advanced AI
          </div>
          <h1 className="hero-title">
            Explore the Possibilities of AI Power with <span className="hero-highlight">VEEMAG</span>
          </h1>
          <p className="hero-description">
            Unleash the power of AI within Veemag. Upgrade your productivity with Veemag, the open AI.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="hero-btn-primary">Get Started</Link>
          </div>
          
          <div className="hero-social-proof">
            <div className="social-proof-avatars">
              <div className="avatar avatar-1">T</div>
              <div className="avatar avatar-2">M</div>
              <div className="avatar avatar-3">G</div>
            </div>
            <div className="social-proof-text">
              <div className="social-proof-count">50+ happy clients</div>
              <div className="social-proof-rating">
                <div className="stars">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0L10.163 5.179L16 5.528L11.664 9.292L12.944 15L8 12.179L3.056 15L4.336 9.292L0 5.528L5.837 5.179L8 0Z"/>
                  </svg>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0L10.163 5.179L16 5.528L11.664 9.292L12.944 15L8 12.179L3.056 15L4.336 9.292L0 5.528L5.837 5.179L8 0Z"/>
                  </svg>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0L10.163 5.179L16 5.528L11.664 9.292L12.944 15L8 12.179L3.056 15L4.336 9.292L0 5.528L5.837 5.179L8 0Z"/>
                  </svg>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0L10.163 5.179L16 5.528L11.664 9.292L12.944 15L8 12.179L3.056 15L4.336 9.292L0 5.528L5.837 5.179L8 0Z"/>
                  </svg>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0L10.163 5.179L16 5.528L11.664 9.292L12.944 15L8 12.179L3.056 15L4.336 9.292L0 5.528L5.837 5.179L8 0Z"/>
                  </svg>
                </div>
                <span className="rating-score">4.9</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src={aiResearchHero} alt="AI Research Technology Visualization" />
        </div>
      </div>
      <div className="hero-bg-elements">
        <div className="hero-grid"></div>
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
        <div className="hero-orb hero-orb-3"></div>
      </div>
    </section>
  )
}

export default Hero
