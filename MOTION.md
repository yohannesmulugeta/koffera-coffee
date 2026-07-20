# Koffera Coffee Export — Motion Specification

Motion must support the coffee journey, clarify hierarchy, and preserve usability. It must never exist only to make the site appear more complex.

## 1. Motion character

Koffera motion is:

- slow enough to feel composed;
- responsive enough to avoid friction;
- cinematic in the six-scene opening;
- restrained and editorial elsewhere;
- reversible and accessible;
- based on opacity, position, scale, and masking rather than novelty effects.

## 2. Permitted motion types

### 2.1 Cinematic scene transition

- Crossfade between adjacent approved scenes.
- Subtle image scale range: approximately `1.02` to `1.10`.
- Subtle vertical camera offset: maximum `24px`.
- Copy enters with opacity and maximum `34px` vertical movement.
- Only the current and adjacent scene should contribute visually.

### 2.2 Editorial reveal

- Opacity from `0` to `1`.
- Translate Y from `16px` to `0`.
- Duration: `500–750ms`.
- Easing: `cubic-bezier(.22, 1, .36, 1)`.
- Stagger only related items, maximum `90ms` between items.

### 2.3 Image reveal

- Optional overflow-mask reveal for major editorial images.
- Duration: `700–1000ms`.
- No diagonal wipes, spinning, or fragmented tile effects.

### 2.4 Navigation and controls

- Colour, underline, or border transition: `160–240ms`.
- Button movement: maximum `2px`.
- No elastic or bouncing controls.

## 3. Prohibited motion

Do not use:

- scroll hijacking;
- infinite decorative motion;
- cursor followers;
- magnetic buttons;
- rotating words that affect reading;
- text scrambling;
- excessive parallax;
- 3D card tilting;
- floating icons;
- auto-playing carousels;
- large blur transitions;
- bounce, elastic, or overshoot easing;
- animation on every heading or paragraph.

## 4. Cinematic scroll rules

- The browser retains normal vertical scrolling.
- The cinematic container may be sticky, but must never trap the user.
- Scene progress must be calculated from the container's travelled distance.
- Scene navigation controls must be keyboard accessible.
- The first scene loads eagerly; later scenes may lazy-load.
- Text remains real HTML.
- Content after the sequence must become available immediately after the final scene.
- Do not require the user to interact with all scenes to access the rest of the site.

## 5. Reduced-motion behaviour

When `prefers-reduced-motion: reduce` is active:

- disable camera translation and scaling;
- remove smooth scrolling;
- shorten or remove reveals;
- use direct opacity changes;
- ensure all information remains available;
- do not hide content pending intersection or scroll progress.

## 6. Mobile behaviour

- Reduce the amount of image scaling and vertical offset.
- Hide nonessential scene labels where space is limited.
- Keep the primary scene message above competing image detail.
- Avoid long sticky sequences on small or low-powered devices.
- Prefer approximately `70–85vh` visual stages where full viewport height causes browser chrome issues.
- Use portrait-approved images when supplied; do not depend on aggressive desktop cropping.

## 7. Performance limits

- Prefer CSS transforms and opacity.
- Avoid animating layout properties such as width, height, top, left, or margin.
- Use `requestAnimationFrame` for scroll-linked calculations.
- Cancel scheduled animation frames on cleanup.
- Do not introduce a motion library unless existing CSS and React logic cannot meet a documented requirement.
- Compress scene media and avoid simultaneous decoding of all large images.

## 8. Review checklist

Before accepting motion, confirm:

- the message is readable during movement;
- the user can scroll normally;
- controls remain clickable and keyboard accessible;
- mobile performance remains responsive;
- reduced-motion mode is complete;
- no movement competes with product or origin information;
- removing the animation would not reveal a broken layout;
- the effect supports the narrative rather than demonstrating a technique.
