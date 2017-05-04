import React from 'react';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';

import Header from './Header.jsx';
import Helper from './Helper.jsx';
import ProfileModal from './ProfileModal.jsx';
import CommentModal from './CommentModal.jsx';

class SinglePost extends React.Component {
  constructor() {
    super();
    this.state = {
      isShowingCommentModal: false,
    };
    this.likePost = this.likePost.bind(this);
    this.openCommentModal = this.openCommentModal.bind(this);
    this.closeCommentModal = this.closeCommentModal.bind(this);
  }

  openCommentModal() {
    this.setState({
      isShowingCommentModal: true
    })
  }

  closeCommentModal() {
    this.setState({
      isShowingCommentModal: false
    })
  }

  likePost() {
    fetch(Helper.likePostUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'JWT ' + Helper.access_token
            },
            body: JSON.stringify({
              postID: this.props.post.postID
            })
        }).then(function(response) {
            if (response.ok) {
                return response.json()
            } else {
                return null
            }
        }).then(function(response) {
            console.log("Liked");
        });
  }

  render(){
    return(
      <div className="post-box col-md-7">
        <div className="post-content">
          <div className="post-owner">{this.props.post.owner}</div>
          <div>{this.props.post.content}</div>
        </div>
        <div className="post-content">
          <div className="green pull-right like-box">{this.props.post.like} Like</div>
        </div>
        <div className="inline-block">
          <div className="btn post-btn" onClick={this.likePost}>Like</div>
          <div className="btn post-btn" onClick={this.openCommentModal}>Comment</div>
        </div>
        { this.state.isShowingCommentModal &&
          <div className="comment-modal">
            <ModalContainer onClose={this.closeCommentModal}>
              <ModalDialog onClose={this.closeCommentModal}>
                <CommentModal
                  post={this.props.post}
                  likePost={this.likePost}
                />
              </ModalDialog>
            </ModalContainer>
          </div>
        }
      </div>
    )
  }
}

function PostList(props) {
    const postList = props.posts.map(post => <SinglePost key={post.postID} post={post}/>);
    return(
      <div className="row">
        {postList}
      </div>
    );
}

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
              date: new Date(),
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
    if(Helper.postStatus){
      this.setState({
        postStatus: Helper.postStatus
      });
    }
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
                    <ProfileModal />
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
