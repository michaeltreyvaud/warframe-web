import React from 'react';

const Styles = {
  container: {
    border: 0,
    backgroundColor: '#23b7e5',
    backgroundImage: 'linear-gradient(to right, #23b7e5 0%, #51c6ea 100%)',
    height: '55px',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.15)',
  },
  header: {
    padding: '20px',
    fontFamily: '"Source Sans Pro", sans-serif',
    color: '#FFFFFF',
  },
};

const Navbar = () => (
  <header style={Styles.container}>
    <div style={Styles.header}>
      <span>Warframe</span>
    </div>
  </header>
);

export default Navbar;
