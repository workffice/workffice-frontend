import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Dashboard from '../../components/Dashboard/Dashboard';
import { readFromLocalStorage } from '../../infra/api/localStorage';
import { collaboratorsList } from '../../stores/actions/backoffice/collaborator/collaboratorsAction';
import { fetchOfficesList } from '../../stores/actions/backoffice/office/officesActions';
import { hideNotificationAction } from '../../stores/actions/notifications/writeNotificationActions'

export const DashboardContainer = () => {
    const loading = useSelector(state => state.isLoading);
    const notification = useSelector(state => state.notification);
    const dispatch = useDispatch();
    const hideNotification = useCallback(async () => {
        await dispatch(hideNotificationAction())
    })
    const userMe = useSelector(state => state.userMe)
    const branch = readFromLocalStorage("officeBranch");
    React.useEffect(async () => {
        await dispatch(fetchOfficesList(branch.id));
    }, [dispatch])
    React.useEffect(async () => {
        await dispatch(collaboratorsList(branch.id));
    }, []);
    // const loadBranches = useCallback(async (userId) => {
    //     await dispatch(officeBranchList(userId));
    // }, []);
    const collaborators = useSelector(state => state.collaborators);
    const offices = useSelector(state => state.offices);
    return <Dashboard
        offices={offices}
        collaborators={collaborators}
        branch={branch}
        userMe={userMe}
        loading={loading}
        notification={notification}
        hideNotification={hideNotification}
    />;
};
