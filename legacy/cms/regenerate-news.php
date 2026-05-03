<?php
/**
 * Regenerate News Page - Updates sitemap with news page
 * Note: news.html is dynamically loaded via JavaScript, so we only update sitemap
 */

/**
 * Update sitemap to include news page
 */
function regenerateNewsSitemap() {
    $sitemapFile = __DIR__ . '/../sitemap.xml';
    
    // Read existing sitemap
    if (!file_exists($sitemapFile)) {
        error_log('CMS Error: Sitemap file not found: ' . $sitemapFile);
        return false;
    }
    
    $sitemapContent = @file_get_contents($sitemapFile);
    if ($sitemapContent === false) {
        error_log('CMS Error: Failed to read sitemap file: ' . $sitemapFile);
        return false;
    }
    
    // Check if news URL already exists in sitemap
    if (strpos($sitemapContent, 'https://yagacalls.com/news') !== false) {
        // Already exists, no need to update
        return true;
    }
    
    // Add news URL before closing urlset tag
    $newsUrl = '  <url><loc>https://yagacalls.com/news</loc></url>' . "\n";
    
    // Insert before </urlset>
    $sitemapContent = str_replace('</urlset>', $newsUrl . '</urlset>', $sitemapContent);
    
    // Verify sitemap directory is writable
    $sitemapDir = dirname($sitemapFile);
    if (!is_writable($sitemapDir)) {
        error_log('CMS Error: Sitemap directory is not writable: ' . $sitemapDir);
        return false;
    }
    
    // Write updated sitemap
    $written = @file_put_contents($sitemapFile, $sitemapContent, LOCK_EX);
    if ($written === false) {
        error_log('CMS Error: Failed to write sitemap.xml file: ' . $sitemapFile);
        return false;
    }
    
    return true;
}

// If called directly, regenerate
if (php_sapi_name() === 'cli' || !isset($_SERVER['REQUEST_METHOD'])) {
    regenerateNewsSitemap();
}

