import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { OfficesListComponent } from '../../components/Offices/OfficesListComponent';
import { fetchOfficesList } from '../../stores/actions/backoffice/officesActions';


export const OfficesContainer = () => {
    const loading = useSelector(state => state.isLoading);
    const error = useSelector(state => state.error);
    const userMe = useSelector(state => state.userMe)
    const branch = useSelector(state => state.officeBranch);
    const dispatch = useDispatch();
    const offices = React.useEffect(()=>{
        dispatch(fetchOfficesList())
    },[])
    return <OfficesListComponent offices={offices} branch={branch} userMe={userMe} loading={loading} error={error} />;
};
