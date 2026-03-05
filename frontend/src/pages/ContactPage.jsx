import Contact from '../components/Contact'
import './ContactPage.css'

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="contact-page-header">
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
