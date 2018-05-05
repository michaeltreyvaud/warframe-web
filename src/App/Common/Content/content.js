import React from 'react';
import PropTypes from 'prop-types';

const Styles = {
  main: {
    position: 'fixed',
    top: '55px',
    width: '100%',
    overflow: 'auto',
    maxHeight: '100%',
    bottom: '0px',
  },
};
const Content = ({ children }) => (
  <section style={Styles.main}>
    {children}
  </section>);

Content.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Content;
