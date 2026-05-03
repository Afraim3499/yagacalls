<?php
/**
 * Futuristic CMS Dashboard Homepage
 * Central hub for all CMS features, analytics, and tracking
 */
session_start();

$CMS_PASSWORD = 'yaga_calls_2025';
$CMS_USERNAME = 'admin';

if (!isset($_SESSION['cms_logged_in']) || $_SESSION['cms_logged_in'] !== true) {
    header('Location: admin.php');
    exit;
}

require_once __DIR__ . '/analytics.php';
require_once __DIR__ . '/scheduler.php';
require_once __DIR__ . '/topical-clusters.php';

// Get analytics summary
$analyticsSummary = getAnalyticsSummary();

// Get scheduled posts
$scheduled = getScheduledPosts();

// Get topical clusters
$clusters = getTopicalClusters();

// Get analysis count
$dataFile = __DIR__ . '/../data/analysis.json';
$analyses = [];
if (file_exists($dataFile)) {
    $jsonContent = @file_get_contents($dataFile);
    if ($jsonContent !== false) {
        $analyses = @json_decode($jsonContent, true) ?: [];
    }
}

// Get A/B tests
$abTestsFile = __DIR__ . '/../data/ab-tests.json';
$abTests = [];
if (file_exists($abTestsFile)) {
    $jsonContent = @file_get_contents($abTestsFile);
    if ($jsonContent !== false) {
        $abTests = @json_decode($jsonContent, true) ?: [];
    }
}

// Get performance data
$performanceFile = __DIR__ . '/../data/performance.json';
$performance = [];
if (file_exists($performanceFile)) {
    $jsonContent = @file_get_contents($performanceFile);
    if ($jsonContent !== false) {
        $performance = @json_decode($jsonContent, true) ?: [];
    }
}

// Calculate stats
$totalPosts = count($analyses);
$publishedPosts = count(array_filter($analyses, function($a) { return ($a['published'] ?? true) === true; }));
$scheduledCount = count($scheduled);
$activeABTests = count(array_filter($abTests, function($t) { return ($t['active'] ?? true) === true; }));

