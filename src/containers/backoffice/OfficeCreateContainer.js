

import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { NewOffice } from '../../components/Offices/NewOffice';
import { readFromLocalStorage } from '../../infra/api/localStorage';
import { createOffice } from '../../stores/actions/backoffice/office/officesActions';
import { getUserMe } from '../../stores/actions/backoffice/userActions';

export const OfficeCreateContainer = () => {
    const dispatch = useDispatch();
    const notification = useSelector(state => state.notification);
    React.useEffect(() => {
        dispatch(getUserMe());
    }, [dispatch])
    const loading = useSelector(state => state.loading);
    const branch = useSelector(() => readFromLocalStorage("officeBranch"));
    const office = useSelector(state => state.office);
    const onCreate = useCallback((officeBranchId, office) => {
        dispatch(createOffice(officeBranchId, office));
    }, []);

    return <NewOffice
        create={onCreate}
        office={office}
        branch={branch}
        notification={notification}
        loading={loading}
    />
}
