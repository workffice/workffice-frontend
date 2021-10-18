import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOfficesList } from '../../stores/actions/backoffice/office/officesActions';
import { OfficeBranchDetail } from '../../components/OfficeBranch/OfficeBranchDetail'

export const OfficeBranchDetailContainer = () => {
    const dispatch = useDispatch();
    const officeBranch = useSelector(state => state.officeBranch)
    const loadOffices = useCallback(officeBranchId => {
        dispatch(fetchOfficesList(officeBranchId));
    }, [dispatch]);
    const offices = useSelector(state => state.offices)
    return <OfficeBranchDetail
        officeBranch={officeBranch}
        offices={offices}
        loadOffices={loadOffices}
    />;
};
