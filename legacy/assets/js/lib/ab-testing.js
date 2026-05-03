/**
 * A/B Testing Framework
 * Lightweight A/B testing system for headlines, CTAs, and layouts
 */

const AB_TEST_COOKIE_PREFIX = 'ab_test_';
const AB_TEST_DURATION = 30 * 24 * 60 * 60 * 1000; // 30 days in milliseconds

/**
 * Get or create variant assignment for a test
 */
export function getVariant(testId, variants) {
    if (!testId || !variants || variants.length === 0) {
        return null;
    }
    
    const cookieName = AB_TEST_COOKIE_PREFIX + testId;
    const existing = getCookie(cookieName);
    
    if (existing && variants.includes(existing)) {
        return existing;
    }
    
    // Assign random variant
    const variant = variants[Math.floor(Math.random() * variants.length)];
    setCookie(cookieName, variant, AB_TEST_DURATION);
    
    // Track assignment
    trackABTestAssignment(testId, variant);
    
    return variant;
}

/**
 * Track conversion for A/B test
 */
export function trackConversion(testId, variant, conversionType = 'click') {
    if (!testId || !variant) return;
    
    fetch('/cms/track-ab-test.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `test_id=${encodeURIComponent(testId)}&variant=${encodeURIComponent(variant)}&conversion_type=${encodeURIComponent(conversionType)}`,
        keepalive: true
    }).catch(err => {
        console.error('Failed to track A/B test conversion:', err);
    });
}

/**
 * Track A/B test assignment
 */
function trackABTestAssignment(testId, variant) {
    fetch('/cms/track-ab-test.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `action=assignment&test_id=${encodeURIComponent(testId)}&variant=${encodeURIComponent(variant)}`,
        keepalive: true
    }).catch(err => {
        console.error('Failed to track A/B test assignment:', err);
    });
}

/**
 * Apply A/B test variant to element
 */
export function applyVariant(element, testId, variants) {
    const variant = getVariant(testId, variants);
    
    if (!variant || !element) return null;
    
    // Apply variant class
    element.classList.add(`ab-variant-${variant}`);
    element.setAttribute('data-ab-variant', variant);
    element.setAttribute('data-ab-test', testId);
    
    return variant;
}

/**
 * Test headline variations
 */
export function testHeadline(element, testId, variants) {
    const variant = getVariant(testId, Object.keys(variants));
    
    if (!variant || !element) return null;
    
    const headline = variants[variant];
    if (headline) {
        element.textContent = headline;
        element.setAttribute('data-ab-variant', variant);
        element.setAttribute('data-ab-test', testId);
    }
    
    return variant;
}

/**
 * Test CTA button variations
 */
export function testCTA(button, testId, variants) {
    const variant = getVariant(testId, Object.keys(variants));
    
    if (!variant || !button) return null;
    
    const cta = variants[variant];
    if (cta) {
        if (cta.text) button.textContent = cta.text;
        if (cta.className) button.className = cta.className;
        if (cta.style) Object.assign(button.style, cta.style);
        
        button.setAttribute('data-ab-variant', variant);
        button.setAttribute('data-ab-test', testId);
        
        // Track conversion on click
        button.addEventListener('click', () => {
            trackConversion(testId, variant, 'cta_click');
        });
    }
    
    return variant;
}

/**
 * Cookie helpers
 */
function setCookie(name, value, duration) {
    const expires = new Date(Date.now() + duration).toUTCString();
    document.cookie = `${name}=${value}; expires=${expires}; path=/; SameSite=Lax`;
}

function getCookie(name) {
    const nameEQ = name + '=';
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

/**
 * Initialize A/B tests from data attributes
 */
export function initABTests() {
    // Find all elements with data-ab-test attribute
    const testElements = document.querySelectorAll('[data-ab-test]');
    
    testElements.forEach(element => {
        const testId = element.getAttribute('data-ab-test');
        const variants = element.getAttribute('data-ab-variants');
        
        if (!testId || !variants) return;
        
        try {
            const variantList = JSON.parse(variants);
            applyVariant(element, testId, variantList);
        } catch (e) {
            console.error('Invalid A/B test variants:', e);
        }
    });
}

