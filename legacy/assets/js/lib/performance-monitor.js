/**
 * Performance Monitor
 * Tracks Core Web Vitals (LCP, FID, CLS)
 */

let performanceData = {
    lcp: null,
    fid: null,
    cls: 0,
    fcp: null
};

/**
 * Track Largest Contentful Paint (LCP)
 */
function trackLCP() {
    if (!('PerformanceObserver' in window)) return;
    
    try {
        const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            
            performanceData.lcp = {
                value: Math.round(lastEntry.renderTime || lastEntry.loadTime),
                element: lastEntry.element?.tagName || 'unknown'
            };
            
            sendPerformanceData('lcp', performanceData.lcp.value);
        });
        
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (e) {
        console.error('LCP tracking error:', e);
    }
}

/**
 * Track First Input Delay (FID)
 */
function trackFID() {
    if (!('PerformanceObserver' in window)) return;
    
    try {
        const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach(entry => {
                performanceData.fid = {
                    value: Math.round(entry.processingStart - entry.startTime),
                    type: entry.name
                };
                
                sendPerformanceData('fid', performanceData.fid.value);
            });
        });
        
        observer.observe({ entryTypes: ['first-input'] });
    } catch (e) {
        console.error('FID tracking error:', e);
    }
}

/**
 * Track Cumulative Layout Shift (CLS)
 */
function trackCLS() {
    if (!('PerformanceObserver' in window)) return;
    
    try {
        let clsValue = 0;
        let clsEntries = [];
        
        const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach(entry => {
                if (!entry.hadRecentInput) {
                    clsValue += entry.value;
                    clsEntries.push(entry);
                }
            });
            
            performanceData.cls = Math.round(clsValue * 1000) / 1000;
        });
        
        observer.observe({ entryTypes: ['layout-shift'] });
        
        // Send CLS on page unload
        window.addEventListener('beforeunload', () => {
            if (performanceData.cls > 0) {
                sendPerformanceData('cls', performanceData.cls);
            }
        });
    } catch (e) {
        console.error('CLS tracking error:', e);
    }
}

/**
 * Track First Contentful Paint (FCP)
 */
function trackFCP() {
    if (!('PerformanceObserver' in window)) return;
    
    try {
        const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach(entry => {
                performanceData.fcp = Math.round(entry.renderTime || entry.loadTime);
                sendPerformanceData('fcp', performanceData.fcp);
            });
        });
        
        observer.observe({ entryTypes: ['paint'] });
    } catch (e) {
        console.error('FCP tracking error:', e);
    }
}

/**
 * Send performance data to server
 */
function sendPerformanceData(metric, value) {
    const page = document.body.getAttribute('data-page') || 'unknown';
    
    fetch('/cms/track-performance.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `metric=${metric}&value=${value}&page=${encodeURIComponent(page)}`,
        keepalive: true
    }).catch(err => {
        console.error('Failed to track performance:', err);
    });
}

/**
 * Initialize performance monitoring
 */
export function initPerformanceMonitoring() {
    // Track all Core Web Vitals
    trackLCP();
    trackFID();
    trackCLS();
    trackFCP();
    
    // Also track page load time
    window.addEventListener('load', () => {
        if (window.performance && window.performance.timing) {
            const loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
            sendPerformanceData('page_load', loadTime);
        }
    });
}

/**
 * Get current performance data
 */
export function getPerformanceData() {
    return performanceData;
}

