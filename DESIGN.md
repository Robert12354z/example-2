# DESIGN.md — Jimmy Lima Campaign Site · Second Example
> Reference: zohranfornyc.com · Interaction Level: L3 Cinematic
> Pages: Home · About · Issues · Endorsements · Volunteer · Contact

---

## 1. Visual Theme & Atmosphere

**Design Philosophy**
Bold grassroots political energy adapted for West Covina District 5. Inspired by zohranfornyc.com's electric-canvas approach — the entire page background is a deep electric navy, not white. Headlines are massive, condensed, and UPPERCASE. The site feels like a movement poster that animates.

**Atmosphere Keywords**
Electric · Urgent · Cinematic · Community-driven · Trustworthy · Bold

**One-Line**
"A deep electric navy canvas with gold fire — a campaign site that moves like a movement, not a brochure."

**Key Departures from Example 1**
- Background is dark (electric navy) first, not white — light sections are the exception, not the rule
- Typography is condensed + UPPERCASE for all headings (Union Gothic analog → Barlow Condensed)
- Body text uses IBM Plex Serif (matches Zohran's actual body font)
- Interaction jumps from L1 static to L3 cinematic: GSAP + ScrollTrigger + Lenis throughout
- Hero features a Three.js particle constellation that dissolves into the candidate name

---

## 2. Color Palette & Roles

```css
:root {
  /* ── Canvas (dominant — most of the page lives here) ── */
  --color-canvas:           #0B1F4F;
  --color-canvas-rgb:       11, 31, 79;

  --color-canvas-deep:      #060D24;
  --color-canvas-deep-rgb:  6, 13, 36;

  --color-canvas-mid:       #112660;
  --color-canvas-mid-rgb:   17, 38, 96;

  /* ── Jimmy's signature gold (kept from brand) ── */
  --color-gold:             #F2B705;
  --color-gold-rgb:         242, 183, 5;

  --color-gold-dim:         #C9960A;
  --color-gold-dim-rgb:     201, 150, 10;

  /* ── Salmon accent (lifted from Zohran's palette) ── */
  --color-salmon:           #FF7B7B;
  --color-salmon-rgb:       255, 123, 123;

  /* ── Sky blue (Zohran's sky-blue, used for links/highlights) ── */
  --color-sky:              #D6F3FF;
  --color-sky-rgb:          214, 243, 255;

  --color-sky-mid:          #2E78C7;
  --color-sky-mid-rgb:      46, 120, 199;

  /* ── Text on dark sections ── */
  --color-text-light:       #FFFFFF;
  --color-text-light-rgb:   255, 255, 255;

  --color-text-muted:       rgba(255, 255, 255, 0.62);

  /* ── Light sections (About bios, Endorsement cards, Contact form) ── */
  --color-light:            #F7F9FC;
  --color-light-rgb:        247, 249, 252;

  --color-text-dark:        #0D1B2A;
  --color-text-dark-rgb:    13, 27, 42;

  --color-text-dark-muted:  #5A6A80;

  /* ── Borders ── */
  --color-border-light:     rgba(255, 255, 255, 0.12);
  --color-border-dark:      #D8E1EE;
  --color-border-dark-rgb:  216, 225, 238;

  /* ── Electric blue (Zohran's `#2619d1` — used as accent pop, not bg) ── */
  --color-electric:         #2619D1;
  --color-electric-rgb:     38, 25, 209;

  /* ── Elevation / Glass ── */
  --glass-bg:               rgba(255, 255, 255, 0.06);
  --glass-border:           rgba(255, 255, 255, 0.10);
}
```

**Color Role Map**

| Role | Token | Usage |
|------|-------|-------|
| Page canvas | `--color-canvas` | Default body background, hero, footer |
| Section alt | `--color-canvas-mid` | Alternating dark sections |
| Deep/dramatic | `--color-canvas-deep` | Hero bottom fade, nav overlay |
| Accent primary | `--color-gold` | CTAs, rule lines, star motif, highlights |
| Accent secondary | `--color-salmon` | Endorsement badges, hover glows, error states |
| Sky accent | `--color-sky` | Links on dark bg, subtle gradients |
| Text on dark | `--color-text-light` | All text on canvas sections |
| Muted on dark | `--color-text-muted` | Captions, labels on canvas sections |
| Light section bg | `--color-light` | About, Contact, Endorsement card backgrounds |
| Text on light | `--color-text-dark` | All text on light sections |
| Electric pop | `--color-electric` | Rarely — 1–2 accent moments max |

---

## 3. Typography Rules

```css
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,400;0,600;0,700;0,800;0,900;1,700&family=IBM+Plex+Serif:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@400;500;600;700&display=swap');

