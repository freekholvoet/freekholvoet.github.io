#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const puppeteer = require('puppeteer');

async function measure(url, page) {
  try {
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });

    // Try to click cookie / consent buttons if present (best effort)
    try {
      await page.evaluate(() => {
        const buttons = Array.from(document.querySelectorAll('button'));
        for (const b of buttons) {
          const t = (b.innerText || '').toLowerCase();
          if(/accept|agree|ok|allow|vedt/.test(t)) { b.click(); break; }
        }
      });
      // allow time for layout after clicking
      await page.waitForTimeout(800);
    } catch (e) {
      // ignore
    }

    // Measure the document's full height and width
    const dimensions = await page.evaluate(() => {
      const doc = document.documentElement;
      const body = document.body;
      const height = Math.max(
        body.scrollHeight, body.offsetHeight,
        doc.clientHeight, doc.scrollHeight, doc.offsetHeight
      );
      const width = Math.max(
        body.scrollWidth, body.offsetWidth,
        doc.clientWidth, doc.scrollWidth, doc.offsetWidth
      );
      return { height, width };
    });
    
    // Calculate aspect ratio as percentage (height/width * 100)
    const ratio = dimensions.width > 0 
      ? Math.round((dimensions.height / dimensions.width) * 100)
      : 150; // fallback to 150% if width is 0
    
    return {
      height: Math.round(dimensions.height || 0),
      ratio: ratio
    };
  } catch (err) {
    console.error('measure error for', url, err && err.message || err);
    return null;
  }
}

async function main() {
  const dataPath = path.join(__dirname, '..', '_data', 'linkedin_posts.yml');
  const backupPath = dataPath + '.bak';

  if (!fs.existsSync(dataPath)) {
    console.error('Data file not found:', dataPath);
    process.exit(1);
  }

  const raw = fs.readFileSync(dataPath, 'utf8');
  const posts = yaml.load(raw);

  if (!Array.isArray(posts)) {
    console.error('Unexpected data format in', dataPath);
    process.exit(1);
  }

  console.log('Launching headless browser...');
  const browser = await puppeteer.launch({ args: ['--no-sandbox','--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 900, height: 1200 });

  let changed = false;
  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    if (!post || !post.url) continue;
    console.log(`Measuring [${i}] ${post.url} ...`);
    const result = await measure(post.url, page);
    if (result && result.height > 0) {
      console.log(` -> measured ${result.height}px (width: ${await page.viewport().width}px, ratio: ${result.ratio}%)`);
      if (post.height !== result.height || post.ratio !== result.ratio) {
        posts[i].height = result.height;
        posts[i].ratio = result.ratio;
        changed = true;
      }
    } else {
      console.log(' -> measurement failed, leaving existing values:', 
                  `height: ${post.height}, ratio: ${post.ratio || 'N/A'}`);
    }
  }

  await browser.close();

  if (changed) {
    // backup and write
    fs.copyFileSync(dataPath, backupPath);
    fs.writeFileSync(dataPath, yaml.dump(posts, { lineWidth: -1 }), 'utf8');
    console.log('Updated heights and ratios written to', dataPath, ' (backup at', backupPath, ')');
  } else {
    console.log('No changes detected; file not updated.');
  }
}

main().catch(err => { console.error(err); process.exit(1); });
