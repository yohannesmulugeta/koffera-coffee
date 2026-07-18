import { Link } from 'react-router-dom';
import CTASection from '../components/common/CTASection';
import PageHero from '../components/common/PageHero';
import ScrollReveal from '../components/common/ScrollReveal';
import SectionHeading from '../components/common/SectionHeading';
import { resources } from '../data/resources';
import useDocumentMeta from '../hooks/useDocumentMeta';

export default function ResourcesPage() {
  useDocumentMeta('Resources', 'Access Koffera company, coffee, certificate, sample and packaging resource placeholders.');
  return (
    <main id="main-content">
      <PageHero eyebrow="Resources" title="Buyer documents organised in one place." text="Prepare verified company, product, certificate, sample and packaging documents for easy buyer access.">
        <Link className="button button--cream" to="/request-offer">Request current information →</Link>
      </PageHero>
      <section className="section section--cream">
        <div className="container">
          <SectionHeading eyebrow="Downloads" title="Professional resources without broken links." text="Unavailable files are clearly marked as coming soon. Add a download only after the document is approved and uploaded." align="center" />
          <div className="resource-grid">
            {resources.map((resource, index) => (
              <ScrollReveal key={resource.title} as="article" delay={index * 60} className="resource-card">
                <span>{resource.type}</span><h2>{resource.title}</h2><p>{resource.description}</p>
                {resource.status === 'Request access' ? <Link className="text-link" to="/request-offer">Request access →</Link> : <button type="button" disabled>Coming soon</button>}
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <CTASection title="Need a document that is not available yet?" text="Tell Koffera which company, quality, certificate or product information your team needs." />
    </main>
  );
}
