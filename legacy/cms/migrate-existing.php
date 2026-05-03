<?php
/**
 * Migration script to convert existing hardcoded analysis to JSON format
 * Run this once to migrate existing data
 */

session_start();
$CMS_PASSWORD = 'yaga_calls_2025'; // Must match admin.php

if (!isset($_SESSION['cms_logged_in']) || $_SESSION['cms_logged_in'] !== true) {
    die('Access denied. Please login to CMS first.');
}

$dataFile = __DIR__ . '/../data/analysis.json';
$dataDir = dirname($dataFile);

// Create data directory if it doesn't exist
if (!file_exists($dataDir)) {
    if (!@mkdir($dataDir, 0755, true)) {
        die('Error: Cannot create data directory. Please check permissions.');
    }
}

// Verify data directory is writable
if (!is_writable($dataDir)) {
    die('Error: Data directory is not writable. Please set proper permissions (chmod 755).');
}

// Existing analysis data from analysis.html
$existingAnalyses = [
    [
        'id' => 1,
        'hook' => 'Solana Breaking Key Levels: What\'s Next?',
        'coin' => 'SOL',
        'coinTagClass' => '',
        'date' => '2025-11-17',
        'content' => 'Latest update on Solana market movements and analysis.',
        'linkUrl' => 'https://x.com/kalababas/status/1990444971011551265?s=46',
        'linkText' => 'View on X',
        'linkType' => 'x',
        'image' => '',
        'seoTitle' => 'SOL Solana Breaking Key Levels: What\'s Next? | Crypto Analysis | Yaga Calls',
        'seoDescription' => 'Latest update on Solana market movements and analysis.',
        'seoKeywords' => 'sol, sol analysis, sol price, sol prediction, crypto analysis, cryptocurrency, trading signals, bitcoin analysis, altcoin analysis',
        'createdAt' => '2025-11-17 00:00:00',
        'updatedAt' => '2025-11-17 00:00:00'
    ],
    [
        'id' => 2,
        'hook' => 'ZEC Rejection at $740: Buy Zone Alert at $500',
        'coin' => 'ZEC',
        'coinTagClass' => '',
        'date' => '2025-11-17',
        'content' => '<strong>ZEC</strong> got rejected at <strong>$720–$740</strong> and is now retracing toward the <strong>$500–$470</strong> buy zone, where strong support, a demand block, and the rising trendline could trigger a bounce toward <strong>$700+</strong>.',
        'linkUrl' => 'https://t.me/yagacalls',
        'linkText' => 'Get Full Analysis',
        'linkType' => 'telegram',
        'image' => '',
        'seoTitle' => 'ZEC ZEC Rejection at $740: Buy Zone Alert at $500 | Crypto Analysis | Yaga Calls',
        'seoDescription' => 'ZEC got rejected at $720–$740 and is now retracing toward the $500–$470 buy zone, where strong support, a demand block, and the rising trendline could trigger a bounce toward $700+.',
        'seoKeywords' => 'zec, zec analysis, zec price, zec prediction, crypto analysis, cryptocurrency, trading signals, bitcoin analysis, altcoin analysis',
        'createdAt' => '2025-11-17 00:00:00',
        'updatedAt' => '2025-11-17 00:00:00'
    ],
    [
        'id' => 3,
        'hook' => 'DUSK Surges 35%: Our Call Hit Perfect Entry',
        'coin' => 'DUSK',
        'coinTagClass' => 'success',
        'date' => '2025-11-17',
        'content' => 'Today\'s Update on our active call:' . "\n" . '<strong>$DUSK</strong> gaining <strong>35% on spot</strong> 🚀' . "\n" . '<em>Easy money</em>',
        'linkUrl' => 'https://t.me/yagacalls',
        'linkText' => 'Join for More Calls',
        'linkType' => 'telegram',
        'image' => '',
        'seoTitle' => 'DUSK DUSK Surges 35%: Our Call Hit Perfect Entry | Crypto Analysis | Yaga Calls',
        'seoDescription' => 'Today\'s Update on our active call: $DUSK gaining 35% on spot 🚀 Easy money',
        'seoKeywords' => 'dusk, dusk analysis, dusk price, dusk prediction, crypto analysis, cryptocurrency, trading signals, bitcoin analysis, altcoin analysis',
        'createdAt' => '2025-11-17 00:00:00',
        'updatedAt' => '2025-11-17 00:00:00'
    ],
    [
        'id' => 4,
        'hook' => 'Bitcoin Below 50-Day EMA: Critical Support at $70K',
        'coin' => 'BTC',
        'coinTagClass' => '',
        'date' => '2025-11-17',
        'content' => '<strong>No fake hope</strong> — Just deep analysis with realistic point of view' . "\n\n" . 'Bitcoin is still moving inside its big rising channel, so the long-term uptrend is not broken. But it has already fallen below the 50-day EMA, which usually means short-term weakness.' . "\n\n" . 'Because of this, the price will likely drop a bit more. The most possible place where Bitcoin can bounce is between <strong>$75k and $70k</strong>. This area is strong because it also matches the 200-day EMA, which Bitcoin normally respects in bull markets.' . "\n\n" . 'If BTC stays above <strong>$70k–$68k</strong>, the long-term trend is still safe.' . "\n\n" . 'If it falls below that level, then the correction could get deeper.',
        'linkUrl' => 'https://t.me/yagacalls',
        'linkText' => 'Get Full Breakdown',
        'linkType' => 'telegram',
        'image' => '',
        'seoTitle' => 'BTC Bitcoin Below 50-Day EMA: Critical Support at $70K | Crypto Analysis | Yaga Calls',
        'seoDescription' => 'Bitcoin is still moving inside its big rising channel, so the long-term uptrend is not broken. But it has already fallen below the 50-day EMA, which usually means short-term weakness.',
        'seoKeywords' => 'btc, btc analysis, btc price, btc prediction, bitcoin, bitcoin analysis, crypto analysis, cryptocurrency, trading signals, altcoin analysis',
        'createdAt' => '2025-11-17 00:00:00',
        'updatedAt' => '2025-11-17 00:00:00'
    ]
];

