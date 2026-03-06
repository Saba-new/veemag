import './TrustedBy.css'

const TrustedBy = () => {
  // Company logos - add your logo images to public/logos/ folder
  const companies = [
    { name: 'Ice River Springs', logo: '/logos/ice-river-springs.png' },
    { name: 'Ubisoft', logo: '/logos/ubisoft.png' },
    { name: 'Technology Partners', logo: '/logos/technology-partners.png' },
    { name: 'Siemon', logo: '/logos/siemon.png' },
    { name: 'PerkinElmer', logo: '/logos/perkinelmer.png' },
    { name: 'Fruit of Love', logo: '/logos/fruit-of-love.png' },
  ]

  return (
    <section className="trusted-by-section">
      <div className="trusted-by-container">
        <h3 className="trusted-by-title">Trusted by Industry Leaders</h3>
        <div className="trusted-by-track-wrapper">
          <div className="trusted-by-track">
            {/* First set of companies */}
            {companies.map((company, index) => (
              <div key={`company-1-${index}`} className="trusted-by-item">
                <img 
                  src={company.logo} 
                  alt={company.name} 
                  className="company-logo"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextElementSibling.style.display = 'block'
                  }}
                />
                <span className="company-name-fallback">{company.name}</span>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {companies.map((company, index) => (
              <div key={`company-2-${index}`} className="trusted-by-item">
                <img 
                  src={company.logo} 
                  alt={company.name} 
                  className="company-logo"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextElementSibling.style.display = 'block'
                  }}
                />
                <span className="company-name-fallback">{company.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustedBy
