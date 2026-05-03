<?php
/**
 * Zero-Click Traffic Optimizer
 * Optimizes content for featured snippets and zero-click results
 */

/**
 * Generate zero-click optimized meta description
 */
function generateZeroClickMeta($content, $coin, $hook) {
    $cleanContent = strip_tags($content);
    $cleanContent = preg_replace('/\s+/', ' ', $cleanContent);
    $cleanContent = trim($cleanContent);
    
    // Extract key information for snippet
    $priceMatches = [];
    preg_match_all('/\$[\d,]+/', $content, $priceMatches);
    
    $percentageMatches = [];
    preg_match_all('/\d+%/', $content, $percentageMatches);
    
    // Build snippet-optimized description (150-160 chars)
    $snippet = '';
    
    // Start with question/answer format
    if (preg_match('/\?/', $hook)) {
        $snippet = $hook . ' ';
    } else {
        $snippet = 'What is ' . $coin . ' analysis? ';
    }
    
    // Add key data
    if (!empty($priceMatches[0])) {
        $snippet .= $coin . ' target: ' . $priceMatches[0][0] . '. ';
    }
    
    if (!empty($percentageMatches[0])) {
        $snippet .= 'Expected: ' . $percentageMatches[0][0] . '. ';
    }
    
    // Add action
    $snippet .= 'Get full trading signals on Telegram.';
    
    // Trim to optimal length (155 chars)
    if (strlen($snippet) > 155) {
        $snippet = substr($snippet, 0, 152) . '...';
    }
    
    // Ensure minimum length
    if (strlen($snippet) < 120) {
        $snippet = $coin . ' price analysis: ' . substr($cleanContent, 0, 120) . '...';
    }
    
    return $snippet;
}

/**
 * Generate featured snippet content
 */
function generateFeaturedSnippetContent($content, $coin, $hook) {
    $snippet = [];
    
    // Extract key facts
    $priceMatches = [];
    preg_match_all('/\$[\d,]+/', $content, $priceMatches);
    
    $percentageMatches = [];
    preg_match_all('/\d+%/', $content, $percentageMatches);
    
    // Question format
    $snippet['question'] = 'What is ' . $coin . ' price analysis?';
    
    // Answer format (50-60 words)
    $answer = $coin . ' analysis shows ';
    
    if (!empty($priceMatches[0])) {
        $answer .= 'price target of ' . $priceMatches[0][0] . '. ';
    }
    
    if (!empty($percentageMatches[0])) {
        $answer .= 'Expected movement: ' . $percentageMatches[0][0] . '. ';
    }
    
    $answer .= 'Technical indicators suggest trading opportunities with clear entry and exit points. ';
    $answer .= 'Join our Telegram group for complete signals.';
    
    $snippet['answer'] = $answer;
    
    // Key facts list
    $snippet['facts'] = [];
    if (!empty($priceMatches[0])) {
        $snippet['facts'][] = 'Price Target: ' . $priceMatches[0][0];
    }
    if (!empty($percentageMatches[0])) {
        $snippet['facts'][] = 'Expected Movement: ' . $percentageMatches[0][0];
    }
    if (preg_match('/\b(support|resistance)\b/i', $content)) {
        $snippet['facts'][] = 'Clear Support/Resistance Levels';
    }
    if (preg_match('/\b(entry|exit)\b/i', $content)) {
        $snippet['facts'][] = 'Entry/Exit Points Defined';
    }
    
    return $snippet;
}

/**
 * Generate rich snippet HTML
 */
function generateRichSnippetHTML($snippet, $coin) {
    $html = '<div class="rich-snippet" itemscope itemtype="https://schema.org/FAQPage" style="margin: 20px 0; padding: 20px; background: var(--color-surface); border-radius: 8px; border: 1px solid var(--color-line); border-left: 4px solid var(--color-primary);">';
    
    $html .= '<div itemprop="mainEntity" itemscope itemtype="https://schema.org/Question">';
    $html .= '<h3 itemprop="name" style="margin: 0 0 12px 0; color: var(--color-primary); font-size: 18px;">' . htmlspecialchars($snippet['question']) . '</h3>';
    
    $html .= '<div itemprop="acceptedAnswer" itemscope itemtype="https://schema.org/Answer">';
    $html .= '<div itemprop="text" style="color: var(--color-text-high); line-height: 1.6; margin-bottom: 16px;">' . htmlspecialchars($snippet['answer']) . '</div>';
    $html .= '</div>';
    $html .= '</div>';
    
    if (!empty($snippet['facts'])) {
        $html .= '<div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid var(--color-line);">';
        $html .= '<h4 style="font-size: 14px; color: var(--color-text-high); margin-bottom: 8px;">Key Facts:</h4>';
        $html .= '<ul style="margin: 0; padding-left: 20px; color: var(--color-text-muted);">';
        foreach ($snippet['facts'] as $fact) {
            $html .= '<li style="margin-bottom: 4px;">' . htmlspecialchars($fact) . '</li>';
        }
        $html .= '</ul>';
        $html .= '</div>';
    }
    
    $html .= '</div>';
    
    return $html;
}

