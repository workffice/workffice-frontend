import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, CardBody, Input, InputGroup, InputGroupAddon, InputGroupText, Button } from 'reactstrap';
import ImageUpload from '../CustomUpload/ImageUpload';
import './styles/OfficeStyle.css';

export const OfficeDetailComponent = () => (
    <div className="content">
        <Row style={{ display: 'grid', paddingTop: 40 }}>
            <Col xs="12" md="6" lg="12" xg="12">
                <h1>
                    Detalle <small color="red">oficina</small>
                </h1>
                <hr />
            </Col>
        </Row>

        <Row>
            <Card style={{ width: '100%' }}>
                <CardBody>
                    <form>
                        <div className="form-row">
                            <Col xs="12" md="12" lg="6" xg="6" style={{ paddingLeft: 20, paddingRight: 20 }}>
                                <div className='office-name'>
                                    <label for="nameOffice" class="form-label">Nombre</label>
                                    <Input type="text" placeholder="Ingrese el nombre de la oficina" />
                                </div>

                                <div className='sucursal'>
                                    <label for="sucursalSelector" class="form-label">Sucursal</label>
                                    <select class="form-select">
                                        <option>Seleccione sucursal...</option>
                                        <option value="Suc 1">Sucursal 1</option>
                                        <option value="Suc 2">Sucursal 2</option>
                                    </select>
                                </div>

                                <div className='office-type'>
                                    <label for="office-type" class="form-label">Tipo de oficina</label>
                                    <select class="form-select">
                                        <option>Seleccione un tipo...</option>
                                        <option value="Suc 1">Compartida</option>
                                        <option value="Suc 2">Privada</option>
                                    </select>
                                </div>

                                <div className='capacity'>
                                    <label for="capacity" class="form-label">Capacidad</label>
                                    <select class="form-select">
                                        <option>Seleccione la capacidad...</option>
                                        <option value="cap-A">1 - 10 personas</option>
                                        <option value="cap-B">10 - 20 personas</option>
                                    </select>
                                </div>

                                <div className='availability'>
                                    <label for="availability" class="form-label">Disponibilidad</label>
                                    <select class="form-select">
                                        <option>Seleccione la disponibilidad...</option>
                                        <option value="avail-true">Disponible</option>
                                        <option value="avail-false">No disponible</option>
                                    </select>
                                </div>

                                <row className='input-time-container'>
                                    <div className='input-time-from'>
                                        <label for="input-time-from" class="form-label">Desde</label>
                                        <Input type="time" />
                                    </div>

                                    <div className='input-time-to'>
                                        <label for="input-time-to" class="form-label">Hasta</label>
                                        <Input type="time" />
                                    </div>
                                </row>

                                <div className='number-of-tables'>
                                    <label for="number-of-tables" className="form-label">Cantidad de mesas</label>
                                    <Input type="number" placeholder="Ingrese el número de mesas..." />
                                </div>
                            </Col>

                            <Col xs="12" md="12" lg="6" xg="6" style={{ paddingLeft: 20, paddingRight: 20 }}>
                                <div className='price-hour'>
                                    <label for="price-hour" className="form-label">Precio por hora</label>
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>$</InputGroupText>
                                        </InputGroupAddon>
                                        <Input type="number" placeholder="Ingrese el precio por hora" />
                                    </InputGroup>
                                </div>

                                <div className='services'>
                                    <row className='row-label-services'>
                                        <label for="services" class="form-label">Servicios</label>
                                    </row>
                                    <row className='row-form-select'>
                                        <select class="form-select">
                                            <option>Seleccione los servicios...</option>
                                            <option value="serv-1">Cafetería</option>
                                            <option value="serv-2">Wifi</option>
                                        </select>
                                        <div className='button-container'>
                                            {/* <button type="submit" class="btn btn-primary" id='servicesButton'>Crear</button> */}
                                            <Link to="/admin/services-equipment">
                                                <Button className='btn btn-primary' id='servicesButton'>
                                                    Crear
                                                </Button>
                                            </Link>
                                        </div>
                                    </row>
                                </div>

                                <div className='equipment'>
                                    <row className='row-label-equipment'>
                                        <label for="equipment" class="form-label">Equipamiento</label>
                                    </row>
                                    <row className='row-form-select'>
                                        <select class="form-select">
                                            <option>Seleccione el equipamiento...</option>
                                            <option value="equ-1">Cafetería</option>
                                            <option value="equ-2">Wifi</option>
                                        </select>
                                        <div className='button-container'>
                                            <Link to="/admin/services-equipment">
                                                <Button className='btn btn-primary' id='equipmentButton'>
                                                    Crear
                                                </Button>
                                            </Link>
                                        </div>
                                    </row>
                                </div>

                                <div className='description'>
                                    <label for="description" class="form-label">Descripción</label>
                                    <Input type="textarea" name="text" id="exampleText" />
                                </div>

                                <Row className='photos'>
                                    <Col xs={12} sm={4} md={4}>
                                        <label for="photos" class="form-label">Fotos</label>
                                        <ImageUpload />
                                    </Col>
                                </Row>
                            </Col>
                        </div>
                        <hr />
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div class="col-auto">
                                <button type="submit" class="btn btn-primary mb-3" style={{ minWidth: 107 }}>Crear</button>
                            </div>
                            <div class="col-auto">
                                <button type="submit" class="btn btn-primary mb-3" style={{ backgroundColor: '#EB5D60', minWidth: 107 }}>Cancelar</button>
                            </div>
                        </div>
                    </form>
                </CardBody>
            </Card>
        </Row>
    </div>
);
