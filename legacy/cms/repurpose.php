<?php
/**
 * Content Repurposing System
 * Repurposes analysis content for different formats and platforms
 */

/**
 * Repurpose analysis for Twitter/X
 */
function repurposeForTwitter($analysis) {
    $hook = $analysis['hook'] ?? '';
    $coin = $analysis['coin'] ?? '';
    $content = strip_tags($analysis['content'] ?? '');
    $link = $analysis['linkUrl'] ?? 'https://t.me/yagacalls';
    
    // Twitter has 280 character limit
    $tweet = $hook . "\n\n";
    $remaining = 280 - strlen($tweet) - 25; // 25 for link
    
    // Truncate content to fit
    if (strlen($content) > $remaining) {
        $content = substr($content, 0, $remaining - 3) . '...';
    }
    
    $tweet .= $content . "\n\n" . $link;
    
    return $tweet;
}

/**
 * Repurpose analysis for Telegram announcement
 */
function repurposeForTelegram($analysis) {
    $hook = $analysis['hook'] ?? '';
    $coin = $analysis['coin'] ?? '';
    $content = strip_tags($analysis['content'] ?? '');
    $link = $analysis['linkUrl'] ?? 'https://t.me/yagacalls';
    
    $message = "📊 <b>{$hook}</b>\n\n";
    $message .= "{$content}\n\n";
    $message .= "🔗 <a href=\"{$link}\">Get Full Analysis</a>\n\n";
    $message .= "#{$coin} #CryptoAnalysis";
    
    return $message;
}

/**
 * Repurpose analysis for email newsletter
 */
function repurposeForEmail($analysis) {
    $hook = $analysis['hook'] ?? '';
    $coin = $analysis['coin'] ?? '';
    $content = $analysis['content'] ?? '';
    $date = isset($analysis['date']) ? date('F j, Y', strtotime($analysis['date'])) : date('F j, Y');
    $link = $analysis['linkUrl'] ?? 'https://t.me/yagacalls';
    
    $html = "<h2>{$hook}</h2>";
    $html .= "<p><strong>Date:</strong> {$date}</p>";
    $html .= "<p><strong>Coin:</strong> {$coin}</p>";
    $html .= "<div>{$content}</div>";
    $html .= "<p><a href=\"{$link}\" style=\"background: #E39E2E; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;\">Read Full Analysis</a></p>";
    
    return $html;
}

/**
 * Repurpose analysis for LinkedIn post
 */
function repurposeForLinkedIn($analysis) {
    $hook = $analysis['hook'] ?? '';
    $coin = $analysis['coin'] ?? '';
    $content = strip_tags($analysis['content'] ?? '');
    $link = $analysis['linkUrl'] ?? 'https://t.me/yagacalls';
    
    // LinkedIn prefers longer, professional content
    $post = "💡 {$hook}\n\n";
    $post .= "{$content}\n\n";
    $post .= "Key insights:\n";
    $post .= "• Market analysis for {$coin}\n";
    $post .= "• Technical indicators and price action\n";
    $post .= "• Risk management considerations\n\n";
    $post .= "Read the full analysis: {$link}\n\n";
    $post .= "#Cryptocurrency #Trading #{$coin} #MarketAnalysis";
    
    return $post;
}

/**
 * Generate multiple formats at once
 */
function repurposeAllFormats($analysis) {
    return [
        'twitter' => repurposeForTwitter($analysis),
        'telegram' => repurposeForTelegram($analysis),
        'email' => repurposeForEmail($analysis),
        'linkedin' => repurposeForLinkedIn($analysis)
    ];
}

/**
 * Generate RSS feed item
 */
function repurposeForRSS($analysis) {
    $hook = htmlspecialchars($analysis['hook'] ?? '');
    $content = strip_tags($analysis['content'] ?? '');
    $date = isset($analysis['date']) ? date('r', strtotime($analysis['date'])) : date('r');
    $link = $analysis['linkUrl'] ?? 'https://yagacalls.com/analysis';
    
    return [
        'title' => $hook,
        'description' => substr($content, 0, 200),
        'link' => $link,
        'pubDate' => $date,
        'guid' => 'analysis-' . ($analysis['id'] ?? uniqid())
    ];
}

