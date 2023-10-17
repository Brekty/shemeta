const express = require('express');
const app = express();
const cors = require('cors');

const PORT = 5000;

app.use(cors())

app.use(express.json())

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

module.exports = app;

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
