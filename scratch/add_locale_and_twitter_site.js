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

let updatedCount = 0;

for (const file of pageFiles) {
  let content = fs.readFileSync(file, "utf8");
  if (!content.includes("export const metadata")) continue;

  let modified = false;

  // Add locale: "en_US" to openGraph if missing
  if (content.includes("openGraph:") && !content.includes('locale: "en_US"') && !content.includes("locale: 'en_US'")) {
    content = content.replace(
      /openGraph:\s*\{/,
      'openGraph: {\n    locale: "en_US",'
    );
    modified = true;
  }

  // Add site: "@Yagacalls", creator: "@Yagacalls" to twitter if missing
  if (content.includes("twitter:") && !content.includes('site: "@Yagacalls"')) {
    content = content.replace(
      /twitter:\s*\{/,
      'twitter: {\n    card: "summary_large_image",\n    site: "@Yagacalls",\n    creator: "@Yagacalls",'
    );
    // clean up duplicate card if generated
    content = content.replace(
      'card: "summary_large_image",\n    site: "@Yagacalls",\n    creator: "@Yagacalls",\n    card: "summary_large_image",',
      'card: "summary_large_image",\n    site: "@Yagacalls",\n    creator: "@Yagacalls",'
    );
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(file, content, "utf8");
    updatedCount++;
    console.log(`Updated ${path.relative(__dirname, file)}`);
  }
}

console.log(`🎉 Done updating ${updatedCount} files.`);
