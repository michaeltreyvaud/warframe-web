import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => (
  <header className="navbar-main">
    <div className="navbar-header">
      <Link to="/" className="navbar-left-link">
        Warframe
      </Link>
    </div>
  </header>
);

export default Navbar;
