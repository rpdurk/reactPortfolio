import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import { durkPortrait, landingPortfolio, jbresearch1, landingContact  } from "../images/Images";
import './App.css'; //Import here your file style

const homeAboutMe = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="4">
          <img src={durkPortrait} className="img-fluid" alt="portrait of ryan" />
        </MDBCol>
        <MDBCol md="4">
          <h3>About me</h3>
          <p> I am a higher education professional, researcher, strength coach, and learning web development.  I reside in the San Francisco Bay Area.   </p>
          <MDBBtn color="primary" href="about.html" rounded>Learn More</MDBBtn>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    );
  }
  
  const homePortfolioPreview = () => {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="4">
            <h3>Portfolio</h3>
            <p> I am a higher education professional, researcher, strength coach, and learning web development.  I reside in the San Francisco Bay Area.   </p>
            <MDBBtn color="primary" href="about.portfolio" rounded>Learn More</MDBBtn>
          </MDBCol>
          <MDBCol md="4">
            <img src={landingPortfolio} className="img-fluid" alt="road into the mountains" />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      );
    }

  const homeResearchPreview = () => {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="4">
          <img src={jbresearch1} className="img-fluid" alt="researcher assessing urine biomarkers" />
          </MDBCol>
          <MDBCol md="4">
            <h3>Research</h3>
            <p> I am interested in health, wellness, and performance based research.  I am actively working on research studies involving th Gut-Muscle-Brain Axis, breath, and sports psychology.</p>
            <MDBBtn color="primary" href="about.html" rounded>Learn More</MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      );
    }

  const homeContactPreview = () => {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="4">
            <h3>Contact Me</h3>
            <p> If you found something here interesting, let's continue the conversation.</p>
            <MDBBtn color="primary" href="contact.html" rounded>Learn More</MDBBtn>
          </MDBCol>
          <MDBCol md="4">
            <img src={landingContact} className="img-fluid" alt="boat tied to a dock" />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      );
    }

 module.exports = {
    homeAboutMe,
    homePortfolioPreview,
    homeResearchPreview,
    homeContactPreview
  };