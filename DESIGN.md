# Koffera Coffee Export — Design System

This file is the authoritative visual specification for the Koffera Coffee Export website. Implementation must follow it before introducing new components, colours, layouts, imagery, or motion.

## 1. Creative thesis

**A cinematic Ethiopian coffee-export story presented with the restraint of a premium editorial publication.**

The website must feel:

- authentic rather than synthetic;
- premium without becoming ornamental;
- Ethiopian without relying on decorative clichés;
- commercially credible for international coffee buyers;
- photography-led, spacious, calm, and deliberate;
- operationally clear after the cinematic opening.

The opening journey creates emotion. The rest of the site creates confidence.

## 2. Design principles

### 2.1 One idea per section

Every section must answer one buyer question. Do not combine unrelated messages simply to fill a layout.

### 2.2 Photography carries the atmosphere

Interface decoration must not compete with approved coffee, farm, processing, quality, warehouse, export, or partnership imagery.

### 2.3 Editorial, not dashboard-like

Use strong typography, deliberate grids, rules, captions, and image-led compositions. Avoid repeated rounded cards and icon grids.

### 2.4 Verified content only

Never invent coffee specifications, crop years, grades, certifications, shipment volumes, markets, statistics, testimonials, awards, or company achievements.

### 2.5 Restraint is the premium signal

Use fewer elements, fewer colours, fewer buttons, and fewer animation types. Hierarchy must come from scale, spacing, alignment, contrast, and imagery.

## 3. Non-negotiable exclusions

Do not introduce:

- purple or blue technology gradients;
- glassmorphism;
- floating gradient spheres or abstract blobs;
- generic illustrations or stock SaaS icons;
- a rounded card around every piece of content;
- pill-shaped labels used as decoration;
- excessive drop shadows;
- large centred headings in every section;
- identical three-column layouts repeated across pages;
- fake statistics or decorative counters;
- generic copy such as “elevate your experience”, “unlock excellence”, or “where passion meets perfection”;
- random motion on every element;
- AI-generated people with visible anatomical or environmental errors;
- new fonts, colours, or image assets without explicit approval.

## 4. Colour system

### 4.1 Core palette

| Token | Value | Use |
|---|---:|---|
| `--espresso-950` | `#1c120c` | Cinematic backgrounds and footer |
| `--espresso-900` | `#24170f` | Primary dark surface |
| `--coffee-800` | `#4b3425` | Dark brown details |
| `--coffee-700` | `#6f543d` | Secondary text and controls |
| `--caramel-500` | `#b88b5e` | Restrained accent and active state |
| `--parchment-100` | `#eee6db` | Alternate warm section |
| `--cream-50` | `#f7f1e9` | Primary light surface |
| `--paper-0` | `#fbfaf7` | Reading surface |
| `--ink-900` | `#2a211b` | Primary light-surface text |
| `--muted-600` | `#786c63` | Secondary copy |
| `--origin-green` | `#52614b` | Small agriculture/sustainability accent |
| `--cherry-red` | `#8c3f32` | Rare coffee-cherry detail only |

### 4.2 Colour rules

- Use espresso and cream as the dominant pair.
- Use caramel for active states, thin rules, small labels, and selected calls to action.
- Use green only where agriculture, origin, or sustainability meaning is present.
- Use cherry red sparingly; never as the default button colour.
- Do not use decorative CSS gradients. Image overlays may use solid-to-transparent tonal fades for legibility.
- Pure black is reserved for exceptional contrast requirements.

## 5. Typography

### 5.1 Families

- Display and editorial headings: `Georgia, 'Times New Roman', serif` until a licensed approved brand serif is supplied.
- Interface and body: `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`.

### 5.2 Hierarchy

- Hero display: fluid `clamp(3.2rem, 8vw, 7.5rem)`, controlled line breaks, maximum 12 characters per visual line where practical.
- Section display: fluid `clamp(2.4rem, 5vw, 5rem)`.
- Editorial heading: fluid `clamp(1.8rem, 3vw, 3rem)`.
- Body large: `clamp(1.05rem, 1.35vw, 1.3rem)`.
- Body: `1rem` to `1.08rem`.
- Labels: `0.72rem` to `0.82rem`, uppercase, generous tracking.

### 5.3 Typography rules

- Heading weight should remain regular or medium. Avoid heavy bold serif headings.
- Body copy should rarely exceed 68 characters per line.
- Use sentence case for headings.
- Uppercase is limited to small labels, metadata, and navigation details.
- Avoid bolding phrases inside body copy unless essential for comprehension.
- Do not centre long paragraphs.

## 6. Spacing and grid

### 6.1 Spacing scale

Use only this scale unless a browser-safe optical adjustment is required:

`4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 160`

### 6.2 Page grid

