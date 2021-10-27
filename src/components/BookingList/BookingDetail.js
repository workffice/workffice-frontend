import React, { useEffect } from 'react'
import { useLocation } from 'react-router'
import { Col, Container, Row } from 'reactstrap'
import { BookingComponent } from './BookingListComponent'

export const BookingDetail = ({ loadBooking, booking }) => {

    const query = new URLSearchParams(useLocation().search)

    useEffect(() => {
        loadBooking(query.get("id"))
    }, [booking ? booking.id : ""])

    return (
        <div className="content">
            <Row style={{ display: 'grid', paddingTop: 40 }}>
                <Col xs="12" md="6" lg="12" xg="12">
                    <h1>Reserva</h1>
                    <hr />
                </Col>
            </Row>
            <Row>
                <Container>
                    <BookingComponent
                        id={booking.id}
                        status={booking.status}
                        attendeesQuantity={booking.attendeesQuantity}
                        scheduleDate={booking.scheduleDate}
                        startTime={booking.startTime}
                        endTime={booking.endTime}
                        transactionAmount={booking.totalAmount}
                        officeBranchId={booking.officeBranchId}
                        providerFee={booking.payment ? booking.payment.providerFee : "-"}
                        currency={booking.payment ? booking.payment.currency : "No definido"}
                        paymentMethodId={booking.payment ? booking.payment.paymentMethodId : "No definido"}
                        paymentTypeId={booking.payment ? booking.payment.paymentTypeId : "No definido"}
                    />
                </Container>
            </Row>
        </div>
    )
}
