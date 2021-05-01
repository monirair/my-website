import React from 'react';
import PageTitle from '../components/PageTitle/PageTitle';
import PortfolioContainer from '../container/Portfolio/PortfolioContainer';

const Portfolio = () => {
  return (
    <>
      <PageTitle>
        <h1 className='display-1'>Portfolio</h1>
        <p className='lead mb-0'>
          For two years I’ve been designing and developing websites. Below are
          some of my favourites.
        </p>
      </PageTitle>
      <PortfolioContainer />
    </>
  );
};

export default Portfolio;
