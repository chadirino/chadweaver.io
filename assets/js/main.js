window.addEventListener('error', e => {
  if (e.message && e.message.includes('ResizeObserver')) e.stopImmediatePropagation();
});

const NAV_HTML = `
  <a href="/index.html" class="nav-logo">Chad Weaver<span></span></a>
  <ul class="nav-links">
    <li><a href="/index.html#projects" class="nav-link">Projects</a></li>
    <li><a href="/index.html#work" class="nav-link">Work</a></li>
    <li><a href="/about.html" class="nav-link">About</a></li>
  </ul>
`;

const FOOTER_HTML = `
  <span class="foot-name">Chad Weaver &copy; 2026</span>
  <span class="foot-year">Chicago, IL</span>
`;

const CTA_BANNER_HTML = `
  <div class="cta-text">Want to work together or just say hi? <span>Let's talk.</span></div>
  <div class="cta-links">
    <a href="mailto:chadw913@icloud.com" class="cta-btn">Email</a>
    <a href="https://www.linkedin.com/in/cweaver13/" target="_blank" rel="noopener" class="cta-btn">LinkedIn</a>
    <a href="assets/pdf/chad_weaver_resume.pdf" download class="cta-btn"><svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="6.5" y1="1.5" x2="6.5" y2="8.5"/><polyline points="3.5,5.5 6.5,9 9.5,5.5"/><line x1="1.5" y1="11.5" x2="11.5" y2="11.5"/></svg> Résumé</a>
  </div>
`;

document.querySelector('nav').innerHTML = NAV_HTML;
document.querySelector('footer').innerHTML = FOOTER_HTML;

let ctaBanner = document.querySelector('.cta-strip');
if (null !== ctaBanner) {
  ctaBanner.innerHTML = CTA_BANNER_HTML;
}

const path = window.location.pathname;
const navLinks = document.querySelectorAll('.nav-link');
if (path.endsWith('about.html')) {
  navLinks.forEach(a => { if (a.href.includes('about.html')) a.classList.add('active'); });
} else if (path.endsWith('civic-compass.html') || path.endsWith('argument-evaluator.html')) {
  navLinks.forEach(a => { if (a.href.includes('#projects')) a.classList.add('active'); });
}

const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
revealEls.forEach(el => revealObserver.observe(el));
