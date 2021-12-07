import { Link } from "react-router-dom"
import { Badge, Button, Card, CardBody, Col, Container, Label, Row, UncontrolledTooltip } from "reactstrap"

export const MembershipAcquisitionComponent = ({
    id,
    status,
    disableBookingLink = false,
    paymentTypeId = "No definido",
    currency = "No definido",
    paymentMethodId = "No definido",
    providerFee = 0,
    transactionAmount = 0,
}) => {
    const getStatus = () => {
        if (status === "BOUGHT") {
            return <Badge color="success" style={{ fontSize: 18 }}>Comprada</Badge>
        } else if (status === "PENDING") {
            return <Badge color="warning" style={{ fontSize: 18 }}>Pendiente</Badge>
        }
    }

    return <div className="content">
        <Container>
            <Card style={{ paddingLeft: 20, paddingRight: 20 }}>
                <Row style={{ display: "flex", paddingTop: "2%", alignContent: "center" }}>
                    <Col>
                        <h5 style={{ marginBottom: 0 }}>
                            Código de membresia: {
                                disableBookingLink ? <Label>{id}</Label>
                                    : <><Link color="primary" to={`/admin/booking?id=${id}`}>
                                        {id}
                                    </Link> - {getStatus()}</>
                            }
                        </h5>
                    </Col>
                    <Col xs="2" style={{ display: 'flex' }}>
                        <Col>
                            <Link to={`/admin/office-branch?id=`}>
                                <UncontrolledTooltip placement="right" target={`officeBranch-`}>
                                    Ver sucursal
                                </UncontrolledTooltip>
                                <Button id={`officeBranch-`} margin="0" size="md" className="btn btn-round btn-icon btn-primary m-0" style={{ fontSize: 18 }}>
                                    <i className="fa fa-building-o" aria-hidden="true"></i>
                                </Button>
                            </Link>
                        </Col>
                    </Col>
                </Row>
                <CardBody style={{ paddingTop: 0 }}>
                    <Col xs="12" md="12" lg="12" xg="12" style={{ paddingLeft: 20, paddingRight: 20, marginBottom: 20 }}>
                        <Row>
                            <Col>
                                <div className='text'>
                                    <Label className="form-label" style={{ fontSize: 18 }}>
                                        Nombre oficina
                                    </Label>
                                </div>
                            </Col>
                            <Col>
                                <div className='text'>
                                    <Label className="form-label" style={{ fontSize: 18 }}>
                                        Cantidad de personas
                                    </Label>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className='text'>
                                    <Label className="form-label" style={{ fontSize: 18 }}>
                                        Fecha: <small style={{ fontSize: 18 }}></small>
                                    </Label>
                                </div>
                            </Col>
                            <Col>
                                <div className='text'>
                                    <Label className="form-label" style={{ fontSize: 18 }}>
                                        Hora desde: <small style={{ fontSize: 18 }}></small>
                                    </Label>
                                </div>
                            </Col>
                            <Col>
                                <div className='text'>
                                    <Label className="form-label" style={{ fontSize: 18 }}>
                                        Hora hasta: <small style={{ fontSize: 18 }}></small>
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
}