import { Link } from 'react-router-dom';
import CTASection from '../components/common/CTASection';
import DemoNotice from '../components/common/DemoNotice';
import PageHero from '../components/common/PageHero';
import ScrollReveal from '../components/common/ScrollReveal';
import SectionHeading from '../components/common/SectionHeading';
import { origins } from '../data/origins';
import useDocumentMeta from '../hooks/useDocumentMeta';

export default function OriginsPage() {
  useDocumentMeta('Coffee Origins', 'Explore illustrative Ethiopian coffee origin stories prepared for verified Koffera sourcing information.');
  return (
    <main id="main-content">
      <PageHero eyebrow="Coffee origins" title="A clearer view of Ethiopia’s coffee regions." text="Discover the regional stories, processing context and product links buyers expect to find when evaluating Ethiopian coffee.">
        <Link className="button button--cream" to="/coffees">View coffee catalogue →</Link>
      </PageHero>
      <section className="section">
        <div className="container origin-intro-grid">
          <ScrollReveal className="ethiopia-map-placeholder"><span aria-hidden="true">⌖</span><strong>Ethiopia origin map</strong><small>Replace with an approved interactive or illustrated sourcing map.</small></ScrollReveal>
          <ScrollReveal delay={100}>
            <SectionHeading eyebrow="Origin-led sourcing" title="Connect each coffee to a meaningful regional story." text="The final version should publish only areas where Koffera can confirm sourcing activity, suppliers, processing information and current coffee availability." />
            <ul className="check-list"><li>Confirm active sourcing regions</li><li>Add suppliers or washing stations with permission</li><li>Add original regional and processing photography</li><li>Link every origin to verified available coffees</li></ul>
          </ScrollReveal>
        </div>
      </section>
      <section className="section section--cream">
        <div className="container">
          <DemoNotice>Regional summaries are general demonstration content. Koffera’s actual supplier relationships and available lots must be confirmed.</DemoNotice>
          <SectionHeading eyebrow="Featured origins" title="Prepared for verified Koffera sourcing data." align="center" />
          <div className="origin-card-grid">
            {origins.map((origin, index) => (
              <ScrollReveal key={origin.slug} as="article" delay={index * 60} className="origin-card">
                <div className={`origin-card__visual coffee-tone--${origin.tone}`}><span>0{index + 1}</span></div>
                <div className="origin-card__body"><h2>{origin.name}</h2><strong>{origin.summary}</strong><p>{origin.detail}</p><Link to="/request-offer">Ask about this origin →</Link></div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <CTASection title="Looking for coffee from a specific Ethiopian origin?" text="Tell Koffera the region, process, grade, profile and volume you need." />
    </main>
  );
}
