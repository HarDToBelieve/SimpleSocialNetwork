//React libraries
import {Router, Route, IndexRedirect, hashHistory, withRouter} from 'react-router';
import ReactDOM from 'react-dom';
import React from 'react';

//Import Container component
import Header from './Header.jsx';
import NewFeed from './NewFeed.jsx';
import Profile from './Profile.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="login" component={Login} />
        <Route path="register" component={Register} />
        <Route path="/" component={Header}>
          <IndexRedirect to="/newfeed" />
          <Route path="newfeed" component={NewFeed} />
          <Route path="profile" component={Profile} />
        </Route>
    </Router>
), document.getElementById('contents'));
