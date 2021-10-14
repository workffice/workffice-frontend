
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { readFromLocalStorage } from '../../infra/api/localStorage';
import { editOfficeBranch, getOfficeBranchId } from '../../stores/actions/backoffice/officebranchActions';
import { EditOfficeBranch } from '../../views/pages/backoffice/EditOfficeBranch';
import { hideNotification as hideNotificationAction } from '../../stores/actions';

export const OfficeBranchEditContainer = () => {
    const officeBranchSelected = readFromLocalStorage("officeBranch")
    const notification = useSelector(state => state.notification);
    const officeBranch = useSelector(state => state.officeBranch)
    const dispatch = useDispatch();
    const loadOfficeBranch = useCallback(() => {
        dispatch(getOfficeBranchId(officeBranchSelected.id))
    }, [dispatch])
    const onEdit = useCallback(officeBranchBody => {
        dispatch(editOfficeBranch(officeBranchSelected.id, officeBranchBody));
    }, [dispatch]);
    const hideNotification = useCallback(() => {
        dispatch(hideNotificationAction())
    }, [dispatch])
    return <EditOfficeBranch
        edit={onEdit}
        officeBranch={officeBranch}
        notification={notification}
        hideNotification={hideNotification}
        loadOfficeBranch={loadOfficeBranch}
    />;
};
