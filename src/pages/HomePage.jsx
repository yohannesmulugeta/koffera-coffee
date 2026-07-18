import { Link } from 'react-router-dom';
import CoffeeCard from '../components/common/CoffeeCard';
import CTASection from '../components/common/CTASection';
import MediaPlaceholder from '../components/common/MediaPlaceholder';
import ScrollReveal from '../components/common/ScrollReveal';
import SectionHeading from '../components/common/SectionHeading';
import { company } from '../data/company';
import { coffees } from '../data/coffees';
import { markets } from '../data/markets';
import { origins } from '../data/origins';
import { services } from '../data/services';
import useDocumentMeta from '../hooks/useDocumentMeta';

function CoffeePack() {
  return (
    <div className="hero-pack" aria-label="Koffera coffee package placeholder">
      <div className="hero-pack__halo" aria-hidden="true" />
      <div className="hero-pack__bag">
        <div className="hero-pack__beans" aria-hidden="true" />
        <div className="hero-pack__label">
          <strong>KOFFERA</strong>
          <span>Premium Ethiopia</span>
          <b>100% Arabica Coffee</b>
          <small>Replace with final product photography</small>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  useDocumentMeta(null, 'Explore Koffera Coffee, Ethiopian origins, coffee profiles, export services and buyer enquiry information.');

  return (
    <main id="main-content">
      <section className="home-hero">
        <div className="home-hero__ring" aria-hidden="true" />
        <div className="container home-hero__grid">
          <div className="home-hero__content">
            <span className="eyebrow eyebrow--light hero-reveal hero-reveal--1">Authentic Ethiopian coffee</span>
            <h1 className="hero-reveal hero-reveal--2">Ethiopia’s coffee heritage, prepared for the world.</h1>
            <p className="hero-reveal hero-reveal--3">{company.summary}</p>
            <div className="button-row hero-reveal hero-reveal--4">
              <Link className="button button--cream" to="/coffees">Explore our coffee →</Link>
              <Link className="button button--outline" to="/request-offer">Request an offer</Link>
            </div>
            <div className="hero-facts hero-reveal hero-reveal--5">
              <span>✓ Ethiopian Arabica focus</span>
              <span>✓ Professional buyer journey</span>
              <span>✓ Export-oriented information</span>
            </div>
          </div>
          <CoffeePack />
        </div>
      </section>

      <section className="capability-strip" aria-label="Website capabilities">
        <div className="container capability-strip__grid">
          {[
            ['Origin-led', 'Regional coffee stories'],
            ['Buyer-ready', 'Clear product presentation'],
            ['Professional', 'Export information'],
            ['International', 'Partnership focus'],
          ].map(([title, text]) => (
            <div key={title}><span aria-hidden="true">◆</span><p><strong>{title}</strong>{text}</p></div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container split-layout">
          <ScrollReveal className="origin-statement">
            <span className="eyebrow eyebrow--light">From Ethiopia</span>
            <strong>Born at origin.<br />Built for buyers.</strong>
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <SectionHeading eyebrow="The Koffera story" title="A warmer, clearer coffee-export identity." text="The website uses Koffera’s coffee-brown, cream and ivory visual direction while giving buyers direct access to coffees, origins, quality information and export services." />
            <div className="number-list">
              {[
                ['01', 'Authentic positioning', 'Ethiopian identity expressed through product, origin and real operational evidence.'],
                ['02', 'Commercial clarity', 'Coffee information, services and enquiry actions stay easy to find.'],
                ['03', 'Premium restraint', 'Editorial typography, warm materials and subtle motion replace generic template styling.'],
              ].map(([number, title, text]) => <div key={number}><span>{number}</span><p><strong>{title}</strong> {text}</p></div>)}
            </div>
            <Link className="text-link" to="/about">Discover Koffera →</Link>
          </ScrollReveal>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <ScrollReveal><SectionHeading eyebrow="Featured coffee" title="Ethiopian coffees presented with character." text="These profiles demonstrate the intended catalogue structure. Final grades, crop years, specifications and availability must be verified." align="center" /></ScrollReveal>
          <div className="card-grid card-grid--three">
            {coffees.slice(0, 3).map((coffee, index) => <ScrollReveal key={coffee.slug} delay={index * 90}><CoffeeCard coffee={coffee} /></ScrollReveal>)}
          </div>
          <div className="center-action"><Link className="button button--dark" to="/coffees">View the catalogue →</Link></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ScrollReveal><SectionHeading eyebrow="Coffee origins" title="A country of distinctive coffee regions." text="Each final origin page should connect regional character to confirmed suppliers, processes and available coffee lots." /></ScrollReveal>
          <div className="origin-preview-grid">
            {origins.slice(0, 4).map((origin, index) => (
              <ScrollReveal key={origin.slug} delay={index * 70} className={`origin-preview coffee-tone--${origin.tone}`}>
                <span>0{index + 1}</span><h3>{origin.name}</h3><p>{origin.summary}</p>
              </ScrollReveal>
            ))}
          </div>
          <div className="center-action"><Link className="text-link" to="/origins">Explore Ethiopian origins →</Link></div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <ScrollReveal><SectionHeading eyebrow="Export services" title="A clearer path from coffee discovery to shipment." text="Services are structured around what professional buyers need to understand before beginning a transaction." inverse /></ScrollReveal>
          <div className="service-grid">
            {services.slice(0, 4).map((service, index) => (
              <ScrollReveal key={service.number} delay={index * 80} as="article"><span>{service.number}</span><h3>{service.title}</h3><p>{service.text}</p></ScrollReveal>
            ))}
          </div>
          <div className="dark-action"><Link className="button button--cream" to="/export-services">Explore export services →</Link></div>
        </div>
      </section>

      <section className="section section--warm">
        <div className="container split-layout">
          <ScrollReveal><MediaPlaceholder title="Founder portrait" portrait /></ScrollReveal>
          <ScrollReveal delay={120}>
            <SectionHeading eyebrow="Founder and company" title="Leadership supports the coffee story—not the other way around." text="The founder remains visible as part of Koffera’s identity while products, sourcing and buyer needs stay central." />
            <blockquote>“Our final message will focus on Ethiopian coffee quality, trusted relationships and dependable export execution.”</blockquote>
            <p><strong>{company.founder}</strong><br /><small>Founder — final biography required</small></p>
            <Link className="text-link" to="/about">Read the company story →</Link>
          </ScrollReveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ScrollReveal><SectionHeading eyebrow="Who we serve" title="Built for serious coffee buyers." text="Different buyers need different technical, commercial and sourcing information." align="center" /></ScrollReveal>
          <div className="market-grid">
            {markets.slice(0, 4).map((market, index) => (
              <ScrollReveal key={market.title} delay={index * 70} as="article"><span>0{index + 1}</span><h3>{market.title}</h3><p>{market.text}</p><Link to="/markets">Learn more →</Link></ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container split-layout">
          <ScrollReveal><SectionHeading eyebrow="Responsible sourcing" title="Sustainability language must be supported by evidence." text="The final website should show real supplier relationships, traceability records, environmental practices and community programmes instead of relying on broad claims." /><Link className="text-link" to="/quality-traceability">Review quality and traceability →</Link></ScrollReveal>
          <ScrollReveal delay={120}><MediaPlaceholder title="Koffera sourcing and coffee story" /></ScrollReveal>
        </div>
      </section>

      <CTASection title="Bring Ethiopian coffee to your market." text="Tell Koffera the origin, process, grade, quantity, packaging and destination you need." />
    </main>
  );
}
