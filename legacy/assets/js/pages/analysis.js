import { startTicker } from '../lib/ticker-working.js';
import { initEngagementTracking } from '../lib/engagement-tracker.js';
import { initPerformanceMonitoring } from '../lib/performance-monitor.js';

export default function initAnalysis(){
  try { startTicker(); } catch(e) {}
  
  // Initialize performance monitoring
  try { initPerformanceMonitoring(); } catch(e) {}
  
  // Initialize engagement tracking for each analysis card
  const analysisCards = document.querySelectorAll('.analysis-card[data-analysis-id]');
  analysisCards.forEach(card => {
    const analysisId = card.getAttribute('data-analysis-id');
    if (analysisId) {
      // Track engagement for this specific card when it comes into view
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            initEngagementTracking(analysisId);
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });
      
      observer.observe(card);
    }
  });
  
  // Also track overall page engagement if on analysis page
  if (document.body.getAttribute('data-page') === 'analysis') {
    // Track page-level engagement (for the analysis listing page itself)
    const pageId = 'analysis-page';
    initEngagementTracking(pageId);
  }
}

