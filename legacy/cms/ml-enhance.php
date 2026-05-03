<?php
/**
 * ML-Enhanced Content Suggestions
 * Provides intelligent suggestions for improving analysis content
 */

require_once __DIR__ . '/prompt-matching.php';

/**
 * Calculate Flesch-Kincaid readability score
 */
function calculateReadability($text) {
    $text = strip_tags($text);
    $sentences = preg_split('/[.!?]+/', $text, -1, PREG_SPLIT_NO_EMPTY);
    $sentenceCount = count($sentences);
    
    if ($sentenceCount === 0) return 0;
    
    $words = str_word_count($text);
    $syllables = 0;
    
    // Simple syllable counting (approximation)
    $wordList = str_word_count($text, 1);
    foreach ($wordList as $word) {
        $word = strtolower($word);
        $syllables += max(1, preg_match_all('/[aeiouy]+/', $word));
    }
    
    // Flesch Reading Ease formula
    $avgSentenceLength = $words / $sentenceCount;
    $avgSyllablesPerWord = $syllables / $words;
    
    $score = 206.835 - (1.015 * $avgSentenceLength) - (84.6 * $avgSyllablesPerWord);
    
    return round($score, 1);
}

/**
 * Analyze keyword density and distribution
 */
function analyzeKeywordDensity($content, $coin, $hook) {
    $contentLower = strtolower($content);
    $coinLower = strtolower($coin);
    $hookLower = strtolower($hook);
    
    $wordCount = str_word_count($content);
    $totalChars = strlen($content);
    
    // Extract key terms
    $keyTerms = [
        $coinLower,
        $coinLower . ' price',
        $coinLower . ' analysis',
        'crypto',
        'trading',
        'bitcoin',
        'analysis'
    ];
    
    $density = [];
    foreach ($keyTerms as $term) {
        $count = substr_count($contentLower, $term);
        $density[$term] = $wordCount > 0 ? round(($count / $wordCount) * 100, 2) : 0;
    }
    
    // Check keyword distribution (first 100 words, middle, last 100 words)
    $words = str_word_count($content, 1);
    $first100 = array_slice($words, 0, 100);
    $last100 = array_slice($words, -100);
    $middle = array_slice($words, floor(count($words) / 2) - 50, 100);
    
    $distribution = [
        'first_100' => 0,
        'middle' => 0,
        'last_100' => 0
    ];
    
    foreach ($keyTerms as $term) {
        $termWords = explode(' ', $term);
        foreach ($termWords as $word) {
            $distribution['first_100'] += substr_count(strtolower(implode(' ', $first100)), $word);
            $distribution['middle'] += substr_count(strtolower(implode(' ', $middle)), $word);
            $distribution['last_100'] += substr_count(strtolower(implode(' ', $last100)), $word);
        }
    }
    
    return [
        'density' => $density,
        'distribution' => $distribution,
        'recommended_density' => 1.5, // 1-2% is optimal
        'word_count' => $wordCount
    ];
}

/**
 * Analyze content structure
 */
function analyzeContentStructure($content) {
    $htmlContent = $content;
    $plainContent = strip_tags($content);
    
    // Count headings
    $headingCount = preg_match_all('/<h[1-6][^>]*>/i', $htmlContent);
    
    // Count paragraphs
    $paragraphCount = preg_match_all('/<p[^>]*>/i', $htmlContent);
    if ($paragraphCount === 0) {
        // Count line breaks if no <p> tags
        $paragraphCount = substr_count($plainContent, "\n\n") + 1;
    }
    
    // Count lists
    $listCount = preg_match_all('/<[uo]l[^>]*>/i', $htmlContent);
    
    // Count images
    $imageCount = preg_match_all('/<img[^>]*>/i', $htmlContent);
    
    // Average sentence length
    $sentences = preg_split('/[.!?]+/', $plainContent, -1, PREG_SPLIT_NO_EMPTY);
    $avgSentenceLength = count($sentences) > 0 ? round(str_word_count($plainContent) / count($sentences), 1) : 0;
    
    return [
        'headings' => $headingCount,
        'paragraphs' => $paragraphCount,
        'lists' => $listCount,
        'images' => $imageCount,
        'avg_sentence_length' => $avgSentenceLength,
        'recommended_sentence_length' => 15 // 15-20 words is optimal
    ];
}

