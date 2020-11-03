import React from "react";
import pgbc from "../images/Images/pgbc.png";
import { MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBCardTitle } from "mdbreact";

const JumbotronHomePage = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <MDBJumbotron style={{ padding: 0 }}>
            <MDBCol className="text-white text-center py-5 px-4 my-5" style={{ backgroundImage: `url(${pgbc})` }}>
              <MDBCol className="py-5">
                <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold">Hi, my name is Ryan Durk</MDBCardTitle>
                <p className="mx-5 mb-5">Explore my portfolio.
                </p>
              </MDBCol>
            </MDBCol>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default JumbotronHomePage;