

import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { NewOffice } from '../../components/Offices/NewOffice';
import { createOffice } from '../../stores/actions/backoffice/officesActions';
import { getUserMe } from '../../stores/actions/backoffice/userActions';

export const OfficeCreateContainer = () => {
    const dispatch = useDispatch();
    const error = useSelector(state => state.error);
    React.useEffect(()=>{
        dispatch(getUserMe());
    },[dispatch])
    const loading = useSelector(state => state.loading);
    const branch = useSelector(state => state.officeBranch);
    const office = useSelector(state => state.office);
    const onCreate = useCallback((office) => {
        dispatch(createOffice(branch.data.id, office))
    }, []);

    return <NewOffice create={onCreate} office={office} branch={branch} error={error} loading={loading} />
}
