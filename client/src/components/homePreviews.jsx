import React from "react";
import durkPortrait from "../Images/durkPortrait.jpg";
import landingPortfolio from "../Images/landingPortfolio.jpg";
import jbresearch1 from "../Images/jbresearch1.jpg";
import landingContact from "../Images/landingContact.jpg";
import { Button } from 'react-bootstrap'; 

export const HomeAboutMe = () => {
  return (
      <div className="home-about-me">
        <div>
          <img src={durkPortrait} alt="portrait of ryan"/>
        </div>
        <div>
        <h3 className="home-about-me-title">About me</h3>
          <p> I am a higher education professional, researcher, strength coach, and learning web development.  I reside in the San Francisco Bay Area.</p>
          <a class="btn btn-primary" href="/about"><Button>Learn More</Button></a>
        </div>
      </div>
    );
  }
  
export const HomePortfolioPreview = () => {
  return (
    <div className="home-portfolio-preview">
        <div>
        <h3 className="home-portfolio-preview-title">Portfolio</h3>
          <p> I am currently working on improving my understanding of web development to pursue scalable health solutions.</p>
          <a class="btn btn-primary" href="/portfolio"><Button>Learn More</Button></a>
        </div>
        <div>
          <img src={landingPortfolio} alt="new road through the mountains"/>
        </div>
      </div>
    );
  }

export const HomeResearchPreview = () => {
  return (
      <div className="home-research">
        <div>
          <img src={jbresearch1} alt="urine analysis for research"/>
        </div>
        <div>
        <h3 className="home-research-title">Current Research</h3>
          <p> I am interested in health, wellness, and performance based research.  I am actively working on research studies involving the Gut-Muscle-Brain Axis, breath, and Virtual Reality based exercise.</p>
          <a class="btn btn-primary" href="/research"><Button>Learn More</Button></a>
        </div>
      </div>
    );
  }
    
export const HomeContactPreview = () => {
  return (
    <div className="home-contact-preview">
        <div>
        <h3 className="home-contact-preview-title">Contact Me</h3>
          <p> If you found something here interesting, let's continue the conversation.</p>
          <a class="btn btn-primary" href="/contact"><Button>Learn More</Button></a>
        </div>
        <div>
          <img src={landingContact} alt="boat tied to a dock"/>
        </div>
      </div>
    );
  }