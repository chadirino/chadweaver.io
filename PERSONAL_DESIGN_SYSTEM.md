# Personal Design System Inventory
**chadweaver.io — audited 2026-05-21 · decisions applied 2026-05-21**

This document is a complete audit and current reference for the design system. The existing `docs/style-guide.md` remains the interaction-spec reference; this document covers the full token and pattern inventory.

---

## 1. Color Tokens

All tokens are defined in `assets/css/main.css :root`.

### Surfaces & Text

| Token | Hex | Contrast on `--bg` | Usage |
|---|---|---|---|
| `--bg` | `#f9f6f0` | — | Page background (warm cream) |
| `--ink` | `#131212` | ~45:1 | Primary text, borders, dark fills (nav hover, cta-strip, ticker, placeholder-side) |
| `--c-text-2` | `#555` | ~6.0:1 ✓ AA | Section labels, footer, back-link, project-desc, sidebar-label, placeholder captions, hero-bio |
| `--c-text-3` | `#666` | ~4.8:1 ✓ AA | Body paragraphs, work descriptions, value-desc, now-text, about-bio, 404 body |

### On-Dark Surface Tokens

These tokens represent text/accent colors intended for use on `--ink` background surfaces. Applying them makes dark-surface authoring predictable and grep-able.

| Token | Resolves To | Hex | Usage |
|---|---|---|---|
| `--on-ink` | `var(--bg)` | `#f9f6f0` | Primary text on `--ink` backgrounds (nav hover, skip link, cta-strip, ticker, project-soon) |
| `--on-ink-secondary` | `var(--c-dim)` | `#888` | Secondary/muted text on `--ink` backgrounds (placeholder-side description) |
| `--on-ink-accent` | `var(--orange)` | `#e8634a` | Accent text on `--ink` backgrounds (eyebrow labels within dark panels, ticker `✦`, cta-text span) |

### Gray Scale (Non-Text / Dark-Background Only)

These tokens fail WCAG AA on the cream `--bg`. They are only safe on the dark `--ink` surface.

| Token | Hex | Usage |
|---|---|---|
| `--c-dim` | `#888` | `--on-ink-secondary` alias; muted text within dark panels |
| `--c-faint` | `#aaa` | `.project-soon .soon-text` (on `--ink` background) |
| `--c-line` | `#e8e3da` | List dividers, hatch pattern stripes (never text) |
| `--c-ddd` | `#ddd` | `.project-screenshot--placeholder span` border only |
| `--c-border-dark` | `#444` | CTA button borders on the dark `--ink` surface |

### Brand Palette

| Token | Hex | Usage |
|---|---|---|
| `--purple` | `#887ba3` | Hero title accent span, tag border — 3.3:1 on `--bg` (large bold text only) |
| `--purple-light` | `#f0edf8` | Tag bg, project card hover sweep, `badge-box` (purple stat) bg |
| `--purple-dark` | `#4a3f63` | Tag text — ~5.8:1 on `--purple-light` ✓ AA |
| `--orange` | `#e8634a` | Primary accent — active nav, hover fills, section decorations, eyebrow labels, CTA accent text |
| `--orange-light` | `#fdeae5` | Work item hover bg, "early/in-progress" badge bg, `badge-box--orange` bg |
| `--orange-text` | `#9e3620` | "Early/in-progress" badge text — ~5.8:1 on `--orange-light` ✓ AA |
| `--green` | `#2d7a4f` | "Live" badge text/border |
| `--green-light` | `#e6f4ed` | "Live" badge background |
| `--blue` | `#1864ab` | "Prototype" badge border, dot fill |
| `--blue-light` | `#e3eefb` | "Prototype" badge background |
| `--blue-text` | `#0d4276` | "Prototype" badge text |

### Border & Radius Tokens

| Token | Value | Usage |
|---|---|---|
| `--border-width` | `2px` | Width component of the primary border |
| `--border-color` | `var(--ink)` | Color component of the primary border |
| `--border` | `var(--border-width) solid var(--border-color)` | Primary structural border shorthand |
| `--border-divider` | `1px solid var(--c-line)` | Soft list dividers (`.work-item`, `.sidebar-link`) |
| `--border-width-pill` | `1.5px` | Border width for tag and badge pill elements |
| `--radius` | `4px` | Pill-shaped inline elements only (tags, badges, skill pills, tech-items); all block containers are square |

