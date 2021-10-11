import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Collaborators } from '../components/Collaborator/Collaborators';
import { NewCollaborator } from '../components/Collaborator/NewCollaborator';
import { collaboratorsList } from '../stores/actions/backoffice/collaboratorsAction';
import { createColaborator } from '../stores/actions/backoffice/createCollaboratorAction';
import { readFromLocalStorage } from '../infra/api/localStorage';
import { collaboratorRolesList, rolesList } from '../stores/actions/backoffice/rolesAction';

export const CollaboratorContainer = () => {
  const loading = useSelector(state => state.isLoading);
  const error = useSelector(state => state.error);
  const officeBranches = useSelector(state => state.officeBranches);
  const dispatch = useDispatch();
  const onCreateColaborator = useCallback((collaboratorData, officeBranchId) => {
    dispatch(createColaborator(collaboratorData, officeBranchId));
  }, []);
  return <NewCollaborator onCreateColaborator={onCreateColaborator} officeBranches={officeBranches} loading={loading} error={error} />;
};


export const CollaboratorListContainer = () => {
  const dispatch = useDispatch();
  const loadCollaborators = useCallback(async (officeBranchId) => {
    await dispatch(collaboratorsList(officeBranchId));
  }, []);
  const collaborators = useSelector(state => state.collaborators);
  const officeBranchRoles = useSelector(state => state.roles);
  const loadOfficeBranchRoles = useCallback(async (officeBranchId) => {
    await dispatch(rolesList(officeBranchId));
  }, []);
  const officeBranch = useSelector(() => readFromLocalStorage("officeBranch"));
  const loadCollaboratorRoles = useCallback(async collaboratorId => {
    await dispatch(collaboratorRolesList(collaboratorId));
  }, {});
  const collaboratorRoles = useSelector(state => state.collaboratorRoles);
  return <Collaborators
    officeBranch={officeBranch}
    loadCollaborators={loadCollaborators}
    officeBranchRoles={officeBranchRoles}
    loadOfficeBranchRoles={loadOfficeBranchRoles}
    collaborators={collaborators}
    loadCollaboratorRoles={loadCollaboratorRoles}
    collaboratorRoles={collaboratorRoles}
  />
}