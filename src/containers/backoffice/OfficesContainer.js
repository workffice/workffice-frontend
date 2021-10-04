import React from 'react';
import { useSelector } from 'react-redux';
import { OfficesListComponent } from '../../components/Offices/OfficesListComponent';



export const OfficesContainer = () => {
    const loading = useSelector(state => state.isLoading);
    const error = useSelector(state => state.error);
    const userMe = useSelector(state => state.userMe)
    const branch = useSelector(state => state.officeBranch);
    const offices = useSelector(state => state.offices)
    return <OfficesListComponent offices={offices} branch={branch} userMe={userMe} loading={loading} error={error} />;
};
