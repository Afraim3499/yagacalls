<?php
/**
 * LLM Citation Hooks System
 * Generates citation-ready content for LLM retrieval
 */

/**
 * Extract and mark citations in content
 */
function extractCitations($content) {
    $citations = [];
    $citationIndex = 1;
    
    // Pattern to find statistics and claims
    $patterns = [
        // Price patterns: $70K, $500, etc.
        '/\$[\d,]+(?:K|M|B)?/i',
        // Percentage patterns: 35%, 150% rally, etc.
        '/\d+%[^%]*/i',
        // Number patterns with context: "34% in 30 days", "150% rally"
        '/\d+%?\s+(?:in|over|within|during|from|to|at|above|below)\s+[^.!?]+/i',
        // Technical terms with numbers: "support at $70K", "resistance at $500"
        '/(?:support|resistance|entry|exit|target|stop|level|price)\s+(?:at|around|near|above|below)\s+\$?[\d,]+/i'
    ];
    
    $allMatches = [];
    foreach ($patterns as $pattern) {
        preg_match_all($pattern, $content, $matches, PREG_OFFSET_CAPTURE);
        if (!empty($matches[0])) {
            foreach ($matches[0] as $match) {
                $allMatches[] = [
                    'text' => $match[0],
                    'position' => $match[1],
                    'pattern' => $pattern
                ];
            }
        }
    }
    
    // Sort by position
    usort($allMatches, function($a, $b) {
        return $a['position'] - $b['position'];
    });
    
    // Create citations
    foreach ($allMatches as $match) {
        $citations[] = [
            'id' => $citationIndex++,
            'text' => trim($match['text']),
            'position' => $match['position']
        ];
    }
    
    return $citations;
}

/**
 * Add citation markers to content
 */
function addCitationMarkers($content, $citations) {
    if (empty($citations)) {
        return $content;
    }
    
    // Sort citations by position (reverse order to maintain positions when inserting)
    usort($citations, function($a, $b) {
        return $b['position'] - $a['position'];
    });
    
    foreach ($citations as $citation) {
        $marker = '<sup style="color: var(--color-primary); font-weight: 600;">[' . $citation['id'] . ']</sup>';
        $content = substr_replace($content, $citation['text'] . ' ' . $marker, $citation['position'], strlen($citation['text']));
    }
    
    return $content;
}

/**
 * Generate references section
 */
function generateReferencesSection($citations, $coin, $hook) {
    if (empty($citations)) {
        return '';
    }
    
    $references = '<div style="margin-top: 20px; padding-top: 16px; border-top: 1px solid var(--color-line);">';
    $references .= '<h4 style="font-size: 14px; color: var(--color-primary); margin-bottom: 12px;">References</h4>';
    $references .= '<ol style="margin: 0; padding-left: 20px; font-size: 12px; color: var(--color-text-muted);">';
    
    foreach ($citations as $citation) {
        $references .= '<li style="margin-bottom: 6px;">';
        $references .= htmlspecialchars($citation['text']);
        $references .= ' - <cite style="font-style: italic;">Yaga Calls Analysis</cite>';
        $references .= '</li>';
    }
    
    $references .= '</ol>';
    $references .= '</div>';
    
    return $references;
}

/**
 * Generate citation-ready structured data
 */
function generateCitationStructuredData($citations, $analysis) {
    if (empty($citations)) {
        return null;
    }
    
    $citationData = [];
    foreach ($citations as $citation) {
        $citationData[] = [
            '@type' => 'Claim',
            'text' => $citation['text'],
            'author' => [
                '@type' => 'Organization',
                'name' => 'Yaga Calls'
            ],
            'datePublished' => $analysis['date'] ?? date('Y-m-d')
        ];
    }
    
    return [
        '@context' => 'https://schema.org',
        '@type' => 'Article',
        'headline' => $analysis['hook'] ?? '',
        'citation' => $citationData
    ];
}

/**
 * Format content with citation hooks for LLM retrieval
 */
function formatContentForLLMCitation($content, $coin, $hook) {
    $citations = extractCitations($content);
    $contentWithMarkers = addCitationMarkers($content, $citations);
    $referencesSection = generateReferencesSection($citations, $coin, $hook);
    
    return [
        'content' => $contentWithMarkers,
        'references' => $referencesSection,
        'citations' => $citations,
        'citation_count' => count($citations)
    ];
}

