var request = require("request").defaults({strictSSL: false});

var options = { method: 'POST',
  url: 'https://10.0.8.79/worker/uploadstatus/',
  headers: 
   { 'Postman-Token': '149f5c5d-a789-4563-89f5-bcabc2dc55e5',
     'Cache-Control': 'no-cache',
     'Content-Type': 'application/json',
     'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' },
  formData: 
   { url_hash: '29fa82985f81531fee68db2713d4f067',
     user_agent_hash: '763627b4d72887b52204dba7f0d159d4',
     status: '-10',
     user_agent: 'Mozilla/5.0 (Windows NT 8.0; WOW64; rv:50.1) Gecko/20100101 Firefox/50.1',
     uname: 'snx',
     password: 'top4glory' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
