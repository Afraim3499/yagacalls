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

const BOTS_ENV = `
TELEGRAM_BOT_TOKEN=8446355677:AAGln29V9MXOifeJc5NBZT0Dn68Z8innrQw
TELEGRAM_CONCIERGE_BOT_TOKEN=8821931231:AAG-C94AnSC5MH5LQ6cNI2w99SWXWvGYuX4
TELEGRAM_AFFILIATE_BOT_TOKEN=8839038800:AAHLIOgv-dTxpMsXMLjXnimGJqXL-AN4e3I
DATABASE_URL=postgresql://postgres.ghwvwtwktnveqdqivxmy:Rizwan99636%3F@aws-0-ap-southeast-2.pooler.supabase.com:5432/postgres
`;

const setupCommands = [
  'mkdir -p /var/www',
  'rm -rf /var/www/yagacontentsystem',
  'git clone https://github.com/Afraim3499/yagacontentsystem.git /var/www/yagacontentsystem',
  'cd /var/www/yagacontentsystem && npm install',
  // Create .env
  `echo "${BOTS_ENV.trim().replace(/\n/g, '\\n')}" > /var/www/yagacontentsystem/.env`,
  
  // Setup PM2 processes
  'cd /var/www/yagacontentsystem && pm2 delete yaga-bot || true',
  'cd /var/www/yagacontentsystem && pm2 delete yaga-affiliate-bot || true',
  'cd /var/www/yagacontentsystem && pm2 delete yaga-concierge-bot || true',
  'cd /var/www/yagacontentsystem && pm2 delete yaga-vip-checker || true',
  
  'cd /var/www/yagacontentsystem && pm2 start bot_engine.js --name yaga-bot',
  'cd /var/www/yagacontentsystem && pm2 start affiliate_bot_engine.js --name yaga-affiliate-bot',
  'cd /var/www/yagacontentsystem && pm2 start concierge_bot_engine.js --name yaga-concierge-bot',
  'cd /var/www/yagacontentsystem && pm2 start vip_expiration_checker.js --name yaga-vip-checker',
  
  'pm2 save',
];

const conn = new Client();
conn.on('ready', () => {
  console.log('SSH Client :: ready');
  
  const cmd = setupCommands.join(' && ');
  console.log('Executing deployment commands...');
  
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
