# Handoff: chadweaver.io Portfolio

## Overview
A personal portfolio website for Chad Weaver — data analyst and civic tech builder based in Chicago, IL. The site showcases projects, work history, skills, and contact info across 4 pages, with a consistent minimal-but-playful design system.

## About the Design Files
The HTML files in this bundle are **high-fidelity design references** created as prototypes. They are self-contained (all CSS is inlined, images are base64-embedded) and represent the intended final look and behavior. The task is to **recreate these designs in your target codebase** (e.g. React, Next.js, etc.) using its established patterns and libraries — do not ship the HTML files directly.

## Fidelity
**High-fidelity** — pixel-perfect mockups with final colors, typography, spacing, and interactions. Recreate the UI as closely as possible using your codebase's existing libraries and patterns.

---

## Design Tokens

### Colors
```
--bg:           #f9f6f0   (warm cream background)
--ink:          #131212   (near-black for text + borders)
--purple:       #887ba3   (muted purple — tags, accents, highlights)
--purple-light: #f0edf8   (light purple tint — card hovers, badges)
--orange:       #e8634a   (salmon/orange — primary accent, CTAs, hover states)
--orange-light: #fdeae5   (light orange tint — hover backgrounds)
```

### Typography
```
Font families:
  --ff: 'Space Grotesk', sans-serif   (body, headings, UI)
  --fm: 'Space Mono', monospace       (labels, eyebrows, meta text)

Scale (approximate):
  Hero title:     clamp(36px, 5vw, 60–72px), weight 700, letter-spacing -0.03em
  Section h2:     22px, weight 700, letter-spacing -0.02em
  Body:           15–17px, weight 400, line-height 1.65–1.75
  Nav links:      14px, weight 500, letter-spacing 0.02em
  Labels/eyebrow: 10–11px, Space Mono, uppercase, letter-spacing 0.10–0.14em
  Tags:           10px, Space Mono, uppercase, letter-spacing 0.06em
  Footer:         12px, Space Mono, letter-spacing 0.04em
```

### Borders
```
--border: 2px solid #131212   (used everywhere — nav, cards, buttons, grid lines)
--radius: 4px                 (used on tags and skill pills only)
```

### Spacing
- Page max-width: 1100px, centered
- Horizontal padding: 48px (desktop), 24px (mobile)
- Section vertical padding: 64px top/bottom
- Nav height: 52px

---

## Pages & Screens

### 1. `index.html` — Home
**Purpose:** Landing page. Hero intro, projects, work history, skills, contact.

**Nav (sticky, 52px tall):**
- Left: "Chad Weaver" logo text + small orange dot, border-right
- Right: links — Projects, Work, About, Contact — each with border-left
- Hover: fill ink background, white text
- Active: fill orange background, white text

**Hero (grid: 1fr auto, gap 48px):**
- Left: eyebrow label (Space Mono, orange), H1 title with purple+underline word, bio paragraph, 3 CTA buttons (See projects / About me / ↓ Résumé)
- Right: 2 stat badge boxes stacked (purple-light + orange-light backgrounds), bold number + label
- Scroll-reveal animation on load

**Ticker strip (full width, ink background):**
- Scrolling marquee of skill keywords in Space Mono, white text, orange ✦ separators
- Pauses on hover

**Projects section:**
- 2-column grid with 2px ink borders forming a grid
- Each card: project name, arrow button (→), screenshot image (object-fit: cover, top), description, tags
- Card hover: purple-light background sweeps up from bottom (translateY animation)
- Arrow hover: orange fill
- Civic Compass: links to civic-compass.html + live site
- Argument Evaluator: "Early stages" badge, dimmed (opacity 0.75), not clickable
- Full-width bottom bar (ink bg): "More coming soon" text

**Latest Work History section:**
- Label: "Latest Work History"
- 3 items only: McDonald's (2022–now), divvyDOSE (2021–2022), Stericycle (2020–2021)
- Grid: 120px year column + content column
- Hover: orange-light background, margin expands to -16px sides
- Below list: "FULL WORK HISTORY ON LINKEDIN →" in Space Mono, small caps, links to LinkedIn

**Skills & Tools section:**
- Flex-wrap pill list
- Highlighted pills (purple-light bg, purple border): SQL, Python, Tableau, Google BigQuery, Civic tech, Prompt engineering
- Regular pills: Looker/LookML, Alteryx, ETL/data pipelines, Data storytelling, Business intelligence, Spreadsheets, Data analysis, Data visualization
- Hover all: ink bg, white text

