import './layout.css';
import React from 'react';
import ReactDOM from 'react-dom';

import Header from '../header/components.header';
import Home from '../home/components.home';

const Layout = () => {
  return (
    <div className='layoutContainer'>
      <header className='headerContainer'><Header /></header>
      <aside className='asideContainer'>Aside</aside>
      <main className='contentContainer'><Home /></main>
      <footer className='footerContainer'>Footer</footer>
    </div>
  );
};

export default Layout;
