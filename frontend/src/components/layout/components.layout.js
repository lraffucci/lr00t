import './layout.css';
import React from 'react';
import ReactDOM from 'react-dom';

import Header from '../header/components.header';
import Main from '../main/components.main';

const Layout = () => {
  return (
    <div className='layoutContainer'>
      <header className='headerContainer'><Header /></header>
      <Main className='mainContainer'/>
      <footer className='footerContainer'>Footer</footer>
    </div>
  );
};

export default Layout;
