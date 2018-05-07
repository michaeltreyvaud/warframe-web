import React from 'react';
import PropTypes from 'prop-types';
import './page.css';

const Page = ({ children }) => (
  <section className="main-page">
    {children}
  </section>
);

Page.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Page;
