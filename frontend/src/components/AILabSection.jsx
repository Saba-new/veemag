import './AILabSection.css'

const AILabSection = () => {
  return (
    <section className="ailab-section">
      <div className="ailab-container">
        <div className="ailab-card">
          {/* Left Content */}
          <div className="ailab-content">
          <h2 className="ailab-title">
            The precision of experts at the speed of AI
          </h2>
          <p className="ailab-subtitle">
            Explore our AI Lab innovation and groundbreaking research.
          </p>
          
          <div className="ailab-features">
            <div className="ailab-feature">
              <div className="feature-icon-check">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span>Research focus areas in cutting-edge AI technologies</span>
            </div>
            
            <div className="ailab-feature">
              <div className="feature-icon-check">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span>Comprehensive datasets powering intelligent solutions</span>
            </div>
            
            <div className="ailab-feature">
              <div className="feature-icon-check">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span>Advanced models trained for precision and efficiency</span>
            </div>
            
            <div className="ailab-feature">
              <div className="feature-icon-check">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span>Real-world experiments validating groundbreaking innovations</span>
            </div>
          </div>

          <button className="ailab-cta">
            <span>Discover AI Lab</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Right Mockup */}
        <div className="ailab-mockup">
          <div className="mockup-card">
            <div className="mockup-header">
              <div className="mockup-logo">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="mockup-title">VEEMAG AI Assistant</span>
              <div className="mockup-actions">
                <button className="mockup-btn">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <rect x="3" y="3" width="12" height="12" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </button>
                <button className="mockup-btn">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M4 4L14 14M14 4L4 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>
            </div>

            <div className="mockup-content">
              <div className="mockup-message user-message">
                How do your AI models contribute to global sustainability goals?
              </div>
              
              <div className="mockup-loading">
                <div className="loading-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </div>
                <span>Analyzing data...</span>
              </div>

              <div className="mockup-message ai-message">
                <div className="ai-response">
                  Our AI research directly contributes to:
                  <div className="impact-grid">
                    <div className="impact-item">
                      <span className="impact-icon">🌍</span>
                      <span className="impact-label">UN SDGs</span>
                    </div>
                    <div className="impact-item">
                      <span className="impact-icon">🚀</span>
                      <span className="impact-label">Global Tech</span>
                    </div>
                    <div className="impact-item">
                      <span className="impact-icon">💚</span>
                      <span className="impact-label">Social Good</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mockup-footer">
              <button className="ask-anything-btn">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
                <span>Ask me anything!</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M8 5V8L10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default AILabSection
