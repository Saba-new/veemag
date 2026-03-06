import { useState } from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'
import JobApplicationForm from '../components/JobApplicationForm'
import './CareersPage.css'

const CareersPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedPosition, setSelectedPosition] = useState('')

  // Animation refs
  const heroRef = useScrollAnimation({ threshold: 0.1 })
  const valuesRef = useScrollAnimation({ threshold: 0.15 })
  const benefitsRef = useScrollAnimation({ threshold: 0.15 })
  const positionsRef = useScrollAnimation({ threshold: 0.15 })
  const openAppRef = useScrollAnimation({ threshold: 0.2 })

  const openApplicationModal = (position) => {
    setSelectedPosition(position)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedPosition('')
  }
  const openPositions = [
    {
      id: 1,
      title: 'Senior AI/ML Engineer',
      department: 'Research & Development',
      location: 'Remote / Hybrid',
      type: 'Full-time',
      description: 'Lead development of cutting-edge machine learning models for acoustic communication and signal processing systems.'
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      department: 'Engineering',
      location: 'Remote / Hybrid',
      type: 'Full-time',
      description: 'Build scalable web applications using React, Node.js, and modern cloud technologies.'
    },
    {
      id: 3,
      title: 'Embedded Systems Engineer',
      department: 'Hardware & IoT',
      location: 'On-site',
      type: 'Full-time',
      description: 'Design and develop embedded systems for edge AI and IoT applications with real-time processing capabilities.'
    },
    {
      id: 4,
      title: 'Data Scientist',
      department: 'AI Research',
      location: 'Remote / Hybrid',
      type: 'Full-time',
      description: 'Analyze complex datasets and develop predictive models for medical AI and neuroscience applications.'
    },
    {
      id: 5,
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Remote',
      type: 'Full-time',
      description: 'Manage cloud infrastructure, CI/CD pipelines, and ensure system reliability and security.'
    },
    {
      id: 6,
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Remote / Hybrid',
      type: 'Full-time',
      description: 'Create intuitive and beautiful user experiences for our AI-powered products and research tools.'
    }
  ]

  const benefits = [
    {
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
      title: 'Innovative Projects',
      description: 'Work on cutting-edge AI research projects that make a real-world impact'
    },
    {
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
      title: 'Remote-First',
      description: 'Flexible work arrangements with options for remote, hybrid, or on-site'
    },
    {
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>,
      title: 'Learning & Growth',
      description: 'Continuous learning opportunities, conferences, and professional development'
    },
    {
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs for you and your family'
    },
    {
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
      title: 'Competitive Salary',
      description: 'Market-leading compensation with equity options and performance bonuses'
    },
    {
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
      title: 'Work-Life Balance',
      description: 'Flexible hours, unlimited PTO, and a culture that respects your time'
    }
  ]

  const values = [
    {
      title: 'Innovation First',
      description: 'We push boundaries and explore new possibilities in AI and technology'
    },
    {
      title: 'Collaboration',
      description: 'We believe the best solutions come from diverse teams working together'
    },
    {
      title: 'Impact Driven',
      description: 'Every project we take on aims to create meaningful change in the world'
    },
    {
      title: 'Continuous Learning',
      description: 'We foster a culture of curiosity and ongoing personal development'
    }
  ]

  return (
    <div className="careers-page">
      {/* Hero Section */}
      <div ref={heroRef} className="careers-hero scroll-animate">
        <div className="careers-hero-content">
          <div className="careers-badge">
            <span className="badge-dot"></span>
            Join Our Mission
          </div>
          <h1 className="careers-hero-title">
            Build the Future of AI with <span className="highlight-text">VEEMAG</span>
          </h1>
          <p className="careers-hero-description">
            Join a team of brilliant minds working on groundbreaking AI research and sustainable technology solutions. Shape the future while growing your career.
          </p>
          <div className="careers-stats">
            <div className="stat-item">
              <div className="stat-number">8+</div>
              <div className="stat-label">Research Projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Team Members</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">99%</div>
              <div className="stat-label">Innovation Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Why VEEMAG Section */}
      <section className="careers-section why-veemag-section">
        <div ref={valuesRef} className="careers-container scroll-animate">
          <div className="section-header">
            <h2 className="section-title">Why VEEMAG?</h2>
            <p className="section-description">
              We're not just building software—we're pioneering the future of AI-driven sustainability and innovation
            </p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="careers-section benefits-section">
        <div ref={benefitsRef} className="careers-container scroll-animate">
          <div className="section-header">
            <h2 className="section-title">Benefits & Perks</h2>
            <p className="section-description">
              We invest in our people because they're our greatest asset
            </p>
          </div>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">{benefit.icon}</div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="careers-section positions-section">
        <div ref={positionsRef} className="careers-container scroll-animate">
          <div className="section-header">
            <h2 className="section-title">Open Positions</h2>
            <p className="section-description">
              Find your perfect role and start making an impact
            </p>
          </div>
          <div className="positions-list">
            {openPositions.map((position) => (
              <div key={position.id} className="position-card">
                <div className="position-header">
                  <div>
                    <h3 className="position-title">{position.title}</h3>
                    <div className="position-meta">
                      <span className="meta-item">{position.department}</span>
                      <span className="meta-separator">•</span>
                      <span className="meta-item">{position.location}</span>
                      <span className="meta-separator">•</span>
                      <span className="meta-item">{position.type}</span>
                    </div>
                  </div>
                  <button 
                    className="apply-btn" 
                    onClick={() => openApplicationModal(position.title)}
                  >
                    Apply Now
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
                <p className="position-description">{position.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Application Section */}
      <section className="careers-section open-application-section">
        <div className="careers-container">
          <div ref={openAppRef} className="open-application-card scroll-animate-scale">
            <div className="open-app-content">
              <h2 className="open-app-title">Don't see your role listed?</h2>
              <p className="open-app-description">
                We're always open to exceptional talent. Send us your CV and a note on what you'd like to build — we'll reach out if there's a match, now or in future.
              </p>
            </div>
            <button
              className="open-app-btn"
              onClick={() => openApplicationModal('')}
            >
              Send an open application →
            </button>
          </div>
        </div>
      </section>

      {/* Job Application Modal */}
      <JobApplicationForm
        position={selectedPosition}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  )
}

export default CareersPage
