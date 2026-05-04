const SCROLL_OFFSET = 100;

const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - SCROLL_OFFSET) current = s.id; });
  navLinks.forEach(a => {
    const href = a.getAttribute('href');
    const hash = href.includes('#') ? href.split('#')[1] : null;
    a.classList.toggle('active', hash === current);
  });
});
