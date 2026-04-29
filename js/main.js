window.addEventListener('error', e => {
  if (e.message && e.message.includes('ResizeObserver')) e.stopImmediatePropagation();
});

const NAV_HTML = `
  <a href="index.html" class="nav-logo">Chad Weaver<span></span></a>
  <ul class="nav-links">
    <li><a href="index.html#projects" class="nav-link">Projects</a></li>
    <li><a href="index.html#work" class="nav-link">Work</a></li>
    <li><a href="about.html" class="nav-link">About</a></li>
  </ul>
`;

const FOOTER_HTML = `
  <span class="foot-name">Chad Weaver &copy; 2026</span>
  <span class="foot-year">Chicago, IL</span>
`;

document.querySelector('nav').innerHTML = NAV_HTML;
document.querySelector('footer').innerHTML = FOOTER_HTML;

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
