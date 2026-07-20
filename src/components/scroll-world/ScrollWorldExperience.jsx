import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { scrollWorldJourney } from '../../data/scrollWorldJourney';

const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));

function SceneVisual({ scene, index, exactIndex, reduceMotion }) {
  const distance = Math.abs(exactIndex - index);
  const visibility = clamp(1 - distance, 0, 1);
  const localMovement = clamp(exactIndex - index + 1, 0, 2);
  const scale = reduceMotion ? 1 : 1.035 + visibility * 0.055 + localMovement * 0.018;
  const offset = reduceMotion ? 0 : (index - exactIndex) * 18;

  return (
    <div
      className={`koffera-scroll-world__scene fallback--${scene.fallback}`}
      style={{
        '--scene-accent': scene.accent,
        opacity: visibility,
        zIndex: Math.round(visibility * 10) + 1,
      }}
      aria-hidden="true"
    >
      {scene.image ? (
        <picture>
          {scene.imageMobile ? <source media="(max-width: 860px)" srcSet={scene.imageMobile} /> : null}
          <img
            className="koffera-scroll-world__scene-image"
            src={scene.image}
            alt=""
            decoding="async"
            loading={index === 0 ? 'eager' : 'lazy'}
            style={{
              objectPosition: scene.focalPoint,
              transform: `translate3d(0, ${offset}px, 0) scale(${scale})`,
            }}
          />
        </picture>
      ) : (
        <div
          className="koffera-scroll-world__fallback"
          style={{ transform: `translate3d(0, ${offset}px, 0) scale(${scale})` }}
        >
          <span className="koffera-scroll-world__fallback-sun" />
          <span className="koffera-scroll-world__fallback-land koffera-scroll-world__fallback-land--back" />
          <span className="koffera-scroll-world__fallback-land koffera-scroll-world__fallback-land--front" />
          <span className="koffera-scroll-world__fallback-detail" />
        </div>
      )}
      <div className="koffera-scroll-world__scene-overlay" />
    </div>
  );
}

export default function ScrollWorldExperience() {
  const rootRef = useRef(null);
  const rafRef = useRef(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [scrollState, setScrollState] = useState({
    progress: 0,
    exactIndex: 0,
    activeIndex: 0,
  });

  const scenes = scrollWorldJourney;
  const sceneCount = scenes.length;

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setReduceMotion(media.matches);
    updatePreference();
    media.addEventListener?.('change', updatePreference);
    return () => media.removeEventListener?.('change', updatePreference);
  }, []);

  useEffect(() => {
    const update = () => {
      const root = rootRef.current;
      if (!root) return;

      const rect = root.getBoundingClientRect();
      const scrollableDistance = Math.max(root.offsetHeight - window.innerHeight, 1);
      const travelled = clamp(-rect.top, 0, scrollableDistance);
      const progress = travelled / scrollableDistance;
      const exactIndex = progress * (sceneCount - 1);
      const activeIndex = Math.min(sceneCount - 1, Math.round(exactIndex));

      setScrollState({ progress, exactIndex, activeIndex });
    };

    const scheduleUpdate = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(update);
    };

    scheduleUpdate();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
    };
  }, [sceneCount]);

  const jumpToScene = (index) => {
    const root = rootRef.current;
    if (!root) return;

    const scrollableDistance = Math.max(root.offsetHeight - window.innerHeight, 1);
    const rootTop = window.scrollY + root.getBoundingClientRect().top;
    const destination = rootTop + (index / Math.max(sceneCount - 1, 1)) * scrollableDistance;

    window.scrollTo({
      top: destination,
      behavior: reduceMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <section
      ref={rootRef}
      className="koffera-scroll-world"
      style={{ '--scene-count': sceneCount, '--active-accent': scenes[scrollState.activeIndex].accent }}
      aria-label="Koffera coffee journey"
    >
      <div className="koffera-scroll-world__sticky">
        <div className="koffera-scroll-world__progress" aria-hidden="true">
          <span style={{ transform: `scaleX(${scrollState.progress})` }} />
        </div>

        <div className="koffera-scroll-world__stage">
          {scenes.map((scene, index) => (
            <SceneVisual
              key={scene.id}
              scene={scene}
              index={index}
              exactIndex={scrollState.exactIndex}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>

        <div className="koffera-scroll-world__content">
          <div className="koffera-scroll-world__copy-wrap">
            {scenes.map((scene, index) => {
              const distance = Math.abs(scrollState.exactIndex - index);
              const opacity = clamp(1 - distance * 1.45, 0, 1);
              const offset = reduceMotion ? 0 : (index - scrollState.exactIndex) * 34;
              const isActive = index === scrollState.activeIndex;
              const Heading = index === 0 ? 'h1' : 'h2';

              return (
                <article
                  key={scene.id}
                  className={`koffera-scroll-world__copy ${isActive ? 'is-active' : ''}`}
                  style={{
                    '--scene-accent': scene.accent,
                    '--copy-offset': `${offset}px`,
                    opacity,
                    pointerEvents: isActive ? 'auto' : 'none',
                  }}
                  aria-hidden={!isActive}
                >
                  <span className="koffera-scroll-world__index">
                    {String(index + 1).padStart(2, '0')} / {String(sceneCount).padStart(2, '0')}
                  </span>
                  <span className="koffera-scroll-world__eyebrow">{scene.eyebrow}</span>
                  <Heading>{scene.title}</Heading>
                  <p>{scene.body}</p>

                  <ul className="koffera-scroll-world__tags" aria-label={`${scene.label} highlights`}>
                    {scene.tags.map((tag) => <li key={tag}>{tag}</li>)}
                  </ul>

                  {scene.cta ? (
                    <div className="koffera-scroll-world__cta">
                      <Link className="button button--cream" to={scene.cta.primary.to} tabIndex={isActive ? 0 : -1}>
                        {scene.cta.primary.label} →
                      </Link>
                      <Link className="button button--outline" to={scene.cta.secondary.to} tabIndex={isActive ? 0 : -1}>
                        {scene.cta.secondary.label}
                      </Link>
                    </div>
                  ) : null}
                </article>
              );
            })}
          </div>

          <nav className="koffera-scroll-world__rail" aria-label="Coffee journey scenes">
            {scenes.map((scene, index) => (
              <button
                key={scene.id}
                type="button"
                className={`koffera-scroll-world__dot ${index === scrollState.activeIndex ? 'is-active' : ''}`}
                onClick={() => jumpToScene(index)}
                aria-current={index === scrollState.activeIndex ? 'step' : undefined}
                aria-label={`Go to ${scene.label}`}
                style={{ '--scene-accent': scene.accent }}
              >
                <i aria-hidden="true" />
                <span>{scene.label}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="koffera-scroll-world__hint" aria-hidden="true">
          <span>Scroll to follow the journey</span>
          <i />
        </div>
      </div>
    </section>
  );
}
