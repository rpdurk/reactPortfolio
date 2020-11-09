import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import durkPortrait from "../Images/durkPortrait.jpg";
import landingPortfolio from "../Images/landingPortfolio.jpg";
import jbresearch1 from "../Images/jbresearch1.jpg";
import landingContact from "../Images/landingContact.jpg";

export const HomeAboutMe = () => {
  return (
      <div className="home-about-me">
        <div>
          <img src={durkPortrait}/>
        </div>
        <div>
        <h3>About me</h3>
          <p> I am a higher education professional, researcher, strength coach, and learning web development.  I reside in the San Francisco Bay Area.</p>
          <a class="btn btn-primary" href="/about"><button>Learn More</button></a>
        </div>
      </div>
    );
  }
  
export const HomePortfolioPreview = () => {
  return (
    <div className="home-portfolio-preview">
        <div>
        <h3>Portfolio</h3>
          <p> I am currently working on improving my understanding of web development to pursue scale-able health solutions.</p>
          <a class="btn btn-primary" href="/about"><button>Learn More</button></a>
        </div>
        <div>
          <img src={landingPortfolio}/>
        </div>
      </div>
    );
  }

export const HomeResearchPreview = () => {
  return (
      <div className="home-research">
        <div>
          <img src={jbresearch1}/>
        </div>
        <div>
        <h3>Current Research</h3>
          <p> I am interested in health, wellness, and performance based research.  I am actively working on research studies involving the Gut-Muscle-Brain Axis, breath, and Virtual Reality based exercise.</p>
          <a class="btn btn-primary" href="/about"><button>Learn More</button></a>
        </div>
      </div>
    );
  }
    
export const HomeContactPreview = () => {
  return (
    <div className="home-contact-preview">
        <div>
        <h3>Contact Me</h3>
          <p> If you found something here interesting, let's continue the conversation.</p>
          <a class="btn btn-primary" href="/about"><button>Learn More</button></a>
        </div>
        <div>
          <img src={landingContact}/>
        </div>
      </div>
    );
  }