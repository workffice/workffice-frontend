import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Dashboard from '../../components/Dashboard/Dashboard';
import { readFromLocalStorage } from '../../infra/api/localStorage';
import { collaboratorsList } from '../../stores/actions/backoffice/collaborator/collaboratorsAction';
import { fetchOfficesList } from '../../stores/actions/backoffice/office/officesActions';
import { amountPerYear, booking } from '../../stores/actions/backoffice/reports/reportsActions';

export const DashboardContainer = () => {
    const dispatch = useDispatch();
    const officeBranch = readFromLocalStorage("officeBranch");
    // Collaborators
    const loadCollaborators = useCallback(() => {
        dispatch(collaboratorsList(officeBranch.id));
    }, [dispatch]);
    const collaborators = useSelector(state => state.collaborators);
    // Offices
    const loadOffices = useCallback(() => {
        dispatch(fetchOfficesList(officeBranch.id));
    }, [dispatch]);
    const offices = useSelector(state => state.offices);
    // Reports
    const reports = useSelector(state => state.reports.reports);
    const loadAmountPerMonth = useCallback(async (officeBranchId, year) => {
        await dispatch(amountPerYear(officeBranchId, year));
    }, [dispatch]);
    const loadAmountPerOffice = useCallback(async (officeBranchId, month) => {
        await dispatch(loadAmountPerOffice(officeBranchId, month));
    }, [dispatch]);
    const loadBookingsQuantityPerOffice = useCallback(async (officeBranchId, month) => {
        await dispatch(booking(officeBranchId, month));
    }, [dispatch]);

    return <Dashboard
        officeBranch={officeBranch}
        loadCollaborators={loadCollaborators}
        collaborators={collaborators}
        loadOffices={loadOffices}
        offices={offices}
        reports={reports}
        loadBookingsQuantityPerOffice={loadBookingsQuantityPerOffice}
        loadAmountPerMonth={loadAmountPerMonth}
        loadAmountPerOffice={loadAmountPerOffice}
    />;
};
