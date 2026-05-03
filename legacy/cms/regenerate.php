<?php
/**
 * Regenerate analysis.html page from JSON data
 */

// Include performance optimization
require_once __DIR__ . '/performance.php';
// Include zero-click optimizer
require_once __DIR__ . '/zero-click-optimizer.php';
// Include citation hooks for LLM citation formatting
require_once __DIR__ . '/citation-hooks.php';
// Include PAA (People Also Ask) generator
require_once __DIR__ . '/paa-generator.php';

/**
 * Auto-generate internal links in content based on coin mentions and related topics
 */
function addInternalLinks($content, $currentCoin, $allAnalyses) {
    // List of internal pages to link to
    $internalPages = [
        'method' => ['method', '5-stage', 'process', 'narrative killer'],
        'pricing' => ['pricing', 'signals', 'premium', 'subscription'],
        'proof' => ['proof', 'results', 'track record', 'performance'],
        'blog' => ['blog', 'education', 'strategy', 'guide'],
        'contact' => ['contact', 'telegram', 'join', 'group']
    ];
    
    // Find related analyses by coin or similar topics
    $relatedAnalyses = [];
    foreach ($allAnalyses as $analysis) {
        if (isset($analysis['coin']) && strtolower($analysis['coin']) === strtolower($currentCoin) && isset($analysis['id'])) {
            $relatedAnalyses[] = $analysis;
        }
    }
    
    // Add links to method page if technical terms are mentioned
    $technicalTerms = ['support', 'resistance', 'ema', 'rsi', 'entry', 'exit', 'stop-loss', 'take-profit'];
    $hasTechnical = false;
    foreach ($technicalTerms as $term) {
        if (stripos($content, $term) !== false) {
            $hasTechnical = true;
            break;
        }
    }
    
    if ($hasTechnical && stripos($content, 'method') === false) {
        $content = preg_replace('/\b(5-stage|process|methodology)\b/i', '<a href="/method" rel="internal">$1</a>', $content, 1);
    }
    
    // Add link to pricing if "signals" or "premium" mentioned
    if ((stripos($content, 'signals') !== false || stripos($content, 'premium') !== false) && stripos($content, '/pricing') === false) {
        $content = preg_replace('/\b(signals|premium)\b/i', '<a href="/pricing" rel="internal">$1</a>', $content, 1);
    }
    
    return $content;
}

