import React from 'react';
import PropTypes from 'prop-types';

const Styles = {
  panel: {
    margin: '10px',
    backgroundColor: '#fff',
    border: '1px solid transparent',
    borderRadius: '4px',
    borderColor: '#cfdbe2',
  },
  panelHeading: {
    padding: '15px',
  },
  panelBody: {
    padding: '15px',
  },
  form: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  input: {
    fontSize: '14px',
    lineHeight: '1.52857',
    color: '#3a3f51',
    backgroundColor: '#fff',
    backgroundImage: 'none',
    border: '1px solid #dde6e9',
    borderRadius: '4px',
    marginBottom: '10px',
    padding: '6px 16px',
  },
};
const Panel = ({ title, children }) => (
  <div style={Styles.panel}>
    <div style={Styles.panelHeading}>
      <span>{title}</span>
    </div>
    <div style={Styles.panelBody}>
      {children}
    </div>
  </div>
);

Panel.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};
export default Panel;
