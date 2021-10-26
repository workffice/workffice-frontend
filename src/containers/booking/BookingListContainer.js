import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BookingList } from '../../components/BookingList/BookingList'
import { fetchUserCurrentBookings, fetchUserPastBookings } from '../../stores/actions/booking/bookingActions'


export const UserBookingListContainer = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.userMe)
    const bookings = useSelector(state => state.userBookings)
    const loadBookings = useCallback(userEmail => {
        dispatch(fetchUserCurrentBookings(userEmail))
    }, [dispatch])
    return <BookingList
        bookings={bookings}
        loadBookings={loadBookings}
        user={user}
    />
}

export const UserPastBookingListContainer = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.userMe)
    const bookings = useSelector(state => state.userBookings)
    const loadBookings = useCallback(userEmail => {
        dispatch(fetchUserPastBookings(userEmail, 0))
    }, [dispatch])
    return <BookingList
        bookings={bookings}
        loadBookings={loadBookings}
        user={user}
    />
}
