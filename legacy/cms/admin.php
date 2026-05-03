<?php
// Enable error reporting for debugging (remove in production)
error_reporting(E_ALL);
ini_set('display_errors', 0); // Don't display errors, but log them
ini_set('log_errors', 1);

session_start();

// Simple authentication - Change this password!
$CMS_PASSWORD = 'yaga_calls_2025'; // Change this to a strong password
$CMS_USERNAME = 'admin'; // Change this username

// Include ML enhancement functions with error handling
try {
    if (!file_exists(__DIR__ . '/ml-enhance.php')) {
        throw new Exception('ml-enhance.php not found');
    }
    require_once __DIR__ . '/ml-enhance.php';
    
    if (!file_exists(__DIR__ . '/ai-draft.php')) {
        throw new Exception('ai-draft.php not found');
    }
    require_once __DIR__ . '/ai-draft.php';
    
    if (!file_exists(__DIR__ . '/repurpose.php')) {
        throw new Exception('repurpose.php not found');
    }
    require_once __DIR__ . '/repurpose.php';
    
    if (!file_exists(__DIR__ . '/scheduler.php')) {
        throw new Exception('scheduler.php not found');
    }
    require_once __DIR__ . '/scheduler.php';
    
    if (!file_exists(__DIR__ . '/topical-clusters.php')) {
        throw new Exception('topical-clusters.php not found');
    }
    require_once __DIR__ . '/topical-clusters.php';
    
    if (!file_exists(__DIR__ . '/analytics.php')) {
        throw new Exception('analytics.php not found');
    }
    require_once __DIR__ . '/analytics.php';
    
    if (!file_exists(__DIR__ . '/performance.php')) {
        throw new Exception('performance.php not found');
    }
    require_once __DIR__ . '/performance.php';
} catch (Exception $e) {
    die('Error loading CMS modules: ' . htmlspecialchars($e->getMessage()) . '. Please check that all required files exist.');
} catch (Error $e) {
    die('Fatal error loading CMS modules: ' . htmlspecialchars($e->getMessage()));
}

