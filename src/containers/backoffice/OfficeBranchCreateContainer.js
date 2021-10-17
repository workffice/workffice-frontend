import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createOfficeBranch } from '../../stores/actions/backoffice/officeBranchActions';
import { CreateOfficeBranch } from '../../views/pages/backoffice/CreateOfficeBranch';
import { hideNotification as hideNotificationAction } from '../../stores/actions'

export const OfficeBranchCreateContainer = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.userMe)
    const notification = useSelector(state => state.notification);
    const hideNotification = useCallback(async () => {
        await dispatch(hideNotificationAction())
    }, [dispatch])
    const onCreate = useCallback(officeBranchData => {
        dispatch(createOfficeBranch(officeBranchData, user.id));
    }, [user]);
    return <CreateOfficeBranch
        hideNotification={hideNotification}
        onCreate={onCreate}
        notification={notification}
    />;
};
