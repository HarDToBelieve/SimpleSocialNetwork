var express = require('express');
const fs = require('fs');

const app = express();
app.use(express.static('static'));

//Route
app.use(require('./local-api/index'));

const server = app.listen(3000, function () {
    console.log('Server listening at http://' + server.address().address + ':' + server.address().port);
});
