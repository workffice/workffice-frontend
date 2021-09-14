import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { NewColaborator } from '../components/Colaborator/NewColaborator';
import { createColaborator } from '../stores/actions/backoffice/createColaboratorAction';

export const ColaboratorContainer = () => {
  const loading = useSelector(state => state.isLoading);
  const error = useSelector(state => state.error);
  const officeBranches = useSelector(state => state.officeBranch);
  const dispatch = useDispatch();
  const onCreateColaborator = useCallback((colaboratorData, officeBranchId) => {
    dispatch(createColaborator(colaboratorData, officeBranchId));
  }, []);
  return <NewColaborator onCreateColaborator={onCreateColaborator} officeBranches={officeBranches} loading={loading} error={error} />;
};
