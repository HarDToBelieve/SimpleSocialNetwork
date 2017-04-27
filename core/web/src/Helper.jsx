let Helper = {
  authorizationUrl : 'http://161.202.20.61:5000/auth',
  access_token: '',
  username: '',
  setAccessToken(token) {
    this.access_token = token;
  },
  setUsername(username){
    this.username = username;
  }
}

export default Helper
