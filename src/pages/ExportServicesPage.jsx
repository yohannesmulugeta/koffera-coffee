import { Link } from 'react-router-dom';
import CTASection from '../components/common/CTASection';
import PageHero from '../components/common/PageHero';
import ScrollReveal from '../components/common/ScrollReveal';
import SectionHeading from '../components/common/SectionHeading';
import { services } from '../data/services';
import useDocumentMeta from '../hooks/useDocumentMeta';

export default function ExportServicesPage() {
  useDocumentMeta('Export Services', 'Understand Koffera’s proposed coffee sourcing, sample, documentation, packaging and shipment-support journey.');
  return (
    <main id="main-content">
      <PageHero eyebrow="Export services" title="A professional path from buyer enquiry to shipment." text="The service structure is organised around the questions international coffee buyers need answered before and during a transaction.">
        <Link className="button button--cream" to="/request-offer">Start an export enquiry →</Link>
      </PageHero>
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Service areas" title="Clear responsibilities at every commercial stage." text="Final descriptions must match Koffera’s actual capabilities, contractual responsibility and operating process." align="center" />
          <div className="detail-card-grid">
            {services.map((service, index) => (
              <ScrollReveal key={service.number} as="article" delay={index * 60} className="detail-card">
                <div className="detail-card__top"><span>{service.number}</span><i aria-hidden="true">◆</i></div>
                <h2>{service.title}</h2><p>{service.text}</p><small>Final operating detail required</small>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section section--dark">
        <div className="container split-layout">
          <ScrollReveal><SectionHeading eyebrow="Buyer journey" title="One connected export conversation." text="The website should make each next action clear without promising services that have not been verified." inverse /><Link className="button button--cream" to="/request-offer">Request export information →</Link></ScrollReveal>
          <ScrollReveal delay={100} className="journey-list">
            {['Share purchasing requirements', 'Review possible coffees', 'Request and approve samples', 'Confirm commercial terms', 'Prepare documentation and packaging', 'Coordinate loading and shipment'].map((item, index) => <p key={item}><span>{String(index + 1).padStart(2, '0')}</span>{item}</p>)}
          </ScrollReveal>
        </div>
      </section>
      <section className="section section--cream">
        <div className="container two-panel-grid">
          <ScrollReveal as="article" className="information-panel"><span className="eyebrow">Response expectations</span><h2>Set a realistic buyer-response standard.</h2><p>Add the responsible team member, business hours, enquiry process and approved response target.</p></ScrollReveal>
          <ScrollReveal as="article" className="information-panel" delay={100}><span className="eyebrow">Required information</span><h2>Prepare buyers before the first call.</h2><p>Origin, process, grade, volume, packaging, destination port, certification need and expected purchase timing.</p></ScrollReveal>
        </div>
      </section>
      <CTASection title="Planning an Ethiopian coffee purchase?" text="Send the information required for a useful commercial response." />
    </main>
  );
}
