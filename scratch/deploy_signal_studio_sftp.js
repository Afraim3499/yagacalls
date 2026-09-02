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

const studioPagePath = path.join(__dirname, '../app/signal-studio/page.tsx');
const supabaseLibPath = path.join(__dirname, '../lib/supabase.ts');
const sitemapBuilderPath = path.join(__dirname, '../lib/sitemapBuilder.ts');
const botEnginePath = path.join(__dirname, '../yaga-content-system/bot_engine_serverless.js');
const chartGenPath = path.join(__dirname, '../yaga-content-system/chart_card_generator.js');

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
  console.log('SSH Client :: Connected to VPS for SFTP file transfer');

  conn.sftp((err, sftp) => {
    if (err) throw err;

    const uploads = [
      { local: studioPagePath, remote: '/var/www/yagacalls/app/signal-studio/page.tsx' },
      { local: supabaseLibPath, remote: '/var/www/yagacalls/lib/supabase.ts' },
      { local: sitemapBuilderPath, remote: '/var/www/yagacalls/lib/sitemapBuilder.ts' },
      { local: botEnginePath, remote: '/var/www/yagacontentsystem/bot_engine_serverless.js' },
      { local: chartGenPath, remote: '/var/www/yagacontentsystem/chart_card_generator.js' },
    ];

    // Ensure remote dirs exist
    conn.exec('mkdir -p /var/www/yagacalls/app/signal-studio /var/www/yagacalls/lib /var/www/yagacontentsystem', (mkdirErr, stream) => {
      stream.on('close', () => {
        let completed = 0;
        uploads.forEach(u => {
          sftp.fastPut(u.local, u.remote, (putErr) => {
            if (putErr) console.error('Upload err for', u.remote, putErr);
            else console.log('✅ Uploaded:', u.remote);
            completed++;
            if (completed === uploads.length) {
              // Write Nginx config & run build commands
              const execCmd = `
                echo "${nginxConf.replace(/\n/g, '\\n')}" > /etc/nginx/sites-available/signal-studio.yagacalls.conf
                ln -sf /etc/nginx/sites-available/signal-studio.yagacalls.conf /etc/nginx/sites-enabled/
                nginx -t && systemctl reload nginx

                cd /var/www/yagacalls && npm run build
                pm2 restart yagacalls-web
                cd /var/www/yagacontentsystem && pm2 restart yaga-bot
              `;
              conn.exec(execCmd, (cmdErr, cmdStream) => {
                cmdStream.on('data', d => process.stdout.write(d.toString()))
                         .stderr.on('data', d => process.stderr.write(d.toString()))
                         .on('close', () => conn.end());
              });
            }
          });
        });
      });
    });
  });
}).on('error', (err) => {
  console.error('SSH Connection Error:', err);
}).connect(sshConfig);
