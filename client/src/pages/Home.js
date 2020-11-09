import React from 'react';
import { GeneralNavBar } from '../components/navbar';
import { GeneralFooter } from '../components/footer';
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
      <GeneralFooter />
    </>
  );
}

export default Home;