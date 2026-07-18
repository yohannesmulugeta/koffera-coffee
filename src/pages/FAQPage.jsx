import { Link } from 'react-router-dom';
import CTASection from '../components/common/CTASection';
import PageHero from '../components/common/PageHero';
import ScrollReveal from '../components/common/ScrollReveal';
import { faq } from '../data/faq';
import useDocumentMeta from '../hooks/useDocumentMeta';

export default function FAQPage() {
  useDocumentMeta('Frequently Asked Questions', 'Answers to common buyer questions about coffee offers, samples, packaging, documents and shipping.');
  return (
    <main id="main-content">
      <PageHero eyebrow="Frequently asked questions" title="Useful answers before the first coffee enquiry." text="These draft answers show the intended buyer experience. Final policies and commercial terms require Koffera approval.">
        <Link className="button button--cream" to="/request-offer">Ask about a coffee →</Link>
      </PageHero>
      <section className="section section--cream">
        <div className="container faq-list">
          {faq.map(([question, answer], index) => (
            <ScrollReveal key={question} delay={index * 45}>
              <details>
                <summary>{question}<span aria-hidden="true">+</span></summary>
                <p>{answer}</p>
              </details>
            </ScrollReveal>
          ))}
        </div>
      </section>
      <CTASection title="Still have a buyer question?" text="Send the origin, quantity, packaging, destination and information your purchasing team requires." />
    </main>
  );
}
