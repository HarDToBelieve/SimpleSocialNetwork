var express = require('express');
const fs = require('fs');
const jsonfile = require('jsonfile');
const axios = require('axios');
const mkdirp = require('mkdirp');

const app = express();
app.use(express.static('static'));

//Route
app.use(require('./local-api/index'));

const server = app.listen(8080, function () {
    console.log('Server listening at http://' + server.address().address + ':' + server.address().port);
});
