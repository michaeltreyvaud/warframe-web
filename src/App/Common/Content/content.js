import React from 'react';
import PropTypes from 'prop-types';
import './content.css';

const Content = ({ children, containsAside }) => {
  const className = (containsAside) ? 'content-aside' : 'content-no-aside';
  return (
    <section className={className}>
      {children}
    </section>
  );
};

Content.propTypes = {
  containsAside: PropTypes.bool,
  children: PropTypes.any.isRequired,
};

Content.defaultProps = {
  containsAside: false,
};

export default Content;
