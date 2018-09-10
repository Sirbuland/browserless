const puppeteer = require("puppeteer");
const args = require('yargs').argv;

url = args.url;

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page
        .goto(url, {
            waitUntil: "load"
        })
        .catch(e => (error = e));
    await page.screenshot({ path: "screenshot.png", fullPage: true });
    await browser.close();
})();