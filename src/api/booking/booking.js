import { bookOffice, createMercadoPagoPreference, getBooking, getUserCurrentBookings, getUserPastBookings } from "../../infra/api/booking/booking"

export const bookOfficeApi = (officeId, bookingBody) => {
    return Promise.resolve(bookOffice(officeId, bookingBody))
}

export const createMercadoPagoPreferenceApi = bookingId => {
    return Promise.resolve(createMercadoPagoPreference(bookingId))
}

export const getBookingApi = bookingId => {
    return Promise.resolve(getBooking(bookingId))
}

export const getUserCurrentBookingsApi = (userEmail, page) => {
    return Promise.resolve(getUserCurrentBookings(userEmail, page))
}

export const getUserPastBookingsApi = (userEmail, page) => {
    return Promise.resolve(getUserPastBookings(userEmail, page))
}
