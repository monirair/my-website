import React from 'react';
import PageTitle from '../components/PageTitle/PageTitle';
import About from '../container/About/About';

export const AboutPage = () => {
  return (
    <>
      <PageTitle>
        <h1 className='display-1 mb-0'>About</h1>
      </PageTitle>
      <About></About>
    </>
  );
};
