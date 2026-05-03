// Using global fetch


const urls = [
  '/',
  '/pricing',
  '/method',
  '/proof',
  '/analysis',
  '/news',
  '/academy',
  '/blog',
  '/contact',
  '/disclaimer',
  '/privacy',
  '/risk-disclosure',
  '/blog/how-we-called-sui-rally',
  '/academy/atr-stops',
  '/sitemap.xml',
  '/robots.txt'
];

const redirects = [
  '/home.html',
  '/pricing.html',
  '/blog/how-we-called-sui-rally.html'
];

async function audit() {
  console.log('# Route Audit');
  for (const url of urls) {
    try {
      const res = await fetch(`http://127.0.0.1:3000${url}`);
      console.log(`- ${url}: ${res.status} ${res.statusText}`);
      if (res.status === 200 && !url.endsWith('.xml') && !url.endsWith('.txt')) {
        const text = await res.text();
        const title = text.match(/<title>(.*?)<\/title>/)?.[1];
        const h1 = text.match(/<h1.*?>(.*?)<\/h1>/)?.[1];
        console.log(`  Title: ${title}`);
        console.log(`  H1: ${h1}`);
      }
    } catch (e) {
      console.log(`- ${url}: FAILED (${e.message})`);
    }
  }

  console.log('\n# Redirect Audit');
  for (const url of redirects) {
    try {
      const res = await fetch(`http://127.0.0.1:3000${url}`, { redirect: 'manual' });
      const location = res.headers.get('location');
      console.log(`- ${url}: ${res.status} -> ${location}`);
    } catch (e) {
      console.log(`- ${url}: FAILED (${e.message})`);
    }
  }
}

audit();
