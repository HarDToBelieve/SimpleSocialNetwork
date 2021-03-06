import React,{PropTypes} from 'react';

import Helper from './Helper.jsx';
import PostList from './PostList.jsx';

class ProfileModal extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      userInfo: {},
      posts: [],
      newpost: '',
      postStatus: false
    };
    this.getUserInfo = this.getUserInfo.bind(this);
    this.getUserPost = this.getUserPost.bind(this);
    this.setProfileInfo = this.setProfileInfo.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.postData = this.postData.bind(this);
    this.followUser = this.followUser.bind(this);
  }

  componentDidMount() {
   this.interval = setInterval(this.setProfileInfo, 1000);
  }

  componentWillUnmount() {
   clearInterval(this.interval);
	 }

  handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  }

  followUser() {
    fetch(Helper.followUserUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'JWT ' + Helper.access_token
            },
            body: JSON.stringify({
              follower: this.props.username
            })
        }).then(function(response) {
            if (response.ok) {
                return response.json()
            } else {
                return null
            }
        }).then(function(response) {
          if(response.message){
           console.log(response.message)
          } else {
            console.log("Following");
          }
        });
  }

  postData() {
    fetch(Helper.postDataUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'JWT ' + Helper.access_token
            },
            body: JSON.stringify({
              content: this.state.newpost,
              owner: Helper.username,
              date: Date.now(),
              like: 0
            })
        }).then(function(response) {
            if (response.ok) {
                return response.json()
            } else {
                return null
            }
        }).then(function(response) {
            Helper.setPostStatus(true);
            console.log("Post Successfully");
        });
  }

  getUserInfo() {
        fetch(Helper.getUserUrl + this.props.username, {
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
            Helper.setUserInfo(response);
            console.log(response);
        })
  }

  getUserPost() {
       fetch(Helper.getUserPostUrl + this.props.username, {
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
            if (response.posts) {
             Helper.wallPosts = response.posts;
            }
        })
  }

  setProfileInfo() {
     if(!this.state.userInfo.name){
      this.getUserInfo();
     }
     this.getUserPost();
     this.setState({
       postStatus: Helper.postStatus
     });
     if(Helper.userInfo){
      this.setState({
        userInfo: Helper.userInfo
      });
     }
     if(Helper.wallPosts.length != 0){
       this.setState({
         posts: Helper.wallPosts
       });
     }
     Helper.setPostStatus(false);
  }

  render() {
      return (
       <div className="comment-modal col-md-7">
         <div className="post-content">
           <div className="post-owner">{this.state.userInfo.name}</div>
           <div>{this.state.userInfo.birthday}</div>
         </div>
         <div className="post-content">
           <div className="green pull-right like-box">Following {this.state.userInfo.following_name ? this.state.userInfo.following_name.length : "?"}</div>
         </div>
         <div className="btn blue-btn" onClick={this.followUser}>Follow</div>
         <div className="comment-form">
           <textarea className="form-control post-input" type="text" name="newpost" placeholder="Post something to your wall." onChange={this.handleInputChange}/>
           <div className="btn blue-btn" onClick={this.postData}>Post</div>
           { this.state.postStatus ?
             <span className="green">Posted to your wall.</span>
             :
             ""
           }
         </div>
         <PostList posts = {this.state.posts} profile = {true}/>
       </div>
      );
  }
}

export default ProfileModal;
