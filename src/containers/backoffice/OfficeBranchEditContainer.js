import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createOfficeBranch } from '../../stores/actions/backoffice/officebranchActions';
import { CreateOfficeBranch } from '../../views/pages/backoffice/CreateOfficeBranch';

export const OfficeBranchCreateContainer = () => {
    const loading = useSelector(state => state.isLoading);
    const userId = useSelector(state=>state.userMe.id)
    const error = useSelector(state => state.error);
    const dispatch = useDispatch();
    const onCreate = useCallback(officeBranchData => {
        dispatch(createOfficeBranch(officeBranchData, userId));
    }, []);
    return <CreateOfficeBranch onCreate={onCreate} loading={loading} error={error} />;
};