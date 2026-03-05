import ResearchShowcase from '../components/ResearchShowcase'
import Projects from '../components/Projects'
import './ProjectsPage.css'

const ProjectsPage = () => {
  return (
    <div className="projects-page">
      <div className="page-header">
        <div className="page-header-content">
          <h1 className="page-title">What we’re working on</h1>
          <p className="page-description">
           Here's an overview of our impactful projects
          </p>
        </div>
      </div>
      <ResearchShowcase />
      <Projects />
    </div>
  )
}

export default ProjectsPage
