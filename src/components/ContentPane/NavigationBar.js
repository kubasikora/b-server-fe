import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
            <Link to="/"> Dodaj transakcje </Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem>
          <Link to="/loaner">Dłużnicy</Link>
        </NavItem>
        <NavItem>
          <Link to="/lender">Wierzyciele</Link>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default NavigationBar;
