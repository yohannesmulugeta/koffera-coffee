import { Link } from 'react-router-dom';
import { company } from '../../data/company';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div>
          <Link className="brand brand--light" to="/">
            <strong>K<span className="brand__bean">O</span>FFERA</strong>
            <small>COFFEE EXPORT</small>
          </Link>
          <p>{company.summary}</p>
        </div>
        <div>
          <h2>Coffee</h2>
          <Link to="/coffees">Catalogue</Link>
          <Link to="/origins">Origins</Link>
          <Link to="/quality-traceability">Quality & traceability</Link>
        </div>
        <div>
          <h2>Buyer information</h2>
          <Link to="/export-services">Export services</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/request-offer">Request an offer</Link>
        </div>
        <div>
          <h2>Contact</h2>
          <a href={`mailto:${company.email}`}>{company.email}</a>
          <a href={`tel:${company.phone.replaceAll(' ', '')}`}>{company.phone}</a>
          <span>{company.location}</span>
          <span>{company.businessHours}</span>
        </div>
        <div>
          <h2>Information</h2>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
        </div>
      </div>
      <div className="container site-footer__bottom">
        <span>© {new Date().getFullYear()} Koffera Coffee</span>
        <span>Demo content requires final company approval.</span>
      </div>
    </footer>
  );
}