// Check if logged in
if (!isset($_SESSION['cms_logged_in']) || $_SESSION['cms_logged_in'] !== true) {
    if (isset($_POST['username']) && isset($_POST['password'])) {
        if ($_POST['username'] === $CMS_USERNAME && $_POST['password'] === $CMS_PASSWORD) {
            $_SESSION['cms_logged_in'] = true;
        } else {
            $error = 'Invalid credentials';
        }
    }
    
    if (!isset($_SESSION['cms_logged_in']) || $_SESSION['cms_logged_in'] !== true) {
        ?>
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>CMS Login - Yaga Calls</title>
            <style>
                * { box-sizing: border-box; margin: 0; padding: 0; }
                body {
                    font-family: Inter, ui-sans-serif, system-ui, -apple-system, sans-serif;
                    background: linear-gradient(135deg, #0A0B0D 0%, #0F1217 100%);
                    color: #EAF2FF;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    min-height: 100vh;
                    padding: 20px;
                }
                .login-container {
                    background: rgba(21, 26, 33, 0.95);
                    border: 1px solid #1E242C;
                    border-radius: 16px;
                    padding: 40px;
                    max-width: 400px;
                    width: 100%;
                    box-shadow: 0 20px 60px rgba(0,0,0,0.5);
                }
                h1 {
                    color: #E39E2E;
                    margin-bottom: 8px;
                    font-size: 24px;
                }
                p {
                    color: #A7B0C0;
                    margin-bottom: 24px;
                    font-size: 14px;
                }
                .form-group {
                    margin-bottom: 20px;
                }
                label {
                    display: block;
                    color: #EAF2FF;
                    margin-bottom: 8px;
                    font-size: 14px;
                    font-weight: 500;
                }
                input[type="text"],
                input[type="password"] {
                    width: 100%;
                    padding: 12px;
                    background: #0F1217;
                    border: 1px solid #1E242C;
                    border-radius: 8px;
                    color: #EAF2FF;
                    font-size: 14px;
                }
                input:focus {
                    outline: none;
                    border-color: #E39E2E;
                    box-shadow: 0 0 0 3px rgba(227, 158, 46, 0.1);
                }
                .btn {
                    width: 100%;
                    padding: 12px;
                    background: linear-gradient(90deg, #E39E2E 0%, #C19770 100%);
                    color: #001014;
                    border: none;
                    border-radius: 8px;
                    font-weight: 700;
                    font-size: 14px;
                    cursor: pointer;
                    transition: transform 0.2s;
                }
                .btn:hover {
                    transform: translateY(-2px);
                }
                .error {
                    color: #EF4444;
                    margin-bottom: 16px;
                    font-size: 14px;
                }
            </style>
        </head>
        <body>
            <div class="login-container">
                <h1>CMS Login</h1>
                <p>Enter your credentials to access the CMS</p>
                <?php if (isset($error)): ?>
                    <div class="error"><?php echo htmlspecialchars($error); ?></div>
                <?php endif; ?>
                <form method="POST">
                    <div class="form-group">
                        <label for="username">Username</label>
                        <input type="text" id="username" name="username" required autofocus>
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" required>
                    </div>
                    <button type="submit" class="btn">Login</button>
                </form>
            </div>
        </body>
        </html>
        <?php
        exit;
    }
}

// Logout functionality
if (isset($_GET['logout'])) {
    session_destroy();
    header('Location: admin.php');
    exit;
}

// Load existing analysis data
$dataFile = __DIR__ . '/../data/analysis.json';
$dataDir = dirname($dataFile);

// Ensure data directory exists
if (!file_exists($dataDir)) {
    if (!@mkdir($dataDir, 0755, true)) {
        die('Error: Cannot create data directory. Please check permissions.');
    }
}

// Verify data directory is writable
if (!is_writable($dataDir)) {
    die('Error: Data directory is not writable. Please set proper permissions (chmod 755).');
}

$analyses = [];
if (file_exists($dataFile)) {
    $jsonContent = @file_get_contents($dataFile);
    if ($jsonContent === false) {
        $message = 'Warning: Could not read analysis data file.';
        $messageType = 'error';
    } else {
        $decoded = @json_decode($jsonContent, true);
        if (json_last_error() !== JSON_ERROR_NONE) {
            $message = 'Warning: Analysis data file is corrupted. Starting fresh.';
            $messageType = 'error';
            $analyses = [];
        } else {
            $analyses = $decoded ?: [];
        }
    }
}

// Handle form submission
$message = '';
$messageType = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['action'])) {
    if ($_POST['action'] === 'save') {
        $id = isset($_POST['id']) && $_POST['id'] !== '' ? intval($_POST['id']) : null;
        
        // Check if scheduled publishing
        $scheduledPublish = isset($_POST['scheduledPublish']) && !empty($_POST['scheduledPublish']) ? trim($_POST['scheduledPublish']) : null;
        $publishNow = isset($_POST['publishNow']) && $_POST['publishNow'] === '1';
        
        // Find existing analysis if editing
        $existingAnalysis = null;
        if ($id !== null) {
            foreach ($analyses as $idx => $a) {
                if (isset($a['id']) && $a['id'] === $id) {
                    $existingAnalysis = $a;
                    break;
                }
            }
        }
        
        // Generate new ID if needed
        $newId = $id;
        if ($newId === null) {
            if (count($analyses) > 0) {
                $ids = array_filter(array_column($analyses, 'id'), function($val) {
                    return is_numeric($val);
                });
                $newId = !empty($ids) ? (max($ids) + 1) : 1;
            } else {
                $newId = 1;
            }
        }
        
        $analysis = [
            'id' => $newId,
            'hook' => trim($_POST['hook'] ?? ''),
            'coin' => trim($_POST['coin'] ?? ''),
            'coinTagClass' => trim($_POST['coinTagClass'] ?? ''),
            'date' => trim($_POST['date'] ?? date('Y-m-d')),
            'content' => trim($_POST['content'] ?? ''),
            'linkUrl' => trim($_POST['linkUrl'] ?? ''),
            'linkText' => trim($_POST['linkText'] ?? 'Get Full Analysis'),
            'linkType' => trim($_POST['linkType'] ?? 'telegram'),
            'image' => $_POST['existingImage'] ?? '',
            'seoTitle' => trim($_POST['seoTitle'] ?? ''),
            'seoDescription' => trim($_POST['seoDescription'] ?? ''),
            'seoKeywords' => trim($_POST['seoKeywords'] ?? ''),
            'createdAt' => ($existingAnalysis && isset($existingAnalysis['createdAt'])) 
                ? $existingAnalysis['createdAt'] 
                : date('Y-m-d H:i:s'),
            'updatedAt' => date('Y-m-d H:i:s'),
            'published' => $publishNow || !$scheduledPublish,
            // Signal Data
            'signalType' => trim($_POST['signalType'] ?? ''),
            'signalStatus' => trim($_POST['signalStatus'] ?? ''),
            
            // Pro Metrics
            'signalStrength' => (int)($_POST['signalStrength'] ?? 0),
            'marketContext' => trim($_POST['marketContext'] ?? ''),
            'tradeDuration' => trim($_POST['tradeDuration'] ?? ''),
            
            // Tech Levels
            'entryZone' => trim($_POST['entryZone'] ?? ''),
            'targets' => trim($_POST['targets'] ?? ''),
            'target1_hit' => isset($_POST['target1_hit']),
            'target2_hit' => isset($_POST['target2_hit']),
            'target3_hit' => isset($_POST['target3_hit']),
            'stopLoss' => trim($_POST['stopLoss'] ?? ''),
            'riskLevel' => trim($_POST['riskLevel'] ?? ''),
            'roiResult' => trim($_POST['roiResult'] ?? ''),
            // AIO/SEO Data
            'voiceQuestion' => trim($_POST['voiceQuestion'] ?? ''),
            'voiceAnswer' => trim($_POST['voiceAnswer'] ?? ''),
            'llmContext' => trim($_POST['llmContext'] ?? '')
        
        // Add scheduled publish date if set
        if ($scheduledPublish && !$publishNow) {
            $analysis['scheduledPublish'] = $scheduledPublish;
            $analysis['published'] = false;
        }
        
        // Handle image upload
        if (isset($_FILES['image']) && $_FILES['image']['error'] === UPLOAD_ERR_OK) {
            $uploadDir = __DIR__ . '/../assets/analysis-images/';
            
            // Create upload directory if it doesn't exist
            if (!file_exists($uploadDir)) {
                if (!@mkdir($uploadDir, 0755, true)) {
                    $message = 'Error: Cannot create images directory. Please check permissions.';
                    $messageType = 'error';
                }
            }
            
            // Verify directory is writable
            if (file_exists($uploadDir) && is_writable($uploadDir)) {
                $fileExtension = strtolower(pathinfo($_FILES['image']['name'], PATHINFO_EXTENSION));
                $allowedExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp'];
                
                if (in_array($fileExtension, $allowedExtensions)) {
                    $fileName = 'analysis-' . time() . '-' . uniqid() . '.' . $fileExtension;
                    $filePath = $uploadDir . $fileName;
                    
                    if (@move_uploaded_file($_FILES['image']['tmp_name'], $filePath)) {
                        $analysis['image'] = '/assets/analysis-images/' . $fileName;
                    } else {
                        $message = 'Warning: Image upload failed. Analysis saved without image.';
                        $messageType = 'error';
                    }
                } else {
                    $message = 'Warning: Invalid image format. Only JPG, PNG, GIF, and WebP are allowed.';
                    $messageType = 'error';
                }
            } else {
                $message = 'Warning: Images directory is not writable. Analysis saved without image.';
                $messageType = 'error';
            }
        }
        
        if ($id !== null) {
            // Update existing
            $found = false;
            foreach ($analyses as $idx => $a) {
                if (isset($a['id']) && $a['id'] === $id) {
                    $analyses[$idx] = $analysis;
                    $found = true;
                    break;
                }
            }
            if (!$found) {
                // ID not found, add as new
                $analyses[] = $analysis;
            }
            $message = 'Analysis updated successfully!';
        } else {
            // Add new
            $analyses[] = $analysis;
            $message = 'Analysis added successfully!';
        }
        
        // Sort by date (newest first) with error handling
        usort($analyses, function($a, $b) {
            $dateA = isset($a['date']) ? strtotime($a['date']) : 0;
            $dateB = isset($b['date']) ? strtotime($b['date']) : 0;
            return $dateB - $dateA;
        });
        
        // Save to JSON file with error handling
        $jsonData = @json_encode($analyses, JSON_PRETTY_PRINT);
        if ($jsonData === false) {
            $message = 'Error: Failed to encode analysis data. ' . json_last_error_msg();
            $messageType = 'error';
        } else {
            $written = @file_put_contents($dataFile, $jsonData, LOCK_EX);
            if ($written === false) {
                $message = 'Error: Failed to save analysis data. Please check file permissions.';
                $messageType = 'error';
            } else {
                if (isset($analysis['scheduledPublish'])) {
                    $message = 'Analysis scheduled for ' . date('M d, Y H:i', strtotime($analysis['scheduledPublish']));
                } else {
                    $message = $id !== null ? 'Analysis updated successfully!' : 'Analysis added successfully!';
                }
                $messageType = 'success';
                
                // Process scheduled posts before regeneration
                try {
                    if (function_exists('processScheduledPosts')) {
                        processScheduledPosts();
                    }
                } catch (Exception $e) {
                    // Silently fail - not critical
                } catch (Error $e) {
                    // Silently fail - not critical
                }
                
                // Regenerate analysis.html and sitemap
                try {
                    if (file_exists(__DIR__ . '/regenerate.php')) {
                        require_once __DIR__ . '/regenerate.php';
                        if (function_exists('regenerateAnalysisPage')) {
                            $regenerated = regenerateAnalysisPage();
                            if (!$regenerated) {
                                $message .= ' Warning: Could not regenerate analysis page.';
                            }
                        }
                        if (function_exists('regenerateSitemap')) {
                            $sitemapRegenerated = regenerateSitemap();
                            if (!$sitemapRegenerated) {
                                $message .= ' Warning: Could not regenerate sitemap.';
                            }
                        }
                    }
                } catch (Exception $e) {
                    $message .= ' Warning: Error during page regeneration: ' . htmlspecialchars($e->getMessage());
                } catch (Error $e) {
                    $message .= ' Warning: Fatal error during page regeneration: ' . htmlspecialchars($e->getMessage());
                }
            }
        }
    } elseif ($_POST['action'] === 'delete') {
        $id = intval($_POST['id']);
        $analyses = array_filter($analyses, function($a) use ($id) {
            return $a['id'] !== $id;
        });
        $analyses = array_values($analyses);
        
        // Save to JSON file with error handling
        $jsonData = @json_encode($analyses, JSON_PRETTY_PRINT);
        if ($jsonData === false) {
            $message = 'Error: Failed to encode analysis data. ' . json_last_error_msg();
            $messageType = 'error';
        } else {
            $written = @file_put_contents($dataFile, $jsonData, LOCK_EX);
            if ($written === false) {
                $message = 'Error: Failed to save analysis data. Please check file permissions.';
                $messageType = 'error';
            } else {
                $message = 'Analysis deleted successfully!';
                $messageType = 'success';
                
                // Regenerate analysis.html and sitemap
                try {
                    if (file_exists(__DIR__ . '/regenerate.php')) {
                        require_once __DIR__ . '/regenerate.php';
                        if (function_exists('regenerateAnalysisPage')) {
                            $regenerated = regenerateAnalysisPage();
                            if (!$regenerated) {
                                $message .= ' Warning: Could not regenerate analysis page.';
                            }
                        }
                        if (function_exists('regenerateSitemap')) {
                            $sitemapRegenerated = regenerateSitemap();
                            if (!$sitemapRegenerated) {
                                $message .= ' Warning: Could not regenerate sitemap.';
                            }
                        }
                    }
                } catch (Exception $e) {
                    $message .= ' Warning: Error during page regeneration: ' . htmlspecialchars($e->getMessage());
                } catch (Error $e) {
                    $message .= ' Warning: Fatal error during page regeneration: ' . htmlspecialchars($e->getMessage());
                }
            }
        }
    }
}

// Get analysis for editing
$editingAnalysis = null;
if (isset($_GET['edit'])) {
    $editId = intval($_GET['edit']);
    if ($editId > 0) {
        foreach ($analyses as $analysis) {
            if (isset($analysis['id']) && $analysis['id'] === $editId) {
                $editingAnalysis = $analysis;
                break;
            }
        }
        // If analysis not found, show a message
        if (!$editingAnalysis) {
            $message = 'Analysis with ID ' . $editId . ' not found.';
            $messageType = 'error';
        }
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CMS - Analysis Management | Yaga Calls</title>
    <link rel="stylesheet" href="/assets/css/base.css">
    <link rel="stylesheet" href="/assets/css/layout.css">
    <style>
        .cms-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 40px 20px;
        }
        .cms-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 32px;
            padding-bottom: 20px;
            border-bottom: 1px solid var(--color-line);
        }
        .cms-header h1 {
            color: var(--color-primary);
            font-size: 32px;
            margin: 0;
        }
        .logout-btn {
            padding: 8px 16px;
            background: var(--color-surface);
            border: 1px solid var(--color-line);
            border-radius: 8px;
            color: var(--color-text-high);
            text-decoration: none;
            font-size: 14px;
        }
        .message {
            padding: 12px 16px;
            border-radius: 8px;
            margin-bottom: 24px;
        }
        .message.success {
            background: rgba(34, 197, 94, 0.1);
            border: 1px solid rgba(34, 197, 94, 0.3);
            color: #22C55E;
        }
        .message.error {
            background: rgba(239, 68, 68, 0.1);
            border: 1px solid rgba(239, 68, 68, 0.3);
            color: #EF4444;
        }
        .cms-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 32px;
        }
        .form-section, .list-section {
            background: var(--grad-card), var(--color-surface-deep);
            border: 1px solid var(--color-line);
            border-radius: var(--radius-card);
            padding: 24px;
        }
        .form-group {
            margin-bottom: 20px;
        }
        .form-group label {
            display: block;
            color: var(--color-text-high);
            margin-bottom: 8px;
            font-size: 14px;
            font-weight: 600;
        }
        .form-group input,
        .form-group textarea,
        .form-group select {
            width: 100%;
            padding: 10px 12px;
            background: var(--color-surface);
            border: 1px solid var(--color-line);
            border-radius: 8px;
            color: var(--color-text-high);
            font-size: 14px;
            font-family: inherit;
        }
        .form-group textarea {
            min-height: 120px;
            resize: vertical;
        }
        .form-group textarea.content-textarea {
            min-height: 200px;
        }
        .form-group small {
            display: block;
            color: var(--color-text-muted);
            margin-top: 4px;
            font-size: 12px;
        }
        .btn-primary {
            padding: 12px 24px;
            background: var(--grad-button);
            color: #001014;
            border: none;
            border-radius: var(--radius-pill);
            font-weight: 700;
            font-size: 14px;
            cursor: pointer;
            box-shadow: var(--glow-primary);
        }
        .btn-secondary {
            padding: 8px 16px;
            background: var(--color-surface);
            border: 1px solid var(--color-line);
            border-radius: 8px;
            color: var(--color-text-high);
            text-decoration: none;
            font-size: 14px;
            display: inline-block;
        }
        .btn-danger {
            padding: 6px 12px;
            background: rgba(239, 68, 68, 0.1);
            border: 1px solid rgba(239, 68, 68, 0.3);
            border-radius: 6px;
            color: #EF4444;
            font-size: 12px;
            cursor: pointer;
        }
        .analysis-list {
            max-height: 600px;
            overflow-y: auto;
        }
        .analysis-item {
            padding: 16px;
            border: 1px solid var(--color-line);
            border-radius: 8px;
            margin-bottom: 12px;
            background: var(--color-surface);
        }
        .analysis-item-header {
            display: flex;
            justify-content: space-between;
            align-items: start;
            margin-bottom: 8px;
        }
        .analysis-item-title {
            font-weight: 600;
            color: var(--color-text-high);
            font-size: 16px;
        }
        .analysis-item-meta {
            color: var(--color-text-muted);
            font-size: 12px;
            margin-bottom: 8px;
        }
        .analysis-item-actions {
            display: flex;
            gap: 8px;
            margin-top: 12px;
        }
        .seo-suggestions {
            background: rgba(227, 158, 46, 0.05);
            border: 1px solid rgba(227, 158, 46, 0.2);
            border-radius: 8px;
            padding: 12px;
            margin-top: 12px;
        }
        .seo-suggestions h4 {
            color: var(--color-primary);
            font-size: 14px;
            margin-bottom: 8px;
        }
        .seo-suggestions p {
            color: var(--color-text-muted);
            font-size: 12px;
            margin: 4px 0;
        }
        .image-preview {
            margin-top: 8px;
        }
        .image-preview img {
            max-width: 200px;
            max-height: 150px;
            border-radius: 8px;
            border: 1px solid var(--color-line);
        }
        @media (max-width: 900px) {
            .cms-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="cms-container">
        <div class="cms-header">
            <h1>Analysis CMS</h1>
            <div style="display: flex; gap: 12px; align-items: center;">
                <a href="dashboard.php" class="logout-btn" style="background: var(--color-primary); color: #001014; font-weight: 600;">🚀 Dashboard</a>
                <a href="?logout=1" class="logout-btn">Logout</a>
            </div>
        </div>
        
        <?php if ($message): ?>
            <div class="message <?php echo $messageType; ?>">
                <?php echo htmlspecialchars($message); ?>
            </div>
        <?php endif; ?>
        
        <div class="cms-grid">
            <!-- Form Section -->
            <div class="form-section">
                <h2 style="color: var(--color-primary); margin-bottom: 20px;">
                    <?php echo $editingAnalysis ? 'Edit Analysis' : 'Add New Analysis'; ?>
                </h2>
                
                <form method="POST" enctype="multipart/form-data" id="analysisForm">
                    <input type="hidden" name="action" value="save">
                    <?php if ($editingAnalysis && isset($editingAnalysis['id'])): ?>
                        <input type="hidden" name="id" value="<?php echo htmlspecialchars($editingAnalysis['id']); ?>">
                    <?php endif; ?>
                    
                    <div class="form-group">
                        <label for="hook">Hook (Headline) *</label>
                        <input type="text" id="hook" name="hook" 
                               value="<?php echo htmlspecialchars($editingAnalysis['hook'] ?? ''); ?>" 
                               required placeholder="e.g., Bitcoin Below 50-Day EMA: Critical Support at $70K">
                        <small>Compelling headline that grabs attention</small>
                    </div>
                    
                    <div class="form-group">
                        <label for="coin">Coin Symbol *</label>
                        <input type="text" id="coin" name="coin" 
                               value="<?php echo htmlspecialchars($editingAnalysis['coin'] ?? ''); ?>" 
                               required placeholder="BTC, ETH, SOL, etc." maxlength="10">
                    </div>
                    
                    <div class="form-group">
                        <label for="coinTagClass">Coin Tag Style</label>
                        <select id="coinTagClass" name="coinTagClass">
                            <option value="" <?php echo (!$editingAnalysis || !isset($editingAnalysis['coinTagClass']) || $editingAnalysis['coinTagClass'] === '') ? 'selected' : ''; ?>>Default</option>
                            <option value="success" <?php echo ($editingAnalysis && isset($editingAnalysis['coinTagClass']) && $editingAnalysis['coinTagClass'] === 'success') ? 'selected' : ''; ?>>Success (Green - for winning calls)</option>
                        </select>
                        <small>Use "Success" for winning calls</small>
                    </div>
                    
                    <div class="form-group">
                        <label for="date">Date *</label>
                        <input type="date" id="date" name="date" 
                               value="<?php echo htmlspecialchars($editingAnalysis['date'] ?? date('Y-m-d')); ?>" 
                               required>
                    </div>
                    
                    <div class="form-group">
                        <label>
                            <input type="checkbox" id="schedulePublish" name="schedulePublish" 
                                   onchange="toggleScheduleFields()">
                            Schedule for later publication
                        </label>
                    </div>
                    
                    <div id="scheduleFields" style="display: none; margin-top: 12px;">
                        <div class="form-group">
                            <label for="scheduledPublish">Scheduled Publish Date & Time</label>
                            <input type="datetime-local" id="scheduledPublish" name="scheduledPublish" 
                                   value="<?php echo ($editingAnalysis && isset($editingAnalysis['scheduledPublish'])) ? date('Y-m-d\TH:i', strtotime($editingAnalysis['scheduledPublish'])) : ''; ?>">
                            <small>Post will be published automatically at this time</small>
                        </div>
                        <div class="form-group">
                            <label>
                                <input type="checkbox" name="publishNow" value="1" checked>
                                Publish immediately (ignore schedule)
                            </label>
                        </div>
                    </div>
                    
                    <div class="form-group" style="margin-top: 20px; padding-top: 20px; border-top: 1px solid var(--color-line);">
                        <label>AI Draft Generator</label>
                        <select id="draftType" style="width: 100%; padding: 8px; margin-bottom: 8px;">
                            <option value="">Select template...</option>
                            <option value="price_analysis">Price Analysis</option>
                            <option value="breakout">Breakout Analysis</option>
                            <option value="support_resistance">Support/Resistance</option>
                            <option value="news_reaction">News Reaction</option>
                        </select>
                        <button type="button" onclick="generateAIDraft()" class="btn-secondary" style="width: 100%;">
                            Generate AI Draft
                        </button>
                        <small>Fill in coin symbol first, then generate draft</small>
                    </div>
                    
                    <div class="form-group">
                        <label for="content">Content *</label>
                        <textarea id="content" name="content" class="content-textarea" 
                                  required placeholder="Your analysis content here..."><?php echo htmlspecialchars($editingAnalysis['content'] ?? ''); ?></textarea>
                        <small>Use &lt;strong&gt; for bold text, &lt;p&gt; for paragraphs</small>
                    </div>
                    
                    <div class="form-group">
                        <label for="image">Image</label>
                        <input type="file" id="image" name="image" accept="image/*">
                        <?php if ($editingAnalysis && isset($editingAnalysis['image']) && $editingAnalysis['image']): ?>
                            <input type="hidden" name="existingImage" value="<?php echo htmlspecialchars($editingAnalysis['image']); ?>">
                            <div class="image-preview">
                                <img src="<?php echo htmlspecialchars($editingAnalysis['image']); ?>" alt="Current image">
                                <p style="color: var(--color-text-muted); font-size: 12px; margin-top: 4px;">Current image</p>
                            </div>
                        <?php endif; ?>
                        <small>Upload an image for this analysis (optional)</small>
                    </div>
                    
                    <div class="form-group">
                        <label for="linkUrl">Link URL *</label>
                        <input type="url" id="linkUrl" name="linkUrl" 
                               value="<?php echo htmlspecialchars($editingAnalysis['linkUrl'] ?? 'https://t.me/yagacalls'); ?>" 
                               required placeholder="https://t.me/yagacalls or https://x.com/...">
                    </div>
                    
                    <div class="form-group">
                        <label for="linkText">Link Text</label>
                        <input type="text" id="linkText" name="linkText" 
                               value="<?php echo htmlspecialchars($editingAnalysis['linkText'] ?? 'Get Full Analysis'); ?>" 
                               placeholder="Get Full Analysis">
                    </div>
                    
                    <div class="form-group">
                        <label for="linkType">Link Type</label>
                        <select id="linkType" name="linkType">
                            <option value="telegram" <?php echo (!$editingAnalysis || !isset($editingAnalysis['linkType']) || $editingAnalysis['linkType'] === 'telegram') ? 'selected' : ''; ?>>Telegram</option>
                            <option value="x" <?php echo ($editingAnalysis && isset($editingAnalysis['linkType']) && $editingAnalysis['linkType'] === 'x') ? 'selected' : ''; ?>>X (Twitter)</option>
                            <option value="external" <?php echo ($editingAnalysis && isset($editingAnalysis['linkType']) && $editingAnalysis['linkType'] === 'external') ? 'selected' : ''; ?>>External Link</option>
                        </select>
                    </div>

                    <!-- Signal Intelligence Section -->
                    <div class="form-section-header" style="margin-top: 32px; padding-top: 20px; border-top: 2px dashed var(--color-line);">
                        <h3 style="color: var(--color-primary); margin-bottom: 20px;">📡 Signal Intelligence Terminal</h3>
                    </div>

                    <div style="background: rgba(227,158,46,0.05); padding: 20px; border: 1px solid var(--color-line); border-radius: 8px; margin-bottom: 25px;">
                        <h4 style="margin-top:0; color:var(--color-primary); border-bottom:1px solid var(--color-line); padding-bottom:10px; margin-bottom:20px;">1. Valid Setup Core</h4>
                        
                        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; margin-bottom: 20px;">
                            <div class="form-group">
                                <label for="signalType">Signal Type</label>
                                <select id="signalType" name="signalType" style="width: 100%; padding: 10px; border-radius: 4px; border: 1px solid var(--color-line); background: var(--color-surface); color: var(--color-text);">
                                    <option value="">-- Select Type --</option>
                                    <option value="long" <?php echo ($editingAnalysis && isset($editingAnalysis['signalType']) && $editingAnalysis['signalType'] === 'long') ? 'selected' : ''; ?>>🟢 Long Setup</option>
                                    <option value="short" <?php echo ($editingAnalysis && isset($editingAnalysis['signalType']) && $editingAnalysis['signalType'] === 'short') ? 'selected' : ''; ?>>🔴 Short Setup</option>
                                    <option value="spot" <?php echo ($editingAnalysis && isset($editingAnalysis['signalType']) && $editingAnalysis['signalType'] === 'spot') ? 'selected' : ''; ?>>🔵 Spot Accumulation</option>
                                    <option value="update" <?php echo ($editingAnalysis && isset($editingAnalysis['signalType']) && $editingAnalysis['signalType'] === 'update') ? 'selected' : ''; ?>>⚪ Market Update</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="signalStatus">Status</label>
                                <select id="signalStatus" name="signalStatus" style="width: 100%; padding: 10px; border-radius: 4px; border: 1px solid var(--color-line); background: var(--color-surface); color: var(--color-text);">
                                    <option value="">-- Select Status --</option>
                                    <option value="active" <?php echo ($editingAnalysis && isset($editingAnalysis['signalStatus']) && $editingAnalysis['signalStatus'] === 'active') ? 'selected' : ''; ?>>🔴 ACTIVE</option>
                                    <option value="pending" <?php echo ($editingAnalysis && isset($editingAnalysis['signalStatus']) && $editingAnalysis['signalStatus'] === 'pending') ? 'selected' : ''; ?>>⏳ Pending Entry</option>
                                    <option value="hit" <?php echo ($editingAnalysis && isset($editingAnalysis['signalStatus']) && $editingAnalysis['signalStatus'] === 'hit') ? 'selected' : ''; ?>>✅ Target Hit</option>
                                    <option value="closed" <?php echo ($editingAnalysis && isset($editingAnalysis['signalStatus']) && $editingAnalysis['signalStatus'] === 'closed') ? 'selected' : ''; ?>>🏁 Closed/PnL</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="marketContext">Market Context</label>
                                <select id="marketContext" name="marketContext" style="width: 100%; padding: 10px; border-radius: 4px; border: 1px solid var(--color-line); background: var(--color-surface); color: var(--color-text);">
                                    <option value="">-- Select Context --</option>
                                    <option value="Breakout" <?php echo ($editingAnalysis['marketContext'] ?? '') === 'Breakout' ? 'selected' : ''; ?>>⚡ Breakout</option>
                                    <option value="Reversal" <?php echo ($editingAnalysis['marketContext'] ?? '') === 'Reversal' ? 'selected' : ''; ?>>🔄 Reversal</option>
                                    <option value="Trend Continuation" <?php echo ($editingAnalysis['marketContext'] ?? '') === 'Trend Continuation' ? 'selected' : ''; ?>>📈 Trend Cont.</option>
                                    <option value="Range Play" <?php echo ($editingAnalysis['marketContext'] ?? '') === 'Range Play' ? 'selected' : ''; ?>>↔️ Range Play</option>
                                </select>
                            </div>
                        </div>

                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                            <div class="form-group">
                                <label for="tradeDuration">Duration</label>
                                <select id="tradeDuration" name="tradeDuration" style="width: 100%; padding: 10px; border-radius: 4px; border: 1px solid var(--color-line); background: var(--color-surface); color: var(--color-text);">
                                    <option value="">-- Duration --</option>
                                    <option value="Scalp" <?php echo ($editingAnalysis['tradeDuration'] ?? '') === 'Scalp' ? 'selected' : ''; ?>>⚡ Scalp (Min/Hrs)</option>
                                    <option value="Swing" <?php echo ($editingAnalysis['tradeDuration'] ?? '') === 'Swing' ? 'selected' : ''; ?>>📅 Swing (Days)</option>
                                    <option value="Long-Term" <?php echo ($editingAnalysis['tradeDuration'] ?? '') === 'Long-Term' ? 'selected' : ''; ?>>🗓️ Position (Weeks)</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="signalStrength">Signal Strength (0-100)</label>
                                <input type="number" id="signalStrength" name="signalStrength" 
                                       value="<?php echo htmlspecialchars($editingAnalysis['signalStrength'] ?? '80'); ?>" 
                                       min="0" max="100" style="width: 100%; padding: 10px;">
                            </div>
                        </div>
                    </div>

                    <div style="background: rgba(227,158,46,0.02); padding: 20px; border: 1px solid var(--color-line); border-radius: 8px; margin-bottom: 25px;">
                        <h4 style="margin-top:0; color:var(--color-primary); border-bottom:1px solid var(--color-line); padding-bottom:10px; margin-bottom:20px;">2. Execution Levels</h4>
                        
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
                            <div class="form-group">
                                <label for="entryZone">Entry Zone (Text)</label>
                                <input type="text" id="entryZone" name="entryZone" 
                                       value="<?php echo htmlspecialchars($editingAnalysis['entryZone'] ?? ''); ?>" 
                                       placeholder="$58,000 - $59,500">
                            </div>
                            <div class="form-group">
                                <label for="stopLoss">Stop Loss</label>
                                <input type="text" id="stopLoss" name="stopLoss" 
                                       value="<?php echo htmlspecialchars($editingAnalysis['stopLoss'] ?? ''); ?>" 
                                       placeholder="$56,800" style="color: #ff4444;">
                            </div>
                        </div>

                        <div class="form-group" style="margin-bottom: 16px;">
                            <label for="targets">Take Profit Targets (Comma Separated)</label>
                            <input type="text" id="targets" name="targets" 
                                   value="<?php echo htmlspecialchars($editingAnalysis['targets'] ?? ''); ?>" 
                                   placeholder="$62k, $65k, $70k">
                            
                            <div style="margin-top: 10px; display: flex; gap: 20px; padding: 10px; background: rgba(0,0,0,0.2); border-radius: 4px;">
                                <label style="font-size: 14px; cursor: pointer; display: flex; align-items: center; gap: 6px;">
                                    <input type="checkbox" name="target1_hit" <?php echo !empty($editingAnalysis['target1_hit']) ? 'checked' : ''; ?>> 
                                    <span style="color: var(--color-success);">TP1 Hit</span>
                                </label>
                                <label style="font-size: 14px; cursor: pointer; display: flex; align-items: center; gap: 6px;">
                                    <input type="checkbox" name="target2_hit" <?php echo !empty($editingAnalysis['target2_hit']) ? 'checked' : ''; ?>> 
                                    <span style="color: var(--color-success);">TP2 Hit</span>
                                </label>
                                <label style="font-size: 14px; cursor: pointer; display: flex; align-items: center; gap: 6px;">
                                    <input type="checkbox" name="target3_hit" <?php echo !empty($editingAnalysis['target3_hit']) ? 'checked' : ''; ?>> 
                                    <span style="color: var(--color-success);">TP3 Hit</span>
                                </label>
                            </div>
                        </div>

                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                            <div class="form-group">
                                <label for="riskLevel">Risk Level</label>
                                <select id="riskLevel" name="riskLevel">
                                    <option value="low" <?php echo ($editingAnalysis && isset($editingAnalysis['riskLevel']) && $editingAnalysis['riskLevel'] === 'low') ? 'selected' : ''; ?>>🛡️ Low Risk</option>
                                    <option value="medium" <?php echo ($editingAnalysis && isset($editingAnalysis['riskLevel']) && $editingAnalysis['riskLevel'] === 'medium') ? 'selected' : ''; ?>>⚖️ Medium Risk</option>
                                    <option value="high" <?php echo ($editingAnalysis && isset($editingAnalysis['riskLevel']) && $editingAnalysis['riskLevel'] === 'high') ? 'selected' : ''; ?>>⚡ High Risk</option>
                                    <option value="degen" <?php echo ($editingAnalysis && isset($editingAnalysis['riskLevel']) && $editingAnalysis['riskLevel'] === 'degen') ? 'selected' : ''; ?>>🎰 Degen Play</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="roiResult">ROI Result (Win Badge)</label>
                                <input type="text" id="roiResult" name="roiResult" 
                                       value="<?php echo htmlspecialchars($editingAnalysis['roiResult'] ?? ''); ?>" 
                                       placeholder="+35%" style="color: var(--color-success); font-weight: bold;">
                            </div>
                        </div>
                    </div>

                    <!-- AI/SEO Optimization Section -->
                    <div class="form-section-header" style="margin-top: 32px; padding-top: 20px; border-top: 2px dashed var(--color-line);">
                        <h3 style="color: var(--color-primary); margin-bottom: 20px;">🧠 AI & Voice Optimization (AIO/AEO)</h3>
                    </div>

                    <div class="form-group">
                        <label for="voiceQuestion">Voice Search Question (FAQ Schema)</label>
                        <input type="text" id="voiceQuestion" name="voiceQuestion" 
                               value="<?php echo htmlspecialchars($editingAnalysis['voiceQuestion'] ?? ''); ?>" 
                               placeholder="e.g. Is Solana a buy right now?">
                        <small>Users asking Siri/Google Assistant will trigger this answer.</small>
                    </div>

                    <div class="form-group">
                        <label for="voiceAnswer">Voice Search Answer</label>
                        <textarea id="voiceAnswer" name="voiceAnswer" style="min-height: 80px;"
                                  placeholder="Short, direct answer (under 40 words)."><?php echo htmlspecialchars($editingAnalysis['voiceAnswer'] ?? ''); ?></textarea>
                    </div>

                    <div class="form-group">
                        <label for="llmContext">LLM Context Snippet (Hidden)</label>
                        <textarea id="llmContext" name="llmContext" style="min-height: 80px;"
                                  placeholder="Context for ChatGPT/Claude scrapers. e.g. Yaga Calls sentiment on SOL is BULLISH. Target $200. "><?php echo htmlspecialchars($editingAnalysis['llmContext'] ?? ''); ?></textarea>
                        <small>This text is invisible to humans but highly prioritized by AI bots.</small>
                    </div>
                    
                    <div class="form-group">
                        <label for="seoTitle">SEO Title</label>
                        <input type="text" id="seoTitle" name="seoTitle" 
                               value="<?php echo htmlspecialchars($editingAnalysis['seoTitle'] ?? ''); ?>" 
                               placeholder="Auto-generated if left empty">
                        <small>Will be auto-generated based on hook and coin if left empty</small>
                    </div>
                    
                    <div class="form-group">
                        <label for="seoDescription">SEO Description</label>
                        <textarea id="seoDescription" name="seoDescription" 
                                  placeholder="Auto-generated if left empty"><?php echo htmlspecialchars($editingAnalysis['seoDescription'] ?? ''); ?></textarea>
                        <small>Will be auto-generated from content if left empty</small>
                    </div>
                    
                    <div class="form-group">
                        <label for="seoKeywords">SEO Keywords</label>
                        <input type="text" id="seoKeywords" name="seoKeywords" 
                               value="<?php echo htmlspecialchars($editingAnalysis['seoKeywords'] ?? ''); ?>" 
                               placeholder="Auto-generated if left empty">
                        <small>Comma-separated. Will be auto-generated if left empty</small>
                    </div>
                    
                    <div id="seoSuggestions" class="seo-suggestions" style="display: none;">
                        <h4>💡 SEO Suggestions</h4>
                        <p id="seoTitleSuggestion"></p>
                        <p id="seoDescSuggestion"></p>
                        <p id="seoKeywordsSuggestion"></p>
                    </div>
                    
                    <?php
                    // Generate AI suggestions if form has content
                    if (isset($_POST['content']) || ($editingAnalysis && isset($editingAnalysis['content']))) {
                        $content = $_POST['content'] ?? ($editingAnalysis ? ($editingAnalysis['content'] ?? '') : '');
                        $coin = $_POST['coin'] ?? ($editingAnalysis ? ($editingAnalysis['coin'] ?? '') : '');
                        $hook = $_POST['hook'] ?? ($editingAnalysis ? ($editingAnalysis['hook'] ?? '') : '');
                        
                        if ($content && $coin && $hook) {
                            $enhancements = enhanceContent($content, $coin, $hook);
                            $voiceSuggestions = generateVoiceQuerySuggestions($content, $coin, $hook);
                            $internalLinks = suggestInternalLinks($content, $coin);
                            $contentTemplates = getContentTemplates();
                    ?>
                    <div class="seo-suggestions" style="margin-top: 20px;">
                        <h4>🤖 AI Content Audit</h4>
                        
                        <?php if (isset($enhancements['quality_score'])): ?>
                        <div style="background: var(--color-surface); padding: 16px; border-radius: 8px; margin-bottom: 12px; border: 1px solid var(--color-line);">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                                <strong style="color: var(--color-text-high);">Quality Score:</strong>
                                <span style="font-size: 24px; font-weight: bold; color: <?php 
                                    $score = $enhancements['quality_score'];
                                    if ($score >= 80) echo '#22C55E';
                                    elseif ($score >= 70) echo '#E39E2E';
                                    elseif ($score >= 60) echo '#F59E0B';
                                    else echo '#EF4444';
                                ?>;"><?php echo $score; ?>/100</span>
                            </div>
                            <div style="font-size: 12px; color: var(--color-text-muted);">
                                Grade: <strong><?php echo htmlspecialchars($enhancements['quality_grade'] ?? 'N/A'); ?></strong>
                            </div>
                        </div>
                        <?php endif; ?>
                        
                        <?php if (isset($enhancements['readability'])): ?>
                        <div style="background: var(--color-surface); padding: 12px; border-radius: 8px; margin-bottom: 12px; border: 1px solid var(--color-line);">
                            <div style="font-size: 12px; color: var(--color-text-muted); margin-bottom: 4px;">Readability Score</div>
                            <div style="font-size: 18px; font-weight: bold; color: var(--color-primary);">
                                <?php echo $enhancements['readability']; ?> - <?php echo htmlspecialchars($enhancements['readability_level'] ?? 'N/A'); ?>
                            </div>
                        </div>
                        <?php endif; ?>
                        
                        <?php if (isset($enhancements['keyword_analysis']['density'])): ?>
                        <div style="background: var(--color-surface); padding: 12px; border-radius: 8px; margin-bottom: 12px; border: 1px solid var(--color-line);">
                            <div style="font-size: 12px; color: var(--color-text-muted); margin-bottom: 8px;">Keyword Density</div>
                            <?php foreach ($enhancements['keyword_analysis']['density'] as $term => $density): ?>
                                <div style="font-size: 11px; color: var(--color-text-high); margin: 2px 0;">
                                    <strong><?php echo htmlspecialchars($term); ?>:</strong> <?php echo $density; ?>%
                                </div>
                            <?php endforeach; ?>
                        </div>
                        <?php endif; ?>
                        
                        <div style="margin-top: 12px;">
                            <strong style="color: var(--color-text-high); font-size: 13px;">Improvements:</strong>
                            <?php foreach ($enhancements['improvements'] as $improvement): ?>
                                <p style="margin: 4px 0; font-size: 12px;"><?php echo htmlspecialchars($improvement); ?></p>
                            <?php endforeach; ?>
                            <?php foreach ($enhancements['seo'] as $seo): ?>
                                <p style="margin: 4px 0; font-size: 12px;"><?php echo htmlspecialchars($seo); ?></p>
                            <?php endforeach; ?>
                        </div>
                    </div>
                    
                    <div class="seo-suggestions" style="margin-top: 20px;">
                        <h4>🎤 Voice Search Optimization</h4>
                        <?php foreach ($voiceSuggestions as $suggestion): ?>
                            <p style="margin: 4px 0; font-size: 12px;"><?php echo htmlspecialchars($suggestion); ?></p>
                        <?php endforeach; ?>
                    </div>
                    
                    <?php if (isset($enhancements['prompt_matching'])): ?>
                    <div class="seo-suggestions" style="margin-top: 20px;">
                        <h4>🤖 AI Prompt Matching</h4>
                        <div style="background: var(--color-surface); padding: 12px; border-radius: 8px; margin-bottom: 12px; border: 1px solid var(--color-line);">
                            <div style="font-size: 12px; color: var(--color-text-muted); margin-bottom: 4px;">Prompt Alignment Score</div>
                            <div style="font-size: 18px; font-weight: bold; color: var(--color-primary);">
                                <?php echo $enhancements['prompt_matching']['score']; ?>/100
                            </div>
                            <?php if (!empty($enhancements['prompt_matching']['detected_patterns'])): ?>
                            <div style="font-size: 11px; color: var(--color-text-muted); margin-top: 8px;">
                                Detected patterns: <?php echo implode(', ', $enhancements['prompt_matching']['detected_patterns']); ?>
                            </div>
                            <?php endif; ?>
                        </div>
                        <?php foreach ($enhancements['prompt_matching']['suggestions'] as $suggestion): ?>
                            <p style="margin: 4px 0; font-size: 12px;"><?php echo htmlspecialchars($suggestion); ?></p>
                        <?php endforeach; ?>
                    </div>
                    <?php endif; ?>
                    
                    <?php if (!empty($internalLinks)): ?>
                    <div class="seo-suggestions" style="margin-top: 20px;">
                        <h4>🔗 Internal Linking Suggestions</h4>
                        <?php foreach ($internalLinks as $link): ?>
                            <p style="margin: 4px 0; font-size: 12px;">💡 Consider linking to <a href="<?php echo htmlspecialchars($link['url']); ?>" target="_blank" style="color: var(--color-primary);"><?php echo htmlspecialchars($link['text']); ?></a> - <?php echo htmlspecialchars($link['reason']); ?></p>
                        <?php endforeach; ?>
                    </div>
                    <?php endif; ?>
                    
                    <div class="seo-suggestions" style="margin-top: 20px;">
                        <h4>📝 Content Templates</h4>
                        <p style="font-size: 12px;">Available templates:</p>
                        <ul style="margin-left: 20px; color: var(--color-text-muted); font-size: 12px;">
                            <?php foreach ($contentTemplates as $key => $template): ?>
                                <li><strong><?php echo htmlspecialchars($template['name']); ?></strong>: <?php echo htmlspecialchars($template['hook_pattern']); ?></li>
                            <?php endforeach; ?>
                        </ul>
                    </div>
                    <?php
                        }
                    }
                    ?>
                    
                    <button type="submit" class="btn-primary"><?php echo $editingAnalysis ? 'Update Analysis' : 'Add Analysis'; ?></button>
                    <?php if ($editingAnalysis): ?>
                        <a href="admin.php" class="btn-secondary" style="margin-left: 12px;">Cancel</a>
                    <?php endif; ?>
                </form>
            </div>
            
            <!-- List Section -->
            <div class="list-section">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; flex-wrap: wrap; gap: 8px;">
                    <h2 style="color: var(--color-primary); margin: 0;">Existing Analyses (<?php echo count($analyses); ?>)</h2>
                    <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                        <a href="?tab=analytics" class="btn-secondary" style="font-size: 12px; padding: 6px 12px; <?php echo (($_GET['tab'] ?? '') === 'analytics') ? 'background: var(--color-primary); color: #001014;' : ''; ?>">Analytics</a>
                        <a href="?tab=scheduled" class="btn-secondary" style="font-size: 12px; padding: 6px 12px; <?php echo (($_GET['tab'] ?? '') === 'scheduled') ? 'background: var(--color-primary); color: #001014;' : ''; ?>">Scheduled</a>
                        <a href="?tab=clusters" class="btn-secondary" style="font-size: 12px; padding: 6px 12px; <?php echo (($_GET['tab'] ?? '') === 'clusters') ? 'background: var(--color-primary); color: #001014;' : ''; ?>">Topics</a>
                        <a href="?tab=news" class="btn-secondary" style="font-size: 12px; padding: 6px 12px; <?php echo (($_GET['tab'] ?? '') === 'news') ? 'background: var(--color-primary); color: #001014;' : ''; ?>">News</a>
                        <a href="?tab=offers" class="btn-secondary" style="font-size: 12px; padding: 6px 12px; <?php echo (($_GET['tab'] ?? '') === 'offers') ? 'background: var(--color-primary); color: #001014;' : ''; ?>">Offers</a>
                        <a href="ab-tests.php" class="btn-secondary" style="font-size: 12px; padding: 6px 12px;">A/B Tests</a>
                        <a href="dashboard.php" class="btn-secondary" style="font-size: 12px; padding: 6px 12px;">Dashboard</a>
                        <a href="admin.php" class="btn-secondary" style="font-size: 12px; padding: 6px 12px; <?php echo (($_GET['tab'] ?? '') === '') ? 'background: var(--color-primary); color: #001014;' : ''; ?>">All Posts</a>
                    </div>
                </div>
                
                <?php
                $activeTab = $_GET['tab'] ?? 'list';
                
                if ($activeTab === 'analytics'):
                    try {
                        $analyticsSummary = function_exists('getAnalyticsSummary') ? getAnalyticsSummary() : ['total_views' => 0, 'total_clicks' => 0, 'avg_ctr' => 0, 'top_posts' => []];
                    } catch (Exception $e) {
                        $analyticsSummary = ['total_views' => 0, 'total_clicks' => 0, 'avg_ctr' => 0, 'top_posts' => []];
                    } catch (Error $e) {
                        $analyticsSummary = ['total_views' => 0, 'total_clicks' => 0, 'avg_ctr' => 0, 'top_posts' => []];
                    }
                ?>
                <div class="seo-suggestions">
                    <h3 style="color: var(--color-primary); margin-bottom: 16px;">Engagement Analytics</h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; margin-bottom: 24px;">
                        <div style="background: var(--color-surface); padding: 16px; border-radius: 8px; border: 1px solid var(--color-line);">
                            <div style="font-size: 24px; font-weight: bold; color: var(--color-primary);"><?php echo number_format($analyticsSummary['total_views']); ?></div>
                            <div style="font-size: 12px; color: var(--color-text-muted);">Total Views</div>
                        </div>
                        <div style="background: var(--color-surface); padding: 16px; border-radius: 8px; border: 1px solid var(--color-line);">
                            <div style="font-size: 24px; font-weight: bold; color: var(--color-primary);"><?php echo number_format($analyticsSummary['total_clicks']); ?></div>
                            <div style="font-size: 12px; color: var(--color-text-muted);">Total Clicks</div>
                        </div>
                        <div style="background: var(--color-surface); padding: 16px; border-radius: 8px; border: 1px solid var(--color-line);">
                            <div style="font-size: 24px; font-weight: bold; color: var(--color-primary);"><?php echo $analyticsSummary['avg_ctr']; ?>%</div>
                            <div style="font-size: 12px; color: var(--color-text-muted);">Avg CTR</div>
                        </div>
                    </div>
                    
                    <?php if (!empty($analyticsSummary['top_posts'])): ?>
                    <h4 style="margin-top: 20px; color: var(--color-text-high);">Top Performing Posts</h4>
                    <div style="margin-top: 12px;">
                        <?php foreach ($analyticsSummary['top_posts'] as $post): ?>
                            <div style="padding: 12px; background: var(--color-surface); border-radius: 8px; margin-bottom: 8px; border: 1px solid var(--color-line);">
                                <div style="font-size: 14px; color: var(--color-text-high);">Post ID <?php echo $post['id']; ?></div>
                                <div style="font-size: 12px; color: var(--color-text-muted); margin-top: 4px;">
                                    <?php echo $post['views']; ?> views • 
                                    <?php echo $post['clicks']; ?> clicks • 
                                    <strong style="color: var(--color-primary);"><?php echo $post['ctr']; ?>% CTR</strong>
                                </div>
                                <?php if (isset($post['scroll_depth'])): ?>
                                <div style="font-size: 11px; color: var(--color-text-muted); margin-top: 6px; padding-top: 6px; border-top: 1px solid var(--color-line);">
                                    <strong>Scroll Depth:</strong> 
                                    25%: <?php echo $post['scroll_depth'][25] ?? 0; ?> • 
                                    50%: <?php echo $post['scroll_depth'][50] ?? 0; ?> • 
                                    75%: <?php echo $post['scroll_depth'][75] ?? 0; ?> • 
                                    100%: <?php echo $post['scroll_depth'][100] ?? 0; ?>
                                </div>
                                <?php endif; ?>
                                <?php if (isset($post['avg_dwell']) && $post['avg_dwell'] > 0): ?>
                                <div style="font-size: 11px; color: var(--color-text-muted); margin-top: 4px;">
                                    <strong>Avg Dwell Time:</strong> <?php echo $post['avg_dwell']; ?>s
                                </div>
                                <?php endif; ?>
                            </div>
                        <?php endforeach; ?>
                    </div>
                    <?php endif; ?>
                </div>
                
                <?php elseif ($activeTab === 'scheduled'):
                    try {
                        $scheduled = function_exists('getScheduledPosts') ? getScheduledPosts() : [];
                    } catch (Exception $e) {
                        $scheduled = [];
                    } catch (Error $e) {
                        $scheduled = [];
                    }
                ?>
                <div class="seo-suggestions">
                    <h3 style="color: var(--color-primary); margin-bottom: 16px;">Scheduled Posts (<?php echo count($scheduled); ?>)</h3>
                    <?php if (empty($scheduled)): ?>
                        <p style="color: var(--color-text-muted);">No scheduled posts. Use the "Schedule for later publication" option when adding/editing posts.</p>
                    <?php else: ?>
                        <?php foreach ($scheduled as $post): ?>
                            <div style="padding: 16px; background: var(--color-surface); border-radius: 8px; margin-bottom: 12px; border: 1px solid var(--color-line);">
                                <div style="font-weight: 600; color: var(--color-text-high); margin-bottom: 8px;"><?php echo htmlspecialchars($post['hook']); ?></div>
                                <div style="font-size: 12px; color: var(--color-text-muted);">
                                    <strong>Coin:</strong> <?php echo htmlspecialchars($post['coin']); ?> | 
                                    <strong>Scheduled:</strong> <?php echo date('M d, Y H:i', strtotime($post['scheduledPublish'])); ?>
                                </div>
                                <div style="margin-top: 8px;">
                                    <a href="?edit=<?php echo $post['id']; ?>" class="btn-secondary" style="font-size: 12px; padding: 4px 8px;">Edit</a>
                                </div>
                            </div>
                        <?php endforeach; ?>
                    <?php endif; ?>
                </div>
                
                <?php elseif ($activeTab === 'clusters'):
                    try {
                        $clusters = function_exists('getTopicalClusters') ? getTopicalClusters() : [];
                    } catch (Exception $e) {
                        $clusters = [];
                    } catch (Error $e) {
                        $clusters = [];
                    }
                ?>
                <div class="seo-suggestions">
                    <h3 style="color: var(--color-primary); margin-bottom: 16px;">Topical Clusters</h3>
                    <p style="font-size: 12px; color: var(--color-text-muted); margin-bottom: 16px;">Content organized by topics for better SEO and internal linking</p>
                    <?php foreach ($clusters as $key => $cluster): ?>
                        <div style="margin-bottom: 16px; padding: 16px; background: var(--color-surface); border-radius: 8px; border: 1px solid var(--color-line);">
                            <div style="font-weight: 600; color: var(--color-primary); margin-bottom: 8px;"><?php echo htmlspecialchars($cluster['name']); ?></div>
                            <div style="font-size: 12px; color: var(--color-text-muted);">
                                <strong><?php echo count($cluster['analyses']); ?></strong> analyses in this cluster
                            </div>
                            <?php if (!empty($cluster['keywords'])): ?>
                                <div style="margin-top: 8px; font-size: 11px; color: var(--color-text-muted);">
                                    Keywords: <?php echo implode(', ', array_slice($cluster['keywords'], 0, 5)); ?>
                                </div>
                            <?php endif; ?>
                        </div>
                    <?php endforeach; ?>
                </div>
                
                <?php elseif ($activeTab === 'news'):
                    // Load news data
                    $newsFile = __DIR__ . '/../data/news.json';
                    $news = [];
                    if (file_exists($newsFile)) {
                        $newsContent = @file_get_contents($newsFile);
                        if ($newsContent !== false) {
                            $decoded = @json_decode($newsContent, true);
                            if (json_last_error() === JSON_ERROR_NONE && is_array($decoded)) {
                                $news = $decoded;
                            }
                        }
                    }
                    
                    // Handle news actions
                    if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['news_action'])) {
                        if ($_POST['news_action'] === 'fetch') {
                            require_once __DIR__ . '/news-fetcher.php';
                            $force = isset($_POST['force_fetch']) && $_POST['force_fetch'] === '1';
                            $result = fetchNews($force);
                            $message = $result['message'] ?? ($result['success'] ? 'News fetched successfully' : ($result['error'] ?? 'Unknown error'));
                            $messageType = $result['success'] ? 'success' : 'error';
                            // Reload news
                            $newsContent = @file_get_contents($newsFile);
                            if ($newsContent !== false) {
                                $decoded = @json_decode($newsContent, true);
                                if (json_last_error() === JSON_ERROR_NONE && is_array($decoded)) {
                                    $news = $decoded;
                                }
                            }
                        } elseif ($_POST['news_action'] === 'cleanup') {
                            require_once __DIR__ . '/news-cleanup.php';
                            $result = cleanupOldNews();
                            $message = $result['message'] ?? ($result['success'] ? 'Cleanup completed' : ($result['error'] ?? 'Unknown error'));
                            $messageType = $result['success'] ? 'success' : 'error';
                            // Reload news
                            $newsContent = @file_get_contents($newsFile);
                            if ($newsContent !== false) {
                                $decoded = @json_decode($newsContent, true);
                                if (json_last_error() === JSON_ERROR_NONE && is_array($decoded)) {
                                    $news = $decoded;
                                }
                            }
                        } elseif ($_POST['news_action'] === 'delete' && isset($_POST['news_id'])) {
                            $newsId = $_POST['news_id'];
                            $news = array_filter($news, function($article) use ($newsId) {
                                return ($article['id'] ?? '') !== $newsId;
                            });
                            $news = array_values($news);
                            $jsonData = @json_encode($news, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
                            if ($jsonData !== false) {
                                @file_put_contents($newsFile, $jsonData);
                                $message = 'News article deleted successfully!';
                                $messageType = 'success';
                            } else {
                                $message = 'Error: Failed to delete news article.';
                                $messageType = 'error';
                            }
                        }
                    }
                ?>
                <div class="seo-suggestions">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; flex-wrap: wrap; gap: 12px;">
                        <h3 style="color: var(--color-primary); margin: 0;">News Management (<?php echo count($news); ?>)</h3>
                        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                            <form method="POST" style="display: inline;">
                                <input type="hidden" name="news_action" value="fetch">
                                <button type="submit" class="btn-secondary" style="font-size: 12px; padding: 6px 12px;">Fetch News</button>
                            </form>
                            <form method="POST" style="display: inline;">
                                <input type="hidden" name="news_action" value="fetch">
                                <input type="hidden" name="force_fetch" value="1">
                                <button type="submit" class="btn-secondary" style="font-size: 12px; padding: 6px 12px;">Force Fetch</button>
                            </form>
                            <form method="POST" style="display: inline;" onsubmit="return confirm('Are you sure you want to cleanup old news (older than 2 days)?');">
                                <input type="hidden" name="news_action" value="cleanup">
                                <button type="submit" class="btn-secondary" style="font-size: 12px; padding: 6px 12px;">Cleanup Old</button>
                            </form>
                        </div>
                    </div>
                    
                    <?php if (empty($news)): ?>
                        <p style="color: var(--color-text-muted);">No news articles. Click "Fetch News" to fetch articles from APIs.</p>
                    <?php else: ?>
                        <div style="margin-top: 16px;">
                            <?php foreach ($news as $article): ?>
                                <div style="padding: 16px; background: var(--color-surface); border-radius: 8px; margin-bottom: 12px; border: 1px solid var(--color-line);">
                                    <div style="font-weight: 600; color: var(--color-text-high); margin-bottom: 8px;">
                                        <?php echo htmlspecialchars($article['title'] ?? 'Untitled'); ?>
                                    </div>
                                    <div style="font-size: 12px; color: var(--color-text-muted); margin-bottom: 8px;">
                                        <strong>Source:</strong> <?php echo htmlspecialchars($article['sourceName'] ?? $article['source'] ?? 'Unknown'); ?> | 
                                        <strong>Date:</strong> <?php echo isset($article['date']) ? date('M d, Y H:i', strtotime($article['date'])) : 'N/A'; ?>
                                    </div>
                                    <?php if (!empty($article['description'])): ?>
                                        <div style="font-size: 13px; color: var(--color-text); margin-bottom: 8px; line-height: 1.5;">
                                            <?php echo htmlspecialchars(substr($article['description'], 0, 200)) . (strlen($article['description']) > 200 ? '...' : ''); ?>
                                        </div>
                                    <?php endif; ?>
                                    <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                                        <?php if (!empty($article['url'])): ?>
                                            <a href="<?php echo htmlspecialchars($article['url']); ?>" target="_blank" rel="noopener" class="btn-secondary" style="font-size: 11px; padding: 4px 8px;">View Article</a>
                                        <?php endif; ?>
                                        <form method="POST" style="display: inline;" onsubmit="return confirm('Are you sure you want to delete this news article?');">
                                            <input type="hidden" name="news_action" value="delete">
                                            <input type="hidden" name="news_id" value="<?php echo htmlspecialchars($article['id'] ?? ''); ?>">
                                            <button type="submit" class="btn-danger" style="font-size: 11px; padding: 4px 8px;">Delete</button>
                                        </form>
                                    </div>
                                </div>
                            <?php endforeach; ?>
                        </div>
                    <?php endif; ?>
                </div>
                
                <?php elseif ($activeTab === 'offers'):
                    // Load offers data
                    $offersFile = __DIR__ . '/../data/offers.json';
                    $offers = [];
                    if (file_exists($offersFile)) {
                        $offersContent = @file_get_contents($offersFile);
                        if ($offersContent !== false) {
                            $decoded = @json_decode($offersContent, true);
                            if (json_last_error() === JSON_ERROR_NONE && is_array($decoded)) {
                                $offers = $decoded;
                            }
                        }
                    }
                    
                    // Handle offers actions
                    if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['offer_action'])) {
                        if ($_POST['offer_action'] === 'add') {
                            $newOffer = [
                                'id' => uniqid(),
                                'title' => trim($_POST['offer_title'] ?? ''),
                                'message' => trim($_POST['offer_message'] ?? ''),
                                'redirectUrl' => trim($_POST['offer_redirect_url'] ?? ''),
                                'active' => isset($_POST['offer_active']) && $_POST['offer_active'] === '1',
                                'image' => $_POST['existing_offer_image'] ?? '',
                                'createdAt' => date('Y-m-d H:i:s'),
                                'updatedAt' => date('Y-m-d H:i:s')
                            ];
                            
                            // Handle image upload
                            if (isset($_FILES['offer_image']) && $_FILES['offer_image']['error'] === UPLOAD_ERR_OK) {
                                $uploadDir = __DIR__ . '/../assets/offer-images/';
                                
                                // Create upload directory if it doesn't exist
                                if (!file_exists($uploadDir)) {
                                    if (!@mkdir($uploadDir, 0755, true)) {
                                        $message = 'Error: Cannot create images directory. Please check permissions.';
                                        $messageType = 'error';
                                    }
                                }
                                
                                // Verify directory is writable
                                if (file_exists($uploadDir) && is_writable($uploadDir)) {
                                    $fileExtension = strtolower(pathinfo($_FILES['offer_image']['name'], PATHINFO_EXTENSION));
                                    $allowedExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp'];
                                    
                                    if (in_array($fileExtension, $allowedExtensions)) {
                                        $fileName = 'offer-' . time() . '-' . uniqid() . '.' . $fileExtension;
                                        $filePath = $uploadDir . $fileName;
                                        
                                        if (@move_uploaded_file($_FILES['offer_image']['tmp_name'], $filePath)) {
                                            $newOffer['image'] = '/assets/offer-images/' . $fileName;
                                        } else {
                                            $message = 'Warning: Image upload failed. Offer saved without image.';
                                            $messageType = 'error';
                                        }
                                    } else {
                                        $message = 'Warning: Invalid image format. Only JPG, PNG, GIF, and WebP are allowed.';
                                        $messageType = 'error';
                                    }
                                } else {
                                    $message = 'Warning: Images directory is not writable. Offer saved without image.';
                                    $messageType = 'error';
                                }
                            }
                            
                            if (!empty($newOffer['title']) && !empty($newOffer['redirectUrl'])) {
                                $offers[] = $newOffer;
                                $jsonData = @json_encode($offers, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
                                if ($jsonData !== false) {
                                    @file_put_contents($offersFile, $jsonData);
                                    $message = 'Offer added successfully!';
                                    $messageType = 'success';
                                    // Reload offers
                                    $offersContent = @file_get_contents($offersFile);
                                    if ($offersContent !== false) {
                                        $decoded = @json_decode($offersContent, true);
                                        if (json_last_error() === JSON_ERROR_NONE && is_array($decoded)) {
                                            $offers = $decoded;
                                        }
                                    }
                                } else {
                                    $message = 'Error: Failed to save offer.';
                                    $messageType = 'error';
                                }
                            } else {
                                $message = 'Error: Title and Redirect URL are required.';
                                $messageType = 'error';
                            }
                        } elseif ($_POST['offer_action'] === 'delete' && isset($_POST['offer_id'])) {
                            $offerId = $_POST['offer_id'];
                            $offers = array_filter($offers, function($offer) use ($offerId) {
                                return ($offer['id'] ?? '') !== $offerId;
                            });
                            $offers = array_values($offers);
                            $jsonData = @json_encode($offers, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
                            if ($jsonData !== false) {
                                @file_put_contents($offersFile, $jsonData);
                                $message = 'Offer deleted successfully!';
                                $messageType = 'success';
                            } else {
                                $message = 'Error: Failed to delete offer.';
                                $messageType = 'error';
                            }
                        } elseif ($_POST['offer_action'] === 'toggle' && isset($_POST['offer_id'])) {
                            $offerId = $_POST['offer_id'];
                            foreach ($offers as &$offer) {
                                if (($offer['id'] ?? '') === $offerId) {
                                    $offer['active'] = !($offer['active'] ?? false);
                                    $offer['updatedAt'] = date('Y-m-d H:i:s');
                                    break;
                                }
                            }
                            $jsonData = @json_encode($offers, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
                            if ($jsonData !== false) {
                                @file_put_contents($offersFile, $jsonData);
                                $message = 'Offer status updated!';
                                $messageType = 'success';
                            } else {
                                $message = 'Error: Failed to update offer.';
                                $messageType = 'error';
                            }
                        }
                    }
                ?>
                <div class="seo-suggestions">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; flex-wrap: wrap; gap: 12px;">
                        <h3 style="color: var(--color-primary); margin: 0;">Offer Popups (<?php echo count($offers); ?>)</h3>
                    </div>
                    
                    <div style="background: var(--color-surface); padding: 16px; border-radius: 8px; margin-bottom: 20px; border: 1px solid var(--color-line);">
                        <h4 style="color: var(--color-primary); margin-bottom: 12px;">Add New Offer</h4>
                        <form method="POST" enctype="multipart/form-data">
                            <input type="hidden" name="offer_action" value="add">
                            <div class="form-group" style="margin-bottom: 12px;">
                                <label for="offer_title" style="display: block; margin-bottom: 4px; font-size: 13px; color: var(--color-text-high);">Title *</label>
                                <input type="text" id="offer_title" name="offer_title" required 
                                       style="width: 100%; padding: 8px; background: var(--color-surface-deep); border: 1px solid var(--color-line); border-radius: 6px; color: var(--color-text-high); font-size: 13px;"
                                       placeholder="e.g., Special Discount Offer">
                            </div>
                            <div class="form-group" style="margin-bottom: 12px;">
                                <label for="offer_message" style="display: block; margin-bottom: 4px; font-size: 13px; color: var(--color-text-high);">Message</label>
                                <textarea id="offer_message" name="offer_message" 
                                          style="width: 100%; padding: 8px; background: var(--color-surface-deep); border: 1px solid var(--color-line); border-radius: 6px; color: var(--color-text-high); font-size: 13px; min-height: 80px; resize: vertical;"
                                          placeholder="e.g., Get 50% off on premium signals! Limited time offer."></textarea>
                            </div>
                            <div class="form-group" style="margin-bottom: 12px;">
                                <label for="offer_image" style="display: block; margin-bottom: 4px; font-size: 13px; color: var(--color-text-high);">Image</label>
                                <input type="file" id="offer_image" name="offer_image" accept="image/*"
                                       style="width: 100%; padding: 8px; background: var(--color-surface-deep); border: 1px solid var(--color-line); border-radius: 6px; color: var(--color-text-high); font-size: 13px;">
                                <small style="display: block; margin-top: 4px; font-size: 11px; color: var(--color-text-muted);">Upload an image for the offer popup (optional). JPG, PNG, GIF, WebP supported.</small>
                            </div>
                            <div class="form-group" style="margin-bottom: 12px;">
                                <label for="offer_redirect_url" style="display: block; margin-bottom: 4px; font-size: 13px; color: var(--color-text-high);">Redirect URL *</label>
                                <input type="url" id="offer_redirect_url" name="offer_redirect_url" required 
                                       style="width: 100%; padding: 8px; background: var(--color-surface-deep); border: 1px solid var(--color-line); border-radius: 6px; color: var(--color-text-high); font-size: 13px;"
                                       placeholder="https://t.me/yagacalls or https://example.com">
                                <small style="display: block; margin-top: 4px; font-size: 11px; color: var(--color-text-muted);">Where users will be redirected when they click the offer</small>
                            </div>
                            <div class="form-group" style="margin-bottom: 12px;">
                                <label style="display: flex; align-items: center; gap: 8px; font-size: 13px; color: var(--color-text-high);">
                                    <input type="checkbox" name="offer_active" value="1" checked>
                                    Active (show on homepage)
                                </label>
                            </div>
                            <button type="submit" class="btn-primary" style="font-size: 13px; padding: 8px 16px;">Add Offer</button>
                        </form>
                    </div>
                    
                    <?php if (empty($offers)): ?>
                        <p style="color: var(--color-text-muted);">No offers yet. Add your first offer popup above.</p>
                    <?php else: ?>
                        <div style="margin-top: 16px;">
                            <h4 style="color: var(--color-text-high); margin-bottom: 12px;">Existing Offers</h4>
                            <?php foreach ($offers as $offer): ?>
                                <div style="padding: 16px; background: var(--color-surface); border-radius: 8px; margin-bottom: 12px; border: 1px solid var(--color-line);">
                                    <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 8px; gap: 16px;">
                                        <?php if (!empty($offer['image'])): ?>
                                            <div style="flex-shrink: 0;">
                                                <img src="<?php echo htmlspecialchars($offer['image']); ?>" alt="Offer image" style="width: 120px; height: 120px; object-fit: cover; border-radius: 8px; border: 1px solid var(--color-line);">
                                            </div>
                                        <?php endif; ?>
                                        <div style="flex: 1;">
                                            <div style="font-weight: 600; color: var(--color-text-high); margin-bottom: 4px;">
                                                <?php echo htmlspecialchars($offer['title'] ?? 'Untitled'); ?>
                                                <?php if (isset($offer['active']) && $offer['active']): ?>
                                                    <span style="color: #22C55E; font-size: 11px; margin-left: 8px;">● Active</span>
                                                <?php else: ?>
                                                    <span style="color: var(--color-text-muted); font-size: 11px; margin-left: 8px;">○ Inactive</span>
                                                <?php endif; ?>
                                            </div>
                                            <?php if (!empty($offer['message'])): ?>
                                                <div style="font-size: 13px; color: var(--color-text); margin-bottom: 8px; line-height: 1.5;">
                                                    <?php echo htmlspecialchars($offer['message']); ?>
                                                </div>
                                            <?php endif; ?>
                                            <div style="font-size: 12px; color: var(--color-text-muted); margin-bottom: 8px;">
                                                <strong>Redirect:</strong> <a href="<?php echo htmlspecialchars($offer['redirectUrl'] ?? ''); ?>" target="_blank" rel="noopener" style="color: var(--color-primary);"><?php echo htmlspecialchars($offer['redirectUrl'] ?? 'N/A'); ?></a>
                                            </div>
                                            <?php if (!empty($offer['image'])): ?>
                                                <div style="font-size: 11px; color: var(--color-text-muted); margin-bottom: 4px;">
                                                    <strong>Image:</strong> <a href="<?php echo htmlspecialchars($offer['image']); ?>" target="_blank" rel="noopener" style="color: var(--color-primary);">View</a>
                                                </div>
                                            <?php endif; ?>
                                            <div style="font-size: 11px; color: var(--color-text-muted);">
                                                Created: <?php echo isset($offer['createdAt']) ? date('M d, Y H:i', strtotime($offer['createdAt'])) : 'N/A'; ?>
                                            </div>
                                        </div>
                                    </div>
                                    <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-top: 12px;">
                                        <form method="POST" style="display: inline;">
                                            <input type="hidden" name="offer_action" value="toggle">
                                            <input type="hidden" name="offer_id" value="<?php echo htmlspecialchars($offer['id'] ?? ''); ?>">
                                            <button type="submit" class="btn-secondary" style="font-size: 11px; padding: 4px 8px;">
                                                <?php echo (isset($offer['active']) && $offer['active']) ? 'Deactivate' : 'Activate'; ?>
                                            </button>
                                        </form>
                                        <form method="POST" style="display: inline;" onsubmit="return confirm('Are you sure you want to delete this offer?');">
                                            <input type="hidden" name="offer_action" value="delete">
                                            <input type="hidden" name="offer_id" value="<?php echo htmlspecialchars($offer['id'] ?? ''); ?>">
                                            <button type="submit" class="btn-danger" style="font-size: 11px; padding: 4px 8px;">Delete</button>
                                        </form>
                                    </div>
                                </div>
                            <?php endforeach; ?>
                        </div>
                    <?php endif; ?>
                </div>
                
                <?php else: ?>
                
                <div class="analysis-list">
                    <?php if (empty($analyses)): ?>
                        <p style="color: var(--color-text-muted);">No analyses yet. Add your first one!</p>
                    <?php else: ?>
                        <?php foreach ($analyses as $analysis): ?>
                            <div class="analysis-item">
                                <div class="analysis-item-header">
                                    <div>
                                        <div class="analysis-item-title"><?php echo htmlspecialchars($analysis['hook']); ?></div>
                                        <div class="analysis-item-meta">
                                            <?php echo htmlspecialchars($analysis['coin']); ?> • 
                                            <?php echo date('M d, Y', strtotime($analysis['date'])); ?>
                                            <?php if (isset($analysis['scheduledPublish']) && (!isset($analysis['published']) || $analysis['published'] !== true)): ?>
                                                <span style="color: var(--color-warning);"> • Scheduled</span>
                                            <?php endif; ?>
                                        </div>
                                    </div>
                                </div>
                                <div class="analysis-item-actions">
                                    <a href="?edit=<?php echo $analysis['id']; ?>" class="btn-secondary">Edit</a>
                                    <a href="repurpose-view.php?id=<?php echo $analysis['id']; ?>" class="btn-secondary" style="font-size: 11px;" target="_blank">Repurpose</a>
                                    <?php if (isset($analysis['scheduledPublish'])): ?>
                                        <a href="?tab=scheduled" class="btn-secondary" style="font-size: 11px;">View Schedule</a>
                                    <?php endif; ?>
                                    <form method="POST" style="display: inline;" onsubmit="return confirm('Are you sure you want to delete this analysis?');">
                                        <input type="hidden" name="action" value="delete">
                                        <input type="hidden" name="id" value="<?php echo $analysis['id']; ?>">
                                        <button type="submit" class="btn-danger">Delete</button>
                                    </form>
                                </div>
                            </div>
                        <?php endforeach; ?>
                    <?php endif; ?>
                </div>
                <?php endif; ?>
            </div>
        </div>
    </div>
    
    <script>
        // Auto-generate SEO fields
        document.getElementById('hook').addEventListener('input', generateSEO);
        document.getElementById('coin').addEventListener('input', generateSEO);
        document.getElementById('content').addEventListener('input', generateSEO);
        
        function generateSEO() {
            const hook = document.getElementById('hook').value;
            const coin = document.getElementById('coin').value.toUpperCase();
            const content = document.getElementById('content').value;
            
            if (!hook || !coin) return;
            
            // Generate SEO Title
            if (!document.getElementById('seoTitle').value) {
                const seoTitle = `${coin} ${hook} | Crypto Analysis | Yaga Calls`;
                document.getElementById('seoTitle').placeholder = seoTitle;
            }
            
            // Generate SEO Description
            if (!document.getElementById('seoDescription').value) {
                let desc = content.substring(0, 155).replace(/\n/g, ' ').trim();
                if (content.length > 155) desc += '...';
                if (!desc) desc = `${coin} price analysis and trading insights from Yaga Calls.`;
                document.getElementById('seoDescription').placeholder = desc;
            }
            
            // Generate Keywords
            if (!document.getElementById('seoKeywords').value) {
                const keywords = [
                    coin.toLowerCase(),
                    coin.toLowerCase() + ' analysis',
                    'crypto analysis',
                    'cryptocurrency',
                    'trading signals',
                    'bitcoin analysis',
                    'altcoin analysis'
                ].join(', ');
                document.getElementById('seoKeywords').placeholder = keywords;
            }
            
            // Show suggestions
            const suggestions = document.getElementById('seoSuggestions');
            suggestions.style.display = 'block';
            document.getElementById('seoTitleSuggestion').textContent = 'Title: ' + (document.getElementById('seoTitle').value || document.getElementById('seoTitle').placeholder);
            document.getElementById('seoDescSuggestion').textContent = 'Description: ' + (document.getElementById('seoDescription').value || document.getElementById('seoDescription').placeholder);
            document.getElementById('seoKeywordsSuggestion').textContent = 'Keywords: ' + (document.getElementById('seoKeywords').value || document.getElementById('seoKeywords').placeholder);
        }
        
        // Auto-fill SEO fields on form submit if empty
        document.getElementById('analysisForm').addEventListener('submit', function(e) {
            const hook = document.getElementById('hook').value;
            const coin = document.getElementById('coin').value.toUpperCase();
            const content = document.getElementById('content').value;
            
            if (!document.getElementById('seoTitle').value) {
                document.getElementById('seoTitle').value = `${coin} ${hook} | Crypto Analysis | Yaga Calls`;
            }
            
            if (!document.getElementById('seoDescription').value) {
                let desc = content.substring(0, 155).replace(/\n/g, ' ').trim();
                if (content.length > 155) desc += '...';
                if (!desc) desc = `${coin} price analysis and trading insights from Yaga Calls.`;
                document.getElementById('seoDescription').value = desc;
            }
            
            if (!document.getElementById('seoKeywords').value) {
                const keywords = [
                    coin.toLowerCase(),
                    coin.toLowerCase() + ' analysis',
                    'crypto analysis',
                    'cryptocurrency',
                    'trading signals',
                    'bitcoin analysis',
                    'altcoin analysis'
                ].join(', ');
                document.getElementById('seoKeywords').value = keywords;
            }
        });
        
        // Initial SEO generation
        if (document.getElementById('hook').value || document.getElementById('coin').value) {
            generateSEO();
        }
        
        // Toggle schedule fields
        function toggleScheduleFields() {
            const checkbox = document.getElementById('schedulePublish');
            const fields = document.getElementById('scheduleFields');
            fields.style.display = checkbox.checked ? 'block' : 'none';
        }
        
        // Generate AI Draft
        function generateAIDraft() {
            const coin = document.getElementById('coin').value;
            const draftType = document.getElementById('draftType').value;
            
            if (!coin) {
                alert('Please enter a coin symbol first');
                return;
            }
            
            if (!draftType) {
                alert('Please select a template');
                return;
            }
            
            // Make AJAX request to generate draft
            fetch('ai-draft-generate.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: 'coin=' + encodeURIComponent(coin) + '&type=' + encodeURIComponent(draftType)
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    document.getElementById('hook').value = data.draft.hook;
                    document.getElementById('content').value = data.draft.content;
                    document.getElementById('seoTitle').value = data.draft.seoTitle;
                    document.getElementById('seoDescription').value = data.draft.seoDescription;
                    document.getElementById('seoKeywords').value = data.draft.seoKeywords;
                    document.getElementById('linkUrl').value = data.draft.linkUrl;
                    document.getElementById('linkText').value = data.draft.linkText;
                    alert('AI Draft generated! Review and edit as needed.');
                } else {
                    alert('Error generating draft: ' + (data.error || 'Unknown error'));
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Error generating draft. Please try again.');
            });
        }
        
        // Check scheduled posts on page load
        setInterval(function() {
            // Auto-process scheduled posts every minute
            fetch('scheduler-processor.php?process=1')
                .then(response => response.text())
                .catch(error => console.error('Scheduler check failed:', error));
        }, 60000); // Check every minute
    </script>
</body>
</html>