// Check if data file already exists and merge instead of skipping
$existingInJson = [];
if (file_exists($dataFile)) {
    $jsonContent = @file_get_contents($dataFile);
    if ($jsonContent !== false) {
        $decoded = @json_decode($jsonContent, true);
        if (json_last_error() === JSON_ERROR_NONE && is_array($decoded)) {
            $existingInJson = $decoded;
        }
    }
}

// Check if the 4 existing analyses are already in the JSON
$existingIds = array_column($existingInJson, 'id');
$needsMigration = false;
foreach ($existingAnalyses as $analysis) {
    if (!in_array($analysis['id'], $existingIds)) {
        $needsMigration = true;
        break;
    }
}

if (!$needsMigration && !empty($existingInJson)) {
    echo '<!DOCTYPE html><html><head><title>Migration</title></head><body>';
    echo '<h1>Migration Already Completed</h1>';
    echo '<p>All 4 existing analyses are already in the system (' . count($existingInJson) . ' total posts). <a href="admin.php">Go to CMS</a></p>';
    echo '</body></html>';
    exit;
}

// Merge existing JSON data with the 4 analyses (avoid duplicates)
$mergedAnalyses = $existingInJson;
foreach ($existingAnalyses as $analysis) {
    if (!in_array($analysis['id'], array_column($mergedAnalyses, 'id'))) {
        $mergedAnalyses[] = $analysis;
    }
}

// Update the variable to use merged data
$existingAnalyses = $mergedAnalyses;

// Encode data to JSON
$jsonData = @json_encode($existingAnalyses, JSON_PRETTY_PRINT);
if ($jsonData === false) {
    die('Error: Failed to encode analysis data. ' . json_last_error_msg());
}

// Write data with error handling
$written = @file_put_contents($dataFile, $jsonData, LOCK_EX);
if ($written === false) {
    die('Error: Failed to write analysis data file. Please check file permissions.');
}

// Regenerate pages with error handling
try {
    require_once __DIR__ . '/regenerate.php';
    
    $regenerated = regenerateAnalysisPage();
    $sitemapRegenerated = regenerateSitemap();
    
    $messages = [];
    if (!$regenerated) {
        $messages[] = 'Warning: Could not regenerate analysis page.';
    }
    if (!$sitemapRegenerated) {
        $messages[] = 'Warning: Could not regenerate sitemap.';
    }
    
    echo '<!DOCTYPE html><html><head><title>Migration Complete</title></head><body>';
    echo '<h1>Migration Complete!</h1>';
    $migratedCount = count($existingAnalyses) - count($existingInJson);
    if ($migratedCount > 0) {
        echo '<p>Successfully migrated ' . $migratedCount . ' existing analysis posts to JSON format.</p>';
        echo '<p>Total analyses in system: ' . count($existingAnalyses) . '</p>';
    } else {
        echo '<p>All analyses are already in the system. Total: ' . count($existingAnalyses) . '</p>';
    }
    
    if (!empty($messages)) {
        echo '<p style="color: orange;">' . implode('<br>', $messages) . '</p>';
    }
    
    echo '<p><a href="admin.php">Go to CMS</a></p>';
    echo '</body></html>';
    
} catch (Exception $e) {
    echo '<!DOCTYPE html><html><head><title>Migration Error</title></head><body>';
    echo '<h1>Migration Error</h1>';
    echo '<p>Data was saved, but there was an error during page regeneration:</p>';
    echo '<p style="color: red;">' . htmlspecialchars($e->getMessage()) . '</p>';
    echo '<p><a href="admin.php">Go to CMS</a></p>';
    echo '</body></html>';
}

