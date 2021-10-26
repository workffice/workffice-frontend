import { bookOfficeApi, createMercadoPagoPreferenceApi, getUserCurrentBookingsApi, getUserPastBookingsApi } from '../../../api/booking/booking'
import { BOOKING_RESOURCE, setForbiddenAccessAction, setSuccessAccess } from '../errors/permissionActions'
import { setErrorAction, setSuccessAction } from '../notifications/writeNotificationActions'

export const BOOK_OFFICE = 'BOOK_OFFICE'

export const bookOfficeAction = booking => ({
    type: BOOK_OFFICE,
    payload: booking,
})

export const bookOffice = (officeId, bookingBody) => async dispatch => {
    try {
        dispatch(bookOfficeAction(await bookOfficeApi(officeId, bookingBody)))
        dispatch(setSuccessAction())
    } catch (error) {
        dispatch(setErrorAction(error))
    }
}


export const CREATE_MERCADO_PAGO_PREFERENCE = 'CREATE_MERCADO_PAGO_PREFERENCE'

export const createMercadoPagoPreferenceAction = mpPreferenceId => ({
    type: CREATE_MERCADO_PAGO_PREFERENCE,
    payload: mpPreferenceId,
})

export const createMercadoPagoPreference = bookingId => async dispatch => {
    try {
        dispatch(createMercadoPagoPreferenceAction(await createMercadoPagoPreferenceApi(bookingId)))
    } catch (error) {
        dispatch(setErrorAction(error))
    }
}


export const FETCH_USER_CURRENT_BOOKINGS = 'FETCH_USER_CURRENT_BOOKINGS'

export const fetchUserCurrentBookingsAction = bookings => ({
    type: FETCH_USER_CURRENT_BOOKINGS,
    payload: bookings
})

export const fetchUserCurrentBookings = userEmail => async dispatch => {
    try {
        dispatch(fetchUserCurrentBookingsAction(await getUserCurrentBookingsApi(userEmail)))
        dispatch(setSuccessAccess(BOOKING_RESOURCE))
    } catch (error) {
        if (error.code === "FORBIDDEN")
            dispatch(setForbiddenAccessAction(BOOKING_RESOURCE))
    }
}


export const FETCH_USER_PAST_BOOKINGS = 'FETCH_USER_PAST_BOOKINGS'

export const fetchUserPastBookingsAction = bookings => ({
    type: FETCH_USER_PAST_BOOKINGS,
    payload: bookings
})

export const fetchUserPastBookings = (userEmail, page = 1) => async dispatch => {
    try {
        dispatch(fetchUserPastBookingsAction(await getUserPastBookingsApi(userEmail, page)))
        dispatch(setSuccessAccess(BOOKING_RESOURCE))
    } catch (error) {
        if (error.code === "FORBIDDEN")
            dispatch(setForbiddenAccessAction(BOOKING_RESOURCE))
    }
}
