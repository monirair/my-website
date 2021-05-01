import React from 'react';
import './PageTitle.css';
const PageTitle = ({ children }) => {
  return (
    <section className='banner pb-100 pt-40 bg-dark clip'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8 text-white' data-aos='fade-up'>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageTitle;
