import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../stores/actions/backoffice/userActions';
import { readFromLocalStorage } from '../infra/api/localStorage';
import { collaboratorsList } from '../stores/actions/backoffice/collaboratorsAction';
import UserProfile from '../views/pages/backoffice/UserProfile';
import { hideNotification as hideNotificationAction } from '../stores/actions'

export const UserProfileContainer = () => {
    const userMe = useSelector(state => state.userMe)
    const notification = useSelector(state => state.notification)
    const hideNotification = useCallback(async () => {
        await dispatch(hideNotificationAction())
    }, [dispatch])
    const dispatch = useDispatch()
    const branch = useSelector(() => readFromLocalStorage("officeBranch"));
    const loadCollaborators = useCallback(async officeBranchId => {
        await dispatch(collaboratorsList(officeBranchId))
    }, [dispatch])
    const collaborators = useSelector(state => {
        return state.collaborators
    });
    const onUpdate = useCallback((id, userData) => {
        dispatch(updateUser(id, userData));
    }, [dispatch]);

    return <UserProfile
        notification={notification}
        hideNotification={hideNotification}
        officeBranch={branch}
        collaborators={collaborators}
        loadCollaborators={loadCollaborators}
        userMe={userMe}
        onUpdate={userData => onUpdate(userMe.id, userData)}
    />;
};
