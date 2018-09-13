const puppeteer = require("puppeteer");
const fs = require('fs');
const args = require('yargs').argv;
const mkdirp = require('mkdirp');
const URLParser = require('url-parse');
const { SHA256 } = require('crypto-js');

let { urlPackage } = require('./models/urlPackage');
let { parsePage } = require('./utils/utils');

console.log(typeof parsePage);

let url = args.url;
let origin = '';
if (!url.match(/http|https/)) {
    origin = new URLParser('http://' + url).origin;
    console.log(origin);
} else {
    origin = new URLParser(url).origin;
}

let url_hash = SHA256(url).toString();
let protocol = new URLParser(url).protocol;

// console.log(origin);
// console.log(url_hash);

let urlPath = `UrlScanData/${url_hash}/url`;
let originPath = `UrlScanData/${url_hash}/domain`;
let faviconPath = `UrlScanData/${url_hash}/icons`;

mkdirp(`${urlPath}`, function (err) {
    if (err) console.error(err)
    else console.log('pow!')
});
mkdirp(`${originPath}`, function (err) {
    if (err) console.error(err)
    else console.log('pow!')
});

parsePage(urlPath, faviconPath, url_hash, url, origin)
// parsePage(originPath, url_hash, origin);

setTimeout(() => {
    parsePage(originPath, faviconPath, url_hash, origin, origin);
}, 5000);
