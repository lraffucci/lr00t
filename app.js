

'use strict';


const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({ message: "Hello from server!" });
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});


module.exports = app;
