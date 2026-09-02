const { Client } = require('ssh2');

const VPS_HOST = '167.86.76.229';
const VPS_USER = 'root';
const VPS_PASS = process.env.VPS_SSH_PASSWORD || 'Rizwan34';

const conn = new Client();
conn.on('ready', () => {
  const command = `
    wc -l /var/www/yagacontentsystem/bot_engine_serverless.js

    echo "=== Lines around HIGH TABLE / VIP join / owner notify in bot_engine_serverless.js ==="
    grep -n "HIGH TABLE\\|VIP JOIN\\|broadcastToOwner\\|notify\\|join request\\|chat_join_request\\|PAID_VIP\\|handleChatMember\\|handleJoin\\|chat_member" /var/www/yagacontentsystem/bot_engine_serverless.js | head -60
  `;
  conn.exec(command, (err, stream) => {
    if (err) { console.error(err); conn.end(); return; }
    stream.on('data', d => process.stdout.write(d.toString()))
          .stderr.on('data', d => process.stderr.write(d.toString()));
    stream.on('close', () => conn.end());
  });
}).connect({ host: VPS_HOST, port: 22, username: VPS_USER, password: VPS_PASS, readyTimeout: 15000 });
