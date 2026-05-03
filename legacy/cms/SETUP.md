# CMS Setup Guide

## Quick Setup (5 minutes)

### Step 1: Change Default Password

1. Open `public/cms/admin.php`
2. Find these lines (around line 5-6):
   ```php
   $CMS_PASSWORD = 'yaga_calls_2025';
   $CMS_USERNAME = 'admin';
   ```
3. Change to your secure credentials:
   ```php
   $CMS_PASSWORD = 'your_strong_password_here';
   $CMS_USERNAME = 'your_username_here';
   ```

### Step 2: Set File Permissions

On your server, ensure these directories are writable:
```bash
chmod 755 public/data/
chmod 755 public/assets/analysis-images/
chmod 644 public/analysis.html
chmod 644 public/sitemap.xml
```

### Step 3: Migrate Existing Data (First Time Only)

1. Login to CMS: `https://yoursite.com/cms/admin.php`
2. Visit: `https://yoursite.com/cms/migrate-existing.php`
3. This converts your existing 4 analysis posts to JSON format

### Step 4: Test Adding a New Analysis

1. Go to CMS admin panel
2. Fill out the form with a test analysis
3. Click "Add Analysis"
4. Check `https://yoursite.com/analysis` - your new post should appear!

## Directory Structure

After setup, you should have:

```
public/
├── cms/
│   ├── admin.php              ✅ Main CMS interface
│   ├── regenerate.php         ✅ Auto-update functions
│   ├── ml-enhance.php         ✅ ML suggestions
│   ├── migrate-existing.php   ✅ Migration script
│   ├── .htaccess              ✅ Security file
│   ├── README.md              ✅ Documentation
│   └── SETUP.md               ✅ This file
├── data/
│   └── analysis.json          📝 Created automatically
└── assets/
    └── analysis-images/       📁 Created automatically
```

## Troubleshooting

### "Permission Denied" Errors

**Problem**: Can't write to files/directories

**Solution**:
```bash
# Make directories writable
chmod 755 public/data/
chmod 755 public/assets/analysis-images/

# Make files writable
chmod 644 public/analysis.html
chmod 644 public/sitemap.xml
```

### Images Not Uploading

**Problem**: Image upload fails

**Solution**: Check PHP settings in `php.ini`:
```ini
upload_max_filesize = 10M
post_max_size = 10M
```

### Analysis Page Not Updating

**Problem**: Changes don't appear on analysis.html

**Solution**:
1. Check `public/data/analysis.json` exists and is readable
2. Check `public/analysis.html` is writable
3. Check PHP error logs for errors
4. Verify `regenerate.php` is being called (check admin.php line ~150)

### Can't Login

**Problem**: Login doesn't work

**Solution**:
1. Verify credentials in `admin.php`
2. Clear browser cookies
3. Check PHP sessions are working (check `session.save_path` in php.ini)

## Security Checklist

- [ ] Changed default password
- [ ] Changed default username
- [ ] Set proper file permissions
- [ ] Added `.htaccess` protection (optional)
- [ ] Restricted CMS access by IP (optional, in `.htaccess`)
- [ ] Backed up `analysis.html` before first use
- [ ] Tested image upload functionality
- [ ] Verified analysis page updates correctly

## Next Steps

1. ✅ Change default password
2. ✅ Run migration script
3. ✅ Test adding a new analysis
4. ✅ Verify styling matches existing posts
5. ✅ Check SEO metadata is generated
6. ✅ Test image upload
7. ✅ Verify sitemap updates

## Support

If you encounter issues:
1. Check PHP error logs
2. Verify file permissions
3. Check JSON file structure in `data/analysis.json`
4. Review `README.md` for detailed documentation

---

**Ready to go!** Start adding your analysis posts through the CMS. 🚀

