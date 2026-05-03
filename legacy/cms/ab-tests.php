<?php
/**
 * A/B Testing Management Interface
 */
session_start();

$CMS_PASSWORD = 'yaga_calls_2025';
$CMS_USERNAME = 'admin';

if (!isset($_SESSION['cms_logged_in']) || $_SESSION['cms_logged_in'] !== true) {
    header('Location: admin.php');
    exit;
}

$abTestsFile = __DIR__ . '/../data/ab-tests.json';
$abTests = [];

if (file_exists($abTestsFile)) {
    $jsonContent = @file_get_contents($abTestsFile);
    if ($jsonContent !== false) {
        $abTests = @json_decode($jsonContent, true) ?: [];
    }
}

// Handle form submission
$message = '';
$messageType = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['action'])) {
    if ($_POST['action'] === 'create') {
        $testId = trim($_POST['test_id'] ?? '');
        $testName = trim($_POST['test_name'] ?? '');
        $variants = $_POST['variants'] ?? [];
        
        if ($testId && $testName && !empty($variants)) {
            $abTests[$testId] = [
                'name' => $testName,
                'variants' => array_filter($variants),
                'assignments' => [],
                'conversions' => [],
                'created_at' => date('Y-m-d H:i:s'),
                'active' => true
            ];
            
            $saved = @file_put_contents($abTestsFile, json_encode($abTests, JSON_PRETTY_PRINT), LOCK_EX);
            if ($saved !== false) {
                $message = 'A/B test created successfully!';
                $messageType = 'success';
            } else {
                $message = 'Failed to save A/B test.';
                $messageType = 'error';
            }
        }
    } elseif ($_POST['action'] === 'toggle') {
        $testId = $_POST['test_id'] ?? '';
        if (isset($abTests[$testId])) {
            $abTests[$testId]['active'] = !($abTests[$testId]['active'] ?? true);
            @file_put_contents($abTestsFile, json_encode($abTests, JSON_PRETTY_PRINT), LOCK_EX);
            $message = 'Test status updated.';
            $messageType = 'success';
        }
    } elseif ($_POST['action'] === 'delete') {
        $testId = $_POST['test_id'] ?? '';
        if (isset($abTests[$testId])) {
            unset($abTests[$testId]);
            @file_put_contents($abTestsFile, json_encode($abTests, JSON_PRETTY_PRINT), LOCK_EX);
            $message = 'A/B test deleted.';
            $messageType = 'success';
        }
    }
}

