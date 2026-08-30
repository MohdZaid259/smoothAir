import { NavLink } from 'react-router-dom'

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
  return (
    <nav className="main-nav" aria-label="Primary navigation">
      <div className="container nav-inner">
        <div className="nav-links">
          {links.map(({ to, label, end }) => (
            <NavLink key={to} to={to} end={end}>
              {label}
            </NavLink>
          ))}
        </div>
        <button className="enquiry-button" type="button" onClick={() => window.dispatchEvent(new Event('smoothair:enquiry'))}>
          Enquiry
        </button>
      </div>
    </nav>
  )
}