/**
 * Calculate overall content quality score (0-100)
 */
function calculateQualityScore($content, $coin, $hook, $readability, $keywordAnalysis, $structure) {
    $score = 0;
    $maxScore = 100;
    
    // Readability (20 points)
    if ($readability >= 60) {
        $score += 20; // Excellent readability
    } elseif ($readability >= 50) {
        $score += 15; // Good readability
    } elseif ($readability >= 40) {
        $score += 10; // Fair readability
    } else {
        $score += 5; // Poor readability
    }
    
    // Content length (15 points)
    $wordCount = $keywordAnalysis['word_count'];
    if ($wordCount >= 200 && $wordCount <= 500) {
        $score += 15; // Optimal length
    } elseif ($wordCount >= 100 && $wordCount < 200) {
        $score += 10; // Good length
    } elseif ($wordCount >= 50 && $wordCount < 100) {
        $score += 5; // Short but acceptable
    }
    
    // Keyword density (15 points)
    $coinDensity = $keywordAnalysis['density'][strtolower($coin)] ?? 0;
    if ($coinDensity >= 1 && $coinDensity <= 3) {
        $score += 15; // Optimal density
    } elseif ($coinDensity > 0 && $coinDensity < 1) {
        $score += 8; // Low density
    } elseif ($coinDensity > 3) {
        $score += 5; // Over-optimized
    }
    
    // Structure (15 points)
    if ($structure['headings'] > 0) $score += 5;
    if ($structure['paragraphs'] >= 3) $score += 5;
    if ($structure['lists'] > 0) $score += 5;
    
    // Technical terms (10 points)
    $technicalTerms = ['support', 'resistance', 'entry', 'exit', 'target', 'stop'];
    $hasTechnical = false;
    foreach ($technicalTerms as $term) {
        if (stripos($content, $term) !== false) {
            $hasTechnical = true;
            break;
        }
    }
    if ($hasTechnical) $score += 10;
    
    // Price mentions (10 points)
    if (preg_match('/\$[\d,]+/', $content)) {
        $score += 10;
    }
    
    // CTA presence (10 points)
    if (stripos($content, 'join') !== false || stripos($content, 'telegram') !== false) {
        $score += 10;
    }
    
    // Sentence length (5 points)
    if ($structure['avg_sentence_length'] >= 10 && $structure['avg_sentence_length'] <= 20) {
        $score += 5;
    }
    
    return min(100, $score);
}

