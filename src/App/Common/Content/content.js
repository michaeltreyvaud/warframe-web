import React from 'react';
import PropTypes from 'prop-types';

const Styles = left => ({
  main: {
    position: 'fixed',
    top: '55px',
    overflow: 'auto',
    maxHeight: '100%',
    bottom: '0px',
    right: '0px',
    left: (left) ? '220px' : '0px',
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
  },
});

const Content = ({ children, containsAside }) => {
  const Style = Styles(containsAside).main;
  return (
    <section style={Style}>
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
