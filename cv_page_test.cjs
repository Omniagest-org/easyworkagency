const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 1000 } });
  page.on('console', msg => { if (msg.type() === 'error') console.log('CONSOLE ERROR:', msg.text()); });

  await page.goto('http://localhost:4321/crea-il-tuo-cv', { waitUntil: 'networkidle' });
  await page.waitForSelector('h1.hero__title');
  await page.screenshot({ path: '/tmp/cv-page-top.png', fullPage: false });

  await page.fill('input[formcontrolname="nome"]', 'Mario');
  await page.fill('input[formcontrolname="cognome"]', 'Rossi');
  await page.fill('input[formcontrolname="email"]', 'mario.rossi@example.com');
  await page.check('input[formcontrolname="privacy"]');

  await page.screenshot({ path: '/tmp/cv-page-filled.png', fullPage: true });

  // Intercept the http post so we don't need a real backend
  await page.route('**/*', route => {
    const req = route.request();
    if (req.method() === 'POST') {
      route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ success: true }) });
    } else {
      route.continue();
    }
  });

  await page.click('button[type="submit"]');
  await page.waitForSelector('.toast-message, .toast-success', { timeout: 10000 }).catch(() => {});
  await page.waitForTimeout(1000);
  await page.screenshot({ path: '/tmp/cv-page-toast.png', fullPage: false });

  await browser.close();
  console.log('done');
})();