function enhanceContent($content, $coin, $hook) {
    $suggestions = [
        'keywords' => [],
        'improvements' => [],
        'seo' => [],
        'readability' => 0,
        'readability_level' => '',
        'keyword_analysis' => [],
        'structure' => [],
        'quality_score' => 0,
        'quality_grade' => ''
    ];
    
    // Calculate readability
    $readability = calculateReadability($content);
    $suggestions['readability'] = $readability;
    
    if ($readability >= 60) {
        $suggestions['readability_level'] = 'Easy to read';
    } elseif ($readability >= 50) {
        $suggestions['readability_level'] = 'Fairly easy to read';
    } elseif ($readability >= 40) {
        $suggestions['readability_level'] = 'Moderately difficult';
    } else {
        $suggestions['readability_level'] = 'Difficult to read';
    }
    
    // Analyze keywords
    $keywordAnalysis = analyzeKeywordDensity($content, $coin, $hook);
    $suggestions['keyword_analysis'] = $keywordAnalysis;
    
    // Analyze structure
    $structure = analyzeContentStructure($content);
    $suggestions['structure'] = $structure;
    
    // Calculate quality score
    $qualityScore = calculateQualityScore($content, $coin, $hook, $readability, $keywordAnalysis, $structure);
    $suggestions['quality_score'] = $qualityScore;
    
    if ($qualityScore >= 80) {
        $suggestions['quality_grade'] = 'Excellent';
    } elseif ($qualityScore >= 70) {
        $suggestions['quality_grade'] = 'Good';
    } elseif ($qualityScore >= 60) {
        $suggestions['quality_grade'] = 'Fair';
    } else {
        $suggestions['quality_grade'] = 'Needs Improvement';
    }
    
    // Extract keywords from content
    $words = str_word_count(strtolower($content), 1);
    $commonWords = ['the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'is', 'are', 'was', 'were', 'be', 'been', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could', 'should', 'may', 'might', 'must', 'can'];
    $words = array_diff($words, $commonWords);
    $wordFreq = array_count_values($words);
    arsort($wordFreq);
    $suggestions['keywords'] = array_slice(array_keys($wordFreq), 0, 10);
    
    // Content improvement suggestions
    $improvements = [];
    
    // Check for price mentions
    if (preg_match('/\$[\d,]+/', $content)) {
        $improvements[] = '✅ Good: Contains specific price targets';
    } else {
        $improvements[] = '💡 Suggestion: Add specific price targets (e.g., $70K, $500)';
    }
    
    // Check for technical terms
    $technicalTerms = ['support', 'resistance', 'ema', 'rsi', 'macd', 'trend', 'breakout', 'breakdown', 'volume'];
    $hasTechnical = false;
    foreach ($technicalTerms as $term) {
        if (stripos($content, $term) !== false) {
            $hasTechnical = true;
            break;
        }
    }
    if ($hasTechnical) {
        $improvements[] = '✅ Good: Contains technical analysis terms';
    } else {
        $improvements[] = '💡 Suggestion: Add technical analysis terms (support, resistance, EMA, etc.)';
    }
    
    // Check content length
    $wordCount = $keywordAnalysis['word_count'];
    if ($wordCount < 50) {
        $improvements[] = '⚠️ Warning: Content is too short. Aim for 100+ words for better SEO';
    } elseif ($wordCount >= 200 && $wordCount <= 500) {
        $improvements[] = '✅ Excellent: Optimal content length (200-500 words)';
    } elseif ($wordCount > 500) {
        $improvements[] = '✅ Good: Comprehensive content length';
    } else {
        $improvements[] = '✅ Good: Appropriate content length';
    }
    
    // Readability suggestions
    if ($readability < 40) {
        $improvements[] = '⚠️ Warning: Content is difficult to read. Use shorter sentences and simpler words.';
    } elseif ($readability < 50) {
        $improvements[] = '💡 Suggestion: Improve readability by using shorter sentences and simpler vocabulary.';
    } else {
        $improvements[] = '✅ Good: Content is readable (' . $readability . ' - ' . $suggestions['readability_level'] . ')';
    }
    
    // Keyword density suggestions
    $coinDensity = $keywordAnalysis['density'][strtolower($coin)] ?? 0;
    if ($coinDensity < 1) {
        $improvements[] = '💡 Suggestion: Increase keyword density for "' . $coin . '" (currently ' . $coinDensity . '%, aim for 1-2%)';
    } elseif ($coinDensity > 3) {
        $improvements[] = '⚠️ Warning: Keyword density too high (' . $coinDensity . '%), may be seen as keyword stuffing';
    } else {
        $improvements[] = '✅ Good: Optimal keyword density for "' . $coin . '" (' . $coinDensity . '%)';
    }
    
    // Structure suggestions
    if ($structure['headings'] === 0) {
        $improvements[] = '💡 Suggestion: Add headings to improve content structure';
    }
    if ($structure['paragraphs'] < 3) {
        $improvements[] = '💡 Suggestion: Break content into more paragraphs for better readability';
    }
    if ($structure['avg_sentence_length'] > 25) {
        $improvements[] = '💡 Suggestion: Use shorter sentences (current avg: ' . $structure['avg_sentence_length'] . ' words, aim for 15-20)';
    }
    
    // Check for call-to-action
    if (stripos($content, 'join') !== false || stripos($content, 'telegram') !== false || stripos($content, 'group') !== false) {
        $improvements[] = '✅ Good: Contains call-to-action';
    } else {
        $improvements[] = '💡 Suggestion: Add a subtle call-to-action mentioning Telegram group';
    }
    
    // SEO suggestions
    $seoSuggestions = [];
    
    // Check if coin is mentioned in hook
    if (stripos(strtolower($hook), strtolower($coin)) !== false) {
        $seoSuggestions[] = '✅ Good: Coin symbol in headline';
    } else {
        $seoSuggestions[] = '💡 Suggestion: Include coin symbol (' . $coin . ') in headline for better SEO';
    }
    
    // Check for question format in hook
    if (strpos($hook, '?') !== false) {
        $seoSuggestions[] = '✅ Good: Question format in headline (engages readers)';
    }
    
    // Check for numbers in hook
    if (preg_match('/\d+/', $hook)) {
        $seoSuggestions[] = '✅ Good: Numbers in headline (increases CTR)';
    } else {
        $seoSuggestions[] = '💡 Suggestion: Add numbers or percentages to headline (e.g., "35%", "$70K")';
    }
    
    $suggestions['improvements'] = $improvements;
    $suggestions['seo'] = $seoSuggestions;
    
    // Generate related keywords
    $relatedKeywords = [
        strtolower($coin) . ' price',
        strtolower($coin) . ' analysis',
        strtolower($coin) . ' prediction',
        'crypto analysis',
        'cryptocurrency trading',
        'bitcoin analysis',
        'altcoin signals',
        'trading insights'
    ];
    $suggestions['relatedKeywords'] = $relatedKeywords;
    
    // Add prompt matching analysis
    $promptMatching = suggestPromptMatchingImprovements($content, $hook, $coin);
    $suggestions['prompt_matching'] = $promptMatching;
    
    return $suggestions;
}

