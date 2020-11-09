import React from 'react';
import HomeJumbotron from '../components/homeJumbotron';
import { HomeAboutMe, HomePortfolioPreview, HomeResearchPreview, HomeContactPreview } from '../components/homePreviews';

function Home() {
  return (
    <>
      <HomeJumbotron />
      <HomeAboutMe />
      <HomePortfolioPreview />
      <HomeResearchPreview />
      <HomeContactPreview />
    </>
  );
}

export default Home;