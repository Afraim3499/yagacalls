const { Client } = require('ssh2');

try {
  process.loadEnvFile('.env.deploy');
} catch {
  // Ignore if not loaded
}

const VPS_HOST = process.env.VPS_HOST || '167.86.76.229';
const VPS_USER = process.env.VPS_USER || 'root';
const VPS_SSH_PASSWORD = process.env.VPS_SSH_PASSWORD || 'Rizwan34';

console.log(`Connecting to NEW Ubuntu VPS (${VPS_HOST})...`);

const conn = new Client();

function executeCommands(commands) {
  if (commands.length === 0) {
    console.log('\n==================================================');
    console.log('✅ ALL SERVER PREREQUISITES INSTALLED SUCCESSFULLY!');
    console.log('==================================================');
    conn.end();
    return;
  }

  const cmd = commands.shift();
  console.log(`\n==================================================`);
  console.log(`🚀 Executing: ${cmd}`);
  console.log(`==================================================`);

  conn.exec(cmd, (err, stream) => {
    if (err) {
      console.error('Execution Error:', err);
      conn.end();
      return;
    }

    stream.on('close', (code, signal) => {
      console.log(`Command finished with exit code: ${code}`);
      if (code !== 0) {
        console.error(`Warning: Command ${cmd} returned code ${code}`);
      }
      executeCommands(commands);
    }).on('data', (data) => {
      process.stdout.write(data);
    }).stderr.on('data', (data) => {
      process.stderr.write(data);
    });
  });
}

conn.on('ready', () => {
  console.log('✅ SSH connection established!');

  const ubuntuCommands = [
    // 1. Install Node.js 20.x from Nodesource (Debian/Ubuntu)
    'curl -fsSL https://deb.nodesource.com/setup_20.x | bash -',
    'apt-get install -y nodejs certbot python3-certbot-nginx build-essential',

    // 2. Verify Node & npm
    'node -v && npm -v',

    // 3. Install PM2 globally
    'npm install -g pm2',

    // 4. Verify PM2
    'pm2 -v',

    // 5. Ensure web directory structure
    'mkdir -p /var/www/yagacalls && mkdir -p /var/www/yagacontentsystem'
  ];

  executeCommands(ubuntuCommands);
}).on('error', (err) => {
  console.error('❌ SSH Connection Error:', err);
}).connect({
  host: VPS_HOST,
  port: 22,
  username: VPS_USER,
  password: VPS_SSH_PASSWORD
});
