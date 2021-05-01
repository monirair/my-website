import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <header className='header'>
      <div className='logo-nav container'>
        <div className='logo'>
          <Link to='/'>Monir Hossain</Link>
        </div>
        <ul className={click ? 'nav-options active' : 'nav-options'}>
          <div
            className='md-link logo text-center mb-30'
            onClick={closeMobileMenu}
          >
            <img
              src={`${process.env.PUBLIC_URL}./images/about.png`}
              alt='Monir Hossain'
              className='img-fluid'
            />
          </div>

          <li className='option' onClick={closeMobileMenu}>
            <Link to='/'>Home</Link>
          </li>
          <li className='option' onClick={closeMobileMenu}>
            <Link to='/about'>About</Link>
          </li>
          <li className='option' onClick={closeMobileMenu}>
            <Link to='/portfolio'>Portfolio</Link>
          </li>

          <li className='option mobile-option' onClick={closeMobileMenu}>
            <Link to='/blog'>Blog</Link>
          </li>
          <li className='option mobile-option' onClick={closeMobileMenu}>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
        <div className='mobile-menu' onClick={handleClick}>
          {click ? (
            <FontAwesomeIcon icon={faWindowClose} size='2x' />
          ) : (
            <FontAwesomeIcon icon={faBars} size='2x' />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