:root {
  /* Font stacks */
  --font-heading:  'Barlow Condensed', 'Arial Narrow', sans-serif; /* Union Gothic analog */
  --font-body:     'IBM Plex Serif', Georgia, serif;               /* matches Zohran's body */
  --font-ui:       'Inter', system-ui, sans-serif;                 /* labels, form fields */

  /* Text transform */
  --tt-heading: uppercase;  /* ALL headings uppercase — Zohran DNA */
  --tt-btn:     uppercase;

  /* Type scale */
  --text-hero:    clamp(80px, 16vw, 180px);   /* Hero name / cinematic title */
  --text-display: clamp(52px, 9vw, 108px);    /* Page hero h1 */
  --text-h1:      clamp(38px, 6vw, 72px);
  --text-h2:      clamp(28px, 4vw, 48px);
  --text-h3:      clamp(20px, 2.5vw, 28px);
  --text-h4:      20px;
  --text-body:    17px;
  --text-body-sm: 15px;
  --text-small:   13px;
  --text-label:   11px;

  /* Line heights */
  --lh-hero:    0.88;
  --lh-display: 0.92;
  --lh-heading: 1.0;
  --lh-body:    1.72;

  /* Letter spacing */
  --ls-hero:    -0.02em;
  --ls-heading: 0.01em;
  --ls-label:   0.10em;
  --ls-btn:     0.06em;
}
```

**Type Hierarchy**

| Level | Font | Size | Weight | Transform |
|-------|------|------|--------|-----------|
| Hero (candidate name) | Barlow Condensed | `--text-hero` | 900 | uppercase |
| Page H1 | Barlow Condensed | `--text-display` | 800 | uppercase |
| Section H2 | Barlow Condensed | `--text-h1` | 700 | uppercase |
| Sub-heading H3 | Barlow Condensed | `--text-h2` | 700 | uppercase |
| Card title H4 | Barlow Condensed | `--text-h3` | 600 | uppercase |
| Body paragraph | IBM Plex Serif | `--text-body` | 400 | none |
| UI label / eyebrow | Inter | `--text-label` | 600 | uppercase + 0.10em spacing |
| Button | Barlow Condensed | 15px | 700 | uppercase |
| Form input | Inter | 15px | 400 | none |

**Forbidden Fonts**: Arial (except fallback), system-ui for headings, Helvetica Neue as primary.

**Text Decoration Decisions**

| Element | Decoration | Reason |
|---------|-----------|--------|
| Hero H1 "JIMMY LIMA" | Gold gradient `#F2B705 → #E08A3C` via `background-clip: text` | High-contrast dark bg, hero impact |
| Section H2 on dark | White, no gradient | Uppercase condensed already dramatic |
| Section H2 on light | `--color-canvas` (deep navy), no gradient | Contrast is sufficient |
| Gold rule line | `--color-gold`, 4px height, 60px width | Eyebrow accent below section H2 |
| Links on dark | `--color-sky`, underline on hover | Legibility over decoration |

---

## 4. Component Stylings

### Navigation

