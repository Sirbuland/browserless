// const mysql = require('mysql');

// const con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "top4glory",
//   database : 'headless1'
// });
// // con.end();
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// //  let sql = "CREATE TABLE package_features (id int NOT NULL AUTO_INCREMENT PRIMARY KEY, url_hash VARCHAR(32) NOT NULL, url_origin_hash VARCHAR(32), url_base64 VARCHAR(1500), page_title VARCHAR(1500) DEFAULT NULL, isHtml TINYINT, isZip TINYINT)";
//   // let sql = "CREATE TABLE favicon (id int NOT NULL AUTO_INCREMENT PRIMARY KEY, url_hash VARCHAR(32) NOT NULL, favicon_hash VARCHAR(32))";
//   // let sql = ""
//   con.query(sql, function (err, result) {
//     if (err) throw err; 
//     console.log("Table created");
//   });
// });


// // ALTER TABLE package_features ADD COLUMN total_favicons tinyint AFTER page_title;

// // ALTER TABLE package_features ADD COLUMN title_match tinyint AFTER page_title;

const md5File = require('md5-file')
let path = '/home/dev/nodesource_setup.sh'

md5File(path, (err, hash) => {
  if (err) throw err
 
  console.log(`The MD5 sum of LICENSE.md is: ${hash}`)
})

// md5File(path).then(hash => {
//   console.log(`The MD5 sum of nodesource_setup.sh is: ${hash}`)
// })