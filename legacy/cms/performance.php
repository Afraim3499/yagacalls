<?php
/**
 * Page Speed Optimization Tools
 * Provides tools for optimizing page performance
 */

/**
 * Generate optimized CSS (minify and inline critical CSS)
 */
function optimizeCSS($cssContent) {
    // Remove comments
    $cssContent = preg_replace('!/\*[^*]*\*+([^/][^*]*\*+)*/!', '', $cssContent);
    
    // Remove whitespace
    $cssContent = preg_replace('/\s+/', ' ', $cssContent);
    $cssContent = str_replace(['; ', ' {', '{ ', ' }', '} ', ': ', ' ,', ', ', ' >', '> '], [';', '{', '{', '}', '}', ':', ',', ',', '>', '>'], $cssContent);
    $cssContent = trim($cssContent);
    
    return $cssContent;
}

/**
 * Generate resource hints for performance
 */
function generateResourceHints($pageType = 'analysis') {
    $hints = [];
    
    // Preconnect to external domains
    $hints[] = '<link rel="preconnect" href="https://t.me" crossorigin>';
    $hints[] = '<link rel="preconnect" href="https://x.com" crossorigin>';
    
    // DNS prefetch for external resources
    $hints[] = '<link rel="dns-prefetch" href="https://t.me">';
    $hints[] = '<link rel="dns-prefetch" href="https://x.com">';
    
    // Preload critical CSS
    $hints[] = '<link rel="preload" href="/assets/css/base.css" as="style">';
    $hints[] = '<link rel="preload" href="/assets/css/layout.css" as="style">';
    
    // Preload critical fonts if any
    // $hints[] = '<link rel="preload" href="/assets/fonts/font.woff2" as="font" type="font/woff2" crossorigin>';
    
    return implode("\n  ", $hints);
}

/**
 * Generate lazy loading attributes for images
 */
function addLazyLoading($html) {
    // Add loading="lazy" to images that don't have it
    $html = preg_replace('/<img(?![^>]*loading=)([^>]*)>/i', '<img$1 loading="lazy">', $html);
    
    return $html;
}

/**
 * Optimize images (suggestions for manual optimization)
 */
function getImageOptimizationSuggestions() {
    return [
        'format' => 'Use WebP or AVIF format for better compression',
        'sizing' => 'Serve appropriately sized images (use srcset for responsive images)',
        'compression' => 'Compress images to 80-85% quality for web',
        'dimensions' => 'Specify width and height attributes to prevent layout shift',
        'lazy_load' => 'Use loading="lazy" for below-the-fold images'
    ];
}

/**
 * Generate performance report
 */
function generatePerformanceReport() {
    $report = [
        'css_optimization' => [
            'status' => 'check',
            'suggestions' => [
                'Minify CSS files',
                'Inline critical CSS',
                'Defer non-critical CSS',
                'Remove unused CSS'
            ]
        ],
        'js_optimization' => [
            'status' => 'check',
            'suggestions' => [
                'Minify JavaScript files',
                'Defer non-critical scripts',
                'Use async for independent scripts',
                'Code split by page'
            ]
        ],
        'image_optimization' => [
            'status' => 'check',
            'suggestions' => getImageOptimizationSuggestions()
        ],
        'caching' => [
            'status' => 'check',
            'suggestions' => [
                'Enable browser caching via .htaccess',
                'Set cache headers for static assets',
                'Use CDN for assets if possible'
            ]
        ],
        'resource_hints' => [
            'status' => 'implemented',
            'suggestions' => [
                'Preconnect to external domains',
                'DNS prefetch for third-party resources',
                'Preload critical resources'
            ]
        ]
    ];
    
    return $report;
}

