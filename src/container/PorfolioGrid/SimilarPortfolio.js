import React from 'react';
import PortfolioComp from '../../components/Portfolio/PortfolioComp';
import PortfolioData from '../../data/PortfolioData';

const SimilarPortfolio = () => {
  return (
    <section className='py-100 clip-top'>
      <div className='container'>
        <div className='row'>
          {PortfolioData &&
            PortfolioData.slice(0, 3).map((single, key) => {
              return (
                <div
                  key={key}
                  className='col-lg-4'
                  data-aos='fade-up'
                  data-aos-delay='300'
                >
                  <PortfolioComp data={single} key={key} />
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default SimilarPortfolio;
