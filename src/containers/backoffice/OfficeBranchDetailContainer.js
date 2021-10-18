import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOfficesList } from '../../stores/actions/backoffice/office/officesActions';
import { OfficeBranchDetail } from '../../components/OfficeBranch/OfficeBranchDetail'
import { getOfficeBranchSearch } from '../../stores/actions/backoffice/officeBranchActions';
import { readFromLocalStorage } from '../../infra/api/localStorage';

export const OfficeBranchDetailContainer = () => {
    const dispatch = useDispatch();
    const officeBranch = useSelector(state => state.officeBranchSearch)
    const officeBranchIdAdmin = readFromLocalStorage("officeBranch").id
    const loadOfficeBranch = useCallback(officeBranchId => {
        dispatch(getOfficeBranchSearch(officeBranchId));
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
