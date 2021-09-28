
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { editOfficeBranch, getOfficeBranchId } from '../../stores/actions/backoffice/officebranchActions';
import { EditOfficeBranch } from '../../views/pages/backoffice/EditOfficeBranch';


export const OfficeBranchEditContainer = () => {
    let { id } = useParams();
    const loading = useSelector(state => state.isLoading);
    const userId = useSelector(state => state.userMe.id)
    const error = useSelector(state => state.error);
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(getOfficeBranchId(id));
    }, []);
    const officeBranch = useSelector(state => state.officeBranch);
    const onEdit = useCallback(() => {
        dispatch(editOfficeBranch(userId));
    }, [dispatch]);
    return <EditOfficeBranch edit={onEdit} officeBranch={officeBranch} loading={loading} error={error} />;
};
