import React from "react";
import { Navbar, Container } from 'react-bootstrap';
import logo from '../assets/img/owl.png'

function NavbarComp () {
  return(
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand>
        <img
          alt=""
          src= {logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      OxOwl Inspections
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default NavbarComp;