const https = require('https');
const fs = require('fs');
const path = require('path');

// Configuration
const HOST = 'https://www.yagacalls.com';
const KEY = 'yagacalls_indexnow_7f7b4c74';
const KEY_LOCATION = `${HOST}/${KEY}.txt`;
const INDEXNOW_URL = 'https://api.indexnow.org/IndexNow';

// Priority URLs to submit
const urls = [
  'https://www.yagacalls.com',
  'https://www.yagacalls.com/pricing',
  'https://www.yagacalls.com/method',
  'https://www.yagacalls.com/proof',
  'https://www.yagacalls.com/best-crypto-signals-group',
  'https://www.yagacalls.com/premium-crypto-signals-telegram',
  'https://www.yagacalls.com/crypto-signals-with-proof',
  'https://www.yagacalls.com/crypto-signals-with-risk-management',
  'https://www.yagacalls.com/free-vs-paid-crypto-signals',
  'https://www.yagacalls.com/regions',
  'https://www.yagacalls.com/regions/uae',
  'https://www.yagacalls.com/regions/dubai',
  'https://www.yagacalls.com/regions/uk',
  'https://www.yagacalls.com/regions/london',
  'https://www.yagacalls.com/regions/usa',
  'https://www.yagacalls.com/regions/canada',
  'https://www.yagacalls.com/regions/singapore'
];

async function submitToIndexNow(isDryRun = false) {
  console.log(`Starting IndexNow submission for ${HOST}...`);
  console.log(`Key: ${KEY}`);
  console.log(`Key Location: ${KEY_LOCATION}`);
  console.log(`URLs to submit: ${urls.length}`);

  if (isDryRun) {
    console.log('\n--- DRY RUN MODE ---');
    urls.forEach(url => console.log(`[DRY-RUN] Would submit: ${url}`));
    console.log('\nDry run complete. No requests sent.');
    return;
  }

  const payload = JSON.stringify({
    host: 'www.yagacalls.com',
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls
  });

  const options = {
    hostname: 'api.indexnow.org',
    path: '/IndexNow',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Content-Length': Buffer.byteLength(payload)
    }
  };

  const req = https.request(options, (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
      if (res.statusCode === 200) {
        console.log('\nSuccess! IndexNow submission complete.');
        console.log(`Status: ${res.statusCode} ${res.statusMessage}`);
      } else {
        console.error(`\nError submitting to IndexNow: ${res.statusCode} ${res.statusMessage}`);
        console.error('Response:', data);
      }
    });
  });

  req.on('error', (error) => {
    console.error('\nNetwork Error:', error.message);
  });

  req.write(payload);
  req.end();
}

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');

submitToIndexNow(dryRun);
