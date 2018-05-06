import React from 'react';
import PropTypes from 'prop-types';

const Styles = {
  panel: {
    margin: '10px',
    backgroundColor: '#fff',
    borderRadius: '4px',
    borderColor: '#cfdbe2',
  },
  panelHeading: {
    color: '#fff',
    backgroundColor: '#3a3f51',
    borderColor: '#3a3f51',
    padding: '15px',
    borderTopRightRadius: '4px',
    borderTopLeftRadius: '4px',
    p: {
      margin: '0px',
      padding: '0px',
      fontSize: '16px',
      textAlign: 'center',
    },
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
      <p style={Styles.panelHeading.p}>{title}</p>
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
