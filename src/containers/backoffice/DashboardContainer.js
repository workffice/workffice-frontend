import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Dashboard from '../../components/Dashboard/Dashboard';
import { readFromLocalStorage } from '../../infra/api/localStorage';
import { collaboratorsList } from '../../stores/actions/backoffice/collaborator/collaboratorsAction';
import { fetchOfficesList } from '../../stores/actions/backoffice/office/officesActions';
import { amountPerOffice, amountPerYear, booking } from '../../stores/actions/backoffice/reports/reportsActions';
import { hideNotificationAction } from '../../stores/actions/notifications/writeNotificationActions'
import { monthFilter, yearFilter } from '../../utils/filters';

export const DashboardContainer = () => {
    const loading = useSelector(state => state.isLoading);
    const notification = useSelector(state => state.notification);
    const dispatch = useDispatch();
    const date = new Date().getMonth();
    const year = new Date().getFullYear();
    const hideNotification = useCallback(async () => {
        await dispatch(hideNotificationAction())
    })
    const userMe = useSelector(state => state.userMe)
    const branch = readFromLocalStorage("officeBranch");
    React.useEffect(async () => {
        await dispatch(fetchOfficesList(branch.id));
    }, [dispatch])
    React.useEffect(async () => {
        await dispatch(collaboratorsList(branch.id));
    }, []);
    React.useEffect(() => {
        dispatch(amountPerOffice(branch.id, monthFilter[date].value));
    }, [dispatch]);
    React.useEffect(() => {
        dispatch(booking(branch.id, monthFilter[date].value));
    }, [dispatch]);
    React.useEffect(() => {
        dispatch(amountPerYear(branch.id, yearFilter.find(yearF => yearF.value == year).value));
    }, [dispatch]);
    const amountYear = React.useCallback(async (officeBranchId, year) => {
        await dispatch(amountPerYear(officeBranchId, year));
    }, [dispatch]);
    const amountOffice = React.useCallback(async (officeBranchId, month) => {
        await dispatch(amountPerOffice(officeBranchId, month));
    }, [dispatch]);
    const bookingOffice = React.useCallback(async (officeBranchId, month) => {
        await dispatch(booking(officeBranchId, month));
    }, [dispatch]);
    const collaborators = useSelector(state => state.collaborators);
    const offices = useSelector(state => state.offices);
    const reports = useSelector(state => state.reports.reports);

    return <Dashboard
        offices={offices}
        collaborators={collaborators}
        branch={branch}
        userMe={userMe}
        loading={loading}
        notification={notification}
        hideNotification={hideNotification}
        reports={reports}
        bookingOffice={bookingOffice}
        amountYear={amountYear}
        amountPerOffice={amountOffice}
    />;
};
