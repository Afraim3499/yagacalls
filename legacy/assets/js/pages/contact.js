import { startTicker } from '../lib/ticker-working.js';

export default function initContact(){
  try { startTicker(); } catch(e) {}

  // Enhance FAQ details for better accessibility (optional)
  const details = document.querySelectorAll('.faq-item');
  details.forEach(d => {
    d.addEventListener('toggle', () => {
      if (d.open) {
        details.forEach(other => { if (other !== d) other.removeAttribute('open'); });
      }
    });
  });
}


