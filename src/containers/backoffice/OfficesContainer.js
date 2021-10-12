import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { OfficesListComponent } from '../../components/Offices/OfficesListComponent';
import { readFromLocalStorage } from '../../infra/api/localStorage';
import { fetchOfficesList } from '../../stores/actions/backoffice/officesActions';



export const OfficesContainer = () => {
  const loading = useSelector(state => state.isLoading);
  const userMe = useSelector(state => state.userMe)
  const branch = useSelector(state => state.officeBranch ? state.officeBranch.data : readFromLocalStorage("officeBranch"));
  const dispatch = useDispatch();
  const loadOffices = useCallback(async (officeBranchId) => {
    await dispatch(fetchOfficesList(officeBranchId));
  }, []);
  const offices = useSelector(state => state.offices)
  return <OfficesListComponent
    loadOffices={loadOffices}
    offices={offices}
    branch={branch}
    userMe={userMe}
    loading={loading}
  />;
};
