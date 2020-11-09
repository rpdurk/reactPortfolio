import React from "react";
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup';
import { Button } from 'react-bootstrap'; 


export const AboutMe = () => {
  return (
    <>
    <Card className="text-center" border="light">
      <Card.Body>
        <Card.Title style={{fontSize: 36}}>Mission</Card.Title>
        <Card.Text style={{fontSize: 26}}>
          Make the world a healthier place.
        </Card.Text>
      </Card.Body>
    </Card>
    <br />
    <Card className="text-center" border="light" bg='dark' text='white'>
      <Card.Title style={{fontSize: 36}}>Background</Card.Title>
    </Card>
    <CardGroup>
      <Card border="light" bg='dark' text='white'>
        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
        <Card.Body className="text-center">
          <Card.Title style={{fontSize: 30}}>Lecturer</Card.Title>
          <Card.Text style={{fontSize: 26}}>
            I have taught over 7 unique university level courses.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card border="light" bg='dark' text='white'>
        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
        <Card.Body className="text-center">
          <Card.Title style={{fontSize: 30}}>Researcher</Card.Title>
          <Card.Text style={{fontSize: 26}}>
            I am currently researching the Gut-Muscle-Brain-Axis, breath, and virtual reality as a mode for exercise.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card border="light" bg='dark' text='white'>
        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
        <Card.Body className="text-center">
          <Card.Title style={{fontSize: 30}}>Strength and Conditioning Coach</Card.Title>
          <Card.Text style={{fontSize: 26}}>
            Currently the Head Strength Coach for a Division II NCAA program.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
    <br />
    <Card className="text-center" border="light">
      <Card.Body>
        <Card.Title style={{fontSize: 36}}>Web Development</Card.Title>
        <Card.Text style={{fontSize: 26}}>
          In search of more scalable solutions to impact health outcomes, I have begun to learn web development.
        </Card.Text>
        <Button variant="dark">Learn More</Button>
      </Card.Body>
    </Card>
    <br />
    <Card className="text-center" border="light" bg='dark' text='white'>
      <Card.Body>
        <Card.Title style={{fontSize: 36}}>More About Me</Card.Title>
        <Card.Text style={{fontSize: 26}}>
          I love traveling, and seeing new places.  All of the pictures used here are experiences I have had the privilege to have.
        </Card.Text>
      </Card.Body>
    </Card>
    </>
    );
  };