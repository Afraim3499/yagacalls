<?php
/**
 * Content Scheduling System
 * Handles scheduled publishing of analysis posts
 */

/**
 * Check and publish scheduled posts
 */
function processScheduledPosts() {
    $dataFile = __DIR__ . '/../data/analysis.json';
    
    if (!file_exists($dataFile)) {
        return false;
    }
    
    $jsonContent = @file_get_contents($dataFile);
    if ($jsonContent === false) {
        return false;
    }
    
    $analyses = @json_decode($jsonContent, true);
    if (json_last_error() !== JSON_ERROR_NONE) {
        return false;
    }
    
    $analyses = $analyses ?: [];
    $now = date('Y-m-d H:i:s');
    $updated = false;
    
    foreach ($analyses as &$analysis) {
        // Check if post has scheduled publish date
        if (isset($analysis['scheduledPublish']) && !empty($analysis['scheduledPublish'])) {
            $scheduledTime = strtotime($analysis['scheduledPublish']);
            $currentTime = strtotime($now);
            
            // If scheduled time has passed and post is not published
            if ($scheduledTime <= $currentTime && (!isset($analysis['published']) || $analysis['published'] !== true)) {
                // Mark as published
                $analysis['published'] = true;
                $analysis['date'] = date('Y-m-d', $scheduledTime);
                $analysis['publishedAt'] = date('Y-m-d H:i:s', $scheduledTime);
                unset($analysis['scheduledPublish']);
                $updated = true;
            }
        }
    }
    
    if ($updated) {
        // Save updated data
        $jsonData = @json_encode($analyses, JSON_PRETTY_PRINT);
        if ($jsonData !== false) {
            @file_put_contents($dataFile, $jsonData, LOCK_EX);
            
            // Regenerate pages
            require_once __DIR__ . '/regenerate.php';
            regenerateAnalysisPage();
            regenerateSitemap();
            
            return true;
        }
    }
    
    return false;
}

/**
 * Get scheduled posts
 */
function getScheduledPosts() {
    $dataFile = __DIR__ . '/../data/analysis.json';
    
    if (!file_exists($dataFile)) {
        return [];
    }
    
    $jsonContent = @file_get_contents($dataFile);
    if ($jsonContent === false) {
        return [];
    }
    
    $analyses = @json_decode($jsonContent, true);
    if (json_last_error() !== JSON_ERROR_NONE) {
        return [];
    }
    
    $analyses = $analyses ?: [];
    $scheduled = [];
    
    foreach ($analyses as $analysis) {
        if (isset($analysis['scheduledPublish']) && !empty($analysis['scheduledPublish'])) {
            if (!isset($analysis['published']) || $analysis['published'] !== true) {
                $scheduled[] = $analysis;
            }
        }
    }
    
    // Sort by scheduled time
    usort($scheduled, function($a, $b) {
        return strtotime($a['scheduledPublish']) - strtotime($b['scheduledPublish']);
    });
    
    return $scheduled;
}
