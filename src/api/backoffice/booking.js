import { bookOffice, createMercadoPagoPreference, getBooking } from "../../infra/api/backoffice/booking"

export const bookOfficeApi = (officeId, bookingBody) => {
    return Promise.resolve(bookOffice(officeId, bookingBody))
}

export const createMercadoPagoPreferenceApi = bookingId => {
    return Promise.resolve(createMercadoPagoPreference(bookingId))
}

export const getBookingApi = bookingId => {
    return Promise.resolve(getBooking(bookingId))
}