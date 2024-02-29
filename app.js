'use strict';

const express = require('express');
const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');

const app = express();

// Middleware to redirect HTTP to HTTPS
app.use((req, res, next) => {
  if (!req.secure) {
    return res.redirect(['https://', req.headers.host, req.url].join(''));
  }
  next();
});

app.use(express.static(path.join(__dirname, 'frontend', 'build')));

const PORT = process.env.PORT || 8080;
const HTTPSPORT = 4343;

// Assume the SSL/TLS certificate and key are in the root directory,
// adjust the paths if they are located elsewhere
//cody access code sgp_31f904c5156d80d9180ca92ad3611e602b38172c
const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

http.createServer(app).listen(PORT, () => {
  console.log(`HTTP server listening on port ${PORT}`);
});

https.createServer(options, app).listen(HTTPSPORT, () => {
  console.log(`HTTPS server secure listening on port ${HTTPSPORT}`);
});
