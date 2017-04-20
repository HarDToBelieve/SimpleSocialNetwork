import React from 'react';
import { Navbar, Nav, NavDropdown, NavItem,MenuItem, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { withRouter } from 'react-router';
import Select from 'react-select';

const Header = (props) => {
  return (
    <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Social Network</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <LinkContainer to="newfeed">
          <NavItem eventKey={1} href="#">New Feed</NavItem>
        </LinkContainer>
        <LinkContainer to="profile">
          <NavItem eventKey={1} href="#">Profile</NavItem>
        </LinkContainer>
      </Nav>
      <Nav pullRight>
        <LinkContainer to="login">
          <NavItem eventKey={1} href="#">Logout</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
};

export default Header;
