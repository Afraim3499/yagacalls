# How to Access the CMS

## Option 1: Access on Your Hosting (Recommended)

Once you upload the files to your hosting:

1. **Upload all files** from `f:\kalababas\` to `public_html/` on your hosting
2. **Access the CMS** at: `https://yoursite.com/cms/admin.php`
3. **Login with default credentials:**
   - Username: `admin`
   - Password: `yaga_calls_2025`
4. **⚠️ IMPORTANT:** Change the password immediately after first login!

## Option 2: Local Testing (If you have PHP installed)

### Using PHP Built-in Server:

1. Open PowerShell or Command Prompt
2. Navigate to your project:
   ```powershell
   cd f:\kalababas
   ```
3. Start PHP server:
   ```powershell
   php -S localhost:8000
   ```
4. Open browser and go to: `http://localhost:8000/cms/admin.php`
5. Login with default credentials (same as above)

### Using XAMPP/WAMP:

1. Copy `f:\kalababas\` contents to `C:\xampp\htdocs\kalababas\` (or your WAMP www folder)
2. Start Apache in XAMPP/WAMP
3. Access: `http://localhost/kalababas/cms/admin.php`

## First Steps After Login:

1. **Change Password:**
   - Edit `cms/admin.php`
   - Change lines 5-6:
   ```php
   $CMS_PASSWORD = 'your_strong_password_here';
   $CMS_USERNAME = 'your_username_here';
   ```

2. **Migrate Existing Data:**
   - Visit: `https://yoursite.com/cms/migrate-existing.php`
   - This converts your 4 existing analysis posts to JSON format

3. **Start Adding Analysis:**
   - Fill out the form in the CMS
   - Click "Add Analysis"
   - Your new post will appear on `https://yoursite.com/analysis`

## Troubleshooting:

### Can't Access CMS:
- Check that `cms/admin.php` file exists
- Verify PHP is enabled on your hosting
- Check file permissions (should be 644 for PHP files)

### Login Not Working:
- Clear browser cookies
- Check that session directory is writable on server
- Verify credentials in `cms/admin.php` lines 5-6

### Files Not Updating:
- Check that `data/` folder is writable (chmod 755)
- Check that `analysis.html` is writable (chmod 644)
- Check PHP error logs for specific errors

## Quick Access URLs:

- **CMS Admin:** `https://yoursite.com/cms/admin.php`
- **Migration:** `https://yoursite.com/cms/migrate-existing.php`
- **Public Analysis Page:** `https://yoursite.com/analysis`

