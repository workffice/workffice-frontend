import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { userLogin } from '../stores/actions/auth/loginActions';
import Login from '../views/pages/authentication/Login';

export const LoginContainer = () => {
  const dispatch = useDispatch();
  const onLogin = useCallback(credentials => {
    dispatch(userLogin(credentials));
  }, []);
  return <Login onLogin={onLogin} />;
};
