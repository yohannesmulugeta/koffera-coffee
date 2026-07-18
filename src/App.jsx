import { useEffect, useState } from 'react';
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';

const company = {
  phone: '+251 920 318 757',
  email: 'firaolkebede777@gmail.com',
  location: 'Addis Ababa, Ethiopia',
  founder: 'Firaol Kebede',
};

const coffees = [
  ['Yirgacheffe Washed', 'Yirgacheffe', 'Washed', 'Floral, citrus and tea-like notes — sample copy requiring verification.'],
  ['Guji Natural', 'Guji', 'Natural', 'Berry-led, sweet and full-bodied — sample copy requiring verification.'],
  ['Sidama Washed', 'Sidama', 'Washed', 'Bright acidity and balanced sweetness — sample copy requiring verification.'],
  ['Commercial Arabica', '[Origin required]', '[Process required]', 'Commercial specification and cup information required.'],
];

function ScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
}

function Brand() {
  return <Link className="brand" to="/"><strong>K<span>O</span>FFERA</strong><small>Coffee Export</small></Link>;
}

function Header() {
  const [open, setOpen] = useState(false);
  return <header className="header"><div className="container nav"><Brand/><nav className={open ? 'open' : ''}>
    {['Home','Coffees','About','Contact'].map((label) => {
      const to = label === 'Home' ? '/' : `/${label.toLowerCase()}`;
      return <NavLink key={label} to={to} onClick={() => setOpen(false)}>{label}</NavLink>;
    })}
    <Link className="button small" to="/contact" onClick={() => setOpen(false)}>Request an offer</Link>
  </nav><button className="menu" onClick={() => setOpen(!open)}>{open ? '×' : '☰'}</button></div></header>;
}

function Footer() {
  return <footer><div className="container footer-grid"><div><Brand/><p>Ethiopian coffee export website prototype. Company facts and products must be verified before launch.</p></div><div><h3>Explore</h3><Link to="/coffees">Coffees</Link><Link to="/about">About</Link><Link to="/contact">Contact</Link></div><div><h3>Contact</h3><a href={`mailto:${company.email}`}>{company.email}</a><a href={`tel:${company.phone.replace(/\s/g,'')}`}>{company.phone}</a><span>{company.location}</span></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Koffera Coffee.</span><div><Link to="/privacy">Privacy</Link><Link to="/terms">Terms</Link></div></div></footer>;
}

function Media({ label, portrait = false }) {
  return <div className={`media ${portrait ? 'portrait' : ''}`}><span>▶</span><strong>{label}</strong><small>Reserved for your final image or video link.</small></div>;
}

