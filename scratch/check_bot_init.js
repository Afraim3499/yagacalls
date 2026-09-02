const { Client } = require('ssh2');

const conn = new Client();
conn.on('ready', () => {
  const code = `
    const fs = require('fs');
    const lines = fs.readFileSync('/var/www/yagacontentsystem/bot_engine_serverless.js', 'utf8').split('\\n');
    console.log(lines.slice(1700).join('\\n'));
  `;

  conn.exec(`node -e "${code.replace(/\n/g, ' ').replace(/"/g, '\\"')}"`, (err, stream) => {
    if (err) throw err;
    stream.on('close', () => conn.end())
          .on('data', (d) => process.stdout.write(d.toString()))
          .stderr.on('data', (d) => process.stderr.write(d.toString()));
  });
}).connect({ host: '167.86.76.229', port: 22, username: 'root', password: 'Rizwan34' });
