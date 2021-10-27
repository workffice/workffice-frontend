import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BookingList } from '../../components/Booking/BookingList'
import { fetchUserCurrentBookings, fetchUserPastBookings } from '../../stores/actions/booking/bookingActions'


export const UserBookingListContainer = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.userMe)
    const isLoading = useSelector(state => state.loadingBooking)
    const bookings = useSelector(state => state.userBookings)
    const loadBookings = useCallback(userEmail => {
        dispatch(fetchUserCurrentBookings(userEmail))
    }, [dispatch])
    return <BookingList
        bookings={bookings}
        loadBookings={loadBookings}
        user={user}
        isLoading={isLoading}
    />
}

export const UserPastBookingListContainer = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.userMe)
    const isLoading = useSelector(state => state.loadingBooking)
    const bookings = useSelector(state => state.userBookings)
    const loadBookings = useCallback(userEmail => {
        dispatch(fetchUserPastBookings(userEmail, 0))
    }, [dispatch])
    return <BookingList
        bookings={bookings}
        loadBookings={loadBookings}
        user={user}
        isLoading={isLoading}
    />
}
