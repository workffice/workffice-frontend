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
                officeName="Oficina número 1"
                id="0cfad0be-69e9-469a-85e5-803507516fc7"
                status="SCHEDULED"
                attendeesQuantity={5}
                created="05/10/1996"
                startTime="05:30"
                endTime="14:20"
                transactionAmount={1000}
                providerFee={200}
                currency="ARS"
                paymentMethodId="master"
                paymentTypeId="tarjeta de crédito"
                officeBranchName="Whale"
            />
            <BookingListComponent                
                officeName="Oficina número 1"
                id="0cfad0be-69e9-469a-85e5-803507516fc7"
                status="PENDING"
                attendeesQuantity={5}
                created="05/10/1996"
                startTime="05:30"
                endTime="14:20"
                transactionAmount={1000}
                providerFee={200}
                currency="ARS"
                paymentMethodId="master"
                paymentTypeId="tarjeta de crédito"
                officeBranchName="Whale"
            />
            <BookingListComponent                
                officeName="Oficina número 1"
                id="0cfad0be-69e9-469a-85e5-803507516fc7"
                status="CANCELLED"
                attendeesQuantity={5}
                created="05/10/1996"
                startTime="05:30"
                endTime="14:20"
                transactionAmount={1000}
                providerFee={200}
                currency="ARS"
                paymentMethodId="master"
                paymentTypeId="tarjeta de crédito"
                officeBranchName="Whale"
            />
        </div>
    )
}
