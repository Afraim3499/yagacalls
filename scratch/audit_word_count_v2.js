const { commercialPages } = require('./content/data/commercial');
const { regionalPages } = require('./content/data/regions');

function countWords(str) {
  return str.split(/\s+/).filter(word => word.length > 0).length;
}

function auditPage(page) {
  let totalWords = countWords(page.introSummary || '') + countWords(page.answerFirstBlock || '') + countWords(page.marketContext || '');
  
  if (page.contentSections) {
    page.contentSections.forEach(section => {
      totalWords += countWords(section.title) + countWords(section.content);
    });
  }
  
  if (page.faqs) {
    page.faqs.forEach(faq => {
      totalWords += countWords(faq.question) + countWords(faq.answer);
    });
  }

  return totalWords;
}

console.log('--- Commercial Pages Audit ---');
commercialPages.forEach(p => {
  console.log(`${p.slug}: ${auditPage(p)} words`);
});

console.log('\n--- Regional Pages Audit ---');
regionalPages.forEach(p => {
  console.log(`${p.slug}: ${auditPage(p)} words`);
});
