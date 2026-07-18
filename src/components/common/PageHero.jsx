import ScrollReveal from './ScrollReveal';

export default function PageHero({ eyebrow, title, text, children }) {
  return (
    <section className="page-hero">
      <div className="page-hero__ring" aria-hidden="true" />
      <div className="container">
        <ScrollReveal className="page-hero__content">
          <span className="eyebrow eyebrow--light">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{text}</p>
          {children && <div className="button-row">{children}</div>}
        </ScrollReveal>
      </div>
    </section>
  );
}
