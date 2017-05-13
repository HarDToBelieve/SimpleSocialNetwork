import React from 'react';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';

import Header from './Header.jsx';
import Helper from './Helper.jsx';
import ProfileModal from './ProfileModal.jsx';
import CommentModal from './CommentModal.jsx';
import PostList from './PostList.jsx';

class NewFeed extends React.Component {

  constructor() {
    super();
    this.state = {
      posts: [],
      newpost: "",
      postStatus: false,
      isShowingProfileModal: false
    };
    this.setPosts = this.setPosts.bind(this);
    this.postData = this.postData.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.openProfileModal = this.openProfileModal.bind(this);
    this.closeProfileModal = this.closeProfileModal.bind(this);
  }

  componentDidMount() {
    this.loadData();
    this.interval = setInterval(this.setPosts, 1000);
  }

  componentWillUnmount() {
		clearInterval(this.interval);
	}

  openProfileModal() {
    this.setState({
      isShowingProfileModal: true
    })
  }

  closeProfileModal() {
    this.setState({
      isShowingProfileModal: false
    })
  }

  handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  }

  resetAccessToken(){
    Helper.setAccessToken("");
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

  setPosts() {
    this.loadData();
    this.setState({
      postStatus: Helper.postStatus
    });
    if(Helper.posts.length != 0){
      this.setState({
        posts: Helper.posts
      });
    }
    Helper.setPostStatus(false);
 }

  loadData() {
    fetch(Helper.newfeedDataUrl + Helper.username, {
            method: 'GET',
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
          Helper.setPosts(response.posts);
        });
  }

  render() {
      return (
        <div>
          <Header
            openProfileModal = {this.openProfileModal}
            resetAccessToken = {this.resetAccessToken}
          />
          <div className="container post-list">
            <div className="post-form">
              <textarea className="form-control post-input" type="text" name="newpost" placeholder="What are you thinking?" onChange={this.handleInputChange}/>
              <div className="btn blue-btn" onClick={this.postData}>Post</div>
              { this.state.postStatus ?
                <span className="green">Posted to your wall</span>
                :
                ""
              }
              { this.state.isShowingProfileModal &&
                <ModalContainer onClose={this.closeProfileModal}>
                  <ModalDialog onClose={this.closeProfileModal}>
                    <ProfileModal
                     username = {Helper.username}
                    />
                  </ModalDialog>
                </ModalContainer>
              }
            </div>
            <PostList posts = {this.state.posts}/>
          </div>
        </div>
      );
  }
}

export default NewFeed;
