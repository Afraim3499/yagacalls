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
let count = 0;

for (const file of pageFiles) {
  let src = fs.readFileSync(file, "utf8");
  let modified = false;

  if (src.includes("openGraph:") && !src.includes("locale:")) {
    src = src.replace("openGraph: {", 'openGraph: {\n    locale: "en_US",');
    modified = true;
  }

  if (src.includes("twitter:") && !src.includes("site:")) {
    src = src.replace("twitter: {", 'twitter: {\n    site: "@Yagacalls",\n    creator: "@Yagacalls",');
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(file, src, "utf8");
    count++;
    console.log(`Updated ${path.relative(__dirname, file)}`);
  }
}

console.log(`Updated ${count} files safely.`);
