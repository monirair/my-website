import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const Quote = () => {
  return (
    <section className='py-100 bgSecondary'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-10'>
            <FontAwesomeIcon className='quote-icon' icon={faQuoteLeft} />

            <h2 className='display-1'>
              And do good indeed, Allah loves the doers of good.
            </h2>
            <p className='lead mt50'>[Quran 2:195]</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;
