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
  console.log('SSH Client :: Connected. Fixing stuck apt...');
  
  const execCmd = `
    killall -9 apt apt-get dpkg
    rm -f /var/lib/dpkg/lock-frontend /var/lib/dpkg/lock /var/cache/apt/archives/lock
    dpkg --configure -a
    apt-get update
    DEBIAN_FRONTEND=noninteractive apt-get install -y \\
    ca-certificates fonts-liberation libappindicator3-1 libasound2t64 libatk-bridge2.0-0 \\
    libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgbm1 \\
    libgcc1 libglib2.0-0 libgtk-3-0 libnspr4 libnss3 libpango-1.0-0 libpangocairo-1.0-0 \\
    libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 \\
    libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 lsb-release \\
    wget xdg-utils
  `;
  
  conn.exec(execCmd, (err, stream) => {
    if (err) throw err;
    stream.on('data', d => process.stdout.write(d.toString()))
          .stderr.on('data', d => process.stderr.write(d.toString()))
          .on('close', () => {
            console.log('✅ Fix complete');
            conn.end();
          });
  });
}).on('error', (err) => {
  console.error('SSH Error:', err);
}).connect(sshConfig);
