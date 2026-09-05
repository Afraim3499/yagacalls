const { Client } = require('ssh2');
const fs = require('fs');
const path = require('path');

const envContent = fs.readFileSync(path.join(__dirname, '../.env.deploy'), 'utf-8');
const env = {};
envContent.split('\n').forEach(line => {
  const [k, ...v] = line.split('=');
  if (k && v.length) env[k.trim()] = v.join('=').trim();
});

const sshConfig = {
  host: env.VPS_HOST,
  port: 22,
  username: env.VPS_USER || 'root',
  password: env.VPS_SSH_PASSWORD
};

const studioPagePath = path.join(__dirname, '../app/signal-studio/page.tsx');
const hubPagePath = path.join(__dirname, '../app/signal-studio/hub/page.tsx');
const resultViewPath = path.join(__dirname, '../app/result-view/page.tsx');
const previewPagePath = path.join(__dirname, '../app/preview/signal-card/page.tsx');
const notifyAdminPath = path.join(__dirname, '../app/api/notify-admin/route.ts');
const klinesApiPath = path.join(__dirname, '../app/api/klines/route.ts');
const botEnginePath = path.join(__dirname, '../yaga-content-system/bot_engine_serverless.js');
const chartGenPath = path.join(__dirname, '../yaga-content-system/chart_card_generator.js');
const signalMonitorPath = path.join(__dirname, '../yaga-content-system/signal_monitor_engine.js');

const captureOptionsPath = path.join(__dirname, '../lib/captureOptions.ts');
const puppeteerScreenshotPath = path.join(__dirname, '../lib/puppeteerScreenshot.ts');
const screenshotApiPath = path.join(__dirname, '../app/api/screenshot/route.ts');

const vipExpirationPath = path.join(__dirname, '../yaga-content-system/vip_expiration_checker.js');

const conn = new Client();
conn.on('ready', () => {
  console.log('SSH Client :: Connected to VPS for studio update deployment');

  conn.sftp((err, sftp) => {
    if (err) throw err;

    const uploads = [
      { local: captureOptionsPath, remote: '/var/www/yagacalls/lib/captureOptions.ts' },
      { local: studioPagePath, remote: '/var/www/yagacalls/app/signal-studio/page.tsx' },
      { local: hubPagePath, remote: '/var/www/yagacalls/app/signal-studio/hub/page.tsx' },
      { local: resultViewPath, remote: '/var/www/yagacalls/app/result-view/page.tsx' },
      { local: previewPagePath, remote: '/var/www/yagacalls/app/preview/signal-card/page.tsx' },
      { local: notifyAdminPath, remote: '/var/www/yagacalls/app/api/notify-admin/route.ts' },
      { local: screenshotApiPath, remote: '/var/www/yagacalls/app/api/screenshot/route.ts' },
      { local: klinesApiPath, remote: '/var/www/yagacalls/app/api/klines/route.ts' },
      { local: puppeteerScreenshotPath, remote: '/var/www/yagacalls/lib/puppeteerScreenshot.ts' },
      { local: botEnginePath, remote: '/var/www/yagacontentsystem/bot_engine_serverless.js' },
      { local: chartGenPath, remote: '/var/www/yagacontentsystem/chart_card_generator.js' },
      { local: signalMonitorPath, remote: '/var/www/yagacontentsystem/signal_monitor_engine.js' },
      { local: vipExpirationPath, remote: '/var/www/yagacontentsystem/vip_expiration_checker.js' },
    ];

    conn.exec('mkdir -p /var/www/yagacalls/lib /var/www/yagacalls/app/signal-studio /var/www/yagacalls/app/signal-studio/hub /var/www/yagacalls/app/result-view /var/www/yagacalls/app/preview/signal-card /var/www/yagacalls/app/api/notify-admin /var/www/yagacalls/app/api/screenshot /var/www/yagacalls/app/api/klines', (mkdirErr, stream) => {
      if (mkdirErr) console.error("mkdir error:", mkdirErr);
      stream.on('data', () => {}).stderr.on('data', () => {});
      stream.on('close', () => {
        let completed = 0;
        uploads.forEach(u => {
          sftp.fastPut(u.local, u.remote, (putErr) => {
            if (putErr) console.error('Upload err for', u.remote, putErr);
            else console.log('✅ Uploaded:', u.remote);
            completed++;
            if (completed === uploads.length) {
              const execCmd = `
                for envfile in /var/www/yagacalls/.env /var/www/yagacontentsystem/.env; do
                  touch $envfile
                  grep -q "^TELEGRAM_SUPERGROUP_ID=" $envfile || echo "TELEGRAM_SUPERGROUP_ID=-1004498264496" >> $envfile
                  grep -q "^TG_THREAD_SIGNALS=" $envfile || echo "TG_THREAD_SIGNALS=2" >> $envfile
                  grep -q "^TG_THREAD_SYSTEM_LOGS=" $envfile || echo "TG_THREAD_SYSTEM_LOGS=5" >> $envfile
                  grep -q "^TG_THREAD_DISPATCHES=" $envfile || echo "TG_THREAD_DISPATCHES=4" >> $envfile
                  grep -q "^TG_THREAD_MEMBER_JOINS=" $envfile || echo "TG_THREAD_MEMBER_JOINS=3" >> $envfile
                  grep -q "^TG_THREAD_GENERAL=" $envfile || echo "TG_THREAD_GENERAL=1" >> $envfile
                done
                cd /var/www/yagacalls && npm install puppeteer && rm -rf .next && npx next build
                pm2 restart yagacalls-web
                cd /var/www/yagacontentsystem && pm2 restart yaga-bot
                cd /var/www/yagacontentsystem && (pm2 restart yaga-signal-monitor || pm2 start signal_monitor_engine.js --name "yaga-signal-monitor")
                cd /var/www/yagacontentsystem && (pm2 restart yaga-vip-checker || pm2 start vip_expiration_checker.js --name "yaga-vip-checker")
              `;
              conn.exec(execCmd, (cmdErr, cmdStream) => {
                cmdStream.on('data', d => process.stdout.write(d.toString()))
                         .stderr.on('data', d => process.stderr.write(d.toString()))
                         .on('close', () => conn.end());
              });
            }
          });
        });
      });
    });
  });
}).on('error', (err) => {
  console.error('SSH Connection Error:', err);
}).connect(sshConfig);