```css
/* Default: transparent over canvas */
.nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 200;
  padding: 20px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background 300ms ease, backdrop-filter 300ms ease;
  background: transparent;
}

/* Scrolled state: glass */
.nav--scrolled {
  background: rgba(11, 31, 79, 0.88);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--glass-border);
}

/* Logo */
.nav__logo {
  font-family: var(--font-heading);
  font-size: 22px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--color-text-light);
  text-decoration: none;
}
.nav__logo span { color: var(--color-gold); }

/* Desktop links */
.nav__link {
  font-family: var(--font-ui);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: var(--ls-label);
  text-transform: uppercase;
  color: rgba(255,255,255,0.80);
  text-decoration: none;
  transition: color 200ms ease;
}
.nav__link:hover { color: var(--color-gold); }
.nav__link:focus-visible { outline: 2px solid var(--color-gold); outline-offset: 4px; border-radius: 2px; }
.nav__link--active { color: var(--color-gold); }

/* Donate CTA in nav */
.nav__cta {
  font-family: var(--font-heading);
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: var(--ls-btn);
  background: var(--color-gold);
  color: var(--color-canvas-deep);
  padding: 10px 22px;
  border-radius: 999px;
  text-decoration: none;
  transition: background 200ms ease, transform 200ms ease, box-shadow 200ms ease;
}
.nav__cta:hover {
  background: #FFD04A;
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(242,183,5,0.40);
}
.nav__cta:active { transform: translateY(0); }
.nav__cta:focus-visible { outline: 2px solid var(--color-gold); outline-offset: 3px; }

/* Mobile hamburger */
.nav__burger { display: none; background: none; border: none; padding: 8px; cursor: pointer; }
.nav__burger-line {
  display: block; width: 24px; height: 2px;
  background: var(--color-text-light);
  transition: transform 300ms ease, opacity 200ms ease;
}

/* Full-screen overlay nav (mobile + tablet) */
.nav__overlay {
  position: fixed; inset: 0; z-index: 190;
  background: linear-gradient(150deg, var(--color-canvas-deep) 0%, var(--color-canvas) 100%);
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  opacity: 0; pointer-events: none;
  transition: opacity 350ms ease;
}
.nav__overlay--open { opacity: 1; pointer-events: all; }

.nav__overlay-link {
  font-family: var(--font-heading);
  font-size: clamp(40px, 10vw, 72px);
  font-weight: 800;
  text-transform: uppercase;
  color: var(--color-text-light);
  text-decoration: none;
  letter-spacing: 0.02em;
  transition: color 200ms ease;
}
.nav__overlay-link:hover { color: var(--color-gold); }
```

### Buttons

```css
/* Primary: gold filled */
.btn-primary {
  font-family: var(--font-heading);
  font-size: 15px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: var(--ls-btn);
  background: var(--color-gold);
  color: var(--color-canvas-deep);
  padding: 14px 32px;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex; align-items: center; gap: 8px;
  transition: background 200ms ease, transform 200ms ease, box-shadow 200ms ease;
}
.btn-primary:hover {
  background: #FFD04A;
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(242,183,5,0.38);
}
.btn-primary:active { transform: translateY(0); box-shadow: none; }
.btn-primary:focus-visible { outline: 2px solid var(--color-gold); outline-offset: 4px; border-radius: 999px; }
.btn-primary:disabled { opacity: 0.45; cursor: not-allowed; transform: none; }

/* Ghost: white outline on dark */
.btn-ghost {
  font-family: var(--font-heading);
  font-size: 15px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: var(--ls-btn);
  background: transparent;
  color: var(--color-text-light);
  padding: 13px 30px;
  border-radius: 999px;
  border: 2px solid rgba(255,255,255,0.50);
  cursor: pointer;
  text-decoration: none;
  display: inline-flex; align-items: center; gap: 8px;
  transition: border-color 200ms ease, color 200ms ease, background 200ms ease;
}
.btn-ghost:hover { border-color: var(--color-gold); color: var(--color-gold); }
.btn-ghost:active { background: rgba(242,183,5,0.08); }
.btn-ghost:focus-visible { outline: 2px solid var(--color-gold); outline-offset: 4px; }
.btn-ghost:disabled { opacity: 0.40; cursor: not-allowed; }

/* Salmon CTA (used on volunteer section) */
.btn-salmon {
  background: var(--color-salmon);
  color: #FFFFFF;
  /* inherits other rules from .btn-primary */
}
.btn-salmon:hover {
  background: #FF9E9E;
  box-shadow: 0 8px 28px rgba(255,123,123,0.38);
}
```

### Cards

```css
/* Standard card on dark canvas */
.card {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 16px;
  padding: 28px 24px;
  transition: border-color 250ms ease, transform 250ms ease, box-shadow 250ms ease;
  position: relative;
  overflow: hidden;
}
.card:hover {
  border-color: rgba(242,183,5,0.35);
  transform: translateY(-4px);
  box-shadow: 0 16px 48px rgba(0,0,0,0.24);
}

/* SpotlightCard: CSS var spotlight on hover */
.card--spotlight::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(600px circle at var(--mx, 50%) var(--my, 50%), rgba(242,183,5,0.10), transparent 60%);
  opacity: 0;
  transition: opacity 300ms ease;
  pointer-events: none;
}
.card--spotlight:hover::before { opacity: 1; }

/* Card on light section */
.card--light {
  background: #FFFFFF;
  border: 1px solid var(--color-border-dark);
  box-shadow: 0 4px 16px rgba(11,31,79,0.08);
}
.card--light:hover {
  border-color: rgba(242,183,5,0.40);
  box-shadow: 0 12px 40px rgba(11,31,79,0.14);
}

/* Quote / endorsement card */
.card--quote {
  background: var(--color-canvas-mid);
  border: 1px solid var(--glass-border);
  border-radius: 18px;
  padding: 30px 28px;
  position: relative;
}
.card--quote::after {
  content: '"';
  position: absolute; top: 16px; right: 20px;
  font-family: var(--font-body);
  font-size: 80px; line-height: 1;
  color: rgba(242,183,5,0.18);
}
```

