import React from 'react';
import {
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    Container,
    Badge,
    Label,
} from 'reactstrap';

export const BookingListComponent = (props) => {

    const {
        officeName,
        id,
        status,
        attendeesQuantity,
        created,
        startTime,
        endTime,
        transactionAmount,
        providerFee,
        currency,
        paymentMethodId,
        paymentTypeId,
        officeBranchName,
    } = props;

    const getOfficeType = () => {
        if (status === "SCHEDULED") {
            return <Badge color="success" style={{ fontSize: 15 }}>Programada</Badge>
        } else if (status === "PENDING") {
            return <Badge color="warning" style={{ fontSize: 18 }}>Pendiente</Badge>
        } else if (status === "CANCELLED") {
            return <Badge color="danger" style={{ fontSize: 18 }}>Cancelada</Badge>
        }
    }

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
                            <h5 style={{ marginBottom: 10 }}>
                                Código de reserva: <Label style={{ fontSize: 22, color: "#34B18A" }}>{`${id}`}</Label> - {getOfficeType()}
                            </h5>
                            <hr />
                        </Col>
                    </Row>
                    <CardBody style={{ paddingTop: 0 }}>
                        <Col xs="12" md="12" lg="12" xg="12" style={{ paddingLeft: 20, paddingRight: 20, marginBottom: 20 }}>
                            <Row>
                                <Col>
                                    <div className='text'>
                                        <Label className="form-label" style={{ fontSize: 18 }}>
                                            Nombre oficina: <small style={{ fontSize: 18 }}>{`${officeName}`}</small>
                                        </Label>
                                    </div>
                                </Col>
                                <Col>
                                    <div className='text'>
                                        <Label className="form-label" style={{ fontSize: 18 }}>
                                            Sucursal: <small style={{ fontSize: 18 }}>{`${officeBranchName}`}</small>
                                        </Label>
                                    </div>
                                </Col>
                                <Col>
                                    <div className='text'>
                                        <Label className="form-label" style={{ fontSize: 18 }}>
                                            Cantidad de personas: <small style={{ fontSize: 18 }}>{`${attendeesQuantity}`}</small>
                                        </Label>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className='text'>
                                        <Label className="form-label" style={{ fontSize: 18 }}>
                                            Fecha: <small style={{ fontSize: 18 }}>{`${created}`}</small>
                                        </Label>
                                    </div>
                                </Col>
                                <Col>
                                    <div className='text'>
                                        <Label className="form-label" style={{ fontSize: 18 }}>
                                            Hora desde: <small style={{ fontSize: 18 }}>{`${startTime} hs`}</small>
                                        </Label>
                                    </div>
                                </Col>
                                <Col>
                                    <div className='text'>
                                        <Label className="form-label" style={{ fontSize: 18 }}>
                                            Hora hasta: <small style={{ fontSize: 18 }}>{`${endTime} hs`}</small>
                                        </Label>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className='text'>
                                        <Label className="form-label" style={{ fontSize: 18 }}>
                                            Tipo de pago: <small style={{ fontSize: 18 }}>{`${paymentTypeId}`}</small>
                                        </Label>
                                    </div>
                                </Col>
                                <Col>
                                    <div className='text'>
                                        <Label className="form-label" style={{ fontSize: 18 }}>
                                            Moneda: <small style={{ fontSize: 18 }}>{`${currency}`}</small>
                                        </Label>
                                    </div>
                                </Col>
                                <Col>
                                    <div className='text'>
                                        <Label className="form-label" style={{ fontSize: 18 }}>
                                            Tarjeta: <small style={{ fontSize: 18 }}>{`${paymentMethodId}`}</small>
                                        </Label>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <hr />
                        <Col>
                            <Row>
                                <Col>
                                    <div className='text'>
                                        <Label className="form-label" style={{ fontSize: 18 }}>
                                            Impuestos: <small style={{ fontSize: 18 }}>{`$ ${providerFee}`}</small>
                                        </Label>
                                    </div>
                                </Col>
                                <Col>
                                    <div className='text'>
                                        <Label className="form-label" style={{ fontSize: 18 }}>
                                            Monto total: <small style={{ fontSize: 18 }}>{`$ ${transactionAmount}`}</small>
                                        </Label>
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
