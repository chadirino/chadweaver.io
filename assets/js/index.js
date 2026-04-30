const SCROLL_OFFSET = 100;

const sections = document.querySelectorAll('section[id]');

if (typeof navLinks === 'undefined') {
  const navLinks = document.querySelectorAll('.nav-link');
}

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - SCROLL_OFFSET) current = s.id; });
  navLinks.forEach(a => {
    const href = a.getAttribute('href');
    const hash = href.includes('#') ? href.split('#')[1] : null;
    a.classList.toggle('active', hash === current);
  });
});
