# Site conventions

## CSS
- There is an `assets/css/` directory where all css files will go.
- Styles that should be applied to all pages go in `main.css`.
- Styles that are page-specific go in a css file named after the html file of that page.
- Never use inline `style=""` attributes for anything reusable.
- Page-specific styles get scoped class names in their stylesheet.
- Use CSS custom properties (variables) for colors, fonts, spacing.
- Mobile-first: write base styles for small screens, use min-width media queries to scale up.
- Consistent naming convention for classes.

## JavaScript  
- There is an `assets/js/` directory where all JS files will go.
- All shared JS goes in `main.js`, loaded with `defer`.
- Page-specific JS goes in a `.js` file named after the html file it will belong to.
- Never add inline `<script>` blocks to individual pages.
- Use `addEventListener`, never `onclick=""` attributes.
- No magic strings or numbers — put repeated values in named constants at the top of the file.
- Keep functions small and single-purpose.
- No `var`, always `const`/`let`.

## HTML
- Every page uses the same `<head>` boilerplate — only `<title>` changes.
- Semantic elements over divs (<nav>, <main>, <article>, <section>, <footer>).
- Every image needs alt text.
- Site should be generally ADA-compliant.
- One `<h1>` per page, heading hierarchy never skips levels (h1 → h2 → h3, not h1 → h3).
- Images should have explicit width and height attributes to prevent layout shift.

## Nav/Footer Deduplication
- Since there's no build step, shared nav and footer HTML is injected via JS from a single string in `main.js`, so changing it in one place updates every page.

## Style guide
- Before making any CSS or visual changes, read the style guide, `docs/style-guide.md`, and follow it. It is the source of truth for colors, typography, and spacing. Don't invent values not in it without asking.
- The style guide should be kept up-to-date with any approved style updates.

## Project Pages
- Project HTML files live in the `projects/` subdirectory (e.g. `projects/civic-compass.html`).
- Root-relative paths (starting with `/`) are preferred for nav and cross-page links to avoid depth issues.
- CSS and JS in project pages use `../assets/css/` and `../assets/js/` prefixes.

## Other Files
- PDFs go in `assets/pdf/`.
- If other files are needed like images or fonts, they will go in an appropriately named directory like `assets/images/` or `assets/fonts/`.
- All file names will be lower-case with no spaces, only underscores.

## Misc
- Don't introduce npm, a bundler, or a framework without asking first.
- Don't restructure existing folders without asking first.
- Don't add new dependencies (libraries, CDN scripts) without asking first.
- If a task seems underspecified (e.g. "make it look better"), ask what specifically needs to change.
- If the right solution requires adding a new file type or pattern not already in the project, ask first.