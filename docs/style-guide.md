# Style Guide & Interaction Specs

## Layout & Spacing
- **Max-Width:** 1100px (centered).
- **Desktop Padding:** 48px horizontal.
- **Mobile Padding:** 24px horizontal.
- **Section Spacing:** 64px vertical padding (top/bottom).
- **Borders:** Global `2px solid #131212` (Ink) for cards, nav, and buttons.
- **Radius:** `4px` (Strictly for tags and skill pills only; cards are square).

## Component Blueprints
- **Project Cards:** 2-column grid. Image should use `object-fit: cover` at the top.
- **Work History:** 2-column grid. Left column (Year) is fixed at 120px.
- **Skill Pills:** Flex-wrap list. Space Mono font.
- **Contact Group:** Horizontal bordered group. No gaps; shared borders between buttons.

### Status Pills (`.project-badge`)
Used in project card headers to communicate project state. Rules:
- Font: Space Mono, 9px, uppercase, `letter-spacing: 0.08em`
- Shape: `padding: 4px 8px`, `border-radius: 4px`, `border: 1.5px solid <color>`
- No fill beyond a light tint; text color must match the border color (or a darker shade to pass WCAG AA 4.5:1)
- **Variants:**
  - `EARLY STAGES` — border: `--orange` (`#e8634a`), bg: `--orange-light` (`#fdeae5`), text: `--orange-text` (`#9e3620`)
  - `LIVE` — add class `project-badge--live`; border: `--green` (`#2d7a4f`), bg: `--green-light` (`#e6f4ed`), text: `--green` (`#2d7a4f`)
  - `IN DEVELOPMENT` — use base `.project-badge` style (orange/early-stages family) until a dedicated variant is defined
- **Card header layout:** always group status pill + link arrow together in a `.project-header-right` flex container (`gap: 8px`, `align-items: center`) on the right side of `.project-header`.

### Tag Pills (`.tag`)
Used for topic/category labels on project cards and detail pages. Rules:
- Font: Space Mono, 10px, uppercase, `letter-spacing: 0.06em`
- Shape: `padding: 4px 8px`, `border-radius: 4px`, `border: 1.5px solid --purple`
- Fill: `background: --purple-light` (`#f0edf8`) — light purple tint
- Text: `color: --ink` (`#131212`) — ink provides WCAG AA contrast on the purple-light background (purple `#887ba3` alone fails 4.5:1 at 10px)
- Apply consistently across index.html, civic-compass.html, and argument-evaluator.html

### Final Footer (`.site-footer`)
- Text uses the exact same typography as section header labels (`.section-label`): Space Mono (`--fm`), 10px, `letter-spacing: 0.14em`, `text-transform: uppercase`, `color: --c-medium` (`#555`).
- No top border — the footer sits flush below the contact CTA strip with no divider.

### Contact CTA Strip (`.cta-strip`)
- Dark ink background (`--ink`), full-width, sits above the final footer.
- Canonical link set: **Email, LinkedIn, Résumé** — GitHub is not included.
- Buttons use class `.cta-btn`: `padding: 12px 24px`, `border: 2px solid #444`, no gap between buttons (shared borders), hover fills orange.
- Mobile: stacks vertically (`flex-direction: column`), padding reduces to `32px 24px`.

### Project Card Description Text
- Class: `.project-desc`
- Color: `--c-medium` (`#555`) — single canonical token across all project cards
- Do not apply `opacity` at the card level as it shifts the visible text color inconsistently

## Motion & Interactions
- **Scroll Reveal:** Use `IntersectionObserver`.
  - Animation: `opacity 0 -> 1`, `translateY 20px -> 0`.
  - Stagger: 80ms delay between items in a list/grid.
- **Ticker:**
  - Speed: 28s duration for full loop (`translateX(0 -> -50%)`).
  - Behavior: Pause on hover.
- **Hovers:**
  - **Project Cards:** Purple-light (`#f0edf8`) background sweeps up from bottom.
  - **Work Items:** Orange-light (`#fdeae5`) background; horizontal margin expands -16px.
  - **Nav/Buttons:** Background fill (Ink or Orange) with White text.

## Accessibility — Text Contrast (WCAG AA)

All text must meet WCAG 2.1 AA contrast ratios: **4.5:1** for body/small text, **3:1** for large text (≥18pt regular / ≥14pt bold).

### Safe text colors on the cream background (`--bg: #f9f6f0`)
| Token | Hex | Contrast | Use for |
|---|---|---|---|
| `--ink` | `#131212` | ~45:1 | Primary text, headings |
| `--c-medium` | `#555` | ~6.0:1 | Secondary labels, captions |
| `--c-sub` | `#666` | ~4.8:1 | Descriptions, metadata |

### Color restrictions
- **Orange (`--orange: #e8634a`)** — 2.8:1 on cream. Generally not for body text on light backgrounds. Permitted for decorative elements (borders, underlines, fills, dots) and text on the dark `--ink` background. **Intentional brand exceptions:** the hero eyebrow label and the "Years in data" stat box (num + label on `--orange-light`) use `--orange` as accent — these are decorative indicators, not content text.
- **Purple (`--purple: #887ba3`)** — 3.3:1 on cream. Use for **large bold text** (≥36px 700-weight, passes 3:1 large-text threshold). **Intentional brand exception:** the "Live project" stat box (num + label on `--purple-light`) uses `--purple` for both elements as a matched pair.
- **Muted grays below `#666`** (`#888`, `#999`, `#aaa`, `#bbb`) — all fail on cream. Do not use these variables (`--c-dim`, `--c-muted`, `--c-faint`, `--c-ghost`) for rendered text on any light background.

## Responsive Behavior (Breakpoint: 700px)
- Collapse 2-column grids (Hero, Projects) into 1 column.
- Hero badges stack horizontally.
- Nav: Simplify to core links or implement mobile menu.