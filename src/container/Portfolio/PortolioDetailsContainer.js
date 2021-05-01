import React from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
import SimilarPortfolio from '../PorfolioGrid/SimilarPortfolio';

const PortolioDetailsContainer = ({ data }) => {
  return (
    <>
      <PageTitle>
        <h1 className='display-1 mb-0'>{data.title}</h1>
      </PageTitle>
      <section className='py-100  bg-secondary'>
        <div className='container'>
          <div className='row mb-50' ata-aos='fade-up'>
            <div className='col' data-aos='fade-up'>
              <img
                src={`${process.env.PUBLIC_URL}/${data.image}`}
                alt={data.title}
                className='img-fluid rounded'
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-8'>
              <div
                className='portfolio-desc bg-white pa-30 rounded border mb-md-30'
                data-aos='fade-up'
              >
                <h3 className='mb-30'>{data.title}</h3>
                {data.desc.map((value, i) => {
                  return (
                    <p key={i} dangerouslySetInnerHTML={{ __html: value }} />
                  );
                })}
                <ul className='features'>
                  {data.features.map((value, i) => {
                    return (
                      <li key={i} dangerouslySetInnerHTML={{ __html: value }} />
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className='col-lg-4'>
              <div
                className='portfolio-info bg-white pa-30 rounded border'
                data-aos='fade-up'
                data-aos-delay='200'
              >
                <div className='mb-30'>
                  <h5>About</h5>
                  {data.about}{' '}
                  <a href={data.codeLink.link}>{data.codeLink.text}</a>
                </div>
                <div className='mb-30'>
                  <h5>Update</h5>
                  {data.update}
                </div>
                <div className='mb-30'>
                  <h5>Released</h5>
                  {data.released}
                </div>
                <div className='mb-30'>
                  <h5>License</h5>
                  {data.license}
                </div>
                <div className='mb-30'>
                  <h5>Languages</h5>
                  <ul className='portfolio-lang'>
                    {data.lang.map((value, i) => {
                      return (
                        <li
                          key={i}
                          dangerouslySetInnerHTML={{ __html: value }}
                        />
                      );
                    })}
                  </ul>
                </div>
                <div className='d-grid'>
                  <a href={data.liveLink} className='btn btn-primary'>
                    View Live Website
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SimilarPortfolio />
    </>
  );
};

export default PortolioDetailsContainer;
