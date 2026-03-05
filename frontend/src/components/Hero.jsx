import { Link } from 'react-router-dom'
import aiResearchHero from '../assets/ai-research-hero.png'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero-preview">
      <div className="hero-content">
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
