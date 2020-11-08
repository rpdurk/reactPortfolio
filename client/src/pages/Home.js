import React from 'react';
import HomeJumbotron from '../components/homeJumbotron';
import { HomeAboutMe } from '../components/homePreviews';

function Home() {
  return (
    <>
      <HomeJumbotron />
      <HomeAboutMe />
    </>
  );
}

export default Home;