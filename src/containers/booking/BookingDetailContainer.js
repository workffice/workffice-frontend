import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BookingDetail } from '../../components/Booking/BookingDetail'
import { fetchBooking } from '../../stores/actions/booking/bookingActions'

export const BookingDetailContainer = () => {
    const dispatch = useDispatch()
    const permission = useSelector(state => state.permission)
    const booking = useSelector(state => state.booking)
    const loadBooking = useCallback(bookingId => {
        dispatch(fetchBooking(bookingId))
    }, [dispatch])

    return <BookingDetail
        permission={permission}
        booking={booking}
        loadBooking={loadBooking}
    />
}