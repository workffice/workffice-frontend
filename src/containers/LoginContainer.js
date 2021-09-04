import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { userLogin } from '../stores/actions/auth/loginActions';
import Login from '../views/pages/authentication/Login';

export const LoginContainer = () => {
  const loading = useSelector(state => state.isLoading);
  const error = useSelector(state => state.error);
  const dispatch = useDispatch();
  const onLogin = useCallback(credentials => {
    dispatch(userLogin(credentials));
  }, []);
  return <Login onLogin={onLogin} loading={loading} error={error} />;
};
