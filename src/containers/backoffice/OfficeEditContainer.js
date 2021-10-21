import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { EditOffice } from '../../components/Offices/EditOffice'
import { getOffice } from '../../stores/actions/backoffice/office/officeActions'


export const OfficeEditContainer = () => {
    const dispatch = useDispatch()
    const office = useSelector(state => state.office)
    const loading = useSelector(state => state.loadingOffice)
    const loadOffice = useCallback(officeId => {
        dispatch(getOffice(officeId))
    }, [dispatch])
    return <EditOffice office={office} loadOffice={loadOffice} loading={loading} />
}
