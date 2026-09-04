const { Client } = require('ssh2');
const fs = require('fs');
const path = require('path');

const envContent = fs.readFileSync(path.join(__dirname, '../.env.deploy'), 'utf-8');
const env = {};
envContent.split('\n').forEach(line => {
  const [k, ...v] = line.split('=');
  if (k && v.length) env[k.trim()] = v.join('=').trim();
});

const sshConfig = {
  host: env.VPS_HOST,
  port: 22,
  username: env.VPS_USER || 'root',
  password: env.VPS_SSH_PASSWORD
};

const conn = new Client();
conn.on('ready', () => {
  console.log('SSH Client :: Connected to VPS');
  const execCmd = 'cd /var/www/yagacontentsystem && git status && git log -n 3';
  conn.exec(execCmd, (err, stream) => {
    if (err) throw err;
    stream.on('data', d => process.stdout.write(d.toString()))
          .stderr.on('data', d => process.stderr.write(d.toString()))
          .on('close', () => conn.end());
  });
}).on('error', (err) => {
  console.error('SSH Error:', err);
}).connect(sshConfig);
