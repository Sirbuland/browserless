const Poller = require('./Poller');

// Set 1s timeout between polls
// note: this is previous request + processing time + timeout
let poller = new Poller(1000); 

// Wait till the timeout sent our event to the EventEmitter
poller.onPoll(() => {
    console.log('triggered');
    poller.poll(); // Go for the next poll
});

// Initial start
poller.poll();
poller.poll();
poller.poll();
poller.poll();
poller.poll();
poller.poll();
poller.poll();