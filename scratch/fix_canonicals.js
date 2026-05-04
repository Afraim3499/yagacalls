const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
}

const targetDirs = [
  path.join(__dirname, '../app'),
  path.join(__dirname, '../lib'),
  path.join(__dirname, '../components')
];

targetDirs.forEach(dir => {
  walk(dir, (filePath) => {
    if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
      let content = fs.readFileSync(filePath, 'utf8');
      if (content.includes('https://yagacalls.com')) {
        console.log(`Updating ${filePath}`);
        let newContent = content.replace(/https:\/\/yagacalls\.com/g, 'https://www.yagacalls.com');
        fs.writeFileSync(filePath, newContent, 'utf8');
      }
    }
  });
});
