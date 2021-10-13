
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { readFromLocalStorage } from '../../infra/api/localStorage';
import { editOfficeBranch } from '../../stores/actions/backoffice/officebranchActions';
import { EditOfficeBranch } from '../../views/pages/backoffice/EditOfficeBranch';
import { hideNotification as hideNotificationAction } from '../../stores/actions';

export const OfficeBranchEditContainer = () => {
    const officeBranch = readFromLocalStorage("officeBranch")
    const loading = useSelector(state => state.isLoading);
    const userId = useSelector(state => state.userMe.id)
    const notification = useSelector(state => state.notification);
    const dispatch = useDispatch();
    const onEdit = useCallback(() => {
        dispatch(editOfficeBranch(userId, officeBranch));
    }, [dispatch]);
    const hideNotification = useCallback(() => {
        dispatch(hideNotificationAction())
    }, [dispatch])
    console.log("EDIT OFFICE BRANCH")
    return <EditOfficeBranch
        edit={onEdit}
        officeBranch={officeBranch}
        loading={loading}
        notification={notification}
        hideNotification={hideNotification}
    />;
};
