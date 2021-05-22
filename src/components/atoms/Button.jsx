import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ buttonName }, props) => (
  <button {...props}>{buttonName}</button>
);

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
};

export default Button;
