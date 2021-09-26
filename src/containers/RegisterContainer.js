import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../stores/actions/auth/registerActions';
import Register from '../views/pages/authentication/Register';

export const RegisterContainer = () => {
  const loading = useSelector(state => state.isLoading);
  const error = useSelector(state => state.error);
  const registerUser = useSelector(state => state.register);
  const dispatch = useDispatch();
  const onRegister = useCallback( async credentials => {
    await dispatch(register(credentials));
  }, [dispatch]);
  return <Register onRegister={onRegister} register={registerUser} loading={loading} error={error}/>;
};
