import useScrollAnimation from '../hooks/useScrollAnimation'
import './ResearchPage.css'

const ResearchPage = () => {
  const headerRef = useScrollAnimation({ threshold: 0.1 })
  const gridRef = useScrollAnimation({ threshold: 0.15 })

  return (
    <div className="research-page">
      {/* Research Areas Section */}
      <section className="research-areas-section">
        <div className="research-areas-container">
          <div ref={headerRef} className="section-header scroll-animate">
            <span className="section-badge">Research Focus</span>
            <h2 className="section-title">Our Core Research Areas</h2>
            <p className="section-description">
              Advancing the frontiers of AI and emerging technologies with interdisciplinary research
            </p>
          </div>

          <div ref={gridRef} className="research-areas-grid scroll-animate">
            <div className="research-area-card" data-aos="fade-up" data-aos-delay="0">
              <div className="area-icon-wrapper">
                <div className="area-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                    <path d="M2 17l10 5 10-5"/>
                    <path d="M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <div className="area-glow"></div>
              </div>
              <h3 className="area-title">Trustworthy Artificial Intelligence</h3>
              <p className="area-description">Building AI systems with transparency, fairness, and accountability at their core</p>
            </div>

            <div className="research-area-card" data-aos="fade-up" data-aos-delay="100">
              <div className="area-icon-wrapper">
                <div className="area-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                  </svg>
                </div>
                <div className="area-glow"></div>
              </div>
              <h3 className="area-title">Biomedical Signal Intelligence</h3>
              <p className="area-description">Advanced ECG and EEG analysis for predictive healthcare and cognitive insights</p>
            </div>

            <div className="research-area-card" data-aos="fade-up" data-aos-delay="200">
              <div className="area-icon-wrapper">
                <div className="area-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                </div>
                <div className="area-glow"></div>
              </div>
              <h3 className="area-title">Secure Communication Systems</h3>
              <p className="area-description">Next-generation encryption and secure protocols for mission-critical applications</p>
            </div>

            <div className="research-area-card" data-aos="fade-up" data-aos-delay="300">
              <div className="area-icon-wrapper">
                <div className="area-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2a10 10 0 1 0 10 10H12V2z"/>
                    <path d="M12 2v10h10"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </div>
                <div className="area-glow"></div>
              </div>
              <h3 className="area-title">AI for Mental Health & Cognitive Analysis</h3>
              <p className="area-description">Leveraging AI to understand and support mental wellness and cognitive function</p>
            </div>

            <div className="research-area-card" data-aos="fade-up" data-aos-delay="400">
              <div className="area-icon-wrapper">
                <div className="area-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                    <line x1="12" y1="22.08" x2="12" y2="12"/>
                  </svg>
                </div>
                <div className="area-glow"></div>
              </div>
              <h3 className="area-title">Environmental Intelligence & Disaster Prediction</h3>
              <p className="area-description">AI-powered forecasting for natural disasters and environmental monitoring</p>
            </div>

            <div className="research-area-card" data-aos="fade-up" data-aos-delay="500">
              <div className="area-icon-wrapper">
                <div className="area-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                    <polyline points="7 7 12 12 17 7"/>
                  </svg>
                </div>
                <div className="area-glow"></div>
              </div>
              <h3 className="area-title">Edge AI & Lightweight Neural Architectures</h3>
              <p className="area-description">Optimized AI models for real-time deployment on resource-constrained devices</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Research Content Section */}
      <section className="research-content-section">
        <div className="research-content-container">
          <div className="research-intro">
            <h2 className="content-title">Research & Innovation</h2>
            <p className="content-intro">
              We develop advanced artificial intelligence systems designed for real-world reliability, safety, and impact. Our research spans multiple domains including healthcare AI, cognitive systems, signal intelligence, and secure communications.
            </p>
          </div>

          <div className="research-details-grid">
            <div className="research-detail-card">
              <div className="detail-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <path d="M9 12l2 2 4-4"/>
                </svg>
              </div>
              <h3 className="detail-title">AI Robustness & Model Verification</h3>
              <p className="detail-description">
                Developing frameworks that evaluate whether deep neural networks maintain stable internal reasoning under adversarial and environmental stress.
              </p>
              <p className="detail-emphasis">
                This work focuses on ensuring AI systems remain reliable beyond surface-level prediction accuracy.
              </p>
            </div>

            <div className="research-detail-card">
              <div className="detail-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  <path d="M3.5 12h3l2-3 2 6 2-3h3"/>
                </svg>
              </div>
              <h3 className="detail-title">Healthcare AI & Biomedical Signal Intelligence</h3>
              <p className="detail-description">
                Designing advanced deep learning systems for real-time medical signal analysis, including ECG and EEG data.
              </p>
              <p className="detail-emphasis">
                Our models focus on early detection of cardiac conditions, neurological signals, and physiological abnormalities while remaining optimized for deployment on resource-constrained devices.
              </p>
            </div>

            <div className="research-detail-card">
              <div className="detail-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2a10 10 0 0 1 7.67 16.5m-15.34 0A10 10 0 0 1 12 2"/>
                  <path d="M12 16.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9z"/>
                  <path d="M12 2v5"/>
                  <path d="M2 12h5"/>
                  <path d="M12 22v-5"/>
                  <path d="M22 12h-5"/>
                </svg>
              </div>
              <h3 className="detail-title">Cognitive AI & Mental Health Systems</h3>
              <p className="detail-description">
                Building intelligent systems capable of analyzing neurological and behavioral signals to detect stress, depression, and panic conditions.
              </p>
              <p className="detail-emphasis">
                These systems combine machine learning with adaptive interventions to support personalized mental health monitoring.
              </p>
            </div>

            <div className="research-detail-card">
              <div className="detail-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <path d="M12 8v4"/>
                  <path d="M12 16h.01"/>
                </svg>
              </div>
              <h3 className="detail-title">Responsible AI & Harmful Content Detection</h3>
              <p className="detail-description">
                Developing transformer-based systems capable of identifying extremism, propaganda, and harmful digital content across multilingual platforms.
              </p>
              <p className="detail-emphasis">
                Our research focuses on improving large-scale automated moderation systems for safer online environments.
              </p>
            </div>

            <div className="research-detail-card">
              <div className="detail-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  <circle cx="12" cy="16" r="1"/>
                  <path d="M8.5 2.5c1.5-1 3.5-1 5 0M6 5c2-1.5 4.5-1.5 6.5 0M10 7.5c.5-.5 1.5-.5 2 0"/>
                </svg>
              </div>
              <h3 className="detail-title">Secure Communication & Signal Intelligence</h3>
              <p className="detail-description">
                Designing advanced communication systems using frequency-hopping, acoustic communication, and covert transmission techniques to ensure secure and resilient data exchange across challenging environments.
              </p>
            </div>

            <div className="research-detail-card">
              <div className="detail-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                  <circle cx="5" cy="8" r="1"/>
                  <circle cx="19" cy="8" r="1"/>
                  <circle cx="8" cy="20" r="1"/>
                </svg>
              </div>
              <h3 className="detail-title">Environmental Intelligence & Disaster Prediction</h3>
              <p className="detail-description">
                Applying machine learning to large-scale environmental and hydrographic data to improve early warning systems for natural disasters such as tsunamis, supporting faster and more accurate forecasting.
              </p>
            </div>

            <div className="research-detail-card">
              <div className="detail-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 12h4l3 9 4-18 3 9h4"/>
                  <circle cx="12" cy="12" r="1"/>
                </svg>
              </div>
              <h3 className="detail-title">Intelligent Signal Classification Systems</h3>
              <p className="detail-description">
                Developing hybrid deep learning architectures for analyzing complex signal environments, including electromagnetic interference detection, acoustic signals, and sensor data classification.
              </p>
            </div>
          </div>

          <div className="research-impact">
            <h3 className="impact-title">Impact</h3>
            <p className="impact-description">
              Our research focuses on building trustworthy AI systems capable of operating in high-risk and real-world environments, bridging the gap between theoretical machine learning and deployable intelligent systems.
            </p>
          </div>
        </div>
      </section>

      {/* Research Collaborations Section */}
      <section className="collaborations-section">
        <div className="collaborations-container">
          <div className="collaborations-header">
            <span className="section-badge">Global Network</span>
            <h2 className="section-title">Research Collaborations</h2>
            <p className="section-description">
              Advancing AI research through strategic partnerships with leading academic institutions worldwide
            </p>
          </div>

          <div className="collaborations-grid">
            <div className="collaboration-card">
              <div className="collab-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
              <h3 className="collab-name">King Mongkut's University of Technology Thonburi (KMUTT)</h3>
              <p className="collab-location">Thailand</p>
            </div>

            <div className="collaboration-card">
              <div className="collab-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
              <h3 className="collab-name">INTI International University</h3>
              <p className="collab-location">Malaysia</p>
            </div>

            <div className="collaboration-card">
              <div className="collab-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
              <h3 className="collab-name">Rajamangala University of Technology Thanyaburi (RMUTT)</h3>
              <p className="collab-location">Thailand</p>
            </div>

            <div className="collaboration-card">
              <div className="collab-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
              <h3 className="collab-name">University of Burgundy</h3>
              <p className="collab-location">France</p>
            </div>

            <div className="collaboration-card">
              <div className="collab-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
              <h3 className="collab-name">Academy of Maritime Education and Training (AMET) University</h3>
              <p className="collab-location">India</p>
            </div>

            <div className="collaboration-card">
              <div className="collab-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
              <h3 className="collab-name">REVA University</h3>
              <p className="collab-location">India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="vision-section">
        <div className="vision-container">
          <div className="vision-content">
            <div className="vision-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
            </div>
            <h2 className="vision-title">Our Vision</h2>
            <p className="vision-description">
              Veemagrnd was founded with the goal of building intelligent systems that operate reliably in complex real-world environments, bridging the gap between advanced AI research and practical deployment.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ResearchPage
