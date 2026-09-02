const { Client } = require('ssh2');

const VPS_HOST = '167.86.76.229';
const VPS_USER = 'root';
const VPS_PASS = process.env.VPS_SSH_PASSWORD || 'Rizwan34';

const conn = new Client();
conn.on('ready', () => {
  // Get the chat_member handler in bot_engine.js - grep for the VIP join section
  const command = `grep -n "HIGH TABLE\\|VIP JOIN\\|broadcastToOwner\\|notify\\|chat_join_request\\|join request\\|joinee\\|chat_member\\|paid_vip\\|PAID_VIP" /var/www/yagacontentsystem/bot_engine.js | head -60`;
  conn.exec(command, (err, stream) => {
    if (err) { console.error(err); conn.end(); return; }
    stream.on('data', d => process.stdout.write(d.toString()))
          .stderr.on('data', d => process.stderr.write(d.toString()));
    stream.on('close', () => conn.end());
  });
}).connect({ host: VPS_HOST, port: 22, username: VPS_USER, password: VPS_PASS, readyTimeout: 15000 });
