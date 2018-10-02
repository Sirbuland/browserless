let AsyncPolling = require('async-polling');

var polling = AsyncPolling(function (end) {
    console.log('triggered');
    getURL();
}, 8000);
 
polling.on('error', function (error) {
    // The polling encountered an error, handle it here.
});
polling.on('result', function (result) {
    // The polling yielded some result, process it here.
    polling.run();
});
 
polling.run();
polling.run();
polling.run();
polling.run();
polling.run();
polling.run();