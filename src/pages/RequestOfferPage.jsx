import { useState } from 'react';
import DemoNotice from '../components/common/DemoNotice';
import PageHero from '../components/common/PageHero';
import { origins } from '../data/origins';
import useDocumentMeta from '../hooks/useDocumentMeta';

export default function RequestOfferPage() {
  useDocumentMeta('Request an Offer', 'Send coffee origin, process, grade, quantity, packaging and destination requirements to Koffera.');
  const [message, setMessage] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    setMessage('This demo form is not connected yet. Your information has not been sent.');
  }

  return (
    <main id="main-content">
      <PageHero eyebrow="Request an offer" title="Give Koffera the information needed for a useful coffee offer." text="The form is structured for professional coffee purchasing. Email delivery, spam protection and data storage must be connected before launch." />
      <section className="section section--cream">
        <div className="container offer-layout">
          <aside className="offer-guide">
            <span className="eyebrow">Before you submit</span><h2>Prepare your purchasing requirements.</h2><p>A complete request reduces unnecessary back-and-forth and helps the export team respond accurately.</p>
            <ul className="check-list"><li>Preferred origin</li><li>Grade and processing method</li><li>Required quantity</li><li>Packaging preference</li><li>Destination country or port</li><li>Expected purchase timing</li></ul>
            <DemoNotice>This form is a working interface demo only. It does not currently send or save information.</DemoNotice>
          </aside>
          <form className="form-card" onSubmit={handleSubmit}>
            <span className="eyebrow">Coffee requirements</span><h2>Commercial enquiry</h2>
            <div className="form-grid">
              <label>Full name<input name="name" required autoComplete="name" /></label>
              <label>Company<input name="company" required autoComplete="organization" /></label>
              <label>Business email<input name="email" type="email" required autoComplete="email" /></label>
              <label>Country<input name="country" required autoComplete="country-name" /></label>
              <label>Buyer type<select aria-label="Buyer type" name="buyerType" required defaultValue=""><option value="" disabled>Select buyer type</option><option>Specialty roaster</option><option>Importer / distributor</option><option>Private-label brand</option><option>Café / hospitality</option><option>Retail coffee company</option><option>Other</option></select></label>
              <label>Expected purchase date<input name="purchaseDate" type="month" /></label>
              <label>Preferred origin<select aria-label="Preferred origin" name="origin" defaultValue=""><option value="">Any available origin</option>{origins.map((origin) => <option key={origin.slug}>{origin.name}</option>)}</select></label>
              <label>Processing method<select aria-label="Processing method" name="process" defaultValue=""><option value="">Any process</option><option>Washed</option><option>Natural</option><option>Open to recommendation</option></select></label>
              <label>Grade requirement<input name="grade" placeholder="Example: Grade 1" /></label>
              <label>Estimated quantity<input name="quantity" required placeholder="Bags, kg or containers" /></label>
              <label>Packaging preference<input name="packaging" placeholder="Example: 60 kg jute bags" /></label>
              <label>Destination port<input name="destination" placeholder="Country or port" /></label>
              <label>Certification requirement<input name="certification" placeholder="Certification, if required" /></label>
              <label>Sample required<select aria-label="Sample required" name="sample" defaultValue="Yes"><option>Yes</option><option>No</option><option>Not sure</option></select></label>
              <label className="form-grid__full">Message<textarea name="message" rows="6" required placeholder="Include cup expectations, timing and other commercial requirements." /></label>
              <label className="consent form-grid__full"><input type="checkbox" required /> I agree that Koffera may use this information to respond to my enquiry.</label>
              <button className="button button--dark form-grid__full" type="submit">Submit request →</button>
              {message && <p className="form-status form-grid__full" role="status">{message}</p>}
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
