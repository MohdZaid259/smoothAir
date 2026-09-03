import { Link } from 'react-router-dom'
import { Award, ShieldCheck, Sparkles } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <Link to="/" className="brand"><span className="brand-mark">SA</span><span className="brand-name">smoothAir<small>CLIMATE SYSTEMS</small></span></Link>
          <p>Reliable air movement and climate solutions, engineered for the UAE.</p>
        </div>
        <div>
          <h3>Explore</h3>
          <Link to="/products">Products & services</Link>
          <Link to="/projects">Project references</Link>
          <Link to="/certifications">Certifications</Link>
          <Link to="/downloads">Download Center</Link>
          <Link to="/location">Location Map</Link>
          <Link to="/contact">Contact us</Link>
        </div>
        <div>
          <h3>Contact</h3>
          <p>+971 56 288 1359<br />info@smoothairuae.com<br />P.O. Box 23113, Al Ain</p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 smoothAir Climate Systems. All rights reserved.</span>
        <span><Award size={12} aria-hidden="true" /> <ShieldCheck size={12} aria-hidden="true" /> <Sparkles size={12} aria-hidden="true" /> Quality • Safety • Performance</span>
      </div>
    </footer>
  )
}
