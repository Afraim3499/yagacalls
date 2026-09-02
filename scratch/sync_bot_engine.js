const fs = require('fs');

const src = './yaga-content-system/bot_engine_serverless.js';
const dst = './yaga-content-system/crm-app/bot_engine_serverless.js';

fs.copyFileSync(src, dst);
console.log('✅ Successfully synchronized bot_engine_serverless.js to crm-app/bot_engine_serverless.js');
