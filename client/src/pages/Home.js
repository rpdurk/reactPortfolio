import React from 'react';
import { GeneralNavBar } from '../components/navbar';
import HomeJumbotron from '../components/homeJumbotron';
import { HomeAboutMe, HomePortfolioPreview, HomeResearchPreview, HomeContactPreview } from '../components/homePreviews';

function Home() {
  return (
    <>
      <GeneralNavBar />
      <HomeJumbotron />
      <HomeAboutMe />
      <HomePortfolioPreview />
      <HomeResearchPreview />
      <HomeContactPreview />
      {/* <Footer /> */}
    </>
  );
}

export default Home;