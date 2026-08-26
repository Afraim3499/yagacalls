const { Client } = require('ssh2');

// Load repo-root .env (gitignored) if present, so VPS_SSH_PASSWORD can live
// there instead of being hardcoded — see audit-2026/findings/14-infrastructure-devops.md.
// Requires Node 20.6+ (already implied by this repo's Next.js 16 dependency).
try {
  process.loadEnvFile();
} catch {
  // No .env file found — fine, the explicit checks below will report
  // clearly if a required variable is still missing either way.
}

const VPS_HOST = process.env.VPS_HOST || '104.234.134.236';
const VPS_USER = process.env.VPS_USER || 'root';
const VPS_SSH_PASSWORD = process.env.VPS_SSH_PASSWORD;

if (!VPS_SSH_PASSWORD) {
  console.error(
    'Missing VPS_SSH_PASSWORD. Set it in a repo-root .env file (gitignored — ' +
    'see .env.deploy.example) or as an environment variable before running this script.\n' +
    'This was previously hardcoded in this file and committed to git history — ' +
    'see audit-2026/findings/14-infrastructure-devops.md for why that changed.'
  );
  process.exit(1);
}

const conn = new Client();

console.log(`Connecting to VPS (${VPS_HOST})...`);

conn.on('ready', () => {
  console.log('SSH connection established. Resetting to origin/main, building, and restarting PM2...');
  
  // Reset server directory to origin/main cleanly, run build, and restart PM2
  const deployCommand = 'cd /var/www/yagacalls && git fetch origin && git reset --hard origin/main && npm run build && pm2 restart yagacalls-web';

  conn.exec(deployCommand, (err, stream) => {
    if (err) {
      console.error('Execution error:', err);
      conn.end();
      return;
    }

    stream.on('close', (code, signal) => {
      console.log(`\nDeployment finished with exit code: ${code}`);
      conn.end();

      if (code === 0) {
        console.log('\nTriggering Search Engine Pinging Pipeline...');
        const { exec } = require('child_process');
        const path = require('path');
        const scriptPath = path.join(__dirname, 'ping_search_engines.js');
        
        exec(`node "${scriptPath}"`, (pingErr, stdout, stderr) => {
          if (stdout) console.log(stdout);
          if (stderr) console.error(stderr);
        });
      }
    }).on('data', (data) => {
      process.stdout.write(data);
    }).stderr.on('data', (data) => {
      process.stderr.write(data);
    });
  });
}).on('error', (err) => {
  console.error('SSH Connection Error:', err);
}).connect({
  host: VPS_HOST,
  port: 22,
  username: VPS_USER,
  password: VPS_SSH_PASSWORD
});
