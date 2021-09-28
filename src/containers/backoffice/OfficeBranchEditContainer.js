
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { editOfficeBranch } from '../../stores/actions/backoffice/officebranchActions';
import { EditOfficeBranch } from '../../views/pages/backoffice/EditOfficeBranch';


export const OfficeBranchEditContainer = () => {
    let { id } = useParams();
    // React.useEffect(async () => {
    //     await dispatch(getOfficeBranchId(id));
    // }, [dispatch]);
    const officeBranches = useSelector(state => state.officeBranches);
    const officeBranch = officeBranches.data.filter(officeBranch => officeBranch.id === id);
    const loading = useSelector(state => state.isLoading);
    const userId = useSelector(state => state.userMe.id)
    const error = useSelector(state => state.error);
    const dispatch = useDispatch();

    const onEdit = useCallback(() => {
        dispatch(editOfficeBranch(userId, officeBranch));
    }, [dispatch]);
    return <EditOfficeBranch edit={onEdit} officeBranch={officeBranch[0]} loading={loading} error={error} />;
};
