const { Client } = require('ssh2');

const VPS_HOST = '167.86.76.229';
const VPS_USER = 'root';
const VPS_PASS = process.env.VPS_SSH_PASSWORD || 'Rizwan34';

const conn = new Client();
conn.on('ready', () => {
  // Get the actual VIP checker source code
  const command = `cat /var/www/yagacontentsystem/vip_expiration_checker.js`;
  conn.exec(command, (err, stream) => {
    if (err) { console.error(err); conn.end(); return; }
    stream.on('data', d => process.stdout.write(d.toString()))
          .stderr.on('data', d => process.stderr.write(d.toString()));
    stream.on('close', () => conn.end());
  });
}).connect({ host: VPS_HOST, port: 22, username: VPS_USER, password: VPS_PASS, readyTimeout: 15000 });
