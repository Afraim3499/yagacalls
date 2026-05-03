<?php
/**
 * Content Repurposing View
 * Shows repurposed content for different platforms
 */
session_start();

$CMS_PASSWORD = 'yaga_calls_2025';
$CMS_USERNAME = 'admin';

if (!isset($_SESSION['cms_logged_in']) || $_SESSION['cms_logged_in'] !== true) {
    die('Access denied. Please login to CMS first.');
}

require_once __DIR__ . '/repurpose.php';

$dataFile = __DIR__ . '/../data/analysis.json';
$analysisId = isset($_GET['id']) ? intval($_GET['id']) : null;

if (!$analysisId) {
    die('Analysis ID required');
}

$jsonContent = @file_get_contents($dataFile);
if ($jsonContent === false) {
    die('Could not load analysis data');
}

$analyses = @json_decode($jsonContent, true);
if (json_last_error() !== JSON_ERROR_NONE) {
    die('Invalid analysis data format');
}

$analyses = $analyses ?: [];
$analysis = null;

foreach ($analyses as $a) {
    if (isset($a['id']) && $a['id'] === $analysisId) {
        $analysis = $a;
        break;
    }
}

if (!$analysis) {
    die('Analysis not found');
}

try {
    $repurposed = repurposeAllFormats($analysis);
} catch (Exception $e) {
    die('Error repurposing content: ' . $e->getMessage());
} catch (Error $e) {
    die('Fatal error: ' . $e->getMessage());
}

?>
<!DOCTYPE html>
<html>
<head>
    <title>Repurpose Content | CMS</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; background: #0A0B0D; color: #EAF2FF; }
        .format { background: #151A21; padding: 20px; margin-bottom: 20px; border-radius: 8px; border: 1px solid #1E242C; }
        .format h3 { color: #E39E2E; margin-top: 0; }
        textarea { width: 100%; min-height: 150px; padding: 12px; background: #0F1217; border: 1px solid #1E242C; border-radius: 8px; color: #EAF2FF; font-family: monospace; font-size: 12px; }
        .copy-btn { background: #E39E2E; color: #001014; padding: 8px 16px; border: none; border-radius: 6px; cursor: pointer; margin-top: 8px; }
        .copy-btn:hover { background: #C19770; }
        a { color: #E39E2E; text-decoration: none; }
        a:hover { text-decoration: underline; }
    </style>
</head>
<body>
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; flex-wrap: wrap; gap: 12px;">
        <h1>Repurpose Content: <?php echo htmlspecialchars($analysis['hook']); ?></h1>
        <div style="display: flex; gap: 8px;">
            <a href="dashboard.php" style="background: #E39E2E; color: #001014; padding: 8px 16px; border-radius: 6px; text-decoration: none; font-weight: 600;">🚀 Dashboard</a>
            <a href="admin.php" style="color: #E39E2E; text-decoration: none; padding: 8px 16px;">← Back to CMS</a>
        </div>
    </div>
    
    <div class="format">
        <h3>Twitter/X (280 chars)</h3>
        <textarea id="twitter" readonly><?php echo htmlspecialchars($repurposed['twitter']); ?></textarea>
        <button class="copy-btn" onclick="copyToClipboard('twitter')">Copy</button>
    </div>
    
    <div class="format">
        <h3>Telegram (HTML)</h3>
        <textarea id="telegram" readonly><?php echo htmlspecialchars($repurposed['telegram']); ?></textarea>
        <button class="copy-btn" onclick="copyToClipboard('telegram')">Copy</button>
    </div>
    
    <div class="format">
        <h3>Email Newsletter (HTML)</h3>
        <textarea id="email" readonly><?php echo htmlspecialchars($repurposed['email']); ?></textarea>
        <button class="copy-btn" onclick="copyToClipboard('email')">Copy</button>
    </div>
    
    <div class="format">
        <h3>LinkedIn</h3>
        <textarea id="linkedin" readonly><?php echo htmlspecialchars($repurposed['linkedin']); ?></textarea>
        <button class="copy-btn" onclick="copyToClipboard('linkedin')">Copy</button>
    </div>
    
    <script>
        function copyToClipboard(id) {
            const textarea = document.getElementById(id);
            textarea.select();
            document.execCommand('copy');
            alert('Copied to clipboard!');
        }
    </script>
</body>
</html>

