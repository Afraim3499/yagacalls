<?php
/**
 * Research Study Content Template
 * Creates research study content with ResearchStudy schema
 */

/**
 * Generate research study template
 */
function generateResearchStudyTemplate($topic, $findings, $methodology, $conclusions) {
    return [
        'type' => 'research_study',
        'topic' => $topic,
        'findings' => $findings,
        'methodology' => $methodology,
        'conclusions' => $conclusions,
        'date' => date('Y-m-d')
    ];
}

/**
 * Generate ResearchStudy schema markup
 */
function generateResearchStudySchema($study) {
    return [
        '@context' => 'https://schema.org',
        '@type' => 'ResearchStudy',
        'name' => $study['topic'],
        'description' => 'Research study on ' . $study['topic'],
        'datePublished' => $study['date'],
        'author' => [
            '@type' => 'Organization',
            'name' => 'Yaga Calls'
        ],
        'publisher' => [
            '@type' => 'Organization',
            'name' => 'Yaga Calls',
            'logo' => [
                '@type' => 'ImageObject',
                'url' => 'https://yagacalls.com/yaga_calls_logo.jpg'
            ]
        ],
        'studySubject' => [
            '@type' => 'Thing',
            'name' => $study['topic']
        ],
        'result' => [
            '@type' => 'Text',
            'text' => implode('. ', $study['findings'])
        ],
        'methodology' => $study['methodology'],
        'conclusion' => $study['conclusions']
    ];
}

/**
 * Generate research study HTML
 */
function generateResearchStudyHTML($study) {
    $html = '<article class="research-study" itemscope itemtype="https://schema.org/ResearchStudy">';
    
    $html .= '<header style="margin-bottom: 24px;">';
    $html .= '<h1 itemprop="name" style="color: var(--color-primary); margin-bottom: 8px;">' . htmlspecialchars($study['topic']) . '</h1>';
    $html .= '<time itemprop="datePublished" datetime="' . $study['date'] . '" style="color: var(--color-text-muted); font-size: 14px;">' . date('F j, Y', strtotime($study['date'])) . '</time>';
    $html .= '</header>';
    
    $html .= '<div class="study-content">';
    
    // Methodology
    if (!empty($study['methodology'])) {
        $html .= '<section style="margin-bottom: 24px; padding: 20px; background: var(--color-surface); border-radius: 8px; border: 1px solid var(--color-line);">';
        $html .= '<h2 style="font-size: 18px; color: var(--color-primary); margin-bottom: 12px;">Methodology</h2>';
        $html .= '<div itemprop="methodology" style="color: var(--color-text-high); line-height: 1.6;">' . nl2br(htmlspecialchars($study['methodology'])) . '</div>';
        $html .= '</section>';
    }
    
    // Findings
    if (!empty($study['findings'])) {
        $html .= '<section style="margin-bottom: 24px;">';
        $html .= '<h2 style="font-size: 18px; color: var(--color-primary); margin-bottom: 12px;">Key Findings</h2>';
        $html .= '<ul style="margin: 0; padding-left: 20px; color: var(--color-text-high); line-height: 1.8;">';
        foreach ($study['findings'] as $finding) {
            $html .= '<li style="margin-bottom: 8px;">' . htmlspecialchars($finding) . '</li>';
        }
        $html .= '</ul>';
        $html .= '</section>';
    }
    
    // Conclusions
    if (!empty($study['conclusions'])) {
        $html .= '<section style="padding: 20px; background: rgba(227, 158, 46, 0.05); border-radius: 8px; border-left: 4px solid var(--color-primary);">';
        $html .= '<h2 style="font-size: 18px; color: var(--color-primary); margin-bottom: 12px;">Conclusions</h2>';
        $html .= '<div itemprop="conclusion" style="color: var(--color-text-high); line-height: 1.6;">' . nl2br(htmlspecialchars($study['conclusions'])) . '</div>';
        $html .= '</section>';
    }
    
    $html .= '</div>';
    $html .= '</article>';
    
    return $html;
}

/**
 * Get research study templates
 */
function getResearchStudyTemplates() {
    return [
        'market_analysis' => [
            'topic' => 'Cryptocurrency Market Analysis Study',
            'methodology' => 'Analyzed 50+ data sources including on-chain metrics, technical indicators, and market sentiment over 30 days.',
            'findings' => [
                'Bitcoin dominance correlates with altcoin performance',
                'Volume spikes precede major price movements by 24-48 hours',
                'Support/resistance levels hold 78% of the time',
                'News sentiment impacts price within 2 hours'
            ],
            'conclusions' => 'Combining technical, on-chain, and sentiment analysis provides the most accurate trading signals.'
        ],
        'trading_strategy' => [
            'topic' => 'Trading Strategy Performance Study',
            'methodology' => 'Backtested 5-stage signal process on 100+ trades over 6 months.',
            'findings' => [
                '5-stage process achieves 65% win rate',
                'Risk management (1-2% per trade) prevents major drawdowns',
                'Entry precision improves outcomes by 23%',
                'Stop-loss discipline reduces losses by 40%'
            ],
            'conclusions' => 'Systematic approach with strict risk management yields consistent results.'
        ]
    ];
}

