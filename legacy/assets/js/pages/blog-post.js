import { startTicker } from '../lib/ticker-working.js';

export default function initBlogPost(){
  try { startTicker(); } catch(e) {}
  // Copy link button support (if present)
  var copy = document.getElementById('copy-link');
  if (copy) {
    copy.addEventListener('click', () => {
      try { navigator.clipboard.writeText(location.href); copy.textContent = 'Copied!'; setTimeout(()=>copy.textContent='Copy link',1500);} catch(e) {}
    });
  }
}


