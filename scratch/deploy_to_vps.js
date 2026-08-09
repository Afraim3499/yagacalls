const { Client } = require('ssh2');

const conn = new Client();

console.log('Connecting to VPS (104.234.134.236)...');

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
  host: '104.234.134.236',
  port: 22,
  username: 'root',
  password: 'Rizwan@34'
});
