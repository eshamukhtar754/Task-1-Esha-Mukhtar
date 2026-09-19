const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
const courseSearch = document.getElementById('courseSearch');
const courseCards = [...document.querySelectorAll('.course-card')];
const emptyState = document.getElementById('emptyState');

menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
  });
});

courseSearch.addEventListener('input', event => {
  const query = event.target.value.trim().toLowerCase();
  let visible = 0;
  courseCards.forEach(card => {
    const matches = card.dataset.title.toLowerCase().includes(query);
    card.hidden = !matches;
    if (matches) visible++;
  });
  emptyState.hidden = visible !== 0;
});

document.getElementById('year').textContent = new Date().getFullYear();
