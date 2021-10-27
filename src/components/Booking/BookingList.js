import PropTypes from 'prop-types'
import React from 'react'
import { Col, Row } from 'reactstrap'
import { EmptyComponent } from '../Common/Empty/EmptyComponent'
import { Loading } from '../Common/Loading/Loading'
import { BookingComponent } from './BookingComponent'


export const BookingList = ({ isLoading, bookings, disableBookingLinks }) => {
    const formatDate = datetime => {
        return datetime.match("(.*)T.*")[1]
    }
    const formatHour = datetime => {
        return datetime.match(".*T(.*):00")[1]
    }

    const renderBookings = () => {
        if (isLoading)
            return <Row style={{ display: "flex", justifyContent: "center" }}>
                <Row>
                    <Col>
                        <Loading></Loading>
                    </Col>
                </Row>
            </Row>
        return bookings.length !== 0 ? bookings.map(booking => {
            return <BookingComponent
                officeName={booking.officeName}
                key={booking.id}
                id={booking.id}
                status={booking.status}
                attendeesQuantity={booking.attendeesQuantity}
                scheduleDate={formatDate(booking.startTime)}
                startTime={formatHour(booking.startTime)}
                endTime={formatHour(booking.endTime)}
                transactionAmount={booking.totalAmount}
                providerFee={booking.payment ? booking.payment.providerFee : "-"}
                currency={booking.payment ? booking.payment.currency : "No definido"}
                paymentMethodId={booking.payment ? booking.payment.paymentMethodId : "No definido"}
                paymentTypeId={booking.payment ? booking.payment.paymentTypeId : "No definido"}
                officeBranchId={booking.officeBranchId}
                disableBookingLink={disableBookingLinks}
            />
        }) : <EmptyComponent />
    }
    return <>{renderBookings()}</>
}

BookingList.propTypes = {
    bookings: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        status: PropTypes.string,
        attendeesQuantity: PropTypes.number,
        scheduleDate: PropTypes.string,
        startTime: PropTypes.string,
        endTime: PropTypes.string,
        totalAmount: PropTypes.number,
        officeBranchId: PropTypes.string,
        payment: PropTypes.shape({
            providerFee: PropTypes.number,
            currency: PropTypes.string,
            paymentMethodId: PropTypes.string,
            paymentTypeId: PropTypes.string,
        })
    })),
    isLoading: PropTypes.bool,
    disableBookingLinks: PropTypes.bool,
}
