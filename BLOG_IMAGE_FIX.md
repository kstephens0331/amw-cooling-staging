# Blog Image Display Fix Documentation

## Issue Summary
New blog post images were not displaying on the production site at https://www.amwairconditioning.com/blog. Images showed as broken with 404 errors, while blog page refresh was also displaying raw JSON instead of the React app.

## Root Causes

### 1. Route Conflict Issue
**Problem**: Blog data files (`index.json`, `*.md`) were stored in `/public/blog/`, which conflicted with the React Router `/blog` route. When users navigated to `/blog`, Vercel served the static `index.json` file instead of routing to the React app.

**Why it happened**: Vercel prioritizes static file serving over rewrites. If a file exists at a requested path, Vercel serves it directly.

### 2. Vercel Rewrite Configuration Issue
**Problem**: Using `{ "source": "/(.*)", "destination": "/index.html" }` caused Vercel to route ALL requests (including image requests) to the React app instead of serving static files.

**Why it happened**: The destination `/index.html` was too explicit, preventing Vercel's automatic static file detection.

### 3. CDN Cache Issue
**Problem**: Even after fixing the routing, the CDN had cached the incorrect `Content-Type: text/html` responses for the new images, causing them to still appear broken.

**Why it happened**: Images had `Cache-Control: public, max-age=31536000, immutable` headers, causing very aggressive caching.

## The Complete Solution

### Step 1: Separate Blog Data from Blog Images
**Action**: Moved blog data files to a separate directory to prevent route conflicts.

```bash
# Create new directory structure
mkdir -p public/data/blog

# Move JSON and markdown files (but NOT images)
mv public/blog/*.json public/data/blog/
mv public/blog/*.md public/data/blog/

# Keep images in public/blog/ for proper static serving
```

**Result**:
- `/blog/` now contains ONLY images (no route conflicts)
- `/data/blog/` contains JSON and markdown data files

### Step 2: Update React Components
**Files Changed**:
- `src/pages/Blog.jsx` - line 16
- `src/pages/BlogPost.jsx` - lines 21-22

**Changes**:
```javascript
// OLD (caused conflicts):
fetch('/blog/index.json', { cache: 'no-store' })
fetch(`/blog/${slug}.md`, { cache: 'no-store' })

// NEW (separated paths):
fetch('/data/blog/index.json', { cache: 'no-store' })
fetch(`/data/blog/${slug}.md`, { cache: 'no-store' })
```

### Step 3: Fix Vercel Rewrite Configuration
**File**: `vercel.json`

**Change**:
```json
// WRONG - breaks static file serving:
"rewrites": [
  { "source": "/(.*)", "destination": "/index.html" }
]

// CORRECT - allows Vercel to auto-detect static files:
"rewrites": [
  { "source": "/(.*)", "destination": "/" }
]
```

**Key Insight**: Using `"destination": "/"` instead of `"/index.html"` allows Vercel to:
1. First check if the requested path is a static file
2. If yes, serve the static file with correct MIME type
3. If no, fall back to serving the React SPA (index.html)

### Step 4: Bust CDN Cache
**Problem**: After fixing the routing, images were still cached with wrong Content-Type.

**Solution**: Add version query parameter to image URLs in `public/data/blog/index.json`:

```json
// Before:
"image": "/blog/emergency-hvac-service-conroe.webp"

// After:
"image": "/blog/emergency-hvac-service-conroe.webp?v=1"
```

**Result**: Forces browsers and CDN to fetch fresh images with correct `Content-Type: image/webp` headers.

## Verification Steps

### 1. Check if images are served correctly:
```bash
curl -I https://www.amwairconditioning.com/blog/emergency-hvac-service-conroe.webp?v=1
# Should return: Content-Type: image/webp
```

### 2. Check if blog route works:
```bash
curl -I https://www.amwairconditioning.com/blog
# Should return: Content-Type: text/html (the React app)
```

### 3. Check if data files are accessible:
```bash
curl -I https://www.amwairconditioning.com/data/blog/index.json
# Should return: Content-Type: application/json
```

## Key Takeaways for Future

### When Adding New Blog Posts:

1. **Images**: Place in `/public/blog/` (with other images)
2. **Content**: Place markdown files in `/public/data/blog/`
3. **Index**: Update `/public/data/blog/index.json` with new post metadata
4. **Image paths in JSON**: Use `/blog/image-name.webp` (no `/data/` prefix for images)

### If Images Don't Display After Deploy:

**Quick Fix**: Add or increment version parameter in `index.json`:
```json
"image": "/blog/image-name.webp?v=2"
```
This bypasses CDN cache and forces fresh fetch.

### Vercel Configuration Rules:

1. **Never use** `"destination": "/index.html"` in rewrites - it breaks static file serving
2. **Always use** `"destination": "/"` for SPA catch-all rewrites
3. **Don't add explicit rewrites** for static assets - let Vercel auto-detect them
4. **Keep blog data files** separate from React Router paths to avoid conflicts

### Testing After Changes:

```bash
# Test on preview deployment first:
curl -I https://preview-url.vercel.app/blog/new-image.webp

# Should return Content-Type: image/webp
# NOT Content-Type: text/html
```

## File Structure (Correct)

```
public/
├── blog/
│   ├── emergency-hvac-service-conroe.webp
│   ├── smart-thermostats-conroe.webp
│   ├── indoor-air-quality-conroe.webp
│   └── (other image files only)
└── data/
    └── blog/
        ├── index.json
        ├── emergency-hvac-service-conroe.md
        ├── smart-thermostats-conroe.md
        └── (other data files)
```

## Common Pitfalls to Avoid

1. **Don't put JSON/MD files in `/public/blog/`** - causes route conflicts
2. **Don't use multiple explicit rewrites** for static files - unnecessary and can break ordering
3. **Don't forget cache-busting** when images don't update after deploy
4. **Don't test only production URL** - always test preview deployments first to avoid CDN cache confusion

## Related Files

- [vercel.json](vercel.json) - Vercel deployment configuration
- [src/pages/Blog.jsx](src/pages/Blog.jsx) - Blog listing page
- [src/pages/BlogPost.jsx](src/pages/BlogPost.jsx) - Individual blog post page
- [public/data/blog/index.json](public/data/blog/index.json) - Blog post metadata

## Commit History

Key commits that resolved this issue:
- `4f5514e` - Add cache-busting parameter to 4 new blog images
- `18c8ffc` - Restore original rewrite destination to / instead of /index.html
- `ef449b5` - Move blog data files to /data/blog/ to prevent route conflicts

---

**Last Updated**: November 24, 2025
**Issue Resolved**: Blog images now display correctly, blog routes work properly, no JSON showing on page refresh
