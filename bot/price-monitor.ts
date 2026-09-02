import { createClient } from '@supabase/supabase-js';
import TelegramBot from 'node-telegram-bot-api';
import WebSocket from 'ws';
import dotenv from 'dotenv';

dotenv.config();
dotenv.config({ path: '.env.local' });

// Environment Variables
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://ghwvwtwktnveqdqivxmy.supabase.co';
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdod3Z3dHdrdG52ZXFkcWl2eG15Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODUzNTY0NjIsImV4cCI6MjEwMDkzMjQ2Mn0.bka5GMEdehBvPgQ_AVJ6xZfEt9k17U0hVUYLMKeFKB4';
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '';
const ADMIN_CHAT_IDS = process.env.TELEGRAM_ADMIN_CHAT_ID ? process.env.TELEGRAM_ADMIN_CHAT_ID.split(',').map(id => id.trim()) : []; 
const PUBLIC_CHAT_ID = process.env.TELEGRAM_PUBLIC_CHAT_ID || '';

if (!TELEGRAM_BOT_TOKEN) {
    console.error("Missing TELEGRAM_BOT_TOKEN in environment. Bot cannot start.");
    process.exit(1);
}

// Initialize Clients
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
// @ts-ignore
const bot = new TelegramBot(TELEGRAM_BOT_TOKEN, { polling: true });

// State
let activeSignals: any[] = [];
let wsConnections: { [pair: string]: WebSocket } = {};

// Load active signals from DB
async function loadActiveSignals() {
    try {
        const { data, error } = await supabase
            .from('crypto_signals')
            .select('*')
            .in('status', ['ACTIVE', 'HIT_TP1', 'HIT_TP2']);

        if (error) throw error;
        activeSignals = data || [];
        console.log(`Loaded ${activeSignals.length} active signals from DB.`);
        setupWebSockets();
    } catch (err) {
        console.error("Error loading signals:", err);
    }
}

// Connect to Binance for required pairs
function setupWebSockets() {
    const pairsToTrack = new Set(activeSignals.map(s => s.pair.toLowerCase()));

    // Close sockets for pairs we no longer need
    for (const pair of Object.keys(wsConnections)) {
        if (!pairsToTrack.has(pair)) {
            console.log(`Closing WS for ${pair}`);
            wsConnections[pair].close();
            delete wsConnections[pair];
        }
    }

    // Open sockets for new pairs
    for (const pair of pairsToTrack) {
        if (!wsConnections[pair]) {
            console.log(`Opening WS for ${pair}`);
            const ws = new WebSocket(`wss://stream.binance.com:9443/ws/${pair}@trade`);
            
            ws.on('message', (data: string) => {
                const msg = JSON.parse(data);
                const price = parseFloat(msg.p);
                if (price) {
                    processPriceTick(pair.toUpperCase(), price);
                }
            });

            ws.on('error', console.error);
            ws.on('close', () => {
                delete wsConnections[pair];
                setTimeout(setupWebSockets, 5000); // Reconnect logic
            });

            wsConnections[pair] = ws;
        }
    }
}

