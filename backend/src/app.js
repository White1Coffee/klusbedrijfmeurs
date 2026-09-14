require('dotenv').config();

const express = require('express');
const cors = require('cors');
require('./config/db');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Klusbedrijf API Online');
});

app.listen(port, () => {
  console.log(`Server draait op poort ${port}`);
});

module.exports = app;
