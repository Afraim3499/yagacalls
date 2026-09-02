const { Client } = require('ssh2');

const conn = new Client();
conn.on('ready', () => {
  const code = `
    const fs = require('fs');
    const envFile = fs.readFileSync('/var/www/yagacontentsystem/.env', 'utf8');
    const dbUrlLine = envFile.split('\\n').find(l => l.startsWith('DATABASE_URL='));
    const dbUrl = dbUrlLine ? dbUrlLine.split('=')[1].trim() : '';
    const { Pool } = require('/var/www/yagacontentsystem/node_modules/pg');
    const pool = new Pool({ connectionString: dbUrl });
    async function checkOwners() {
      try {
        const res = await pool.query('SELECT * FROM public.owners');
        console.log('OWNERS ON NEW VPS DB:', JSON.stringify(res.rows, null, 2));
      } catch (err) {
        console.error('DB Query Error:', err.message);
      }
      process.exit(0);
    }
    checkOwners();
  `;

  conn.exec(`cd /var/www/yagacontentsystem && node -e "${code.replace(/\n/g, ' ').replace(/"/g, '\\"')}"`, (err, stream) => {
    if (err) throw err;
    stream.on('close', () => conn.end())
          .on('data', (d) => process.stdout.write(d.toString()))
          .stderr.on('data', (d) => process.stderr.write(d.toString()));
  });
}).connect({ host: '167.86.76.229', port: 22, username: 'root', password: 'Rizwan34' });
