import React from 'react';
import PropTypes from 'prop-types';
import './formSubmit.css';

const FormSubmit = ({ title }) => (
  <button className="btn-form-submit" type="submit">{title}</button>
);

FormSubmit.propTypes = {
  title: PropTypes.string.isRequired,
};

export default FormSubmit;
