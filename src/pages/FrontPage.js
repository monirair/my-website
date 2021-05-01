import React from 'react';
import Intro from '../components/Intro/Intro';
import Quote from '../components/Quote/Quote';
import HomePortfolio from '../container/PorfolioGrid/HomePortfolio';

const FrontPage = () => {
  return (
    <>
      <Intro />
      <HomePortfolio />
    </>
  );
};

export default FrontPage;
