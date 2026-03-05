import { useState } from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'
import './Contact.css'

const Contact = () => {
  const formRef = useScrollAnimation()
  const infoRef = useScrollAnimation({ threshold: 0.2 })
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    try {
      const response = await fetch('http://localhost:5000/api/contact/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setStatus({
          type: 'success',
          message: data.message || 'Thank you! Your message has been sent successfully. We will contact you soon.'
        })
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        throw new Error(data.message || 'Failed to send message')
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message || 'Oops! Something went wrong. Please try again later or contact us directly.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-content">
          {/* Contact Form */}
          <div ref={formRef} className="contact-form-wrapper scroll-animate">
            <div className="form-card">
              <h3 className="form-card-title">Send us a message</h3>
              <p className="form-card-description">
                Please fill in the fields below with your information and message, and we'll get back to you as soon as possible. Your feedback is valuable to us, and we're committed to providing the best possible experience for our visitors.
              </p>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="John Doe"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="How can we help you?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="form-textarea"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                {status.message && (
                  <div className={`form-status ${status.type}`}>
                    {status.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="form-submit-btn"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>

          {/* Info Cards */}
          <div ref={infoRef} className="contact-info-wrapper scroll-animate">
            <div className="info-card">
              <div className="info-card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </div>
              <h4 className="info-card-title">Stay for more updates</h4>
              <p className="info-card-text">
                Thank you for your interest in VEEMAG R&D Ventures. We welcome inquiries, partnership proposals, and opportunities for collaboration. Feel free to reach out to us using the contact information provided below.
              </p>
            </div>

            <div className="info-card info-card-highlight">
              <div className="info-card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </div>
              <h4 className="info-card-title">We will contact you soon..</h4>
              <p className="info-card-text">
                Our team is dedicated to responding to all inquiries within 24-48 hours. We look forward to connecting with you and exploring how we can work together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
