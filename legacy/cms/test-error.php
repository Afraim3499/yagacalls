<?php
// Enable full error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);
ini_set('log_errors', 1);

echo "Testing error reporting...\n";

// Test session
session_start();
echo "Session started\n";

// Test includes
echo "Testing includes...\n";
try {
    require_once __DIR__ . '/ml-enhance.php';
    echo "ml-enhance.php loaded\n";
    
    require_once __DIR__ . '/ai-draft.php';
    echo "ai-draft.php loaded\n";
    
    require_once __DIR__ . '/repurpose.php';
    echo "repurpose.php loaded\n";
    
    require_once __DIR__ . '/scheduler.php';
    echo "scheduler.php loaded\n";
    
    require_once __DIR__ . '/topical-clusters.php';
    echo "topical-clusters.php loaded\n";
    
    require_once __DIR__ . '/analytics.php';
    echo "analytics.php loaded\n";
    
    require_once __DIR__ . '/performance.php';
    echo "performance.php loaded\n";
    
    echo "All includes successful!\n";
} catch (Exception $e) {
    echo "Exception: " . $e->getMessage() . "\n";
    echo "File: " . $e->getFile() . "\n";
    echo "Line: " . $e->getLine() . "\n";
} catch (Error $e) {
    echo "Fatal Error: " . $e->getMessage() . "\n";
    echo "File: " . $e->getFile() . "\n";
    echo "Line: " . $e->getLine() . "\n";
}

// Test data file
$dataFile = __DIR__ . '/../data/analysis.json';
echo "Data file path: $dataFile\n";
echo "Data file exists: " . (file_exists($dataFile) ? 'yes' : 'no') . "\n";

if (file_exists($dataFile)) {
    $jsonContent = @file_get_contents($dataFile);
    if ($jsonContent !== false) {
        $analyses = @json_decode($jsonContent, true);
        if (json_last_error() === JSON_ERROR_NONE) {
            echo "JSON loaded successfully. Count: " . count($analyses) . "\n";
        } else {
            echo "JSON error: " . json_last_error_msg() . "\n";
        }
    } else {
        echo "Could not read data file\n";
    }
}

echo "Test complete!\n";
?>

