const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const { encrypt, decrypt } = require('./crypto');

const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/encrypt', (req, res) => {
  const { text } = req.body;
  res.json({ encrypted: encrypt(text) });
});

app.post('/decrypt', (req, res) => {
  const { text } = req.body;
  try {
    res.json({ decrypted: decrypt(text) });
  } catch (err) {
    res.status(400).json({ error: 'Invalid ciphertext' });
  }
});

app.listen(3000, () => console.log('Server running at http://localhost:3000'));
