import puppeteer from 'puppeteer';

let browser;
let page;
describe('e2e', () => {
  beforeEach(async () => {
    browser = await puppeteer.launch({ headless: false });
    page = await browser.newPage();
  });

  it('loads the page', async () => {
    await page.goto('http://localhost:3000');
  });

  afterEach(async () => {
    await browser.close();
    browser = undefined;
  });
});