### Spacing Scale (4px base)

| Token | Value | Notes |
|---|---|---|
| `--space-1` | `4px` | |
| `--space-2` | `8px` | |
| `--space-3` | `12px` | |
| `--space-4` | `16px` | |
| `--space-5` | `20px` | |
| `--space-6` | `24px` | |
| `--space-8` | `32px` | |
| `--space-10` | `40px` | |
| `--space-12` | `48px` | Section padding |
| `--space-16` | `64px` | Section spacing |

Note: Spacing tokens are defined and available. Existing layout rules have not been bulk-migrated to use them — apply when touching a rule for another reason.

### Z-Index Tokens

| Token | Value | Usage |
|---|---|---|
| `--z-nav` | `100` | Sticky `nav` element |
| `--z-overlay` | `9999` | `.skip-link` focus overlay |

---

## 2. Typography

### Font Families

| Token | Family | Weights Loaded | Role |
|---|---|---|---|
| `--ff` | `'Space Grotesk', sans-serif` | 400, 500, 600, 700 | All content: prose, headings, nav, buttons, skill pills, mixed-case text |
| `--fm` | `'Space Mono', monospace` | 400, 700 | All metadata: labels, tags, badges, section headers, ticker, footer, eyebrows |

**Font division rule:** Space Grotesk (`--ff`) = anything the user reads as content or interacts with as UI. Space Mono (`--fm`) = anything that functions as a label, tag, caption, or structural marker. Skill pills use Space Grotesk by inheritance — this is intentional, not an omission.

### Line Height Tokens

| Token | Value | Applied To |
|---|---|---|
| `--lh-body` | `1.5` | `body` element |
| `--lh-heading` | `1.05` | All page-title elements: `.hero-title`, `.project-hero-title`, `.about-name`, `.not-found-heading` |

Other elements have their own `line-height` values that are intentional per-component choices (e.g., `1.6` for card descriptions, `1.75` for detail body paragraphs).

### Tracking (Letter Spacing) Tokens

| Token | Value | Applied To |
|---|---|---|
| `--tracking-tight` | `-0.03em` | All page-level display titles |
| `--tracking-normal` | `0.01em` | Buttons (`.btn-primary`, `.btn-secondary`, `.cta-btn`, notify button) |
| `--tracking-loose` | `0.12em` | Orange eyebrow labels: `.hero-eyebrow`, `.about-eyebrow`, `.next-eyebrow`, `.project-soon .soon-label`, `.placeholder-side .coming-label` |

All other letter-spacing values are per-component and not tokenized.

### Type Scale

| Size | Where Used |
|---|---|
| 9px | `.project-badge` (status badge) |
| 10px | `.section-label`, `.badge-box .lbl`, `.foot-name/.foot-year`, `.sidebar-label`, `.now-label`, `.not-found-code`, `.placeholder-main span`, `.project-screenshot--placeholder span`, `.work-more` |
| 11px | `.hero-eyebrow`, `.about-eyebrow`, `.nav-links li a` (mobile), `.back-link`, `.feature-num`, `.notify-confirm` |
| 12px | `.ticker-item`, `.nav-logo` (mobile) |
| 13px | `.tech-item`, `.work-desc`, `.not-found-back`, `.notify-form input/button` |
| 14px | Buttons (`.btn-primary`, `.btn-secondary`, `.cta-btn`), `.skip-link`, `.project-desc`, `.detail-body p`, `.feature-text`, `.sidebar-link`, nav links (desktop) |
| 15px | `.work-role`, `.value-title` |
| 16px | `body` base, `.hero-bio` |
| 17px | `.about-bio` |
| 18px | `.not-found-body` |
| 19px | `.project-name`, `.project-tagline` |
| 20px | `.cta-text` |
| 22px | `.detail-body h2` |
| 24px | `.next-title` |
| 28px | `.placeholder-side .coming-title` |
| 32px | `.badge-box .num` (stat display) |
| Fluid | `.hero-title`: `clamp(36px, 5vw, 60px)` |
| Fluid | `.project-hero-title`: `clamp(36px, 5vw, 72px)` |
| Fluid | `.about-name` (mobile): `clamp(24px, 7vw, 36px)` |
| Fluid | `.about-name` (desktop): `clamp(40px, 5vw, 68px)` |
| Fluid | `.not-found-heading`: `clamp(40px, 7vw, 72px)` |

