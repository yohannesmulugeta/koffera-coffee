import { Link } from 'react-router-dom';
import useDocumentMeta from '../hooks/useDocumentMeta';

export default function NotFoundPage() {
  useDocumentMeta('Page Not Found');
  return (
    <main id="main-content" className="not-found">
      <div className="not-found__ring" aria-hidden="true" />
      <div className="container not-found__content">
        <span>404</span><h1>This page could not be found.</h1><p>The address may be incorrect or the page may have moved.</p>
        <div className="button-row"><Link className="button button--cream" to="/">Return home</Link><Link className="button button--outline" to="/coffees">View coffee catalogue</Link><Link className="button button--outline" to="/contact">Contact Koffera</Link></div>
      </div>
    </main>
  );
}
