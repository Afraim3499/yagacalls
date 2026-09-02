const { Client } = require('ssh2');

const conn = new Client();
conn.on('ready', () => {
  const code = `
    const fs = require('fs');
    console.log(fs.readFileSync('/var/www/yagacontentsystem/bot_engine.js', 'utf8'));
  `;

  conn.exec(`node -e "${code.replace(/\n/g, ' ').replace(/"/g, '\\"')}"`, (err, stream) => {
    if (err) throw err;
    stream.on('close', () => conn.end())
          .on('data', (d) => process.stdout.write(d.toString()))
          .stderr.on('data', (d) => process.stderr.write(d.toString()));
  });
}).connect({ host: '167.86.76.229', port: 22, username: 'root', password: 'Rizwan34' });
