var express = require('express');
const fs = require('fs');
const jsonfile = require('jsonfile');
const axios = require('axios');
const mkdirp = require('mkdirp');

const {
    RESOURCE_FOLDER,
    TOKEN_FILE,
    resourceURL,
    createNoneExistInfoFiles
} = require('./helper.js');

const app = express();
app.use(express.static('static'));

//Route
app.use(require('./local-api/index'));

mkdirp(RESOURCE_FOLDER, (err) => {
        if (err) console.log(resourceFolder + " is existing, no need to create it again");
});

if (fs.existsSync(TOKEN_FILE)) {
  jsonfile.readFile(TOKEN_FILE, (err, userInfo) => {
    if(userInfo.username && userInfo.password){
      axios.post(resourceURL + 'auth', {
        username: userInfo.username,
        password: userInfo.password
      }).then(res => {
        console.log(res.data);
        userInfo.access_token = res.data.access_token;
        jsonfile.writeFile(TOKEN_FILE, userInfo, (err) => {
          if(err) console.log(err);
          console.log('Got access token.');
        });
      }).catch(e => console.log('Login session error.'));
    } else{
      console.log("No user info available.")
    }
  });
} else {
  jsonfile.writeFileSync(TOKEN_FILE, {});
  console.log("Initialize token file.");
}

const server = app.listen(3000, function () {
    console.log('Server listening at http://' + server.address().address + ':' + server.address().port);
});
