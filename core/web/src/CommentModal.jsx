import React,{PropTypes} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Helper from './Helper.jsx'

const SingleComment = (props) => (
      <div className="post-box col-md-7">
        <div className="inline-block">
          <div className="post-owner">{props.comment.owner}</div>
          <div>{props.comment.content}</div>
        </div>
      </div>
)

function CommentList(props) {
    let commentList = "";
    if(props.comments[0]){
      commentList = props.comments.map(comment => <SingleComment key={comment.content} comment={comment}/>);
    }
    return(
      <div className="row">
        {commentList}
      </div>
    );
}

class CommentModal extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      post: {},
      newcomment: '',
      comments: '',
      commentStatus: false
    };
    this.loadComments = this.loadComments.bind(this);
    this.commentPost = this.commentPost.bind(this);
    this.setComments = this.setComments.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    this.loadComments();
    this.interval = setInterval(this.setComments, 1000);
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

  loadComments() {
    fetch(Helper.commentDataUrl + this.props.post.postID, {
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
          if(response.Comment){
            Helper.setComments(response.Comment);
          }
        });
  }

  setComments() {
    this.loadComments();
    if(Helper.commentStatus){
      this.setState({
        commentStatus: Helper.commentStatus
      });
    }
    if(Helper.comments.length != 0){
      this.setState({
        comments: Helper.comments
      });
    }
    Helper.setCommentStatus(false);
  }

  commentPost() {
    fetch(Helper.commentPostUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'JWT ' + Helper.access_token
            },
            body: JSON.stringify({
              content: this.state.newcomment,
              owner: Helper.username,
              date: new Date,
              postID: this.props.post.postID
            })
        }).then(function(response) {
            if (response.ok) {
                return response.json()
            } else {
                return null
            }
        }).then(function(response) {

            Helper.setCommentStatus(true);
            console.log("Commented");
        });
  }

  render() {
      return (
        <div className="comment-modal col-md-7">
          <div className="post-content">
            <div className="post-owner">{this.props.post.owner}</div>
            <div>{this.props.post.content}</div>
          </div>
          <div className="post-content">
            <div className="green pull-right like-box">{this.props.post.like} Like</div>
          </div>
          <div className="btn post-btn" onClick={this.props.likePost}>Like</div>
          <div className="comment-form">
            <textarea className="form-control post-input" type="text" name="newcomment" placeholder="What do you think about this?" onChange={this.handleInputChange}/>
            <div className="btn blue-btn" onClick={this.commentPost}>Post</div>
            { this.state.commentStatus ?
              <span className="green">Your comment is successfully posted.</span>
              :
              ""
            }
          </div>
          <CommentList
            comments = {this.state.comments}
          />
        </div>
      );
  }
}

export default CommentModal;