// Calculate conversion rates
function calculateConversionRate($assignments, $conversions) {
    if (empty($assignments) || empty($conversions)) {
        return 0;
    }
    
    $totalAssignments = array_sum($assignments);
    $totalConversions = 0;
    
    foreach ($conversions as $variant => $types) {
        $totalConversions += array_sum($types);
    }
    
    return $totalAssignments > 0 ? round(($totalConversions / $totalAssignments) * 100, 2) : 0;
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>A/B Testing | CMS</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            background: #0A0B0D;
            color: #EAF2FF;
            padding: 20px;
            line-height: 1.6;
        }
        .container { max-width: 1200px; margin: 0 auto; }
        h1 { color: #E39E2E; margin-bottom: 20px; }
        .message {
            padding: 12px 16px;
            border-radius: 8px;
            margin-bottom: 20px;
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
        .btn {
            padding: 8px 16px;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            font-size: 14px;
            text-decoration: none;
            display: inline-block;
        }
        .btn-primary {
            background: #E39E2E;
            color: #001014;
            font-weight: 600;
        }
        .btn-secondary {
            background: #151A21;
            border: 1px solid #1E242C;
            color: #EAF2FF;
        }
        .btn-danger {
            background: rgba(239, 68, 68, 0.1);
            border: 1px solid rgba(239, 68, 68, 0.3);
            color: #EF4444;
        }
        .test-card {
            background: #151A21;
            border: 1px solid #1E242C;
            border-radius: 8px;
            padding: 20px;
            margin-bottom: 16px;
        }
        .test-header {
            display: flex;
            justify-content: space-between;
            align-items: start;
            margin-bottom: 16px;
        }
        .test-name {
            font-size: 18px;
            font-weight: 600;
            color: #EAF2FF;
            margin-bottom: 4px;
        }
        .test-id {
            font-size: 12px;
            color: #A7B0C0;
        }
        .test-stats {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 16px;
            margin-top: 16px;
        }
        .stat-box {
            background: #0F1217;
            padding: 12px;
            border-radius: 6px;
            border: 1px solid #1E242C;
        }
        .stat-label {
            font-size: 11px;
            color: #A7B0C0;
            text-transform: uppercase;
            margin-bottom: 4px;
        }
        .stat-value {
            font-size: 20px;
            font-weight: 600;
            color: #E39E2E;
        }
        .variant-table {
            width: 100%;
            margin-top: 16px;
            border-collapse: collapse;
        }
        .variant-table th,
        .variant-table td {
            padding: 8px 12px;
            text-align: left;
            border-bottom: 1px solid #1E242C;
        }
        .variant-table th {
            font-size: 12px;
            color: #A7B0C0;
            text-transform: uppercase;
        }
        .variant-table td {
            font-size: 14px;
            color: #EAF2FF;
        }
        .form-group {
            margin-bottom: 16px;
        }
        .form-group label {
            display: block;
            margin-bottom: 6px;
            color: #EAF2FF;
            font-size: 14px;
        }
        .form-group input {
            width: 100%;
            padding: 10px 12px;
            background: #151A21;
            border: 1px solid #1E242C;
            border-radius: 6px;
            color: #EAF2FF;
            font-size: 14px;
        }
        .badge {
            display: inline-block;
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 11px;
            font-weight: 600;
        }
        .badge.active {
            background: rgba(34, 197, 94, 0.1);
            color: #22C55E;
        }
        .badge.inactive {
            background: rgba(167, 176, 192, 0.1);
            color: #A7B0C0;
        }
    </style>
</head>
<body>
    <div class="container">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; flex-wrap: wrap; gap: 12px;">
            <h1>A/B Testing Management</h1>
            <div style="display: flex; gap: 8px;">
                <a href="dashboard.php" class="btn btn-primary" style="background: #E39E2E; color: #001014; font-weight: 600;">🚀 Dashboard</a>
                <a href="admin.php" class="btn btn-secondary">← Back to CMS</a>
            </div>
        </div>
        
        <?php if ($message): ?>
            <div class="message <?php echo $messageType; ?>">
                <?php echo htmlspecialchars($message); ?>
            </div>
        <?php endif; ?>
        
        <div style="margin: 30px 0;">
            <h2 style="color: #E39E2E; margin-bottom: 16px;">Create New Test</h2>
            <form method="POST" style="background: #151A21; padding: 20px; border-radius: 8px; border: 1px solid #1E242C;">
                <input type="hidden" name="action" value="create">
                <div class="form-group">
                    <label>Test ID (unique identifier)</label>
                    <input type="text" name="test_id" required placeholder="e.g., headline-test-1">
                </div>
                <div class="form-group">
                    <label>Test Name</label>
                    <input type="text" name="test_name" required placeholder="e.g., Headline Variation Test">
                </div>
                <div class="form-group">
                    <label>Variants (one per line)</label>
                    <textarea name="variants[]" rows="4" style="width: 100%; padding: 10px 12px; background: #151A21; border: 1px solid #1E242C; border-radius: 6px; color: #EAF2FF; font-size: 14px;" placeholder="variant-a&#10;variant-b&#10;variant-c"></textarea>
                    <small style="color: #A7B0C0; font-size: 12px; margin-top: 4px; display: block;">Enter variant IDs, one per line</small>
                </div>
                <button type="submit" class="btn btn-primary">Create Test</button>
            </form>
        </div>
        
        <div style="margin-top: 40px;">
            <h2 style="color: #E39E2E; margin-bottom: 16px;">Active Tests</h2>
            
            <?php if (empty($abTests)): ?>
                <p style="color: #A7B0C0;">No A/B tests created yet.</p>
            <?php else: ?>
                <?php foreach ($abTests as $testId => $test): ?>
                    <div class="test-card">
                        <div class="test-header">
                            <div>
                                <div class="test-name"><?php echo htmlspecialchars($test['name'] ?? 'Unnamed Test'); ?></div>
                                <div class="test-id">ID: <?php echo htmlspecialchars($testId); ?></div>
                            </div>
                            <div>
                                <span class="badge <?php echo ($test['active'] ?? true) ? 'active' : 'inactive'; ?>">
                                    <?php echo ($test['active'] ?? true) ? 'Active' : 'Inactive'; ?>
                                </span>
                            </div>
                        </div>
                        
                        <div class="test-stats">
                            <div class="stat-box">
                                <div class="stat-label">Total Assignments</div>
                                <div class="stat-value"><?php echo array_sum($test['assignments'] ?? []); ?></div>
                            </div>
                            <div class="stat-box">
                                <div class="stat-label">Total Conversions</div>
                                <div class="stat-value">
                                    <?php
                                    $totalConversions = 0;
                                    foreach ($test['conversions'] ?? [] as $variant => $types) {
                                        $totalConversions += array_sum($types);
                                    }
                                    echo $totalConversions;
                                    ?>
                                </div>
                            </div>
                            <div class="stat-box">
                                <div class="stat-label">Conversion Rate</div>
                                <div class="stat-value">
                                    <?php echo calculateConversionRate($test['assignments'] ?? [], $test['conversions'] ?? []); ?>%
                                </div>
                            </div>
                        </div>
                        
                        <table class="variant-table">
                            <thead>
                                <tr>
                                    <th>Variant</th>
                                    <th>Assignments</th>
                                    <th>Conversions</th>
                                    <th>Conversion Rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                <?php foreach ($test['variants'] ?? [] as $variant): ?>
                                    <tr>
                                        <td><strong><?php echo htmlspecialchars($variant); ?></strong></td>
                                        <td><?php echo $test['assignments'][$variant] ?? 0; ?></td>
                                        <td>
                                            <?php
                                            $variantConversions = 0;
                                            foreach ($test['conversions'][$variant] ?? [] as $type => $count) {
                                                $variantConversions += $count;
                                            }
                                            echo $variantConversions;
                                            ?>
                                        </td>
                                        <td>
                                            <?php
                                            $assignments = $test['assignments'][$variant] ?? 0;
                                            $rate = $assignments > 0 ? round(($variantConversions / $assignments) * 100, 2) : 0;
                                            echo $rate . '%';
                                            ?>
                                        </td>
                                    </tr>
                                <?php endforeach; ?>
                            </tbody>
                        </table>
                        
                        <div style="margin-top: 16px; display: flex; gap: 8px;">
                            <form method="POST" style="display: inline;">
                                <input type="hidden" name="action" value="toggle">
                                <input type="hidden" name="test_id" value="<?php echo htmlspecialchars($testId); ?>">
                                <button type="submit" class="btn btn-secondary">
                                    <?php echo ($test['active'] ?? true) ? 'Deactivate' : 'Activate'; ?>
                                </button>
                            </form>
                            <form method="POST" style="display: inline;" onsubmit="return confirm('Are you sure you want to delete this test?');">
                                <input type="hidden" name="action" value="delete">
                                <input type="hidden" name="test_id" value="<?php echo htmlspecialchars($testId); ?>">
                                <button type="submit" class="btn btn-danger">Delete</button>
                            </form>
                        </div>
                    </div>
                <?php endforeach; ?>
            <?php endif; ?>
        </div>
    </div>
</body>
</html>

