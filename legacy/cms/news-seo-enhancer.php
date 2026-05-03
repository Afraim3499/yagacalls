<?php
/**
 * News SEO Enhancer - Adds unique value and SEO optimization to news articles
 * - Generates unique summaries
 * - Adds internal links to related analyses
 * - Creates related content suggestions
 * - Enhances structured data
 */

/**
 * Generate a unique summary/commentary for a news article
 * This adds original content to avoid duplicate content issues
 */
function generateUniqueSummary($article, $allAnalyses = []) {
    $title = $article['title'] ?? '';
    $description = $article['description'] ?? '';
    $sourceName = $article['sourceName'] ?? $article['source'] ?? 'News Source';
    
    // Extract coin mentions from title and description
    $coinMentions = extractCoinMentions($title . ' ' . $description);
    
    // Find related analyses
    $relatedAnalyses = findRelatedAnalyses($coinMentions, $allAnalyses);
    
    // Build unique summary with internal context
    $summary = '';
    
    // Add original commentary
    if (!empty($coinMentions)) {
        $coins = implode(', ', array_slice($coinMentions, 0, 3));
        $summary .= "This breaking news from {$sourceName} highlights significant developments for {$coins}. ";
    } else {
        $summary .= "This breaking news from {$sourceName} covers important cryptocurrency market developments. ";
    }
    
    // Add connection to our analyses if available
    if (!empty($relatedAnalyses)) {
        $relatedCount = count($relatedAnalyses);
        $summary .= "Our recent market analysis has been tracking similar trends. ";
    }
    
    // Add call-to-action
    $summary .= "Stay ahead of market movements with our expert trading signals and real-time analysis.";
    
    return $summary;
}

/**
 * Extract cryptocurrency mentions from text
 */
function extractCoinMentions($text) {
    $coins = [
        'Bitcoin', 'BTC', 'Ethereum', 'ETH', 'Solana', 'SOL', 'Cardano', 'ADA',
        'Polkadot', 'DOT', 'Chainlink', 'LINK', 'Polygon', 'MATIC', 'Avalanche', 'AVAX',
        'Cosmos', 'ATOM', 'Algorand', 'ALGO', 'Tezos', 'XTZ', 'Zcash', 'ZEC',
        'DUSK', 'SUI', 'BNB', 'XRP', 'DOGE', 'SHIB', 'LTC', 'BCH'
    ];
    
    $found = [];
    $textUpper = strtoupper($text);
    
    foreach ($coins as $coin) {
        $coinUpper = strtoupper($coin);
        if (stripos($text, $coin) !== false || 
            preg_match('/\b' . preg_quote($coinUpper, '/') . '\b/', $textUpper)) {
            $found[] = $coin;
        }
    }
    
    return array_unique($found);
}

/**
 * Find related analyses based on coin mentions
 */
function findRelatedAnalyses($coinMentions, $allAnalyses, $limit = 3) {
    if (empty($coinMentions) || empty($allAnalyses)) {
        return [];
    }
    
    $related = [];
    
    foreach ($allAnalyses as $analysis) {
        $analysisCoin = isset($analysis['coin']) ? strtoupper($analysis['coin']) : '';
        $analysisContent = isset($analysis['content']) ? strtoupper($analysis['content']) : '';
        $analysisHook = isset($analysis['hook']) ? strtoupper($analysis['hook']) : '';
        
        foreach ($coinMentions as $coin) {
            $coinUpper = strtoupper($coin);
            
            // Check if coin matches or is mentioned in content
            if ($analysisCoin === $coinUpper || 
                stripos($analysisContent, $coinUpper) !== false ||
                stripos($analysisHook, $coinUpper) !== false) {
                
                if (!in_array($analysis, $related, true)) {
                    $related[] = $analysis;
                    if (count($related) >= $limit) {
                        break 2;
                    }
                }
            }
        }
    }
    
    return $related;
}

/**
 * Generate internal links HTML for related analyses
 */
function generateRelatedAnalysesLinks($relatedAnalyses, $limit = 3) {
    if (empty($relatedAnalyses)) {
        return '';
    }
    
    $links = array_slice($relatedAnalyses, 0, $limit);
    $html = '<div class="related-analyses" style="margin-top: 16px; padding-top: 16px; border-top: 1px solid var(--color-line);">';
    $html .= '<p style="font-size: 12px; color: var(--color-text-muted); margin-bottom: 8px; font-weight: 600;">Related Analysis:</p>';
    $html .= '<ul style="list-style: none; padding: 0; margin: 0;">';
    
    foreach ($links as $analysis) {
        $hook = htmlspecialchars($analysis['hook'] ?? 'View Analysis');
        $coin = htmlspecialchars($analysis['coin'] ?? '');
        $date = isset($analysis['date']) ? date('M d', strtotime($analysis['date'])) : '';
        
        $html .= '<li style="margin-bottom: 6px;">';
        $html .= '<a href="/analysis#' . urlencode(strtolower(str_replace(' ', '-', $coin))) . '" style="color: var(--color-primary); text-decoration: none; font-size: 13px;">';
        $html .= htmlspecialchars($hook);
        if ($date) {
            $html .= ' <span style="color: var(--color-text-muted);">(' . $date . ')</span>';
        }
        $html .= '</a>';
        $html .= '</li>';
    }
    
    $html .= '</ul>';
    $html .= '</div>';
    
    return $html;
}

