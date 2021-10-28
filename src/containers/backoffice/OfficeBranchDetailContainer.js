import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { OfficeBranchDetail } from '../../components/OfficeBranch/OfficeBranchDetail';
import { readFromLocalStorage } from '../../infra/api/localStorage';
import { fetchOfficesList } from '../../stores/actions/backoffice/office/officesActions';
import { getOfficeBranchDetail } from '../../stores/actions/backoffice/officeBranch/officeBranchDetailActions';

export const OfficeBranchDetailContainer = () => {
    const dispatch = useDispatch();
    const officeBranch = useSelector(state => state.officeBranchDetail)
    const officeBranchIdAdmin = readFromLocalStorage("officeBranch").id
    const loadOfficeBranch = useCallback(officeBranchId => {
        dispatch(getOfficeBranchDetail(officeBranchId));
    }, [dispatch]);
    const loadOffices = useCallback(officeBranchId => {
        dispatch(fetchOfficesList(officeBranchId));
    }, [dispatch]);
    const offices = useSelector(state => state.offices)
    const loadingOffices = useSelector(state => state.loadingOffice);
    const error = useSelector(state => state.entitiesNotFound.includes("officeBranch"))
    return <OfficeBranchDetail
        officeBranch={officeBranch}
        offices={offices}
        loadOffices={loadOffices}
        loadOfficeBranch={loadOfficeBranch}
        officeBranchIdAdmin={officeBranchIdAdmin}
        loadingOffices={loadingOffices}
        error={error}
    />;
};
