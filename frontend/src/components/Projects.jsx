import { useRef, useEffect } from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'
import './Projects.css'
import {
  drawSXEchoLite,
  drawEdgeECG,
  drawEEG,
  drawVetraSync,
  drawLLMSec,
  drawSpectra,
  drawBeacon,
  drawSXEchoV3
} from './canvasDrawings'

const Projects = () => {
  const headerRef = useScrollAnimation({ threshold: 0.1 })
  const projects = [
    {
      id: 1,
      name: 'SXEcho Lite',
      tag: 'Acoustic / IoT',
      tagColor: '#00f5c4',
      desc: 'Air-gap secure <span>ultrasonic data transmission</span> for IoT devices. Implements FSK modulation with <span>adaptive error correction</span> for noisy acoustic channels.',
      draw: drawSXEchoLite
    },
    {
      id: 2,
      name: 'EdgeAI ECG Classifier',
      tag: 'Medical / Edge',
      tagColor: '#ff4f6b',
      desc: 'Real-time <span>arrhythmia detection</span> on microcontrollers. Optimized CNN achieving <span>97.3% accuracy</span> with < 2ms latency for embedded diagnostics.',
      draw: drawEdgeECG
    },
    {
      id: 3,
      name: 'Hybrid EEG Model',
      tag: 'Neuroscience / ML',
      tagColor: '#a78bfa',
      desc: '<span>CNN-Transformer hybrid</span> for EEG abnormality detection. Combines spatial convolution with <span>temporal attention</span> for improved anomaly recognition.',
      draw: drawEEG
    },
    {
      id: 4,
      name: 'VetraSync Protocol',
      tag: 'Protocol / Acoustic',
      tagColor: '#f5c400',
      desc: 'Adaptive acoustic sync protocol for <span>multi-device coordination</span>. Dynamic frequency hopping with <span>resilient timing sync</span> under interference.',
      draw: drawVetraSync
    },
    {
      id: 5,
      name: 'LLM Security Framework',
      tag: 'NLP / Safety',
      tagColor: '#ff4f6b',
      desc: '<span>Multilingual toxicity detection</span> for LLMs. Hybrid approach combining pattern matching with <span>contextual embeddings</span> for extremism filtering.',
      draw: drawLLMSec
    },
    {
      id: 6,
      name: 'Sxspectra-lite-live',
      tag: 'Audio / Spectral',
      tagColor: '#00f5c4',
      desc: 'Real-time <span>FFT spectrogram</span> visualization. Efficient DSP pipeline for <span>0–20kHz analysis</span> with minimal latency on embedded systems.',
      draw: drawSpectra
    },
    {
      id: 7,
      name: 'sxBeacon (C++/Python)',
      tag: 'C++ / Packet',
      tagColor: '#f5c400',
      desc: 'Robust file chunking protocol with <span>CRC32 validation</span>. Supports resume-on-failure for <span>reliable acoustic transfer</span> over noisy channels.',
      draw: drawBeacon
    },
    {
      id: 8,
      name: 'SXecho V3.5R',
      tag: 'FSK / Stealth',
      tagColor: '#6b4fff',
      desc: 'Multi-FSK with <span>LDPC + Reed-Solomon</span> encoding. Advanced modulation achieving <span>stealth communication</span> resistant to detection.',
      draw: drawSXEchoV3
    }
  ]

  return (
    <section className="projects-section">
      <header ref={headerRef} className="projects-header scroll-animate">
        <div className="projects-label">Our Innovation</div>
        <h1 className="projects-title">Featured Projects</h1>
      </header>
      <div className="projects-grid">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

const ProjectCard = ({ project }) => {
  const canvasRef = useRef(null)
  const cardRef = useScrollAnimation({ threshold: 0.1 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    const w = 680
    const h = 440
    
    canvas.width = w
    canvas.height = h
    
    project.draw(ctx, w, h)
  }, [project])

  const parseDescription = (desc) => {
    const parts = desc.split(/(<span>.*?<\/span>)/)
    return parts.map((part, idx) => {
      if (part.startsWith('<span>') && part.endsWith('</span>')) {
        const text = part.replace(/<\/?span>/g, '')
        return <span key={idx} className="highlight">{text}</span>
      }
      return part
    })
  }

  return (
    <div ref={cardRef} className="project-card scroll-animate">
      <div className="project-img-wrap">
        <canvas ref={canvasRef} className="project-canvas" />
        <div className="project-tag" style={{ color: project.tagColor }}>
          {project.tag}
        </div>
      </div>
      <div className="project-card-body">
        <h2 className="project-title">{project.name}</h2>
        <p className="project-description">{parseDescription(project.desc)}</p>
      </div>
    </div>
  )
}

export default Projects
