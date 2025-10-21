This folder contains helper scripts for the site.

measure_linkedin_heights.js

Usage:

1. Install Node dependencies (this will download Chromium used by Puppeteer):

   npm install

2. Run the measurement script:

   npm run measure:linkedin

This will attempt to load each URL in `_data/linkedin_posts.yml`, measure the page height, and update the `height` values in the YAML file.

Notes:
- The script uses a headless browser (Puppeteer). It does best-effort cookie consent clicks but may fail on some LinkedIn pages that enforce sign-in or advanced consent flows.
- The script creates a backup of `_data/linkedin_posts.yml` at `_data/linkedin_posts.yml.bak` before writing changes.
