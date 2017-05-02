import React from 'react';

import Header from './Header.jsx';
import Helper from './Helper.jsx'

class Profile extends React.Component {

  getUserInfo() {
  fetch('http://161.202.20.61:5000/user?name=hiep', {
            method: "GET",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'JWT ' + Helper.access_token
            }
        }).then(function(response) {
            if (response.ok) {
                return response.json()
            } else {
                return null
            }
        }).then(function(response) {
            if (response) {
                console.log(response)
            }
        })
  }

  render() {
      return (
        <div>
          <Header />
          <div>Placeholder Profile.</div>
        </div>
      );
  }
}

export default Profile;
