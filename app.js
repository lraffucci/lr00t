

'use strict';


const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'frontend', 'build')));
console.log(path.join(__dirname, 'frontend', 'build'));
/* app.get('/', (req, res) => {
  res.json({ message: "take2" });
});
 */

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});


module.exports = app;
