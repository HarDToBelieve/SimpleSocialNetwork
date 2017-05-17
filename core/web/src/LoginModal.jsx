import React,{PropTypes} from 'react';

import Helper from './Helper.jsx'
import AllActions from './AllActions.jsx'

class LoginModal extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      path: '',
      error: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.getToken = this.getToken.bind(this);
    this.checkLogin = this.checkLogin.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.checkLogin, 1000);
  }

  componentWillUnmount() {
		clearInterval(this.interval);
	}

  checkLogin() {
    if(Helper.errorLogin){
      this.setState({
        error: true
      });
    }
    if(Helper.access_token != ""){
      AllActions.creatUserInfoFile(this.state.username, this.state.password, Helper.access_token);
    }
  }

  handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    if(name == "username") {
      Helper.setUsername(value);
    }
    this.setState({
      [name]: value
    });
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
            if (!response) {
                Helper.setAccessToken('');
                Helper.setErrorLogin();
                console.log(response.message);
            } else{
                console.log(response.access_token);
                Helper.setAccessToken(response.access_token);
            }
        });
  }

  render() {
      return (
        <form className="login">
          <h3>Login</h3>
          <div className="mt-2">
            <input className="form-control" type="text" name="username" placeholder="Username" onChange={this.handleInputChange}/>
            <input className="form-control" type="password" name="password" placeholder="Password" onChange={this.handleInputChange}/>
            {
              this.state.error ?
              <span className="red">{"Username and password are not match."}</span>
              :""
            }
          </div>
              <div className="btn btn-primary" onClick={this.getToken}>
                  Login
              </div>
              <div className="btn btn-primary" onClick={this.props.openRegisterModal}>
                  Register
              </div>
        </form>
      );
  }
}

export default LoginModal;
