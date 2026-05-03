import { startTicker } from '../lib/ticker-working.js';

export default function initBlog(){
  try { startTicker(); } catch(e) {}

  const filterButtons = document.querySelectorAll('.blog-filters .pill');
  const cards = document.querySelectorAll('.blog-post-card');

  function applyFilter(cat){
    cards.forEach(card => {
      const c = card.getAttribute('data-cat');
      const show = (cat === 'all') || (c === cat);
      card.style.display = show ? '' : 'none';
    });
  }

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      applyFilter(btn.getAttribute('data-filter'));
      location.hash = btn.getAttribute('data-filter');
    });
  });

  // Initialize from hash
  const initial = (location.hash || '#all').slice(1);
  const btn = document.querySelector(`.blog-filters .pill[data-filter="${initial}"]`);
  if (btn) { btn.click(); } else { applyFilter('all'); }

  // Progressive enhancement for load more (no network; could reveal hidden items later)
  const loadMore = document.getElementById('load-more');
  if (loadMore) {
    loadMore.addEventListener('click', () => {
      // Placeholder: keep simple for now
      loadMore.disabled = true;
      loadMore.textContent = 'All posts loaded';
    });
  }
}


