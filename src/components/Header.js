// src/components/Header.js

import React from 'react';
import '../styles/Header.css'; // Import the CSS

const Header = () => {
  return (
    <header className="header-container">
      <h1>Webflix</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/profile">Profile</a>
      </nav>
    </header>
  );
};

export default Header;
