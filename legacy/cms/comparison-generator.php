<?php
/**
 * Content Comparison Generator
 * Generates comparison content for better GEO optimization
 */

/**
 * Generate comparison content structure
 */
function generateComparisonContent($item1, $item2, $comparisonPoints) {
    $comparison = [
        'title' => $item1 . ' vs ' . $item2 . ': Complete Comparison',
        'introduction' => 'This comparison analyzes ' . $item1 . ' and ' . $item2 . ' across key metrics and use cases.',
        'points' => [],
        'conclusion' => 'Both ' . $item1 . ' and ' . $item2 . ' have their strengths. Choose based on your specific needs and risk tolerance.'
    ];
    
    foreach ($comparisonPoints as $point) {
        $comparison['points'][] = [
            'metric' => $point['metric'] ?? '',
            $item1 => $point[$item1] ?? '',
            $item2 => $point[$item2] ?? '',
            'winner' => $point['winner'] ?? 'depends'
        ];
    }
    
    return $comparison;
}

/**
 * Generate comparison HTML
 */
function generateComparisonHTML($comparison) {
    $html = '<div class="comparison-content" itemscope itemtype="https://schema.org/Comparison">';
    $html .= '<h2 itemprop="name">' . htmlspecialchars($comparison['title']) . '</h2>';
    $html .= '<p itemprop="description">' . htmlspecialchars($comparison['introduction']) . '</p>';
    
    $html .= '<table style="width: 100%; border-collapse: collapse; margin: 20px 0;">';
    $html .= '<thead>';
    $html .= '<tr style="background: var(--color-surface); border-bottom: 2px solid var(--color-line);">';
    $html .= '<th style="padding: 12px; text-align: left; color: var(--color-text-high);">Metric</th>';
    
    // Get item names from first point
    $items = [];
    foreach ($comparison['points'] as $point) {
        foreach ($point as $key => $value) {
            if ($key !== 'metric' && $key !== 'winner' && !in_array($key, $items)) {
                $items[] = $key;
            }
        }
    }
    
    foreach ($items as $item) {
        $html .= '<th style="padding: 12px; text-align: left; color: var(--color-text-high);">' . htmlspecialchars($item) . '</th>';
    }
    $html .= '<th style="padding: 12px; text-align: left; color: var(--color-text-high);">Winner</th>';
    $html .= '</tr>';
    $html .= '</thead>';
    $html .= '<tbody>';
    
    foreach ($comparison['points'] as $point) {
        $html .= '<tr style="border-bottom: 1px solid var(--color-line);">';
        $html .= '<td style="padding: 12px; color: var(--color-text-high); font-weight: 600;">' . htmlspecialchars($point['metric']) . '</td>';
        
        foreach ($items as $item) {
            $value = $point[$item] ?? 'N/A';
            $html .= '<td style="padding: 12px; color: var(--color-text-muted);">' . htmlspecialchars($value) . '</td>';
        }
        
        $winner = $point['winner'] ?? 'depends';
        $html .= '<td style="padding: 12px; color: var(--color-primary);">' . htmlspecialchars($winner) . '</td>';
        $html .= '</tr>';
    }
    
    $html .= '</tbody>';
    $html .= '</table>';
    
    $html .= '<div style="margin-top: 24px; padding: 16px; background: var(--color-surface); border-radius: 8px; border: 1px solid var(--color-line);">';
    $html .= '<h3 style="color: var(--color-primary); margin-bottom: 8px;">Conclusion</h3>';
    $html .= '<p style="color: var(--color-text-high);">' . htmlspecialchars($comparison['conclusion']) . '</p>';
    $html .= '</div>';
    
    $html .= '</div>';
    
    return $html;
}

/**
 * Generate comparison structured data
 */
function generateComparisonSchema($comparison, $item1, $item2) {
    return [
        '@context' => 'https://schema.org',
        '@type' => 'Comparison',
        'name' => $comparison['title'],
        'description' => $comparison['introduction'],
        'itemCompared' => [
            [
                '@type' => 'Thing',
                'name' => $item1
            ],
            [
                '@type' => 'Thing',
                'name' => $item2
            ]
        ]
    ];
}

/**
 * Get comparison templates
 */
function getComparisonTemplates() {
    return [
        'btc_vs_eth' => [
            'item1' => 'Bitcoin (BTC)',
            'item2' => 'Ethereum (ETH)',
            'points' => [
                ['metric' => 'Market Cap', 'Bitcoin (BTC)' => 'Largest', 'Ethereum (ETH)' => 'Second largest', 'winner' => 'BTC'],
                ['metric' => 'Use Case', 'Bitcoin (BTC)' => 'Store of value', 'Ethereum (ETH)' => 'Smart contracts', 'winner' => 'depends'],
                ['metric' => 'Transaction Speed', 'Bitcoin (BTC)' => 'Slower', 'Ethereum (ETH)' => 'Faster', 'winner' => 'ETH'],
                ['metric' => 'Volatility', 'Bitcoin (BTC)' => 'High', 'Ethereum (ETH)' => 'High', 'winner' => 'depends']
            ]
        ],
        'spot_vs_day_trading' => [
            'item1' => 'Spot Trading',
            'item2' => 'Day Trading',
            'points' => [
                ['metric' => 'Time Commitment', 'Spot Trading' => 'Low', 'Day Trading' => 'High', 'winner' => 'Spot Trading'],
                ['metric' => 'Risk Level', 'Spot Trading' => 'Lower', 'Day Trading' => 'Higher', 'winner' => 'Spot Trading'],
                ['metric' => 'Potential Returns', 'Spot Trading' => 'Moderate', 'Day Trading' => 'High', 'winner' => 'Day Trading'],
                ['metric' => 'Skill Required', 'Spot Trading' => 'Basic', 'Day Trading' => 'Advanced', 'winner' => 'Spot Trading']
            ]
        ],
        'technical_vs_fundamental' => [
            'item1' => 'Technical Analysis',
            'item2' => 'Fundamental Analysis',
            'points' => [
                ['metric' => 'Timeframe', 'Technical Analysis' => 'Short-term', 'Fundamental Analysis' => 'Long-term', 'winner' => 'depends'],
                ['metric' => 'Data Source', 'Technical Analysis' => 'Price charts', 'Fundamental Analysis' => 'News, metrics', 'winner' => 'depends'],
                ['metric' => 'Entry/Exit', 'Technical Analysis' => 'Precise', 'Fundamental Analysis' => 'General', 'winner' => 'Technical Analysis'],
                ['metric' => 'Best For', 'Technical Analysis' => 'Trading', 'Fundamental Analysis' => 'Investing', 'winner' => 'depends']
            ]
        ]
    ];
}