### Font Weights

| Weight | Usage |
|---|---|
| 400 | Body copy, Space Mono labels (`.section-label` etc.) |
| 500 | Nav links, sidebar links, `.skill-pill`, `.tech-item` |
| 600 | `strong` in body copy, `.work-role`, buttons |
| 700 | All headings (h1, h2), nav logo, `.badge-box .num`, `.value-title`, `.feature-num`, `.placeholder-side .coming-title`, `.not-found-heading` |

---

## 3. Spacing

No formal spacing scale has been migrated yet — the tokens are defined; apply them when touching a rule. Current values in use:

`2px, 4px, 5px, 6px, 8px, 10px, 12px, 14px, 16px, 20px, 22px, 24px, 28px, 32px, 36px, 40px, 48px, 64px, 72px, 96px`

The pattern loosely follows an 8-point base with 4-point half-steps at smaller sizes. No 28px, 36px, or 40px maps to a spacing token; these are one-off values in specific components.

---

## 4. Borders & Radius

### Border Widths in Use

| Width | Context | Token |
|---|---|---|
| `var(--border-width)` (2px) `solid var(--border-color)` | All structural borders — nav, cards, section dividers, buttons | `--border` shorthand ✓ |
| `2px solid var(--c-border-dark)` | CTA strip buttons (on dark `--ink` surface) | Uses `--c-border-dark`; can't use `--border` (different color) |
| `var(--border-width-pill)` (1.5px) `solid <color>` | Tag pills (purple), all `.project-badge` variants | `--border-width-pill` ✓ |
| `var(--border-divider)` (1px solid `--c-line`) | List dividers: `.work-item`, `.sidebar-link` | `--border-divider` ✓ |
| `1px solid var(--c-ddd)` | `.project-screenshot--placeholder span` | Hardcoded — only one instance, low migration priority |

### Border Radius

| Value | Usage |
|---|---|
| `var(--radius)` (4px) | `.tag`, `.project-badge` (all variants), `.skill-pill`, `.tech-item` |
| `2px` | `.hero-title .underline::after` (orange underline bar) — hardcoded, half of `--radius` |
| `50%` | `.nav-logo span` (orange dot), badge status dots (`::before`), `.photo-box` (mobile circular crop), `.photo-box-label .photo-icon` |
| `0` / none | Everything else — all cards, panels, and containers are square |

**Rule:** 4px radius on all inline pill-shaped elements (tags, badges, tech-items, skill pills). All block-level containers and cards are square.

---

## 5. Component Inventory

### Nav

**File:** `main.js` (HTML injected), `main.css`

| Element | Class | Description |
|---|---|---|
| Container | `nav` | Sticky, 52px tall, `z-index: var(--z-nav)`, border-bottom |
| Logo | `.nav-logo` | "Chad Weaver" + orange dot. Link to home. |
| Orange dot | `.nav-logo span` | 8×8px, `border-radius: 50%`, `background: --orange` |
| Links list | `.nav-links` | Right-aligned flex row |
| Link item | `.nav-links li a` | Bordered left, hover: ink bg + `--on-ink` text |

**States:**
- Default: transparent bg, ink text
- Hover: `background: var(--ink)`, `color: var(--on-ink)` — `transition: 0.15s`
- Active: `background: var(--orange)`, `color: var(--bg)` — set via JS `.active` class

**Responsive:**
- Mobile: logo `13px / 0 12px` padding; links `11px / 0 10px` padding
- Desktop (700px+): logo `15px / 0 24px`; links `14px / 0 20px`

---

### Footer

**File:** `main.js` (injected), `main.css`

`.site-footer` — centered, max-width 1100px, `padding: 20px 24px` (mobile) / `24px 48px` (desktop). Two `<span>` children: `.foot-name` and `.foot-year`. No top border. Typography matches `.section-label`.

---

### CTA Strip

**File:** `main.js` (injected), `main.css`

`.cta-strip` — dark ink bg, full-width, max-width 1100px container. Text + button row.

| Element | Class | Description |
|---|---|---|
| Headline | `.cta-text` | Uses `--on-ink`; `span` inside uses `--on-ink-accent` |
| Button group | `.cta-links` | Flex row, no gap (shared borders) |
| Button | `.cta-btn` | `12px 24px` padding, `border: 2px solid --c-border-dark`, `border-right: none`, last-child restores right border |