### Form Fields

```css
.field-label {
  font-family: var(--font-ui);
  font-size: var(--text-label);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: var(--ls-label);
  color: var(--color-text-muted);
  display: block;
  margin-bottom: 6px;
}

.field-input {
  font-family: var(--font-ui);
  font-size: 15px;
  color: var(--color-text-dark);
  background: #FFFFFF;
  border: 1.5px solid var(--color-border-dark);
  border-radius: 8px;
  padding: 12px 16px;
  width: 100%;
  transition: border-color 200ms ease, box-shadow 200ms ease;
}
.field-input:hover { border-color: var(--color-sky-mid); }
.field-input:focus { 
  outline: none;
  border-color: var(--color-canvas);
  box-shadow: 0 0 0 3px rgba(11,31,79,0.18);
}
.field-input::placeholder { color: #9AACBE; }
.field-input:disabled { background: #F0F0F0; opacity: 0.7; cursor: not-allowed; }

/* On dark canvas variant */
.field-input--dark {
  background: rgba(255,255,255,0.08);
  border-color: var(--glass-border);
  color: var(--color-text-light);
}
.field-input--dark::placeholder { color: rgba(255,255,255,0.38); }
.field-input--dark:focus {
  border-color: var(--color-gold);
  box-shadow: 0 0 0 3px rgba(242,183,5,0.18);
}
```

### Tags / Badges

```css
.tag {
  font-family: var(--font-ui);
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 4px 12px;
  border-radius: 999px;
  display: inline-block;
}
.tag--gold { background: rgba(242,183,5,0.18); color: var(--color-gold); border: 1px solid rgba(242,183,5,0.30); }
.tag--salmon { background: rgba(255,123,123,0.18); color: var(--color-salmon); border: 1px solid rgba(255,123,123,0.30); }
.tag--sky { background: rgba(214,243,255,0.15); color: var(--color-sky); border: 1px solid rgba(214,243,255,0.25); }

/* Gold rule accent (used under section eyebrows) */
.rule-gold {
  width: 60px; height: 4px;
  background: var(--color-gold);
  border-radius: 2px;
  margin: 12px 0 24px;
}
```

---

## 5. Layout Principles

```css
:root {
  --container-max: 1280px;
  --container-wide: 1440px;
  --container-narrow: 760px;
  --gutter: clamp(20px, 5vw, 80px);
  --section-v: clamp(80px, 10vw, 140px);

  /* Spacing scale */
  --space-2:  2px;
  --space-4:  4px;
  --space-8:  8px;
  --space-12: 12px;
  --space-16: 16px;
  --space-20: 20px;
  --space-24: 24px;
  --space-32: 32px;
  --space-40: 40px;
  --space-48: 48px;
  --space-64: 64px;
  --space-80: 80px;
  --space-120: 120px;
}

.container {
  width: 100%;
  max-width: var(--container-max);
  margin-inline: auto;
  padding-inline: var(--gutter);
}

/* Grid system */
.grid-2  { display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--space-32); }
.grid-3  { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-24); }
.grid-4  { display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--space-20); }

/* Bento (non-equal grid for feature/issues sections) */
.bento {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--space-20);
}
.bento__item--wide  { grid-column: span 8; }
.bento__item--narrow { grid-column: span 4; }
.bento__item--half   { grid-column: span 6; }
.bento__item--third  { grid-column: span 4; }
.bento__item--full   { grid-column: span 12; }
```

**Section Patterns**

| Section | Layout | Notes |
|---------|---------|-------|
| Hero | Full-viewport, centered text | Three.js bg, `min-height: 100svh` |
| Home issues preview | Bento 3-col unequal | Wide left card + 2 stacked right |
| Issues (inner) | Left-pin / right-swap | L3 scroll-story pattern |
| Endorsements | Masonry-ish 3-col | Cards vary in height naturally |
| About | 2-col: text left, photo right | Switches on mobile |
| Volunteer | 2-col: form left, aside right | |
| Contact | 2-col: form left, info right | |

