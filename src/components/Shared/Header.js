import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Logo from "../../images/logo.png";
import {LinkContainer} from 'react-router-bootstrap'
import "./Header.css";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="white" className="shadow-sm" sticky="top">
      <Container>
          <LinkContainer to='/'>
              <Navbar.Brand >
                  <img src={Logo} className="logo" alt="logo"/>
              </Navbar.Brand>
          </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
          <LinkContainer to="/blog"><Nav.Link className="nav-link">Blog</Nav.Link></LinkContainer>
          <LinkContainer to="/manageInventories"><Nav.Link className="nav-link">Manage Inventory</Nav.Link></LinkContainer>
          <LinkContainer to="/myItems"><Nav.Link className="nav-link">My Items</Nav.Link></LinkContainer>
          <LinkContainer to="/login"><Nav.Link className="nav-link">Log in</Nav.Link></LinkContainer>
          <LinkContainer to="/register"><Nav.Link className="nav-link">Register</Nav.Link></LinkContainer>
          <Nav.Link className="nav-link">Log out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;