// Calculate performance averages
$avgLCP = 0;
$avgFID = 0;
$avgCLS = 0;
if (!empty($performance)) {
    foreach ($performance as $page => $data) {
        if (isset($data['_averages'])) {
            $avgLCP += $data['_averages']['lcp']['avg'] ?? 0;
            $avgFID += $data['_averages']['fid']['avg'] ?? 0;
            $avgCLS += $data['_averages']['cls']['avg'] ?? 0;
        }
    }
    $pageCount = count($performance);
    if ($pageCount > 0) {
        $avgLCP = round($avgLCP / $pageCount, 0);
        $avgFID = round($avgFID / $pageCount, 0);
        $avgCLS = round($avgCLS / $pageCount, 3);
    }
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CMS Dashboard | Yaga Calls</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        :root {
            --bg-primary: #0A0B0D;
            --bg-secondary: #0F1217;
            --bg-surface: #151A21;
            --bg-glass: rgba(21, 26, 33, 0.7);
            --border: #1E242C;
            --text-primary: #EAF2FF;
            --text-secondary: #A7B0C0;
            --accent: #E39E2E;
            --accent-glow: rgba(227, 158, 46, 0.3);
            --success: #22C55E;
            --warning: #F59E0B;
            --danger: #EF4444;
            --gradient-1: linear-gradient(135deg, #E39E2E 0%, #F59E0B 100%);
            --gradient-2: linear-gradient(135deg, #0A0B0D 0%, #151A21 100%);
        }
        
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            background: var(--bg-primary);
            color: var(--text-primary);
            overflow-x: hidden;
            position: relative;
        }
        
        /* Animated background */
        .bg-animation {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
            background: var(--bg-primary);
            overflow: hidden;
        }
        
        .bg-animation::before {
            content: '';
            position: absolute;
            width: 500px;
            height: 500px;
            background: radial-gradient(circle, var(--accent-glow) 0%, transparent 70%);
            top: -250px;
            left: -250px;
            animation: float 20s ease-in-out infinite;
        }
        
        .bg-animation::after {
            content: '';
            position: absolute;
            width: 400px;
            height: 400px;
            background: radial-gradient(circle, rgba(34, 197, 94, 0.2) 0%, transparent 70%);
            bottom: -200px;
            right: -200px;
            animation: float 15s ease-in-out infinite reverse;
        }
        
        @keyframes float {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            33% { transform: translate(30px, -30px) rotate(120deg); }
            66% { transform: translate(-20px, 20px) rotate(240deg); }
        }
        
        .container {
            position: relative;
            z-index: 1;
            max-width: 1600px;
            margin: 0 auto;
            padding: 40px 20px;
        }
        
        /* Header */
        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 40px;
            padding: 20px 0;
            border-bottom: 1px solid var(--border);
        }
        
        .header h1 {
            font-size: 32px;
            font-weight: 700;
            background: var(--gradient-1);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: glow 2s ease-in-out infinite alternate;
        }
        
        @keyframes glow {
            from { filter: drop-shadow(0 0 10px var(--accent-glow)); }
            to { filter: drop-shadow(0 0 20px var(--accent-glow)); }
        }
        
        .header-nav {
            display: flex;
            gap: 12px;
        }
        
        .btn {
            padding: 10px 20px;
            border: 1px solid var(--border);
            background: var(--bg-surface);
            color: var(--text-primary);
            text-decoration: none;
            border-radius: 8px;
            font-size: 14px;
            transition: all 0.3s ease;
            cursor: pointer;
        }
        
        .btn:hover {
            background: var(--accent);
            border-color: var(--accent);
            transform: translateY(-2px);
            box-shadow: 0 4px 12px var(--accent-glow);
        }
        
        .btn-primary {
            background: var(--gradient-1);
            border: none;
            color: #001014;
            font-weight: 600;
        }
        
        /* Stats Grid */
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-bottom: 40px;
        }
        
        .stat-card {
            background: var(--bg-glass);
            backdrop-filter: blur(10px);
            border: 1px solid var(--border);
            border-radius: 16px;
            padding: 24px;
            position: relative;
            overflow: hidden;
            transition: all 0.3s ease;
            animation: slideUp 0.6s ease-out;
        }
        
        .stat-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background: var(--gradient-1);
            transform: scaleX(0);
            transition: transform 0.3s ease;
        }
        
        .stat-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
            border-color: var(--accent);
        }
        
        .stat-card:hover::before {
            transform: scaleX(1);
        }
        
        @keyframes slideUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .stat-label {
            font-size: 12px;
            color: var(--text-secondary);
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 8px;
        }
        
        .stat-value {
            font-size: 36px;
            font-weight: 700;
            color: var(--accent);
            margin-bottom: 4px;
            font-variant-numeric: tabular-nums;
        }
        
        .stat-change {
            font-size: 12px;
            color: var(--success);
        }
        
        /* Charts Grid */
        .charts-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
            gap: 20px;
            margin-bottom: 40px;
        }
        
        .chart-card {
            background: var(--bg-glass);
            backdrop-filter: blur(10px);
            border: 1px solid var(--border);
            border-radius: 16px;
            padding: 24px;
            animation: slideUp 0.8s ease-out;
        }
        
        .chart-card h3 {
            font-size: 18px;
            margin-bottom: 20px;
            color: var(--text-primary);
        }
        
        .chart-container {
            height: 200px;
            position: relative;
        }
        
        /* Mini Chart */
        .mini-chart {
            display: flex;
            align-items: flex-end;
            justify-content: space-around;
            height: 150px;
            gap: 4px;
        }
        
        .bar {
            flex: 1;
            background: var(--gradient-1);
            border-radius: 4px 4px 0 0;
            min-height: 4px;
            animation: growUp 1s ease-out;
            transition: all 0.3s ease;
        }
        
        .bar:hover {
            opacity: 0.8;
            transform: scaleY(1.1);
        }
        
        @keyframes growUp {
            from {
                height: 0;
            }
        }
        
        /* Top Posts */
        .top-posts {
            background: var(--bg-glass);
            backdrop-filter: blur(10px);
            border: 1px solid var(--border);
            border-radius: 16px;
            padding: 24px;
            margin-bottom: 40px;
            animation: slideUp 1s ease-out;
        }
        
        .top-posts h3 {
            font-size: 18px;
            margin-bottom: 20px;
            color: var(--text-primary);
        }
        
        .post-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 12px;
            margin-bottom: 8px;
            background: var(--bg-surface);
            border-radius: 8px;
            border: 1px solid var(--border);
            transition: all 0.3s ease;
        }
        
        .post-item:hover {
            border-color: var(--accent);
            transform: translateX(4px);
        }
        
        .post-stats {
            display: flex;
            gap: 16px;
            font-size: 12px;
            color: var(--text-secondary);
        }
        
        /* Performance Metrics */
        .performance-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-bottom: 40px;
        }
        
        .perf-card {
            background: var(--bg-glass);
            backdrop-filter: blur(10px);
            border: 1px solid var(--border);
            border-radius: 16px;
            padding: 20px;
            text-align: center;
        }
        
        .perf-value {
            font-size: 28px;
            font-weight: 700;
            margin: 8px 0;
        }
        
        .perf-value.good { color: var(--success); }
        .perf-value.warning { color: var(--warning); }
        .perf-value.bad { color: var(--danger); }
        
        /* Quick Actions */
        .quick-actions {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
        }
        
        .action-card {
            background: var(--bg-glass);
            backdrop-filter: blur(10px);
            border: 1px solid var(--border);
            border-radius: 16px;
            padding: 24px;
            text-align: center;
            transition: all 0.3s ease;
            cursor: pointer;
            text-decoration: none;
            color: var(--text-primary);
            display: block;
        }
        
        .action-card:hover {
            transform: translateY(-4px);
            border-color: var(--accent);
            box-shadow: 0 8px 24px var(--accent-glow);
        }
        
        .action-icon {
            font-size: 32px;
            margin-bottom: 12px;
        }
        
        .action-title {
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 4px;
        }
        
        .action-desc {
            font-size: 12px;
            color: var(--text-secondary);
        }
        
        /* Responsive */
        @media (max-width: 768px) {
            .header {
                flex-direction: column;
                gap: 20px;
            }
            
            .stats-grid,
            .charts-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="bg-animation"></div>
    
    <div class="container">
        <header class="header">
            <h1>🚀 CMS Dashboard</h1>
            <nav class="header-nav">
                <a href="admin.php" class="btn">Content</a>
                <a href="admin.php?tab=analytics" class="btn">Analytics</a>
                <a href="ab-tests.php" class="btn">A/B Tests</a>
                <a href="admin.php?tab=scheduled" class="btn">Scheduled</a>
                <a href="admin.php?tab=clusters" class="btn">Topics</a>
                <a href="admin.php?logout=1" class="btn">Logout</a>
            </nav>
        </header>
        
        <!-- Stats Grid -->
        <div class="stats-grid">
            <div class="stat-card" style="animation-delay: 0.1s">
                <div class="stat-label">Total Posts</div>
                <div class="stat-value"><?php echo $totalPosts; ?></div>
                <div class="stat-change"><?php echo $publishedPosts; ?> published</div>
            </div>
            
            <div class="stat-card" style="animation-delay: 0.2s">
                <div class="stat-label">Total Views</div>
                <div class="stat-value"><?php echo number_format($analyticsSummary['total_views']); ?></div>
                <div class="stat-change"><?php echo number_format($analyticsSummary['total_clicks']); ?> clicks</div>
            </div>
            
            <div class="stat-card" style="animation-delay: 0.3s">
                <div class="stat-label">Avg CTR</div>
                <div class="stat-value"><?php echo $analyticsSummary['avg_ctr']; ?>%</div>
                <div class="stat-change">Engagement rate</div>
            </div>
            
            <div class="stat-card" style="animation-delay: 0.4s">
                <div class="stat-label">Scheduled</div>
                <div class="stat-value"><?php echo $scheduledCount; ?></div>
                <div class="stat-change">Upcoming posts</div>
            </div>
            
            <div class="stat-card" style="animation-delay: 0.5s">
                <div class="stat-label">A/B Tests</div>
                <div class="stat-value"><?php echo $activeABTests; ?></div>
                <div class="stat-change">Active tests</div>
            </div>
            
            <div class="stat-card" style="animation-delay: 0.6s">
                <div class="stat-label">Topics</div>
                <div class="stat-value"><?php echo count($clusters); ?></div>
                <div class="stat-change">Content clusters</div>
            </div>
        </div>
        
        <!-- Charts Grid -->
        <div class="charts-grid">
            <div class="chart-card">
                <h3>📊 Engagement Trends</h3>
                <div class="chart-container">
                    <div class="mini-chart">
                        <?php 
                        $topPosts = array_slice($analyticsSummary['top_posts'], 0, 7);
                        $maxViews = !empty($topPosts) ? max(array_column($topPosts, 'views')) : 1;
                        foreach ($topPosts as $post): 
                            $height = ($post['views'] / $maxViews) * 100;
                        ?>
                            <div class="bar" style="height: <?php echo $height; ?>%" title="Post <?php echo $post['id']; ?>: <?php echo $post['views']; ?> views"></div>
                        <?php endforeach; ?>
                    </div>
                </div>
            </div>
            
            <div class="chart-card">
                <h3>📈 Scroll Depth</h3>
                <div class="chart-container">
                    <div class="mini-chart">
                        <?php 
                        if (!empty($topPosts)):
                            $maxScroll = 0;
                            foreach ($topPosts as $post) {
                                $maxScroll = max($maxScroll, $post['scroll_depth'][100] ?? 0);
                            }
                            $maxScroll = max($maxScroll, 1);
                            foreach ($topPosts as $post): 
                                $height = (($post['scroll_depth'][100] ?? 0) / $maxScroll) * 100;
                        ?>
                            <div class="bar" style="height: <?php echo $height; ?>%" title="Post <?php echo $post['id']; ?>: <?php echo $post['scroll_depth'][100] ?? 0; ?> reached 100%"></div>
                        <?php 
                            endforeach;
                        endif;
                        ?>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Performance Metrics -->
        <div class="performance-grid">
            <div class="perf-card">
                <div style="font-size: 12px; color: var(--text-secondary); margin-bottom: 8px;">LCP</div>
                <div class="perf-value <?php echo $avgLCP < 2500 ? 'good' : ($avgLCP < 4000 ? 'warning' : 'bad'); ?>">
                    <?php echo $avgLCP > 0 ? $avgLCP . 'ms' : 'N/A'; ?>
                </div>
                <div style="font-size: 11px; color: var(--text-secondary);">Largest Contentful Paint</div>
            </div>
            
            <div class="perf-card">
                <div style="font-size: 12px; color: var(--text-secondary); margin-bottom: 8px;">FID</div>
                <div class="perf-value <?php echo $avgFID < 100 ? 'good' : ($avgFID < 300 ? 'warning' : 'bad'); ?>">
                    <?php echo $avgFID > 0 ? $avgFID . 'ms' : 'N/A'; ?>
                </div>
                <div style="font-size: 11px; color: var(--text-secondary);">First Input Delay</div>
            </div>
            
            <div class="perf-card">
                <div style="font-size: 12px; color: var(--text-secondary); margin-bottom: 8px;">CLS</div>
                <div class="perf-value <?php echo $avgCLS < 0.1 ? 'good' : ($avgCLS < 0.25 ? 'warning' : 'bad'); ?>">
                    <?php echo $avgCLS > 0 ? $avgCLS : 'N/A'; ?>
                </div>
                <div style="font-size: 11px; color: var(--text-secondary);">Cumulative Layout Shift</div>
            </div>
        </div>
        
        <!-- Top Posts -->
        <?php if (!empty($analyticsSummary['top_posts'])): ?>
        <div class="top-posts">
            <h3>🔥 Top Performing Posts</h3>
            <?php foreach (array_slice($analyticsSummary['top_posts'], 0, 5) as $post): ?>
                <div class="post-item">
                    <div>
                        <strong>Post ID <?php echo $post['id']; ?></strong>
                        <div class="post-stats">
                            <span>👁️ <?php echo $post['views']; ?> views</span>
                            <span>👆 <?php echo $post['clicks']; ?> clicks</span>
                            <span>📊 <?php echo $post['ctr']; ?>% CTR</span>
                            <?php if (isset($post['avg_dwell']) && $post['avg_dwell'] > 0): ?>
                                <span>⏱️ <?php echo $post['avg_dwell']; ?>s avg</span>
                            <?php endif; ?>
                        </div>
                    </div>
                    <a href="admin.php?edit=<?php echo $post['id']; ?>" class="btn" style="padding: 6px 12px; font-size: 12px;">Edit</a>
                </div>
            <?php endforeach; ?>
        </div>
        <?php endif; ?>
        
        <!-- Quick Actions -->
        <div class="quick-actions">
            <a href="admin.php" class="action-card">
                <div class="action-icon">✍️</div>
                <div class="action-title">Create Post</div>
                <div class="action-desc">Add new analysis</div>
            </a>
            
            <a href="admin.php?tab=analytics" class="action-card">
                <div class="action-icon">📊</div>
                <div class="action-title">Analytics</div>
                <div class="action-desc">View detailed metrics</div>
            </a>
            
            <a href="ab-tests.php" class="action-card">
                <div class="action-icon">🧪</div>
                <div class="action-title">A/B Tests</div>
                <div class="action-desc">Manage experiments</div>
            </a>
            
            <a href="admin.php?tab=scheduled" class="action-card">
                <div class="action-icon">📅</div>
                <div class="action-title">Schedule</div>
                <div class="action-desc">Plan content</div>
            </a>
            
            <a href="admin.php?tab=clusters" class="action-card">
                <div class="action-icon">🗂️</div>
                <div class="action-title">Topics</div>
                <div class="action-desc">Content clusters</div>
            </a>
        </div>
    </div>
    
    <script>
        // Auto-refresh every 30 seconds
        setTimeout(() => {
            location.reload();
        }, 30000);
        
        // Add smooth animations on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        document.querySelectorAll('.stat-card, .chart-card, .top-posts').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'all 0.6s ease-out';
            observer.observe(el);
        });
    </script>
</body>
</html>

