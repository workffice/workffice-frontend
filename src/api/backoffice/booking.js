import { bookOffice } from "../../infra/api/backoffice/booking"

export const bookOfficeApi = (officeId, bookingBody) => {
    return Promise.resolve(bookOffice(officeId, bookingBody))
}
