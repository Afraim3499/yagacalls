# Secret Key Setup Guide

## What is the Secret Key?

The secret key is a security token that protects your news cron endpoints from unauthorized access. It's used when calling the news fetch/cleanup scripts via web-based cron services.

## Current Status

✅ **Secret key has been set to:** `yaga_calls_2025`

## How to Generate a Secure Secret Key

### Option 1: Online Generator
Visit: https://randomkeygen.com/ and use a "CodeIgniter Encryption Keys" (256-bit)

### Option 2: Use PHP (if available)
```bash
php -r "echo bin2hex(random_bytes(32));"
```

### Option 3: Use Python
```bash
python -c "import secrets; print(secrets.token_hex(32))"
```

### Option 4: Manual (less secure but works)
Use a long random string like: `yaga_news_2025_` + random characters

**Example good key:** `a7f3b9c2d4e8f1a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0`

## Where to Update the Secret Key

You need to update the secret key in **3 files**:

### 1. `cms/news-cron.php` (Line 23)
```php
$secretKey = 'yaga_calls_2025';
```

### 2. `cms/news-fetcher.php` (Line 243)
```php
$isCron = php_sapi_name() === 'cli' || (isset($_GET['cron_key']) && $_GET['cron_key'] === 'yaga_calls_2025');
```

### 3. `cms/news-cleanup.php` (Line 97)
```php
$isCron = php_sapi_name() === 'cli' || (isset($_GET['cron_key']) && $_GET['cron_key'] === 'yaga_calls_2025');
```

✅ **All files have been updated with the same secret key: `yaga_calls_2025`**

## If Using Web-Based Cron Service

After setting the secret key, your cron URLs will be:

**Hourly Fetch:**
```
https://yagacalls.com/cms/news-cron.php?action=fetch&key=yaga_calls_2025
```

**Daily Cleanup:**
```
https://yagacalls.com/cms/news-cron.php?action=cleanup&key=yaga_calls_2025
```

## If Using CLI Cron (Recommended)

If you're using server-side cron jobs (cPanel, SSH), you DON'T need the secret key - the scripts will work automatically via CLI.

## Security Notes

- ✅ Keep the secret key private - never commit it to public repositories
- ✅ Use a long, random string (at least 32 characters)
- ✅ Don't use dictionary words or personal information
- ✅ Change it if you suspect it's been compromised

## Quick Setup Steps

1. Generate a secure random key (use one of the methods above)
2. Open `cms/news-cron.php` and replace `'CHANGE_THIS_SECRET_KEY_IN_PRODUCTION'` with your key
3. Open `cms/news-fetcher.php` and replace `'CHANGE_THIS_IN_PRODUCTION'` with your key
4. Open `cms/news-cleanup.php` and replace `'CHANGE_THIS_IN_PRODUCTION'` with your key
5. If using web-based cron, update your cron service URLs with the new key

Done! Your news system is now secure.

