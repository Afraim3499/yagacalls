<?php
/**
 * News Fetcher - Fetches one article from multiple crypto news APIs
 * Normalizes data and saves to data/news.json
 * Filters for articles from last 24 hours
 */

// Set execution time limit for API calls
set_time_limit(90);

// Cache file to track last fetch time
$cacheFile = __DIR__ . '/../data/news-cache.json';
$dataFile = __DIR__ . '/../data/news.json';
$cacheDuration = 600; // 10 minutes

// Maximum age for articles (24 hours)
$maxArticleAgeHours = 24;

// Ensure data directory exists
$dataDir = dirname($dataFile);
if (!file_exists($dataDir)) {
    if (!@mkdir($dataDir, 0755, true)) {
        die(json_encode(['success' => false, 'error' => 'Cannot create data directory']));
    }
}

/**
 * Generic HTTP fetch function
 */
function fetchUrl($url, $headers = []) {
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 20);
    curl_setopt($ch, CURLOPT_USERAGENT, 'Yaga Calls News Aggregator');
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    
    if (!empty($headers)) {
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    }
    
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $curlError = curl_error($ch);
    curl_close($ch);
    
    if ($httpCode !== 200 || $response === false) {
        return ['error' => "HTTP $httpCode: $curlError", 'code' => $httpCode];
    }
    
    return ['data' => $response, 'code' => $httpCode];
}

/**
 * Find most recent article from last 24 hours
 */
function findRecentArticle($articles, $existingNews, $dateField, $maxAgeHours = 24) {
    if (empty($articles)) {
        return null;
    }
    
    $cutoffTime = time() - ($maxAgeHours * 60 * 60);
    
    // Sort articles by date (newest first)
    usort($articles, function($a, $b) use ($dateField) {
        $timeA = 0;
        $timeB = 0;
        
        if (isset($a[$dateField])) {
            $timeA = is_numeric($a[$dateField]) ? $a[$dateField] : strtotime($a[$dateField]);
        }
        if (isset($b[$dateField])) {
            $timeB = is_numeric($b[$dateField]) ? $b[$dateField] : strtotime($b[$dateField]);
        }
        
        return $timeB - $timeA; // Descending (newest first)
    });
    
    // Find first article that's recent and not a duplicate
    foreach ($articles as $article) {
        $articleTime = 0;
        if (isset($article[$dateField])) {
            $articleTime = is_numeric($article[$dateField]) ? $article[$dateField] : strtotime($article[$dateField]);
        }
        
        $articleUrl = $article['url'] ?? '';
        
        // Check if article is recent (within last 24 hours)
        if ($articleTime >= $cutoffTime) {
            // Check if not duplicate
            if (!empty($articleUrl) && !articleExists($articleUrl, $existingNews)) {
                return $article;
            }
        }
    }
    
    // If no recent articles found, return the most recent one anyway (if not duplicate)
    if (!empty($articles)) {
        $firstArticle = $articles[0];
        $articleUrl = $firstArticle['url'] ?? '';
        
        if (!empty($articleUrl) && !articleExists($articleUrl, $existingNews)) {
            return $firstArticle;
        }
    }
    
    return null;
}

/**
 * Normalize CoinGecko news article
 */
function normalizeCoinGeckoArticle($article) {
    $articleTime = isset($article['created_at']) ? (is_numeric($article['created_at']) ? $article['created_at'] : strtotime($article['created_at'])) : time();
    
    return [
        'id' => md5($article['url'] ?? uniqid()),
        'title' => $article['title'] ?? '',
        'description' => strip_tags($article['description'] ?? ''),
        'url' => $article['url'] ?? '',
        'image' => $article['thumb_2x'] ?? $article['thumb'] ?? '',
        'source' => 'coingecko',
        'sourceName' => 'CoinGecko',
        'date' => date('Y-m-d H:i:s', $articleTime),
        'fetchedAt' => date('Y-m-d H:i:s'),
        'tickers' => [],
        'sentiment' => 'Neutral',
        'topics' => []
    ];
}

