
import React, { useCallback } from 'react';
import { /* useDispatch, */ useSelector } from 'react-redux';
import { EditOfficeBranch } from '../../views/pages/backoffice/EditOfficeBranch';
// import {editOfficeBranch} from '';

 export const OfficeBranchCreateContainer = () => {
    const loading = useSelector(state => state.isLoading);
    // const userId = useSelector(state => state.userMe.id)
    const error = useSelector(state => state.error);
    // const dispatch = useDispatch();
    const onEdit = useCallback(()=> {
        // dispatch(editOfficeBranch(userId));
    }, []);
    return <EditOfficeBranch edit={onEdit} loading={loading} error={error} />;
};
