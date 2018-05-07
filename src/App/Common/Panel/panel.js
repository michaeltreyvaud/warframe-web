import React from 'react';
import PropTypes from 'prop-types';
import './panel.css';

const Panel = ({ title, children }) => (
  <div className="panel">
    {title &&
      <div className="panel-heading">
        <p>{title}</p>
      </div>}
    <div className="panel-body">
      {children}
    </div>
  </div>
);

Panel.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any.isRequired,
};

Panel.defaultProps = {
  title: null,
};

export default Panel;
