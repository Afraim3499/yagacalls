<?php
/**
 * People Also Ask (PAA) Generator
 * Generates related questions for better AEO optimization
 */

/**
 * Generate PAA questions based on content
 */
function generatePAAQuestions($content, $coin, $hook) {
    $questions = [];
    $contentLower = strtolower($content);
    $coinLower = strtolower($coin);
    
    // Extract key terms
    $keyTerms = [];
    if (preg_match('/\$[\d,]+/', $content, $priceMatches)) {
        $keyTerms[] = 'price';
        $keyTerms[] = 'target';
    }
    if (preg_match('/\b(support|resistance|entry|exit|stop|target)\b/i', $content)) {
        $keyTerms[] = 'trading';
        $keyTerms[] = 'analysis';
    }
    if (preg_match('/\d+%/', $content)) {
        $keyTerms[] = 'movement';
        $keyTerms[] = 'rally';
    }
    
    // Generate questions based on patterns
    $questionTemplates = [
        'what' => [
            'What is ' . $coin . '?',
            'What is the price of ' . $coin . '?',
            'What is ' . $coin . ' analysis?',
            'What are the trading signals for ' . $coin . '?'
        ],
        'how' => [
            'How to trade ' . $coin . '?',
            'How to analyze ' . $coin . '?',
            'How to buy ' . $coin . '?',
            'How does ' . $coin . ' work?'
        ],
        'why' => [
            'Why is ' . $coin . ' moving?',
            'Why should I invest in ' . $coin . '?',
            'Why is ' . $coin . ' price changing?'
        ],
        'when' => [
            'When to buy ' . $coin . '?',
            'When to sell ' . $coin . '?',
            'When is the best time to trade ' . $coin . '?'
        ],
        'where' => [
            'Where to buy ' . $coin . '?',
            'Where to get ' . $coin . ' signals?',
            'Where to trade ' . $coin . '?'
        ]
    ];
    
    // Select 3-5 relevant questions
    $selectedQuestions = [];
    
    // Always include basic questions
    if (in_array('price', $keyTerms)) {
        $selectedQuestions[] = $questionTemplates['what'][1];
    }
    if (in_array('trading', $keyTerms)) {
        $selectedQuestions[] = $questionTemplates['how'][0];
    }
    
    // Add more based on content
    if (preg_match('/\b(buy|sell|entry|exit)\b/i', $content)) {
        $selectedQuestions[] = $questionTemplates['when'][0];
    }
    
    if (preg_match('/\b(should|recommend|suggest)\b/i', $content)) {
        $selectedQuestions[] = $questionTemplates['why'][1];
    }
    
    // Fill up to 5 questions
    $allQuestions = array_merge(
        $questionTemplates['what'],
        $questionTemplates['how'],
        $questionTemplates['why'],
        $questionTemplates['when']
    );
    
    while (count($selectedQuestions) < 5 && count($selectedQuestions) < count($allQuestions)) {
        $random = $allQuestions[array_rand($allQuestions)];
        if (!in_array($random, $selectedQuestions)) {
            $selectedQuestions[] = $random;
        }
    }
    
    return array_slice($selectedQuestions, 0, 5);
}

/**
 * Generate PAA HTML section
 */
function generatePAASection($questions, $coin) {
    if (empty($questions)) {
        return '';
    }
    
    $html = '<div class="paa-section" style="margin-top: 20px; padding: 16px; background: var(--color-surface); border-radius: 8px; border: 1px solid var(--color-line);">';
    $html .= '<h4 style="font-size: 14px; color: var(--color-primary); margin-bottom: 12px;">People Also Ask</h4>';
    $html .= '<div class="paa-questions">';
    
    foreach ($questions as $index => $question) {
        $html .= '<div class="paa-question" style="margin-bottom: 12px; padding: 10px; background: var(--color-bg); border-radius: 6px; border: 1px solid var(--color-line);">';
        $html .= '<div style="font-size: 13px; color: var(--color-text-high); font-weight: 500; cursor: pointer;" onclick="togglePAAAnswer(this)">';
        $html .= '<span style="margin-right: 8px;">' . ($index + 1) . '.</span>';
        $html .= htmlspecialchars($question);
        $html .= '<span style="float: right; color: var(--color-primary);">▼</span>';
        $html .= '</div>';
        $html .= '<div class="paa-answer" style="display: none; margin-top: 8px; padding-top: 8px; border-top: 1px solid var(--color-line); font-size: 12px; color: var(--color-text-muted);">';
        $html .= 'Find detailed answers in our full analysis. Join our Telegram group for complete trading signals.';
        $html .= '</div>';
        $html .= '</div>';
    }
    
    $html .= '</div>';
    $html .= '</div>';
    
    // Add JavaScript for expand/collapse
    $html .= '<script>
    function togglePAAAnswer(element) {
        const answer = element.nextElementSibling;
        const arrow = element.querySelector("span:last-child");
        if (answer.style.display === "none") {
            answer.style.display = "block";
            arrow.textContent = "▲";
        } else {
            answer.style.display = "none";
            arrow.textContent = "▼";
        }
    }
    </script>';
    
    return $html;
}

/**
 * Generate PAA structured data (FAQPage schema)
 */
function generatePAASchema($questions, $coin) {
    $faqItems = [];
    
    foreach ($questions as $question) {
        $faqItems[] = [
            '@type' => 'Question',
            'name' => $question,
            'acceptedAnswer' => [
                '@type' => 'Answer',
                'text' => 'Find detailed answers about ' . $coin . ' in our comprehensive analysis. Join our Telegram group for complete trading signals and real-time updates.'
            ]
        ];
    }
    
    return [
        '@context' => 'https://schema.org',
        '@type' => 'FAQPage',
        'mainEntity' => $faqItems
    ];
}

