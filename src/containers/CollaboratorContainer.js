import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Collaborators } from '../components/Colaborator/Collaborators';
import { NewCollaborator } from '../components/Colaborator/NewCollaborator';
import { collaboratorsList } from '../stores/actions/backoffice/collaboratorsAction';
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


export const CollaboratorListContainer = () => {
  const dispatch = useDispatch();
    const loadCollaborators = useCallback(async (officeBranchId) => {
        await dispatch(collaboratorsList(officeBranchId));
      }, []);
    const collaborators = useSelector(state => {
      return state.collaborators
    });
    const officeBranch = useSelector(state => {
      return state.officeBranch
    });
  return <Collaborators officeBranch={officeBranch} loadCollaborators={loadCollaborators} collaborators={collaborators}></Collaborators>
}