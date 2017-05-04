import React,{PropTypes} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Helper from './Helper.jsx'

class ProfileModal extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      username: ''
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
	}

  render() {
      return (
        <div>Placeholder for Profile</div>
      );
  }
}

export default ProfileModal;
