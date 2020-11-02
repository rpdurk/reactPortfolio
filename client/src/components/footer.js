import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const footer = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Connect on Social Media</h5>
            <ul>
              <li className="list-unstyled">
                <a href="https://www.linkedin.com/in/ryan-durk/">LinkedIn</a>
              </li>
              <li className="list-unstyled">
                <a href="https://github.com/rpdurk">Github</a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.facebook.com/Ryan.P.Durk">Facebook</a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.instagram.com/ryanpdurk/?hl=en">Instagram</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#home">Home</a>
              </li>
              <li className="list-unstyled">
                <a href="#about">About</a>
              </li>
              <li className="list-unstyled">
                <a href="#research">Research</a>
              </li>
              <li className="list-unstyled">
                <a href="#portfolio">Portfolio</a>
              </li>
              <li className="list-unstyled">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default footer;