import puppeteer from 'puppeteer';

export async function takeSignalScreenshot(params: Record<string, string>): Promise<Buffer> {
  const query = new URLSearchParams(params).toString();
  
  // Use localhost directly to bypass NGINX and DNS lookups for much faster headless loading
  const baseUrl = process.env.INTERNAL_SITE_URL || 'http://127.0.0.1:3000';
  const url = `${baseUrl}/preview/signal-card?${query}&hideButtons=true`;

  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
    headless: true
  });
  
  try {
    const page = await browser.newPage();
    
    // Set viewport based on layout
    if (params.layout === 'MOBILE') {
      await page.setViewport({ width: 450, height: 950, deviceScaleFactor: 2 });
    } else {
      await page.setViewport({ width: 1000, height: 950, deviceScaleFactor: 2 });
    }

    // Wait until network is fully idle (all charts and fonts loaded)
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
    
    // Wait specifically for our capture container
    await page.waitForSelector('#signal-capture-card', { timeout: 10000 });
    
    // Add a tiny bit of buffer time to ensure Lightweight Charts WebGL/Canvas layer is fully painted
    await new Promise(r => setTimeout(r, 800));

    const element = await page.$('#signal-capture-card');
    if (!element) throw new Error('Capture element not found');

    const screenshot = await element.screenshot({ type: 'png' });
    return Buffer.from(screenshot);
  } finally {
    await browser.close();
  }
}
