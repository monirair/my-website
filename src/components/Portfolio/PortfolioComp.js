import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './PortfolioComp.css';

const PortfolioComp = ({ data }) => {
  return (
    <div className='portfolio-card'>
      <Link to={`/portfolio/${data.id}`}>
        <LazyLoadImage
          className='img-fluid rounded'
          src={`${process.env.PUBLIC_URL}/${data.image}`}
          alt={data.title}
          width='100%'
          height='auto'
        />
      </Link>
      <div className='pa-30'>
        <ul className='portfolio-lang'>
          {data.lang.map((value, i) => {
            return <li key={i} dangerouslySetInnerHTML={{ __html: value }} />;
          })}
        </ul>
        <h5>
          <Link to={`/portfolio/${data.id}`}>{data.title}</Link>
        </h5>
      </div>
    </div>
  );
};

PortfolioComp.propTypes = {
  data: PropTypes.object,
};

export default PortfolioComp;
