import { Link } from 'react-router-dom';
import CTASection from '../components/common/CTASection';
import MediaPlaceholder from '../components/common/MediaPlaceholder';
import PageHero from '../components/common/PageHero';
import ScrollReveal from '../components/common/ScrollReveal';
import SectionHeading from '../components/common/SectionHeading';
import { qualitySteps } from '../data/services';
import useDocumentMeta from '../hooks/useDocumentMeta';

export default function QualityTraceabilityPage() {
  useDocumentMeta('Quality & Traceability', 'Review the proposed Koffera quality, sampling, approval and traceability journey.');
  return (
    <main id="main-content">
      <PageHero eyebrow="Quality & traceability" title="Show buyers how coffee moves from requirement to shipment." text="A credible quality page should explain real procedures, responsible people, records, samples, approvals and shipment follow-up.">
        <Link className="button button--cream" to="/request-offer">Request quality information →</Link>
      </PageHero>
      <section className="section">
        <div className="container split-layout">
          <ScrollReveal><SectionHeading eyebrow="Evidence-led quality" title="Replace unsupported badges with a visible operating process." text="The final page should combine Koffera’s approved procedures, sample records, facility photographs, quality documents and active certificates." /><div className="evidence-tags"><span>Procedures</span><span>Records</span><span>Cupping</span><span>Approvals</span></div></ScrollReveal>
          <ScrollReveal delay={100}><MediaPlaceholder title="Quality, sample preparation and cupping" /></ScrollReveal>
        </div>
      </section>
      <section className="section section--cream">
        <div className="container quality-timeline">
          {qualitySteps.map(([number, title, text], index) => (
            <ScrollReveal key={number} as="article" delay={index * 55}>
              <span>{number}</span><div><h2>{title}</h2><p>{text}</p></div>
            </ScrollReveal>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="container proof-panel-grid">
          <ScrollReveal as="article"><span aria-hidden="true">◎</span><h2>Traceability example</h2><p>Buyer enquiry → coffee lot → supplier or station → origin → processing → quality record → contract → shipment.</p><small>Use a real approved example without exposing confidential information.</small></ScrollReveal>
          <ScrollReveal as="article" delay={80}><span aria-hidden="true">✓</span><h2>Certificates and evidence</h2><p>Add active certificates, licence information and quality documents only after verification.</p><small>Names, issuers, certificate numbers and expiry dates are required.</small></ScrollReveal>
          <ScrollReveal as="article" delay={160}><span aria-hidden="true">◉</span><h2>Buyer sample workflow</h2><p>Explain how samples are requested, prepared, shipped, approved and connected to a commercial agreement.</p><small>Final sample policy and response targets are required.</small></ScrollReveal>
        </div>
      </section>
      <CTASection title="Need quality or traceability documentation?" text="Describe the coffee and evidence your purchasing team needs." />
    </main>
  );
}
