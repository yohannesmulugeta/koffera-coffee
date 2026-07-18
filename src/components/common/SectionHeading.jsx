export default function SectionHeading({ eyebrow, title, text, align = 'left', inverse = false }) {
  return (
    <div className={`section-heading section-heading--${align} ${inverse ? 'section-heading--inverse' : ''}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}