/**
 * Normalize CryptoCompare news article
 */
function normalizeCryptoCompareArticle($article) {
    $publishedTime = isset($article['published_on']) ? $article['published_on'] : time();
    if (is_numeric($publishedTime)) {
        $date = date('Y-m-d H:i:s', $publishedTime);
    } else {
        $date = date('Y-m-d H:i:s', strtotime($publishedTime));
    }
    
    return [
        'id' => md5($article['url'] ?? uniqid()),
        'title' => $article['title'] ?? '',
        'description' => strip_tags($article['body'] ?? $article['summary'] ?? ''),
        'url' => $article['url'] ?? '',
        'image' => $article['imageurl'] ?? '',
        'source' => 'cryptocompare',
        'sourceName' => $article['source'] ?? 'CryptoCompare',
        'date' => $date,
        'fetchedAt' => date('Y-m-d H:i:s'),
        'tickers' => isset($article['tags']) ? (is_array($article['tags']) ? $article['tags'] : explode(',', $article['tags'])) : [],
        'sentiment' => 'Neutral',
        'topics' => isset($article['categories']) ? (is_array($article['categories']) ? $article['categories'] : explode(',', $article['categories'])) : []
    ];
}

/**
 * Normalize NewsAPI article
 */
function normalizeNewsAPIArticle($article) {
    $publishedTime = isset($article['pubDate']) ? strtotime($article['pubDate']) : time();
    
    return [
        'id' => md5($article['link'] ?? uniqid()),
        'title' => $article['title'] ?? '',
        'description' => strip_tags($article['description'] ?? $article['content'] ?? ''),
        'url' => $article['link'] ?? '',
        'image' => $article['image_url'] ?? '',
        'source' => 'newsapi',
        'sourceName' => $article['source_name'] ?? 'NewsAPI',
        'date' => date('Y-m-d H:i:s', $publishedTime),
        'fetchedAt' => date('Y-m-d H:i:s'),
        'tickers' => [],
        'sentiment' => 'Neutral',
        'topics' => []
    ];
}

/**
 * Normalize CryptoPanic article
 */
function normalizeCryptoPanicArticle($article) {
    $publishedTime = isset($article['published_at']) ? strtotime($article['published_at']) : time();
    
    return [
        'id' => md5($article['url'] ?? uniqid()),
        'title' => $article['title'] ?? '',
        'description' => strip_tags($article['snippet'] ?? ''),
        'url' => $article['url'] ?? '',
        'image' => $article['metadata']['image'] ?? '',
        'source' => 'cryptopanic',
        'sourceName' => $article['source']['title'] ?? 'CryptoPanic',
        'date' => date('Y-m-d H:i:s', $publishedTime),
        'fetchedAt' => date('Y-m-d H:i:s'),
        'tickers' => [],
        'sentiment' => $article['sentiment'] ?? 'Neutral',
        'topics' => []
    ];
}

/**
 * Normalize NewsData.io article
 */
function normalizeNewsDataArticle($article) {
    $publishedTime = isset($article['pubDate']) ? strtotime($article['pubDate']) : time();
    
    return [
        'id' => md5($article['link'] ?? uniqid()),
        'title' => $article['title'] ?? '',
        'description' => strip_tags($article['description'] ?? $article['content'] ?? ''),
        'url' => $article['link'] ?? '',
        'image' => $article['image_url'] ?? '',
        'source' => 'newsdata',
        'sourceName' => $article['source_name'] ?? 'NewsData',
        'date' => date('Y-m-d H:i:s', $publishedTime),
        'fetchedAt' => date('Y-m-d H:i:s'),
        'tickers' => [],
        'sentiment' => 'Neutral',
        'topics' => []
    ];
}

/**
 * Normalize TheNewsAPI article
 */
