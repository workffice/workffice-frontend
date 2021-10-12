import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { OfficeBranch } from '../../components/OfficeBranch/OfficeBranch';
import { officeBranchList } from '../../stores/actions/backoffice/officebranchActions';

export const OfficeBranchContainer = () => {
  const loading = useSelector(state => state.isLoading);
  const notification = useSelector(state => state.notification);
  const userMe = useSelector(state => state.userMe)
  const dispatch = useDispatch();
  const loadBranches = useCallback(async (userId) => {
    await dispatch(officeBranchList(userId));
  }, []);
  const branches = useSelector(state => state.officeBranches);
  return <OfficeBranch
    loadBranches={loadBranches}
    branches={branches}
    userMe={userMe}
    loading={loading}
    notification={notification}
  />;
};
