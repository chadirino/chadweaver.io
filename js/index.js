const SCROLL_OFFSET = 100;

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - SCROLL_OFFSET) current = s.id; });
  navLinks.forEach(a => {
    const href = a.getAttribute('href');
    const hash = href.includes('#') ? href.split('#')[1] : null;
    a.classList.toggle('active', hash === current);
  });
});

document.querySelectorAll('.project-card').forEach(card => {
  const link = card.querySelector('.project-arrow');
  if (!link) return;
  card.addEventListener('click', e => {
    if (!e.target.closest('a')) window.location = link.href;
  });
});
