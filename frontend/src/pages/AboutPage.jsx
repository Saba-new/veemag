import useScrollAnimation from '../hooks/useScrollAnimation'
import './AboutPage.css'

const AboutPage = () => {
  const headerRef = useScrollAnimation({ threshold: 0.1 })
  const visionRef = useScrollAnimation({ threshold: 0.15 })
  const teamRef = useScrollAnimation({ threshold: 0.15 })

  return (
    <div className="about-page">
      {/* Hero Header */}
      <div ref={headerRef} className="about-page-header scroll-animate">
        <div className="about-page-header-content">
          <div className="about-badge">
            <span className="badge-dot"></span>
            About Us
          </div>
          <h1 className="about-page-title">
            Pioneering AI Innovation for a <span className="highlight-text">Sustainable Future</span>
          </h1>
          <p className="about-page-description">
            At VEEMAG, we're pushing the boundaries of artificial intelligence to create solutions that matter. Our team of researchers and engineers is dedicated to developing cutting-edge AI technologies that drive innovation and positive change across industries.
          </p>
        </div>  
      </div>

      {/* Vision & Mission Section */}
      <section className="about-section vision-mission-section">
        <div ref={visionRef} className="about-container scroll-animate">
          <div className="vision-mission-card">
            <div className="vision-mission-left">
              <div className="section-badge">Our Purpose</div>
              <h2 className="section-title">Our Vision & Mission</h2>
            </div>
            <div className="vision-mission-right">
              <p className="section-description">
                Our vision for VEEMAG is as grand as it is transformative. We're not content with merely leading in AI-driven innovation; we're forging a new frontier of technological advancement where every innovation serves a greater purpose. Our aim is to sculpt a future where technology isn't just a tool but a force for good, enhancing every aspect of human life and making a tangible impact on global challenges.
              </p>
            </div>
            <div className="vision-mission-glow"></div>
          </div>
        </div>
      </section>

      {/* Team & Expertise Section */}
      <section className="about-section team-section">
        <div ref={teamRef} className="about-container scroll-animate">
          <div className="section-header">
            <div className="section-badge">Our People</div>
            <h2 className="section-title">Multidisciplinary Team and Expertise</h2>
            <p className="section-subtitle">
              Our team comprises experts from diverse backgrounds, including AI research, data science, engineering, and more. With a wealth of knowledge and experience, our multidisciplinary team collaborates seamlessly to tackle complex challenges from multiple angles. Each member brings unique expertise to the table, contributing to our collective success in driving AI-driven innovation forward.
            </p>
          </div>

          <div className="expertise-grid">
            <div className="expertise-card">
              <div className="expertise-icon ai-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                  <line x1="12" y1="22.08" x2="12" y2="12"/>
                </svg>
              </div>
              <h3 className="expertise-title">AI Research</h3>
              <p className="expertise-description">
                Our team of AI researchers is dedicated to pushing the boundaries of what AI can achieve, developing cutting-edge algorithms and models.
              </p>
            </div>

            <div className="expertise-card">
              <div className="expertise-icon data-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="20" x2="18" y2="10"/>
                  <line x1="12" y1="20" x2="12" y2="4"/>
                  <line x1="6" y1="20" x2="6" y2="14"/>
                </svg>
              </div>
              <h3 className="expertise-title">Data Science</h3>
              <p className="expertise-description">
                With expertise in data analysis and interpretation, our data scientists extract valuable insights from complex datasets to inform decision-making.
              </p>
            </div>

            <div className="expertise-card">
              <div className="expertise-icon engineering-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                </svg>
              </div>
              <h3 className="expertise-title">Engineering</h3>
              <p className="expertise-description">
                Our engineering team transforms innovative ideas into robust, scalable solutions that drive real-world impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="about-section achievements-section">
        <div className="about-container">
          <div className="section-header">
            <div className="section-badge">Our Impact</div>
            <h2 className="section-title">Highlights of Achievements</h2>
            <p className="section-subtitle">
              Over the years, VEEMAG has achieved significant milestones and made impactful contributions to AI-driven innovation.
            </p>
          </div>

          <div className="achievements-grid">
            <div className="achievement-card featured">
              <div className="achievement-number">01</div>
              <h3 className="achievement-title">Tsunami Prediction System</h3>
              <p className="achievement-description">
                Development of a highly accurate tsunami prediction system, providing invaluable lead time for disaster preparedness and mitigation efforts.
              </p>
              <div className="achievement-tag">Life-Saving Technology</div>
            </div>

            <div className="achievement-card">
              <div className="achievement-number">02</div>
              <h3 className="achievement-title">AI Innovation</h3>
              <p className="achievement-description">
                Pioneering research in machine learning algorithms that have set new benchmarks in accuracy and efficiency.
              </p>
              <div className="achievement-tag">Research Excellence</div>
            </div>

            <div className="achievement-card">
              <div className="achievement-number">03</div>
              <h3 className="achievement-title">Global Impact</h3>
              <p className="achievement-description">
                Successfully deployed AI solutions across multiple continents, positively affecting millions of lives.
              </p>
              <div className="achievement-tag">Worldwide Reach</div>
            </div>
          </div>
        </div>
      </section>

      {/* Ongoing Initiatives Section */}
      <section className="about-section initiatives-section">
        <div className="about-container">
          <div className="initiatives-card">
            <div className="section-badge">What's Next</div>
            <h2 className="section-title">Ongoing Initiatives</h2>
            <p className="section-description">
              Our commitment to innovation drives us to continuously explore new avenues and undertake ambitious projects. Research and development of AI-powered solutions for healthcare, education, environmental conservation, and other critical domains.
            </p>
            
            <div className="initiatives-grid">
              <div className="initiative-item">
                <div className="initiative-icon healthcare">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                  </svg>
                </div>
                <h4>Healthcare AI</h4>
                <p>Revolutionizing medical diagnostics and patient care</p>
              </div>

              <div className="initiative-item">
                <div className="initiative-icon education">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                  </svg>
                </div>
                <h4>Education</h4>
                <p>Personalized learning experiences powered by AI</p>
              </div>

              <div className="initiative-item">
                <div className="initiative-icon environment">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                    <path d="M2 12h20"/>
                  </svg>
                </div>
                <h4>Environmental Conservation</h4>
                <p>AI solutions for climate change and sustainability</p>
              </div>

              <div className="initiative-item">
                <div className="initiative-icon critical">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 6v6l4 2"/>
                  </svg>
                </div>
                <h4>Critical Infrastructure</h4>
                <p>Protecting and optimizing essential systems</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="about-section founder-section">
        <div className="about-container">
          <div className="section-header">
            <div className="section-badge">Leadership</div>
            <h2 className="section-title">Meet Our Founder</h2>
          </div>

          <div className="founder-card">
            <div className="founder-content">
              <div className="founder-header">
                <div className="founder-avatar">
                  <div className="avatar-placeholder">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                  </div>
                </div>
                <div className="founder-title-block">
                  <h3 className="founder-name">R. S. L. Balaji</h3>
                  <p className="founder-role">Founder & Chief AI Scientist</p>
                  <div className="founder-stats">
                    <div className="stat-item">
                      <span className="stat-number">15+</span>
                      <span className="stat-label">Publications</span>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                      <span className="stat-number">10+</span>
                      <span className="stat-label">Years Research</span>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                      <span className="stat-number">5+</span>
                      <span className="stat-label">AI Systems</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="founder-bio">
                <p className="bio-paragraph">
                  R. S. L. Balaji is an artificial intelligence researcher focused on building reliable, deployable AI systems for real-world environments. His work spans healthcare AI, signal intelligence, secure communication systems, and trustworthy machine learning.
                </p>
                <p className="bio-paragraph">
                  He has authored 15+ peer-reviewed research publications across international journals and conferences, with contributions in biomedical signal analysis, transformer-based moderation systems, disaster prediction models, and neural network robustness verification.
                </p>
                <p className="bio-paragraph">
                  Balaji's research emphasizes practical AI deployment, developing lightweight deep learning systems designed for real-time environments such as medical monitoring, cognitive health systems, and intelligent signal classification.
                </p>
                <p className="bio-paragraph highlight">
                  He founded Veemagrnd to build next-generation intelligent systems that combine scientific research, engineering excellence, and real-world impact.
                </p>
              </div>

              <div className="founder-expertise">
                <h4 className="expertise-heading">Research Focus Areas</h4>
                <div className="expertise-tags">
                  <span className="expertise-tag">Healthcare AI</span>
                  <span className="expertise-tag">Signal Intelligence</span>
                  <span className="expertise-tag">Secure Communications</span>
                  <span className="expertise-tag">Trustworthy ML</span>
                  <span className="expertise-tag">Biomedical Analysis</span>
                  <span className="expertise-tag">Disaster Prediction</span>
                  <span className="expertise-tag">Neural Networks</span>
                  <span className="expertise-tag">Real-time Systems</span>
                </div>
              </div>
            </div>
            <div className="founder-glow"></div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
