let Helper = {
  authorizationUrl : 'http://161.202.20.61:5000/auth',
  registerUrl: 'http://161.202.20.61:5000/user/reg',
  newfeedDataUrl: 'http://161.202.20.61:5000/user?name=',
  postDataUrl: 'http://161.202.20.61:5000/post',
  likePostUrl: 'http://161.202.20.61:5000/post/like',
  commentPostUrl: 'http://161.202.20.61:5000/post/cmt',
  commentDataUrl: 'http://161.202.20.61:5000/post/cmt?postID=',
  getUserUrl: 'http://161.202.20.61:5000/user?name=',
  getUserPostUrl: 'http://161.202.20.61:5000/post?name=',
  followUserUrl: 'http://161.202.20.61:5000/user/flw',
  access_token: '',
  logedIn: false,
  errorLogin: false,
  username: '',
  userInfo: {},
  posts: [],
  wallPosts: [],
  comments: [],
  postStatus: false,
  commentStatus: false,
  registered: false,
  errorRegister: false,
  setPostStatus(bool) {
    this.postStatus = bool;
  },
  setCommentStatus(bool) {
    this.postStatus = bool;
  },
  setErrorLogin() {
      this.errorLogin = true;
  },
  setErrorRegister() {
      this.errorRegister = true;
  },
  setSuccessRegistered(){
      this.registered = true;
      this.errorRegister = false;
  },
  setAccessToken(token) {
    this.access_token = token;
    this.errorLogin = false;
  },
  setUsername(username){
    this.username = username;
  },
  setUserInfo(userInfo){
    this.userInfo = userInfo;
  },
  setPosts(posts){
    this.posts = posts;
  },
  setWallPosts(posts){
    this.wallPosts = posts;
  },
  setComments(comments){
    this.comments = comments;
  }
}

export default Helper
