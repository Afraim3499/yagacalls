const fs = require('fs');
const path = require('path');

function countWordsInFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    // Remove code boilerplate, imports, etc. to get a closer count of actual content strings
    // We'll just count all words in quotes to be safe
    const matches = content.match(/"([^"\\]|\\.)*"/g) || [];
    let wordCount = 0;
    matches.forEach(m => {
      // Filter out short keys or keywords
      if (m.length > 50) { 
        wordCount += m.split(/\s+/).length;
      }
    });
    return wordCount;
  } catch (e) {
    return 0;
  }
}

const commPath = path.join(__dirname, '../content/data/commercial.ts');
const regPath = path.join(__dirname, '../content/data/regions.ts');

const commWords = countWordsInFile(commPath);
const regWords = countWordsInFile(regPath);

console.log(`Commercial Data Total Est. Words: ${commWords}`);
console.log(`Regions Data Total Est. Words: ${regWords}`);

// Rough estimate per page
console.log(`Est. Avg per Commercial Page: ${Math.round(commWords / 5)}`);
console.log(`Est. Avg per Regional Page: ${Math.round(regWords / 12)}`);
