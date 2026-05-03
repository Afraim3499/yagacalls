<?php
/**
 * AI Drafting System
 * Generates draft content based on templates and patterns
 */

require_once __DIR__ . '/ml-enhance.php';

/**
 * Generate AI draft content based on coin and analysis type
 */
function generateAIDraft($coin, $analysisType = 'price_analysis', $marketData = []) {
    $templates = getContentTemplates();
    
    if (!isset($templates[$analysisType])) {
        $analysisType = 'price_analysis';
    }
    
    $template = $templates[$analysisType];
    $coinUpper = strtoupper($coin);
    $coinLower = strtolower($coin);
    
    // Generate hook based on template pattern
    $hook = str_replace('{COIN}', $coinUpper, $template['hook_pattern']);
    
    // Replace placeholders in hook
    if (isset($marketData['level'])) {
        $hook = str_replace('{LEVEL}', '$' . number_format($marketData['level']), $hook);
    }
    if (isset($marketData['key_level'])) {
        $hook = str_replace('{KEY_LEVEL}', '$' . number_format($marketData['key_level']), $hook);
    }
    if (isset($marketData['action'])) {
        $hook = str_replace('{ACTION}', $marketData['action'], $hook);
    }
    
    // Generate content based on template
    $content = '';
    
    switch ($analysisType) {
        case 'price_analysis':
            $content = generatePriceAnalysisDraft($coinUpper, $marketData);
            break;
        case 'breakout':
            $content = generateBreakoutDraft($coinUpper, $marketData);
            break;
        case 'support_resistance':
            $content = generateSupportResistanceDraft($coinUpper, $marketData);
            break;
        case 'news_reaction':
            $content = generateNewsReactionDraft($coinUpper, $marketData);
            break;
        default:
            $content = generatePriceAnalysisDraft($coinUpper, $marketData);
    }
    
    // Generate SEO fields
    $seoTitle = generateSEOTitle($hook, $coin);
    $seoDescription = generateSEODescription($content, $coin, $hook);
    $seoKeywords = generateSEOKeywords($content, $coin, $hook);
    
    return [
        'hook' => $hook,
        'coin' => $coinUpper,
        'content' => $content,
        'seoTitle' => $seoTitle,
        'seoDescription' => $seoDescription,
        'seoKeywords' => $seoKeywords,
        'date' => date('Y-m-d'),
        'linkUrl' => 'https://t.me/yagacalls',
        'linkText' => 'Get Full Analysis',
        'linkType' => 'telegram'
    ];
}

function generatePriceAnalysisDraft($coin, $data) {
    $price = isset($data['price']) ? '$' . number_format($data['price']) : '$XX,XXX';
    $support = isset($data['support']) ? '$' . number_format($data['support']) : '$XX,XXX';
    $resistance = isset($data['resistance']) ? '$' . number_format($data['resistance']) : '$XX,XXX';
    $entry = isset($data['entry']) ? '$' . number_format($data['entry']) : '$XX,XXX';
    $target = isset($data['target']) ? '$' . number_format($data['target']) : '$XX,XXX';
    
    return "<p><strong>{$coin}</strong> is currently trading at <strong>{$price}</strong>.</p>
<p>Key support level is at <strong>{$support}</strong>, while resistance sits at <strong>{$resistance}</strong>.</p>
<p>Entry zone: <strong>{$entry}</strong></p>
<p>Target: <strong>{$target}</strong></p>
<p>Stop-loss: Set below support level for risk management.</p>
<p>Join our Telegram group for real-time updates and full analysis.</p>";
}

function generateBreakoutDraft($coin, $data) {
    $level = isset($data['level']) ? '$' . number_format($data['level']) : '$XX,XXX';
    $target1 = isset($data['target1']) ? '$' . number_format($data['target1']) : '$XX,XXX';
    $target2 = isset($data['target2']) ? '$' . number_format($data['target2']) : '$XX,XXX';
    $entry = isset($data['entry']) ? '$' . number_format($data['entry']) : '$XX,XXX';
    
    return "<p><strong>{$coin}</strong> has broken above <strong>{$level}</strong> with strong volume confirmation.</p>
<p>This breakout suggests a potential move toward <strong>{$target1}</strong> and potentially <strong>{$target2}</strong>.</p>
<p>Entry: <strong>{$entry}</strong></p>
<p>Stop-loss: Set below the breakout level.</p>
<p>Volume is confirming the move, which is a positive signal.</p>
<p>Get the complete analysis with precise entry/exit points in our Telegram group.</p>";
}

function generateSupportResistanceDraft($coin, $data) {
    $level = isset($data['level']) ? '$' . number_format($data['level']) : '$XX,XXX';
    $type = isset($data['type']) ? $data['type'] : 'support';
    $target = isset($data['target']) ? '$' . number_format($data['target']) : '$XX,XXX';
    
    return "<p><strong>{$coin}</strong> is approaching <strong>{$level}</strong>, a key {$type} zone.</p>
<p>This level has held multiple times previously, making it significant for price action.</p>
<p>If the {$type} holds, expect a bounce toward <strong>{$target}</strong>.</p>
<p>If it breaks, the next level to watch is [next level].</p>
<p>Entry zone: Around <strong>{$level}</strong> for {$type} plays.</p>
<p>Join our Telegram for real-time updates on this key level.</p>";
}

function generateNewsReactionDraft($coin, $data) {
    $news = isset($data['news']) ? $data['news'] : 'Recent market developments';
    $reaction = isset($data['reaction']) ? $data['reaction'] : 'moved';
    $price1 = isset($data['price1']) ? '$' . number_format($data['price1']) : '$XX,XXX';
    $price2 = isset($data['price2']) ? '$' . number_format($data['price2']) : '$XX,XXX';
    
    return "<p><strong>{$news}</strong> has caused <strong>{$coin}</strong> to {$reaction}.</p>
<p>The price moved from <strong>{$price1}</strong> to <strong>{$price2}</strong>.</p>
<p>Technical analysis suggests [outlook based on reaction].</p>
<p>Key levels to watch: [support/resistance levels]</p>
<p>Entry: [entry zone]</p>
<p>Get the full breakdown and trading strategy in our premium Telegram group.</p>";
}

/**
 * Suggest content improvements based on successful patterns
 */
function suggestContentImprovements($draft) {
    $suggestions = [];
    
    // Check hook
    if (strlen($draft['hook']) < 40) {
        $suggestions[] = 'Consider making the headline longer (40-60 characters optimal)';
    }
    if (!preg_match('/\d+/', $draft['hook'])) {
        $suggestions[] = 'Add numbers or percentages to headline for better CTR';
    }
    
    // Check content
    $wordCount = str_word_count(strip_tags($draft['content']));
    if ($wordCount < 100) {
        $suggestions[] = 'Expand content to 100+ words for better SEO';
    }
    if (!preg_match('/\$[\d,]+/', $draft['content'])) {
        $suggestions[] = 'Add specific price targets for better engagement';
    }
    
    return $suggestions;
}

