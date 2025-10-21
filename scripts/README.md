This folder contains helper scripts for the site.

## measure_linkedin_heights.js

Automatically measures LinkedIn embed post heights and calculates aspect ratios for responsive display.

### Usage:

1. Install Node dependencies (this will download Chromium used by Puppeteer):

   ```bash
   npm install
   ```

2. Run the measurement script:

   ```bash
   npm run measure:linkedin
   ```

### What It Does:
- Opens each LinkedIn post URL in a headless browser (viewport: 900x1200)
- Measures the actual rendered height and width
- Calculates aspect ratio as percentage: `ratio = (height / width) × 100`
- Updates `_data/linkedin_posts.yml` with both `height` and `ratio` values

### Output Format:
```yaml
- url: https://www.linkedin.com/embed/feed/update/urn:li:share:123...
  height: 1200      # measured height in pixels
  ratio: 133        # aspect ratio as percentage
```

### How Ratios Work:
The ratio determines how the iframe scales responsively:
- **Ratio = 100%**: Square (height = width)
- **Ratio > 100%**: Taller than wide (portrait) - typical for LinkedIn posts
- **Ratio < 100%**: Wider than tall (landscape)

Examples:
- 1200px tall / 900px wide = 133% ratio
- 1500px tall / 900px wide = 167% ratio

The responsive CSS uses this ratio to maintain correct proportions on all screen sizes.

### Notes:
- The script uses a headless browser (Puppeteer) with a 900px viewport width
- It does best-effort cookie consent clicks but may fail on some LinkedIn pages that enforce sign-in or advanced consent flows
- The script creates a backup of `_data/linkedin_posts.yml` at `_data/linkedin_posts.yml.bak` before writing changes
- If measurement fails, existing values are preserved