---

## 6. Depth & Elevation

```css
:root {
  /* Shadows on dark canvas (gold-tinted) */
  --shadow-sm:   0 2px 8px rgba(0,0,0,0.20);
  --shadow-md:   0 6px 20px rgba(0,0,0,0.28);
  --shadow-lg:   0 16px 48px rgba(0,0,0,0.36);
  --shadow-xl:   0 32px 80px rgba(0,0,0,0.44);

  /* Gold glow (CTA buttons, active elements) */
  --glow-gold-sm: 0 4px 16px rgba(242,183,5,0.28);
  --glow-gold-md: 0 8px 32px rgba(242,183,5,0.40);
  --glow-gold-lg: 0 16px 64px rgba(242,183,5,0.30);

  /* Salmon glow */
  --glow-salmon: 0 8px 28px rgba(255,123,123,0.38);

  /* Glass card shadow */
  --shadow-glass: 0 8px 32px rgba(0,0,0,0.24), inset 0 1px 0 rgba(255,255,255,0.08);
}
```

**Elevation Map**

| Level | Usage | Shadow |
|-------|-------|--------|
| 0 — Flat | Text, inline elements | none |
| 1 — Raised | Cards at rest | `--shadow-sm` |
| 2 — Floating | Cards on hover, tooltips | `--shadow-md` |
| 3 — Modal | Nav overlay, dialogs | `--shadow-xl` |
| Glow | CTAs, gold accents | `--glow-gold-md` |

---

## 7. Animation & Interaction

**Interaction Level: L3 Cinematic**

**Dependencies**
```html
<!-- GSAP (free tier sufficient) -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
<!-- Lenis smooth scroll -->
<script src="https://cdn.jsdelivr.net/npm/@studio-freight/lenis@1.0.42/dist/lenis.min.js"></script>
<!-- Three.js (hero particle field only) -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
```

**Lenis Setup**
```js
const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
requestAnimationFrame(raf);
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);
```

---

### 7a. Entry Animations (L1 — all pages)

```css
/* Fade-up base state (set by JS before paint) */
[data-reveal] {
  opacity: 0;
  transform: translateY(32px);
}
[data-reveal="left"]  { transform: translateX(-40px); }
[data-reveal="right"] { transform: translateX( 40px); }
[data-reveal="scale"] { transform: scale(0.92); }

@media (prefers-reduced-motion: reduce) {
  [data-reveal] { opacity: 1 !important; transform: none !important; }
}
```

```js
// Scroll reveal — IntersectionObserver for light elements
const revealEls = document.querySelectorAll('[data-reveal]');
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      gsap.to(e.target, {
        opacity: 1, x: 0, y: 0, scale: 1,
        duration: 0.8, ease: 'power3.out',
        delay: parseFloat(e.target.dataset.delay || 0)
      });
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => revealObs.observe(el));
```

---

### 7b. Hero — Three.js Particle Constellation (WebGL Signature)

```js
// Particle field: 800 dots orbit "WC" (West Covina initials) shape,
// then scatter-and-converge into the hero text on load.
// MUST pause when hero leaves viewport (IntersectionObserver).

const heroCanvas = document.getElementById('hero-canvas');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;
const renderer = new THREE.WebGLRenderer({ canvas: heroCanvas, alpha: true, antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);

const PARTICLE_COUNT = 800;
const geometry = new THREE.BufferGeometry();
const positions = new Float32Array(PARTICLE_COUNT * 3);
// Scatter positions randomly to start
for (let i = 0; i < PARTICLE_COUNT * 3; i++) {
  positions[i] = (Math.random() - 0.5) * 12;
}
geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
const material = new THREE.PointsMaterial({ color: 0xF2B705, size: 0.04, transparent: true, opacity: 0.8 });
const particles = new THREE.Points(geometry, material);
scene.add(particles);

let rafId;
function animate() {
  rafId = requestAnimationFrame(animate);
  particles.rotation.y += 0.0006;
  renderer.render(scene, camera);
}
animate();

// Pause when out of view
const heroSection = document.querySelector('.hero');
const pauseObs = new IntersectionObserver(([e]) => {
  if (e.isIntersecting) animate(); else cancelAnimationFrame(rafId);
}, { threshold: 0 });
pauseObs.observe(heroSection);

// Convergence: on load, particles fly from scatter into star ring shape
gsap.from(positions, {
  duration: 2.4, ease: 'expo.out', stagger: 0.001,
  // individual targets fly to their "constellation" positions
  onUpdate: () => geometry.attributes.position.needsUpdate = true
});
```

