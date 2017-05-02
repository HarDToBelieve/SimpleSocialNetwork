import React from 'react';

const Header = (props) => (
  <nav className="navbar navbar-fixed-top" role="navigation">
      <div className="container">
          <div className="row navbar-collapse">
              <img className="top-logo margin-left-logo" width="60px" height="60px" src="images/logo.png"/>
              <ul className="nav navbar-nav col-md-6">
                  <li className="d-inline-block navbar-brand">
                    Simple Social Network
                  </li>
                  <li className="btn btn-nav">
                    Profile
                  </li>
              </ul>
              <form className="form-inline pull-right">
                <div className="top-search">
                  <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                  <button className="btn btn-outline-success my-2 my-sm-0 button-search" type="submit">Search</button>
                </div>
                <a className="btn-logout">Logout</a>
              </form>
          </div>
      </div>
  </nav>
);

export default Header;