**States:**
- Button default: transparent bg, `--on-ink` text, `--c-border-dark` border
- Button hover: `background: --orange`, `border-color: --orange`
- Button active: `transform: scale(0.97)`, `transition: transform 0.1s ease`
- Button focus-visible: `outline-color: var(--on-ink)` (overrides global orange for visibility on dark bg)

**Responsive:**
- Mobile: `flex-direction: column`, `32px 24px` padding
- Desktop: `flex-direction: row`, `40px 48px` padding

---

### Section Label

**File:** `main.css`

`.section-label` — Space Mono, 10px, 0.14em tracking, uppercase, `--c-text-2`. Has `::before` pseudo-element: 24×2px orange bar. Used as `<h2>` on every section.

---

### Tag Pills

**File:** `main.css`

`.tag` — Space Mono, 10px, 0.06em tracking, uppercase, `4px 8px` padding, `var(--border-width-pill) solid --purple` border, `--purple-light` bg, `--purple-dark` text, `--radius` (4px).

**States:** None (display only).

**Used on:** project cards (index), project hero meta (detail pages), sidebar category card.

---

### Status Badges

**File:** `main.css`

`.project-badge` — Space Mono, 9px, 0.08em tracking, uppercase, `4px 8px` padding, `var(--border-width-pill)` border, `--radius`, `inline-flex`, `gap: 5px`.

| Modifier | Color | Icon |
|---|---|---|
| (base) "Early / In Progress" | border `--orange`, bg `--orange-light`, text `--orange-text` | `::before`: `×` character, 12px Space Grotesk |
| `--live` | border `--green`, bg `--green-light`, text `--green` | `::before`: 6×6px circle, `--green` fill, `live-pulse` animation |
| `--prototype` | border `--blue`, bg `--blue-light`, text `--blue-text` | `::before`: 6×6px circle, `--blue` fill, no animation |

---

### Buttons

**File:** `assets/css/index.css`

| Class | Background | Text | Border | Hover | Active |
|---|---|---|---|---|---|
| `.btn-primary` | `--ink` | `--bg` | `--border` | `bg: --orange, border: --orange` | `scale(0.97)`, `0.1s ease` |
| `.btn-secondary` | transparent | `--ink` | `--border` | `bg: --purple-light, border: --purple, color: --purple` | `scale(0.97)`, `0.1s ease` |

Both: `inline-flex`, `align-items: center`, `gap: 8px`, `12px 20px` padding, 14px, weight 600, `letter-spacing: var(--tracking-normal)`, `transition: 0.15s`.

Focus-visible: global orange 2px outline (offset 2px).

---

### Project Cards

**File:** `assets/css/index.css`

`.project-card-link > .project-card` — border-bottom, 28px padding. Contains: `.project-header` (name + header-right), `.project-screenshot`, `.project-desc`, `.project-tags`.

| State | Description |
|---|---|
| Default | Transparent card, standard border-bottom |
| Hover | `--purple-light` background sweeps up via `::before` transform, `transition: 0.25s cubic-bezier(0.4,0,0.2,1)`. Arrow turns orange. Screenshot image scales 1.04×, `transition: 0.4s ease`. |

**Grid:**
- Mobile: 1 column
- Desktop (700px+): 2 columns. Even children lose right border.

---

### Badge Boxes (Hero Stats)

**File:** `assets/css/index.css`

`.badge-box` — bordered, `16px 20px` padding, centered text, min-width 130px, `--purple-light` bg.

| Part | Style |
|---|---|
| `.num` | 32px, weight 700, `-0.04em` tracking, `--purple`, `line-height: 1` |
| `.lbl` | Space Mono, 10px, `0.10em` tracking, uppercase, `--purple`, `margin-top: 4px` |
| `--orange` modifier | bg `--orange-light`, num + lbl both `--orange` |

No hover state. Display only.

---

### Ticker / Marquee

**File:** `assets/css/index.css`

`.ticker-wrap` — `--ink` bg, `border-bottom: --border`, `overflow: hidden`, `padding: 12px 0`.

`.ticker-track` — `animation: ticker 28s linear infinite`. Pauses on hover.

