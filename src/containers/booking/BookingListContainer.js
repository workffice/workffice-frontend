import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UserBookings } from '../../components/Booking/UserBookings'
import { OfficeBookings } from '../../components/OfficeBooking/OfficeBookings'
import { getOffice } from '../../stores/actions/backoffice/office/officeActions'
import { fetchOfficeBookings, fetchUserCurrentBookings, fetchUserPastBookings } from '../../stores/actions/booking/bookingActions'


export const UserBookingListContainer = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.userMe)
    const isLoading = useSelector(state => state.loadingBooking)
    const bookings = useSelector(state => state.userBookings.data)
    const pageInfo = useSelector(state => state.userBookings.pagination)
    const loadBookings = useCallback((userEmail, page) => {
        dispatch(fetchUserCurrentBookings(userEmail, page))
    }, [dispatch])
    return <UserBookings
        bookings={bookings}
        loadBookings={loadBookings}
        user={user}
        isLoading={isLoading}
        pageInfo={pageInfo}
    />
}

export const UserPastBookingListContainer = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.userMe)
    const isLoading = useSelector(state => state.loadingBooking)
    const bookings = useSelector(state => state.userBookings.data)
    const loadBookings = useCallback((userEmail, page) => {
        dispatch(fetchUserPastBookings(userEmail, page))
    }, [dispatch])
    const pageInfo = useSelector(state => state.userBookings.pagination)
    return <UserBookings
        bookings={bookings}
        loadBookings={loadBookings}
        user={user}
        isLoading={isLoading}
        pageInfo={pageInfo}
        title={<h1 >Historial de <small color="#EB5D60">reservas</small></h1>}
    />
}

export const OfficeBookingListContainer = () => {
    const dispatch = useDispatch()
    const permission = useSelector(state => state.permission)
    const entitiesNotFound = useSelector(state => state.entitiesNotFound)
    const isLoading = useSelector(state => state.loadingBooking)
    const office = useSelector(state => state.office)
    const loadOffice = useCallback(officeId => {
        dispatch(getOffice(officeId))
    }, [dispatch])
    const bookings = useSelector(state => state.officeBookings)
    const loadBookings = useCallback((officeId, date) => {
        dispatch(fetchOfficeBookings(officeId, date))
    }, [dispatch])
    return <OfficeBookings
        isLoading={isLoading}
        entitiesNotFound={entitiesNotFound}
        permission={permission}
        office={office}
        loadOffice={loadOffice}
        bookings={bookings}
        loadBookings={loadBookings}
    />
}
