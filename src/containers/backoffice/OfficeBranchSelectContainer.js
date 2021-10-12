import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOfficeBranchId } from '../../stores/actions/backoffice/officebranchActions';
import { OfficeBranchSelect } from '../../views/pages/backoffice/OfficeBranchSelect';

export const OfficeBranchSelectContainer = () => {
    const loading = useSelector(state => state.isLoading);
    const dispatch = useDispatch();
    const selectOfficeBranch = useCallback(async (officeBranchId) => {
        await dispatch(getOfficeBranchId(officeBranchId));
    }, [dispatch]);
    const branches = useSelector(state => state.officeBranches);
    return <OfficeBranchSelect selectOfficeBranch={selectOfficeBranch} branches={branches} loading={loading} />;
};