`.ticker-item` — Space Mono, 12px, `0.08em` tracking, uppercase, `color: var(--on-ink)`, `0 28px` padding. Has `::after` with `✦` in `var(--on-ink-accent)`.

---

### Work Items

**File:** `assets/css/index.css`

`.work-item` — 2-column grid (`120px 1fr`), `20px 0` padding, `border-bottom: var(--border-divider)`. Last child has no bottom border.

| Part | Style |
|---|---|
| `.work-year` | Space Mono, 11px, `0.04em`, `--c-text-3`, `padding-top: 3px` |
| `.work-role` | 15px, weight 600, `-0.01em`. `em` is not italic (intentional) |
| `.work-desc` | 13px, `--c-text-3`, `line-height: 1.5` |

**Hover:** bg `--orange-light`, `margin: 0 -16px`, `padding: 20px 16px` — horizontal bleeding effect. `transition: background 0.15s, padding 0.15s, margin 0.15s`.

---

### Skill Pills

**File:** `assets/css/index.css`

`.skill-pill` — 13px, weight 500, `8px 14px` padding, `--border`, `--bg` bg, `cursor: default`, `--radius`, `-0.01em` tracking.

Inherits `--ff` (Space Grotesk) — intentional. Skill pills are readable content labels, not metadata, so Grotesk is correct.

No hover state.

---

### Back Link

**File:** `main.css`

`.back-link` — `inline-flex`, `gap: 8px`, Space Mono, 11px, `0.08em`, uppercase, `--c-text-2`. Hover: `color: --ink`, `transition: 0.15s`. Used on project detail pages.

---

### Project Hero Block

**File:** `main.css`

`.project-hero` — full-width wrapper with max-width 1100px, `32px 24px 0` padding (mobile) / `48px 48px 0` (desktop), `border-bottom`.

| Element | Style |
|---|---|
| `.project-hero-top` | Flex row, space-between, `margin-bottom: 40px`, wraps at gap 16px |
| `.project-meta` | Flex, `gap: 12px` — holds tags + badge |
| `.project-hero-title` | `clamp(36px, 5vw, 72px)`, weight 700, `line-height: var(--lh-heading)`, `letter-spacing: var(--tracking-tight)`. `span` inside colors to `--purple` |
| `.project-tagline` | 19px, `--c-text-2`, `line-height: 1.65`, `max-width: 600px`, `margin-bottom: 40px` |

---

### Placeholder Strip

**File:** `main.css`

Used on project pages awaiting screenshots.

`.placeholder-strip` — grid, `border-top: --border`. Two children:
- `.placeholder-main` — 200px tall (mobile), hatch pattern bg (`--c-line` 45deg stripes, `transparent 12px`), centered `.ph-icon` (56×56px bordered box) + caption in `--c-text-2`
- `.placeholder-side` — `--ink` bg, `40px` padding, `gap: 20px` — holds `.coming-label` (`--on-ink-accent`, `var(--tracking-loose)`), `.coming-title` (28px, weight 700, `--on-ink`), `.coming-desc` (14px, `--on-ink-secondary`)

**Responsive:**
- Mobile: 1 column, placeholder-main has `border-bottom`
- Desktop (700px+): 2 columns, placeholder-main has `border-right` (no bottom)

---

### Project Detail Grid

**File:** `main.css`

`.detail-grid` — grid, 1col mobile / `2fr 1fr` (desktop, 64px gap).

Left: `.detail-body` — `h2` (22px, weight 700, `-0.02em`, `margin-top: 36px`), `p` (15px, `--c-text-3`, `line-height: 1.75`), `strong` resets to `--ink`.

Right: sidebar with `.sidebar-card` (bordered, `24px` padding), `.sidebar-label` (Space Mono, 10px, `0.10em`, uppercase, `--c-text-2`), `.sidebar-tags` (flex wrap, `gap: 6px`).

---

### Sidebar Links

**File:** `assets/css/civic-compass.css`

`.sidebar-link` — flex, space-between, `12px 0` padding, `border-bottom: var(--border-divider)`, 14px, weight 500. Hover: `color: --orange`, `transition: 0.15s`.

---

### Tech Items

**File:** `main.css`

`.tech-item` — 13px, weight 500, `6px 10px` padding, `--border`, `--radius`, `--bg` bg. Used inside `.sidebar-tags`.

---

### Next Project Navigation

**File:** `main.css`

