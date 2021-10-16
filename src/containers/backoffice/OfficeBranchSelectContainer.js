import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cleanOfficeBranchAction, getOfficeBranchId } from '../../stores/actions/backoffice/officeBranchActions';
import { OfficeBranchSelect } from '../../views/pages/backoffice/OfficeBranchSelect';

export const OfficeBranchSelectContainer = () => {
    const dispatch = useDispatch();
    const selectOfficeBranch = useCallback(async (officeBranchId) => {
        await dispatch(getOfficeBranchId(officeBranchId));
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
