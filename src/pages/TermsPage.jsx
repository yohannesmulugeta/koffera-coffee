import PageHero from '../components/common/PageHero';
import useDocumentMeta from '../hooks/useDocumentMeta';

export default function TermsPage() {
  useDocumentMeta('Terms & Conditions', 'Draft website terms structure for Koffera Coffee.');
  return (
    <main id="main-content">
      <PageHero eyebrow="Legal draft" title="Terms & Conditions" text="This structured draft must be reviewed and approved by qualified legal counsel before public launch." />
      <article className="legal-content container">
        <section><h2>1. Website purpose</h2><p>The website provides general company, coffee and buyer-enquiry information. It does not itself create a binding sales contract.</p></section>
        <section><h2>2. Product information</h2><p>Coffee profiles, specifications, availability, pricing and shipping information remain subject to written confirmation in the applicable commercial documents.</p></section>
        <section><h2>3. No automatic offer</h2><p>A form submission, sample request or website message does not guarantee product availability, sample approval, quotation acceptance or shipment.</p></section>
        <section><h2>4. Intellectual property</h2><p>Add the approved ownership and permitted-use terms for the Koffera name, logo, photography, text, documents and website design.</p></section>
        <section><h2>5. External services</h2><p>Clarify responsibility for third-party links, maps, courier providers, analytics, email and other connected services.</p></section>
        <section><h2>6. Governing law and contact</h2><p>Add the approved legal entity, governing law, jurisdiction and contact information.</p></section>
        <p className="legal-warning">Legal review required. This page is not final legal advice.</p>
      </article>
    </main>
  );
}