function regenerateAnalysisPage() {
    $dataFile = __DIR__ . '/../data/analysis.json';
    $outputFile = __DIR__ . '/../analysis.html';
    
    // Verify data file exists
    if (!file_exists($dataFile)) {
        error_log('CMS Error: Analysis data file not found: ' . $dataFile);
        return false;
    }
    
    // Verify data file is readable
    if (!is_readable($dataFile)) {
        error_log('CMS Error: Analysis data file is not readable: ' . $dataFile);
        return false;
    }
    
    // Read and decode JSON data
    $jsonContent = @file_get_contents($dataFile);
    if ($jsonContent === false) {
        error_log('CMS Error: Failed to read analysis data file: ' . $dataFile);
        return false;
    }
    
    $analyses = @json_decode($jsonContent, true);
    if (json_last_error() !== JSON_ERROR_NONE) {
        error_log('CMS Error: Invalid JSON in analysis data file: ' . json_last_error_msg());
        return false;
    }
    
    $analyses = $analyses ?: [];
    
    // Filter out unpublished scheduled posts
    $analyses = array_filter($analyses, function($analysis) {
        // If post has scheduledPublish and is not published, check if time has passed
        if (isset($analysis['scheduledPublish']) && (!isset($analysis['published']) || $analysis['published'] !== true)) {
            $scheduledTime = strtotime($analysis['scheduledPublish']);
            $currentTime = time();
            // Only include if scheduled time has passed (should be published)
            return $scheduledTime <= $currentTime;
        }
        // Include all published posts
        return true;
    });
    
    // Re-index array after filtering
    $analyses = array_values($analyses);
    
    // Sort by date (newest first)
    usort($analyses, function($a, $b) {
        return strtotime($b['date']) - strtotime($a['date']);
    });
    
    // Limit to latest 20 analyses
    $analyses = array_slice($analyses, 0, 20);
    
    // Generate analysis cards HTML
    $analysisCardsHtml = '';
    foreach ($analyses as $analysis) {
        $hook = htmlspecialchars($analysis['hook'] ?? '');
        $coin = htmlspecialchars($analysis['coin'] ?? '');
        $coinTagClass = isset($analysis['coinTagClass']) && $analysis['coinTagClass'] === 'success' ? 'success' : '';
        $date = htmlspecialchars($analysis['date'] ?? date('Y-m-d'));
        $dateFormatted = date('M d, Y', strtotime($date));
        $content = $analysis['content'] ?? '';
        // Convert newlines to paragraphs if content doesn't already have HTML tags
        if (strip_tags($content) === $content) {
            // Content is plain text, convert newlines to paragraphs
            $paragraphs = array_filter(array_map('trim', explode("\n", $content)));
            $content = '';
            foreach ($paragraphs as $para) {
                if (!empty($para)) {
                    $content .= '<p>' . htmlspecialchars($para) . '</p>';
                }
            }
        } else {
            // Content already has HTML, just escape it properly
            $content = $content;
        }
        
        // Add internal links automatically
        $content = addInternalLinks($content, $coin, $analyses);
        
        $linkUrl = htmlspecialchars($analysis['linkUrl'] ?? 'https://t.me/yagacalls');
        $linkText = htmlspecialchars($analysis['linkText'] ?? 'Get Full Analysis');
        $linkType = $analysis['linkType'] ?? 'telegram';
        $image = isset($analysis['image']) && $analysis['image'] ? htmlspecialchars($analysis['image']) : '';
        
        // Determine link icon based on type
        $linkIcon = '';
        if ($linkType === 'x') {
            $linkIcon = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>';
        } else {
            $linkIcon = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.61-1.13 7.44-.14.9-.41 1.2-.67 1.23-.57.05-1-.38-1.55-.75-.86-.6-1.35-.97-2.18-1.56-.96-.62-.34-.96.21-1.52.14-.14 2.47-2.27 2.52-2.46.01-.03.01-.15-.07-.21s-.17-.04-.24-.02c-.1.02-1.68 1.07-4.76 3.14-.45.3-.86.44-1.23.44-.41-.01-1.2-.23-1.78-.42-.72-.24-1.29-.37-1.24-.79.03-.24.36-.49 1-.74 3.92-1.72 6.54-2.85 7.87-3.42 3.78-1.67 4.56-1.96 5.07-1.97.11 0 .36.03.52.17.13.11.17.26.19.36z"/></svg>';
        }
        
        $signalType = htmlspecialchars($analysis['signalType'] ?? '');
        $signalStatus = htmlspecialchars($analysis['signalStatus'] ?? '');
        $entryZone = htmlspecialchars($analysis['entryZone'] ?? '');
        $targets = htmlspecialchars($analysis['targets'] ?? '');
        $stopLoss = htmlspecialchars($analysis['stopLoss'] ?? '');
        $riskLevel = htmlspecialchars($analysis['riskLevel'] ?? '');
        $roiResult = htmlspecialchars($analysis['roiResult'] ?? '');
        
        // Pro Metrics Extraction
        $signalStrength = (int)($analysis['signalStrength'] ?? 0);
        $marketContext = htmlspecialchars($analysis['marketContext'] ?? '');
        $tradeDuration = htmlspecialchars($analysis['tradeDuration'] ?? '');
        $t1Hit = !empty($analysis['target1_hit']);
        $t2Hit = !empty($analysis['target2_hit']);
        $t3Hit = !empty($analysis['target3_hit']);
        
        // Time Calculation for Precision Timestamp
        $publishTimestamp = strtotime($date); // 'date' is Y-m-d H:i:s
        $timeDiff = time() - $publishTimestamp;
        if ($timeDiff < 3600) {
            $timeAgo = floor($timeDiff / 60) . 'm ago';
        } elseif ($timeDiff < 86400) {
            $timeAgo = floor($timeDiff / 3600) . 'h ago';
        } else {
            $timeAgo = floor($timeDiff / 86400) . 'd ago';
        }

        $voiceQuestion = htmlspecialchars($analysis['voiceQuestion'] ?? '');
        $voiceAnswer = htmlspecialchars($analysis['voiceAnswer'] ?? '');
        $llmContext = htmlspecialchars($analysis['llmContext'] ?? '');

        // Determine Status Badge & Color Class
        $statusBadge = '';
        $cardClass = 'analysis-card';
        if ($signalStatus === 'active') {
            $statusBadge = '<span class="status-badge status-active">🔴 ACTIVE SIGNAL</span>';
            $cardClass .= ' card-active';
        } elseif ($signalStatus === 'pending') {
            $statusBadge = '<span class="status-badge status-pending">⏳ PENDING ENTRY</span>';
        } elseif ($signalStatus === 'hit') {
            $statusBadge = '<span class="status-badge status-hit">✅ TARGET HIT ' . ($roiResult ? "($roiResult)" : '') . '</span>';
        } elseif ($signalStatus === 'closed') {
            $statusBadge = '<span class="status-badge status-closed">🏁 CLOSED</span>';
            $cardClass .= ' card-closed';
        }

        $analysisId = $analysis['id'] ?? uniqid();
        
        // Generate Ticket Data (Clean Layout)
        $dataGrid = '';
        if ($signalType && ($signalType === 'long' || $signalType === 'short' || $signalType === 'spot')) {
            $directionIcon = $signalType === 'long' ? '🔼' : ($signalType === 'short' ? '🔽' : '🔵');
            $directionClass = $signalType === 'long' ? 'dir-long' : ($signalType === 'short' ? 'dir-short' : 'dir-spot');
            $directionLabel = strtoupper($signalType);
            
            // Target List Construction
            $targetList = array_map('trim', explode(',', $targets));
            $targetHtml = '';
            foreach ($targetList as $i => $t) {
                if (empty($t)) continue;
                $isHit = false;
                if ($i === 0 && $t1Hit) $isHit = true;
                if ($i === 1 && $t2Hit) $isHit = true;
                if ($i === 2 && $t3Hit) $isHit = true;
                
                $checkIcon = $isHit ? '✔' : '○'; 
                $checkStyle = $isHit ? 'color: var(--color-success); font-weight: 700;' : 'color: var(--color-text-muted); opacity: 0.7;';
                $targetHtml .= '<div style="font-family: monospace; font-size: 13px; margin-bottom: 4px; ' . $checkStyle . '">' . $checkIcon . ' ' . $t . '</div>';
            }

            // Strength Bar HTML
            $strengthBar = '';
            if ($signalStrength > 0) {
                $barColor = $signalStrength >= 80 ? 'var(--color-success)' : ($signalStrength >= 50 ? 'var(--color-primary)' : 'var(--color-warning)');
                $strengthBar = '
                <div class="strength-meter" style="margin-top: 12px; margin-bottom: 8px;">
                    <div style="display:flex; justify-content:space-between; font-size:11px; color:var(--color-text-muted); margin-bottom:4px;">
                        <span>SIGNAL STRENGTH</span>
                        <span>' . $signalStrength . '/100</span>
                    </div>
                    <div style="height: 4px; background: rgba(255,255,255,0.1); border-radius: 2px; overflow: hidden;">
                        <div style="width: ' . $signalStrength . '%; height: 100%; background: ' . $barColor . ';"></div>
                    </div>
                </div>';
            }
            
            $dataGrid = '
            <div class="ticket-grid" style="padding: 16px; background: rgba(0,0,0,0.2); border: 1px solid var(--color-line); border-radius: 8px; margin: 16px 0;">
                
                <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; margin-bottom: 16px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 12px;">
                    <div>
                        <span style="font-size: 11px; color: var(--color-text-muted); display: block; margin-bottom: 4px;">ENTRY</span>
                        <span style="font-family: monospace; color: var(--color-text-high); font-size: 14px;">' . ($entryZone ?: '-') . '</span>
                    </div>
                    <div style="border-left: 1px solid rgba(255,255,255,0.05); padding-left: 12px;">
                         <span style="font-size: 11px; color: var(--color-text-muted); display: block; margin-bottom: 4px;">STOP</span>
                         <span style="font-family: monospace; color: #EF4444; font-size: 14px;">' . ($stopLoss ?: '-') . '</span>
                    </div>
                     <div style="border-left: 1px solid rgba(255,255,255,0.05); padding-left: 12px;">
                         <span style="font-size: 11px; color: var(--color-text-muted); display: block; margin-bottom: 4px;">RISK</span>
                         <span style="font-family: monospace; color: var(--color-text-muted); font-size: 14px;">' . ucfirst($riskLevel ?: 'Medium') . '</span>
                    </div>
                </div>

                <div style="display: grid; grid-template-columns: 3fr 2fr; gap: 12px;">
                    <div>
                        <span style="font-size: 11px; color: var(--color-text-muted); display: block; margin-bottom: 6px;">TARGETS</span>
                        ' . $targetHtml . '
                    </div>
                     <div>
                        ' . $strengthBar . '
                        ' . ($marketContext ? '<span style="display:inline-block; font-size:11px; background:rgba(255,255,255,0.1); padding:2px 6px; border-radius:4px; color:var(--color-text-muted); margin-top:8px;">' . $marketContext . '</span>' : '') . '
                    </div>
                </div>

            </div>';
        }

        // Hidden LLM Context Block (AIO)
        $llmBlock = '';
        if ($llmContext) {
            $llmBlock = '<div class="llm-context" style="display:none;" data-role="ai-context">' . $llmContext . '</div>';
        }

        // Determine if Title or Pair should be main Header
        // If it's a signal, Pair is H2. Hook is smaller H3.
        $headerHtml = '';
        if ($signalType) {
            $headerHtml = '
            <div class="ticket-header" style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px;">
                <div>
                     <div style="display:flex; align-items:center; gap: 10px;">
                        <span class="coin-tag' . ($coinTagClass ? ' ' . $coinTagClass : '') . '" style="font-size: 18px; font-weight: 700; padding: 4px 10px;">' . $coin . '/USDT</span>
                        ' . ($signalType === 'long' ? '<span style="color:var(--color-success); font-weight:700; background:rgba(16,185,129,0.1); padding:2px 6px; border-radius:4px; font-size:12px;">LONG 🔼</span>' : '') . '
                        ' . ($signalType === 'short' ? '<span style="color:var(--color-error); font-weight:700; background:rgba(239,68,68,0.1); padding:2px 6px; border-radius:4px; font-size:12px;">SHORT 🔽</span>' : '') . '
                     </div>
                     <time style="display:block; font-size: 12px; color: var(--color-text-muted); margin-top: 4px;">' . gmdate('H:i', $publishTimestamp) . ' UTC (' . $timeAgo . ')</time>
                </div>
                ' . $statusBadge . '
            </div>
            <h3 class="analysis-hook" style="font-size: 15px; color: var(--color-text-muted); font-weight: normal; margin-bottom: 8px;">' . $hook . '</h3>';
        } else {
            // Standard Update Layout
            $headerHtml = '
            <div class="card-header-row" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
               <div class="header-left">
                   <span class="coin-tag' . ($coinTagClass ? ' ' . $coinTagClass : '') . '">' . $coin . '</span>
                   <time class="analysis-date" datetime="' . $date . '" itemprop="datePublished" style="margin-left: 8px;">' . $timeAgo . '</time>
               </div>
               ' . $statusBadge . '
           </div>
           <h3 class="analysis-hook" itemprop="headline" style="font-size: 18px; margin-bottom: 12px; line-height: 1.4;">' . $hook . '</h3>';
        }

        $analysisCardsHtml .= '
        <!-- Analysis Card: ' . $coin . ' -->
        <article class="' . $cardClass . '" itemscope itemtype="https://schema.org/Article" data-analysis-id="' . htmlspecialchars($analysisId) . '">
          ' . $llmBlock . '
          ' . $headerHtml . '
          ' . $dataGrid;
        
        if ($image) {
            $analysisCardsHtml .= '
          <div class="analysis-image" style="margin-bottom: 12px;">
            <img src="' . $image . '" alt="Chart analysis for ' . $hook . '" style="width: 100%; border-radius: 8px; border: 1px solid var(--color-line);">
          </div>';
        }
        
        // Add citation hooks for LLM retrieval
        $contentWithCitations = $content;
        $referencesSection = '';
        try {
            if (function_exists('formatContentForLLMCitation')) {
                $citationData = formatContentForLLMCitation($content, $coin, $hook);
                $contentWithCitations = $citationData['content'] ?? $content;
                $referencesSection = $citationData['references'] ?? '';
            }
        } catch (Exception $e) {
            error_log('CMS Error: Citation formatting failed: ' . $e->getMessage());
        } catch (Error $e) {
            error_log('CMS Fatal Error: Citation formatting failed: ' . $e->getMessage());
        }
        
        // Add voice query optimized Q&A section if content mentions key terms
        $voiceQASection = '';
        $hasPrice = preg_match('/\$[\d,]+/', $content);
        $hasTechnical = preg_match('/\b(support|resistance|entry|exit|stop|target)\b/i', $content);
        
        if ($hasPrice || $hasTechnical) {
            $voiceQASection = '<div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid var(--color-line);">';
            $voiceQASection .= '<h4 style="font-size: 14px; color: var(--color-primary); margin-bottom: 8px;">Quick Answers</h4>';
            
            if ($hasPrice) {
                preg_match('/\$[\d,]+/', $content, $priceMatches);
                if (!empty($priceMatches)) {
                    $voiceQASection .= '<p style="font-size: 13px; color: var(--color-text-muted); margin: 4px 0;"><strong>What is the price target?</strong> ' . htmlspecialchars($coin) . ' target is around ' . $priceMatches[0] . '.</p>';
                }
            }
            
            if ($hasTechnical) {
                $voiceQASection .= '<p style="font-size: 13px; color: var(--color-text-muted); margin: 4px 0;"><strong>What is the analysis about?</strong> Technical analysis of ' . htmlspecialchars($coin) . ' with entry and exit points.</p>';
            }
            
            $voiceQASection .= '</div>';
        }
        
        // Use content with citations
        $content = $contentWithCitations;
        
        // Generate PAA questions
        $paaSection = '';
        try {
            if (function_exists('generatePAAQuestions') && function_exists('generatePAASection')) {
                $paaQuestions = generatePAAQuestions($content, $coin, $hook);
                $paaSection = generatePAASection($paaQuestions, $coin);
            }
        } catch (Exception $e) {
            error_log('CMS Error: PAA generation failed: ' . $e->getMessage());
        } catch (Error $e) {
            error_log('CMS Fatal Error: PAA generation failed: ' . $e->getMessage());
        }
        
         // Generate featured snippet content for zero-click optimization
         $richSnippet = '';
         try {
             if (function_exists('generateFeaturedSnippetContent') && function_exists('generateRichSnippetHTML')) {
                 $snippet = generateFeaturedSnippetContent($content, $coin, $hook);
                 $richSnippet = generateRichSnippetHTML($snippet, $coin);
             }
         } catch (Exception $e) {
             error_log('CMS Error: Featured snippet generation failed: ' . $e->getMessage());
         } catch (Error $e) {
             error_log('CMS Fatal Error: Featured snippet generation failed: ' . $e->getMessage());
         }
         
         // Separate main content from additional sections
         $mainContent = $richSnippet . $content;
         $additionalSections = $voiceQASection . $referencesSection . $paaSection;
         
         // Calculate content length to determine if we need read more (only count main content)
         $contentLength = strlen(strip_tags($mainContent));
         $needsReadMore = $contentLength > 300 || !empty($additionalSections); // Show read more if content is long OR if there are additional sections
         
         $analysisCardsHtml .= '
           <div class="analysis-content-wrapper" itemprop="articleBody">
             <div class="analysis-content' . ($needsReadMore ? ' analysis-content-collapsed' : '') . '" data-analysis-id="' . htmlspecialchars($analysisId) . '">
               ' . $mainContent . '
               <div class="analysis-additional-sections" style="display: none;">
                 ' . $additionalSections . '
               </div>
             </div>
             ' . ($needsReadMore ? '<button class="analysis-read-more" data-analysis-id="' . htmlspecialchars($analysisId) . '" onclick="toggleAnalysisContent(\'' . htmlspecialchars($analysisId) . '\')">Read more</button>' : '') . '
           </div>
           <div class="analysis-card-footer">
             <a href="' . $linkUrl . '" target="_blank" rel="noopener" class="' . ($linkType === 'x' ? 'analysis-link' : 'analysis-telegram-cta') . '">
               ' . ($linkType !== 'x' ? $linkIcon : '') . '
               ' . $linkText . '
               ' . ($linkType === 'x' ? $linkIcon : '') . '
             </a>
           </div>
         </article>
 ';
    }
    
    // Generate structured data for SEO with enhanced Article schema
    $structuredDataItems = [];
    foreach (array_slice($analyses, 0, 10) as $index => $analysis) {
        $articleData = [
            '@type' => 'Article',
            'position' => $index + 1,
            'headline' => $analysis['hook'] ?? '',
            'datePublished' => $analysis['date'] ?? date('Y-m-d'),
            'dateModified' => $analysis['updatedAt'] ?? $analysis['date'] ?? date('Y-m-d'),
            'about' => [
                [
                    '@type' => 'Thing',
                    'name' => ($analysis['coin'] ?? '') . ' cryptocurrency',
                    'description' => ($analysis['coin'] ?? '') . ' price analysis and trading insights'
                ]
            ],
            'author' => [
                '@type' => 'Person',
                'name' => 'Yaga Calls Team',
                'memberOf' => [
                    '@type' => 'Organization',
                    'name' => 'Yaga Calls',
                    'url' => 'https://yagacalls.com'
                ]
            ],
            'publisher' => [
                '@type' => 'Organization',
                'name' => 'Yaga Calls',
                'logo' => [
                    '@type' => 'ImageObject',
                    'url' => 'https://yagacalls.com/yaga_calls_logo.png'
                ]
            ]
        ];
        
        // Add image if available
        if (!empty($analysis['image'])) {
            $articleData['image'] = [
                '@type' => 'ImageObject',
                'url' => 'https://yagacalls.com' . $analysis['image']
            ];
        }
        
        // Add description from content
        if (!empty($analysis['content'])) {
            $contentText = strip_tags($analysis['content']);
            $articleData['description'] = mb_substr($contentText, 0, 160);
        }
        
        // Add Currency entity for crypto mentions
        $coinSymbol = $analysis['coin'] ?? '';
        if (!empty($coinSymbol)) {
            $articleData['about'][] = [
                '@type' => 'Currency',
                'name' => $coinSymbol,
                'description' => $coinSymbol . ' cryptocurrency'
            ];
        }
        
        // AIO: Add FAQ Schema if Voice Q&A exists
        if (!empty($analysis['voiceQuestion']) && !empty($analysis['voiceAnswer'])) {
            $articleData['mainEntity'] = [
                '@type' => 'FAQPage',
                'mainEntity' => [
                    [
                        '@type' => 'Question',
                        'name' => $analysis['voiceQuestion'],
                        'acceptedAnswer' => [
                            '@type' => 'Answer',
                            'text' => $analysis['voiceAnswer']
                        ]
                    ]
                ]
            ];
        }

        // Add FinancialProduct entity for trading signals
        $coinSymbol = $analysis['coin'] ?? '';
        if ($coinSymbol) {
             $articleData['about'][] = [
                '@type' => 'FinancialProduct',
                'name' => "$coinSymbol Trading Signal",
                'tickerSymbol' => $coinSymbol,
                'provider' => [
                    '@type' => 'Organization',
                    'name' => 'Yaga Calls'
                ]
            ];
        }
        
        $structuredDataItems[] = $articleData;
    }
    
    $structuredData = @json_encode([
        '@context' => 'https://schema.org',
        '@type' => 'CollectionPage',
        'name' => 'Market Intelligence Terminal',
        'description' => 'Real-time crypto trading signals, buy/sell zones, and institutional-grade market analysis.',
        'url' => 'https://yagacalls.com/analysis',
        'inLanguage' => 'en-US',
        'mainEntity' => [
            '@type' => 'ItemList',
            'numberOfItems' => count($analyses),
            'itemListElement' => $structuredDataItems
        ],
        'publisher' => [
            '@type' => 'Organization',
            'name' => 'Yaga Calls',
            'url' => 'https://yagacalls.com',
            'logo' => [
                '@type' => 'ImageObject',
                'url' => 'https://yagacalls.com/yaga_calls_logo.png'
            ],
            'sameAs' => [
                'https://t.me/yagacalls'
            ],
            'foundingDate' => '2024',
            'description' => 'Professional cryptocurrency trading signals and market analysis'
        ],
        'author' => [
            '@type' => 'Person',
            'name' => 'Yaga Calls Team',
            'jobTitle' => 'Crypto Trading Analyst',
            'worksFor' => [
                '@type' => 'Organization',
                'name' => 'Yaga Calls'
            ]
        ]
    ], JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
    
    if ($structuredData === false) {
        error_log('CMS Error: Failed to encode structured data: ' . json_last_error_msg());
        return false;
    }
    
    // Read the existing analysis.html template
    $templateFile = __DIR__ . '/../analysis.html';
    
    // Verify template file exists
    if (!file_exists($templateFile)) {
        error_log('CMS Error: Analysis template file not found: ' . $templateFile);
        return false;
    }
    
    // Verify template file is readable
    if (!is_readable($templateFile)) {
        error_log('CMS Error: Analysis template file is not readable: ' . $templateFile);
        return false;
    }
    
    $html = @file_get_contents($templateFile);
    if ($html === false) {
        error_log('CMS Error: Failed to read analysis template file: ' . $templateFile);
        return false;
    }
    
     // Add performance optimizations (with error handling)
     try {
         if (function_exists('generateResourceHints')) {
             $resourceHints = generateResourceHints('analysis');
             
             // Add resource hints to head if not present
             if (stripos($html, 'preconnect') === false && !empty($resourceHints)) {
                 $html = preg_replace('/(<head>)/i', '$1' . "\n  " . $resourceHints, $html, 1);
             }
         }
         
         // Add lazy loading to images in analysis cards
         if (function_exists('addLazyLoading')) {
             $analysisCardsHtml = addLazyLoading($analysisCardsHtml);
         }
     } catch (Exception $e) {
         // Log error but don't break page generation
         error_log('CMS Performance Optimization Error: ' . $e->getMessage());
     } catch (Error $e) {
         // Also catch fatal errors
         error_log('CMS Performance Optimization Fatal Error: ' . $e->getMessage());
     }
     
     // Add CSS for read more functionality
     $readMoreCSS = '
     /* Read More Functionality */
     .analysis-content-wrapper {
       position: relative;
     }
     .analysis-content-collapsed {
       max-height: 200px;
       overflow: hidden;
       position: relative;
       transition: max-height 0.3s ease;
     }
     .analysis-content-collapsed::after {
       content: "";
       position: absolute;
       bottom: 0;
       left: 0;
       right: 0;
       height: 60px;
       background: linear-gradient(to bottom, transparent, var(--color-surface-deep));
       pointer-events: none;
     }
     .analysis-content.expanded {
       max-height: none;
     }
     .analysis-content.expanded::after {
       display: none;
     }
     .analysis-read-more {
       background: transparent;
       border: 1px solid var(--color-primary);
       color: var(--color-primary);
       padding: 8px 16px;
       border-radius: 6px;
       font-size: 13px;
       font-weight: 600;
       cursor: pointer;
       margin-top: 12px;
       transition: all 0.2s ease;
       width: 100%;
     }
     .analysis-read-more:hover {
       background: rgba(227, 158, 46, 0.1);
       transform: translateY(-1px);
     }
     .analysis-read-more:active {
       transform: translateY(0);
     }
     ';
     
     // Add JavaScript for read more functionality
     $readMoreJS = '
     <script>
     function toggleAnalysisContent(analysisId) {
       const content = document.querySelector(\'.analysis-content[data-analysis-id="\' + analysisId + \'"]\');
       const button = document.querySelector(\'.analysis-read-more[data-analysis-id="\' + analysisId + \'"]\');
       const additionalSections = content ? content.querySelector(\'.analysis-additional-sections\') : null;
       
       if (content && button) {
         if (content.classList.contains(\'expanded\')) {
           content.classList.remove(\'expanded\');
           button.textContent = \'Read more\';
           if (additionalSections) {
             additionalSections.style.display = \'none\';
           }
         } else {
           content.classList.add(\'expanded\');
           button.textContent = \'Read less\';
           if (additionalSections) {
             additionalSections.style.display = \'block\';
           }
         }
       }
     }
     </script>
     ';
     
     // Inject CSS before closing </style> tag
     if (stripos($html, '</style>') !== false) {
         $html = str_replace('</style>', $readMoreCSS . "\n  </style>", $html);
     } else {
         // If no style tag found, add it in the head
         $html = preg_replace('/(<head>)/i', '$1' . "\n  <style>" . $readMoreCSS . "\n  </style>", $html, 1);
     }
     
     // Find and replace the analysis grid content
    // Look for the section with analysis-grid class - match from "Analysis Grid" comment to closing section
    $pattern = '/(<!-- Analysis Grid -->\s*<section class="container reveal">\s*<div class="analysis-grid">)(.*?)(<\/div>\s*<\/section>\s*<!-- Mid-Page Telegram CTA -->)/s';
    $replacement = '<!-- Analysis Grid -->
    <section class="container reveal">
      <div class="analysis-grid">
        ' . $analysisCardsHtml . '      </div>
    </section>

    <!-- Mid-Page Telegram CTA -->';
    
     $html = preg_replace($pattern, $replacement, $html);
     
     // Inject JavaScript before closing </body> tag
     if (stripos($html, '</body>') !== false) {
         $html = str_replace('</body>', $readMoreJS . "\n</body>", $html);
     }
     
     // Update structured data
    $pattern = '/(<script type="application\/ld\+json">\s*\{[\s\S]*?"@type":"CollectionPage"[\s\S]*?\}\s*<\/script>)/';
    $replacement = '<script type="application/ld+json">' . "\n  " . $structuredData . "\n  </script>";
    $html = preg_replace($pattern, $replacement, $html);
    
    // Update meta description with zero-click optimization
    if (!empty($analyses)) {
        $latestAnalysis = $analyses[0];
        $coin = $latestAnalysis['coin'] ?? '';
        $hook = $latestAnalysis['hook'] ?? '';
        $content = $latestAnalysis['content'] ?? '';
        
        // Generate zero-click optimized meta description
        $metaDesc = '';
        try {
            if (function_exists('generateZeroClickMeta')) {
                $metaDesc = generateZeroClickMeta($content, $coin, $hook);
            }
        } catch (Exception $e) {
            error_log('CMS Error: Zero-click meta generation failed: ' . $e->getMessage());
        } catch (Error $e) {
            error_log('CMS Fatal Error: Zero-click meta generation failed: ' . $e->getMessage());
        }
        
        // Use existing SEO description if better, otherwise use zero-click optimized
        if (!empty($latestAnalysis['seoDescription']) && strlen($latestAnalysis['seoDescription']) >= 120) {
            $metaDesc = htmlspecialchars($latestAnalysis['seoDescription']);
        } elseif (!empty($metaDesc)) {
            $metaDesc = htmlspecialchars($metaDesc);
        } else {
            // Fallback to a simple description
            $metaDesc = htmlspecialchars($coin . ' price analysis and trading insights from Yaga Calls.');
        }
        
        $html = preg_replace(
            '/(<meta name="description" content=")[^"]*(">)/',
            '$1' . $metaDesc . '$2',
            $html
        );
    }
    
    // Verify output file directory is writable
    $outputDir = dirname($outputFile);
    if (!is_writable($outputDir)) {
        error_log('CMS Error: Output directory is not writable: ' . $outputDir);
        return false;
    }
    
    // Write the updated HTML
    $written = @file_put_contents($outputFile, $html, LOCK_EX);
    if ($written === false) {
        error_log('CMS Error: Failed to write analysis.html file: ' . $outputFile);
        return false;
    }
    
    return true;
}

/**
 * Regenerate sitemap.xml with analysis posts
 */
function regenerateSitemap() {
    $dataFile = __DIR__ . '/../data/analysis.json';
    $sitemapFile = __DIR__ . '/../sitemap.xml';
    
    // Base URLs from existing sitemap
    $baseUrls = [
        'https://yagacalls.com/home',
        'https://yagacalls.com/method',
        'https://yagacalls.com/pricing',
        'https://yagacalls.com/proof',
        'https://yagacalls.com/blog',
        'https://yagacalls.com/analysis',
        'https://yagacalls.com/contact',
        'https://yagacalls.com/blog/how-we-called-sui-rally.html',
        'https://yagacalls.com/blog/spot-vs-day-trading.html',
        'https://yagacalls.com/blog/risk-management-2-percent.html',
        'https://yagacalls.com/blog/five-stage-signal-process.html',
        'https://yagacalls.com/blog/bull-market-strategies.html',
        'https://yagacalls.com/blog/crypto-market-cycles.html',
        'https://yagacalls.com/academy'
    ];
    
    // Add analysis URLs if they exist
    if (file_exists($dataFile) && is_readable($dataFile)) {
        $jsonContent = @file_get_contents($dataFile);
        if ($jsonContent !== false) {
            $analyses = @json_decode($jsonContent, true);
            if (json_last_error() === JSON_ERROR_NONE && is_array($analyses)) {
                foreach ($analyses as $analysis) {
                    // Analysis page itself is already in base URLs
                    // Individual analysis posts could be added here if you create detail pages
                }
            }
        }
    }
    
    // Generate sitemap XML
    $xml = '<?xml version="1.0" encoding="UTF-8"?>' . "\n";
    $xml .= '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' . "\n";
    
    foreach ($baseUrls as $url) {
        $xml .= '  <url><loc>' . htmlspecialchars($url) . '</loc></url>' . "\n";
    }
    
    $xml .= '</urlset>' . "\n";
    
    // Verify sitemap directory is writable
    $sitemapDir = dirname($sitemapFile);
    if (!is_writable($sitemapDir)) {
        error_log('CMS Error: Sitemap directory is not writable: ' . $sitemapDir);
        return false;
    }
    
    // Write sitemap file
    $written = @file_put_contents($sitemapFile, $xml, LOCK_EX);
    if ($written === false) {
        error_log('CMS Error: Failed to write sitemap.xml file: ' . $sitemapFile);
        return false;
    }
    
    return true;
}

