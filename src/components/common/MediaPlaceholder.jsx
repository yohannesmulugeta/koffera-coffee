export default function MediaPlaceholder({ title, label = 'Media placeholder', portrait = false }) {
  return (
    <div className={`media-placeholder ${portrait ? 'media-placeholder--portrait' : ''}`}>
      <div className="media-placeholder__grain" aria-hidden="true" />
      <span className="media-placeholder__play" aria-hidden="true">▶</span>
      <span className="eyebrow eyebrow--light">{label}</span>
      <strong>{title}</strong>
      <small>Replace with approved Koffera photography or a final video link.</small>
    </div>
  );
}