/**
 * Generate content suggestions based on similar successful posts
 */
function generateContentSuggestions($coin, $hook) {
    $suggestions = [];
    
    // Template suggestions based on successful patterns
    $templates = [
        'price_action' => [
            'title' => 'Price Action Analysis',
            'suggestions' => [
                'Mention key support and resistance levels',
                'Include current price and target prices',
                'Explain the trend direction',
                'Add entry and exit points if applicable'
            ]
        ],
        'breakout' => [
            'title' => 'Breakout Analysis',
            'suggestions' => [
                'Identify the breakout level',
                'Mention volume confirmation',
                'Set target prices based on pattern',
                'Include risk management tips'
            ]
        ],
        'support_resistance' => [
            'title' => 'Support/Resistance Analysis',
            'suggestions' => [
                'Clearly identify support and resistance zones',
                'Explain why these levels are significant',
                'Mention what happens if levels break',
                'Include potential price targets'
            ]
        ]
    ];
    
    // Detect analysis type from hook
    $hookLower = strtolower($hook);
    if (stripos($hookLower, 'breakout') !== false || stripos($hookLower, 'breaking') !== false) {
        $suggestions = $templates['breakout'];
    } elseif (stripos($hookLower, 'support') !== false || stripos($hookLower, 'resistance') !== false) {
        $suggestions = $templates['support_resistance'];
    } else {
        $suggestions = $templates['price_action'];
    }
    
    return $suggestions;
}

/**
 * Auto-generate SEO-optimized title
 */
function generateSEOTitle($hook, $coin) {
    $coinUpper = strtoupper($coin);
    
    // Check if coin is already in hook
    if (stripos($hook, $coin) !== false) {
        return $hook . ' | Crypto Analysis | Yaga Calls';
    }
    
    return $coinUpper . ' ' . $hook . ' | Crypto Analysis | Yaga Calls';
}

/**
 * Auto-generate SEO description
 */
