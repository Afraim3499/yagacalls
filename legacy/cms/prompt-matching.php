<?php
/**
 * Prompt Matching Optimization
 * Analyzes and optimizes content for AI query patterns
 */

/**
 * Detect AI query patterns in content
 */
function detectQueryPatterns($content, $hook) {
    $patterns = [
        'what' => ['what', 'what is', 'what are', 'what does', 'what will'],
        'how' => ['how', 'how to', 'how does', 'how can', 'how will'],
        'why' => ['why', 'why is', 'why are', 'why does', 'why should'],
        'when' => ['when', 'when is', 'when will', 'when does'],
        'where' => ['where', 'where is', 'where can', 'where to'],
        'compare' => ['compare', 'vs', 'versus', 'difference between', 'better than'],
        'best' => ['best', 'top', 'recommended', 'should i', 'which']
    ];
    
    $contentLower = strtolower($content . ' ' . $hook);
    $detected = [];
    
    foreach ($patterns as $type => $keywords) {
        foreach ($keywords as $keyword) {
            if (stripos($contentLower, $keyword) !== false) {
                $detected[$type] = true;
                break;
            }
        }
    }
    
    return array_keys($detected);
}

/**
 * Generate FAQ-style sections for common AI queries
 */
function generateFAQForQueries($content, $coin, $hook, $detectedPatterns) {
    $faqs = [];
    
    // What questions
    if (in_array('what', $detectedPatterns)) {
        $faqs[] = [
            'question' => 'What is ' . $coin . '?',
            'answer' => $coin . ' is a cryptocurrency. ' . (preg_match('/\d+%/', $content, $matches) ? 'Current analysis shows ' . $matches[0] . ' movement.' : 'Technical analysis indicates potential trading opportunities.')
        ];
        
        $faqs[] = [
            'question' => 'What is the price analysis for ' . $coin . '?',
            'answer' => 'Price analysis for ' . $coin . ' shows ' . (preg_match('/\$[\d,]+/', $content, $matches) ? 'target around ' . $matches[0] : 'technical indicators suggesting trading opportunities') . '.'
        ];
    }
    
    // How questions
    if (in_array('how', $detectedPatterns)) {
        $faqs[] = [
            'question' => 'How to trade ' . $coin . '?',
            'answer' => 'Based on technical analysis, ' . $coin . ' shows ' . (preg_match('/\b(support|resistance|entry|exit)\b/i', $content) ? 'clear entry and exit points' : 'trading opportunities') . '. Join our Telegram group for specific signals.'
        ];
    }
    
    // Why questions
    if (in_array('why', $detectedPatterns)) {
        $faqs[] = [
            'question' => 'Why should I consider ' . $coin . '?',
            'answer' => $coin . ' analysis indicates ' . (preg_match('/\d+%/', $content, $matches) ? $matches[0] . ' potential movement' : 'favorable trading conditions') . ' based on technical indicators.'
        ];
    }
    
    // Compare questions
    if (in_array('compare', $detectedPatterns)) {
        $faqs[] = [
            'question' => 'How does ' . $coin . ' compare to Bitcoin?',
            'answer' => $coin . ' shows ' . (preg_match('/\d+%/', $content, $matches) ? $matches[0] . ' movement' : 'technical patterns') . ' compared to market leader Bitcoin. Analysis suggests ' . (preg_match('/\b(bullish|bearish|neutral)\b/i', $content, $matches) ? strtolower($matches[0]) : 'favorable') . ' conditions.'
        ];
    }
    
    return $faqs;
}

/**
 * Optimize headline for prompt matching
 */
function optimizeHeadlineForPrompts($hook, $coin) {
    $optimized = $hook;
    
    // Check if headline starts with question word
    $questionWords = ['what', 'how', 'why', 'when', 'where', 'which', 'who'];
    $firstWord = strtolower(explode(' ', trim($hook))[0]);
    
    if (!in_array($firstWord, $questionWords)) {
        // Suggest question format
        $suggestions = [
            'What is the ' . $coin . ' price analysis?',
            'How to trade ' . $coin . '?',
            'Why ' . $coin . ' shows trading opportunities',
            'When to enter ' . $coin . ' position?'
        ];
        
        return [
            'original' => $hook,
            'suggestions' => $suggestions,
            'score' => 50 // Medium score for non-question format
        ];
    }
    
    return [
        'original' => $hook,
        'suggestions' => [],
        'score' => 80 // High score for question format
    ];
}

/**
 * Score content on prompt alignment (0-100)
 */
function scorePromptAlignment($content, $hook, $coin) {
    $score = 0;
    
    // Check for question words in headline (30 points)
    $questionWords = ['what', 'how', 'why', 'when', 'where', 'which', 'who'];
    $hookLower = strtolower($hook);
    foreach ($questionWords as $word) {
        if (stripos($hookLower, $word) === 0 || stripos($hookLower, $word . ' ') !== false) {
            $score += 30;
            break;
        }
    }
    
    // Check for direct answers in content (25 points)
    $answerPatterns = ['is', 'are', 'can', 'should', 'will', 'does'];
    $contentLower = strtolower($content);
    foreach ($answerPatterns as $pattern) {
        if (stripos($contentLower, $pattern) !== false) {
            $score += 25;
            break;
        }
    }
    
    // Check for specific data/numbers (20 points)
    if (preg_match('/\$[\d,]+|\d+%/', $content)) {
        $score += 20;
    }
    
    // Check for step-by-step or list format (15 points)
    if (preg_match('/\b(step|first|second|then|finally|1\.|2\.|3\.)\b/i', $content)) {
        $score += 15;
    }
    
    // Check for comparison language (10 points)
    if (preg_match('/\b(vs|versus|compared|better|worse|than)\b/i', $content)) {
        $score += 10;
    }
    
    return min(100, $score);
}

/**
 * Suggest content modifications for prompt matching
 */
function suggestPromptMatchingImprovements($content, $hook, $coin) {
    $suggestions = [];
    $detectedPatterns = detectQueryPatterns($content, $hook);
    $score = scorePromptAlignment($content, $hook, $coin);
    
    // Headline optimization
    $headlineAnalysis = optimizeHeadlineForPrompts($hook, $coin);
    if ($headlineAnalysis['score'] < 70 && !empty($headlineAnalysis['suggestions'])) {
        $suggestions[] = '💡 Consider using a question format in headline: "' . $headlineAnalysis['suggestions'][0] . '"';
    }
    
    // Add FAQ section if missing
    if (empty($detectedPatterns)) {
        $suggestions[] = '💡 Add FAQ-style questions to match common AI queries (What, How, Why)';
    }
    
    // Direct answer format
    if ($score < 50) {
        $suggestions[] = '💡 Structure content to directly answer questions (use "is", "are", "can", "should")';
    }
    
    // Specific data
    if (!preg_match('/\$[\d,]+|\d+%/', $content)) {
        $suggestions[] = '💡 Include specific numbers, prices, or percentages for better AI retrieval';
    }
    
    // Comparison content
    if (!preg_match('/\b(vs|versus|compared)\b/i', $content)) {
        $suggestions[] = '💡 Consider adding comparison content (X vs Y) for better prompt matching';
    }
    
    return [
        'score' => $score,
        'detected_patterns' => $detectedPatterns,
        'suggestions' => $suggestions,
        'faqs' => generateFAQForQueries($content, $coin, $hook, $detectedPatterns)
    ];
}

