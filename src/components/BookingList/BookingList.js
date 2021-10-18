import React from 'react';
import {
    Row,
    Col,
} from 'reactstrap';
import { BookingListComponent } from './BookingListComponent';

export const BookingList = () => {
    return (
        <div className="content">
            <Row style={{ display: 'grid', paddingTop: 40 }}>
                <Col xs="12" md="6" lg="12" xg="12">
                    <h1 >
                        Listado de <small color="#EB5D60">reservas</small>
                    </h1>
                    <hr />
                </Col>
            </Row>
            <BookingListComponent
                date="05/10/1996"
                hourFrom="05:30"
                hourTo="14:20"
                officeName="Oficina número 1"
                capacity={5}
                price={1000}
                bookingNumber={523641}
            />
        </div>
    )
}
