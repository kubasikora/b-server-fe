import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

const NavigationBarView = props => {
  const logIn = event => {
    event.preventDefault();
    props.showLoginPopup();
  };

  return (
    <Navbar>
      <Navbar.Header>
        <LinkContainer to="/">
          <Navbar.Brand>Dodaj piwko!</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem componentClass={Link} href="/loaner" to="/loaner">
            Dłużnik
          </NavItem>
          <NavItem componentClass={Link} href="/lender" to="/lender">
            Wierzyciel
          </NavItem>
          <NavItem componentClass={Link} href="/" to="/" onClick={logIn}>
            Zaloguj
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBarView;
