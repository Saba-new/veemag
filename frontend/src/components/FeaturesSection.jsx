import { Link } from 'react-router-dom'
import './FeaturesSection.css'

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <div className="features-container">
        <h2 className="features-main-title">
          Your AI partner for innovation, delivered strategically
        </h2>

        <div className="features-grid">
          {/* Large Hero Card */}
          <div className="feature-card feature-card-hero">
            <div className="hero-card-content">
              <h3 className="hero-card-title">
                The complete AI Innovation Suite for all your research needs
              </h3>
              <Link to="/contact" className="hero-card-button">
                Let's start!
              </Link>
            </div>
            <div className="hero-card-overlay"></div>
          </div>

          {/* Card 1 - AI Model Development */}
          <div className="feature-card feature-card-small">
            <div className="card-icon card-icon-green">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 4L4 10L16 16L28 10L16 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 22L16 28L28 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 16L16 22L28 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h4 className="card-title">AI Model Development</h4>
            <p className="card-description">
              Build custom AI models with 99% accuracy. VEEMAG delivers precision-trained algorithms tailored to your industry needs, from concept to deployment in record time.
            </p>
            <Link to="/research" className="card-link">
              Learn more
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          {/* Card 2 - Data Analytics */}
          <div className="feature-card feature-card-small">
            <div className="card-icon card-icon-purple">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28 28H4V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M28 10L18 18L12 14L4 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="18" cy="18" r="2" fill="currentColor"/>
                <circle cx="12" cy="14" r="2" fill="currentColor"/>
                <circle cx="28" cy="10" r="2" fill="currentColor"/>
              </svg>
            </div>
            <h4 className="card-title">Data Analytics & Insights</h4>
            <p className="card-description">
              Transform raw data into actionable intelligence. Our comprehensive datasets and advanced analytics platforms deliver real-time insights that drive strategic decisions.
            </p>
            <Link to="/projects" className="card-link">
              Learn more
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          {/* Card 3 - Research & Innovation */}
          <div className="feature-card feature-card-small">
            <div className="card-icon card-icon-blue">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 4C9.373 4 4 9.373 4 16C4 22.627 9.373 28 16 28C22.627 28 28 22.627 28 16C28 9.373 22.627 4 16 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 10V16L20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="16" cy="16" r="2" fill="currentColor"/>
              </svg>
            </div>
            <h4 className="card-title">Research & Innovation Lab</h4>
            <p className="card-description">
              Access cutting-edge AI research and experimentation facilities. Collaborate with our expert team to pioneer breakthrough solutions that shape the future of technology.
            </p>
            <Link to="/research" className="card-link">
              Learn more
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
