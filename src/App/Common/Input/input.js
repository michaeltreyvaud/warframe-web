import React from 'react';
import PropTypes from 'prop-types';
import './input.css';

const Input = ({
  name, type, placeholder, autoComplete, onChange,
}) => (
  <input className="input" type={type} name={name} placeholder={placeholder} autoComplete={autoComplete} onChange={onChange} />
);

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  autoComplete: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
