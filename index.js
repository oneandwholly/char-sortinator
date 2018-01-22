const express = require('express');
const bodyParser = require('body-parser');
const app = express();

let records = [];

app.post('/submit', (req, res) => {
    res.send('hello')
})

app.use(express.static('public'));
app.use(bodyParser.json());

app.listen(4000, function() {
    console.log('listening on port 4000');
});