**Hero Title Entry — SplitText-style clip-path reveal**
```css
.hero__name {
  font-family: var(--font-heading);
  font-size: var(--text-hero);
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: var(--ls-hero);
  line-height: var(--lh-hero);
  background: linear-gradient(135deg, var(--color-gold) 0%, #E08A3C 60%, var(--color-gold) 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradient-flow 4s ease infinite;
}

@keyframes gradient-flow {
  0%   { background-position: 0% center; }
  50%  { background-position: 100% center; }
  100% { background-position: 0% center; }
}

/* Each word wraps in a clip container */
.hero__word { overflow: hidden; display: inline-block; }
.hero__word-inner {
  display: inline-block;
  transform: translateY(110%);
  animation: word-rise 0.9s cubic-bezier(0.16,1,0.3,1) forwards;
}
.hero__word:nth-child(1) .hero__word-inner { animation-delay: 1.8s; } /* after particle burst */
.hero__word:nth-child(2) .hero__word-inner { animation-delay: 2.1s; }

@keyframes word-rise { to { transform: translateY(0); } }
```

---

### 7c. Marquee — Scroll Band (Hook at First Scroll)

```css
.marquee {
  overflow: hidden;
  background: var(--color-gold);
  padding: 14px 0;
  white-space: nowrap;
}
.marquee__track {
  display: inline-flex; gap: 48px;
  animation: marquee-scroll 28s linear infinite;
}
.marquee__item {
  font-family: var(--font-heading);
  font-size: 22px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--color-canvas-deep);
}
.marquee__sep { color: var(--color-canvas-mid); opacity: 0.60; }

@keyframes marquee-scroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

@media (prefers-reduced-motion: reduce) {
  .marquee__track { animation: none; }
}
```

Text: "WEST COVINA · DISTRICT 5 · AFFORDABLE HOUSING · PUBLIC SAFETY · BETTER SCHOOLS · JIMMY LIMA · "

---

### 7d. Issues — Left-Pin / Right-Swap (L3 Scroll-Story)

```js
// Left side: section heading stays pinned
// Right side: each issue card swaps in as user scrolls
// This is the doubao "product four-in-one" pattern

const issueSection = document.querySelector('.issues-pinned');
const issueItems = gsap.utils.toArray('.issue-item');

gsap.timeline({
  scrollTrigger: {
    trigger: issueSection,
    start: 'top top',
    end: () => `+=${issueItems.length * window.innerHeight}`,
    pin: true,
    scrub: 0.5,
    anticipatePin: 1,
  }
}).to('.issues-pinned__left', { /* stays fixed */ })
  .to(issueItems, {
    yPercent: -100 * (issueItems.length - 1),
    ease: 'none',
  });

// Each item fades in/out as it scrolls into view
issueItems.forEach((item, i) => {
  ScrollTrigger.create({
    trigger: issueSection,
    start: () => `top+=${i * window.innerHeight * 0.9} top`,
    end:   () => `top+=${(i + 1) * window.innerHeight * 0.9} top`,
    onEnter: () => gsap.to(item, { opacity: 1, duration: 0.4 }),
    onLeave: () => gsap.to(item, { opacity: 0.2, duration: 0.3 }),
    onEnterBack: () => gsap.to(item, { opacity: 1, duration: 0.4 }),
    onLeaveBack: () => gsap.to(item, { opacity: 0.2, duration: 0.3 }),
  });
});
```

---

### 7e. Section Scroll Reveals (L2)

```js
// H2 BlurText effect — blur fades in as section enters viewport
gsap.utils.toArray('.section-h2').forEach(h2 => {
  gsap.fromTo(h2,
    { opacity: 0, filter: 'blur(12px)', y: 20 },
    {
      opacity: 1, filter: 'blur(0px)', y: 0,
      duration: 1, ease: 'power2.out',
      scrollTrigger: { trigger: h2, start: 'top 80%' }
    }
  );
});

// Staggered card entrance
gsap.utils.toArray('.card-grid').forEach(grid => {
  gsap.from(grid.querySelectorAll('.card'), {
    opacity: 0, y: 48, stagger: 0.10, duration: 0.7, ease: 'power3.out',
    scrollTrigger: { trigger: grid, start: 'top 75%' }
  });
});

// Nav: transparent → glass on scroll
ScrollTrigger.create({
  start: 80,
  onEnter: () => document.querySelector('.nav').classList.add('nav--scrolled'),
  onLeaveBack: () => document.querySelector('.nav').classList.remove('nav--scrolled'),
});
```

