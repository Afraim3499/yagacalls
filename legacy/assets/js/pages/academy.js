import { startTicker } from '../lib/ticker-working.js';

export default function initAcademy(){
  try { startTicker(); } catch(e) {}

  const pills = document.querySelectorAll('.academy-filters .pill');
  const cards = document.querySelectorAll('.academy-card');
  const search = document.getElementById('academy-search');

  function apply(){
    const active = document.querySelector('.academy-filters .pill.active')?.getAttribute('data-filter') || 'all';
    const q = (search?.value || '').toLowerCase();
    cards.forEach(card => {
      const cat = card.getAttribute('data-cat');
      const kw = (card.getAttribute('data-keywords')||'').toLowerCase();
      const byCat = active === 'all' || cat === active || (active==='tips' && cat==='advice');
      const byText = !q || kw.includes(q) || card.textContent.toLowerCase().includes(q);
      card.style.display = (byCat && byText) ? '' : 'none';
    });
  }

  pills.forEach(p => p.addEventListener('click', ()=>{ pills.forEach(x=>x.classList.remove('active')); p.classList.add('active'); apply(); }));
  if (search) search.addEventListener('input', ()=>{ clearTimeout(search._t); search._t = setTimeout(apply, 150); });

  document.querySelectorAll('.academy-card .toggle').forEach(t => {
    t.addEventListener('click', ()=>{
      const card = t.closest('.academy-card');
      const open = card.classList.toggle('open');
      t.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });

  apply();

  const openAll = document.getElementById('open-all');
  if (openAll) {
    openAll.addEventListener('click', () => {
      const anyClosed = Array.from(document.querySelectorAll('.academy-card')).some(c => !c.classList.contains('open'));
      document.querySelectorAll('.academy-card .toggle').forEach(t => {
        const card = t.closest('.academy-card');
        if (anyClosed) {
          card.classList.add('open');
          t.setAttribute('aria-expanded','true');
        } else {
          card.classList.remove('open');
          t.setAttribute('aria-expanded','false');
        }
      });
      openAll.textContent = anyClosed ? 'Close All Modules' : 'Open All Modules';
      openAll.setAttribute('aria-pressed', anyClosed ? 'true' : 'false');
    });
  }
}


