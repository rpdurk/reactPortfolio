import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";


export const AboutMe = () => {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/" className="footerLink">Home</Nav.Link>
          <Nav.Link href="/about" className="footerLink">About Me</Nav.Link>
          <Nav.Link href="/portfolio" className="footerLink">Portfolio</Nav.Link>
          <Nav.Link href="/research" className="footerLink">Research</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link eventKey={2} href="/contact" className="navLink">
            Contact Me:
          </Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/ryan-durk/" className="footerLink">LinkedIn</Nav.Link>
          <Nav.Link href="https://github.com/rpdurk" className="footerLink">Github</Nav.Link>
          <Nav.Link href="https://www.facebook.com/Ryan.P.Durk" className="footerLink">Facebook</Nav.Link>
          <Nav.Link href="https://www.instagram.com/ryanpdurk/?hl=en" className="footerLink">Instagram</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </>
    );
  };