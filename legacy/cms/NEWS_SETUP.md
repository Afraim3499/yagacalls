# News Feed System - Setup Guide

## Overview
The news feed system automatically fetches cryptocurrency news from multiple APIs and displays them on your website.

## Features
- Fetches one article from CoinGecko and CryptoCompare APIs
- Auto-deletes articles older than 2 days
- CMS integration for manual management
- Automatic cron job support

## Initial Setup

### 1. Fetch Initial News
1. Log into CMS: `/cms/admin.php`
2. Go to the "News" tab
3. Click "Fetch News" to get initial articles

### 2. Setup Cron Jobs (Optional but Recommended)

Cron jobs automate news fetching and cleanup. You can set them up in two ways:

#### Option A: Using cPanel Cron Jobs
1. Log into cPanel
2. Go to "Cron Jobs"
3. Add the following cron jobs:

**Hourly News Fetch:**
```
0 * * * * /usr/bin/php /home/yourusername/public_html/cms/news-cron.php fetch
```

**Daily Cleanup (2 AM):**
```
0 2 * * * /usr/bin/php /home/yourusername/public_html/cms/news-cron.php cleanup
```

**Note:** Replace `/home/yourusername/public_html` with your actual server path.

#### Option B: Using Web Access (Less Secure)
If you can't use cron jobs, you can use a web-based cron service like:
- EasyCron.com
- Cron-job.org
- SetCronJob.com

Set up these URLs:
- **Hourly Fetch:** `https://yagacalls.com/cms/news-cron.php?action=fetch&key=yaga_calls_2025`
- **Daily Cleanup:** `https://yagacalls.com/cms/news-cron.php?action=cleanup&key=yaga_calls_2025`

✅ **Secret key is already configured:** `yaga_calls_2025`

### 3. Security Configuration

#### Secret Key Status
✅ **Secret key has been set to:** `yaga_calls_2025`
- Configured in `cms/news-cron.php`
- Configured in `cms/news-fetcher.php`
- Configured in `cms/news-cleanup.php`

If you need to change it, update all three files with the same value.

#### File Permissions
Ensure these directories are writable:
```bash
chmod 755 data/
chmod 644 data/news.json
chmod 644 data/news-cache.json
chmod 644 data/news-cron.log
```

## Manual Operations

### Fetch News Manually
- **CMS:** Go to News tab → Click "Fetch News"
- **Force Fetch:** Click "Force Fetch" to bypass cache

### Cleanup Old News
- **CMS:** Go to News tab → Click "Cleanup Old"
- **Automatic:** Runs daily via cron (if configured)

### Delete Individual Articles
- **CMS:** Go to News tab → Click "Delete" on any article

## Troubleshooting

### No News Appearing
1. Check if news.json exists: `data/news.json`
2. Check if articles were fetched: View in CMS News tab
3. Check browser console for JavaScript errors
4. Verify API endpoints are accessible

### Cron Jobs Not Working
1. Check cron log: `data/news-cron.log`
2. Verify PHP path: Run `which php` on server
3. Test manually: Run `php cms/news-cron.php fetch` via SSH
4. Check file permissions

### API Errors
- CoinGecko and CryptoCompare APIs are free but have rate limits
- If you see "Failed to fetch" errors, wait a few minutes and try again
- Check your server's ability to make external HTTP requests (curl)

## File Structure
```
/cms/
  ├── news-fetcher.php      # Fetches news from APIs
  ├── news-cleanup.php      # Removes old articles
  ├── news-api.php          # API endpoint for frontend
  ├── news-cron.php         # Cron job handler
  └── regenerate-news.php  # Updates sitemap

/data/
  ├── news.json             # News articles storage
  ├── news-cache.json       # Cache for fetch timing
  └── news-cron.log         # Cron execution log

/news.html                  # News page
/assets/js/pages/news.js    # Frontend JavaScript
```

## API Endpoints

### Public Endpoints
- `/cms/news-api.php` - Returns filtered news JSON (public)

### Protected Endpoints (require authentication or secret key)
- `/cms/news-fetcher.php?fetch=1` - Fetch news (via CMS or cron)
- `/cms/news-cleanup.php?cleanup=1` - Cleanup old news (via CMS or cron)
- `/cms/news-cron.php?action=fetch&key=yaga_calls_2025` - Cron fetch (web access)
- `/cms/news-cron.php?action=cleanup&key=yaga_calls_2025` - Cron cleanup (web access)

## Production Checklist

- [x] Secret key configured (`yaga_calls_2025`)
- [ ] Setup cron jobs (hourly fetch, daily cleanup) - **RECOMMENDED**
- [ ] Verify file permissions on `data/` directory
- [ ] Test manual fetch via CMS
- [ ] Test cleanup via CMS
- [ ] Verify news appears on `/news` page
- [ ] Check cron logs after first execution
- [ ] Monitor API rate limits

## Support
For issues, check:
1. `data/news-cron.log` for cron errors
2. Browser console for frontend errors
3. Server error logs for PHP errors
4. CMS News tab for article status