**Contact section:**
- Horizontal bordered button group (no gaps, border between each)
- Links: Email (envelope icon), LinkedIn (LinkedIn icon), GitHub (GitHub icon), Instagram (Instagram icon)
- Hover: orange fill, white text

**Footer:**
- Left: "CHAD WEAVER © 2026" — Space Mono, 12px, #aaa
- Right: "Chicago, IL" — same style
- Border-top: 2px solid ink

---

### 2. `about.html` — About
**Purpose:** Personal bio, values, current work, CTA.

**Hero (grid: 1fr 280px):**
- Left: eyebrow (Chicago, IL), large name "Chad / Weaver." (purple), 3-paragraph bio
- Right: portrait photo (3:4 aspect ratio, object-fit cover, 2px border)

**"What I care about" section:**
- 3-column bordered grid
- Each card: small bordered icon box (purple-light bg), title, description
- Values: Systems thinking, Empathy in design, Epistemic clarity

**"Right now" section:**
- 2×2 bordered grid
- 4 items: Building (Civic Compass), Working on (Argument Evaluator), Day job (McDonald's), Thinking about (collective reasoning)
- Each: orange label in Space Mono, description text

**CTA strip (ink background, full width):**
- Left: large text "Want to work together or just say hi? Let's talk." (orange highlight)
- Right: 3 bordered buttons — Email, LinkedIn, ↓ Résumé

---

### 3. `civic-compass.html` — Project Detail
**Purpose:** Full detail page for Civic Compass project.

**Project hero:**
- Back link (← All projects), tags + "● Live" status badge
- Large title "Civic / Compass." (purple)
- Tagline text
- Link buttons: "Visit live site ↗" (ink fill), "GitHub →"
- Screenshot strip (2-col): left = app screenshot, right = purple-light panel with 3 stats (Live / In dev / Apr 2026)

**Detail section (2fr 1fr grid):**
- Left: long-form copy — What it does, Why I built it, How it's built (h2 + paragraphs)
- Right sidebar: 3 cards — Tech stack (React, Vercel, JavaScript), Category tags, Links (live site + GitHub)

**Next project bar (2-col):**
- Left: → Argument Evaluator
- Right: ↑ All projects

---

### 4. `argument-evaluator.html` — Project Detail (WIP)
**Purpose:** Coming-soon project page with planned features.

**Project hero:**
- "In progress" orange badge
- Large title "Argument / Evaluator." (purple)
- Placeholder strip: left = hatched pattern placeholder, right = ink panel "Coming soon"

**Detail section:**
- Left: What it does, Why I built it, 4 planned features (numbered list in bordered cards)
- Right sidebar: Planned stack, Category tags, "Get notified" email form

---

## Interactions & Behavior

- **Scroll reveal:** All major sections fade in + slide up (opacity 0→1, translateY 20px→0) on IntersectionObserver. Staggered 80ms delay between items.
- **Nav active state:** Highlights current section link in orange as user scrolls.
- **Project card hover:** Purple-light background sweeps up via CSS transform translateY(100%→0). Arrow button turns orange.
- **Work item hover:** Orange-light background, margin expands horizontally to -16px with padding compensation.
- **Skill pill hover:** Ink background, white text.
- **Contact link hover:** Orange background, white text.
- **Ticker:** CSS animation `translateX(0 → -50%)` over 28s, pauses on hover.
- **Notify form** (argument-evaluator.html): Client-side only — shows "✓ You're on the list!" on submit.

## Responsive Behavior (≤700px)
- Hero: single column, badges go horizontal row
- Projects: single column grid
- Work items: no layout changes needed (grid already handles narrow)
- Contact: flex-wrap
- Nav: only last link shown (hamburger not implemented — can add)

---

## Assets
- **Headshot photo**: Chad's headshot — base64-embedded in about.html. Extract or re-supply as `/assets/headshot.jpg`
- **Civic Compass screenshot**: base64-embedded in index.html and civic-compass.html. Extract or re-supply as `/assets/civic-compass-screenshot.png`
- **Résumé**: Not yet supplied. Wire `href="Chad_Weaver_Resume.pdf"` download button when available.

## External Links
- Live site: https://civic-compass-rose.vercel.app
- LinkedIn: https://www.linkedin.com/in/cweaver13/
- GitHub: https://github.com/chadirino
- Instagram: https://www.instagram.com/chadirino/
- Email: chadw913@icloud.com

## Files in This Bundle
- `index.html` — Home page
- `about.html` — About page (includes base64 headshot)
- `civic-compass.html` — Civic Compass project detail (includes base64 screenshot)
- `argument-evaluator.html` — Argument Evaluator project detail (WIP)
- `README.md` — This file
