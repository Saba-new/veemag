import './CareersPage.css'

const CareersPage = () => {
  return (
    <div className="careers-page">
      <div className="careers-page-header">
        <div className="careers-page-header-content">
          <h1 className="careers-page-title">Join Our Team</h1>
          <p className="careers-page-description">
            Build the future with us - explore career opportunities at VEEMAG
          </p>
        </div>
      </div>

      {/* Content Section - Ready for your content */}
      <section className="careers-content-section">
        <div className="careers-content-container">
          <h2>Why Work With Us?</h2>
          <p>
            {/* Add your careers content here */}
            Discover exciting career opportunities and join our innovative team.
          </p>
        </div>
      </section>
    </div>
  )
}

export default CareersPage
