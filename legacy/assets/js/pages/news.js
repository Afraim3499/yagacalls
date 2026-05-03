import { startTicker } from '../lib/ticker-working.js';
import { initEngagementTracking } from '../lib/engagement-tracker.js';

/**
 * Format date for display
 */
function formatDate(dateString) {
  try {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
    const diffMinutes = Math.floor(diffTime / (1000 * 60));
    
    if (diffMinutes < 60) {
      return diffMinutes <= 1 ? 'Just now' : `${diffMinutes}m ago`;
    } else if (diffHours < 24) {
      return `${diffHours}h ago`;
    } else if (diffDays === 0) {
      return 'Today';
    } else if (diffDays === 1) {
      return 'Yesterday';
    } else if (diffDays < 7) {
      return `${diffDays}d ago`;
    } else {
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined });
    }
  } catch (e) {
    return dateString;
  }
}

/**
 * Truncate text to specified length
 */
function truncateText(text, maxLength = 150) {
  if (!text || text.length <= maxLength) {
    return text || '';
  }
  return text.substring(0, maxLength).trim() + '...';
}

/**
 * Sanitize HTML to prevent XSS
 */
function sanitizeHtml(str) {
  if (!str) return '';
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

/**
 * Escape HTML attributes
 */
function escapeHtml(str) {
  if (!str) return '';
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function renderNewsCard(article) {
  const dateFormatted = formatDate(article.date);
  // Use enhanced description if available, otherwise use original
  const description = truncateText(article.enhancedDescription || article.description || '', 150);
  const uniqueSummary = article.uniqueSummary || '';
  const title = sanitizeHtml(article.title || 'Untitled');
  const sourceName = sanitizeHtml(article.sourceName || article.source || 'News');
  const imageUrl = article.image ? escapeHtml(article.image) : '';
  const articleUrl = escapeHtml(article.url || '#');
  const articleDate = escapeHtml(article.date || '');
  
  // Get related analyses if available
  const relatedAnalyses = article.relatedAnalyses || [];
  
  const imageHtml = imageUrl ? `<img src="${imageUrl}" alt="${title}" loading="lazy" onerror="this.style.display='none'">` : '';
  
  // Build related analyses HTML
  let relatedHtml = '';
  if (relatedAnalyses.length > 0) {
    relatedHtml = '<div class="related-analyses" style="margin-top: 16px; padding-top: 16px; border-top: 1px solid var(--color-line);">';
    relatedHtml += '<p style="font-size: 12px; color: var(--color-text-muted); margin-bottom: 8px; font-weight: 600;">Related Analysis:</p>';
    relatedHtml += '<ul style="list-style: none; padding: 0; margin: 0;">';
    
    relatedAnalyses.slice(0, 3).forEach(analysis => {
      const hook = sanitizeHtml(analysis.hook || 'View Analysis');
      const coin = sanitizeHtml(analysis.coin || '');
      const date = analysis.date ? new Date(analysis.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : '';
      const anchor = coin.toLowerCase().replace(/\s+/g, '-');
      
      relatedHtml += `<li style="margin-bottom: 6px;">`;
      relatedHtml += `<a href="/analysis#${anchor}" style="color: var(--color-primary); text-decoration: none; font-size: 13px;">${hook}`;
      if (date) {
        relatedHtml += ` <span style="color: var(--color-text-muted);">(${date})</span>`;
      }
      relatedHtml += `</a></li>`;
    });
    
    relatedHtml += '</ul></div>';
  }
  
  // Add unique summary if available
  let summaryHtml = '';
  if (uniqueSummary) {
    summaryHtml = `<div style="background: rgba(227,158,46,0.1); border-left: 3px solid var(--color-primary); padding: 12px; margin: 12px 0; border-radius: 4px; font-size: 13px; color: var(--color-text);">${sanitizeHtml(uniqueSummary)}</div>`;
  }
  
  return `
    <article class="analysis-card" itemscope itemtype="https://schema.org/NewsArticle">
      <h3 class="analysis-hook" itemprop="headline">${title}</h3>
      <div class="analysis-card-header">
        <span class="coin-tag">${sourceName}</span>
        <time class="analysis-date" datetime="${articleDate}" itemprop="datePublished">${dateFormatted}</time>
      </div>
      <div class="analysis-content" itemprop="articleBody">
        ${imageHtml}
        ${summaryHtml}
        <p>${description}</p>
        ${relatedHtml}
      </div>
      <div class="analysis-card-footer">
        <a href="${articleUrl}" target="_blank" rel="noopener noreferrer" class="analysis-link" itemprop="url">
          Read Full Article →
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
          </svg>
        </a>
      </div>
    </article>
  `;
}

/**
 * Load and display news articles
 */
async function loadNews() {
  const loadingEl = document.getElementById('news-loading');
  const emptyEl = document.getElementById('news-empty');
  const gridEl = document.getElementById('news-grid');
  
  try {
    const response = await fetch('/cms/news-api.php');
    if (!response.ok) {
      throw new Error('Failed to fetch news');
    }
    
    const data = await response.json();
    const articles = data.data || [];
    
    // Hide loading
    if (loadingEl) {
      loadingEl.style.display = 'none';
    }
    
    if (articles.length === 0) {
      // Show empty state
      if (emptyEl) {
        emptyEl.style.display = 'block';
      }
      if (gridEl) {
        gridEl.style.display = 'none';
      }
    } else {
      // Hide empty state
      if (emptyEl) {
        emptyEl.style.display = 'none';
      }
      
      // Render articles
      if (gridEl) {
        gridEl.innerHTML = articles.map(article => renderNewsCard(article)).join('');
        gridEl.style.display = 'grid';
        
        // Track engagement for news page
        initEngagementTracking('news-page');
      }
    }
  } catch (error) {
    console.error('Error loading news:', error);
    
    // Hide loading
    if (loadingEl) {
      loadingEl.style.display = 'none';
    }
    
    // Show empty state with error message
    if (emptyEl) {
      emptyEl.innerHTML = '<h3>Unable to Load News</h3><p>Please try again later.</p>';
      emptyEl.style.display = 'block';
    }
    
    if (gridEl) {
      gridEl.style.display = 'none';
    }
  }
}

export default function initNews() {
  try {
    startTicker();
  } catch (e) {
    console.warn('Ticker initialization failed:', e);
  }
  
  // Load news articles
  loadNews();
  
  // Optional: Auto-refresh every 5 minutes
  // setInterval(loadNews, 5 * 60 * 1000);
}

