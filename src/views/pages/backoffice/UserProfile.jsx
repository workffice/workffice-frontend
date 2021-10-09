
import React from "react";

// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    FormGroup,
    Form,
    Input,
    Row,
    Col,
} from "reactstrap";

import avatar from "../../../assets/img/faces/erik-lucatero-2.jpg"
import image from "../../../assets/img/faces/erik-lucatero-1.jpg"

export const UserProfile = () => {
    return (

        <div className="content">
            <Row style={{ paddingTop: 30 }}>
                <Col md="4">
                    <Card className="card-user">
                        <div className="image">
                            <img
                                alt="..."
                                src={image}
                            />
                        </div>
                        <CardBody>
                            <div className="author">
                                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                    <img
                                        alt="..."
                                        className="avatar border-gray"
                                        src={avatar}
                                    />
                                    <h5 className="title">Marcio Jimenez</h5>
                                </a>
                                <p className="description">@marcioJimenezOficinas</p>
                            </div>
                            <p className="description text-center">
                                "Trabajamos para brindarte un ambiente <br />
                                confortable y calido <br />para que realices tu trabajo"
                            </p>
                        </CardBody>
                        <CardFooter>
                            <hr />
                            <div className="button-container">
                                <Row>
                                    <Col className="ml-auto" lg="4" md="6" xs="6">
                                        <h5>
                                            4 <br />
                                            <small>Sucursales</small>
                                        </h5>
                                    </Col>
                                    <Col className="ml-auto mr-auto" lg="4" md="6" xs="6">
                                        <h5>
                                            3 <br />
                                            <small>Oficinas</small>
                                        </h5>
                                    </Col>
                                    <Col className="mr-auto" lg="4">
                                        <h5>
                                            8.5 <br />
                                            <small>Valoración</small>
                                        </h5>
                                    </Col>
                                </Row>
                            </div>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle tag="h4">Equipo de trabajo</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <ul className="list-unstyled team-members">
                                <li>
                                    <Row>
                                        <Col md="2" xs="2">
                                            <div className="avatar">
                                                <img
                                                    alt="..."
                                                    className="img-circle img-no-padding img-responsive"
                                                    src={
                                                        avatar
                                                    }
                                                />
                                            </div>
                                        </Col>
                                        <Col md="7" xs="7">
                                            Colaborador 1 <br />
                                            <span className="text-muted">
                                                <small>Desconectado</small>
                                            </span>
                                        </Col>
                                        <Col className="text-right" md="3" xs="3">
                                            <Button
                                                className="btn-round btn-icon"
                                                color="success"
                                                outline
                                                size="sm"
                                            >
                                                <i className="fa fa-envelope" />
                                            </Button>
                                        </Col>
                                    </Row>
                                </li>
                                <li>
                                    <Row>
                                        <Col md="2" xs="2">
                                            <div className="avatar">
                                                <img
                                                    alt="..."
                                                    className="img-circle img-no-padding img-responsive"
                                                    src={
                                                        avatar
                                                    }
                                                />
                                            </div>
                                        </Col>
                                        <Col md="7" xs="7">
                                        Colaborador 2 <br />
                                            <span className="text-success">
                                                <small>Disponible</small>
                                            </span>
                                        </Col>
                                        <Col className="text-right" md="3" xs="3">
                                            <Button
                                                className="btn-round btn-icon"
                                                color="success"
                                                outline
                                                size="sm"
                                            >
                                                <i className="fa fa-envelope" />
                                            </Button>
                                        </Col>
                                    </Row>
                                </li>
                                <li>
                                    <Row>
                                        <Col md="2" xs="2">
                                            <div className="avatar">
                                                <img
                                                    alt="..."
                                                    className="img-circle img-no-padding img-responsive"
                                                    src={
                                                        avatar
                                                    }
                                                />
                                            </div>
                                        </Col>
                                        <Col className="col-ms-7" xs="7">
                                         Colaborador 3<br />
                                            <span className="text-danger">
                                                <small>Suspendido</small>
                                            </span>
                                        </Col>
                                        <Col className="text-right" md="3" xs="3">
                                            <Button
                                                className="btn-round btn-icon"
                                                color="danger"
                                                outline
                                                size="sm"
                                            >
                                                <i className="fa fa-envelope" />
                                            </Button>
                                        </Col>
                                    </Row>
                                </li>
                            </ul>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="8">
                    <Card>
                        <CardHeader>
                            <h5 className="title">Editar Perfil</h5>
                        </CardHeader>
                        <CardBody>
                            <Form>
                                <Row>
                                    <Col className="pr-1" md="4">
                                        <FormGroup>
                                            <label>Company (disabled)</label>
                                            <Input
                                                defaultValue="Marcio Jimenez Oficinas."
                                                disabled
                                                placeholder="Marcio Jimenez Oficinas"
                                                type="text"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col className="px-1" md="4">
                                        <FormGroup>
                                            <label>Usuario</label>
                                            <Input
                                                defaultValue="marciojimenez"
                                                placeholder="marciojimenez"
                                                type="text"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col className="pl-1" md="4">
                                        <FormGroup>
                                            <label htmlFor="exampleInputEmail1">
                                                Email
                                            </label>
                                            <Input placeholder="wokfficeholder@getnada.com" type="email" />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="pr-1" md="6">
                                        <FormGroup>
                                            <label>Nombre</label>
                                            <Input
                                                defaultValue="Marcio"
                                                placeholder="Marcio"
                                                type="text"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col className="pl-1" md="6">
                                        <FormGroup>
                                            <label>Apellido</label>
                                            <Input
                                                defaultValue="Jimenez"
                                                placeholder="Jimenez"
                                                type="text"
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="12">
                                        <FormGroup>
                                            <label>Domicilio</label>
                                            <Input
                                                defaultValue="Mendoza, Ciudad, Suipacha 1265"
                                                placeholder="Mendoza, Ciudad, Suipacha 1265"
                                                type="text"
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="pr-1" md="4">
                                        <FormGroup>
                                            <label>Ciudad</label>
                                            <Input
                                                defaultValue="Mendoza, Ciudad"
                                                placeholder="Mendoza, Ciudad"
                                                type="text"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col className="px-1" md="4">
                                        <FormGroup>
                                            <label>País</label>
                                            <Input
                                                defaultValue="Argentina"
                                                placeholder="Argentina"
                                                type="text"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col className="pl-1" md="4">
                                        <FormGroup>
                                            <label>Código postal</label>
                                            <Input placeholder="5500" type="number" />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                {/* <Row>
                                    <Col md="12">
                                        <FormGroup>
                                            <label>About Me</label>
                                            <Input
                                                className="textarea"
                                                type="textarea"
                                                cols="80"
                                                rows="4"
                                                defaultValue="Oh so, your weak rhyme You doubt I'll bother,
                          reading into it"
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row> */}
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>

    );
}

export default UserProfile;