function normalizeTheNewsAPIArticle($article) {
    $publishedTime = isset($article['published_at']) ? strtotime($article['published_at']) : time();
    
    return [
        'id' => md5($article['url'] ?? uniqid()),
        'title' => $article['title'] ?? '',
        'description' => strip_tags($article['description'] ?? $article['snippet'] ?? ''),
        'url' => $article['url'] ?? '',
        'image' => $article['image'] ?? '',
        'source' => 'thenewsapi',
        'sourceName' => $article['source'] ?? 'TheNewsAPI',
        'date' => date('Y-m-d H:i:s', $publishedTime),
        'fetchedAt' => date('Y-m-d H:i:s'),
        'tickers' => [],
        'sentiment' => 'Neutral',
        'topics' => []
    ];
}

/**
 * Fetch from CoinGecko API
 */
function fetchCoinGeckoNews($existingNews = []) {
    global $maxArticleAgeHours;
    
    $url = 'https://api.coingecko.com/api/v3/news';
    $result = fetchUrl($url);
    
    if (isset($result['error'])) {
        return null;
    }
    
    $data = @json_decode($result['data'], true);
    if (json_last_error() !== JSON_ERROR_NONE || !isset($data['data']) || empty($data['data'])) {
        return null;
    }
    
    // Find most recent article from last 24 hours
    $recentArticle = findRecentArticle($data['data'], $existingNews, 'created_at', $maxArticleAgeHours);
    if ($recentArticle) {
        return normalizeCoinGeckoArticle($recentArticle);
    }
    
    return null;
}

/**
 * Fetch from CryptoCompare API
 */
function fetchCryptoCompareNews($existingNews = []) {
    global $maxArticleAgeHours;
    
    $url = 'https://min-api.cryptocompare.com/data/v2/news/?lang=EN';
    $result = fetchUrl($url);
    
    if (isset($result['error'])) {
        return null;
    }
    
    $data = @json_decode($result['data'], true);
    if (json_last_error() !== JSON_ERROR_NONE || !isset($data['Data']) || empty($data['Data'])) {
        return null;
    }
    
    // Find most recent article from last 24 hours
    $recentArticle = findRecentArticle($data['Data'], $existingNews, 'published_on', $maxArticleAgeHours);
    if ($recentArticle) {
        return normalizeCryptoCompareArticle($recentArticle);
    }
    
    return null;
}

/**
 * Fetch from NewsAPI.org (crypto category)
 * Note: Requires free API key from newsapi.org
 */
function fetchNewsAPINews($existingNews = []) {
    global $maxArticleAgeHours;
    
    // Optional: Add your NewsAPI key here if you have one
    // $apiKey = 'YOUR_NEWSAPI_KEY_HERE';
    // For now, we'll skip if no key (many free APIs require keys)
    
    // NewsAPI requires API key, so we'll skip for now
    // Uncomment and add key if you register at newsapi.org
    return null;
    
    /*
    $url = 'https://newsapi.org/v2/everything?q=cryptocurrency+OR+bitcoin+OR+crypto&language=en&sortBy=publishedAt&pageSize=10';
    $headers = ['X-API-Key: ' . $apiKey];
    $result = fetchUrl($url, $headers);
    
    if (isset($result['error'])) {
        return null;
    }
    
    $data = @json_decode($result['data'], true);
    if (json_last_error() !== JSON_ERROR_NONE || !isset($data['articles']) || empty($data['articles'])) {
        return null;
    }
    
    $recentArticle = findRecentArticle($data['articles'], $existingNews, 'publishedAt', $maxArticleAgeHours);
    if ($recentArticle) {
        return normalizeNewsAPIArticle($recentArticle);
    }
    
    return null;
    */
}

/**
 * Fetch from CryptoPanic API (free tier)
 * Note: May require API key for higher limits
 */
