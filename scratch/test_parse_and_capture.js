const puppeteer = require('puppeteer');

function extractNumbers(str) {
    if (!str) return [];
    const matches = str.match(/\d+(\.\d+)?/g);
    return matches ? matches.map(Number) : [];
}

function parseSignalForChart(parsed) {
    const symbol = (parsed.symbol || 'CRYPTO').replace('$', '').toUpperCase();
    const entryNums = extractNumbers(parsed.entry);
    const tpNums = extractNumbers(parsed.tp);
    const slNums = extractNumbers(parsed.sl);

    if (entryNums.length === 0 || tpNums.length === 0 || slNums.length === 0) {
        return null;
    }

    const e = entryNums[0];
    const sl = slNums[0];

    let tp1 = tpNums[0];
    let tp2 = tpNums.length > 1 ? tpNums[1] : (tp1 > e ? tp1 * 1.03 : tp1 * 0.97);
    let tp3 = tpNums.length > 2 ? tpNums[2] : (tp1 > e ? tp1 * 1.06 : tp1 * 0.94);

    // Rounding nicely
    const precision = e.toString().includes('.') ? e.toString().split('.')[1].length : 2;
    tp1 = Number(tp1.toFixed(precision));
    tp2 = Number(tp2.toFixed(precision));
    tp3 = Number(tp3.toFixed(precision));

    const dir = tp1 >= e ? 'LONG' : 'SHORT';
    const lev = parsed.leverage || '10x';

    return { symbol, dir, e, sl, tp1, tp2, tp3, lev };
}

async function renderSignalChartBuffer(params) {
    let browser = null;
    try {
        browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        const page = await browser.newPage();
        await page.setViewport({ width: 1200, height: 800, deviceScaleFactor: 2 });

        const query = new URLSearchParams({
            symbol: params.symbol,
            pair: `${params.symbol}USDT`,
            dir: params.dir,
            e: params.e.toString(),
            sl: params.sl.toString(),
            tp1: params.tp1.toString(),
            tp2: params.tp2.toString(),
            tp3: params.tp3.toString(),
            lev: params.lev,
            hideButtons: 'true'
        });

        const targetUrl = `http://localhost:3000/preview/signal-card?${query.toString()}`;
        console.log("Navigating to:", targetUrl);
        await page.goto(targetUrl, { waitUntil: 'networkidle2', timeout: 15000 });

        const cardElement = await page.$('#signal-capture-card');
        if (!cardElement) throw new Error("Card element #signal-capture-card not found");

        const imageBuffer = await cardElement.screenshot({ type: 'png' });
        return imageBuffer;
    } catch (err) {
        console.error("Failed to render chart image:", err.message);
        return null;
    } finally {
        if (browser) await browser.close();
    }
}

// Quick Test
const sampleInput = {
    symbol: 'KGEN',
    entry: '0.24 - 0.20',
    tp: '0.35 - 0.50 - 0.70',
    sl: '0.13',
    leverage: '1x - 3x'
};

const params = parseSignalForChart(sampleInput);
console.log("Parsed params:", params);

renderSignalChartBuffer(params).then(buf => {
    if (buf) {
        console.log("✅ Successfully rendered chart PNG Buffer of size:", buf.length);
    } else {
        console.log("❌ Failed to render buffer");
    }
});
