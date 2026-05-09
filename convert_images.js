const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const targetDirs = [
  'public',
  'public/proof'
];

async function convertToWebp() {
  for (const dir of targetDirs) {
    const fullPath = path.join(process.cwd(), dir);
    if (!fs.existsSync(fullPath)) continue;

    const files = fs.readdirSync(fullPath);
    for (const file of files) {
      if (file.endsWith('.png') || file.endsWith('.jpg')) {
        const inputPath = path.join(fullPath, file);
        const outputPath = path.join(fullPath, file.replace(/\.(png|jpg)$/, '.webp'));
        
        console.log(`Converting ${file} to WebP...`);
        try {
          await sharp(inputPath)
            .webp({ quality: 80 })
            .toFile(outputPath);
          console.log(`Successfully converted ${file}`);
        } catch (err) {
          console.error(`Error converting ${file}:`, err);
        }
      }
    }
  }
}

convertToWebp();
