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
let fixedCount = 0;

for (const file of pageFiles) {
  let content = fs.readFileSync(file, "utf8");
  if (!content.includes("twitter:")) continue;

  const original = content;

  // Replace twitter object with deduplicated key-value pairs
  content = content.replace(/twitter:\s*\{([^}]+)\}/, (match, body) => {
    const lines = body.split("\n");
    const seenKeys = new Set();
    const cleanLines = [];

    for (const line of lines) {
      const keyMatch = line.match(/^\s*([a-zA-Z0-9_]+):/);
      if (keyMatch) {
        const key = keyMatch[1];
        if (seenKeys.has(key)) {
          continue; // Skip duplicate key
        }
        seenKeys.add(key);
      }
      cleanLines.push(line);
    }

    return `twitter: {${cleanLines.join("\n")}}`;
  });

  if (content !== original) {
    fs.writeFileSync(file, content, "utf8");
    fixedCount++;
    console.log(`Fixed ${path.relative(__dirname, file)}`);
  }
}

console.log(`🎉 Fixed duplicate keys in ${fixedCount} files.`);
