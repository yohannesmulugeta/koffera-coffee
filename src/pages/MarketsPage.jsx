import { Link } from 'react-router-dom';
import CTASection from '../components/common/CTASection';
import MediaPlaceholder from '../components/common/MediaPlaceholder';
import PageHero from '../components/common/PageHero';
import ScrollReveal from '../components/common/ScrollReveal';
import SectionHeading from '../components/common/SectionHeading';
import { markets } from '../data/markets';
import useDocumentMeta from '../hooks/useDocumentMeta';

export default function MarketsPage() {
  useDocumentMeta('Target Markets', 'See how Koffera’s website supports roasters, importers, distributors, hospitality and retail coffee buyers.');
  return (
    <main id="main-content">
      <PageHero eyebrow="Target markets" title="Built around different professional coffee buyers." text="Each buyer group needs the product, quality and commercial information most relevant to its purchasing process.">
        <Link className="button button--cream" to="/request-offer">Discuss your requirements →</Link>
      </PageHero>
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Who Koffera serves" title="A more useful message for every buyer type." text="Final content should reflect Koffera’s actual customers and markets without publishing unverified buyer names or destinations." align="center" />
          <div className="detail-card-grid">
            {markets.map((market, index) => (
              <ScrollReveal key={market.title} as="article" delay={index * 55} className="detail-card">
                <div className="detail-card__top"><span>{String(index + 1).padStart(2, '0')}</span><i aria-hidden="true">◎</i></div>
                <h2>{market.title}</h2><p>{market.text}</p><Link className="text-link" to="/request-offer">Start an enquiry →</Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section section--cream">
        <div className="container split-layout">
          <ScrollReveal><SectionHeading eyebrow="Buyer information" title="What professional purchasers expect to find." /><ul className="check-list"><li>Current coffee availability</li><li>Grade, process and crop information</li><li>Sample and specification access</li><li>Packaging and destination details</li><li>Quality and traceability evidence</li><li>Clear commercial contact</li></ul></ScrollReveal>
          <ScrollReveal delay={100}><MediaPlaceholder title="Buyer, shipment or market photography" /></ScrollReveal>
        </div>
      </section>
      <CTASection title="Which market are you buying for?" text="Describe your company, customer segment and coffee requirement so Koffera can respond appropriately." />
    </main>
  );
}
