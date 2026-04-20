const https = require('https');

const data = 'name=Test&email=test@test.com&message=Test';

const options = {
  hostname: 'formsubmit.co',
  port: 443,
  path: '/gsfhhaiti26@gmail.com',
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': data.length
  }
};

const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`);
  
  res.on('data', d => {
    process.stdout.write(d);
  });
});

req.on('error', error => {
  console.error(error);
});

req.write(data);
req.end();
