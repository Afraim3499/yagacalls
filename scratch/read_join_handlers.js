const { Client } = require('ssh2');

const VPS_HOST = '167.86.76.229';
const VPS_USER = 'root';
const VPS_PASS = process.env.VPS_SSH_PASSWORD || 'Rizwan34';

const conn = new Client();
conn.on('ready', () => {
  const command = `
    echo "=== chat_join_request handler (919-1020) ==="
    sed -n '919,1020p' /var/www/yagacontentsystem/bot_engine_serverless.js

    echo ""
    echo "=== chat_member handler (1021-1145) ==="
    sed -n '1021,1145p' /var/www/yagacontentsystem/bot_engine_serverless.js
  `;
  conn.exec(command, (err, stream) => {
    if (err) { console.error(err); conn.end(); return; }
    stream.on('data', d => process.stdout.write(d.toString()))
          .stderr.on('data', d => process.stderr.write(d.toString()));
    stream.on('close', () => conn.end());
  });
}).connect({ host: VPS_HOST, port: 22, username: VPS_USER, password: VPS_PASS, readyTimeout: 15000 });
