import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { NewCollaborator } from '../components/Colaborator/NewCollaborator';
import { createColaborator } from '../stores/actions/backoffice/createColaboratorAction';

export const CollaboratorContainer = () => {
  const loading = useSelector(state => state.isLoading);
  const error = useSelector(state => state.error);
  const officeBranches = useSelector(state => state.officeBranches);
  const dispatch = useDispatch();
  const onCreateColaborator = useCallback((colaboratorData, officeBranchId) => {
    dispatch(createColaborator(colaboratorData, officeBranchId));
  }, []);
  return <NewCollaborator onCreateColaborator={onCreateColaborator} officeBranches={officeBranches} loading={loading} error={error} />;
};
