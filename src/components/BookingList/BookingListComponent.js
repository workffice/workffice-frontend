import React from 'react';
import {
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    Container,
} from 'reactstrap';

export const BookingListComponent = (props) => {

    const { date, hourFrom, hourTo, officeName, capacity, price, bookingNumber } = props;

    return (
        <div className="content">
            <Container>
                <Card style={{ paddingLeft: 20, paddingRight: 20 }}>
                    <CardHeader>
                        {/* {
                                <Alert
                                    isOpen={error.show}
                                    color="danger"
                                    fade={false}
                                >
                                    {'Ocurrió un error. Intente nuevamente'}
                                </Alert> */}
                        {/* } */}
                    </CardHeader>
                    <Row style={{ display: 'grid', paddingTop: 10 }}>
                        <Col xs="12" md="6" lg="12" xg="12">
                            <h2 style={{marginBottom: 10}}>
                                Reserva N° <small style={{ fontSize: 25, color: "#34B18A" }}>{`${bookingNumber}`}</small>
                            </h2>
                            <hr />
                        </Col>
                    </Row>
                    <CardBody style={{paddingTop: 0}}>
                        <Col xs="12" md="12" lg="12" xg="12" style={{ paddingLeft: 20, paddingRight: 20, marginBottom: 20 }}>
                            <Row>
                                <Col>
                                    <div className='text'>
                                        <label className="form-label" style={{ fontSize: 20 }}>
                                            Fecha: <small style={{ fontSize: 20 }}>{`${date}`}</small>
                                        </label>
                                    </div>
                                </Col>
                                <Col>
                                    <div className='text'>
                                        <label className="form-label" style={{ fontSize: 20 }}>
                                            Hora desde: <small style={{ fontSize: 20 }}>{`${hourFrom} hs`}</small>
                                        </label>
                                    </div>
                                </Col>
                                <Col>
                                    <div className='text'>
                                        <label className="form-label" style={{ fontSize: 20 }}>
                                            Hora hasta: <small style={{ fontSize: 20 }}>{`${hourTo} hs`}</small>
                                        </label>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className='text'>
                                        <label className="form-label" style={{ fontSize: 20 }}>
                                            Nombre oficina: <small style={{ fontSize: 20 }}>{`${officeName}`}</small>
                                        </label>
                                    </div>
                                </Col>
                                <Col>
                                    <div className='text'>
                                        <label className="form-label" style={{ fontSize: 20 }}>
                                            Cantidad de personas: <small style={{ fontSize: 20 }}>{`${capacity}`}</small>
                                        </label>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className='text'>
                                        <label className="form-label" style={{ fontSize: 20 }}>
                                            Monto total: <small style={{ fontSize: 20 }}>{`$ ${price}`}</small>
                                        </label>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </CardBody>
                </Card>
            </Container>
        </div>
    )
}
