import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { company } from '../../data/company';

const coffeeLinks = [
  ['Coffee catalogue', '/coffees', 'Explore illustrative coffee profiles'],
  ['Coffee origins', '/origins', 'Discover Ethiopian origin stories'],
  ['Quality & traceability', '/quality-traceability', 'Review the proposed quality flow'],
];

const serviceLinks = [
  ['Export services', '/export-services', 'From enquiry to shipment'],
  ['Target markets', '/markets', 'Buyer groups Koffera serves'],
  ['Resources', '/resources', 'Profiles, certificates and guides'],
  ['FAQ', '/faq', 'Common buyer questions'],
];

function Brand({ onNavigate }) {
  return (
    <Link className="brand" to="/" aria-label="Koffera Coffee home" onClick={onNavigate}>
      <strong>K<span className="brand__bean">O</span>FFERA</strong>
      <small>COFFEE EXPORT</small>
    </Link>
  );
}

function Dropdown({ label, links, active, onNavigate }) {
  return (
    <div className="nav-dropdown">
      <button className={active ? 'is-current' : ''} type="button" aria-haspopup="true">
        {label} <span aria-hidden="true">⌄</span>
      </button>
      <div className="nav-dropdown__panel">
        {links.map(([title, to, text]) => (
          <Link key={to} to={to} onClick={onNavigate}>
            <strong>{title}</strong>
            <small>{text}</small>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const closeNavigation = () => setOpen(false);

  const coffeeActive = ['/coffees', '/origins', '/quality-traceability'].some((path) => pathname.startsWith(path));
  const servicesActive = ['/export-services', '/markets', '/resources', '/faq'].some((path) => pathname.startsWith(path));

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <div className="top-bar">
        <div className="container top-bar__inner">
          <span>{company.tagline}</span>
          <span>{company.location}</span>
        </div>
      </div>
      <header className="site-header">
        <div className="container site-header__inner">
          <Brand onNavigate={closeNavigation} />
          <button
            className="mobile-menu-button"
            type="button"
            aria-expanded={open}
            aria-controls="primary-navigation"
            aria-label={open ? 'Close navigation' : 'Open navigation'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? '×' : '☰'}
          </button>
          <nav id="primary-navigation" className={`primary-nav ${open ? 'is-open' : ''}`} aria-label="Primary navigation">
            <NavLink to="/" onClick={closeNavigation}>Home</NavLink>
            <Dropdown label="Coffee" links={coffeeLinks} active={coffeeActive} onNavigate={closeNavigation} />
            <Dropdown label="Services" links={serviceLinks} active={servicesActive} onNavigate={closeNavigation} />
            <NavLink to="/about" onClick={closeNavigation}>About</NavLink>
            <NavLink to="/contact" onClick={closeNavigation}>Contact</NavLink>
            <Link className="button button--small" to="/request-offer" onClick={closeNavigation}>Request an offer →</Link>
          </nav>
        </div>
      </header>
    </>
  );
}