// Check live price against signal targets
async function processPriceTick(pair: string, currentPrice: number) {
    const signalsForPair = activeSignals.filter(s => s.pair === pair);

    for (const signal of signalsForPair) {
        const isLong = signal.direction === 'LONG';
        let newStatus = null;
        let eventMsg = "";

        // Check SL
        if (isLong ? currentPrice <= signal.stop_loss : currentPrice >= signal.stop_loss) {
            newStatus = 'HIT_SL';
            eventMsg = `🚨 <b>STOP LOSS HIT</b> 🚨\n\nPair: #${signal.symbol}\nDirection: ${signal.direction}\nHit Price: ${currentPrice}`;
        }
        // Check TPs
        else if (isLong ? currentPrice >= signal.tp3 : currentPrice <= signal.tp3) {
            if (signal.status !== 'HIT_TP3') {
                newStatus = 'HIT_TP3';
                eventMsg = `✅✅✅ <b>TP3 HIT (ALL TARGETS MET)</b>\n\nPair: #${signal.symbol}\nDirection: ${signal.direction}\nHit Price: ${currentPrice}`;
            }
        }
        else if (isLong ? currentPrice >= signal.tp2 : currentPrice <= signal.tp2) {
            if (signal.status !== 'HIT_TP2' && signal.status !== 'HIT_TP3') {
                newStatus = 'HIT_TP2';
                eventMsg = `✅✅ <b>TP2 HIT</b>\n\nPair: #${signal.symbol}\nDirection: ${signal.direction}\nHit Price: ${currentPrice}`;
            }
        }
        else if (isLong ? currentPrice >= signal.tp1 : currentPrice <= signal.tp1) {
            if (signal.status === 'ACTIVE') {
                newStatus = 'HIT_TP1';
                eventMsg = `✅ <b>TP1 HIT</b>\n\nPair: #${signal.symbol}\nDirection: ${signal.direction}\nHit Price: ${currentPrice}`;
            }
        }

        if (newStatus) {
            console.log(`Signal ${signal.id} hit ${newStatus} at price ${currentPrice}`);
            // Optimistic local update
            signal.status = newStatus;
            
            // Database update
            await supabase.from('crypto_signals').update({ status: newStatus }).eq('id', signal.id);

            // Send to Admin for approval
            sendAdminApproval(signal.id, eventMsg);
        }
    }
}

function sendAdminApproval(signalId: string, eventMsg: string) {
    if (ADMIN_CHAT_IDS.length === 0) return;

    const opts = {
        parse_mode: 'HTML' as const,
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "✅ Approve & Forward", callback_data: `approve_${signalId}` },
                    { text: "❌ Reject", callback_data: `reject_${signalId}` }
                ]
            ]
        }
    };
    
    for (const chatId of ADMIN_CHAT_IDS) {
        bot.sendMessage(chatId, eventMsg + "\n\n<i>Admin: Do you want to forward this alert to the public group?</i>", opts).catch(console.error);
    }
}

// Handle Admin Callback Queries
bot.on('callback_query', (query: TelegramBot.CallbackQuery) => {
    const data = query.data;
    const msg = query.message;
    if (!data || !msg) return;

    if (data.startsWith('approve_')) {
        const signalId = data.replace('approve_', '');
        
        // Remove the inline keyboard to prevent double clicking
        bot.editMessageReplyMarkup({ inline_keyboard: [] }, { chat_id: msg.chat.id, message_id: msg.message_id });
        bot.sendMessage(msg.chat.id, "✅ Alert forwarded to public group.");

        // Clean up the text for public broadcast (remove admin footer)
        const cleanText = ('text' in msg && msg.text) ? msg.text.replace("Admin: Do you want to forward this alert to the public group?", "") : "";

        if (PUBLIC_CHAT_ID) {
            bot.sendMessage(PUBLIC_CHAT_ID, cleanText).catch(console.error);
        }
    } else if (data.startsWith('post_signal_')) {
        // This is a new signal with an image being posted to the public group
        bot.editMessageReplyMarkup({ inline_keyboard: [] }, { chat_id: msg.chat.id, message_id: msg.message_id });
        bot.sendMessage(msg.chat.id, "✅ Signal Posted to Public Group.");

        if (PUBLIC_CHAT_ID) {
            // copyMessage copies the photo, caption, and everything to the new chat
            // We just override the caption to remove the admin text
            const msgObj = msg as TelegramBot.Message;
            const cleanText = (msgObj.text) 
                ? msgObj.text.replace("Admin: Do you want to post this new signal to the public group?", "") 
                : (msgObj.caption ? msgObj.caption.replace("Admin: Do you want to post this new signal to the public group?", "") : "");

            bot.copyMessage(PUBLIC_CHAT_ID, msg.chat.id, msg.message_id, {
                caption: cleanText,
                parse_mode: 'HTML'
            }).catch(console.error);
        }
    } else if (data.startsWith('setdir_')) {
        const dir = data.replace('setdir_', '');
        const chatId = msg.chat.id.toString();
        
        bot.editMessageReplyMarkup({ inline_keyboard: [] }, { chat_id: msg.chat.id, message_id: msg.message_id });
        
        const state = userStates[chatId];
        if (state && state.step === 'dir') {
            state.data.dir = dir;
            state.step = 'entry';
            bot.sendMessage(chatId, `Direction set to ${dir}.\n\nWhat is the Entry Price?`);
        }
    } else if (data.startsWith('reject_')) {
        bot.editMessageReplyMarkup({ inline_keyboard: [] }, { chat_id: msg.chat.id, message_id: msg.message_id });
        bot.sendMessage(msg.chat.id, "❌ Alert discarded.");
    }
});

