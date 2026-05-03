<?php
/**
 * News Cleanup - Removes articles older than 48 hours
 * Articles are kept for at least 48 hours before being removed
 */

$dataFile = __DIR__ . '/../data/news.json';

/**
 * Clean up old news articles
 */
function cleanupOldNews() {
    global $dataFile;
    
    // Check if data file exists
    if (!file_exists($dataFile)) {
        return [
            'success' => false,
            'error' => 'News data file not found'
        ];
    }
    
    // Read existing news
    $jsonContent = @file_get_contents($dataFile);
    if ($jsonContent === false) {
        return [
            'success' => false,
            'error' => 'Failed to read news data file'
        ];
    }
    
    $news = @json_decode($jsonContent, true);
    if (json_last_error() !== JSON_ERROR_NONE) {
        return [
            'success' => false,
            'error' => 'Invalid JSON in news data file: ' . json_last_error_msg()
        ];
    }
    
    if (!is_array($news)) {
        $news = [];
    }
    
    // Current time
    $currentTime = time();
    // Keep articles for at least 48 hours (2 days)
    // Only remove articles that are OLDER than 48 hours
    $cutoffTime = $currentTime - (2 * 24 * 60 * 60); // 48 hours in seconds
    
    // Filter out articles older than 48 hours
    $originalCount = count($news);
    $filteredNews = array_filter($news, function($article) use ($cutoffTime) {
        if (!isset($article['date'])) {
            return false; // Remove articles without date
        }
        
        // Parse date
        $articleTime = strtotime($article['date']);
        if ($articleTime === false) {
            return false; // Remove articles with invalid date
        }
        
        // Keep articles that are less than 48 hours old (articleTime is more recent than cutoff)
        // This ensures articles stay for AT LEAST 48 hours
        return $articleTime >= $cutoffTime;
    });
    
    // Re-index array
    $filteredNews = array_values($filteredNews);
    $removedCount = $originalCount - count($filteredNews);
    
    // Save cleaned news
    $jsonData = json_encode($filteredNews, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
    if ($jsonData === false) {
        return [
            'success' => false,
            'error' => 'Failed to encode news data'
        ];
    }
    
    if (@file_put_contents($dataFile, $jsonData) === false) {
        return [
            'success' => false,
            'error' => 'Failed to save cleaned news data'
        ];
    }
    
    return [
        'success' => true,
        'message' => "Removed $removedCount article(s) older than 48 hours",
        'removed' => $removedCount,
        'remaining' => count($filteredNews)
    ];
}

// Handle API call (only allow from CMS or cron)
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['cleanup'])) {
    // Check if called from CMS (session check) or cron
    session_start();
    $isCms = isset($_SESSION['cms_logged_in']) && $_SESSION['cms_logged_in'] === true;
    $isCron = php_sapi_name() === 'cli' || (isset($_GET['cron_key']) && $_GET['cron_key'] === 'yaga_calls_2025');
    
    if (!$isCms && !$isCron) {
        http_response_code(403);
        header('Content-Type: application/json');
        echo json_encode(['success' => false, 'error' => 'Access denied']);
        exit;
    }
    
    header('Content-Type: application/json');
    echo json_encode(cleanupOldNews());
    exit;
}

// If called directly, return JSON
if (php_sapi_name() === 'cli' || !isset($_SERVER['REQUEST_METHOD'])) {
    echo json_encode(cleanupOldNews());
}