---

### 7f. Magnetic CTA Button

```js
// Only on hover:hover devices
if (window.matchMedia('(hover: hover)').matches) {
  const magnets = document.querySelectorAll('[data-magnet]');
  magnets.forEach(btn => {
    let rafId;
    btn.addEventListener('mousemove', e => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const rect = btn.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (e.clientX - cx) * 0.28;
        const dy = (e.clientY - cy) * 0.28;
        gsap.to(btn, { x: dx, y: dy, duration: 0.3, ease: 'power2.out' });
      });
    });
    btn.addEventListener('mouseleave', () => {
      cancelAnimationFrame(rafId);
      gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1,0.4)' });
    });
  });
}
```

---

### 7g. SpotlightCard Hover

```js
// rAF-throttled pointer tracking for card spotlight effect
const spotlightCards = document.querySelectorAll('.card--spotlight');
spotlightCards.forEach(card => {
  let rafId;
  card.addEventListener('mousemove', e => {
    cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(() => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
      card.style.setProperty('--my', `${e.clientY - rect.top}px`);
    });
  });
});
```

---

### 7h. ClickSpark (Volunteer / Donate CTA Easter Egg)

```js
// On donate button click: burst of gold sparks from click point
document.querySelectorAll('[data-spark]').forEach(btn => {
  btn.addEventListener('click', e => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    for (let i = 0; i < 12; i++) {
      const spark = document.createElement('span');
      spark.className = 'spark';
      spark.style.cssText = `left:${x}px;top:${y}px;--angle:${i * 30}deg`;
      btn.appendChild(spark);
      spark.addEventListener('animationend', () => spark.remove());
    }
  });
});
```

```css
.spark {
  position: absolute; pointer-events: none;
  width: 6px; height: 6px; border-radius: 50%;
  background: var(--color-gold);
  animation: spark-burst 0.55s ease forwards;
}
@keyframes spark-burst {
  to {
    transform: rotate(var(--angle)) translateY(-32px);
    opacity: 0; scale: 0;
  }
}
```

---

### 7i. Page Transition

```js
// Fade-out / fade-in on internal nav
function navigateTo(page) {
  const root = document.getElementById('root');
  gsap.to(root, {
    opacity: 0, y: -12, duration: 0.28, ease: 'power2.in',
    onComplete: () => {
      setPage(page);
      gsap.fromTo(root,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.44, ease: 'power2.out', delay: 0.05 }
      );
      lenis.scrollTo(0, { immediate: true });
    }
  });
}
```

---

### 7j. Signature Moments Checklist (L3 — must all be present)

| # | Category | Implementation | Location |
|---|----------|---------------|----------|
| 1 | Text — Hero H1 | Gold gradient + clip-path word-rise | Hero |
| 2 | Text — Section H2 | BlurText (blur→clear) on scroll enter | Every section |
| 3 | Text — Body/Label | Stagger fadeUp via IntersectionObserver | Cards, paragraphs |
| 4 | Animation — Element | Magnetic CTA, SpotlightCard, ClickSpark | CTAs, feature cards |
| 5 | Component | Left-pin / right-swap Issues viewer | Issues page |
| 6 | Background | Three.js particle constellation | Hero |
| Bonus | Marquee | Gold band after hero | Home, between sections |
| Bonus | Page transition | Fade + translateY between pages | All navigation |

---

## 8. Do's and Don'ts

### Do's
1. **Do** use `var(--color-canvas)` as the default page background — never white as the dominant color
2. **Do** make ALL headings uppercase with Barlow Condensed — the Zohran DNA must read immediately
3. **Do** use the gold rule line (`.rule-gold`) under every section eyebrow label
4. **Do** let the marquee carry the campaign's key issues in loud, scrolling text
5. **Do** pair the Three.js particle field with `IntersectionObserver` to pause when off-screen
6. **Do** use `rAF` throttling on every `mousemove`/`pointermove` handler
7. **Do** maintain the salmon accent as a warm counterpoint to the cool navy — use it for volunteer CTA and endorsement tags
8. **Do** add `prefers-reduced-motion` detection before every GSAP animation
9. **Do** implement the ClickSpark on every primary CTA — it's the "巧思" Easter egg
10. **Do** use real imagery (Unsplash portrait placeholders until supplied) — no plain colored blocks