- Maximum content width: `1200px`.
- Editorial wide width: `1360px` for cinematic and full-bleed compositions.
- Desktop side padding: `clamp(24px, 5vw, 80px)`.
- Mobile side padding: `20px`.
- Standard section spacing: `clamp(88px, 11vw, 160px)`.
- Use asymmetrical 5/7, 4/8, or 3/9 column relationships where appropriate.

### 6.3 Alignment

- Align headings, body copy, images, and rules to a shared grid.
- Prefer left-aligned editorial compositions.
- Centred composition is reserved for a single strong statement or closing action.

## 7. Shape, border, and shadow

- Default radius: `0` to `8px`.
- Product photography may use up to `16px` only where the existing visual language requires it.
- Buttons should be rectangular with restrained rounding, not pills.
- Prefer thin borders and tonal contrast over shadows.
- Shadows are permitted only for raised navigation or media overlays and must remain soft.

## 8. Approved component grammar

The site should be assembled from a small set of purposeful patterns:

1. **Cinematic scene** — full viewport image, short copy, controlled scene navigation.
2. **Editorial introduction** — asymmetric title and copy columns.
3. **Capability ledger** — text rows separated by rules, not decorative icon cards.
4. **Coffee feature** — large image-led product presentation with verified metadata.
5. **Origin story** — geographic/editorial composition with real location imagery.
6. **Quality sequence** — one continuous process, horizontally or vertically.
7. **Export service index** — numbered rows with concise operational descriptions.
8. **Leadership statement** — documentary portrait plus a short credible message.
9. **Buyer action** — one dominant CTA and one secondary path.
10. **Footer** — clear company, navigation, legal, and contact structure.

Do not create a new component type when one of these patterns can serve the purpose.

## 9. Homepage composition

The homepage must follow this narrative order:

1. Six-scene cinematic journey.
2. Quiet company/buyer introduction.
3. Capability ledger.
4. Featured coffee presentation.
5. Ethiopian origin and sourcing story.
6. Continuous quality and traceability sequence.
7. Export service index.
8. Buyer navigation paths.
9. Final “Request a Coffee Offer” action.

The cinematic section is the opening act, not the entire website.

## 10. Imagery

### 10.1 Required character

- natural Ethiopian light;
- realistic skin tones;
- documentary composition;
- visible coffee detail;
- restrained depth of field;
- earthy, consistent colour grade;
- authentic working environments;
- adequate text-safe space where copy overlays an image.

### 10.2 Prohibited treatment

- exaggerated HDR;
- oversaturated green farms;
- orange-and-teal cinematic grading;
- artificial floating beans;
- generic luxury objects;
- implausibly clean agricultural environments;
- people posed unnaturally for the camera;
- desktop images reused as careless mobile crops.

### 10.3 Asset governance

Every production image must have:

- a descriptive filename;
- page and section assignment;
- desktop and mobile dimensions;
- focal point and text-safe area;
- source/ownership status;
- approval status;
- compression status.

## 11. Responsive rules

- Mobile is independently art-directed, not treated as a smaller desktop.
- Prepare portrait versions of all six cinematic scenes.
- Reduce motion complexity and scene scale on smaller devices.
- Preserve reading order and CTA clarity.
- Avoid horizontal scrolling and text over visually busy focal areas.
- Navigation, forms, and core content must remain usable at 320px width.

## 12. Accessibility

- Respect `prefers-reduced-motion`.
- Keep meaningful copy as HTML, never embedded in images.
- Maintain WCAG-readable colour contrast.
- Support keyboard navigation and visible focus states.
- Avoid scroll trapping.
- Images with no informational purpose must use empty alt text.
- Informational images require concise, specific alt text.

## 13. Copy rules

- Write for international coffee buyers, not for a generic lifestyle audience.
- Prefer specific nouns and verbs over adjectives.
- Keep cinematic copy short.
- Explain product, origin, quality, logistics, and enquiry steps clearly.
- Mark unavailable commercial details as requiring confirmation; do not fabricate filler.
- One primary CTA per decision point.

## 14. Engineering rules for AI coding tools

Before changing code:

1. Read `DESIGN.md` and `MOTION.md`.
2. Preserve the React + Vite architecture, `HashRouter`, GitHub Pages base path, and approved six-scene assets.
3. Work on a branch and keep commits reversible.
4. Change only the requested component or section.
5. Reuse approved tokens and components.
6. Do not add dependencies without a clear technical requirement.
7. Do not invent content or visual assets.
8. Test desktop, mobile, reduced motion, routing, and build output.

Every implementation prompt should include:

> Do not invent a new visual direction. Follow DESIGN.md and MOTION.md as authoritative sources. Do not add gradients, glassmorphism, floating objects, generic icon cards, extra colours, new fonts, unapproved imagery, statistics, certifications, or company claims. Use only approved assets and verified content. Complete one section at a time.
