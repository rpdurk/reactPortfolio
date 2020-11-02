import React from 'react';
import { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap/Navbar';

export default function navbar() {

  return (
    <>
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Home</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#Research">Research</Nav.Link>
      <Nav.Link href="#Portfolio">Portfolio</Nav.Link>
      <Nav.Link href="#Contact">Contact</Nav.Link>
    </Nav>
    </Navbar>
    </>
  );
}
