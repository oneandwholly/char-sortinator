const express = require('express');
const multer = require('multer');

const app = express();
const upload = multer();

app.use(express.static('public'));

app.post('/save', upload.fields([]), (req, res) => {
    // sort input string
    let sortedStr = req.body.unsorted.split('').sort().join('');

    // send back the sorted string
    res.json(sortedStr);
})


app.listen(4000, function() {
    console.log('listening on port 4000');
});