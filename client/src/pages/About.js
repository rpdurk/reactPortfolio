import React from 'react';
import { GeneralNavBar } from '../components/navbar';
import { AboutMe } from '../components/aboutMe';
import { GeneralFooter } from '../components/footer';


function About() {
  return (
    <>
      <GeneralNavBar />
      <AboutMe />
      <GeneralFooter />
    </>
  );
}

export default About;