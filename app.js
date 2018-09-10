const puppeteer = require("puppeteer");
const args = require('yargs').argv;
const { SHA256 } = require('crypto-js');
const mkdirp = require('mkdirp');
const fs = require('fs');

let url = args.url;
let url_hash = SHA256(url).toString();
console.log(url);
console.log(url_hash);

let parent_dir = `UrlScanData/${url_hash}`;

mkdirp(`${parent_dir}`, function (err) {
    if (err) console.error(err)
    else console.log('pow!')
});

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3508.0 Safari/537.36')
    await page
        .goto(url, {
            waitUntil: "load",
            args: ["--disable-client-side-phishing-detection", "--safebrowsing-disable-download-protection", "--safebrowsing-manual-download-blacklist"]
        })
        .catch(e => (error = e));
    await page.screenshot({ path: `${parent_dir}/screenshot.png`, fullPage: true });
    let html = await page.content();
    fs.writeFile(parent_dir + `\\${url_hash}.html`, html, function (err) {
        if (err) throw err;
        console.log("success");
    });

    await browser.close();
})();