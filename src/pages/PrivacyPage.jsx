import PageHero from '../components/common/PageHero';
import useDocumentMeta from '../hooks/useDocumentMeta';

export default function PrivacyPage() {
  useDocumentMeta('Privacy Policy', 'Draft privacy structure for the Koffera Coffee website.');
  return (
    <main id="main-content">
      <PageHero eyebrow="Legal draft" title="Privacy Policy" text="This structured draft must be reviewed and approved by qualified legal counsel before public launch." />
      <article className="legal-content container">
        <section><h2>1. Information collected</h2><p>The website may collect contact details, company information, coffee requirements, destination information and messages submitted through enquiry forms.</p></section>
        <section><h2>2. Purpose of processing</h2><p>Information should be used only to respond to enquiries, prepare commercial communication, manage buyer relationships and meet applicable legal obligations.</p></section>
        <section><h2>3. Storage and access</h2><p>The final policy must identify where form submissions are stored, who can access them, how long they are retained and how they are protected.</p></section>
        <section><h2>4. Third-party services</h2><p>List the actual hosting, analytics, email, form, map and communication services used by the final website.</p></section>
        <section><h2>5. User rights</h2><p>Provide the contact method for requesting access, correction or deletion where applicable.</p></section>
        <section><h2>6. Contact</h2><p>Add the approved legal company name, responsible contact and business address.</p></section>
        <p className="legal-warning">Legal review required. This page is not final legal advice.</p>
      </article>
    </main>
  );
}
