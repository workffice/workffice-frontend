import React from 'react';
import PropTypes from 'prop-types';
import Input from '../atoms/Input';
import Label from '../atoms/Label';
import Link from '../atoms/Link';

const FormInput = ({ labelName, link, href, type, placeholder }) => {
  return (
    <FormInput>
      <Label name={labelName} />
      <Link name={link} href={href} />
      <br />
      <Input type={type} placeholder={placeholder} />
    </FormInput>
  );
};

FormInput.propTypes = {
  labelName: PropTypes.string.isRequired,
  link: PropTypes.string,
  href: PropTypes.string,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default FormInput;
