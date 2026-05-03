import { startTicker } from '../lib/ticker-working.js';

export default function init(){
  startTicker();
  // reveal-on-scroll
  const els = document.querySelectorAll('.reveal');
  const io = ('IntersectionObserver' in window) ? new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { rootMargin: '0px 0px -10% 0px' }) : null;
  els.forEach(el => { if(io) io.observe(el); else el.classList.add('in'); });
  // Fallback: if elements remain hidden (rare), force-show after a frame
  requestAnimationFrame(()=>{ els.forEach(el => el.classList.add('in')); });

  // rotate quotes (lightweight)
  const qs = (s,el)=> (el||document).querySelector(s);
  const quotes = document.querySelectorAll('.quotes .q');
  let i = 0;
  if(quotes.length){
    quotes[0].classList.add('active');
    setInterval(()=>{
      quotes[i].classList.remove('active');
      i = (i+1)%quotes.length;
      quotes[i].classList.add('active');
    }, 5000);
  }

  // Gem Discovery Spotlight - track mouse movement
  const gemSpotlight = document.querySelector('.gem-spotlight');
  if(gemSpotlight){
    gemSpotlight.addEventListener('mousemove', (e)=>{
      const rect = gemSpotlight.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      gemSpotlight.style.setProperty('--mouse-x', x + '%');
      gemSpotlight.style.setProperty('--mouse-y', y + '%');
    });
  }

  // Sequential flip cards functionality
  const flipCards = document.querySelectorAll('.gem-item.flip-card');
  
  if (flipCards.length > 0) {
    flipCards.forEach((card, index) => {
      card.addEventListener('mouseenter', () => {
        // Flip all cards from 0 to current index (inclusive)
        for (let i = 0; i <= index; i++) {
          const cardInner = flipCards[i].querySelector('.flip-card-inner');
          const cardBack = flipCards[i].querySelector('.flip-card-back');
          
          if (cardInner && cardBack) {
            cardInner.classList.add('flipped');
            cardBack.classList.add('neon-glow');
            flipCards[i].classList.add('progress-glow');
          }
        }
      });
      
      card.addEventListener('mouseleave', () => {
        // Remove flip from all cards
        flipCards.forEach((flipCard, i) => {
          const cardInner = flipCard.querySelector('.flip-card-inner');
          const cardBack = flipCard.querySelector('.flip-card-back');
          
          if (cardInner && cardBack) {
            cardInner.classList.remove('flipped');
            cardBack.classList.remove('neon-glow');
            flipCards[i].classList.remove('progress-glow');
          }
        });
      });
    });
  }
}


