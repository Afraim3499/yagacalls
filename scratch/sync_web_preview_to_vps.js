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

const pageCode = fs.readFileSync(path.join(__dirname, '../app/preview/signal-card/page.tsx'), 'utf-8');
const apiKlinesCode = fs.readFileSync(path.join(__dirname, '../app/api/klines/route.ts'), 'utf-8');

const conn = new Client();
conn.on('ready', () => {
  console.log('SSH Client :: Connected to VPS for Next.js preview sync');

  const setupCmd = `
    mkdir -p /var/www/yagacalls/app/preview/signal-card
    mkdir -p /var/www/yagacalls/app/api/klines

    cat << 'EOF' > /var/www/yagacalls/app/preview/signal-card/page.tsx
${pageCode}
EOF

    cat << 'EOF' > /var/www/yagacalls/app/api/klines/route.ts
${apiKlinesCode}
EOF

    cd /var/www/yagacalls && npm run build
    pm2 restart yagacalls-web
  `;

  console.log('Building and deploying Next.js preview page to VPS...');
  conn.exec(setupCmd, (err, stream) => {
    if (err) throw err;
    stream.on('close', (code, signal) => {
      console.log('Stream closed :: code: ' + code);
      conn.end();
    }).on('data', (data) => {
      process.stdout.write('STDOUT: ' + data);
    }).stderr.on('data', (data) => {
      process.stderr.write('STDERR: ' + data);
    });
  });
}).on('error', (err) => {
  console.error('SSH Connection Error:', err);
}).connect(sshConfig);
