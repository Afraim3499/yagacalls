import { startTicker } from '../lib/ticker-working.js';

export default function init() {
  // Initialize ticker
  startTicker();

  // ROI Calculator Logic
  const portfolioSlider = document.getElementById('portfolio-size');
  const positionSlider = document.getElementById('position-size');

  function calculateROI() {
    const portfolio = parseFloat(portfolioSlider.value);
    const positionPercent = parseFloat(positionSlider.value);
    
    // Position size in dollars
    const positionSize = (portfolio * positionPercent) / 100;
    
    // Monthly signal performance (updated with user's specifications)
    const shortTermSignals = 11; // 10-13 per month, using 11 as average
    const shortTermReturn = 0.50; // 50% average (40-60% range)
    const longTermSignals = 8; // 7-10 per month, using 8 as average
    const longTermReturn = 1.00; // 100% average (80-120% range)
    
    // Calculate gains
    const shortTermGain = shortTermSignals * positionSize * shortTermReturn;
    const longTermGain = longTermSignals * positionSize * longTermReturn;
    const totalMonthlyGain = shortTermGain + longTermGain;
    
    // Subscription recovery time
    const quarterlyPlan = 200;
    const recoveryDays = Math.round((quarterlyPlan / totalMonthlyGain) * 30);
    const monthlyROI = ((totalMonthlyGain / quarterlyPlan) * 100).toFixed(0);
    
    // Update display
    document.getElementById('portfolio-display').textContent = `$${portfolio.toLocaleString()}`;
    document.getElementById('position-display').textContent = positionPercent === 0 ? 'Not specified' : `${positionPercent}%`;
    document.getElementById('monthly-gain').textContent = `$${Math.round(totalMonthlyGain).toLocaleString()}`;
    document.getElementById('recovery-time').textContent = `${recoveryDays} days`;
    document.getElementById('roi-percentage').textContent = `${monthlyROI}%`;
    
    // Update breakdown table
    document.getElementById('calc-portfolio').textContent = `$${portfolio.toLocaleString()}`;
    document.getElementById('calc-position-short').textContent = positionPercent === 0 ? 'Not specified' : `${positionPercent}% ($${Math.round(positionSize)})`;
    document.getElementById('calc-position-long').textContent = positionPercent === 0 ? 'Not specified' : `${positionPercent * 2}% ($${Math.round(positionSize * 2)})`;
    document.getElementById('calc-total').textContent = `$${Math.round(totalMonthlyGain).toLocaleString()}`;
  }

  if (portfolioSlider && positionSlider) {
    portfolioSlider.addEventListener('input', calculateROI);
    positionSlider.addEventListener('input', calculateROI);
    
    // Initialize on load
    calculateROI();
  }

  // FAQ Accordion functionality
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    
    if (question && answer) {
      // Initially hide answers
      answer.style.display = 'none';
      
      question.addEventListener('click', () => {
        const isOpen = answer.style.display === 'block';
        
        // Close all other FAQ items
        faqItems.forEach(otherItem => {
          const otherAnswer = otherItem.querySelector('.faq-answer');
          if (otherAnswer) {
            otherAnswer.style.display = 'none';
            otherItem.classList.remove('active');
          }
        });
        
        // Toggle current item
        if (!isOpen) {
          answer.style.display = 'block';
          item.classList.add('active');
        }
      });
    }
  });

  // Add hover effects to pricing cards
  const pricingCards = document.querySelectorAll('.pricing-card');
  pricingCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
      if (card.classList.contains('featured')) {
        card.style.transform = 'scale(1.05)';
      } else {
        card.style.transform = 'translateY(0) scale(1)';
      }
    });
  });

  // Animate numbers on scroll (for community stats)
  const stats = document.querySelectorAll('.stat-number');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const finalNumber = target.textContent;
        const isPercentage = finalNumber.includes('%');
        const isRating = finalNumber.includes('/');
        const numericValue = parseFloat(finalNumber.replace(/[^\d.]/g, ''));
        
        if (!isNaN(numericValue)) {
          animateNumber(target, 0, numericValue, 2000, isPercentage, isRating);
          observer.unobserve(target);
        }
      }
    });
  }, { threshold: 0.5 });

  stats.forEach(stat => observer.observe(stat));

  function animateNumber(element, start, end, duration, isPercentage, isRating) {
    const startTime = performance.now();
    
    function updateNumber(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = start + (end - start) * easeOutQuart;
      
      let displayValue;
      if (isPercentage) {
        displayValue = `${Math.round(currentValue)}%`;
      } else if (isRating) {
        displayValue = `${currentValue.toFixed(1)}/5`;
      } else if (currentValue >= 1000) {
        displayValue = `${Math.round(currentValue).toLocaleString()}+`;
      } else {
        displayValue = Math.round(currentValue).toString();
      }
      
      element.textContent = displayValue;
      
      if (progress < 1) {
        requestAnimationFrame(updateNumber);
      }
    }
    
    requestAnimationFrame(updateNumber);
  }

  console.log('Pricing page initialized with ROI calculator');
}