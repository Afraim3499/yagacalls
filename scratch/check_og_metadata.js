const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, '..', 'app');

function walk(dir, results = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, results);
    } else if (entry.name === 'page.tsx') {
      results.push(full);
    }
  }
  return results;
}

const files = walk(appDir);
console.log(`Found ${files.length} page.tsx files`);

const missingOgImages = [];
const missingSiteName = [];
const missingTwitter = [];

for (const file of files) {
  const rel = path.relative(path.join(__dirname, '..'), file);
  const src = fs.readFileSync(file, 'utf8');
  
  if (src.includes('openGraph:')) {
    if (!src.includes('images:') && !src.includes('ogImageUrl')) {
      missingOgImages.push(rel);
    }
    if (!src.includes('siteName:') && !src.includes('site_name')) {
      missingSiteName.push(rel);
    }
  }
  if (!src.includes('twitter:')) {
    missingTwitter.push(rel);
  }
}

console.log('--- MISSING OG IMAGES ---');
missingOgImages.forEach(f => console.log('  ', f));

console.log('--- MISSING SITE NAME ---');
missingSiteName.forEach(f => console.log('  ', f));

console.log('--- MISSING TWITTER ---');
missingTwitter.forEach(f => console.log('  ', f));
