<?php
/**
 * Topical Cluster System
 * Organizes content by topics and creates topic clusters for better SEO
 */

/**
 * Get topical clusters from existing analyses
 */
function getTopicalClusters() {
    $dataFile = __DIR__ . '/../data/analysis.json';
    
    if (!file_exists($dataFile)) {
        return [];
    }
    
    $jsonContent = @file_get_contents($dataFile);
    if ($jsonContent === false) {
        return [];
    }
    
    $analyses = @json_decode($jsonContent, true);
    if (json_last_error() !== JSON_ERROR_NONE) {
        return [];
    }
    
    $analyses = $analyses ?: [];
    
    // Define topic clusters
    $clusters = [
        'bitcoin' => [
            'name' => 'Bitcoin Analysis',
            'keywords' => ['btc', 'bitcoin', 'btc analysis', 'bitcoin price'],
            'analyses' => []
        ],
        'ethereum' => [
            'name' => 'Ethereum Analysis',
            'keywords' => ['eth', 'ethereum', 'eth analysis', 'ethereum price'],
            'analyses' => []
        ],
        'altcoins' => [
            'name' => 'Altcoin Analysis',
            'keywords' => ['altcoin', 'alt', 'sol', 'ada', 'dot', 'matic'],
            'analyses' => []
        ],
        'technical_analysis' => [
            'name' => 'Technical Analysis',
            'keywords' => ['support', 'resistance', 'ema', 'rsi', 'breakout', 'trend'],
            'analyses' => []
        ],
        'market_updates' => [
            'name' => 'Market Updates',
            'keywords' => ['market', 'update', 'news', 'reaction', 'movement'],
            'analyses' => []
        ],
        'trading_signals' => [
            'name' => 'Trading Signals',
            'keywords' => ['signal', 'call', 'entry', 'exit', 'target', 'stop'],
            'analyses' => []
        ]
    ];
    
    // Categorize analyses into clusters
    foreach ($analyses as $analysis) {
        $content = strtolower(($analysis['hook'] ?? '') . ' ' . ($analysis['content'] ?? ''));
        $coin = strtolower($analysis['coin'] ?? '');
        
        // Check each cluster
        foreach ($clusters as $key => &$cluster) {
            $matched = false;
            
            // Check coin match
            if ($key === 'bitcoin' && $coin === 'btc') {
                $matched = true;
            } elseif ($key === 'ethereum' && $coin === 'eth') {
                $matched = true;
            } elseif ($key === 'altcoins' && !in_array($coin, ['btc', 'eth'])) {
                $matched = true;
            }
            
            // Check keyword match
            foreach ($cluster['keywords'] as $keyword) {
                if (stripos($content, $keyword) !== false) {
                    $matched = true;
                    break;
                }
            }
            
            if ($matched) {
                $cluster['analyses'][] = $analysis;
            }
        }
    }
    
    return $clusters;
}

/**
 * Suggest related topics for a new analysis
 */
function suggestRelatedTopics($coin, $content) {
    $clusters = getTopicalClusters();
    $contentLower = strtolower($content);
    $coinLower = strtolower($coin);
    
    $suggestions = [];
    
    foreach ($clusters as $key => $cluster) {
        $score = 0;
        
        // Check coin match
        if ($key === 'bitcoin' && $coinLower === 'btc') {
            $score += 10;
        } elseif ($key === 'ethereum' && $coinLower === 'eth') {
            $score += 10;
        } elseif ($key === 'altcoins' && !in_array($coinLower, ['btc', 'eth'])) {
            $score += 10;
        }
        
        // Check keyword matches
        foreach ($cluster['keywords'] as $keyword) {
            if (stripos($contentLower, $keyword) !== false) {
                $score += 2;
            }
        }
        
        if ($score > 0) {
            $suggestions[] = [
                'topic' => $cluster['name'],
                'key' => $key,
                'score' => $score,
                'related_count' => count($cluster['analyses'])
            ];
        }
    }
    
    // Sort by score
    usort($suggestions, function($a, $b) {
        return $b['score'] - $a['score'];
    });
    
    return array_slice($suggestions, 0, 3);
}

/**
 * Generate internal links to related topics
 */
function generateTopicClusterLinks($coin, $content) {
    $topics = suggestRelatedTopics($coin, $content);
    $links = [];
    
    foreach ($topics as $topic) {
        if ($topic['related_count'] > 0) {
            $links[] = [
                'text' => 'More ' . $topic['topic'],
                'url' => '/analysis?topic=' . urlencode($topic['key']),
                'count' => $topic['related_count']
            ];
        }
    }
    
    return $links;
}

