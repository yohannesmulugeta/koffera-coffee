import {ArrowRight} from '../components/Icons';
import {Link} from 'react-router-dom';
export function LegalPage({title}){return <main className="legal"><div className="wrap"><span className="eye">LEGAL PLACEHOLDER</span><h1>{title}</h1><p>This page requires professionally approved legal content before final launch.</p><Link className="textlink" to="/">Return home <ArrowRight size={16}/></Link></div></main>}
export function NotFoundPage(){return <main className="legal"><div className="wrap"><span className="eye">404</span><h1>Page not found</h1><p>The page may have moved or the address may be incorrect.</p><Link className="btn dark" to="/">Return home</Link></div></main>}
