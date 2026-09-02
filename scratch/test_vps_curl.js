const { Client } = require('ssh2');

const conn = new Client();
conn.on('ready', () => {
  conn.exec('curl -4 -s https://api.telegram.org/bot8446355677:AAGln29V9MXOifeJc5NBZT0Dn68Z8innrQw/getMe; echo ""; node -e "dns.setDefaultResultOrder(\'ipv4first\'); fetch(\'https://api.telegram.org/bot8446355677:AAGln29V9MXOifeJc5NBZT0Dn68Z8innrQw/getMe\').then(r=>r.json()).then(console.log);"', (err, stream) => {
    if (err) throw err;
    stream.on('close', () => conn.end())
          .on('data', (d) => process.stdout.write(d.toString()))
          .stderr.on('data', (d) => process.stderr.write(d.toString()));
  });
}).connect({ host: '167.86.76.229', port: 22, username: 'root', password: 'Rizwan34' });
