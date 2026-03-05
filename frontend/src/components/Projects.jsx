import useScrollAnimation from '../hooks/useScrollAnimation'
import './Projects.css'

const Projects = () => {
  const headerRef = useScrollAnimation()
  const gridRef = useScrollAnimation({ threshold: 0.15 })
  const researchAreas = [
    {
      id: 1,
      category: 'CORE EXPERTISE',
      areas: [
        'Artificial Intelligence & Deep Learning',
        'Signal Processing & Biomedical AI',
        'Edge AI & Embedded Intelligence'
      ]
    },
    {
      id: 2,
      category: 'APPLIED DOMAINS',
      areas: [
        'ECG & EEG-based Health Diagnostics',
        'Disaster Prediction & Risk Modeling',
        'Autonomous & Robotic Systems'
      ]
    },
    {
      id: 3,
      category: 'SECURITY & SOCIETY',
      areas: [
        'AI Safety & Secure Communication',
        'Extremism Detection & Content Security'
      ]
    }
  ]

  return (
    <section className="projects-section">
      <div className="projects-container">
        <div ref={headerRef} className="research-areas-header scroll-animate">
          <h2 className="research-areas-title">RESEARCH AREAS</h2>
          <p className="research-areas-subtitle">
            Our multidisciplinary research spans cutting-edge AI technologies, biomedical innovations, and societal impact applications
          </p>
        </div>
        
        <div ref={gridRef} className="research-areas-grid scroll-animate">
          {researchAreas.map((column) => (
            <div key={column.id} className="research-column">
              <h3 className="research-category">{column.category}</h3>
              <ul className="research-list">
                {column.areas.map((area, index) => (
                  <li key={index} className="research-item">{area}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
