const { Client } = require('ssh2');
const conn = new Client();
conn.on('ready', () => {
  const envContent = `VITE_SUPABASE_URL=https://ghwvwtwktnveqdqivxmy.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdod3Z3dHdrdG52ZXFkcWl2eG15Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODUzNTY0NjIsImV4cCI6MjEwMDkzMjQ2Mn0.bka5GMEdehBvPgQ_AVJ6xZfEt9k17U0hVUYLMKeFKB4
`;
  
  const cmd = `cat << 'EOF' > /var/www/yagacontentsystem/crm-app/.env
${envContent}EOF
cd /var/www/yagacontentsystem/crm-app && npm run build
`;

  conn.exec(cmd, (err, stream) => {
    stream.on('data', d => process.stdout.write(d.toString()))
          .on('close', () => conn.end());
  });
}).connect({ host: '167.86.76.229', port: 22, username: 'root', password: 'Rizwan34' });
