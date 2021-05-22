import React from 'react';
import PropTypes from 'prop-types';
import './Link.css';

const Link = ({ name, href }) => {
  <a href={href} name={name}>
    {name}
  </a>;
};

Link.propTypes = {
  name: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default Link;
