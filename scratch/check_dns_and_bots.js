const dns = require('dns');

console.log('Checking current DNS A records for yagacalls.com...');

dns.resolve4('yagacalls.com', (err, addresses) => {
  if (err) {
    console.error('DNS Lookup Error:', err);
  } else {
    console.log('Current yagacalls.com IP(s):', addresses);
    if (addresses.includes('167.86.76.229')) {
      console.log('🎉 DNS HAS PROPAGATED TO NEW VPS (167.86.76.229)!');
    } else {
      console.log('⏳ DNS still pointing to old IP:', addresses[0]);
    }
  }
});

dns.resolve4('crm.yagacalls.com', (err, addresses) => {
  if (err) {
    console.error('CRM DNS Lookup Error:', err);
  } else {
    console.log('Current crm.yagacalls.com IP(s):', addresses);
  }
});
