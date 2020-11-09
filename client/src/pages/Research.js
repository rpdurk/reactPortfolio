import React from 'react';
import { GeneralNavBar } from '../components/navbar';
import { ResearchPage } from '../components/researchPage';
import { GeneralFooter } from '../components/footer';


function Research() {
  return (
    <>
      <GeneralNavBar />
      <ResearchPage />
      <GeneralFooter />
    </>
  );
}

export default Research;