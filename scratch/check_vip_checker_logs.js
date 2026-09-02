const { Client } = require('ssh2');

const VPS_HOST = '167.86.76.229';
const VPS_USER = 'root';
const VPS_PASS = process.env.VPS_SSH_PASSWORD || 'Rizwan34';

const conn = new Client();
conn.on('ready', () => {
  const command = `
    echo "=== PM2 info for yaga-vip-checker ==="
    pm2 show yaga-vip-checker

    echo ""
    echo "=== Last 50 lines of VIP checker logs ==="
    pm2 logs yaga-vip-checker --lines 50 --nostream
  `;
  conn.exec(command, (err, stream) => {
    if (err) { console.error(err); conn.end(); return; }
    stream.on('data', d => process.stdout.write(d.toString()))
          .stderr.on('data', d => process.stderr.write(d.toString()));
    stream.on('close', () => conn.end());
  });
}).connect({ host: VPS_HOST, port: 22, username: VPS_USER, password: VPS_PASS, readyTimeout: 15000 });
