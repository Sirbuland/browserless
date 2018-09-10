const puppeteer = require("puppeteer");
const fs = require('fs');

async function parsePage(path, url_hash, url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3508.0 Safari/537.36')
    await page
        .goto(url, {
            waitUntil: "load",
            args: ["--disable-client-side-phishing-detection", "--safebrowsing-disable-download-protection", "--safebrowsing-manual-download-blacklist"]
        })
        .catch(e => (error = e));
    await page.screenshot({ path: `${path}/screenshot.png`, fullPage: true });
    let html = await page.content();
    fs.writeFile(path + `\\${url_hash}.html`, html, function (err) {
        if (err) throw err;
        console.log("success");
    });

    await browser.close();
};

module.exports = parsePage;