`.next-project` — max-width 1100px, `border-top: --border`, grid 1col / 2col desktop.

`.next-col` — flex column, `28px 24px` padding (mobile) / `40px 48px` (desktop), space-between.

| Element | Style |
|---|---|
| `.next-eyebrow` | Space Mono, 10px, `var(--tracking-loose)`, uppercase, `--orange`, `margin-bottom: 12px` |
| `.next-title` | 24px, weight 700, `-0.02em`, `--ink`, `display: block`. Hover: `--orange`, `0.15s` |
| `.next-arrow` | 40×40px bordered box, centered icon. Hover: `bg: --orange, border: --orange, color: --bg` |

---

### Values Grid (About)

**File:** `assets/css/about.css`

`.values-grid` — bordered grid, 1col mobile / 3col desktop.

`.value-icon` — 28×28px, `margin-bottom: 14px`, `color: --ink`. Lucide SVG at 28px, `stroke-width: 2` (intentional override from global 2.5).

`.value-desc` — 13px, `--c-text-3`, `line-height: 1.6`.

---

### Now Grid (About)

**File:** `assets/css/about.css`

`.now-grid` — bordered grid, 1col mobile / 2col desktop.

`.now-label` — Space Mono, 10px, `0.10em`, uppercase, `--orange` — orange eyebrow label pattern (approved decorative exception).
`.now-text` — 14px, `line-height: 1.6`, `--c-text-3`. `strong` resets to `--ink`.

---

### Features List (Argument Evaluator)

**File:** `assets/css/argument-evaluator.css`

`.feature-text` — 14px, `--c-text-3`, `line-height: 1.5`.

---

### Notify Form (Argument Evaluator)

**File:** `assets/css/argument-evaluator.css`

`input` — Focus: `border-color: --orange`.
`button` — `letter-spacing: var(--tracking-normal)`. Hover: `bg: --orange, border: --orange`.

`.notify-confirm` — Space Mono, 11px, `0.06em`, `--green`. Hidden by default, shown after submit.

---

### Skip Link

**File:** `main.css` / `main.js` (injected)

`.skip-link` — `position: absolute`, `top: -100%` (hidden off-screen). Focus: `top: 0`. `--ink` bg, `color: var(--on-ink)`, `12px 20px` padding, 14px, weight 600, `z-index: var(--z-overlay)`.

---

### Project Soon Banner

**File:** `assets/css/index.css`

`.project-soon` — `grid-column: 1 / -1`, `--ink` bg, `color: var(--on-ink)`, `22px 28px` padding.

`.soon-label` — Space Mono, 10px, `var(--tracking-loose)`, uppercase, `var(--on-ink-accent)`.
`.soon-text` — 13px, `--c-faint` (on `--ink` bg).

---

### About Hero

**File:** `assets/css/about.css`

**Mobile:** small circular photo (72×72px, `border-radius: 50%`, `--border`) left, name right, bio spans full width below.
**Desktop:** text columns left, full rectangular photo (no radius, `aspect-ratio: 3/4`, hatch bg at `transparent 12px`) right at 280px width.

---

## 6. Motion

### Keyframe Animations

| Name | Properties | Duration | Easing | Trigger |
|---|---|---|---|---|
| `ticker` | `translateX(0 → -50%)` | 28s | `linear` | Always; pauses on `:hover` |
| `live-pulse` | `opacity: 1→0.35→1`, `scale: 1→0.65→1` | 1.8s | `ease-in-out` | Always (live badge dot) |

### Transitions

| Duration | Properties | Used On |
|---|---|---|
| `0.15s` | `background, color` | Nav links, `.btn-primary`, `.btn-secondary`, project arrow, next arrow |
| `0.15s` | `background, border-color` | `.cta-btn` |
| `0.15s` | `color` | `.back-link`, `.sidebar-link`, `.work-more`, `.next-title` |
| `0.15s` | `background, padding, margin` | `.work-item` hover (bleeding effect) |
| `0.1s ease` | `transform` | Button `:active` press state (`scale(0.97)`) — `.btn-primary`, `.btn-secondary`, `.cta-btn` |
| `0.25s cubic-bezier(0.4,0,0.2,1)` | `transform` | Project card hover sweep (`::before` slides up) |
| `0.4s ease` | `transform` | Project screenshot image scale (1→1.04) |
| `0.5s ease` | `opacity, transform` | Scroll reveal (`.reveal → .visible`) |

