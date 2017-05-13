import React from 'react';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';

import LoginModal from './LoginModal.jsx'
import RegisterModal from './RegisterModal.jsx'
import NewFeed from './NewFeed.jsx'
import Helper from './Helper.jsx'

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isShowingLoginModal: false,
      isShowingRegisterModal: false,
      username: "",
      logedIn: false
    }
    this.openLoginModal = this.openLoginModal.bind(this);
    this.openRegisterModal = this.openRegisterModal.bind(this);
    this.closeLoginModal = this.closeLoginModal.bind(this);
    this.closeRegisterModal = this.closeRegisterModal.bind(this);
    this.checkAuth = this.checkAuth.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.checkAuth, 1000);
  }

  componentWillUnmount() {
		clearInterval(this.interval);
	}

  openLoginModal() {
    this.setState({
      isShowingLoginModal: true,
      isShowingRegisterModal: false
    })
  }

  closeLoginModal() {
    this.setState({
      isShowingLoginModal: false
    })
  }

  checkAuth() {
      if(Helper.access_token != ""){
        this.setState({
          logedIn: true
        });
      } else {
        this.setState({
          logedIn: false
        });
      }
  }

  openRegisterModal() {
    this.setState({
      isShowingRegisterModal: true,
      isShowingLoginModal: false
      })
    }

  closeRegisterModal() {
    this.setState({
      isShowingRegisterModal: false
    })
  }

  getRegisterInfo(username) {
    this.setState({
      username: username
    })
  }

  render() {
      return this.state.logedIn === false ?
            (
              <div className="container-home row">
                <div className="col col-md-6 home-right">
                  <img width="150px" height="150px" src="images/Logo.png" />
                  <h2>Simple Social Network</h2>
                  <h4>Nothing could be simpler</h4>
                  <div className="home-button">
                    <button className="btn blue-btn" onClick={this.openLoginModal}>Login</button>
                    { this.state.isShowingLoginModal &&
                      <ModalContainer onClose={this.closeLoginModal}>
                        <ModalDialog onClose={this.closeLoginModal}>
                          <LoginModal
                            checkAuth = {this.checkAuth}
                            openRegisterModal = {this.openRegisterModal}
                          />
                        </ModalDialog>
                      </ModalContainer>
                    }
                    <button className="btn blue-btn" onClick={this.openRegisterModal}>Register</button>
                    { this.state.isShowingRegisterModal &&
                      <ModalContainer onClose={this.closeRegisterModal}>
                        <ModalDialog onClose={this.closeRegisterModal}>
                          <RegisterModal
                            getRegisterInfo = {this.getRegisterInfo}
                            openLoginModal = {this.openLoginModal}
                          />
                        </ModalDialog>
                      </ModalContainer>
                    }
                  </div>
                </div>
                <div className="col col-md-6 hidden-sm-down home-left">
                  <img width="50%" src="images/LandingImage.png" />
                </div>
              </div>
            )
          :
            (
              <div>
                <NewFeed />
              </div>
            )
  }
}

export default Home;
