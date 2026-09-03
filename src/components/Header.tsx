import { Link } from 'react-router-dom'
import { Mail, Phone } from 'lucide-react'

export default function Header() {
  return (
    <>
      <div className="top-strip">
        <div className="container top-strip-inner">
          <span className="top-note">Civil Defence Authority Approved Duct Systems Across the UAE</span>
          <div className="top-links">
            <a href="tel:+971562881359"><Phone size={14} aria-hidden="true" /> +971 56 288 1359</a>
            <a href="mailto:info@smoothairuae.com"><Mail size={14} aria-hidden="true" /> info@smoothairuae.com</a>
          </div>
        </div>
      </div>
      <header className="brand-header">
        <div className="container brand-inner">
          <Link to="/" className="brand" aria-label="smoothAir home">
            <span className="brand-mark" aria-hidden="true">SA</span>
            <span className="brand-name">smoothAir<small>CLIMATE SYSTEMS LLC</small></span>
          </Link>
          <div className="header-banner" aria-label="smoothAir product categories">
            FIRE RATED DUCT · VENTILATION DUCT · SMOKE EXHAUST DUCT<br />
            <b>DUCT SYSTEMS ACROSS THE UAE</b>
            <div className="locations">DUBAI  ABU DHABI / AL AIN  SHARJAH  AJMAN  RAS AL KHAIMAH  FUJAIRAH</div>
          </div>
          <span className="years" aria-label="50 years">50<br /><small>YEARS</small></span>
        </div>
      </header>
    </>
  )
}
