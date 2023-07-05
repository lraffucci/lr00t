import './header.css';
import React, { useState }from 'react';
import ReactDOM from 'react-dom';

const Header = () => {
  const showButton = e => {
  };

  return (
    <div className='header-container'>
      <div className='header-logo'>
          LR/00/T
      </div>
        <div className='header-links'>
          <span>About</span>
          <span>Experiments</span>
          <span>Contact</span>
          <span>Resume</span>
        </div>
    </div>
  );
};

export default Header;
