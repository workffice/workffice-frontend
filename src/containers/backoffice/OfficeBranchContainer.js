import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { OfficeBranch } from '../../components/OfficeBranch/OfficeBranch';
import { officeBranchList } from '../../stores/actions/backoffice/officebranchActions';

export const OfficeBranchContainer = () => {
    const loading = useSelector(state => state.isLoading);
    const error = useSelector(state => state.error);
    const userMe = useSelector(state => state.userMe)
    const dispatch = useDispatch();
    const loadBranches = useCallback(async (userId) => {
        await dispatch(officeBranchList(userId));
      }, []);
    const branches = useSelector(state => state.officeBranch);
    console.log(branches);
    return <OfficeBranch loadBranches={loadBranches} branches={branches} userMe={userMe} loading={loading} error={error} />;
};
