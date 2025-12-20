# Gallery-DL Configuration

This directory contains a comprehensive gallery-dl configuration optimized for media downloading from various platforms. Inspired by Matt-FTW's professional setup with enhanced features and additional site support.

## 📁 Files

- **`config.json`** - Main gallery-dl configuration with site-specific settings

## 🎯 Key Features

### 📂 **Organized Downloads**
- **Base Directory**: `~/.gallery-dl/sites/` - All downloads organized by platform
- **Archive Tracking**: SQLite databases prevent re-downloading
- **Custom Naming**: Platform-specific filename patterns
- **Directory Structure**: Logical organization by artist/user/platform

### 🌐 **Supported Platforms**

#### **🎨 Art & Illustration**
- **Pixiv**: Artist works, favorites, bookmarks with metadata
- **DeviantArt**: Artist galleries with title-based naming
- **ArtStation**: Professional artist portfolios

#### **📱 Social Media**
- **Twitter**: User timelines, likes, bookmarks, videos
- **Instagram**: User profiles with video support
- **Pinterest**: Board-based organization

#### **💬 Community Platforms**
- **Reddit**: Subreddits, user upvoted/saved posts
- **Danbooru**: Anime image boards with character tagging
- **Gelbooru**: Similar to Danbooru with enhanced tagging

### ⚙️ **Advanced Configuration**

#### **Download Settings**
```json
{
  "progress": 2.0,      // Progress update frequency
  "retries": 3,         // Retry failed downloads
  "timeout": 8.0,       // Connection timeout
  "rate": "1M"          // Download rate limit
}
```

#### **Archive System**
- **SQLite Archives**: Track downloaded items per category
- **Duplicate Prevention**: Skip already downloaded content
- **Metadata Storage**: Preserve original metadata

#### **Logging & Debugging**
- **Colored Console Output**: ANSI-colored terminal logs
- **File Logging**: Debug logs saved to `~/.gallery-dl/log.txt`
- **Unsupported Tracking**: Log unsupported file types

### 🔐 **Authentication Setup**

#### **Pixiv**
```bash
# Get refresh token from: https://www.pixiv.net/en/
# Add to config.json: "refresh-token": "your_token_here"
```

#### **Reddit**
```bash
# Get refresh token from Reddit API
# Add to config.json: "refresh-token": "your_token_here"
```

#### **Twitter**
```bash
# Add credentials to config.json:
# "username": "your_username",
# "password": "your_password"
```

### 📋 **Usage Examples**

#### **Download Artist Works**
```bash
# Pixiv artist
gallery-dl "https://www.pixiv.net/en/users/12345"

# DeviantArt gallery
gallery-dl "https://www.deviantart.com/artist/gallery"

# ArtStation portfolio
gallery-dl "https://www.artstation.com/artist"
```

#### **Social Media Content**
```bash
# Twitter user
gallery-dl "https://twitter.com/username"

# Instagram profile
gallery-dl "https://www.instagram.com/username/"

# Reddit subreddit
gallery-dl "https://www.reddit.com/r/subreddit/"
```

#### **Anime & Manga**
```bash
# Danbooru search
gallery-dl "https://danbooru.donmai.us/posts?tags=character_name"

# Gelbooru search
gallery-dl "https://gelbooru.com/index.php?page=post&s=list&tags=character_name"
```

### 🎨 **Directory Structure**

```
~/.gallery-dl/
├── sites/                    # Downloaded content
│   ├── pixiv/
│   │   ├── Works/artist_name/
│   │   ├── Favorites/artist_name/
│   │   └── Bookmarks/artist_name/
│   ├── twitter/
│   │   ├── username/
│   │   ├── Likes/
│   │   └── Bookmarks/
│   ├── reddit/
│   │   ├── subreddit/
│   │   ├── Upvoted/
│   │   └── Saved/
│   └── deviantart/artist_name/
├── archives/                 # SQLite databases
│   ├── pixiv.sqlite3
│   ├── twitter.sqlite3
│   └── reddit.sqlite3
├── cache.sqlite3            # Download cache
├── log.txt                  # Debug logs
└── unsupported.txt          # Unsupported files log
```

### 🔧 **Customization**

#### **Adding New Sites**
```json
"newsite": {
  "filename": "{id}_{title}.{extension}",
  "directory": ["newsite", "{category}"],
  "username": "your_username",
  "password": "your_password"
}
```

#### **Modifying Download Behavior**
```json
"extractor": {
  "newsite": {
    "retries": 5,
    "timeout": 15.0,
    "skip": "abort:5"
  }
}
```

### 📊 **Performance Tips**

1. **Use Archives**: Prevent re-downloading with SQLite archives
2. **Rate Limiting**: Respect site limits with `rate` setting
3. **Concurrent Downloads**: Use `--jobs N` for parallel downloads
4. **Resume Downloads**: Use `--resume` for interrupted downloads

### 🛡️ **Best Practices**

- **Respect ToS**: Follow platform terms of service
- **Rate Limiting**: Don't overwhelm servers
- **Archive Maintenance**: Regularly backup archive files
- **Authentication**: Use API tokens when available
- **Organization**: Keep downloads organized by platform/artist

### 🔗 **References**

**Inspired by Matt-FTW's gallery-dl configuration:**
- Professional site-specific configurations
- Comprehensive logging and error handling
- Archive system for duplicate prevention
- Authentication setup for premium features

**Official Documentation:**
- [Gallery-DL GitHub](https://github.com/mikf/gallery-dl)
- [Configuration Guide](https://github.com/mikf/gallery-dl#configuration)
- [Supported Sites](https://github.com/mikf/gallery-dl/blob/master/docs/supportedsites.md)

### ⚠️ **Important Notes**

- **Legal Compliance**: Ensure downloads comply with local laws
- **Platform Policies**: Respect each platform's terms of service
- **Rate Limits**: Some platforms have strict download limits
- **Authentication**: Required for private/protected content
- **Storage**: Downloads can consume significant disk space

---

**🎯 Ready to download media from 40+ supported platforms with professional organization and tracking!**