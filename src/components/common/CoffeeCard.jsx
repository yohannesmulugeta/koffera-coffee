import { Link } from 'react-router-dom';

export default function CoffeeCard({ coffee }) {
  return (
    <article className="coffee-card">
      <div className={`coffee-card__visual coffee-tone--${coffee.tone}`}>
        <span className="coffee-card__process">{coffee.process}</span>
        <div className="coffee-card__bean" aria-hidden="true" />
      </div>
      <div className="coffee-card__body">
        <div className="coffee-card__meta">
          <span>{coffee.region}</span>
          <span>{coffee.grade}</span>
        </div>
        <h3>{coffee.name}</h3>
        <p>{coffee.description}</p>
        <div className="coffee-card__footer">
          <span>{coffee.availability}</span>
          <Link className="round-link" to={`/coffees/${coffee.slug}`} aria-label={`View ${coffee.name}`}>
            →
          </Link>
        </div>
      </div>
    </article>
  );
}