function Title({ eyebrow, title, text, light = false }) {
  return <div className={`section-title ${light ? 'light' : ''}`}><span>{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}

function CoffeeCard({ coffee, index }) {
  const [name, region, process, profile] = coffee;
  return <article className="coffee-card"><div className={`coffee-image image-${index % 3 + 1}`}><span>{process}</span></div><div className="coffee-body"><div className="meta"><span>{region}</span><span>[Grade required]</span></div><h3>{name}</h3><p>{profile}</p><dl><div><dt>Crop year</dt><dd>[Required]</dd></div><div><dt>Altitude</dt><dd>[Required]</dd></div><div><dt>Status</dt><dd>Confirm availability</dd></div></dl><Link to="/contact">Request sample or offer →</Link></div></article>;
}

function Home() {
  return <main>
    <section className="hero"><div className="container hero-grid"><div><span className="eyebrow light">Ethiopian coffee export</span><h1>Traceable Ethiopian coffee for international buyers.</h1><p>A professional desktop and mobile website foundation for Koffera Coffee, designed around coffee discovery, buyer confidence and qualified export inquiries.</p><div className="actions"><Link className="button" to="/contact">Request current offer →</Link><Link className="button outline" to="/coffees">Explore coffees</Link></div><div className="notice">Product specifications, certificates and market claims require verification.</div></div><Media label="Product or brand video"/></div></section>
    <section className="trust"><div className="container trust-grid">{[['Ethiopian Arabica','Origins to be confirmed'],['Quality coordination','Process to be verified'],['Export support','Markets to be confirmed'],['Buyer partnership','Responsive inquiry flow']].map(([a,b]) => <div key={a}><span>◆</span><p><strong>{a}</strong><small>{b}</small></p></div>)}</div></section>
    <section className="section cream"><div className="container"><Title eyebrow="Coffee catalogue" title="Present each coffee as a real export offer." text="These records are clearly marked samples. Replace them with verified grades, crop years, cup profiles and availability."/><div className="cards">{coffees.slice(0,3).map((c,i)=><CoffeeCard coffee={c} index={i} key={c[0]}/>)}</div><div className="center"><Link className="button dark" to="/coffees">View complete catalogue</Link></div></div></section>
    <section className="section"><div className="container split"><div><Title eyebrow="Why Koffera" title="A buyer journey built around evidence, not only claims." text="The redesigned structure places coffees, quality, traceability and export support before long company storytelling."/><ul><li>Structured coffee specifications and availability</li><li>Clear sample and quotation actions</li><li>Space for certificates and traceability evidence</li><li>Responsive design for desktop, tablet and mobile</li></ul></div><Media label="Quality, sourcing or facility video"/></div></section>
    <section className="section green"><div className="container"><Title light eyebrow="Export services" title="Show buyers how Koffera supports the transaction." text="Descriptions are provisional and should be approved against the actual operating process."/><div className="services">{[['Coffee sourcing','Selected origins and grades based on confirmed supply.'],['Quality coordination','Sampling and pre-shipment confirmation workflow.'],['Export documentation','Commercial and shipment documentation.'],['Logistics support','Shipment coordination and buyer communication.']].map(([a,b],i)=><article key={a}><span>0{i+1}</span><h3>{a}</h3><p>{b}</p></article>)}</div></div></section>
    <section className="section"><div className="container split"><Media label="Founder, team or company story" portrait/><div><Title eyebrow="Company story" title="Keep the founder visible without making the homepage founder-first." text="Use a concise, verified story focused on Ethiopian coffee expertise, sourcing relationships and export execution."/><p>Founder: <strong>{company.founder}</strong>. A final biography and professional photograph are still required.</p><Link className="text-link" to="/about">Read about Koffera →</Link></div></div></section>
    <section className="cta"><div className="container"><span className="eyebrow light">Buyer inquiry</span><h2>Looking for Ethiopian coffee for your next purchase?</h2><p>Send your origin, process, grade, quantity and destination requirements.</p><div className="actions centered"><Link className="button" to="/contact">Request an offer</Link><Link className="button outline" to="/contact">Request samples</Link></div></div></section>
  </main>;
}

function Coffees() {
  return <main><section className="page-hero"><div className="container"><span className="eyebrow light">Coffee catalogue</span><h1>Ethiopian coffees presented for professional buyers.</h1><p>These are sample records. Replace all placeholders with approved Koffera data before publishing.</p></div></section><section className="section cream"><div className="container"><div className="toolbar"><span>⌕ Catalogue filters will be connected when product data is approved.</span><button disabled>Region</button><button disabled>Process</button><button disabled>Availability</button></div><div className="cards catalogue">{coffees.map((c,i)=><CoffeeCard coffee={c} index={i} key={c[0]}/>)}</div></div></section></main>;
}

function About() {
  return <main><section className="page-hero"><div className="container"><span className="eyebrow light">About Koffera</span><h1>Built around Ethiopian coffee, international buyers and lasting partnerships.</h1><p>The existing website content is reorganized into a shorter, more credible company story.</p></div></section><section className="section"><div className="container split"><Media label="Founder or company photograph" portrait/><div><Title eyebrow="Company story" title="A clearer introduction to Koffera Coffee." text="Koffera Coffee is presented as an Ethiopian coffee-export business serving roasters, importers and distributors. This must be aligned with the correct legal entity and export licence."/><p>Founder: <strong>{company.founder}</strong>. Add a verified short biography focused on coffee, sourcing and export experience.</p><Link className="text-link" to="/contact">Contact the export team →</Link></div></div></section><section className="section cream"><div className="container"><Title eyebrow="Working principles" title="Values expressed through buyer-facing actions."/><div className="values">{['Quality','Traceability','Partnership','Ethiopian heritage'].map(x=><article key={x}><span>◆</span><h3>{x}</h3><p>Final supporting information and evidence will be added after company verification.</p></article>)}</div></div></section></main>;
}

function Contact() {
  return <main><section className="page-hero"><div className="container"><span className="eyebrow light">Buyer inquiry</span><h1>Tell Koffera what coffee you are looking for.</h1><p>This form is ready for design review. Email delivery and spam protection still need connection.</p></div></section><section className="section cream"><div className="container contact-grid"><aside><h2>Contact details</h2><p>Replace the personal email with a verified company-domain email before final launch.</p><a href={`mailto:${company.email}`}>Email<br/><strong>{company.email}</strong></a><a href={`tel:${company.phone.replace(/\s/g,'')}`}>Phone<br/><strong>{company.phone}</strong></a><div>Location<br/><strong>{company.location}</strong></div><Media label="Office map or facility photograph"/></aside><form onSubmit={e=>e.preventDefault()}><span className="eyebrow">Request information</span><h2>Buyer inquiry form</h2><div className="form-grid"><label>Full name<input required placeholder="Your name"/></label><label>Company<input required placeholder="Company name"/></label><label>Business email<input required type="email" placeholder="name@company.com"/></label><label>Country<input required placeholder="Country"/></label><label>Buyer type<select defaultValue=""><option value="" disabled>Select buyer type</option><option>Roaster</option><option>Importer / distributor</option><option>Retail or private label</option><option>Other</option></select></label><label>Inquiry type<select defaultValue=""><option value="" disabled>Select inquiry</option><option>Request current offer</option><option>Request samples</option><option>General export inquiry</option></select></label><label className="full">Coffee or origin<input placeholder="Example: Guji natural"/></label><label>Estimated quantity<input placeholder="Bags, kg or containers"/></label><label>Destination<input placeholder="Country or port"/></label><label className="full">Message<textarea rows="6" required placeholder="Tell us the grade, process and timing."/></label><button className="button full" type="submit">Submit inquiry</button></div></form></div></section></main>;
}

function Legal({ title }) { return <main className="legal"><div className="container"><span className="eyebrow">Legal placeholder</span><h1>{title}</h1><p>This page must be replaced with professionally approved content before public launch.</p></div></main>; }
function NotFound() { return <main className="not-found"><div><span>404</span><h1>Page not found</h1><Link className="button" to="/">Return home</Link></div></main>; }

export default function App() {
  return <><ScrollTop/><Header/><Routes><Route path="/" element={<Home/>}/><Route path="/coffees" element={<Coffees/>}/><Route path="/about" element={<About/>}/><Route path="/contact" element={<Contact/>}/><Route path="/privacy" element={<Legal title="Privacy Policy"/>}/><Route path="/terms" element={<Legal title="Terms and Conditions"/>}/><Route path="*" element={<NotFound/>}/></Routes><Footer/></>;
}
