const fs = require("fs");
const path = require("path");

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(filePath));
    } else if (file === "page.tsx") {
      results.push(filePath);
    }
  });
  return results;
}

const pageFiles = walk(path.join(__dirname, "../app"));
console.log(`Found ${pageFiles.length} page.tsx files.`);

let cleanedCount = 0;

for (const file of pageFiles) {
  let content = fs.readFileSync(file, "utf8");
  if (!content.includes("twitter:")) continue;

  // Replace duplicate card, site, creator entries
  const original = content;

  // Clean twitter block pattern
  content = content.replace(
    /twitter:\s*\{[\s\S]*?\}/g,
    (match) => {
      // Extract title, description, images
      let card = 'card: "summary_large_image"';
      let site = 'site: "@Yagacalls"';
      let creator = 'creator: "@Yagacalls"';

      let titleMatch = match.match(/title:\s*([^,\n]+)/);
      let descMatch = match.match(/description:\s*([^,\n]+)/);
      let imagesMatch = match.match(/images:\s*(\[[^\]]*\])/);

      let parts = [card, site, creator];
      if (titleMatch) parts.push(`title: ${titleMatch[1].trim()}`);
      if (descMatch) parts.push(`description: ${descMatch[1].trim()}`);
      if (imagesMatch) parts.push(`images: ${imagesMatch[1].trim()}`);

      return `twitter: {\n    ${parts.join(",\n    ")},\n  }`;
    }
  );

  if (content !== original) {
    fs.writeFileSync(file, content, "utf8");
    cleanedCount++;
    console.log(`Cleaned ${path.relative(__dirname, file)}`);
  }
}

console.log(`🎉 Cleaned duplicate twitter props in ${cleanedCount} files.`);
