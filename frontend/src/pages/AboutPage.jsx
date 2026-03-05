import './AboutPage.css'

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-page-header">
        <div className="about-page-header-content">
          <h1 className="about-page-title">About VEEMAG</h1>
          <p className="about-page-description">
            Pioneering the future with transformative AI solutions and cutting-edge research
          </p>
        </div>
      </div>

      {/* Content Section - Ready for your content */}
      <section className="about-content-section">
        <div className="about-content-container">
          <h2>Our Story</h2>
          <p>
            {/* Add your about content here */}
            Learn more about VEEMAG R&D Ventures and our mission to shape the future through innovative AI solutions.
          </p>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
