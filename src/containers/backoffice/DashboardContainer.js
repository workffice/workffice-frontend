import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Dashboard from '../../components/Dashboard/Dashboard';
import { readFromLocalStorage } from '../../infra/api/localStorage';
import { collaboratorsList } from '../../stores/actions/backoffice/collaborator/collaboratorsAction';
import { fetchOfficesList } from '../../stores/actions/backoffice/office/officesActions';
import { amountPerOffice, amountPerYear, booking } from '../../stores/actions/backoffice/reports/reportsActions';

export const DashboardContainer = () => {
    const dispatch = useDispatch();
    const officeBranch = readFromLocalStorage("officeBranch");
    const permission = useSelector(state => state.permission)
    const isLoading = useSelector(state => state.isLoading)
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
    const revenuePerMonth = useSelector(state => state.reports.reports.reportOfficeYear);
    const revenuePerOffice = useSelector(state => state.reports.reports.reportPerOffice);
    const bookingsQuantityPerOffice = useSelector(state => state.reports.reports.reportOfficeBooking);
    const loadRevenuePerMonth = useCallback(year => {
        dispatch(amountPerYear(officeBranch.id, year));
    }, [dispatch]);
    const loadRevenuePerOffice = useCallback(month => {
        dispatch(amountPerOffice(officeBranch.id, month));
    }, [dispatch]);
    const loadBookingsQuantityPerOffice = useCallback(month => {
        dispatch(booking(officeBranch.id, month));
    }, [dispatch]);

    return <Dashboard
        officeBranch={officeBranch}
        loadCollaborators={loadCollaborators}
        collaborators={collaborators}
        loadOffices={loadOffices}
        offices={offices}
        reports={reports}
        loadBookingsQuantityPerOffice={loadBookingsQuantityPerOffice}
        bookingsQuantityPerOffice={bookingsQuantityPerOffice}
        loadRevenuePerMonth={loadRevenuePerMonth}
        revenuePerMonth={revenuePerMonth}
        loadRevenuePerOffice={loadRevenuePerOffice}
        revenuePerOffice={revenuePerOffice}
        permission={permission}
        isLoading={isLoading}
    />;
};
