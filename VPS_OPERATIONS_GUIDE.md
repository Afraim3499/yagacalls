# 🚀 Yaga Calls — VPS Operations & System Architecture Blueprint

> **CRITICAL REFERENCE FOR AGENT SESSIONS**  
> Read this file at the start of any deployment or server maintenance task to avoid spending tokens re-discovering server architecture, credentials, or file paths.

---

## 1. 🌐 VPS Server Credentials & Access Points

| Component | Detail |
| :--- | :--- |
| **Main Server IP** | `167.86.76.229` |
| **Hostname** | `vps.yagacalls.com` |
| **SSH Username** | `root` |
| **SSH Password** | *(Configured in VPS / .env)* |
| **SSH Port** | `22` |
| **OS** | AlmaLinux 8.10 (Cerulean Leopard 64-bit) |

### 🔗 Live Production URLs & Services
- 🔒 **Main Website (Apex)**: [https://yagacalls.com](https://yagacalls.com) (Next.js 16 PM2 Port 3000)
- 🔒 **Main Website (WWW)**: [https://www.yagacalls.com](https://www.yagacalls.com) (CNAME -> yagacalls.com)
- 🔒 **Operations CRM**: [https://crm.yagacalls.com](https://crm.yagacalls.com) (Vite SPA static root)
- 🤖 **Telegram Bot**: `@yagacontentbot` (Token configured in VPS environment variable `TELEGRAM_BOT_TOKEN`)
- 🤖 **Affiliate Bot**: `@yaga_partner_program_bot` (Token configured in VPS environment variable `TELEGRAM_AFFILIATE_BOT_TOKEN`)
- 🎛️ **VPS Dashboard**: [https://yagacalls.com:9090](https://yagacalls.com:9090) (Red Hat Cockpit Console)

---

## 2. 📁 Server Directory Structure Map

```text
/var/www/
├── yagacalls/                      # System 1: Next.js Main Website (https://yagacalls.com)
│   ├── .next/standalone/           # Node server standalone build (Port 3000)
│   └── public/                     # Static assets
│
└── yagacontentsystem/              # System 2: Content Operations System & Bot
    ├── crm-app/                    # React Vite Operations CRM
    │   ├── dist/                   # Built production bundle (Served by Nginx)
    │   └── .env                    # Supabase API keys (VITE_SUPABASE_URL & ANON_KEY)
    │
    └── bot_engine.js               # Telegram Bot Engine (PM2 Port 3001)
```

---

## 3. ⚙️ PM2 Process Commands

```bash
# Check status of running node applications
pm2 status

# Restart processes
pm2 restart yagacalls-web    # Main website
pm2 restart yaga-bot         # Telegram bot

# Tailing real-time logs
pm2 logs yagacalls-web --lines 50
pm2 logs yaga-bot --lines 50

# Save current PM2 state for automatic systemd reboot recovery
pm2 save
```

---

## 4. 🔒 Nginx Web Server & SSL Configuration

- **Nginx Configuration Path**: `/etc/nginx/conf.d/yagacalls.conf`
- **SSL Certificates Location**: `/etc/letsencrypt/live/yagacalls.com/`

```bash
# Verify Nginx configuration syntax
nginx -t

# Reload Nginx server without downtime
systemctl reload nginx

# Certbot multi-domain SSL renewal
certbot renew
```

---

## 5. 🗄️ Database & Environment Variables

- **Database Engine**: Supabase Cloud (`https://ghwvwtwktnveqdqivxmy.supabase.co`)
- **Supabase Anon Key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdod3Z3dHdrdG52ZXFkcWl2eG15Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODUzNTY0NjIsImV4cCI6MjEwMDkzMjQ2Mn0.bka5GMEdehBvPgQ_AVJ6xZfEt9k17U0hVUYLMKeFKB4`
- **Domain Registrar**: Hostinger (`hpanel.hostinger.com`)
- **DNS Records**:
  - `A @` -> `167.86.76.229`
  - `CNAME www` -> `yagacalls.com`
  - `A crm` -> `167.86.76.229`

---

## 🛠️ Rapid SSH Deployment Helper Pattern

To run automated commands on the VPS without manual password prompts, use Node.js scripts in `scratch/` using the `ssh2` npm module:

```javascript
const { Client } = require('ssh2');
const conn = new Client();

conn.on('ready', () => {
  conn.exec('pm2 status && systemctl status nginx', (err, stream) => {
    stream.on('data', data => process.stdout.write(data));
  });
}).connect({
  host: '167.86.76.229',
  port: 22,
  username: 'root',
  password: 'Rizwan@34'
});
```
