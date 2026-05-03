# Yaga Calls - Analysis CMS

A simple, powerful Content Management System for managing crypto analysis posts on the Yaga Calls website.

## Features

✅ **Easy Form-Based Updates** - Add and edit analysis posts through a user-friendly web interface  
✅ **Automatic SEO Generation** - Auto-generates SEO titles, descriptions, and keywords  
✅ **ML-Enhanced Suggestions** - Intelligent content improvement suggestions  
✅ **Image Upload Support** - Add images to each analysis post  
✅ **Link Management** - Link each analysis to Telegram, X (Twitter), or external URLs  
✅ **Auto-Regeneration** - Automatically updates analysis.html and sitemap.xml  
✅ **No Database Required** - Uses JSON file storage (perfect for shared hosting)  
✅ **Secure Authentication** - Simple password-protected admin panel  

## Quick Start

### 1. Access the CMS

Navigate to: `https://yoursite.com/cms/admin.php`

**Default Credentials:**
- Username: `admin`
- Password: `yaga_calls_2025`

⚠️ **IMPORTANT:** Change these credentials immediately after first login!

### 2. Migrate Existing Data (First Time Only)

If you have existing analysis posts in `analysis.html`, run the migration script once:
- Navigate to: `https://yoursite.com/cms/migrate-existing.php`
- This will convert your existing 4 analysis posts to JSON format

### 3. Add New Analysis

1. Fill out the form on the left side:
   - **Hook (Headline)**: Compelling headline (e.g., "Bitcoin Below 50-Day EMA: Critical Support at $70K")
   - **Coin Symbol**: Cryptocurrency symbol (e.g., BTC, ETH, SOL)
   - **Coin Tag Style**: Choose "Success" for winning calls (green badge)
   - **Date**: Publication date
   - **Content**: Your analysis content (supports HTML like `<strong>`, `<p>`, etc.)
   - **Image**: Upload an image (optional)
   - **Link URL**: Where users should go (Telegram, X, etc.)
   - **Link Text**: Button text
   - **Link Type**: Telegram, X, or External
   - **SEO Fields**: Auto-generated, but you can customize

2. Click "Add Analysis" or "Update Analysis"

3. The system will automatically:
   - Generate SEO metadata
   - Update `analysis.html`
   - Update `sitemap.xml`
   - Maintain consistent styling

## File Structure

```
public/
├── cms/
│   ├── admin.php              # Main CMS interface
│   ├── regenerate.php         # Auto-regeneration functions
│   ├── ml-enhance.php         # ML enhancement functions
│   ├── migrate-existing.php   # Migration script (run once)
│   └── README.md              # This file
├── data/
│   └── analysis.json          # Analysis data storage (auto-created)
├── assets/
│   └── analysis-images/       # Uploaded images (auto-created)
└── analysis.html              # Public analysis page (auto-updated)
```

## Security

### Change Default Password

Edit `public/cms/admin.php` and change these lines:

```php
$CMS_PASSWORD = 'your_strong_password_here';
$CMS_USERNAME = 'your_username_here';
```

### Protect CMS Directory (Optional)

Add a `.htaccess` file in `public/cms/`:

```apache
# Optional: Restrict access by IP
# <RequireAll>
#   Require ip YOUR_IP_ADDRESS
# </RequireAll>

# Prevent directory listing
Options -Indexes
```

## SEO Features

The CMS automatically:

1. **Generates SEO Titles**: Based on coin symbol and headline
2. **Generates Meta Descriptions**: Extracted from content (first 155 characters)
3. **Generates Keywords**: Based on coin, content analysis, and common crypto terms
4. **Updates Structured Data**: JSON-LD schema for better search engine understanding
5. **Updates Sitemap**: Automatically includes new posts

## ML Enhancement Features

The system provides intelligent suggestions:

- ✅ **Content Quality Checks**: Verifies price mentions, technical terms, length
- ✅ **SEO Optimization**: Suggests improvements for headlines and keywords
- ✅ **Related Keywords**: Suggests related terms for better discoverability
- ✅ **Content Templates**: Provides templates based on analysis type (breakout, support/resistance, etc.)

## Image Management

- Supported formats: JPG, JPEG, PNG, GIF, WebP
- Images are automatically optimized and stored in `/assets/analysis-images/`
- Images are displayed in analysis cards when uploaded
- Maximum file size: Check your PHP `upload_max_filesize` setting

## Styling

All analysis posts automatically follow the existing design:
- Same card styling
- Same color scheme
- Same responsive layout
- Same hover effects

No developer work needed - just fill the form!

## Troubleshooting

### Images Not Uploading

Check PHP settings:
- `upload_max_filesize` in `php.ini`
- `post_max_size` in `php.ini`
- Directory permissions on `assets/analysis-images/`

### Analysis Page Not Updating

1. Check file permissions on `analysis.html` (should be writable)
2. Check `data/analysis.json` exists and is readable
3. Check PHP error logs

### Can't Login

1. Verify credentials in `admin.php`
2. Clear browser cookies/session
3. Check PHP session directory is writable

## Best Practices

1. **Headlines**: Use numbers, questions, or bold statements for better engagement
2. **Content**: Aim for 100-300 words for optimal SEO
3. **Images**: Use relevant charts or graphics (recommended size: 800x600px)
4. **Keywords**: Include coin symbol, "analysis", "price", "prediction"
5. **Links**: Use Telegram for community engagement, X for social proof
6. **Dates**: Keep dates current for better relevance

## Advanced Features

### Custom SEO Override

You can manually override auto-generated SEO fields:
- Leave empty = auto-generate
- Fill in = use your custom values

### Link Types

- **Telegram**: Shows Telegram icon, best for community engagement
- **X (Twitter)**: Shows X icon, best for social proof
- **External**: Plain link, for any other URL

### Coin Tag Styles

- **Default**: Standard orange/gold badge
- **Success**: Green badge (use for winning calls, successful predictions)

## Support

For issues or questions:
1. Check this README
2. Review PHP error logs
3. Check file permissions
4. Verify JSON file structure

## Future Enhancements

Potential improvements:
- Bulk import/export
- Draft system
- Scheduled publishing
- Analytics integration
- Multi-user support
- Content templates library
- Advanced ML suggestions using external APIs

---

**Version**: 1.0  
**Last Updated**: 2025-01-XX  
**Compatible With**: PHP 7.4+, Shared Hosting

