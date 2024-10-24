import React from 'react';
import '../App.css';

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <h1>Headlines.</h1>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#expertise">Our Services</a></li>
          <li><a href="#team">Our Team</a></li>
          <li><a href="#footer">Contact Us</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
