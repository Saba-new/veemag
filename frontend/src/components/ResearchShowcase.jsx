import { useEffect, useRef } from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'
import './ResearchShowcase.css'
import { drawTsunami, drawDepression, drawCyber, drawEnv, drawTsunamiPub, drawMentalPub, drawPanicPub, drawChem } from './canvasDrawings'

const ResearchShowcase = () => {
  const headerRef = useScrollAnimation()
  const completedLabelRef = useScrollAnimation()
  const publishedLabelRef = useScrollAnimation()
  
  const completedResearch = [
    {
      id: 1,
      name: "Highly Accurate Tsunami Prediction System",
      badge: "Geophysics · Disaster AI",
      badgeColor: "#1a3a5c",
      accuracy: "99.89%",
      domain: "Seismic / Oceanic ML",
      status: "Done",
      statusColor: "#2d6e4e",
      obj: "Enhance disaster preparedness and response for coastal communities worldwide.",
      method: "ML algorithms analyzing seismic activity, oceanic parameters, and historical event data.",
      outcome: "99.89% accuracy — critical lead time for coastal evacuation and emergency response.",
      draw: drawTsunami
    },
    {
      id: 2,
      name: "Pioneering Research on Depression Detection",
      badge: "Mental Health · NLP",
      badgeColor: "#5c3a8c",
      accuracy: "99–100%",
      domain: "Deep Learning / NLP",
      status: "Done",
      statusColor: "#2d6e4e",
      obj: "Groundbreaking deep learning for depression, stress & suicide risk identification.",
      method: "Advanced DL models analyzing linguistic patterns and behavioral cues from social media.",
      outcome: "99% and 100% accuracy — enabling early intervention and personalized mental support.",
      draw: drawDepression
    },
    {
      id: 3,
      name: "Malicious Activity Detection Model",
      badge: "Cybersecurity · AI",
      badgeColor: "#c24b2a",
      accuracy: "Robust",
     domain: "Anomaly Detection",
      status: "Done",
      statusColor: "#2d6e4e",
      obj: "Detect and prevent malicious activities in digital environments proactively.",
      method: "ML & anomaly detection on network traffic, user behavior, and system logs.",
      outcome: "Robust model identifying and mitigating diverse cyber threats, protecting digital assets.",
      draw: drawCyber
    },
    {
      id: 4,
      name: "Environmental Monitoring Initiative",
      badge: "Climate · Remote Sensing",
      badgeColor: "#2d6e4e",
      accuracy: "In Progress",
      domain: "DL + Satellite Imagery",
      status: "Q4 2025",
      statusColor: "#c28a1a",
      obj: "AI-driven system tracking air quality, deforestation, and biodiversity loss.",
      method: "DL models integrated with satellite imagery, sensor data, and climate models.",
      outcome: "Actionable insights for policymakers — ecosystem protection & climate mitigation.",
      draw: drawEnv
    }
  ]

  const publishedFindings = [
    {
      id: 5,
      name: "Advancing Precision Tsunami Prognostication with Machine Learning",
      badge: "Publication · Disaster Mgmt",
      badgeColor: "#1a3a5c",
      accuracy: "99.89%",
      domain: "Seismic Intelligence",
      status: "Published",
      statusColor: "#2d6e4e",
      desc: "Exceptional accuracy in precision tsunami forecasting — a new standard for safeguarding coastal communities and optimizing emergency response strategies.",
      draw: drawTsunamiPub
    },
    {
      id: 6,
      name: "Revolutionizing Mental Health Diagnosis with Predictive Deep Learning",
      badge: "Publication · Psychology AI",
      badgeColor: "#5c3a8c",
      accuracy: "99%",
      domain: "Predictive Psychiatry",
      status: "Published",
      statusColor: "#2d6e4e",
      desc: "99% accuracy in identifying psychological stress, anxiety levels, and predicting panic attacks — empowering healthcare providers with precise diagnostic insights.",
      draw: drawMentalPub
    },
    {
      id: 7,
      name: "Enhancing Mental Health Management through Advanced Pattern Analysis",
      badge: "Publication · Pattern AI",
      badgeColor: "#5c3a8c",
      accuracy: "99%",
      domain: "Crisis Intervention",
      status: "Published",
      statusColor: "#2d6e4e",
      desc: "Innovative pattern analysis achieving 99% accuracy in panic attack prediction — enabling proactive mental health management and effective crisis intervention.",
      draw: drawPanicPub
    },
    {
      id: 8,
      name: "Pioneering Safety in Chemical Assessment with Deep Learning",
      badge: "Publication · ChemSafety",
      badgeColor: "#c28a1a",
      accuracy: "100%",
      domain: "Toxicology AI",
      status: "Published",
      statusColor: "#2d6e4e",
      desc: "Perfect 100% accuracy in toxicity prediction — revolutionizing chemical safety assessments and ensuring regulatory compliance across diverse chemical domains.",
      draw: drawChem
    }
  ]

  return (
    <section className="research-showcase">
      <header ref={headerRef} className="research-header-main scroll-animate">
        <div className="header-left">
       
          <h1>Applied Intelligence<br/>Research Systems</h1>
        </div>
        <div className="header-right">
          8 Projects<br/>
          4 Domains<br/>
          Accuracy up to 100%
        </div>
      </header>

      <div ref={completedLabelRef} className="section-label scroll-animate"><span>Completed Research</span></div>
      <div className="research-grid">
        {completedResearch.map((project) => (
          <ProjectCard key={project.id} project={project} showFull={true} />
        ))}
      </div>

      <div ref={publishedLabelRef} className="section-label scroll-animate"><span>Published Findings</span></div>
      <div className="research-grid">
        {publishedFindings.map((project) => (
          <ProjectCard key={project.id} project={project} showFull={false} />
        ))}
      </div>
    </section>
  )
}

const ProjectCard = ({ project, showFull }) => {
  const canvasRef = useRef(null)
  const cardRef = useScrollAnimation({ threshold: 0.2 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (canvas) {
      canvas.width = 720
      canvas.height = 400
      const ctx = canvas.getContext('2d')
      project.draw(ctx, 720, 400)
    }
  }, [project])

  return (
    <div ref={cardRef} className="research-card scroll-animate">
      <div className="canvas-wrap">
        <canvas ref={canvasRef} />
        <div 
          className="badge" 
          style={{ 
            color: project.badgeColor,
            borderColor: project.badgeColor
          }}
        >
          {project.badge}
        </div>
        {project.accuracy && project.accuracy !== 'Robust' && project.accuracy !== 'In Progress' && (
          <div className="accuracy-badge">{project.accuracy}</div>
        )}
      </div>
      <div className="card-body">
        <h2>{project.name}</h2>
        <div className="meta-row">
          <div className="meta-item">
            <span className="label">Domain</span>
            <span className="val">{project.domain}</span>
          </div>
          <div className="meta-item">
            <span className="label">Status</span>
            <span className="val">
              <span className="status-dot" style={{ background: project.statusColor }}></span>
              {project.status}
            </span>
          </div>
        </div>
        {showFull ? (
          <div className="desc">
            <strong>Objective —</strong> {project.obj}<br/><br/>
            <strong>Method —</strong> {project.method}<br/><br/>
            <strong>Outcome —</strong> {project.outcome}
          </div>
        ) : (
          <div className="desc">{project.desc}</div>
        )}
      </div>
    </div>
  )
}

export default ResearchShowcase
