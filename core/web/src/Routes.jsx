//React libraries
import {HashRouter, Route, IndexRedirect} from 'react-router-dom';
import ReactDOM from 'react-dom';
import React from 'react';

//Import Container component
import Header from './Header.jsx';
import NewFeed from './NewFeed.jsx';
import Profile from './Profile.jsx';
import Home from './Home.jsx';

ReactDOM.render((
    <HashRouter>
      <div>
        <Route path="/" component={Home} />
        <Route path="/newfeed" component={NewFeed} />
        <Route path="/profile" component={Profile} />
      </div>
    </HashRouter>
), document.getElementById('contents'));
