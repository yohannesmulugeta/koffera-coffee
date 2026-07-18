import { Link } from 'react-router-dom';
import CTASection from '../components/common/CTASection';
import MediaPlaceholder from '../components/common/MediaPlaceholder';
import PageHero from '../components/common/PageHero';
import ScrollReveal from '../components/common/ScrollReveal';
import SectionHeading from '../components/common/SectionHeading';
import { company, values } from '../data/company';
import useDocumentMeta from '../hooks/useDocumentMeta';

export default function AboutPage() {
  useDocumentMeta('About', 'Learn about the proposed Koffera Coffee company story, leadership, mission, values and export focus.');
  return (
    <main id="main-content">
      <PageHero eyebrow="About Koffera" title="Rooted in Ethiopia. Designed for lasting coffee partnerships." text="A focused company story balancing coffee heritage, leadership, operational evidence and commercial credibility." />
      <section className="section">
        <div className="container split-layout">
          <ScrollReveal><MediaPlaceholder title="Company, team or facility photography" portrait /></ScrollReveal>
          <ScrollReveal delay={100}><SectionHeading eyebrow="Our company" title="A concise story with stronger business relevance." text={company.summary} /><p className="body-copy">The final company story should explain legal identity, sourcing relationships, quality responsibilities, export experience, facilities and team roles using verified facts and original photography.</p><Link className="button button--dark" to="/contact">Contact Koffera →</Link></ScrollReveal>
        </div>
      </section>
      <section className="section section--cream">
        <div className="container mission-grid">
          <ScrollReveal as="article"><span className="eyebrow">Vision</span><h2>Represent Ethiopian coffee with integrity in international markets.</h2><p>Final wording requires management approval and must reflect the company’s long-term direction.</p></ScrollReveal>
          <ScrollReveal as="article" delay={100}><span className="eyebrow">Mission</span><h2>Connect buyers with quality coffee and dependable export support.</h2><p>Final wording must match Koffera’s actual sourcing, quality and shipment responsibilities.</p></ScrollReveal>
        </div>
      </section>
      <section className="section">
        <div className="container"><SectionHeading eyebrow="Our principles" title="Values demonstrated through action." align="center" /><div className="value-grid">{values.map((value, index) => <ScrollReveal key={value.title} as="article" delay={index * 70}><span>0{index + 1}</span><h2>{value.title}</h2><p>{value.text}</p></ScrollReveal>)}</div></div>
      </section>
      <section className="section section--warm">
        <div className="container split-layout">
          <ScrollReveal><MediaPlaceholder title="Founder portrait and interview" portrait /></ScrollReveal>
          <ScrollReveal delay={100}><SectionHeading eyebrow="Leadership" title="Introduce the founder with relevant coffee and export experience." text="Use a concise approved biography, one professional portrait and one credible message about the company’s buyer commitment." /><blockquote>“The final leadership message should focus on Ethiopian coffee quality, dependable relationships and responsible execution.”</blockquote><p><strong>{company.founder}</strong><br /><small>Founder — biography and title to confirm</small></p></ScrollReveal>
        </div>
      </section>
      <section className="section"><div className="container"><SectionHeading eyebrow="Operational strengths" title="Show the work behind the brand." text="Replace decorative claims with real facilities, processes, people and documents." /><div className="proof-panel-grid"><article><span>01</span><h2>Sourcing network</h2><p>Approved supplier, station and origin information.</p></article><article><span>02</span><h2>Quality capability</h2><p>Real sample, inspection and cupping responsibilities.</p></article><article><span>03</span><h2>Export execution</h2><p>Actual documentation, packaging and shipment coordination.</p></article></div></div></section>
      <CTASection title="Build a long-term Ethiopian coffee partnership." text="Contact Koffera with your company profile and purchasing priorities." />
    </main>
  );
}
