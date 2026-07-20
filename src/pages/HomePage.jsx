import { Link } from 'react-router-dom';
import CoffeeCard from '../components/common/CoffeeCard';
import CTASection from '../components/common/CTASection';
import ScrollReveal from '../components/common/ScrollReveal';
import SectionHeading from '../components/common/SectionHeading';
import ScrollWorldExperience from '../components/scroll-world/ScrollWorldExperience';
import { coffees } from '../data/coffees';
import useDocumentMeta from '../hooks/useDocumentMeta';

const buyerPaths = [
  {
    number: '01',
    title: 'Explore Ethiopian origins',
    text: 'Review the regional coffee stories and the information that must be confirmed for active Koffera lots.',
    to: '/origins',
    link: 'Discover origins',
  },
  {
    number: '02',
    title: 'Review quality and traceability',
    text: 'Understand the proposed journey from buyer requirements and sample review through shipment follow-up.',
    to: '/quality-traceability',
    link: 'Review the quality flow',
  },
  {
    number: '03',
    title: 'Plan an export enquiry',
    text: 'Prepare the origin, process, grade, quantity, packaging and destination information needed for an offer.',
    to: '/request-offer',
    link: 'Request an offer',
  },
];

export default function HomePage() {
  useDocumentMeta(null, 'Follow Ethiopian coffee from highland origin through harvest, processing, quality review and export preparation with Koffera Coffee.');

  return (
    <main id="main-content">
      <ScrollWorldExperience />

      <section className="capability-strip" aria-label="Koffera buyer capabilities">
        <div className="container capability-strip__grid">
          {[
            ['Origin-led', 'Ethiopian coffee stories'],
            ['Quality-aware', 'Sample and cup information'],
            ['Buyer-ready', 'Clear commercial enquiries'],
            ['Export-focused', 'Shipment support journey'],
          ].map(([title, text]) => (
            <div key={title}>
              <span aria-hidden="true">◆</span>
              <p><strong>{title}</strong>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Featured coffee"
              title="Ethiopian coffees presented with character."
              text="Explore the proposed catalogue structure while final grades, crop years, specifications and availability are confirmed."
              align="center"
            />
          </ScrollReveal>

          <div className="card-grid card-grid--three">
            {coffees.slice(0, 3).map((coffee, index) => (
              <ScrollReveal key={coffee.slug} delay={index * 90}>
                <CoffeeCard coffee={coffee} />
              </ScrollReveal>
            ))}
          </div>

          <div className="center-action">
            <Link className="button button--dark" to="/coffees">View the catalogue →</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Continue the buyer journey"
              title="Move from the coffee story to practical information."
              text="The cinematic journey introduces Koffera. These pages provide the next level of product, quality and enquiry detail."
            />
          </ScrollReveal>

          <div className="detail-card-grid">
            {buyerPaths.map((path, index) => (
              <ScrollReveal key={path.number} delay={index * 80} as="article" className="detail-card">
                <div className="detail-card__top"><span>{path.number}</span><span aria-hidden="true">↗</span></div>
                <h2>{path.title}</h2>
                <p>{path.text}</p>
                <Link className="text-link" to={path.to}>{path.link} →</Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Bring Ethiopian coffee to your market."
        text="Tell Koffera the origin, process, grade, quantity, packaging and destination you need."
      />
    </main>
  );
}