function fetchCryptoPanicNews($existingNews = []) {
    global $maxArticleAgeHours;
    
    // CryptoPanic free API (no key required for basic usage)
    $url = 'https://cryptopanic.com/api/v1/posts/?auth_token=&public=true&filter=hot';
    $result = fetchUrl($url);
    
    if (isset($result['error'])) {
        return null;
    }
    
    $data = @json_decode($result['data'], true);
    if (json_last_error() !== JSON_ERROR_NONE || !isset($data['results']) || empty($data['results'])) {
        return null;
    }
    
    $recentArticle = findRecentArticle($data['results'], $existingNews, 'published_at', $maxArticleAgeHours);
    if ($recentArticle) {
        return normalizeCryptoPanicArticle($recentArticle);
    }
    
    return null;
}

/**
 * Fetch from NewsData.io (crypto category)
 * Note: Requires free API key from newsdata.io
 */
function fetchNewsDataNews($existingNews = []) {
    global $maxArticleAgeHours;
    
    // Optional: Add your NewsData.io key here
    // $apiKey = 'YOUR_NEWSDATA_KEY_HERE';
    // For now, skip if no key
    return null;
    
    /*
    $url = 'https://newsdata.io/api/1/news?apikey=' . $apiKey . '&category=crypto&language=en';
    $result = fetchUrl($url);
    
    if (isset($result['error'])) {
        return null;
    }
    
    $data = @json_decode($result['data'], true);
    if (json_last_error() !== JSON_ERROR_NONE || !isset($data['results']) || empty($data['results'])) {
        return null;
    }
    
    $recentArticle = findRecentArticle($data['results'], $existingNews, 'pubDate', $maxArticleAgeHours);
    if ($recentArticle) {
        return normalizeNewsDataArticle($recentArticle);
    }
    
    return null;
    */
}

/**
 * Fetch from TheNewsAPI (crypto category)
 * Note: Requires free API key
 */
function fetchTheNewsAPINews($existingNews = []) {
    global $maxArticleAgeHours;
    
    // Optional: Add your TheNewsAPI key here
    // $apiKey = 'YOUR_THENEWSAPI_KEY_HERE';
    // For now, skip if no key
    return null;
    
    /*
    $url = 'https://api.thenewsapi.com/v1/news/all?api_token=' . $apiKey . '&search=cryptocurrency&language=en&limit=10';
    $result = fetchUrl($url);
    
    if (isset($result['error'])) {
        return null;
    }
    
    $data = @json_decode($result['data'], true);
    if (json_last_error() !== JSON_ERROR_NONE || !isset($data['data']) || empty($data['data'])) {
        return null;
    }
    
    $recentArticle = findRecentArticle($data['data'], $existingNews, 'published_at', $maxArticleAgeHours);
    if ($recentArticle) {
        return normalizeTheNewsAPIArticle($recentArticle);
    }
    
    return null;
    */
}

/**
 * Fetch from CoinDesk RSS (parsed as JSON via RSS2JSON service)
 */
function fetchCoinDeskNews($existingNews = []) {
    global $maxArticleAgeHours;
    
    // Use RSS2JSON service to convert RSS to JSON (free tier available)
    $rssUrl = 'https://www.coindesk.com/arc/outboundfeeds/rss/';
    $rss2jsonUrl = 'https://api.rss2json.com/v1/api.json?rss_url=' . urlencode($rssUrl);
    
    $result = fetchUrl($rss2jsonUrl);
    
    if (isset($result['error'])) {
        return null;
    }
    
    $data = @json_decode($result['data'], true);
    if (json_last_error() !== JSON_ERROR_NONE || !isset($data['items']) || empty($data['items'])) {
        return null;
    }
    
    // Convert RSS items to our format
    $articles = [];
    foreach ($data['items'] as $item) {
        $articles[] = [
            'title' => $item['title'] ?? '',
            'description' => $item['description'] ?? '',
            'url' => $item['link'] ?? '',
            'image' => $item['enclosure']['link'] ?? '',
            'pubDate' => $item['pubDate'] ?? '',
            'source' => 'CoinDesk'
        ];
    }
    
    $recentArticle = findRecentArticle($articles, $existingNews, 'pubDate', $maxArticleAgeHours);
    if ($recentArticle) {
        return [
            'id' => md5($recentArticle['url'] ?? uniqid()),
            'title' => $recentArticle['title'] ?? '',
            'description' => strip_tags($recentArticle['description'] ?? ''),
            'url' => $recentArticle['url'] ?? '',
            'image' => $recentArticle['image'] ?? '',
            'source' => 'coindesk',
            'sourceName' => 'CoinDesk',
            'date' => date('Y-m-d H:i:s', strtotime($recentArticle['pubDate'] ?? 'now')),
            'fetchedAt' => date('Y-m-d H:i:s'),
            'tickers' => [],
            'sentiment' => 'Neutral',
            'topics' => []
        ];
    }
    
    return null;
}