/**
 * Add internal links to news description
 */
function addInternalLinksToNews($description, $coinMentions) {
    if (empty($coinMentions)) {
        return $description;
    }
    
    // Link to analysis page for coin mentions
    foreach ($coinMentions as $coin) {
        $pattern = '/\b' . preg_quote($coin, '/') . '\b/i';
        $replacement = '<a href="/analysis#' . urlencode(strtolower(str_replace(' ', '-', $coin))) . '" rel="internal" style="color: var(--color-primary); text-decoration: underline;">' . $coin . '</a>';
        $description = preg_replace($pattern, $replacement, $description, 1); // Only first occurrence
    }
    
    // Link to method page if technical terms mentioned
    $technicalTerms = ['support', 'resistance', 'entry', 'exit', 'trading', 'signal'];
    foreach ($technicalTerms as $term) {
        if (stripos($description, $term) !== false && stripos($description, '/method') === false) {
            $description = preg_replace('/\b(' . preg_quote($term, '/') . ')\b/i', 
                '<a href="/method" rel="internal" style="color: var(--color-primary);">$1</a>', 
                $description, 1);
            break;
        }
    }
    
    return $description;
}

/**
 * Generate enhanced structured data for a news article
 */
function generateNewsArticleSchema($article, $relatedAnalyses = []) {
    $articleTime = isset($article['date']) ? strtotime($article['date']) : time();
    
    $schema = [
        '@context' => 'https://schema.org',
        '@type' => 'NewsArticle',
        'headline' => $article['title'] ?? '',
        'description' => $article['description'] ?? '',
        'image' => $article['image'] ?? '',
        'datePublished' => date('c', $articleTime),
        'dateModified' => date('c', $articleTime),
        'author' => [
            '@type' => 'Organization',
            'name' => $article['sourceName'] ?? $article['source'] ?? 'News Source'
        ],
        'publisher' => [
            '@type' => 'Organization',
            'name' => 'Yaga Calls',
            'logo' => [
                '@type' => 'ImageObject',
                'url' => 'https://yagacalls.com/yaga_calls_logo.jpg'
            ]
        ],
        'mainEntityOfPage' => [
            '@type' => 'WebPage',
            '@id' => $article['url'] ?? ''
        ],
        'url' => $article['url'] ?? ''
    ];
    
    // Add related analyses if available
    if (!empty($relatedAnalyses)) {
        $schema['mentions'] = [];
        foreach (array_slice($relatedAnalyses, 0, 3) as $analysis) {
            $schema['mentions'][] = [
                '@type' => 'Article',
                'headline' => $analysis['hook'] ?? '',
                'url' => 'https://yagacalls.com/analysis#' . urlencode(strtolower(str_replace(' ', '-', $analysis['coin'] ?? '')))
            ];
        }
    }
    
    return $schema;
}

/**
 * Enhance news article with SEO improvements
 */
function enhanceNewsArticle($article, $allAnalyses = []) {
    // Extract coin mentions
    $coinMentions = extractCoinMentions(($article['title'] ?? '') . ' ' . ($article['description'] ?? ''));
    
    // Find related analyses
    $relatedAnalyses = findRelatedAnalyses($coinMentions, $allAnalyses);
    
    // Generate unique summary
    $uniqueSummary = generateUniqueSummary($article, $allAnalyses);
    
    // Add internal links to description
    $enhancedDescription = addInternalLinksToNews($article['description'] ?? '', $coinMentions);
    
    // Generate structured data
    $structuredData = generateNewsArticleSchema($article, $relatedAnalyses);
    
    // Add enhanced fields to article
    $article['uniqueSummary'] = $uniqueSummary;
    $article['enhancedDescription'] = $enhancedDescription;
    $article['coinMentions'] = $coinMentions;
    $article['relatedAnalyses'] = $relatedAnalyses;
    $article['structuredData'] = $structuredData;
    
    return $article;
}

/**
 * Enhance all news articles
 */
function enhanceAllNewsArticles($news, $allAnalyses = []) {
    $enhanced = [];
    
    foreach ($news as $article) {
        $enhanced[] = enhanceNewsArticle($article, $allAnalyses);
    }
    
    return $enhanced;
}

