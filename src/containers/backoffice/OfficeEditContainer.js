import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { EditOffice } from '../../components/Offices/EditOffice'
import { getOffice, updateOffice, deleteOffice } from '../../stores/actions/backoffice/office/officeActions'
import { getOfficeInactivities } from '../../stores/actions/backoffice/office/officeInactivitiesAction'
import { hideNotificationAction } from '../../stores/actions/notifications/writeNotificationActions'


export const OfficeEditContainer = () => {
    const dispatch = useDispatch()
    const office = useSelector(state => state.office)
    const notification = useSelector(state => state.notification)
    const hideNotification = useCallback(() => {
        dispatch(hideNotificationAction())
    }, [dispatch])
    const loading = useSelector(state => state.loadingOffice)
    const loadOffice = useCallback(officeId => {
        dispatch(getOffice(officeId))
    }, [dispatch])
    const update = useCallback((officeId, office) => {
        dispatch(updateOffice(officeId, office))
    }, [dispatch])
    const deleteOff = useCallback((officeId) => {
        dispatch(deleteOffice(officeId, office))
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
        update={update}
        notification={notification}
        hideNotification={hideNotification}
        deleteOffice={deleteOff}
    />
}
