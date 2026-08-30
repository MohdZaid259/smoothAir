import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, Send, X } from 'lucide-react'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/products', label: 'Products' },
  { to: '/certifications', label: 'Certifications' },
  { to: '/projects', label: 'Reference' },
  { to: '/downloads', label: 'Download Center' },
  { to: '/contact', label: 'Contact' },
  { to: '/location', label: 'Location Map' },
]

export default function Navigation() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="main-nav" aria-label="Primary navigation">
      <div className="container nav-inner">
        <button className="nav-toggle" type="button" aria-expanded={open} aria-controls="primary-links" onClick={() => setOpen(!open)}>
          {open ? <><X size={18} aria-hidden="true" /> Close</> : <><Menu size={18} aria-hidden="true" /> Menu</>}
        </button>
        <div id="primary-links" className={'nav-links ' + (open ? 'open' : '')}>
          {links.map(({ to, label, end }) => (
            <NavLink key={to} to={to} end={end} onClick={() => setOpen(false)}>
              {label}
            </NavLink>
          ))}
        </div>
        <button className="enquiry-button" type="button" onClick={() => window.dispatchEvent(new Event('smoothair:enquiry'))}>
          <Send size={16} aria-hidden="true" /> Enquiry
        </button>
      </div>
    </nav>
  )
}
