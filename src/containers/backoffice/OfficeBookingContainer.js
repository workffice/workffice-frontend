import { includes } from 'lodash-es'
import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { OfficeBooking } from '../../components/OfficeBooking/OfficeBooking'
import { getOffice } from '../../stores/actions/backoffice/office/officeActions'
import { getOfficeInactivities } from '../../stores/actions/backoffice/office/officeInactivitiesAction'
import { bookOffice } from '../../stores/actions/booking/bookingActions'
import { hideNotificationAction } from '../../stores/actions/notifications/writeNotificationActions'

export const OfficeBookingContainer = () => {
    const dispatch = useDispatch()
    const loadOffice = useCallback(officeId => {
        dispatch(getOffice(officeId))
    }, [dispatch])
    const office = useSelector(state => state.office)
    const loadInactivities = useCallback(officeId => {
        dispatch(getOfficeInactivities(officeId))
    }, [dispatch])
    const inactivities = useSelector(state => state.officeInactivities)
    const hideNotification = useCallback(() => {
        dispatch(hideNotificationAction())
    }, [dispatch])
    const notification = useSelector(state => state.notification)
    const createBooking = useCallback((officeId, bookingBody) => {
        dispatch(bookOffice(officeId, bookingBody))
    }, [dispatch])
    const officeNotFound = useSelector(state => includes(state.entitiesNotFound, "office"))
    return <OfficeBooking
        office={office}
        loadOffice={loadOffice}
        inactivities={inactivities}
        loadInactivities={loadInactivities}
        notification={notification}
        hideNotification={hideNotification}
        createBooking={createBooking}
        officeNotFound={officeNotFound}
    />
}
