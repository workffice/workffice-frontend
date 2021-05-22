import React from 'react';
import PropTypes from 'prop-types';
import './Label.css';

const Label = ({ name }, props) => (
  <label name={name} {...props}>
    {name}
  </label>
);

Label.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Label;
