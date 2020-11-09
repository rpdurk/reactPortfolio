import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";


export const GeneralNavBar = () => {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/" className="nav">Ryan Durk</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/about" className="navLink">About Me</Nav.Link>
          <Nav.Link href="/portfolio" className="navLink">Portfolio</Nav.Link>
          <Nav.Link href="/research" className="navLink">Research</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link eventKey={2} href="/contact" className="navLink">
            Contact Me
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </>
    );
  };