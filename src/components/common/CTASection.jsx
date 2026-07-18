import { Link } from 'react-router-dom';

export default function CTASection({
  title = 'Ready to discuss Ethiopian coffee?',
  text = 'Share your preferred origin, process, grade, quantity and destination.',
  button = 'Request an offer',
  to = '/request-offer',
}) {
  return (
    <section className="cta-section">
      <div className="container cta-section__inner">
        <div>
          <span className="eyebrow eyebrow--light">Buyer enquiry</span>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <Link className="button button--cream" to={to}>
          {button} <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