/**
 * Fetch from CoinTelegraph RSS
 */
function fetchCoinTelegraphNews($existingNews = []) {
    global $maxArticleAgeHours;
    
    $rssUrl = 'https://cointelegraph.com/rss';
    $rss2jsonUrl = 'https://api.rss2json.com/v1/api.json?rss_url=' . urlencode($rssUrl);
    
    $result = fetchUrl($rss2jsonUrl);
    
    if (isset($result['error'])) {
        return null;
    }
    
    $data = @json_decode($result['data'], true);
    if (json_last_error() !== JSON_ERROR_NONE || !isset($data['items']) || empty($data['items'])) {
        return null;
    }
    
    $articles = [];
    foreach ($data['items'] as $item) {
        $articles[] = [
            'title' => $item['title'] ?? '',
            'description' => $item['description'] ?? '',
            'url' => $item['link'] ?? '',
            'image' => $item['enclosure']['link'] ?? '',
            'pubDate' => $item['pubDate'] ?? '',
            'source' => 'CoinTelegraph'
        ];
    }
    
    $recentArticle = findRecentArticle($articles, $existingNews, 'pubDate', $maxArticleAgeHours);
    if ($recentArticle) {
        return [
            'id' => md5($recentArticle['url'] ?? uniqid()),
            'title' => $recentArticle['title'] ?? '',
            'description' => strip_tags($recentArticle['description'] ?? ''),
            'url' => $recentArticle['url'] ?? '',
            'image' => $recentArticle['image'] ?? '',
            'source' => 'cointelegraph',
            'sourceName' => 'CoinTelegraph',
            'date' => date('Y-m-d H:i:s', strtotime($recentArticle['pubDate'] ?? 'now')),
            'fetchedAt' => date('Y-m-d H:i:s'),
            'tickers' => [],
            'sentiment' => 'Neutral',
            'topics' => []
        ];
    }
    
    return null;
}

/**
 * Fetch from Bitcoin Magazine RSS
 */
function fetchBitcoinMagazineNews($existingNews = []) {
    global $maxArticleAgeHours;
    
    $rssUrl = 'https://bitcoinmagazine.com/.rss/full/';
    $rss2jsonUrl = 'https://api.rss2json.com/v1/api.json?rss_url=' . urlencode($rssUrl);
    
    $result = fetchUrl($rss2jsonUrl);
    
    if (isset($result['error'])) {
        return null;
    }
    
    $data = @json_decode($result['data'], true);
    if (json_last_error() !== JSON_ERROR_NONE || !isset($data['items']) || empty($data['items'])) {
        return null;
    }
    
    $articles = [];
    foreach ($data['items'] as $item) {
        $articles[] = [
            'title' => $item['title'] ?? '',
            'description' => $item['description'] ?? '',
            'url' => $item['link'] ?? '',
            'image' => $item['enclosure']['link'] ?? '',
            'pubDate' => $item['pubDate'] ?? '',
            'source' => 'Bitcoin Magazine'
        ];
    }
    
    $recentArticle = findRecentArticle($articles, $existingNews, 'pubDate', $maxArticleAgeHours);
    if ($recentArticle) {
        return [
            'id' => md5($recentArticle['url'] ?? uniqid()),
            'title' => $recentArticle['title'] ?? '',
            'description' => strip_tags($recentArticle['description'] ?? ''),
            'url' => $recentArticle['url'] ?? '',
            'image' => $recentArticle['image'] ?? '',
            'source' => 'bitcoinmagazine',
            'sourceName' => 'Bitcoin Magazine',
            'date' => date('Y-m-d H:i:s', strtotime($recentArticle['pubDate'] ?? 'now')),
            'fetchedAt' => date('Y-m-d H:i:s'),
            'tickers' => [],
            'sentiment' => 'Neutral',
            'topics' => []
        ];
    }
    
    return null;
}

