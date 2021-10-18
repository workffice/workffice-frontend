import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cleanOfficeBranchAction, getOfficeBranch } from '../../stores/actions/backoffice/officeBranch/officeBranchAdminActions';
import { OfficeBranchSelect } from '../../views/pages/backoffice/OfficeBranchSelect';

export const OfficeBranchSelectContainer = () => {
    const dispatch = useDispatch();
    const selectOfficeBranch = useCallback(async (officeBranchId) => {
        await dispatch(getOfficeBranch(officeBranchId));
    }, [dispatch]);
    const cleanOfficeBranch = useCallback(async () => {
        await dispatch(cleanOfficeBranchAction())
    }, [dispatch])
    const officeBranches = useSelector(state => state.officeBranches);
    const officeBranch = useSelector(state => state.officeBranch);
    return <OfficeBranchSelect
        selectOfficeBranch={selectOfficeBranch}
        branches={officeBranches}
        currentOfficeBranch={officeBranch}
        cleanOfficeBranch={cleanOfficeBranch}
    />;
};
