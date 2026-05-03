<?php
/**
 * Performance Tracking Endpoint
 * Receives Core Web Vitals data from frontend
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

$metric = $_POST['metric'] ?? '';
$value = isset($_POST['value']) ? floatval($_POST['value']) : null;
$page = $_POST['page'] ?? 'unknown';

if (!$metric || $value === null) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Metric and value required']);
    exit;
}

$performanceFile = __DIR__ . '/../data/performance.json';
$dataDir = dirname($performanceFile);

// Create data directory if needed
if (!file_exists($dataDir)) {
    @mkdir($dataDir, 0755, true);
}

// Load existing performance data
$performance = [];
if (file_exists($performanceFile)) {
    $jsonContent = @file_get_contents($performanceFile);
    if ($jsonContent !== false) {
        $performance = @json_decode($jsonContent, true) ?: [];
    }
}

// Initialize page tracking if needed
if (!isset($performance[$page])) {
    $performance[$page] = [
        'lcp' => [],
        'fid' => [],
        'cls' => [],
        'fcp' => [],
        'page_load' => []
    ];
}

// Store metric value (keep last 1000 entries per metric)
if (isset($performance[$page][$metric])) {
    $performance[$page][$metric][] = [
        'value' => $value,
        'timestamp' => date('Y-m-d H:i:s')
    ];
    
    // Keep only last 1000 entries
    if (count($performance[$page][$metric]) > 1000) {
        $performance[$page][$metric] = array_slice($performance[$page][$metric], -1000);
    }
} else {
    $performance[$page][$metric] = [
        [
            'value' => $value,
            'timestamp' => date('Y-m-d H:i:s')
        ]
    ];
}

// Calculate averages
$averages = [];
foreach ($performance[$page] as $metricName => $values) {
    if (!empty($values) && is_array($values)) {
        $numericValues = array_column($values, 'value');
        $averages[$metricName] = [
            'avg' => round(array_sum($numericValues) / count($numericValues), 2),
            'min' => round(min($numericValues), 2),
            'max' => round(max($numericValues), 2),
            'count' => count($numericValues)
        ];
    }
}

$performance[$page]['_averages'] = $averages;

// Save performance data
$saved = @file_put_contents($performanceFile, json_encode($performance, JSON_PRETTY_PRINT), LOCK_EX);

if ($saved !== false) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Failed to save performance data']);
}

