import React from 'react';
import { Link } from 'react-router-dom';
import {
    Badge, Button, Card, CardBody, Col, Container, Label, Row, UncontrolledTooltip
} from 'reactstrap';

export const BookingListComponent = (props) => {
    const {
        officeName,
        id,
        status,
        attendeesQuantity,
        scheduleDate,
        startTime,
        endTime,
        transactionAmount,
        providerFee,
        currency,
        paymentMethodId,
        paymentTypeId,
        officeBranchId,
    } = props;

    const getOfficeType = () => {
        if (status === "SCHEDULED") {
            return <Badge color="success" style={{ fontSize: 18 }}>Programada</Badge>
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
                    <Row style={{ display: "flex", paddingTop: "2%", alignContent: "center" }}>
                        <Col>
                            <h5 style={{ marginBottom: 0 }}>
                                Código de reserva: <Label style={{ fontSize: 22, color: "#34B18A" }}>{`${id}`}</Label> - {getOfficeType()}
                            </h5>
                        </Col>
                        <Col xs="2">
                            <Link to={`/admin/office-branch?${officeBranchId}`}>
                                <UncontrolledTooltip placement="right" target={`officeBranch-${officeBranchId}`}>
                                    Ver sucursal
                                </UncontrolledTooltip>
                                <Button id={`officeBranch-${officeBranchId}`} margin="0" size="sm" className="btn btn-round btn-icon btn-primary m-0" style={{ fontSize: 18 }}>
                                    <i class="fa fa-building-o" aria-hidden="true"></i>
                                </Button>
                            </Link>
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
                                            Cantidad de personas: <small style={{ fontSize: 18 }}>{`${attendeesQuantity}`}</small>
                                        </Label>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className='text'>
                                        <Label className="form-label" style={{ fontSize: 18 }}>
                                            Fecha: <small style={{ fontSize: 18 }}>{`${scheduleDate}`}</small>
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
                                            Tarifa: <small style={{ fontSize: 18 }}>{`$ ${providerFee}`}</small>
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
