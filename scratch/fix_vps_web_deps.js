const { Client } = require('ssh2');
const fs = require('fs');
const path = require('path');

const envContent = fs.readFileSync(path.join(__dirname, '../.env.deploy'), 'utf-8');
const env = {};
envContent.split('\n').forEach(line => {
  const [k, ...v] = line.split('=');
  if (k && v.length) env[key.trim()] = v.join('=').trim();
});

const sshConfig = {
  host: env.VPS_HOST,
  port: 22,
  username: env.VPS_USER || 'root',
  password: env.VPS_SSH_PASSWORD
};

const supabaseLibCode = fs.readFileSync(path.join(__dirname, '../lib/supabase.ts'), 'utf-8');

const conn = new Client();
conn.on('ready', () => {
  console.log('SSH Client :: Connected to VPS host for dependencies installation');

  const setupCmd = `
    mkdir -p /var/www/yagacalls/lib

    cat << 'EOF' > /var/www/yagacalls/lib/supabase.ts
${supabaseLibCode}
EOF

    cd /var/www/yagacalls && npm install lightweight-charts html-to-image @supabase/supabase-js lucide-react --save
    cd /var/www/yagacalls && npm run build
    pm2 restart yagacalls-web
  `;

  console.log('Installing dependencies and building Next.js on VPS...');
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
