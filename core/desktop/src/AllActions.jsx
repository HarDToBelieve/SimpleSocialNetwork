import Helper from './Helper.jsx'
import axios from 'axios'

const allAction = {

    loadAccessToken: function() {
        fetch(Helper.localURL + 'getToken', {
            method: "GET"
        }).then(function(response) {
            if (response.ok) {
                return response.json()
            } else {
                return null
            }
        }).then(function(response) {
            if(response && response.userInfo){
              Helper.setAccessToken(response.userInfo.access_token);
              Helper.setUsername(response.userInfo.username);
            }
        });
    },

    logout: function() {
        fetch(Helper.localURL + 'logout', {
            method: "POST"
        }).then(function(response) {
            if (response.ok) {
                return response.json()
            } else {
                return null
            }
        }).then(function(response) {
            if(response && response.message){
              console.log(response.message);
            }
        });
    },

    creatUserInfoFile: function(username, password, access_token) {
        let requestURL = Helper.localURL + 'saveLoginInfo?username=' + username + '&password=' + password + '&access_token=' + access_token;
        fetch(requestURL, {
            method: "POST"
        }).then(function(response) {
            if (response.ok) {
                return response.json()
            } else {
                return null
            }
        }).then(function(response) {
            if(response && response.message){
              console.log(response.message);
            }
        })
    }
};

export default allAction
