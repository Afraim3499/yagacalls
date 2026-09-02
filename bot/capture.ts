import puppeteer from 'puppeteer';

export async function captureSignalChart(params: {
    symbol: string;
    dir: string;
    e: number;
    sl: number;
    tp1: number;
    tp2: number;
    tp3: number;
    lev: string;
}): Promise<Buffer> {
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
    });

    try {
        const page = await browser.newPage();
        
        // High-res viewport for sharp screenshot
        await page.setViewport({ width: 1400, height: 900, deviceScaleFactor: 2 });

        const url = new URL('http://localhost:3000/preview/signal-card');
        url.searchParams.set('symbol', params.symbol);
        url.searchParams.set('dir', params.dir);
        url.searchParams.set('e', params.e.toString());
        url.searchParams.set('sl', params.sl.toString());
        url.searchParams.set('tp1', params.tp1.toString());
        url.searchParams.set('tp2', params.tp2.toString());
        url.searchParams.set('tp3', params.tp3.toString());
        url.searchParams.set('lev', params.lev);
        url.searchParams.set('hideButtons', 'true'); // Custom param to hide the UI controls

        console.log("Navigating to:", url.toString());
        await page.goto(url.toString(), { waitUntil: 'networkidle0' });

        // Wait an additional 2.5 seconds to guarantee the Binance API has returned and Lightweight Charts has rendered
        await new Promise(r => setTimeout(r, 2500));

        // Select the specific card container to capture
        // We will add an id "signal-capture-card" to it in page.tsx
        const element = await page.$('#signal-capture-card');
        if (!element) {
            throw new Error("Could not find #signal-capture-card element on the page");
        }

        const screenshotBuffer = await element.screenshot({ type: 'png' });
        return Buffer.from(screenshotBuffer);
    } finally {
        await browser.close();
    }
}
