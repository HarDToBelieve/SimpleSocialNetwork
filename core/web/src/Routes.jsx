//React libraries
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import ReactDOM from 'react-dom';
import React from 'react';

//Import Container component
import Header from './Header.jsx';
import NewFeed from './NewFeed.jsx';
import Profile from './Profile.jsx';
import Home from './Home.jsx';
import Helper from './Helper.jsx';

class AppRoute extends React.Component {

  render() {
    return(
      <Router>
        <div>
          <Route exact path="/" component={Home} />
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<AppRoute />, document.getElementById('contents'));
