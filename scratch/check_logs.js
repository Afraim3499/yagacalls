const { Client } = require('ssh2');
const conn = new Client();
conn.on('ready', () => {
  const cmd = `tail -n 20 /var/log/nginx/error.log && echo "---" && tail -n 20 /var/log/nginx/access.log`;
  conn.exec(cmd, (err, stream) => {
    stream.on('data', d => process.stdout.write(d.toString()))
          .on('close', () => conn.end());
  });
}).connect({ host: '167.86.76.229', port: 22, username: 'root', password: 'Rizwan34' });
