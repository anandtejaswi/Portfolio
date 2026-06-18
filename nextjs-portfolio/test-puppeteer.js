const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  
  const items = await page.$$eval('.react-grid-item', elements => 
      elements.map(el => ({
          className: el.className,
          style: el.getAttribute('style')
      }))
  );
  console.log(JSON.stringify(items, null, 2));
  
  await browser.close();
})();
