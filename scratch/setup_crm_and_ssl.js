const { Client } = require('ssh2');
const fs = require('fs');
const path = require('path');

const envContent = fs.readFileSync(path.join(__dirname, '../.env.deploy'), 'utf-8');
const env = {};
envContent.split('\n').forEach(line => {
  const [key, ...vals] = line.split('=');
  if (key && vals.length) env[key.trim()] = vals.join('=').trim();
});

const sshConfig = {
  host: env.VPS_HOST,
  port: 22,
  username: env.VPS_USER || 'root',
  password: env.VPS_SSH_PASSWORD
};

const crmNginxConf = `
server {
    listen 80;
    server_name crm.yagacalls.com;

    root /var/www/yagacontentsystem/crm-app/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
`;

const b64Conf = Buffer.from(crmNginxConf.trim()).toString('base64');

const setupCommands = [
  // Setup Nginx for CRM
  `echo "${b64Conf}" | base64 -d > /etc/nginx/sites-available/crm.yagacalls.conf`,
  'ln -sf /etc/nginx/sites-available/crm.yagacalls.conf /etc/nginx/sites-enabled/',
  
  // Test and reload Nginx
  'nginx -t && systemctl reload nginx',
  
  // Run Certbot for all domains
  // Note: Since Cloudflare might proxy, we'll request certs without interactive mode
  'certbot --nginx -n --agree-tos -m admin@yagacalls.com -d yagacalls.com -d www.yagacalls.com -d crm.yagacalls.com'
];

const conn = new Client();
conn.on('ready', () => {
  console.log('SSH Client :: ready');
  const cmd = setupCommands.join(' && ');
  console.log('Executing CRM setup and Certbot commands...');
  
  conn.exec(cmd, (err, stream) => {
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
}).on('error', (err) => {
  console.error('SSH Connection Error:', err);
}).connect(sshConfig);
