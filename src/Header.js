import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">React </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About us</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#signin">Sign In</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

