<?php
/**
 * News Cron Job Handler
 * 
 * This file can be called via cron to automatically:
 * - Fetch news every hour
 * - Cleanup old news daily
 * 
 * Setup cron jobs:
 * 
 * Hourly fetch (every hour at minute 0):
 * 0 * * * * /usr/bin/php /path/to/your/site/cms/news-cron.php fetch
 * 
 * Daily cleanup (every day at 2 AM):
 * 0 2 * * * /usr/bin/php /path/to/your/site/cms/news-cron.php cleanup
 * 
 * Or combine both (fetch hourly, cleanup daily):
 * 0 * * * * /usr/bin/php /path/to/your/site/cms/news-cron.php fetch
 * 0 2 * * * /usr/bin/php /path/to/your/site/cms/news-cron.php cleanup
 */

// Only allow CLI execution or specific secret key for web access
$secretKey = 'yaga_calls_2025';
$isCli = php_sapi_name() === 'cli';
$isWebWithKey = isset($_GET['key']) && $_GET['key'] === $secretKey;

if (!$isCli && !$isWebWithKey) {
    http_response_code(403);
    die('Access denied. This script can only be run via CLI or with a valid secret key.');
}

// Get action from command line or GET parameter
$action = $isCli ? ($argv[1] ?? 'fetch') : ($_GET['action'] ?? 'fetch');

require_once __DIR__ . '/news-fetcher.php';
require_once __DIR__ . '/news-cleanup.php';

// Log file for cron execution
$logFile = __DIR__ . '/../data/news-cron.log';

function logCron($message) {
    global $logFile;
    $timestamp = date('Y-m-d H:i:s');
    $logMessage = "[$timestamp] $message\n";
    @file_put_contents($logFile, $logMessage, FILE_APPEND);
}

if ($action === 'fetch') {
    logCron('Starting news fetch...');
    $result = fetchNews(false);
    if ($result['success']) {
        logCron('News fetch completed: ' . $result['message']);
        if ($isCli) {
            echo "News fetch completed: " . $result['message'] . "\n";
        } else {
            header('Content-Type: application/json');
            echo json_encode($result);
        }
    } else {
        logCron('News fetch failed: ' . ($result['error'] ?? 'Unknown error'));
        if ($isCli) {
            echo "News fetch failed: " . ($result['error'] ?? 'Unknown error') . "\n";
            exit(1);
        } else {
            http_response_code(500);
            header('Content-Type: application/json');
            echo json_encode($result);
        }
    }
} elseif ($action === 'cleanup') {
    logCron('Starting news cleanup...');
    $result = cleanupOldNews();
    if ($result['success']) {
        logCron('News cleanup completed: ' . $result['message']);
        if ($isCli) {
            echo "News cleanup completed: " . $result['message'] . "\n";
        } else {
            header('Content-Type: application/json');
            echo json_encode($result);
        }
    } else {
        logCron('News cleanup failed: ' . ($result['error'] ?? 'Unknown error'));
        if ($isCli) {
            echo "News cleanup failed: " . ($result['error'] ?? 'Unknown error') . "\n";
            exit(1);
        } else {
            http_response_code(500);
            header('Content-Type: application/json');
            echo json_encode($result);
        }
    }
} else {
    $error = "Invalid action. Use 'fetch' or 'cleanup'.";
    logCron($error);
    if ($isCli) {
        echo $error . "\n";
        exit(1);
    } else {
        http_response_code(400);
        header('Content-Type: application/json');
        echo json_encode(['success' => false, 'error' => $error]);
    }
}

