<?php
/**
 * Content Scheduling System - Standalone processor
 * Can be called via cron job or manually
 */

require_once __DIR__ . '/scheduler.php';

// Process scheduled posts if called directly
if (isset($_GET['process']) && $_GET['process'] === '1') {
    try {
        $result = processScheduledPosts();
        if ($result) {
            echo "Scheduled posts processed successfully.";
        } else {
            echo "No scheduled posts to process.";
        }
    } catch (Exception $e) {
        error_log('Scheduler Error: ' . $e->getMessage());
        echo "Error processing scheduled posts: " . $e->getMessage();
    } catch (Error $e) {
        error_log('Scheduler Fatal Error: ' . $e->getMessage());
        echo "Fatal error processing scheduled posts.";
    }
    exit;
}

// If accessed directly, show scheduled posts
session_start();
$CMS_PASSWORD = 'yaga_calls_2025';
$CMS_USERNAME = 'admin';

if (!isset($_SESSION['cms_logged_in']) || $_SESSION['cms_logged_in'] !== true) {
    die('Access denied. Please login to CMS first.');
}

$scheduled = getScheduledPosts();

?>
<!DOCTYPE html>
<html>
<head>
    <title>Scheduled Posts | CMS</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; background: #0A0B0D; color: #EAF2FF; }
        .post { background: #151A21; padding: 16px; margin-bottom: 12px; border-radius: 8px; border: 1px solid #1E242C; }
        .post h3 { margin: 0 0 8px 0; color: #E39E2E; }
        .post-meta { color: #A7B0C0; font-size: 12px; }
        a { color: #E39E2E; text-decoration: none; }
        a:hover { text-decoration: underline; }
    </style>
</head>
<body>
    <h1>Scheduled Posts</h1>
    <p><a href="admin.php">← Back to CMS</a></p>
    
    <?php if (empty($scheduled)): ?>
        <p>No scheduled posts.</p>
    <?php else: ?>
        <?php foreach ($scheduled as $post): ?>
            <div class="post">
                <h3><?php echo htmlspecialchars($post['hook']); ?></h3>
                <div class="post-meta">
                    Coin: <?php echo htmlspecialchars($post['coin']); ?> | 
                    Scheduled: <?php echo date('M d, Y H:i', strtotime($post['scheduledPublish'])); ?>
                </div>
            </div>
        <?php endforeach; ?>
    <?php endif; ?>
</body>
</html>

