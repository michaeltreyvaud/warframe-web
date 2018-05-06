import React from 'react';
import { Link } from 'react-router-dom';

const Styles = {
  container: {
    border: 0,
    backgroundColor: '#23b7e5',
    backgroundImage: 'linear-gradient(to right, #23b7e5 0%, #51c6ea 100%)',
    height: '55px',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.15)',
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 1000,
  },
  header: {
    padding: '20px',
    fontFamily: '"Source Sans Pro", sans-serif',
    color: '#FFFFFF',
  },
  link: {
    textDecoration: 'none',
    color: 'white',
  },
};

const Navbar = () => (
  <header style={Styles.container}>
    <div style={Styles.header}>
      <Link to="/" style={Styles.link}>
        Warframe
      </Link>
    </div>
  </header>
);

export default Navbar;
