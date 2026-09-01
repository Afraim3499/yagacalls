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
let fixedSiteName = 0;
let fixedTwitter = 0;

for (const file of files) {
  let src = fs.readFileSync(file, 'utf8');
  let modified = false;

  // Fix 1: Add siteName: "Yaga Calls" inside openGraph if missing
  if (src.includes('openGraph:') && !src.includes('siteName:')) {
    // Insert siteName: "Yaga Calls", right after openGraph: {
    src = src.replace(/openGraph:\s*\{/, 'openGraph: {\n    siteName: "Yaga Calls",');
    fixedSiteName++;
    modified = true;
  }

  // Fix 2: Add twitter block if missing and metadata exists
  if (!src.includes('twitter:') && src.includes('export const metadata')) {
    // Check if openGraph has images
    const imgMatch = src.match(/images:\s*\[\s*\{?\s*url:\s*"([^"]+)"/);
    const ogImg = imgMatch ? imgMatch[1] : "https://www.yagacalls.com/api/og";
    
    const titleMatch = src.match(/title:\s*"([^"]+)"/);
    const descMatch = src.match(/description:\s*"([^"]+)"/);
    
    const title = titleMatch ? titleMatch[1] : "Yaga Calls";
    const desc = descMatch ? descMatch[1] : "Professional Crypto Signals & Risk-Aware Trading";

    const twitterBlock = `,\n  twitter: {\n    card: "summary_large_image",\n    title: "${title}",\n    description: "${desc}",\n    images: ["${ogImg}"],\n  }`;

    // Insert twitter block before closing metadata };
    src = src.replace(/(\n\s*\}\s*;?\s*\n\s*export default)/, `${twitterBlock}$1`);
    fixedTwitter++;
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(file, src, 'utf8');
    console.log(`Updated ${path.relative(appDir, file)}`);
  }
}

console.log(`\nSummary: Fixed siteName on ${fixedSiteName} files, added twitter on ${fixedTwitter} files.`);
