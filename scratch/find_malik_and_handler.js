const { Client } = require('ssh2');

const VPS_HOST = '167.86.76.229';
const VPS_USER = 'root';
const VPS_PASS = process.env.VPS_SSH_PASSWORD || 'Rizwan34';

const conn = new Client();
conn.on('ready', () => {
  // Get ALL logs (not just last 80) and grep specifically for Malik
  const command = `
    echo "=== Searching ALL logs for Malik ==="
    grep -i "malik" /root/.pm2/logs/yaga-bot-out.log /root/.pm2/logs/yaga-bot-error.log 2>/dev/null || echo "No mention of Malik in bot logs"

    echo ""
    echo "=== Searching for 'duplicate key' error in bot_engine.js (chat_member handler) ==="
    grep -n "duplicate key\\|owner notify\\|notify owner\\|broadcastToOwner\\|VIP JOIN\\|HIGH TABLE\\|chat_join_request" /var/www/yagacontentsystem/bot_engine.js | head -40
  `;
  conn.exec(command, (err, stream) => {
    if (err) { console.error(err); conn.end(); return; }
    stream.on('data', d => process.stdout.write(d.toString()))
          .stderr.on('data', d => process.stderr.write(d.toString()));
    stream.on('close', () => conn.end());
  });
}).connect({ host: VPS_HOST, port: 22, username: VPS_USER, password: VPS_PASS, readyTimeout: 15000 });
