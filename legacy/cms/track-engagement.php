<?php
/**
 * Engagement Tracking Endpoint
 * Receives scroll depth and dwell time data from frontend
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

require_once __DIR__ . '/analytics.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit;
}

$action = $_POST['action'] ?? '';
$analysisId = isset($_POST['id']) ? intval($_POST['id']) : null;

if (!$analysisId) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Analysis ID required']);
    exit;
}

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
        'scroll_depth' => [
            25 => 0,
            50 => 0,
            75 => 0,
            100 => 0
        ],
        'dwell_times' => [],
        'avg_dwell' => 0,
        'max_scroll_depths' => []
    ];
}

// Ensure scroll_depth structure exists
if (!isset($analytics[$analysisId]['scroll_depth'])) {
    $analytics[$analysisId]['scroll_depth'] = [
        25 => 0,
        50 => 0,
        75 => 0,
        100 => 0
    ];
}

if (!isset($analytics[$analysisId]['dwell_times'])) {
    $analytics[$analysisId]['dwell_times'] = [];
}

if (!isset($analytics[$analysisId]['max_scroll_depths'])) {
    $analytics[$analysisId]['max_scroll_depths'] = [];
}

// Handle different actions
if ($action === 'scroll_depth') {
    $milestone = isset($_POST['milestone']) ? intval($_POST['milestone']) : null;
    
    if ($milestone && in_array($milestone, [25, 50, 75, 100])) {
        $analytics[$analysisId]['scroll_depth'][$milestone]++;
    }
    
} elseif ($action === 'dwell_time') {
    $dwellTime = isset($_POST['dwell_time']) ? intval($_POST['dwell_time']) : 0;
    $maxScrollDepth = isset($_POST['max_scroll_depth']) ? intval($_POST['max_scroll_depth']) : 0;
    
    if ($dwellTime > 0) {
        $analytics[$analysisId]['dwell_times'][] = $dwellTime;
        
        // Keep only last 1000 dwell times to prevent file bloat
        if (count($analytics[$analysisId]['dwell_times']) > 1000) {
            $analytics[$analysisId]['dwell_times'] = array_slice($analytics[$analysisId]['dwell_times'], -1000);
        }
        
        // Calculate average dwell time
        $dwellTimes = $analytics[$analysisId]['dwell_times'];
        $analytics[$analysisId]['avg_dwell'] = round(array_sum($dwellTimes) / count($dwellTimes), 2);
    }
    
    if ($maxScrollDepth > 0) {
        $analytics[$analysisId]['max_scroll_depths'][] = $maxScrollDepth;
        
        // Keep only last 1000 scroll depths
        if (count($analytics[$analysisId]['max_scroll_depths']) > 1000) {
            $analytics[$analysisId]['max_scroll_depths'] = array_slice($analytics[$analysisId]['max_scroll_depths'], -1000);
        }
    }
}

// Save analytics
$saved = @file_put_contents($analyticsFile, json_encode($analytics, JSON_PRETTY_PRINT), LOCK_EX);

if ($saved !== false) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Failed to save analytics']);
}

