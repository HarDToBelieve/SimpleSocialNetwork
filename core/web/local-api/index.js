const express = require('express');
const router = express.Router();
const fs = require('fs');
const jsonfile = require('jsonfile');
const axios = require('axios');

const {
  RESOURCE_FOLDER,
  TOKEN_FILE
} = require('../helper.js')


router.post('/saveLoginInfo', (req, res, next) => {
    let userInfo = {};
    console.log(req.query);
    userInfo.username = req.query.username;
    userInfo.password = req.query.password;
    userInfo.access_token = req.query.access_token;
    jsonfile.writeFile(TOKEN_FILE, userInfo, (err) => {
      if(err) console.log(err);
      console.log('User info saved');
      console.log(userInfo);
      return res.status(200).json({message: "User info saved."});
    });
});

router.get('/getToken', (req, res, next) => {
  jsonfile.readFile(TOKEN_FILE, (err, userInfo) => {
        if(err) console.log(err);
        console.log(userInfo);
        if(userInfo.access_token){
          return res.status(200).json({userInfo: userInfo});
        }
        return res.status(404).json({message: "No access token available."});
    });
});

router.post('/logout', (req, res, next) => {
  jsonfile.writeFile(TOKEN_FILE, {}, (err) => {
    if(err) console.log(err);
    console.log('Reset user info.');
    return res.status(200).json({message: 'Reset user info.'})
  });
});



router.use((req, res) => {
    res.status(404).redirect('/');
});

module.exports = router;
