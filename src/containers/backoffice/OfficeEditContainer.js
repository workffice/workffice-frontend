import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { EditOffice } from '../../components/Offices/EditOffice'
import { getOffice } from '../../stores/actions/backoffice/office/officeActions'
import { getOfficeInactivities } from '../../stores/actions/backoffice/office/officeInactivitiesAction'


export const OfficeEditContainer = () => {
    const dispatch = useDispatch()
    const office = useSelector(state => state.office)
    const loading = useSelector(state => state.loadingOffice)
    const loadOffice = useCallback(officeId => {
        dispatch(getOffice(officeId))
    }, [dispatch])
    const inactivities = useSelector(state => state.officeInactivities)
    const loadInactivities = useCallback(officeId => {
        dispatch(getOfficeInactivities(officeId))
    }, [dispatch])
    return <EditOffice
        office={office}
        loadOffice={loadOffice}
        loading={loading}
        inactivities={inactivities}
        loadInactivities={loadInactivities}
    />
}
