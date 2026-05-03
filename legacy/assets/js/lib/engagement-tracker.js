/**
 * Engagement Tracker
 * Tracks scroll depth and dwell time for analysis posts
 */

let scrollDepthTracked = {
    25: false,
    50: false,
    75: false,
    100: false
};

let pageStartTime = null;
let maxScrollDepth = 0;
let analysisId = null;

/**
 * Initialize engagement tracking
 */
export function initEngagementTracking(id) {
    analysisId = id;
    pageStartTime = Date.now();
    
    // Track scroll depth
    trackScrollDepth();
    
    // Track dwell time on page unload
    window.addEventListener('beforeunload', trackDwellTime);
    window.addEventListener('pagehide', trackDwellTime);
    
    // Also track when user navigates away
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            trackDwellTime();
        }
    });
}

/**
 * Track scroll depth milestones
 */
function trackScrollDepth() {
    const milestones = [25, 50, 75, 100];
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    
    function checkScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollPercent = docHeight > 0 ? Math.round((scrollTop / docHeight) * 100) : 0;
        
        milestones.forEach(milestone => {
            if (scrollPercent >= milestone && !scrollDepthTracked[milestone]) {
                scrollDepthTracked[milestone] = true;
                sendScrollDepth(milestone);
                maxScrollDepth = Math.max(maxScrollDepth, milestone);
            }
        });
    }
    
    // Use IntersectionObserver for better performance
    const sentinel = document.createElement('div');
    sentinel.style.position = 'absolute';
    sentinel.style.height = '1px';
    sentinel.style.width = '1px';
    sentinel.style.top = '0';
    sentinel.style.left = '0';
    sentinel.style.pointerEvents = 'none';
    sentinel.style.opacity = '0';
    document.body.appendChild(sentinel);
    
    // Create markers for each milestone
    milestones.forEach(milestone => {
        const marker = document.createElement('div');
        marker.style.position = 'absolute';
        marker.style.height = '1px';
        marker.style.width = '1px';
        marker.style.top = `${milestone}%`;
        marker.style.left = '0';
        marker.style.pointerEvents = 'none';
        marker.style.opacity = '0';
        marker.setAttribute('data-milestone', milestone);
        document.body.appendChild(marker);
    });
    
    // Track scroll events
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                checkScroll();
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
    
    // Initial check
    checkScroll();
}

/**
 * Send scroll depth data to server
 */
function sendScrollDepth(milestone) {
    if (!analysisId) return;
    
    fetch('/cms/track-engagement.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `action=scroll_depth&id=${encodeURIComponent(analysisId)}&milestone=${milestone}`
    }).catch(err => {
        console.error('Failed to track scroll depth:', err);
    });
}

/**
 * Track dwell time (time spent on page)
 */
function trackDwellTime() {
    if (!analysisId || !pageStartTime) return;
    
    const dwellTime = Math.round((Date.now() - pageStartTime) / 1000); // in seconds
    
    // Only track if user spent at least 3 seconds on page
    if (dwellTime < 3) return;
    
    // Use sendBeacon for reliable tracking on page unload
    const data = new URLSearchParams({
        action: 'dwell_time',
        id: analysisId,
        dwell_time: dwellTime,
        max_scroll_depth: maxScrollDepth
    });
    
    if (navigator.sendBeacon) {
        navigator.sendBeacon('/cms/track-engagement.php', data);
    } else {
        // Fallback to fetch
        fetch('/cms/track-engagement.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: data.toString(),
            keepalive: true
        }).catch(err => {
            console.error('Failed to track dwell time:', err);
        });
    }
    
    // Prevent duplicate tracking
    pageStartTime = null;
}

/**
 * Get current scroll depth percentage
 */
export function getCurrentScrollDepth() {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight <= 0) return 0;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return Math.round((scrollTop / docHeight) * 100);
}

