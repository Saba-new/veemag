import useScrollAnimation from '../hooks/useScrollAnimation'
import Contact from '../components/Contact'
import './ContactPage.css'

const ContactPage = () => {
  const headerRef = useScrollAnimation({ threshold: 0.1 })

  return (
    <div className="contact-page">
      <div ref={headerRef} className="contact-page-header scroll-animate">
        <div className="contact-page-header-content">
          <h1 className="contact-page-title">Get In Touch</h1>
          <p className="contact-page-description">
            Check back regularly for updates and new additions to our document repository.
          </p>
        </div>
      </div>
      <Contact />
    </div>
  )
}

export default ContactPage
