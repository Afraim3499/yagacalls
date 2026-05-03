import { startTicker } from '../lib/ticker-working.js';

export default function init() {
  // Initialize ticker
  startTicker();

  // Reveal-on-scroll for timeline stages
  const stages = document.querySelectorAll('.stage');
  const io = ('IntersectionObserver' in window) ? new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { 
    rootMargin: '0px 0px -10% 0px',
    threshold: 0.1
  }) : null;

  stages.forEach(stage => {
    if (io) {
      io.observe(stage);
    } else {
      // Fallback for browsers without IntersectionObserver
      stage.classList.add('in');
    }
  });

  // Fallback: Force show stages after a delay if they remain hidden
  requestAnimationFrame(() => {
    stages.forEach(stage => {
      if (!stage.classList.contains('in')) {
        stage.classList.add('in');
      }
    });
  });

  // Add hover effects to data flow visualization
  const flowStages = document.querySelectorAll('.flow-stage');
  flowStages.forEach((stage, index) => {
    stage.addEventListener('mouseenter', () => {
      // Add glow effect to current and previous stages
      for (let i = 0; i <= index; i++) {
        flowStages[i].querySelector('.stage-icon').style.transform = 'scale(1.1)';
        flowStages[i].querySelector('.stage-icon').style.boxShadow = '0 0 25px rgba(0, 255, 200, 0.5)';
      }
    });

    stage.addEventListener('mouseleave', () => {
      // Remove glow effect from all stages
      flowStages.forEach(flowStage => {
        const icon = flowStage.querySelector('.stage-icon');
        icon.style.transform = 'scale(1)';
        icon.style.boxShadow = '';
      });
    });
  });

  // Add click handlers for case study entries (mobile-friendly)
  const caseEntries = document.querySelectorAll('.case-entry');
  caseEntries.forEach(entry => {
    entry.addEventListener('click', () => {
      // Toggle expanded state for mobile
      entry.classList.toggle('expanded');
    });
  });

  console.log('Method page initialized');
}