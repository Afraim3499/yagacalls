const { Client } = require('ssh2');

try {
  process.loadEnvFile('.env.deploy');
} catch {
  // Ignore if not loaded
}

const VPS_HOST = process.env.VPS_HOST || '167.86.76.229';
const VPS_USER = process.env.VPS_USER || 'root';
const VPS_SSH_PASSWORD = process.env.VPS_SSH_PASSWORD || 'Rizwan34';

console.log(`Connecting to NEW VPS (${VPS_HOST}) for Full App & Nginx Deployment...`);

const conn = new Client();

function executeCommands(commands) {
  if (commands.length === 0) {
    console.log('\n==================================================');
    console.log('✅ REPOSITORY CLONED, BUILT, PM2 & NGINX CONFIGURED!');
    console.log('==================================================');
    conn.end();
    return;
  }

  const cmd = commands.shift();
  console.log(`\n==================================================`);
  console.log(`🚀 Executing: ${cmd.name || cmd}`);
  console.log(`==================================================`);

  const commandStr = typeof cmd === 'string' ? cmd : cmd.command;

  conn.exec(commandStr, (err, stream) => {
    if (err) {
      console.error('Execution Error:', err);
      conn.end();
      return;
    }

    stream.on('close', (code, signal) => {
      console.log(`Command finished with exit code: ${code}`);
      if (code !== 0 && !cmd.ignoreError) {
        console.error(`Error executing ${cmd.name || commandStr}`);
      }
      executeCommands(commands);
    }).on('data', (data) => {
      process.stdout.write(data);
    }).stderr.on('data', (data) => {
      process.stderr.write(data);
    });
  });
}

const nginxConfig = `
server {
    listen 80;
    listen [::]:80;
    server_name yagacalls.com www.yagacalls.com crm.yagacalls.com;

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
}
`;

conn.on('ready', () => {
  console.log('✅ Connected to NEW VPS!');

  const deploymentSteps = [
    {
      name: 'Clean old web directory & clone main repo',
      command: 'rm -rf /var/www/yagacalls && git clone https://github.com/Afraim3499/yagacalls.git /var/www/yagacalls'
    },
    {
      name: 'Install NPM dependencies',
      command: 'cd /var/www/yagacalls && npm install'
    },
    {
      name: 'Build Next.js production bundle',
      command: 'cd /var/www/yagacalls && npm run build'
    },
    {
      name: 'Start Next.js app with PM2',
      command: 'cd /var/www/yagacalls && pm2 delete yagacalls-web || true; pm2 start npm --name "yagacalls-web" -- start',
      ignoreError: true
    },
    {
      name: 'Save PM2 process list & enable auto-start on boot',
      command: 'pm2 save && pm2 startup systemd -u root --hp /root || true',
      ignoreError: true
    },
    {
      name: 'Configure Nginx site configuration',
      command: `cat << 'EOF' > /etc/nginx/sites-available/yagacalls.conf\n${nginxConfig}\nEOF`
    },
    {
      name: 'Enable Nginx site symlink & remove default site',
      command: 'ln -sf /etc/nginx/sites-available/yagacalls.conf /etc/nginx/sites-enabled/yagacalls.conf && rm -f /etc/nginx/sites-enabled/default'
    },
    {
      name: 'Test & Reload Nginx',
      command: 'nginx -t && systemctl reload nginx'
    },
    {
      name: 'Check running PM2 processes & Nginx status',
      command: 'pm2 status && systemctl status nginx --no-pager'
    }
  ];

  executeCommands(deploymentSteps);
}).on('error', (err) => {
  console.error('❌ SSH Connection Error:', err);
}).connect({
  host: VPS_HOST,
  port: 22,
  username: VPS_USER,
  password: VPS_SSH_PASSWORD
});
