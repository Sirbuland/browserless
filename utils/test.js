// const request = require('request');
// const fs = require('fs');


// request({
//     method: 'POST',
//     uri: 'https://10.0.8.79/worker/uploadstatus/',
//     multipart: [
//         {
//             'url_hash': '29fa82985f81531fee68db2713d4f067', 'user_agent_hash': '763627b4d72887b52204dba7f0d159d4', 'status': 1,
//             'user_agent': 'Mozilla/5.0 (Windows NT 8.0; WOW64; rv:50.1) Gecko/20100101 Firefox/50.1', 'uname': 'snx', 'password': 'top4glory'
//         },
//         { body: fs.createReadStream('/home/white/Desktop/29fa82985f81531fee68db2713d4f067.zip') }
//     ],
//     },
//     function (error, response, body) {
//     if (error) {
//         return console.error('upload failed:', error);
//     }
//     console.log('Upload successful!  Server responded with:', body);
//     })


const {PythonShell} = require('python-shell');

let options = {
    mode: 'text',
    pythonPath: '/usr/bin/python',
    pythonOptions: ['-u'], // get print results in real-time
    scriptPath: __dirname + '',
    args: ["fcd176ca461b753009cf662ef56623e9", "Mozilla/5.0 (Windows NT 8.0; WOW64; rv:50.1) Gecko/20100101 Firefox/50.1", "763627b4d72887b52204dba7f0d159d4", "/home/white/browserless/utils/UrlScanData/fcd176ca461b753009cf662ef56623e9.zip"]
};
    
PythonShell.run('upload.py', options, function (err, results) {
    if (err) throw err;
    // results is an array consisting of messages collected during execution
    console.log('results: %j', results);
});