import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BookingList } from '../../components/Booking/BookingList'
import { fetchUserCurrentBookings, fetchUserPastBookings } from '../../stores/actions/booking/bookingActions'


export const UserBookingListContainer = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.userMe)
    const isLoading = useSelector(state => state.loadingBooking)
    const bookings = useSelector(state => state.userBookings.data)
    const pageInfo = useSelector(state => state.userBookings.pagination)
    const loadBookings = useCallback((userEmail, page) => {
        dispatch(fetchUserCurrentBookings(userEmail, page))
    }, [dispatch])
    return <BookingList
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
    return <BookingList
        bookings={bookings}
        loadBookings={loadBookings}
        user={user}
        isLoading={isLoading}
        pageInfo={pageInfo}
    />
}
