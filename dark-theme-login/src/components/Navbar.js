import React from 'react';
import './Navbar.css';  // Make sure this path is correct

function Navbar() {
  return (
    <nav className="navbar">
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/services">Services</a>
      <a href="/services">events</a>
    </nav>
  );
}

export default Navbar;
