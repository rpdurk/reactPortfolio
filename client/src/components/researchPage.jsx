import React from "react";
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns';
import vo2max from '../Images/vo2max.jpg';
import wser2019 from '../Images/wser2019.jpg';
import thaiIslands from '../Images/thaiislands.jpg';
import { Button } from 'react-bootstrap'; 


export const ResearchPage = () => {
  return (
    <>
    <br />
    <Card className="text-center" border="light">
      <Card.Body>
        <Card.Title>Latest Research</Card.Title>
        <Card.Text>
          Check out some of my latest research projects.
        </Card.Text>
      </Card.Body>
    </Card>
    <CardColumns>
      {/* first card */}
      <Card>
        <Card.Img variant="top" src={wser2019} alt="view of the race course for the W.S.E.R 2019" />
        <Card.Body>
          <Card.Title>Gut-Muscle-Axis 2019</Card.Title>
          <Card.Text>
          <a href="https://pubmed.ncbi.nlm.nih.gov/29989465/"><p class="card-text">Rapid gut microbiome changes in a world-class ultramarathon runner by Grosicki, Durk, & Bagley (2019).</p></a>
          </Card.Text>
        </Card.Body>
      </Card>
      {/* second card */}
      <Card>
        <Card.Img variant="top" src={vo2max} alt="graded exercise test" />
        <Card.Body>
          <Card.Title>Gut-Muscle-Axis 2018</Card.Title>
          <Card.Text>
          <a href="https://pubmed.ncbi.nlm.nih.gov/29989465/"><p class="card-text">Gut microbiota composition is related to cardiorespiratoy fitness in healthy young adults by Durk and colleagues (2018).</p></a>
          </Card.Text>
        </Card.Body>
      </Card>
      {/* third card */}
      <Card>
        <Card.Img variant="top" src={thaiIslands} alt="picture of the thai islands" className="text-center" style={{ height: '50rem', width: '38rem'}}  />
        <Card.Body>
          <Card.Title>More research is coming!</Card.Title>
          <Card.Text>
            <p>Science doesn't happen alone, it is a team endeavour.  Check out some of the researchers I have worked with!</p>
              <a href="https://www.musclephyslab.com/"><p>Muscle Physiology Lab</p></a>
          </Card.Text>
        </Card.Body>
      </Card>
</CardColumns>
    </>
    );
  };