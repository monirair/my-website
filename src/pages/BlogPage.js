import React from 'react';
import PageTitle from '../components/PageTitle/PageTitle';

const BlogPage = () => {
  return (
    <>
      <PageTitle>
        <h1 className='display-1'>My Blog</h1>
      </PageTitle>
      <section className='py-100'>
        <div className='container'>
          <div className='row'>
            <div className='col'>My BLog</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
