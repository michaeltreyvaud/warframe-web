import React from 'react';
import PropTypes from 'prop-types';
import './header.css';

const Header = ({ title }) => (
  <section className="page-header">
    <h1>{title}</h1>
  </section>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