function generateSEODescription($content, $coin, $hook) {
    // Clean content
    $cleanContent = strip_tags($content);
    $cleanContent = preg_replace('/\s+/', ' ', $cleanContent);
    $cleanContent = trim($cleanContent);
    
    // If content is long enough, use first 155 characters
    if (strlen($cleanContent) > 155) {
        $desc = substr($cleanContent, 0, 152) . '...';
    } else {
        $desc = $cleanContent;
    }
    
    // If description is too short, generate one
    if (strlen($desc) < 100) {
        $coinUpper = strtoupper($coin);
        $desc = $coinUpper . ' price analysis and trading insights from Yaga Calls. ' . $desc;
    }
    
    return $desc;
}

/**
 * Auto-generate SEO keywords
 */
function generateSEOKeywords($content, $coin, $hook) {
    $keywords = [];
    
    // Add coin-related keywords
    $coinLower = strtolower($coin);
    $keywords[] = $coinLower;
    $keywords[] = $coinLower . ' analysis';
    $keywords[] = $coinLower . ' price';
    $keywords[] = $coinLower . ' prediction';
    
    // Extract important words from content
    $words = str_word_count(strtolower($content), 1);
    $commonWords = ['the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'is', 'are', 'was', 'were', 'be', 'been', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could', 'should', 'may', 'might', 'must', 'can', 'this', 'that', 'these', 'those'];
    $words = array_diff($words, $commonWords);
    $wordFreq = array_count_values($words);
    arsort($wordFreq);
    
    // Add top 5 content keywords
    $contentKeywords = array_slice(array_keys($wordFreq), 0, 5);
    $keywords = array_merge($keywords, $contentKeywords);
    
    // Add standard crypto keywords
    $standardKeywords = [
        'crypto analysis',
        'cryptocurrency',
        'trading signals',
        'bitcoin analysis',
        'altcoin analysis',
        'crypto trading',
        'market analysis'
    ];
    $keywords = array_merge($keywords, $standardKeywords);
    
    // Remove duplicates and limit
    $keywords = array_unique($keywords);
    $keywords = array_slice($keywords, 0, 15);
    
    return implode(', ', $keywords);
}

/**
 * Generate voice query optimized content suggestions
 * Optimizes content for voice search and natural language queries
 */
function generateVoiceQuerySuggestions($content, $coin, $hook) {
    $suggestions = [];
    
    // Voice query patterns
    $voicePatterns = [
        'what' => ['What is', 'What are', 'What does', 'What will'],
        'how' => ['How to', 'How does', 'How can', 'How will'],
        'why' => ['Why is', 'Why does', 'Why should', 'Why will'],
        'when' => ['When is', 'When does', 'When will', 'When should'],
        'where' => ['Where is', 'Where can', 'Where should']
    ];
    
    // Check if hook matches voice query pattern
    $hookLower = strtolower($hook);
    $hasVoiceQuery = false;
    foreach ($voicePatterns as $type => $patterns) {
        foreach ($patterns as $pattern) {
            if (stripos($hookLower, strtolower($pattern)) === 0) {
                $hasVoiceQuery = true;
                $suggestions[] = '✅ Good: Question format optimized for voice search';
                break 2;
            }
        }
    }
    
    if (!$hasVoiceQuery) {
        $suggestions[] = '💡 Suggestion: Start headline with question words (What, How, Why, When) for voice search optimization';
    }
    
    // Check for natural language in content
    $naturalLanguageIndicators = ['is', 'are', 'will', 'should', 'can', 'does', 'the'];
    $wordCount = str_word_count(strtolower($content));
    $naturalLanguageScore = 0;
    foreach ($naturalLanguageIndicators as $indicator) {
        $naturalLanguageScore += substr_count(strtolower($content), ' ' . $indicator . ' ');
    }
    
    if ($naturalLanguageScore > ($wordCount * 0.1)) {
        $suggestions[] = '✅ Good: Content uses natural language patterns';
    } else {
        $suggestions[] = '💡 Suggestion: Use more conversational language for voice search (e.g., "is", "are", "will", "should")';
    }
    
    // Check for direct answers (important for voice search)
    $directAnswerPatterns = [
        'is ' . strtolower($coin),
        strtolower($coin) . ' is',
        'the price is',
        'the target is',
        'entry is',
        'support is',
        'resistance is'
    ];
    
    $hasDirectAnswer = false;
    foreach ($directAnswerPatterns as $pattern) {
        if (stripos($content, $pattern) !== false) {
            $hasDirectAnswer = true;
            break;
        }
    }
    
    if ($hasDirectAnswer) {
        $suggestions[] = '✅ Good: Contains direct answers (important for voice search)';
    } else {
        $suggestions[] = '💡 Suggestion: Add direct answers in format "X is Y" or "The price is $X" for voice search';
    }
    
    // Suggest Q&A format
    $suggestions[] = '💡 Tip: Consider adding Q&A section at the end for voice queries';
    
    return $suggestions;
}

