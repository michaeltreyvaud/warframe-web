import React from 'react';
import PropTypes from 'prop-types';
import './panel.css';

const Panel = ({ title, children }) => (
  <div className="panel">
    <div className="panel-heading">
      <p>{title}</p>
    </div>
    <div className="panel-body">
      {children}
    </div>
  </div>
);

Panel.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};
export default Panel;
