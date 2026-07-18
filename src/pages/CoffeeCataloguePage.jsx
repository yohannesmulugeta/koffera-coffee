import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import CoffeeCard from '../components/common/CoffeeCard';
import CTASection from '../components/common/CTASection';
import DemoNotice from '../components/common/DemoNotice';
import PageHero from '../components/common/PageHero';
import ScrollReveal from '../components/common/ScrollReveal';
import { coffees, processes } from '../data/coffees';
import useDocumentMeta from '../hooks/useDocumentMeta';

export default function CoffeeCataloguePage() {
  useDocumentMeta('Coffee Catalogue', 'Explore illustrative Ethiopian coffee profiles prepared for Koffera’s verified product information.');
  const [query, setQuery] = useState('');
  const [process, setProcess] = useState('All processes');

  const filtered = useMemo(() => coffees.filter((coffee) => {
    const search = query.trim().toLowerCase();
    const matchesText = !search || [coffee.name, coffee.region, coffee.grade, coffee.process].join(' ').toLowerCase().includes(search);
    const matchesProcess = process === 'All processes' || coffee.process === process;
    return matchesText && matchesProcess;
  }), [process, query]);

  return (
    <main id="main-content">
      <PageHero eyebrow="Our coffee" title="Ethiopian coffees with a clearer buyer story." text="Search illustrative profiles prepared for future verified origins, grades, crop years, cup results and availability.">
        <Link className="button button--cream" to="/origins">Explore origins →</Link>
        <Link className="button button--outline" to="/request-offer">Request current offer</Link>
      </PageHero>
      <section className="section section--cream">
        <div className="container">
          <DemoNotice>All coffee information on this demo is illustrative. Confirm every lot, specification and availability status before publication.</DemoNotice>
          <div className="catalogue-tools">
            <label>Search coffees<input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Name, region, grade or process" /></label>
            <label>Processing method<select value={process} onChange={(event) => setProcess(event.target.value)}>{processes.map((item) => <option key={item}>{item}</option>)}</select></label>
            <span>{filtered.length} profile{filtered.length === 1 ? '' : 's'}</span>
          </div>
          {filtered.length ? (
            <div className="card-grid card-grid--two">
              {filtered.map((coffee, index) => <ScrollReveal key={coffee.slug} delay={index * 60}><CoffeeCard coffee={coffee} /></ScrollReveal>)}
            </div>
          ) : (
            <div className="empty-state"><h2>No coffee profiles found</h2><p>Clear the search or choose another processing method.</p><button className="button button--dark" type="button" onClick={() => { setQuery(''); setProcess('All processes'); }}>Reset filters</button></div>
          )}
        </div>
      </section>
      <CTASection title="Need a current coffee offer?" text="Send your preferred origin, grade, process, quantity, packaging and destination." />
    </main>
  );
}
