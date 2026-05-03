# Pre-Production Steps - Complete Checklist

## ✅ Already Completed

- [x] Secret key configured (`yaga_calls_2025`) in all files
- [x] Security improvements (CORS, XSS protection, access control)
- [x] Cron job handler created
- [x] Documentation created
- [x] All code files implemented

## 🔴 Critical Steps Before Production

### 1. File Permissions (REQUIRED)

Set proper file permissions on your server:

```bash
# Via SSH or cPanel File Manager
chmod 755 data/
chmod 644 data/news.json
chmod 644 data/news-cache.json
chmod 644 data/news-cron.log (if exists)
```

**Why:** Ensures PHP can read/write news data files.

### 2. Initial News Fetch (REQUIRED)

Before going live, fetch some initial news:

1. Log into CMS: `https://yagacalls.com/cms/admin.php`
2. Go to "News" tab
3. Click "Fetch News" button
4. Verify articles appear in the list
5. Visit `/news` page to confirm they display correctly

**Why:** Ensures the system works and users see content immediately.

### 3. Test All Functionality (REQUIRED)

#### Test Manual Fetch
- [ ] Go to CMS → News tab
- [ ] Click "Fetch News"
- [ ] Verify new articles appear
- [ ] Check for any error messages

#### Test Manual Cleanup
- [ ] Go to CMS → News tab
- [ ] Click "Cleanup Old"
- [ ] Verify old articles are removed (if any exist)
- [ ] Check message confirms cleanup

#### Test Frontend Display
- [ ] Visit `https://yagacalls.com/news`
- [ ] Verify news articles display correctly
- [ ] Check images load (if present)
- [ ] Test clicking "Read Full Article" links
- [ ] Verify responsive design on mobile

#### Test Error Handling
- [ ] Temporarily disconnect internet (or block API access)
- [ ] Try fetching news
- [ ] Verify graceful error handling
- [ ] Check error messages are user-friendly

### 4. Setup Cron Jobs (RECOMMENDED)

Cron jobs automate news fetching and cleanup. Choose one option:

#### Option A: Server-Side Cron (Best - Most Secure)

**Via cPanel:**
1. Log into cPanel
2. Go to "Cron Jobs"
3. Add these two cron jobs:

**Hourly Fetch (every hour at minute 0):**
```
0 * * * * /usr/bin/php /home/yourusername/public_html/cms/news-cron.php fetch
```

**Daily Cleanup (every day at 2 AM):**
```
0 2 * * * /usr/bin/php /home/yourusername/public_html/cms/news-cron.php cleanup
```

**Important:** Replace `/home/yourusername/public_html` with your actual server path.

**To find your PHP path:**
- In cPanel, check "Select PHP Version" or run `which php` via SSH
- Common paths: `/usr/bin/php`, `/usr/local/bin/php`, `/opt/cpanel/ea-php82/root/usr/bin/php`

#### Option B: Web-Based Cron Service (Alternative)

If you can't use server-side cron, use a service like:
- EasyCron.com
- Cron-job.org
- SetCronJob.com

**Setup these URLs:**

**Hourly Fetch:**
```
https://yagacalls.com/cms/news-cron.php?action=fetch&key=yaga_calls_2025
```

**Daily Cleanup:**
```
https://yagacalls.com/cms/news-cron.php?action=cleanup&key=yaga_calls_2025
```

**Schedule:**
- Fetch: Every hour (0 * * * *)
- Cleanup: Daily at 2 AM (0 2 * * *)

### 5. Verify Server Requirements

Check your server has:
- [ ] PHP 7.4+ (check: `php -v`)
- [ ] cURL extension enabled (check: `php -m | grep curl`)
- [ ] Write permissions on `data/` directory
- [ ] Ability to make external HTTP requests (test API access)

### 6. Monitor First Executions

After setup:
- [ ] Check `data/news-cron.log` after first cron execution
- [ ] Verify no errors in log file
- [ ] Confirm articles are being fetched
- [ ] Monitor for 24-48 hours to ensure stability

## 📋 Quick Pre-Launch Checklist

**Must Do:**
- [ ] Set file permissions (`chmod 755 data/`)
- [ ] Fetch initial news via CMS
- [ ] Test news page displays correctly
- [ ] Test manual fetch and cleanup

**Should Do:**
- [ ] Setup cron jobs (hourly fetch, daily cleanup)
- [ ] Test cron execution
- [ ] Monitor logs for errors

**Nice to Have:**
- [ ] Set up monitoring/alerts for cron failures
- [ ] Document your cron setup for future reference
- [ ] Test on staging environment first (if available)

## 🚨 Common Issues to Watch For

### Issue: "Failed to fetch from CoinGecko/CryptoCompare"
**Solution:** 
- Check server can make external HTTP requests
- Verify APIs are accessible (they're free but have rate limits)
- Wait a few minutes and try again

### Issue: "Permission denied" errors
**Solution:**
- Check file permissions: `chmod 755 data/`
- Verify PHP user can write to `data/` directory
- Check server error logs

### Issue: News not appearing on frontend
**Solution:**
- Check browser console for JavaScript errors
- Verify `data/news.json` has content
- Check `/cms/news-api.php` returns data
- Verify news.html loads correctly

### Issue: Cron jobs not running
**Solution:**
- Check cron log: `data/news-cron.log`
- Verify PHP path in cron command
- Test manually: `php cms/news-cron.php fetch`
- Check cPanel cron job status

## ✅ Production Ready When:

- [x] Secret key configured
- [ ] File permissions set
- [ ] Initial news fetched
- [ ] All tests passed
- [ ] Cron jobs configured (recommended)
- [ ] Monitoring in place

## 📞 Need Help?

1. Check `cms/NEWS_SETUP.md` for detailed setup guide
2. Review `data/news-cron.log` for error messages
3. Check browser console for frontend errors
4. Verify server error logs for PHP issues

---

**You're almost ready!** Complete the checklist above and your news system will be production-ready! 🚀