**Reveal stagger:** 80ms delay between intersecting elements (via JS `setTimeout`).

### Lucide Icon Stroke Widths

| Context | Width | Set Via |
|---|---|---|
| Global default (all inline icons) | `2.5px` | `lucide.createIcons({ attrs: { 'stroke-width': 2.5 } })` in `main.js` |
| Value card icons (`.value-icon svg`) | `2px` | CSS override — intentional for 28px display icons |

---

## 7. Breakpoints & Layout

### Breakpoint

**Single breakpoint: `min-width: 700px`** (mobile-first convention throughout — including `404.css`).

### Max-Width Container

All page-level containers share `max-width: 1100px; margin: 0 auto`.

### Horizontal Padding

| Breakpoint | Padding |
|---|---|
| Mobile (base) | `24px` |
| Desktop (700px+) | `48px` |

### Grid Layouts

| Component | Mobile | Desktop (700px+) |
|---|---|---|
| `.hero` | 1 column | `1fr auto` |
| `.projects-grid` | 1 column | `repeat(2, 1fr)` |
| `.values-grid` | 1 column | `repeat(3, 1fr)` |
| `.now-grid` | 1 column | `repeat(2, 1fr)` |
| `.detail-grid` | 1 column | `2fr 1fr` (body/sidebar) |
| `.next-project` | 1 column | `1fr 1fr` |
| `.placeholder-strip` | 1 column | `1fr 1fr` |
| `.about-hero` | `auto 1fr` (photo + byline) | `1fr 280px` (content + photo) |
| `.work-item` | `120px 1fr` | Unchanged |

---

## 8. Orange Eyebrow Label Pattern (Approved)

**Rule:** `--orange` (`#e8634a`) is permitted for Space Mono small-caps labels that function as decorative section markers. These are never content text. Orange on cream (#f9f6f0) is 2.8:1 — below WCAG AA for body text — but these elements are visual rhythm indicators, not readable content.

All approved instances:

| Class | Location | Text |
|---|---|---|
| `.hero-eyebrow` | index.html | "↳ Chicago, IL — Data analyst & civic tech builder" |
| `.about-eyebrow` | about.html | "↳ Chicago, IL" |
| `.now-label` | about.html | "Building", "Working on", "Day job", "Thinking about" |
| `.next-eyebrow` | project pages | "Next project", "Previous project", "Back to" |
| `.placeholder-side .coming-label` | project pages | "◇ Early prototype", "⧗ In development" |
| `.project-soon .soon-label` | index.html | "More coming soon" |
| `.cta-text span` | all pages (dark surface) | "Let's talk." — on `--ink` bg, uses `--on-ink-accent` |
| `.ticker-item::after` | index.html (dark surface) | `✦` separator — on `--ink` bg, uses `--on-ink-accent` |

Note: The `--on-ink-accent` token is used for orange on dark `--ink` surfaces, not the eyebrow pattern (which is orange on light `--bg` surfaces). These are two distinct approved uses of `--orange`.

---

## 9. Remaining Gaps

These are minor issues not addressed in the 2026-05-21 decision pass. They remain as open items.

1. **`--c-ddd` is a low-value token** — used in exactly one rule (`.project-screenshot--placeholder span` border). Could be hardcoded inline or replaced with `--c-line` for simplicity.

2. **Spacing tokens not yet applied to existing rules** — the scale is defined; migration happens opportunistically when rules are touched.

3. **No `:active` state on `.next-arrow` or `.project-arrow`** — buttons got active states; these icon-buttons did not. Low priority since they're click targets within larger link elements.

4. **`border-bottom: 2px solid var(--ink)` on `.not-found-back`** — this doesn't use `--border` (because it's a shorthand and only border-bottom is needed). Could become `border-bottom: var(--border-width) solid var(--border-color)` for full token use.

5. **`line-height: 1.2` on `.placeholder-side .coming-title`** — a one-off not mapped to any line-height token. Low priority.

6. **The `×` character in `.project-badge::before`** — a Unicode multiplication sign used as a visual X indicator. Works, but undocumented beyond the style-guide.

---

## 10. Resolved Decisions (2026-05-21)

All 16 open questions from the initial audit have been resolved and implemented.

---

