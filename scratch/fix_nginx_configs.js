const { Client } = require('ssh2');
const fs = require('fs');
const path = require('path');

const envContent = fs.readFileSync(path.join(__dirname, '../.env.deploy'), 'utf-8');
const env = {};
envContent.split('\n').forEach(line => {
  const [key, ...vals] = line.split('=');
  if (key && vals.length) env[key.trim()] = vals.join('=').trim();
});

const yagacallsConf = `server {
    server_name yagacalls.com www.yagacalls.com;
    
    # Redirect HTTP to HTTPS once SSL cert is active, or serve app
    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    client_max_body_size 50M;

    listen [::]:443 ssl ipv6only=on;
    listen 443 ssl;
    ssl_certificate /etc/letsencrypt/live/yagacalls.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/yagacalls.com/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;
}

server {
    if ($host = www.yagacalls.com) {
        return 301 https://$host$request_uri;
    }

    if ($host = yagacalls.com) {
        return 301 https://$host$request_uri;
    }

    listen 80;
    listen [::]:80;
    server_name yagacalls.com www.yagacalls.com;
    return 404;
}
`;

const crmConf = `server {
    server_name crm.yagacalls.com;

    root /var/www/yagacontentsystem/crm-app/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    listen [::]:443 ssl;
    listen 443 ssl;
    ssl_certificate /etc/letsencrypt/live/yagacalls.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/yagacalls.com/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;
}

server {
    if ($host = crm.yagacalls.com) {
        return 301 https://$host$request_uri;
    }

    listen 80;
    listen [::]:80;
    server_name crm.yagacalls.com;
    return 404;
}
`;

const yagacallsB64 = Buffer.from(yagacallsConf).toString('base64');
const crmB64 = Buffer.from(crmConf).toString('base64');

const setupCommands = [
  `echo "${yagacallsB64}" | base64 -d > /etc/nginx/sites-available/yagacalls.conf`,
  `echo "${crmB64}" | base64 -d > /etc/nginx/sites-available/crm.yagacalls.conf`,
  'nginx -t && systemctl reload nginx'
];

const conn = new Client();
conn.on('ready', () => {
  console.log('SSH Client :: ready');
  conn.exec(setupCommands.join(' && '), (err, stream) => {
    if (err) throw err;
    stream.on('close', (code, signal) => {
      console.log('Stream :: close :: code: ' + code + ', signal: ' + signal);
      conn.end();
    }).on('data', (data) => {
      process.stdout.write('STDOUT: ' + data);
    }).stderr.on('data', (data) => {
      process.stderr.write('STDERR: ' + data);
    });
  });
}).connect({ host: env.VPS_HOST, port: 22, username: 'root', password: env.VPS_SSH_PASSWORD });
