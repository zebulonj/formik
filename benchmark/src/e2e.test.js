import puppeteer from 'puppeteer';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

let browser;
let page;
describe('e2e', () => {
  it('loads the page', async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:3000?react_perf', {
      waitFor: 'networkidle2',
    });
    await sleep(1000);
    await page.tracing.start({ path: '../trace.json' });
    await page.waitFor('input[name=email]');
    await page.type('input[name=email]', 'j');
    await page.tracing.stop();
  });

  afterEach(async () => {
    await browser.close();
    browser = undefined;
  });
});
