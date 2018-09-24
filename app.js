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

let { getURL, urlHandler } = require('./utils/utils');

let counter = 1;

while (counter < 12) {
  getURL();
  // console.log(counter);
  counter++;
}


// getURL();
// urlHandler('http://www.folkd.com/page/submit.html', 'Mozilla/5.0 (Windows NT 8.0; WOW64; rv:50.1) Gecko/20100101 Firefox/50.1');
















// let { urlPackage } = require('./models/urlPackage');


// process.setMaxListeners(Infinity);

// let app = express();

// const port = process.env.PORT || 3000;

// app.use(bodyParser.json());

// app.post('/url', async (req, res) => {
//     let url = req.body.url
//     console.log(url);
//     result = await urlHandler(url);
//     console.log('RESULT is: ', result);
//     if (result === 0) {
//         res.sendStatus(200);
//     } else {
//         res.sendStatus(404);
//     }
// })

// const dburl = `mongodb://localhost:27017/ChromeHeadless`;

// mongoose.connect(dburl, { useNewUrlParser: true }, (err, db) => {
//     if (err) throw err;

//     console.log('DB connection established');
// });

// let url = args.url;
// urlHandler(url);



// app.listen(port, () => {
//     console.log(`Started up server on ${port}`)
// });