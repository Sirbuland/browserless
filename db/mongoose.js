const mongoose = require('mongoose');
console.log('DB connection established');
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/ChromeHeadless', { useNewUrlParser: true }, (err, db) => {
    if (err) throw err;

    console.log('DB connection established');
});

module.exports = { mongoose };