/**
 * Generate content templates for different post types
 */
function getContentTemplates() {
    return [
        'price_analysis' => [
            'name' => 'Price Analysis Template',
            'hook_pattern' => '{COIN} Price Analysis: {KEY_LEVEL}',
            'content_structure' => [
                'Current price and trend',
                'Key support and resistance levels',
                'Entry and exit points',
                'Risk management guidance'
            ],
            'example' => '{COIN} is currently trading at ${PRICE}. Key support at ${SUPPORT} and resistance at ${RESISTANCE}. Entry zone: ${ENTRY}. Stop-loss: ${STOP}. Targets: ${TARGET1}, ${TARGET2}.'
        ],
        'breakout' => [
            'name' => 'Breakout Analysis Template',
            'hook_pattern' => '{COIN} Breaking {LEVEL}: What\'s Next?',
            'content_structure' => [
                'Breakout level identification',
                'Volume confirmation',
                'Target prices based on pattern',
                'Risk management'
            ],
            'example' => '{COIN} has broken above ${LEVEL} with strong volume. This breakout suggests a move toward ${TARGET1} and potentially ${TARGET2}. Entry: ${ENTRY}. Stop: ${STOP}.'
        ],
        'support_resistance' => [
            'name' => 'Support/Resistance Template',
            'hook_pattern' => '{COIN} at {LEVEL}: {ACTION} Zone',
            'content_structure' => [
                'Support/resistance level',
                'Why this level is significant',
                'What happens if level breaks',
                'Price targets'
            ],
            'example' => '{COIN} is approaching ${LEVEL}, a key {TYPE} zone. This level has held {TIMES} times previously. If it breaks, expect a move to ${TARGET}. Entry: ${ENTRY}.'
        ],
        'news_reaction' => [
            'name' => 'News Reaction Template',
            'hook_pattern' => '{COIN} Reacts to {NEWS}: {OUTCOME}',
            'content_structure' => [
                'News event summary',
                'Market reaction',
                'Technical implications',
                'Trading strategy'
            ],
            'example' => '{NEWS} has caused {COIN} to {REACTION}. The price moved from ${PRICE1} to ${PRICE2}. Technical analysis suggests {OUTLOOK}. Entry: ${ENTRY}.'
        ]
    ];
}

/**
 * Suggest internal links based on content
 */
function suggestInternalLinks($content, $coin) {
    $suggestions = [];
    
    // Check for method-related terms
    if (stripos($content, 'support') !== false || stripos($content, 'resistance') !== false || 
        stripos($content, 'entry') !== false || stripos($content, 'exit') !== false) {
        $suggestions[] = [
            'text' => 'Learn our 5-stage method',
            'url' => '/method',
            'reason' => 'Content mentions technical analysis terms'
        ];
    }
    
    // Check for signal-related terms
    if (stripos($content, 'signal') !== false || stripos($content, 'call') !== false) {
        $suggestions[] = [
            'text' => 'View pricing plans',
            'url' => '/pricing',
            'reason' => 'Content mentions signals or calls'
        ];
    }
    
    // Check for proof/results terms
    if (stripos($content, 'result') !== false || stripos($content, 'gain') !== false || 
        stripos($content, 'profit') !== false) {
        $suggestions[] = [
            'text' => 'See our track record',
            'url' => '/proof',
            'reason' => 'Content mentions results or gains'
        ];
    }
    
    return $suggestions;
}