### Don'ts
1. **Don't** use `filter: blur()` on any moving/animating element — use `opacity + scale` for depth instead
2. **Don't** hardcode any hex value in component styles — everything through CSS variables
3. **Don't** run the Three.js renderer when the hero is off-screen — `cancelAnimationFrame` immediately
4. **Don't** add more than 1 `ScrollTrigger pin` per page beyond the Issues left-pin (total ≤ 2)
5. **Don't** use a custom cursor — this is a political campaign site, not a design portfolio
6. **Don't** use `backdrop-filter: blur()` values above 14px
7. **Don't** add Lenis on pages where there are no pin-scrub sections — only Issues page needs it, others use native smooth scroll
8. **Don't** use emoji anywhere — this is a serious political campaign
9. **Don't** use plain solid-color image placeholders — use Unsplash URLs or `object-fit: cover` on candidate photos
10. **Don't** use Playful style motion (bouncy, wobbly) — the campaign tone is "urgent and trustworthy", not cute

---

## 9. Responsive Behavior

```css
/* Breakpoints */
:root {
  --bp-mobile: 600px;
  --bp-tablet: 900px;
  --bp-desktop: 1200px;
}

/* Typical responsive pattern */
@media (max-width: 900px) {
  .grid-2, .grid-3, .grid-4 { grid-template-columns: 1fr; }
  .bento__item--wide,
  .bento__item--narrow,
  .bento__item--half { grid-column: span 12; }

  .nav__links { display: none; }
  .nav__burger { display: flex; flex-direction: column; gap: 5px; }

  /* Left-pin/right-swap issues: collapse to normal scroll on mobile */
  .issues-pinned { display: block; }
  .issues-pinned__left { position: static; }
}

@media (max-width: 600px) {
  /* Hero: reduce particle count on mobile */
  /* handled in JS: if (window.innerWidth < 600) PARTICLE_COUNT = 300 */

  /* Touch targets */
  .btn-primary, .btn-ghost { min-height: 48px; min-width: 48px; padding: 14px 24px; }
  .nav__link { min-height: 44px; display: flex; align-items: center; }

  /* No horizontal overflow */
  .marquee__track { animation-duration: 18s; }
  .hero__name { word-break: break-word; }

  /* Three.js: switch to static gradient bg on mobile */
  /* handled in JS: renderer disabled, CSS gradient shown instead */
  .hero-canvas-fallback {
    background: radial-gradient(ellipse at 40% 50%, rgba(38,25,209,0.5) 0%, transparent 70%),
                linear-gradient(135deg, var(--color-canvas-deep), var(--color-canvas-mid));
  }
}
```

**Mobile Degradation Rules**

| Feature | Desktop | Mobile (≤600px) |
|---------|---------|-----------------|
| Three.js particle field | Full (800 particles) | Disabled → CSS radial gradient fallback |
| Left-pin / right-swap | GSAP ScrollTrigger pin | Normal vertical scroll |
| Magnetic CTA | Enabled (`hover: hover`) | Disabled (touch device) |
| SpotlightCard | Enabled | Disabled |
| Marquee | Full | Faster (18s), single track |
| Lenis | Enabled (Issues page) | Disabled — native scroll |
| Particle count | 800 | 300 (if renderer kept) |

**Touch targets**: All interactive elements ≥ 44×44px on mobile.

**No horizontal overflow**: `overflow-x: hidden` on `.app` wrapper, hero text uses `word-break: break-word` below 600px.

---

## Tech Stack

- **Framework**: React 19 (same as Example 1) — single `.tsx` file
- **Bundler**: Browserify / esbuild (match Example 1's `bundle.js` output)
- **Styling**: Inline styles + CSS-in-`<style>` tag injected in component (no Tailwind, no CSS modules — keep consistent with Example 1)
- **Animation**: GSAP + ScrollTrigger (CDN via `<script>` in `index.html`) + Lenis (CDN)
- **3D**: Three.js (CDN, hero only)
- **Icons**: Inline SVG only
- **Images**: Candidate photo from project assets (`wc-photo.webp` if reused) + Unsplash URLs for any additional

---

*Motion effects derived from [vue-bits](https://github.com/DavidHDev/vue-bits) by DavidHDev (MIT)*
