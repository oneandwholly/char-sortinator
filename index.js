const express = require('express');
const multer = require('multer');

const app = express();
const upload = multer();

const sortStrDesc = require('./sort');

app.use(express.static('public'));

app.post('/save', upload.fields([]), (req, res) => {
    // sort input string
    let sortedStr = sortStrDesc(req.body.unsorted);

    // send back the sorted string
    res.json(sortedStr);
})


app.listen(4000, function() {
    console.log('listening on port 4000');
});