import React from 'react';
import PortfolioData from '../data/PortfolioData.json';
import PortolioDetailsContainer from '../container/Portfolio/PortolioDetailsContainer';

const PortfolioDetails = ({
  match: {
    params: { id },
  },
}) => {
  const workId = parseInt(id, 10);
  const data = PortfolioData.filter((work) => work.id === workId);
  return (
    <>
      <PortolioDetailsContainer data={data[0]} />
    </>
  );
};

export default PortfolioDetails;
