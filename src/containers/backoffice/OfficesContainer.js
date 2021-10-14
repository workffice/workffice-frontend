import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { OfficesListComponent } from '../../components/Offices/OfficesListComponent';
import { readFromLocalStorage } from '../../infra/api/localStorage';
import { getOfficeBranchId } from '../../stores/actions/backoffice/officebranchActions';
import { fetchOfficesList } from '../../stores/actions/backoffice/officesActions';

export const OfficesContainer = () => {
  const loading = useSelector(state => state.isLoading);
  const error = useSelector(state => state.error);
  const userMe = useSelector(state => state.userMe)
  const officeBranch = useSelector(state => state.officeBranch);
  const dispatch = useDispatch();
  const loadOfficeBranch = useCallback(() => {
    dispatch(getOfficeBranchId(readFromLocalStorage("officeBranch").id))
  }, [dispatch])
  const offices = useSelector(state => state.offices)
  const loadOffices = useCallback(() => {
    dispatch(fetchOfficesList(readFromLocalStorage("officeBranch").id))
  }, [dispatch])
  return <OfficesListComponent
    offices={offices}
    officeBranch={officeBranch}
    userMe={userMe}
    loading={loading}
    error={error}
    loadOfficeBranch={loadOfficeBranch}
    loadOffices={loadOffices}
  />;
};
