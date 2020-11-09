import React from 'react';
import { GeneralNavBar } from '../components/navbar';
import { PortfolioPage } from '../components/portfolioPage';
import { GeneralFooter } from '../components/footer';


function Portfolio() {
  return (
    <>
      <GeneralNavBar />
      <PortfolioPage />
      <GeneralFooter />
    </>
  );
}

export default Portfolio;