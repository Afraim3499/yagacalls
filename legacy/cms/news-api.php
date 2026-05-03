<?php
/**
 * News API Endpoint - Returns filtered news JSON for frontend consumption
 * Filters out articles older than 48 hours (articles stay visible for at least 48 hours)
 * Enhances articles with SEO improvements and internal links
 */

require_once __DIR__ . '/news-seo-enhancer.php';

header('Content-Type: application/json');
// Restrict CORS to your domain only for production
$allowedOrigin = isset($_SERVER['HTTP_ORIGIN']) && strpos($_SERVER['HTTP_ORIGIN'], 'yagacalls.com') !== false 
    ? $_SERVER['HTTP_ORIGIN'] 
    : 'https://yagacalls.com';
header('Access-Control-Allow-Origin: ' . $allowedOrigin);
header('Access-Control-Allow-Methods: GET');
header('X-Content-Type-Options: nosniff');

$dataFile = __DIR__ . '/../data/news.json';
$analysesFile = __DIR__ . '/../data/analysis.json';

// Check if data file exists
if (!file_exists($dataFile)) {
    echo json_encode(['data' => []]);
    exit;
}

// Read news data
$jsonContent = @file_get_contents($dataFile);
if ($jsonContent === false) {
    echo json_encode(['data' => []]);
    exit;
}

$news = @json_decode($jsonContent, true);
if (json_last_error() !== JSON_ERROR_NONE || !is_array($news)) {
    echo json_encode(['data' => []]);
    exit;
}

// Filter out articles older than 48 hours (keep articles that are at least 48 hours old)
$currentTime = time();
$cutoffTime = $currentTime - (2 * 24 * 60 * 60); // 48 hours in seconds

$filteredNews = array_filter($news, function($article) use ($cutoffTime) {
    if (!isset($article['date'])) {
        return false;
    }
    
    $articleTime = strtotime($article['date']);
    if ($articleTime === false) {
        return false;
    }
    
    // Keep articles that are less than 48 hours old (articleTime is more recent than cutoff)
    return $articleTime >= $cutoffTime;
});

// Re-index and return
$filteredNews = array_values($filteredNews);

// Sort by date (newest first)
usort($filteredNews, function($a, $b) {
    $timeA = isset($a['date']) ? strtotime($a['date']) : 0;
    $timeB = isset($b['date']) ? strtotime($b['date']) : 0;
    return $timeB - $timeA; // Descending order
});

// Load analyses for internal linking
$allAnalyses = [];
if (file_exists($analysesFile)) {
    $analysesContent = @file_get_contents($analysesFile);
    if ($analysesContent !== false) {
        $decoded = @json_decode($analysesContent, true);
        if (json_last_error() === JSON_ERROR_NONE && is_array($decoded)) {
            $allAnalyses = $decoded;
        }
    }
}

// Enhance articles with SEO improvements
$enhancedNews = [];
foreach ($filteredNews as $article) {
    $enhancedNews[] = enhanceNewsArticle($article, $allAnalyses);
}

echo json_encode([
    'data' => $enhancedNews,
    'count' => count($enhancedNews)
], JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);

