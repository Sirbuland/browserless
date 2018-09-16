const fs = require('fs');
const request = require('request');
require('events').EventEmitter.prototype._maxListeners = 0;
fs.readFileSync('urlscan.txt').toString().split('\r\n').forEach(function (line) {
    // console.log(line);
    var options = {
        method: 'POST',
        url: 'http://localhost:3000/url',
        headers:
        {
            'Postman-Token': 'bb979fed-bba7-4e1b-918e-bbf2c48829a4',
            'Cache-Control': 'no-cache',
            'Content-Type': 'application/json'
        },
        body: { url: `${line}` },
        json: true
    };
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        setTimeout(() => {
            console.log(body);
        }, 15000)
    });
});
