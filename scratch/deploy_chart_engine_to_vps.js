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

const botEngineCode = fs.readFileSync(path.join(__dirname, '../yaga-content-system/bot_engine_serverless.js'), 'utf-8');
const chartGenCode = fs.readFileSync(path.join(__dirname, '../yaga-content-system/chart_card_generator.js'), 'utf-8');

const conn = new Client();
conn.on('ready', () => {
  console.log('SSH Client :: Connected to VPS host', env.VPS_HOST);
  
  // Install puppeteer in /var/www/yagacontentsystem if needed, upload files, and restart pm2 yaga-bot
  const writeFilesCmd = `
    cd /var/www/yagacontentsystem &&
    cat << 'EOF' > /var/www/yagacontentsystem/chart_card_generator.js
${chartGenCode}
EOF
    cat << 'EOF' > /var/www/yagacontentsystem/bot_engine_serverless.js
${botEngineCode}
EOF
    cd /var/www/yagacontentsystem && npm install puppeteer --save || true
    pm2 restart yaga-bot
  `;

  console.log('Deploying updated bot engine & chart generator to VPS...');
  conn.exec(writeFilesCmd, (err, stream) => {
    if (err) throw err;
    stream.on('close', (code, signal) => {
      console.log('Deployment stream closed :: code: ' + code);
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