**1. Rename `--c-medium` → `--c-text-2` and `--c-sub` → `--c-text-3`**
✅ Resolved — done. Updated in all 6 CSS files. Naming now reflects semantic hierarchy (text-2 is darker than text-3, matching their actual visual weight).

---

**2. Remove `--c-ghost` and `--c-muted`**
✅ Resolved — removed from `:root`. Neither was referenced anywhere in the codebase.

---

**3. Add on-dark surface tokens**
✅ Resolved — added `--on-ink: var(--bg)`, `--on-ink-secondary: var(--c-dim)`, `--on-ink-accent: var(--orange)` to `:root`. Applied to: nav hover, skip link, cta-strip (text + buttons), cta-btn focus-visible outline, ticker-item, placeholder-side (coming-label, coming-title, coming-desc), project-soon (base + soon-label).

---

**4. Font assignment: Space Grotesk vs. Space Mono — skill pills**
✅ Resolved — Space Grotesk (`--ff`) for all content (prose, headings, nav, buttons, skill pills, mixed-case text). Space Mono (`--fm`) for all metadata (labels, tags, badges, section headers, ticker, footer, eyebrows). Skill pill Grotesk inheritance is intentional — no CSS change needed.

---

**5. Change `.not-found-heading` from `font-weight: 800` to `font-weight: 700`**
✅ Resolved — done. 800 was never loaded in the Google Fonts URL; it silently fell back to 700 anyway. Now explicit.

---

**6. Add `--lh-body` and `--lh-heading` line-height tokens**
✅ Resolved — added to `:root`. `--lh-body: 1.5` applied to `body`. `--lh-heading: 1.05` applied to `.hero-title`, `.project-hero-title`, `.about-name`, `.not-found-heading`. Note: `.hero-title` was `1.08` and `.project-hero-title` was `1.0` — both are now standardized to `1.05`.

---

**7. Add tracking tokens**
✅ Resolved — added `--tracking-tight: -0.03em`, `--tracking-normal: 0.01em`, `--tracking-loose: 0.12em`. Applied:
- `--tracking-tight` → all page-title elements
- `--tracking-normal` → all buttons (btn-primary, btn-secondary, cta-btn, notify button)
- `--tracking-loose` → all orange eyebrow labels

---

**8. Add spacing scale tokens**
✅ Resolved — defined `--space-1` through `--space-16` (4px base, named by multiplier). Available for use; existing rules not bulk-migrated. Apply opportunistically.

---

**9. Add `--border-divider` token**
✅ Resolved — added `--border-divider: 1px solid var(--c-line)`. Applied to `.work-item` (index.css) and `.sidebar-link` (civic-compass.css).

---

**10. Split `--border` into `--border-width` + `--border-color`**
✅ Resolved — done. `:root` now defines `--border-width: 2px`, `--border-color: var(--ink)`, and `--border: var(--border-width) solid var(--border-color)`. All existing `var(--border)` usage is backward compatible.

---

**11. Add `--border-width-pill` token**
✅ Resolved — added `--border-width-pill: 1.5px`. Applied to `.tag` and `.project-badge` border rules.

---

**12. Add `:active` states to buttons**
✅ Resolved — added `transform: scale(0.97); transition: transform 0.1s ease` to `.btn-primary:active`, `.btn-secondary:active`, and `.cta-btn:active`.

---

**13. Add `--z-nav` and `--z-overlay` tokens**
✅ Resolved — added to `:root`. Applied: `nav { z-index: var(--z-nav); }` and `.skip-link { z-index: var(--z-overlay); }`.

---

**14. Convert `404.css` media query to mobile-first**
✅ Resolved — inverted. Base styles now use mobile padding (`64px 24px`); desktop padding (`96px 48px`) is inside `@media (min-width: 700px)`. Behavior is identical; convention is now consistent with all other breakpoints.

---

**15. Standardize hatch pattern to `transparent 12px`**
✅ Resolved — fixed all three instances:
- `main.css` `.placeholder-main` (was `14px`)
- `about.css` `.photo-box` desktop placeholder (was `14px`)
- `index.css` `.project-screenshot--placeholder` (was already `12px`)

---

**16. Formally document the orange eyebrow label pattern**
✅ Resolved — documented in Section 8 above. Rule: "Orange (`--orange`) is permitted for Space Mono small-caps labels functioning as decorative section markers — never for content text." All 8 approved instances listed.
