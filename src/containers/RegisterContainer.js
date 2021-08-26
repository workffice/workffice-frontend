import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../stores/actions/auth/registerActions';
import Register from '../views/pages/authentication/Register';

export const RegisterContainer = () => {
  const loading = useSelector(state => state.isLoading);
  const error = useSelector(state => state.error);
  const dispatch = useDispatch();
  const onRegister = useCallback(credentials => {
    dispatch(register(credentials));
  }, []);
  return <Register onRegister={onRegister} loading={loading} error={error}/>;
};
