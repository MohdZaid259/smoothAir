import { useState } from 'react'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { ArrowRight, Mail, MapPin, MessageSquareText, Phone, Send } from 'lucide-react'

export default function ContactPage() {
  const [sent, setSent] = useState(false)

  return (
    <div className="site-page">
      <Header />
      <Navigation />
      <div className="page-hero page-hero-contact">
        <div className="container">
          <div className="eyebrow"><MessageSquareText size={14} aria-hidden="true" /> Start a conversation</div>
          <h1>Let’s make your project comfortable.</h1>
          <p>Tell us a little about what you’re working on. A member of our team will be in touch.</p>
        </div>
      </div>
      <main className="page-main">
        <div className="container contact-grid">
          <div className="form-card">
            {sent ? (
              <div>
                <h2 className="form-success-title">Thanks for reaching out.</h2>
                <p>We’ve received your enquiry and will be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
                <div className="form-grid">
                  <div className="field"><label htmlFor="name">Your name *</label><input id="name" required placeholder="Jane Smith" /></div>
                  <div className="field"><label htmlFor="email">Email address *</label><input id="email" type="email" required placeholder="jane@company.com" /></div>
                  <div className="field"><label htmlFor="phone">Phone number</label><input id="phone" placeholder="+971 56 288 1359" /></div>
                  <div className="field"><label htmlFor="subject">How can we help?</label><select id="subject" defaultValue=""><option value="" disabled>Select an option</option><option>Product enquiry</option><option>Project quotation</option><option>Technical support</option></select></div>
                  <div className="field full"><label htmlFor="message">Message *</label><textarea id="message" rows={6} required placeholder="Tell us about your requirements..." /></div>
                </div>
                <button className="button" type="submit"><Send size={16} aria-hidden="true" /> Send enquiry</button>
              </form>
            )}
          </div>
          <aside className="info-panel">
            <h2>Contact smoothAir</h2>
            <div className="info-item"><strong><Phone size={14} aria-hidden="true" /> Phone</strong><span>+971 56 288 1359</span></div>
            <div className="info-item"><strong><Mail size={14} aria-hidden="true" /> Email</strong><span>info@smoothairuae.com</span></div>
            <div className="info-item"><strong><MapPin size={14} aria-hidden="true" /> Location</strong><span>P.O. Box 23113, Al Ain</span></div>
            <div className="info-item"><strong><ArrowRight size={14} aria-hidden="true" /> Hours</strong><span>Mon - Sat, 8:00am to 6:00pm</span></div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  )
}
