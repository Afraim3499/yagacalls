const { regionalPages } = require('../content/data/regions');
const { commercialPages } = require('../content/data/commercial');

const allPages = [
  ...regionalPages.map(p => ({ ...p, path: `/regions/${p.slug}` })),
  ...commercialPages.map(p => ({ ...p, path: `/${p.slug}` }))
];

console.log('Page | Word Count | Sections | FAQs');
console.log('---|---|---|---');

allPages.forEach(p => {
  const text = [
    p.introSummary,
    p.answerFirstBlock,
    p.marketContext || '',
    p.tradingTimezoneContext || '',
    ...p.contentSections.map(s => s.title + ' ' + s.content),
    ...p.faqs.map(f => f.question + ' ' + f.answer)
  ].join(' ');
  
  const wordCount = text.split(/\s+/).filter(Boolean).length;
  console.log(`${p.path} | ${wordCount} | ${p.contentSections.length} | ${p.faqs.length}`);
});
