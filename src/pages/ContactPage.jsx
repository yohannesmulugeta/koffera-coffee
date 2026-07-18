import { useState } from 'react';
import { Link } from 'react-router-dom';
import DemoNotice from '../components/common/DemoNotice';
import PageHero from '../components/common/PageHero';
import { company } from '../data/company';
import useDocumentMeta from '../hooks/useDocumentMeta';

export default function ContactPage() {
  useDocumentMeta('Contact', 'Contact Koffera Coffee in Addis Ababa or use the dedicated commercial enquiry form.');
  const [status, setStatus] = useState('');

  function submit(event) {
    event.preventDefault();
    setStatus('This demo form is not connected yet. Your message has not been sent.');
  }

  return (
    <main id="main-content">
      <PageHero eyebrow="Contact" title="Contact Koffera or send a general message." text="For coffee pricing, samples and purchasing requirements, use the dedicated Request an Offer page.">
        <Link className="button button--cream" to="/request-offer">Request an offer →</Link>
      </PageHero>
      <section className="section section--cream">
        <div className="container contact-layout">
          <aside className="contact-card">
            <span className="eyebrow">Direct contact</span><h2>Start with the right information.</h2><p>Verify the contact details, responsible team member and response process before final launch.</p>
            <a href={`mailto:${company.email}`}><span>Email</span><strong>{company.email}</strong></a>
            <a href={`tel:${company.phone.replaceAll(' ', '')}`}><span>Phone</span><strong>{company.phone}</strong></a>
            <div><span>WhatsApp</span><strong>Use the approved business number</strong></div>
            <div><span>Office</span><strong>{company.location}</strong></div>
            <div><span>Business hours</span><strong>{company.businessHours}</strong></div>
            <div className="map-placeholder">Office map or facility image</div>
          </aside>
          <form className="form-card" onSubmit={submit}>
            <span className="eyebrow">General message</span><h2>Contact form</h2>
            <DemoNotice>Email delivery, spam protection and privacy handling must be connected before public launch.</DemoNotice>
            <div className="form-grid">
              <label>Full name<input name="name" required autoComplete="name" /></label>
              <label>Company<input name="company" autoComplete="organization" /></label>
              <label>Email<input name="email" type="email" required autoComplete="email" /></label>
              <label>Country<input name="country" autoComplete="country-name" /></label>
              <label className="form-grid__full">Subject<input name="subject" required /></label>
              <label className="form-grid__full">Message<textarea name="message" rows="7" required /></label>
              <button className="button button--dark form-grid__full" type="submit">Send message →</button>
              {status && <p className="form-status form-grid__full" role="status">{status}</p>}
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
