import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { OfficesSearch } from '../../components/Offices/OfficesSearch';
import { searchAllOffices } from '../../stores/actions/backoffice/officesFoundAction';



export const OfficesSearchContainer = () => {
    const loading = useSelector(state => state.isLoading);
    const error = useSelector(state => state.error);
    const dispatch = useDispatch()
    // const userMe = useSelector(state => state.userMe)
    // const branch = useSelector(state => state.officeBranch);
    const offices = useSelector(state => state.officesFound)
    const search = useCallback((values)=>{
        dispatch(searchAllOffices(values));
    });
    return <OfficesSearch search={search} offices={offices} loading={loading} error={error} />;
};