// Periodic Sync
setInterval(loadActiveSignals, 60 * 1000); // Reload every 1 minute
console.log("Starting YagaCalls Price Monitor Bot...");
loadActiveSignals();

// ==========================================
// HEADLESS SIGNAL CAPTURE LOGIC
// ==========================================
import { captureSignalChart } from './capture';

interface SignalCreationSession {
    step: 'symbol' | 'dir' | 'entry' | 'sl' | 'tp1' | 'tp2' | 'tp3' | 'lev';
    data: any;
}

const userStates: Record<string, SignalCreationSession> = {};

bot.onText(/^\/signal$/, async (msg: TelegramBot.Message) => {
    const chatId = msg.chat.id.toString();
    if (!ADMIN_CHAT_IDS.includes(chatId)) {
        bot.sendMessage(chatId, "❌ Unauthorized.");
        return;
    }

    userStates[chatId] = { step: 'symbol', data: {} };
    bot.sendMessage(chatId, "🚀 Let's create a new signal!\n\nWhat is the Coin Pair? (e.g. BTCUSDT)");
});

bot.on('message', async (msg: TelegramBot.Message) => {
    const chatId = msg.chat.id.toString();
    if (!userStates[chatId]) return; // Not in a session
    if (msg.text?.startsWith('/')) return; // Ignore commands

    const state = userStates[chatId];
    const text = msg.text?.trim().toUpperCase();
    if (!text) return;

    if (text === 'CANCEL') {
        delete userStates[chatId];
        bot.sendMessage(chatId, "❌ Signal creation cancelled.");
        return;
    }

    switch (state.step) {
        case 'symbol':
            state.data.pair = text;
            state.data.symbol = text.replace('USDT', '');
            state.step = 'dir';
            bot.sendMessage(chatId, `Pair set to ${text}.\n\nWhat is the Direction?`, {
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: "🟢 LONG", callback_data: `setdir_LONG` },
                            { text: "🔴 SHORT", callback_data: `setdir_SHORT` }
                        ]
                    ]
                }
            });
            break;
        case 'entry':
            if (isNaN(Number(text))) return void bot.sendMessage(chatId, "⚠️ Please enter a valid number for Entry.");
            state.data.e = parseFloat(text);
            state.step = 'sl';
            bot.sendMessage(chatId, `Entry: ${state.data.e}\n\nWhat is the Stop Loss?`);
            break;
        case 'sl':
            if (isNaN(Number(text))) return void bot.sendMessage(chatId, "⚠️ Please enter a valid number for Stop Loss.");
            state.data.sl = parseFloat(text);
            state.step = 'tp1';
            bot.sendMessage(chatId, `Stop Loss: ${state.data.sl}\n\nWhat is Take Profit 1?`);
            break;
        case 'tp1':
            if (isNaN(Number(text))) return void bot.sendMessage(chatId, "⚠️ Please enter a valid number for TP1.");
            state.data.tp1 = parseFloat(text);
            state.step = 'tp2';
            bot.sendMessage(chatId, `TP1: ${state.data.tp1}\n\nWhat is Take Profit 2?`);
            break;
        case 'tp2':
            if (isNaN(Number(text))) return void bot.sendMessage(chatId, "⚠️ Please enter a valid number for TP2.");
            state.data.tp2 = parseFloat(text);
            state.step = 'tp3';
            bot.sendMessage(chatId, `TP2: ${state.data.tp2}\n\nWhat is Take Profit 3?`);
            break;
        case 'tp3':
            if (isNaN(Number(text))) return void bot.sendMessage(chatId, "⚠️ Please enter a valid number for TP3.");
            state.data.tp3 = parseFloat(text);
            state.step = 'lev';
            bot.sendMessage(chatId, `TP3: ${state.data.tp3}\n\nWhat is the Leverage? (e.g. 10x)`);
            break;
        case 'lev':
            state.data.lev = text;
            const finalData = state.data;
            delete userStates[chatId]; // End session
            
            await generateSignalFromData(chatId, finalData);
            break;
    }
});

