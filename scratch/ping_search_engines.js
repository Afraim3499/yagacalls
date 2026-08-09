const https = require('https');

const HOST = 'www.yagacalls.com';
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;
const INDEXNOW_KEY = 'yagacalls8c3f2d1e0a4b';
const INDEXNOW_KEY_LOCATION = `https://${HOST}/yagacalls8c3f2d1e0a4b.txt`;

const urlsToPing = [
  `https://${HOST}/`,
  `https://${HOST}/blog`,
  `https://${HOST}/blog/crypto-search-intent-across-markets`,
  `https://${HOST}/blog/canada-crypto-regulation-clarity-act`,
  `https://${HOST}/blog/uae-crypto-licensing-vara-binance`,
  `https://${HOST}/blog/nigeria-p2p-crypto-adoption-hedging`,
  `https://${HOST}/blog/polyx-rwa-tokenization-surge`,
  `https://${HOST}/blog/crypto-search-intent-funnel-guide`,
  `https://${HOST}/blog/google-trends-crypto-narrative-trading`,
  `https://${HOST}/blog/cold-wallet-custody-vs-exchange-risk`,
  `https://${HOST}/blog/crypto-market-sentiment-tools-fear-greed`
];

async function pingGoogleSitemap() {
  const pingUrl = `https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`;
  console.log(`[Google Ping] Notifying Google of updated sitemap: ${pingUrl}`);
  
  return new Promise((resolve) => {
    https.get(pingUrl, (res) => {
      console.log(`[Google Ping] Response status: ${res.statusCode}`);
      resolve(res.statusCode);
    }).on('error', (err) => {
      console.warn(`[Google Ping] Error: ${err.message}`);
      resolve(null);
    });
  });
}

async function pingIndexNow() {
  const payload = JSON.stringify({
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: INDEXNOW_KEY_LOCATION,
    urlList: urlsToPing
  });

  const options = {
    hostname: 'api.indexnow.org',
    port: 443,
    path: '/indexnow',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Content-Length': Buffer.byteLength(payload)
    }
  };

  console.log(`[IndexNow] Submitting ${urlsToPing.length} URLs to IndexNow protocol (Bing, Yandex, Naver)...`);

  return new Promise((resolve) => {
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        console.log(`[IndexNow] Response status: ${res.statusCode}`);
        resolve(res.statusCode);
      });
    });

    req.on('error', (err) => {
      console.warn(`[IndexNow] Error: ${err.message}`);
      resolve(null);
    });

    req.write(payload);
    req.end();
  });
}

async function main() {
  console.log('=== Starting Automated Search Engine Notification Pipeline ===');
  await pingGoogleSitemap();
  await pingIndexNow();
  console.log('=== Search Engine Notification Pipeline Complete ===');
}

main();