/**
 * Fetch from Decrypt RSS
 */
function fetchDecryptNews($existingNews = []) {
    global $maxArticleAgeHours;
    
    $rssUrl = 'https://decrypt.co/feed';
    $rss2jsonUrl = 'https://api.rss2json.com/v1/api.json?rss_url=' . urlencode($rssUrl);
    
    $result = fetchUrl($rss2jsonUrl);
    
    if (isset($result['error'])) {
        return null;
    }
    
    $data = @json_decode($result['data'], true);
    if (json_last_error() !== JSON_ERROR_NONE || !isset($data['items']) || empty($data['items'])) {
        return null;
    }
    
    $articles = [];
    foreach ($data['items'] as $item) {
        $articles[] = [
            'title' => $item['title'] ?? '',
            'description' => $item['description'] ?? '',
            'url' => $item['link'] ?? '',
            'image' => $item['enclosure']['link'] ?? '',
            'pubDate' => $item['pubDate'] ?? '',
            'source' => 'Decrypt'
        ];
    }
    
    $recentArticle = findRecentArticle($articles, $existingNews, 'pubDate', $maxArticleAgeHours);
    if ($recentArticle) {
        return [
            'id' => md5($recentArticle['url'] ?? uniqid()),
            'title' => $recentArticle['title'] ?? '',
            'description' => strip_tags($recentArticle['description'] ?? ''),
            'url' => $recentArticle['url'] ?? '',
            'image' => $recentArticle['image'] ?? '',
            'source' => 'decrypt',
            'sourceName' => 'Decrypt',
            'date' => date('Y-m-d H:i:s', strtotime($recentArticle['pubDate'] ?? 'now')),
            'fetchedAt' => date('Y-m-d H:i:s'),
            'tickers' => [],
            'sentiment' => 'Neutral',
            'topics' => []
        ];
    }
    
    return null;
}

/**
 * Check if article already exists (by URL)
 */
function articleExists($url, $existingNews) {
    if (empty($url)) {
        return true; // Consider empty URLs as duplicates
    }
    
    foreach ($existingNews as $article) {
        if (isset($article['url']) && $article['url'] === $url) {
            return true;
        }
    }
    return false;
}

/**
 * Main fetch function
 */
