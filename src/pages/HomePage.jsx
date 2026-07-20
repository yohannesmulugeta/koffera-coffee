import { Link } from 'react-router-dom';
import CoffeeCard from '../components/common/CoffeeCard';
import CTASection from '../components/common/CTASection';
import ScrollReveal from '../components/common/ScrollReveal';
import ScrollWorldExperience from '../components/scroll-world/ScrollWorldExperience';
import { coffees } from '../data/coffees';
import useDocumentMeta from '../hooks/useDocumentMeta';
import '../styles/home-editorial.css';
import '../styles/home-editorial-sections.css';

const capabilities = [
  ['01', 'Origin-led', 'Begin with Ethiopian coffee regions and the story behind each active lot.'],
  ['02', 'Quality-aware', 'Review sample, cup and commercial information before making a decision.'],
  ['03', 'Buyer-ready', 'Structure enquiries around origin, process, grade, quantity and destination.'],
  ['04', 'Export-focused', 'Move from coffee selection to documentation and shipment follow-up.'],
];

const qualitySteps = [
  ['01', 'Requirement', 'Define the origin, process, grade, quantity, packaging and destination.'],
  ['02', 'Sample review', 'Review the relevant sample and available cup information.'],
  ['03', 'Lot confirmation', 'Confirm the commercial and technical information for the selected lot.'],
  ['04', 'Preparation', 'Prepare the coffee against the agreed buyer and shipment requirements.'],
  ['05', 'Documentation', 'Organise the relevant commercial and export documentation.'],
  ['06', 'Shipment follow-up', 'Maintain clear communication as the order moves toward shipment.'],
];

const services = [
  ['01', 'Coffee enquiry', 'Turn buyer requirements into a clear request covering origin, process, grade, volume, packaging and destination.'],
  ['02', 'Quality information', 'Present sample, cup and lot information in a format buyers can review without unnecessary marketing language.'],
  ['03', 'Export documentation', 'Support the documentation journey connected to the agreed coffee and shipment.'],
  ['04', 'Shipment communication', 'Keep the buyer informed as preparation, documentation and logistics progress.'],
];

const buyerPaths = [
  ['01', 'Explore Ethiopian origins', 'Review regional coffee stories and the information that must be confirmed for active Koffera lots.', '/origins'],
  ['02', 'Review quality and traceability', 'Understand the proposed journey from buyer requirements and sample review through shipment follow-up.', '/quality-traceability'],
  ['03', 'Prepare an export enquiry', 'Provide the commercial details Koffera needs to assess and respond to a coffee request.', '/request-offer'],
];

