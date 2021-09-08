import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { NewColaborator } from '../components/Colaborator/NewColaborator';
import { createColaborator } from '../stores/actions/backoffice/createColaboratorAction';

export const ColaboratorContainer = () => {
  const loading = useSelector(state => state.isLoading);
  const error = useSelector(state => state.error);
  const dispatch = useDispatch();
  const onCreateColaborator = useCallback(credentials => {
    dispatch(createColaborator(credentials));
  }, []);
  return <NewColaborator onCreateColaborator={onCreateColaborator} loading={loading} error={error} />;
};
