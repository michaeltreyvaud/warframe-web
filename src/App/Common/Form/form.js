import React from 'react';
import PropTypes from 'prop-types';
import './form.css';

const Form = ({ children, onSubmit }) => (
  <form className="form" onSubmit={onSubmit}>
    {children}
  </form>
);

Form.propTypes = {
  children: PropTypes.any.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
