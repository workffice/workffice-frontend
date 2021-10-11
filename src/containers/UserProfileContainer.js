import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../infra/api/backoffice/users';
import { readFromLocalStorage } from '../infra/api/localStorage';
import { collaboratorsList } from '../stores/actions/backoffice/collaboratorsAction';
import UserProfile from '../views/pages/backoffice/UserProfile';

export const UserProfileContainer = () => {
    const userMe = useSelector(state => state.userMe)
    const dispatch = useDispatch()
    const branch = useSelector(() => readFromLocalStorage("officeBranch"));
    const loadCollaborators = useCallback(async officeBranchId => {
        await dispatch(collaboratorsList(officeBranchId))
    }, [])
    const collaborators = useSelector(state => {
        return state.collaborators
    });
    const onUpdate = useCallback((id, userData) => {
        dispatch(updateUser(id, userData));
    }, []);

    return <UserProfile
        officeBranch={branch}
        collaborators={collaborators}
        loadCollaborators={loadCollaborators}
        userMe={userMe}
        onUpdate={userData => onUpdate(userMe.id, userData)}
    />;
};
