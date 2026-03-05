import useScrollAnimation from '../hooks/useScrollAnimation'
import './AboutSection.css'

const AboutSection = () => {
  const leftCardRef = useScrollAnimation({ threshold: 0.2 })
  const rightCardRef = useScrollAnimation({ threshold: 0.2 })

  return (
    <section className="about-section">
      <div className="about-container">
        {/* Left Card - AI Application */}
        <div ref={leftCardRef} className="about-card about-card-dark scroll-animate">
          <div className="card-content">
            <h2 className="card-title">
              AI Application for seamless collaboration
            </h2>
            
            <div className="features-list">
              <div className="feature-item">
                <div className="feature-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="feature-text">Seamless Integration</span>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="feature-text">Smart Automation</span>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="feature-text">Top-notch Security</span>
              </div>
            </div>

            <p className="card-description">
              With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.
            </p>

            <a href="#getstarted" className="card-button">
              TRY IT NOW
            </a>
          </div>
        </div>

        {/* Right Card - Welcome */}
        <div ref={rightCardRef} className="about-card about-card-light scroll-animate">
          <div className="card-content">
            <div className="welcome-badge">Our Mission</div>
            <h2 className="card-title-large">
              Welcome to VEEMAG R&D Ventures
            </h2>
            
            <p className="card-text">
              Step into the forefront of innovation and sustainability at VEEMAG R&D Ventures, where our pioneering spirit knows no bounds. Here, we're not just shaping the future; we're sculpting it with the transformative power of Artificial Intelligence (AI).
            </p>
            
            <p className="card-text">
              With a relentless commitment to driving positive change, we're illuminating the path towards a more sustainable world, one groundbreaking discovery at a time.
            </p>

            <div className="stats-row">
              <div className="stat-item">
                <div className="stat-number">8+</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">99%</div>
                <div className="stat-label">Accuracy</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">4</div>
                <div className="stat-label">Domains</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
