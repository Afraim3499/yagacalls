const { Client } = require('ssh2');
const fs = require('fs');
const path = require('path');

const envContent = fs.readFileSync(path.join(__dirname, '../.env.deploy'), 'utf-8');
const env = {};
envContent.split('\n').forEach(line => {
  const [key, ...vals] = line.split('=');
  if (key && vals.length) env[key.trim()] = vals.join('=').trim();
});

const conn = new Client();
conn.on('ready', () => {
  conn.exec('cat /etc/nginx/sites-enabled/yagacalls.conf && echo "---CRM---" && cat /etc/nginx/sites-enabled/crm.yagacalls.conf', (err, stream) => {
    stream.on('data', d => process.stdout.write(d)).on('close', () => conn.end());
  });
}).connect({ host: env.VPS_HOST, port: 22, username: 'root', password: env.VPS_SSH_PASSWORD });
