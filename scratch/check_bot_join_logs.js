const { Client } = require('ssh2');

const VPS_HOST = '167.86.76.229';
const VPS_USER = 'root';
const VPS_PASS = process.env.VPS_SSH_PASSWORD || 'Rizwan34';

const conn = new Client();
conn.on('ready', () => {
  const command = `
    echo "=== Main bot path ==="
    pm2 show yaga-bot | grep "script path"

    echo ""
    echo "=== Last 80 lines of yaga-bot logs (around time Malik joined) ==="
    pm2 logs yaga-bot --lines 80 --nostream 2>&1 | grep -i "malik\\|high table\\|join\\|vip\\|owner\\|notify\\|error\\|chat_member" || pm2 logs yaga-bot --lines 80 --nostream
  `;
  conn.exec(command, (err, stream) => {
    if (err) { console.error(err); conn.end(); return; }
    stream.on('data', d => process.stdout.write(d.toString()))
          .stderr.on('data', d => process.stderr.write(d.toString()));
    stream.on('close', () => conn.end());
  });
}).connect({ host: VPS_HOST, port: 22, username: VPS_USER, password: VPS_PASS, readyTimeout: 15000 });
