import './nav.css';
import React, { useState }from 'react';
import ReactDOM from 'react-dom';

const Nav = () => {
  const showButton = e => {
  };

  return (
<div>
<nav class="sidebar bar-block small hide-small center">
  
  <img src="/w3images/avatar_smoke.jpg" style="width:100%">
  <a href="#" class="bar-item button padding-large black"> 
    <i class="fa fa-home xxlarge"></i>
    <p>HOME</p>
  </a>
  <a href="#about" class="bar-item button padding-large hover-black">
    <i class="fa fa-user xxlarge"></i>
    <p>ABOUT</p>
  </a>
  <a href="#photos" class="bar-item button padding-large hover-black">
    <i class="fa fa-eye xxlarge"></i>
    <p>PHOTOS</p>
  </a>
  <a href="#contact" class="bar-item button padding-large hover-black">
    <i class="fa fa-envelope xxlarge"></i>
    <p>CONTACT</p>
  </a>
</nav>

/* Navbar on small screens (Hidden on medium and large screens) */
<div class="top hide-large hide-medium" id="myNavbar">
  <div class="bar black opacity hover-opacity-off center small">
    <a href="#" class="bar-item button" style="width:25% !important">HOME</a>
    <a href="#about" class="bar-item button" style="width:25% !important">ABOUT</a>
    <a href="#photos" class="bar-item button" style="width:25% !important">PHOTOS</a>
    <a href="#contact" class="bar-item button" style="width:25% !important">CONTACT</a>
  </div>
</div>
</div>
  );
};

export default Nav;