import React from 'react';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';
library.add(fab);

const Footer = () => {
  return (
    <footer className='bg-dark'>
      <div className='container'>
        <div className='row' data-aos='fade-up'>
          <div className='footer-logo text-center'>
            <h1>Monir Hossain</h1>
          </div>
        </div>
        <div
          className='row justify-content-around text-center'
          data-aos='fade-up'
          data-aos-delay='300'
        >
          <div className='col-lg-4 order-lg-2'>
            <div className='footer-info order-1 mb-md-30'>
              <p>React JS, Express JS, Node JS, MongoDB, WordPress Expert.</p>
            </div>
          </div>

          <div className='col-lg-3 order-lg-1'>
            <ul className='footer-menu mb-md-30'>
              <li>
                <Link to='/portfolio'>Portfolio</Link>
              </li>
              <li>
                <Link to='/services'>Services</Link>
              </li>
              <li>
                <Link to='/tutorials'>tutorials</Link>
              </li>
            </ul>
          </div>

          <div className='col-lg-3 order-lg-3'>
            <ul className='footer-menu'>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/contact'>Contact</Link>
              </li>
              <li>
                <Link to='/blog'>Blog</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='row' data-aos='fade-up' data-aos-delay='400'>
          <div className='col text-center'>
            <div className='social-links'>
              <ul>
                <li>
                  <a href='https://twitter.com/monirair'>
                    <FontAwesomeIcon icon={['fab', 'twitter']} size='2x' />
                  </a>
                </li>
                <li>
                  <a href='https://linkedin.com/monirair'>
                    <FontAwesomeIcon icon={['fab', 'linkedin']} size='2x' />
                  </a>
                </li>
                <li>
                  <a href='https://instagram.com/monirair'>
                    <FontAwesomeIcon icon={['fab', 'instagram']} size='2x' />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='row' data-aos='fade-up' data-aos-delay='500'>
          <div className='col py-30 text-center'>
            <p className='mb0'>Copyright &copy; 2021 Monir Hoossain</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
