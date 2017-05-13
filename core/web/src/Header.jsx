import React from 'react';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';

import ProfileModal from './ProfileModal.jsx';

class Header extends React.Component{
  constructor() {
    super();
    this.state = {
      username: '',
      isShowingProfileModal: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.openProfileModal = this.openProfileModal.bind(this);
    this.closeProfileModal = this.closeProfileModal.bind(this);
  }

  handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
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

  render() {
    return (
      <nav className="navbar" role="navigation">
          <div className="container">
              <div className="row navbar-collapse">
                  <img className="top-logo margin-left-logo" width="60px" height="60px" src="images/logo.png"/>
                  <ul className="nav navbar-nav col-md-6">
                      <li className="d-inline-block navbar-brand">
                        Simple Social Network
                      </li>
                      <li className="btn btn-nav">
                        <div onClick={this.props.openProfileModal}>
                          Profile
                        </div>
                      </li>
                  </ul>
                  <form className="form-inline pull-right">
                    <div className="top-search">
                      <input className="form-control mr-sm-2" type="text" name="username" placeholder="Search" onChange={this.handleInputChange}/>
                      <div className="btn btn-outline-success my-2 my-sm-0 button-search" onClick={this.openProfileModal}>Search</div>
                    </div>
                    <div className="btn-logout" onClick={this.props.resetAccessToken}>Logout</div>
                  </form>
                  { this.state.isShowingProfileModal &&
                    <ModalContainer onClose={this.closeProfileModal}>
                      <ModalDialog onClose={this.closeProfileModal}>
                        <ProfileModal
                         username = {this.state.username}
                        />
                      </ModalDialog>
                    </ModalContainer>
                  }
              </div>
          </div>
      </nav>
    );
  }
}

export default Header;
