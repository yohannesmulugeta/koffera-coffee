import { Link, useParams } from 'react-router-dom';
import CoffeeCard from '../components/common/CoffeeCard';
import CTASection from '../components/common/CTASection';
import DemoNotice from '../components/common/DemoNotice';
import ScrollReveal from '../components/common/ScrollReveal';
import SectionHeading from '../components/common/SectionHeading';
import { coffees } from '../data/coffees';
import useDocumentMeta from '../hooks/useDocumentMeta';
import NotFoundPage from './NotFoundPage';

export default function CoffeeDetailPage() {
  const { slug } = useParams();
  const coffee = coffees.find((item) => item.slug === slug);
  useDocumentMeta(coffee?.name || 'Coffee not found', coffee?.description);

  if (!coffee) return <NotFoundPage />;

  const specs = [
    ['Region', coffee.region],
    ['Process', coffee.process],
    ['Grade', coffee.grade],
    ['Crop year', coffee.cropYear],
    ['Altitude', coffee.altitude],
    ['Variety', coffee.variety],
    ['Moisture', coffee.moisture],
    ['Screen size', coffee.screen],
    ['Packaging', coffee.packaging],
    ['Availability', coffee.availability],
    ['Certification', coffee.certification],
  ];
  const related = coffees.filter((item) => item.slug !== coffee.slug).slice(0, 3);

  return (
    <main id="main-content">
      <section className="product-hero">
        <div className="container product-hero__grid">
          <div>
            <span className="eyebrow eyebrow--light">Demo coffee profile</span>
            <h1>{coffee.name}</h1>
            <p>{coffee.description}</p>
            <div className="button-row">
              <Link className="button button--cream" to="/request-offer">Request this coffee →</Link>
              <Link className="button button--outline" to="/coffees">Back to catalogue</Link>
            </div>
          </div>
          <div className={`product-visual coffee-tone--${coffee.tone}`}>
            <span>{coffee.process}</span><strong>{coffee.region}</strong><small>Final product photography required</small>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <DemoNotice>This is a structured demo profile, not a confirmed commercial offer. Replace illustrative data with the approved lot specification.</DemoNotice>
          <div className="detail-layout">
            <ScrollReveal>
              <SectionHeading eyebrow="Product overview" title="Structured for professional coffee evaluation." text="The page separates descriptive cup information from technical and commercial fields so a buyer can review the offer efficiently." />
              <div className="spec-grid">{specs.map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}</div>
            </ScrollReveal>
            <ScrollReveal delay={120} className="cup-profile">
              <span className="eyebrow">Illustrative cup profile</span>
              <h2>{coffee.cupProfile}</h2>
              <dl>
                <div><dt>Aroma</dt><dd>{coffee.aroma}</dd></div>
                <div><dt>Acidity</dt><dd>{coffee.acidity}</dd></div>
                <div><dt>Body</dt><dd>{coffee.body}</dd></div>
              </dl>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container two-panel-grid">
          <ScrollReveal as="article" className="information-panel"><span className="eyebrow">Specification sheet</span><h2>Technical PDF coming soon</h2><p>Add the approved product specification document when it is available.</p><button className="button button--disabled" type="button" disabled>Download unavailable</button></ScrollReveal>
          <ScrollReveal as="article" className="information-panel" delay={100}><span className="eyebrow">Buyer action</span><h2>Request samples or a quotation</h2><p>Use the commercial enquiry form to provide quantity, packaging, timing and destination details.</p><Link className="button button--dark" to="/request-offer">Open request form →</Link></ScrollReveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Related profiles" title="Explore other Ethiopian coffees." />
          <div className="card-grid card-grid--three">{related.map((item) => <CoffeeCard key={item.slug} coffee={item} />)}</div>
        </div>
      </section>
      <CTASection title={`Interested in ${coffee.name}?`} text="Tell Koffera your required grade, quantity, packaging and destination." />
    </main>
  );
}
