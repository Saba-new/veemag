import './Services.css'

const Services = () => {
  const services = [
    {
      id: 1,
      category: 'CUSTOM DEV',
      title: 'Custom software development',
      description: 'Tailored solutions with domain expertise, technical excellence, and full compliance for optimal results.'
    },
    {
      id: 2,
      category: 'WEB APPS',
      title: 'Web application development',
      description: 'Scalable and responsive web applications built with modern frameworks and best practices.'
    },
    {
      id: 3,
      category: 'MOBILE APPS',
      title: 'Mobile application development',
      description: 'Native and cross-platform mobile solutions for iOS and Android with seamless user experiences.'
    },
    {
      id: 4,
      category: 'CLOUD SOLUTIONS',
      title: 'Cloud infrastructure & services',
      description: 'Robust cloud architecture and migration services for scalable and secure operations.'
    },
    {
      id: 5,
      category: 'AI & ML',
      title: 'Artificial intelligence solutions',
      description: 'Advanced machine learning models and AI-powered automation for intelligent decision making.'
    },
    {
      id: 6,
      category: 'DATA ANALYTICS',
      title: 'Data analytics & visualization',
      description: 'Transform raw data into actionable insights with powerful analytics and visualization tools.'
    },
    {
      id: 7,
      category: 'IOT',
      title: 'Internet of Things solutions',
      description: 'Connected device ecosystems with real-time monitoring and intelligent automation capabilities.'
    },
    {
      id: 8,
      category: 'BLOCKCHAIN',
      title: 'Blockchain development',
      description: 'Secure and transparent blockchain solutions for decentralized applications and smart contracts.'
    },
    {
      id: 9,
      category: 'CYBERSECURITY',
      title: 'Security & compliance',
      description: 'Comprehensive security audits, threat detection, and compliance management systems.'
    },
    {
      id: 10,
      category: 'DEVOPS',
      title: 'DevOps & automation',
      description: 'Streamlined deployment pipelines and infrastructure automation for faster delivery cycles.'
    },
    {
      id: 11,
      category: 'UI/UX',
      title: 'User experience design',
      description: 'Intuitive and engaging interface designs that prioritize user satisfaction and accessibility.'
    },
    {
      id: 12,
      category: 'API',
      title: 'API development & integration',
      description: 'RESTful and GraphQL APIs with seamless third-party service integrations.'
    },
    {
      id: 13,
      category: 'E-COMMERCE',
      title: 'E-commerce platforms',
      description: 'Full-featured online stores with payment gateways, inventory management, and analytics.'
    },
    {
      id: 14,
      category: 'CMS',
      title: 'Content management systems',
      description: 'Flexible and user-friendly content management solutions for dynamic web experiences.'
    },
    {
      id: 15,
      category: 'CONSULTING',
      title: 'Technical consulting',
      description: 'Expert guidance on technology strategy, architecture decisions, and digital transformation.'
    },
    {
      id: 16,
      category: 'SUPPORT',
      title: 'Maintenance & support',
      description: 'Ongoing technical support, updates, and optimization for long-term success.'
    }
  ]

  return (
    <section className="services-section" id="services">
      <div className="services-container">
        {/* Section Header */}
        <div className="services-header">
          <h2 className="services-title">Our Services</h2>
          <p className="services-subtitle">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </div>

        {/* Services List - Vertical Layout */}
        <div className="services-horizontal">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-content">
                <span className="service-category">{service.category}</span>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
              <div className="service-icon">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M40 20L50 30L40 40L30 30L40 20Z" fill="currentColor" opacity="0.4"/>
                  <circle cx="40" cy="55" r="10" fill="currentColor" opacity="0.3"/>
                  <path d="M55 40L65 50L55 60" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
