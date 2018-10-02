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

// const mysql = require('mysql');

// const con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "itistemp...",
//   database : 'headless'
// });
// // con.end();
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   // let sql = "CREATE TABLE package_features (id int NOT NULL AUTO_INCREMENT PRIMARY KEY, url_hash VARCHAR(32) NOT NULL UNIQUE, url_origin_hash VARCHAR(32), url_base64 VARCHAR(1500), page_title VARCHAR(500) DEFAULT NULL, isHtml TINYINT, isZip TINYINT)";
//   // con.query(sql, function (err, result) {
//   //   if (err) throw err; 
//   //   console.log("Table created");
//   // });
// });

// let counter = 1;

// while (counter < 11) {
//   getURL();
//   // console.log(counter);
//   counter++;
// }


getURL();
// urlHandler('http://www.folkd.com/page/submit.html', 'Mozilla/5.0 (Windows NT 8.0; WOW64; rv:50.1) Gecko/20100101 Firefox/50.1');

// urlHandler('http://clymer.altervista.org/favicon.ico', 'Mozilla/5.0 (Windows NT 8.0; WOW64; rv:50.1) Gecko/20100101 Firefox/50.1');


// urlHandler('https://www.npmjs.com/package/async-polling', 'Mozilla/5.0 (Windows NT 8.0; WOW64; rv:50.1) Gecko/20100101 Firefox/50.1');

// http://redfasiklokass.tk/?number=888-664-2417



// https://extravisits.com/favicon-96x96.png





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