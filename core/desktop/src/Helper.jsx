const LOCAL_URL = 'http://localhost:8080/';
const BASE_URL = 'http://161.202.20.61:5000/';

let Helper = {
  authorizationUrl : BASE_URL + 'auth',
  registerUrl: BASE_URL + 'reguser',
  newfeedDataUrl: BASE_URL + 'postnewfeed?name=',
  postDataUrl: BASE_URL + 'post',
  likePostUrl: BASE_URL + 'likepost',
  commentPostUrl: BASE_URL + 'postcmt',
  commentDataUrl: BASE_URL + 'postcmt?postID=',
  getUserUrl: BASE_URL + 'user?name=',
  getUserPostUrl: BASE_URL + 'post?name=',
  followUserUrl: BASE_URL + 'flwuser',
  unfollowUserUrl: BASE_URL + 'unflwuser',
  localURL: LOCAL_URL,

  access_token: '',
  username: '',
  userInfo: {},
  posts: [],
  wallPosts: [],
  comments: [],

  logedIn: false,
  errorLogin: false,
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
    if(token != ""){
      this.errorLogin = false;
    }
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
