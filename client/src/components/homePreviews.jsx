import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import durkPortrait from "../Images/durkPortrait.jpg";
import landingPortfolio from "../Images/landingPortfolio.jpg";
// import landingContact from "../Images/landingContact.jpg";
// import jbresearch1 from "../Images/jbresearch1.jpg";
// import './App.css'; //Import here your file style

export const HomeAboutMe = () => {
  return (
      <div className="home-about-me">
        <div>
          <img src={durkPortrait}/>
        </div>
        <div>
        <h3>About me</h3>
          <p> I am a higher education professional, researcher, strength coach, and learning web development.  I reside in the San Francisco Bay Area.   </p>
          <a class="btn btn-primary" href="/about"><button>Learn More</button></a>
        </div>
      </div>
    );
  }
  
  export const HomePortfolioPreview = () => {
    return (
      <Container>
        <Row>
          <Col md={4}>
            <h3>Portfolio</h3>
            <p> I am a higher education professional, researcher, strength coach, and learning web development.  I reside in the San Francisco Bay Area.   </p>
            <Button variant="primary" href="#">Learn More</Button>{' '}
          </Col>
          <Col md={4}>
            <img src={landingPortfolio} className="img-fluid" alt="road into the mountains" />
          </Col>
        </Row>
      </Container>
      );
    }
