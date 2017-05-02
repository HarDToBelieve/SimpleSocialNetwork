import React, {PropTypes} from 'react';
import {FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

class RegisterModal extends React.Component {
  render() {
      return (
        <form className="register">
          <h3>Register</h3>
          <div className="mt-2">
            <input className="form-control" type="text" name="username" placeholder="Username" />
            <input className="form-control" type="text" name="birthday" placeholder="Birthday" />
            <input className="form-control" type="password" name="password" placeholder="Password" />
            <input className="form-control" type="password" name="confirmPassword" placeholder="Confirm Password" />
          </div>
          <button className="btn btn-outline-success" onClick={this.props.openLoginModal}>
            Submit
          </button>
        </form>
      );
  }
}

RegisterModal.propTypes = {
  openLoginModal: PropTypes.func
};

export default RegisterModal;