function fetchNews($force = false) {
    global $cacheFile, $dataFile, $cacheDuration;
    
    // Check cache if not forced
    if (!$force && file_exists($cacheFile)) {
        $cacheData = @json_decode(file_get_contents($cacheFile), true);
        if ($cacheData && isset($cacheData['lastFetch'])) {
            $timeSinceLastFetch = time() - $cacheData['lastFetch'];
            if ($timeSinceLastFetch < $cacheDuration) {
                return [
                    'success' => true,
                    'message' => 'Using cached data. Last fetched ' . round($timeSinceLastFetch / 60) . ' minutes ago.',
                    'cached' => true
                ];
            }
        }
    }
    
    // Load existing news
    $existingNews = [];
    if (file_exists($dataFile)) {
        $jsonContent = @file_get_contents($dataFile);
        if ($jsonContent !== false) {
            $decoded = @json_decode($jsonContent, true);
            if (json_last_error() === JSON_ERROR_NONE && is_array($decoded)) {
                $existingNews = $decoded;
            }
        }
    }
    
    $newArticles = [];
    $errors = [];
    $successCount = 0;
    
    // List of all API fetch functions
    $apiFunctions = [
        ['name' => 'CoinGecko', 'func' => 'fetchCoinGeckoNews'],
        ['name' => 'CryptoCompare', 'func' => 'fetchCryptoCompareNews'],
        ['name' => 'CryptoPanic', 'func' => 'fetchCryptoPanicNews'],
        ['name' => 'CoinDesk', 'func' => 'fetchCoinDeskNews'],
        ['name' => 'CoinTelegraph', 'func' => 'fetchCoinTelegraphNews'],
        ['name' => 'Bitcoin Magazine', 'func' => 'fetchBitcoinMagazineNews'],
        ['name' => 'Decrypt', 'func' => 'fetchDecryptNews'],
        // Optional APIs that require keys (commented out by default)
        // ['name' => 'NewsAPI', 'func' => 'fetchNewsAPINews'],
        // ['name' => 'NewsData', 'func' => 'fetchNewsDataNews'],
        // ['name' => 'TheNewsAPI', 'func' => 'fetchTheNewsAPINews'],
    ];
    
    // Fetch from each API
    foreach ($apiFunctions as $api) {
        try {
            $article = call_user_func($api['func'], $existingNews);
            
            if ($article && !articleExists($article['url'], $existingNews)) {
                // Double-check it's not a duplicate with new articles
                $isDuplicate = false;
                foreach ($newArticles as $newArticle) {
                    if (isset($newArticle['url']) && $newArticle['url'] === $article['url']) {
                        $isDuplicate = true;
                        break;
                    }
                }
                
                if (!$isDuplicate) {
                    $newArticles[] = $article;
                    $successCount++;
                }
            } elseif ($article === null) {
                $errors[] = 'Failed to fetch from ' . $api['name'] . ' (no recent articles or API error)';
            }
        } catch (Exception $e) {
            $errors[] = 'Error fetching from ' . $api['name'] . ': ' . $e->getMessage();
        }
    }
    
    // Add new articles to existing news (prepend to keep newest first)
    if (!empty($newArticles)) {
        $existingNews = array_merge($newArticles, $existingNews);
        
        // Save updated news
        $jsonData = json_encode($existingNews, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
        if ($jsonData !== false) {
            if (@file_put_contents($dataFile, $jsonData) !== false) {
                // Update cache
                @file_put_contents($cacheFile, json_encode(['lastFetch' => time()]));
                
                return [
                    'success' => true,
                    'message' => 'Fetched ' . count($newArticles) . ' new article(s) from ' . $successCount . ' source(s)',
                    'count' => count($newArticles),
                    'sources' => $successCount,
                    'errors' => $errors
                ];
            } else {
                return [
                    'success' => false,
                    'error' => 'Failed to save news data',
                    'errors' => $errors
                ];
            }
        } else {
            return [
                'success' => false,
                'error' => 'Failed to encode news data',
                'errors' => $errors
            ];
        }
    } else {
        // Update cache even if no new articles
        @file_put_contents($cacheFile, json_encode(['lastFetch' => time()]));
        
        return [
            'success' => true,
            'message' => 'No new articles found from any source',
            'count' => 0,
            'sources' => 0,
            'errors' => $errors
        ];
    }
}

// Handle API call (only allow from CMS or cron)
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['fetch'])) {
    // Check if called from CMS (session check) or cron
    session_start();
    $isCms = isset($_SESSION['cms_logged_in']) && $_SESSION['cms_logged_in'] === true;
    $isCron = php_sapi_name() === 'cli' || (isset($_GET['cron_key']) && $_GET['cron_key'] === 'yaga_calls_2025');
    
    if (!$isCms && !$isCron) {
        http_response_code(403);
        header('Content-Type: application/json');
        echo json_encode(['success' => false, 'error' => 'Access denied']);
        exit;
    }
    
    header('Content-Type: application/json');
    $force = isset($_GET['force']) && $_GET['force'] === '1';
    echo json_encode(fetchNews($force));
    exit;
}

// If called directly, return JSON
if (php_sapi_name() === 'cli' || !isset($_SERVER['REQUEST_METHOD'])) {
    echo json_encode(fetchNews(false));
}
