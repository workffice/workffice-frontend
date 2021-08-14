import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../stores/actions/auth/registerActions';
import Register from '../views/pages/authentication/Register';

export const RegisterContainer = () => {
  const dispatch = useDispatch();
  const onRegister = useCallback(credentials => {
    dispatch(register(credentials));
  }, []);
  return <Register onRegister={onRegister} />;
};
