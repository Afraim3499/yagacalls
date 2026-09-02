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

const studioPageCode = fs.readFileSync(path.join(__dirname, '../app/signal-studio/page.tsx'), 'utf-8');
const supabaseLibCode = fs.readFileSync(path.join(__dirname, '../lib/supabase.ts'), 'utf-8');
const sitemapBuilderCode = fs.readFileSync(path.join(__dirname, '../lib/sitemapBuilder.ts'), 'utf-8');
const botEngineCode = fs.readFileSync(path.join(__dirname, '../yaga-content-system/bot_engine_serverless.js'), 'utf-8');
const chartGenCode = fs.readFileSync(path.join(__dirname, '../yaga-content-system/chart_card_generator.js'), 'utf-8');

const nginxConf = `server {
    listen 80;
    server_name signal-studio.yagacalls.com;

    location / {
        proxy_pass http://127.0.0.1:3000/signal-studio;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
`;

const conn = new Client();
conn.on('ready', () => {
  console.log('SSH Client :: Connected to VPS for signal-studio.yagacalls.com setup');

  const setupCmd = `
    mkdir -p /var/www/yagacalls/app/signal-studio
    mkdir -p /var/www/yagacalls/lib

    cat << 'EOF' > /var/www/yagacalls/app/signal-studio/page.tsx
${studioPageCode}
EOF

    cat << 'EOF' > /var/www/yagacalls/lib/supabase.ts
${supabaseLibCode}
EOF

    cat << 'EOF' > /var/www/yagacalls/lib/sitemapBuilder.ts
${sitemapBuilderCode}
EOF

    cat << 'EOF' > /var/www/yagacontentsystem/chart_card_generator.js
${chartGenCode}
EOF

    cat << 'EOF' > /var/www/yagacontentsystem/bot_engine_serverless.js
${botEngineCode}
EOF

    cat << 'EOF' > /etc/nginx/sites-available/signal-studio.yagacalls.conf
${nginxConf}
EOF

    ln -sf /etc/nginx/sites-available/signal-studio.yagacalls.conf /etc/nginx/sites-enabled/
    nginx -t && systemctl reload nginx

    cd /var/www/yagacalls && npm run build
    pm2 restart yagacalls-web
    cd /var/www/yagacontentsystem && pm2 restart yaga-bot
  `;

  console.log('Deploying Signal Studio domain and rebuilding Next.js on VPS...');
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
