const puppeteer = require("puppeteer");
const fs = require('fs');
const args = require('yargs').argv;
const mkdirp = require('mkdirp');
const URLParser = require('url-parse');
const { SHA256 } = require('crypto-js');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('events').EventEmitter.prototype._maxListeners = 0;

let { urlPackage } = require('./models/urlPackage');
let { parsePage } = require('./utils/utils');

// process.setMaxListeners(Infinity);

let app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/url', async (req, res) => {
    let url = req.body.url
    console.log(url);
    result = await urlHandler(url);
    console.log('RESULT is: ', result);
    if (result === 0) {
        res.sendStatus(200);
    } else {
        res.sendStatus(404);
    }
})

const dburl = `mongodb://localhost:27017/ChromeHeadless`;

mongoose.connect(dburl, { useNewUrlParser: true }, (err, db) => {
    if (err) throw err;

    console.log('DB connection established');
});

// let url = args.url;
// urlHandler(url);

async function urlHandler(url) {
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
        // else console.log(`URL director created at: ${urlPath}`);
    });
    mkdirp(`${originPath}`, function (err) {
        if (err) console.error(err)
        // else console.log(`Domain director created at: ${originPath}`)
    });

    let STATUS_U = 0;
    let STATUS_D = 0;
    STATUS_U = await parsePage(urlPath, faviconPath, url_hash, url, origin, STATUS_U)
    STATUS_D = await parsePage(originPath, faviconPath, url_hash, origin, origin, STATUS_D);
    console.log(`Browser Closed Successfully. Domain Status: ${STATUS_D} URL Status: ${STATUS_U}`);
    if (STATUS_D === 1 && STATUS_U === 1) {
        return new Promise((resolve, reject) => {
            resolve(1);
        });
    } else {
        return new Promise((resolve, reject) => {
            resolve(0);
        });
    }
    // return (STATUS_U);

    // setTimeout(() => {
    //     response = await parsePage(originPath, faviconPath, url_hash, origin, origin);
    //     return response;
    // }, 5000);
}



app.listen(port, () => {
    console.log(`Started up server on ${port}`)
});