export default function HomePage() {
  useDocumentMeta(null, 'Follow Ethiopian coffee from highland origin through harvest, processing, quality review and export preparation with Koffera Coffee.');

  return (
    <main id="main-content">
      <ScrollWorldExperience />

      <div className="home-editorial">
        <section className="home-intro" aria-labelledby="home-intro-title">
          <div className="home-wrap home-intro__grid">
            <ScrollReveal>
              <p className="home-label">Koffera Coffee Export</p>
              <h2 className="home-display" id="home-intro-title">Ethiopian coffee, carried from origin to market with clarity.</h2>
            </ScrollReveal>
            <ScrollReveal className="home-intro__copy" delay={100}>
              <p className="home-copy">The cinematic journey introduces the people, places and work behind the coffee. The sections below give buyers a quieter, practical route into coffees, origins, quality information and export enquiries.</p>
              <div className="home-intro__links">
                <Link className="home-link" to="/coffees">Explore coffee <span aria-hidden="true">→</span></Link>
                <Link className="home-link" to="/request-offer">Request an offer <span aria-hidden="true">→</span></Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="home-ledger" aria-label="Koffera buyer capabilities">
          <div className="home-wrap home-ledger__grid">
            {capabilities.map(([number, title, text], index) => (
              <ScrollReveal as="article" key={number} delay={index * 70}>
                <span>{number}</span><h3>{title}</h3><p>{text}</p>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <section className="home-coffees" aria-labelledby="featured-coffee-title">
          <div className="home-wrap">
            <div className="home-heading">
              <ScrollReveal>
                <p className="home-label">Featured coffee</p>
                <h2 className="home-display" id="featured-coffee-title">Coffee presented as a product, not decoration.</h2>
              </ScrollReveal>
              <ScrollReveal className="home-heading__side" delay={100}>
                <p className="home-copy">Review the current catalogue structure while final grades, crop years, specifications and availability are confirmed for publishable lots.</p>
                <Link className="home-link" to="/coffees">View the catalogue <span aria-hidden="true">→</span></Link>
              </ScrollReveal>
            </div>
            <div className="home-coffees__grid">
              {coffees.slice(0, 3).map((coffee, index) => (
                <ScrollReveal key={coffee.slug} delay={index * 80}><CoffeeCard coffee={coffee} /></ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="home-origin" aria-labelledby="origin-title">
          <div className="home-wrap home-origin__grid">
            <ScrollReveal className="home-origin__title">
              <p className="home-label">Ethiopian origin</p>
              <h2 className="home-display" id="origin-title">The place is part of the product.</h2>
            </ScrollReveal>
            <div className="home-origin__body">
              <ScrollReveal><p className="home-origin__lead">Buyers need more than an attractive farm image. They need a clear connection between region, process, lot information, quality review and the final export enquiry.</p></ScrollReveal>
              <nav className="home-index" aria-label="Explore Koffera information">
                <Link to="/origins"><span>01</span><strong>Origins and regional stories</strong><em>Explore origins</em></Link>
                <Link to="/quality-traceability"><span>02</span><strong>Quality and traceability journey</strong><em>Review the process</em></Link>
                <Link to="/export-services"><span>03</span><strong>Export preparation and support</strong><em>View services</em></Link>
              </nav>
            </div>
          </div>
        </section>

        <section className="home-quality" aria-labelledby="quality-title">
          <div className="home-wrap">
            <div className="home-heading">
              <ScrollReveal><p className="home-label">Quality journey</p><h2 className="home-display" id="quality-title">One continuous path from requirement to shipment.</h2></ScrollReveal>
              <ScrollReveal className="home-heading__side" delay={100}><p className="home-copy">The process is shown as a connected operational sequence instead of a collection of decorative icons.</p></ScrollReveal>
            </div>
            <div className="home-sequence">
              {qualitySteps.map(([number, title, text], index) => (
                <ScrollReveal as="article" key={number} delay={index * 55}><span>{number}</span><h3>{title}</h3><p>{text}</p></ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="home-services" aria-labelledby="services-title">
          <div className="home-wrap home-services__grid">
            <ScrollReveal className="home-services__intro">
              <p className="home-label">Export services</p>
              <h2 className="home-display" id="services-title">Practical support for a buyer decision.</h2>
              <p className="home-copy">The website should help buyers understand the next commercial step without hiding important information behind visual effects.</p>
            </ScrollReveal>
            <div className="home-service-list">
              {services.map(([number, title, text], index) => (
                <ScrollReveal as="article" key={number} delay={index * 70}><span>{number}</span><h3>{title}</h3><p>{text}</p></ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="home-paths" aria-labelledby="buyer-path-title">
          <div className="home-wrap">
            <div className="home-heading">
              <ScrollReveal><p className="home-label">Continue the journey</p><h2 className="home-display" id="buyer-path-title">Move from the story to the information you need.</h2></ScrollReveal>
              <ScrollReveal className="home-heading__side" delay={100}><p className="home-copy">Each path is designed around a real buyer question rather than a repeated card layout.</p></ScrollReveal>
            </div>
            <nav className="home-path-list" aria-label="Buyer information paths">
              {buyerPaths.map(([number, title, text, to]) => (
                <Link key={number} to={to}><span>{number}</span><h3>{title}</h3><p>{text}</p><span aria-hidden="true">→</span></Link>
              ))}
            </nav>
          </div>
        </section>
      </div>

      <CTASection title="Bring Ethiopian coffee to your market." text="Tell Koffera the origin, process, grade, quantity, packaging and destination you need." />
    </main>
  );
}
