<?php
/**
 * Engagement Metrics Tracking System
 * Tracks and analyzes user engagement with analysis posts
 */

/**
 * Track analysis view
 */
function trackAnalysisView($analysisId) {
    $analyticsFile = __DIR__ . '/../data/analytics.json';
    $dataDir = dirname($analyticsFile);
    
    // Create data directory if needed
    if (!file_exists($dataDir)) {
        @mkdir($dataDir, 0755, true);
    }
    
    // Load existing analytics
    $analytics = [];
    if (file_exists($analyticsFile)) {
        $jsonContent = @file_get_contents($analyticsFile);
        if ($jsonContent !== false) {
            $analytics = @json_decode($jsonContent, true) ?: [];
        }
    }
    
    // Initialize analysis tracking if needed
    if (!isset($analytics[$analysisId])) {
        $analytics[$analysisId] = [
            'views' => 0,
            'clicks' => 0,
            'time_spent' => 0,
            'scroll_depth' => [
                25 => 0,
                50 => 0,
                75 => 0,
                100 => 0
            ],
            'dwell_times' => [],
            'avg_dwell' => 0,
            'max_scroll_depths' => [],
            'last_viewed' => null
        ];
    }
    
    // Update metrics
    $analytics[$analysisId]['views']++;
    $analytics[$analysisId]['last_viewed'] = date('Y-m-d H:i:s');
    
    // Save analytics
    @file_put_contents($analyticsFile, json_encode($analytics, JSON_PRETTY_PRINT), LOCK_EX);
}

/**
 * Track link click
 */
function trackLinkClick($analysisId) {
    $analyticsFile = __DIR__ . '/../data/analytics.json';
    
    if (!file_exists($analyticsFile)) {
        return;
    }
    
    $jsonContent = @file_get_contents($analyticsFile);
    if ($jsonContent === false) {
        return;
    }
    
    $analytics = @json_decode($jsonContent, true) ?: [];
    
    if (!isset($analytics[$analysisId])) {
        $analytics[$analysisId] = [
            'views' => 0,
            'clicks' => 0,
            'time_spent' => 0
        ];
    }
    
    $analytics[$analysisId]['clicks']++;
    
    @file_put_contents($analyticsFile, json_encode($analytics, JSON_PRETTY_PRINT), LOCK_EX);
}

/**
 * Get analytics summary
 */
function getAnalyticsSummary() {
    $analyticsFile = __DIR__ . '/../data/analytics.json';
    
    if (!file_exists($analyticsFile)) {
        return [
            'total_views' => 0,
            'total_clicks' => 0,
            'avg_ctr' => 0,
            'top_posts' => []
        ];
    }
    
    $jsonContent = @file_get_contents($analyticsFile);
    if ($jsonContent === false) {
        return [];
    }
    
    $analytics = @json_decode($jsonContent, true) ?: [];
    
    $totalViews = 0;
    $totalClicks = 0;
    $topPosts = [];
    
    foreach ($analytics as $id => $data) {
        $views = $data['views'] ?? 0;
        $clicks = $data['clicks'] ?? 0;
        $scrollDepth = $data['scroll_depth'] ?? ['25' => 0, '50' => 0, '75' => 0, '100' => 0];
        $avgDwell = $data['avg_dwell'] ?? 0;
        
        $totalViews += $views;
        $totalClicks += $clicks;
        
        $ctr = $views > 0 ? ($clicks / $views) * 100 : 0;
        
        // Calculate scroll depth completion rates
        $scroll25 = $scrollDepth[25] ?? 0;
        $scroll50 = $scrollDepth[50] ?? 0;
        $scroll75 = $scrollDepth[75] ?? 0;
        $scroll100 = $scrollDepth[100] ?? 0;
        
        $topPosts[] = [
            'id' => $id,
            'views' => $views,
            'clicks' => $clicks,
            'ctr' => round($ctr, 2),
            'scroll_depth' => [
                25 => $scroll25,
                50 => $scroll50,
                75 => $scroll75,
                100 => $scroll100
            ],
            'avg_dwell' => $avgDwell
        ];
    }
    
    // Sort by views
    usort($topPosts, function($a, $b) {
        return $b['views'] - $a['views'];
    });
    
    $avgCTR = $totalViews > 0 ? ($totalClicks / $totalViews) * 100 : 0;
    
    return [
        'total_views' => $totalViews,
        'total_clicks' => $totalClicks,
        'avg_ctr' => round($avgCTR, 2),
        'top_posts' => array_slice($topPosts, 0, 10)
    ];
}

/**
 * Get analytics for specific analysis
 */
function getAnalysisAnalytics($analysisId) {
    $analyticsFile = __DIR__ . '/../data/analytics.json';
    
    if (!file_exists($analyticsFile)) {
        return null;
    }
    
    $jsonContent = @file_get_contents($analyticsFile);
    if ($jsonContent === false) {
        return null;
    }
    
    $analytics = @json_decode($jsonContent, true) ?: [];
    
    return $analytics[$analysisId] ?? null;
}

