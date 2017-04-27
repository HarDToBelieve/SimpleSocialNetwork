import React,{PropTypes} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Helper from './Helper.jsx'

class LoginModal extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      userExist: false
    };
  }

  getToken() {
    fetch(Helper.authorizationUrl, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              username: this.state.username,
              password: this.state.password
            })
        }).then(function(response) {
            if (response.ok) {
                return response.json()
            } else {
                return null
            }
        }).then(function(response) {
            if (response.access_token) {
                console.log(response.access_token);
                Helper.setAccessToken(response.access_token);
                Helper.setUsername(this.state.username);
            } else{
                Helper.setAccessToken('');
                Helper.setUsername('');
            }
        });
  }

  render() {
      return (
        <form className="login">
          <h3>Login</h3>
          <div className="mt-2">
            <input className="form-control" type="text" name="username" placeholder="Username" />
            <input className="form-control" type="password" name="password" placeholder="Password" />
          </div>
          <button className="btn btn-outline-success" onClick={this.props.closeLoginModal}>Login</button>
          <button className="btn btn-outline-info" onClick={this.props.openRegisterModal}>Register</button>
        </form>
      );
  }
}

LoginModal.propTypes = {
    openRegisterModal: PropTypes.func,
    closeLoginModal: PropTypes.func,
    openLoginModal: PropTypes.func
};

export default LoginModal;
