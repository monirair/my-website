import React from 'react';
import PortfolioComp from '../../components/Portfolio/PortfolioComp';
import PortfolioData from '../../data/PortfolioData';

const HomePortfolio = () => {
  return (
    <section className='pt-100 pb-70'>
      <div className='container'>
        <div className='row'>
          {PortfolioData &&
            PortfolioData.slice(0, 2).map((single, key) => {
              return (
                <div
                  key={key}
                  className='col-lg-6'
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

export default HomePortfolio;