// We must also handle the 'dir' callback in the general callback query handler
// I will patch that inside bot.on('callback_query') in another edit.

async function generateSignalFromData(chatId: string, d: any) {
    const processingMsg = await bot.sendMessage(chatId, "⚙️ Generating HQ signal chart...");

    try {
        const imageBuffer = await captureSignalChart({ symbol: d.symbol, dir: d.dir, e: d.e, sl: d.sl, tp1: d.tp1, tp2: d.tp2, tp3: d.tp3, lev: d.lev });
        
        const { data, error } = await supabase.from('crypto_signals').insert({
            symbol: d.symbol, pair: d.pair, direction: d.dir, leverage: d.lev, timeframe: '15m',
            entry_price: d.e, stop_loss: d.sl, tp1: d.tp1, tp2: d.tp2, tp3: d.tp3, status: 'ACTIVE'
        }).select();
        
        if (error) throw error;
        const signalId = data[0].id;
        
        const risk = Math.abs(d.e - d.sl);
        const rr1 = (Math.abs(d.tp1 - d.e) / risk).toFixed(2);
        const rr2 = (Math.abs(d.tp2 - d.e) / risk).toFixed(2);
        const rr3 = (Math.abs(d.tp3 - d.e) / risk).toFixed(2);

        const stopPct = ((Math.abs(d.e - d.sl) / d.e) * 100).toFixed(2);
        const tp1Pct = ((Math.abs(d.tp1 - d.e) / d.e) * 100).toFixed(2);
        const tp2Pct = ((Math.abs(d.tp2 - d.e) / d.e) * 100).toFixed(2);
        const tp3Pct = ((Math.abs(d.tp3 - d.e) / d.e) * 100).toFixed(2);
        const tpSign = d.dir === "LONG" ? "+" : "-";
        const stopSign = d.dir === "LONG" ? "-" : "+";

        const txt = `YAGACALLS SIGNAL\\nBEING ROYAL\\n\\n$${d.symbol} · ${d.pair} · ${d.dir} · ${d.lev} · 15m\\n\\nEntry   ${d.e}\\nStop    ${d.sl}   (${stopSign}${stopPct}%)\\nTP1     ${d.tp1}   (${tpSign}${tp1Pct}%)\\nTP2     ${d.tp2}   (${tpSign}${tp2Pct}%)\\nTP3     ${d.tp3}   (${tpSign}${tp3Pct}%)\\n\\nR:R to TP1   1 : ${rr1}\\nR:R to TP2   1 : ${rr2}\\nR:R to TP3   1 : ${rr3}\\n\\nNot financial advice. DYOR.`;
        
        const opts = {
            caption: txt + "\\n\\n<i>Admin: Do you want to post this new signal to the public group?</i>",
            parse_mode: 'HTML' as const,
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "🚀 Approve & Post Signal", callback_data: `post_signal_${signalId}` },
                        { text: "❌ Discard", callback_data: `reject_${signalId}` }
                    ]
                ]
            }
        };

        for (const adminId of ADMIN_CHAT_IDS) {
            await bot.sendPhoto(adminId, imageBuffer, opts);
        }

        bot.deleteMessage(chatId, processingMsg.message_id);
        loadActiveSignals();

    } catch (err: any) {
        console.error(err);
        bot.editMessageText(`❌ Failed to generate signal: ${err.message}`, { chat_id: chatId, message_id: processingMsg.message_id });
    }
}
