import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

const Input = ({ type, placeholder }, props) => {
  return <input type={type} placeholder={placeholder} {...props}></input>;
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;
