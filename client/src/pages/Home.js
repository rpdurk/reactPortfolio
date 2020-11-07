import React from 'react';
import { HomeAboutMe, HomePortfolioPreview, HomeResearchPreview, HomeContactPreview } from '../components/homePreviews';
import HomeJumbotron from '../components/homeJumbotron';

function Home() {
  return (
    <React.Fragment>
      {/* <AppAppBar /> */}
      <HomeJumbotron />
      {/* <ProductValues />
      <ProductCategories />
      <ProductHowItWorks />
      <ProductCTA />
      <ProductSmokingHero />
      <AppFooter /> */}
    </React.Fragment>
  );
}

export default Home;