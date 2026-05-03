<?php
/**
 * AJAX endpoint for AI draft generation
 */
session_start();

$CMS_PASSWORD = 'yaga_calls_2025';
$CMS_USERNAME = 'admin';

if (!isset($_SESSION['cms_logged_in']) || $_SESSION['cms_logged_in'] !== true) {
    header('Content-Type: application/json');
    echo json_encode(['success' => false, 'error' => 'Not authenticated']);
    exit;
}

require_once __DIR__ . '/ai-draft.php';

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $coin = trim($_POST['coin'] ?? '');
    $type = trim($_POST['type'] ?? 'price_analysis');
    
    if (empty($coin)) {
        echo json_encode(['success' => false, 'error' => 'Coin symbol required']);
        exit;
    }
    
    try {
        // Generate draft
        $marketData = []; // Can be enhanced with real market data API
        $draft = generateAIDraft($coin, $type, $marketData);
        
        if (empty($draft)) {
            echo json_encode(['success' => false, 'error' => 'Failed to generate draft']);
            exit;
        }
        
        echo json_encode(['success' => true, 'draft' => $draft]);
    } catch (Exception $e) {
        echo json_encode(['success' => false, 'error' => 'Error generating draft: ' . $e->getMessage()]);
    } catch (Error $e) {
        echo json_encode(['success' => false, 'error' => 'Fatal error: ' . $e->getMessage()]);
    }
} else {
    echo json_encode(['success' => false, 'error' => 'Invalid request']);
}

