const puppeteer = require("puppeteer");
const fs = require('fs');


(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    var viewSource = await page.goto('http://bolawow.com/wp-content/uploads/2018/02/fcsm-bilbao-1.jpg');
    fs.writeFile("./anu.jpg", await viewSource.buffer(), function (err) {
        if (err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    });

    await browser.close();

})();