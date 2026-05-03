<?php
/**
 * A/B Testing Tracking Endpoint
 * Tracks A/B test assignments and conversions
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit;
}

$testId = $_POST['test_id'] ?? '';
$variant = $_POST['variant'] ?? '';
$action = $_POST['action'] ?? 'conversion';
$conversionType = $_POST['conversion_type'] ?? 'click';

if (!$testId || !$variant) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Test ID and variant required']);
    exit;
}

$abTestsFile = __DIR__ . '/../data/ab-tests.json';
$dataDir = dirname($abTestsFile);

// Create data directory if needed
if (!file_exists($dataDir)) {
    @mkdir($dataDir, 0755, true);
}

// Load existing A/B tests
$abTests = [];
if (file_exists($abTestsFile)) {
    $jsonContent = @file_get_contents($abTestsFile);
    if ($jsonContent !== false) {
        $abTests = @json_decode($jsonContent, true) ?: [];
    }
}

// Initialize test if needed
if (!isset($abTests[$testId])) {
    $abTests[$testId] = [
        'variants' => [],
        'assignments' => [],
        'conversions' => []
    ];
}

// Track assignment
if ($action === 'assignment') {
    if (!isset($abTests[$testId]['assignments'][$variant])) {
        $abTests[$testId]['assignments'][$variant] = 0;
    }
    $abTests[$testId]['assignments'][$variant]++;
}

// Track conversion
if ($action === 'conversion' || !isset($_POST['action'])) {
    if (!isset($abTests[$testId]['conversions'][$variant])) {
        $abTests[$testId]['conversions'][$variant] = [];
    }
    
    if (!isset($abTests[$testId]['conversions'][$variant][$conversionType])) {
        $abTests[$testId]['conversions'][$variant][$conversionType] = 0;
    }
    
    $abTests[$testId]['conversions'][$variant][$conversionType]++;
}

// Save A/B tests
$saved = @file_put_contents($abTestsFile, json_encode($abTests, JSON_PRETTY_PRINT), LOCK_EX);

if ($saved !== false) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Failed to save A/B test data']);
}

