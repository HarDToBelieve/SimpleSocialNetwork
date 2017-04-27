import React from 'react';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';

import LoginModal from './LoginModal.jsx'
import RegisterModal from './RegisterModal.jsx'

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isShowingLoginModal: false,
      isShowingRegisterModal: false,
      username: "",
    }
    this.openLoginModal = this.openLoginModal.bind(this);
    this.openRegisterModal = this.openRegisterModal.bind(this);
    this.closeLoginModal = this.closeLoginModal.bind(this);
    this.closeRegisterModal = this.closeRegisterModal.bind(this);
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

  openRegisterModal() {
    this.setState({
      isShowingLoginModal: false,
      isShowingRegisterModal: true
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
      return (
        <div className="row justify-content-md-center">
          <div className="col-sm-4">
          </div>
          <div className="col-sm-4">
            <button onClick={this.openLoginModal}>Login</button>
            { this.state.isShowingLoginModal &&
              <ModalContainer onClose={this.closeLoginModal}>
                <ModalDialog onClose={this.closeLoginModal}>
                  <LoginModal
                    openRegisterModal = {this.openRegisterModal}
                    openLoginModal = {this.openLoginModal}
                    closeLoginModal = {this.closeLoginModal}
                  />
                </ModalDialog>
              </ModalContainer>
            }
            <button onClick={this.openRegisterModal}>Register</button>
            { this.state.isShowingRegisterModal &&
              <ModalContainer onClose={this.closeRegisterModal}>
                <ModalDialog onClose={this.closeRegisterModal}>
                  <RegisterModal
                    openLoginModal = {this.openLoginModal}
                    getRegisterInfo = {this.getRegisterInfo}
                  />
                </ModalDialog>
              </ModalContainer>
            }
          </div>
        </div>
      );
  }
}

export default Home;
