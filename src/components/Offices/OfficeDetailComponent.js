import React from 'react';
import { Row, Col, Card, CardBody, Button } from 'reactstrap';
import image from '../../assets/img/bg/rawpixel-com.jpg';
import './styles/OfficeStyle.css';
import { ServEquipTarget } from '../ServicesEquip/ServEquipTarget';
import Reviews from '../reviews/Reviews';
import { Link } from 'react-router-dom';

export const OfficeDetailComponent = (props) => {

    const { officeName, capacity, tables, officeBranch, officeType, price, enabled, description } = props;
    return (
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
                <Card style={{ width: '80%', marginLeft: '10%', marginRight: '10%'}}>
                    <CardBody>
                        <form>
                            <div className="form-row">
                                <Col xs="12" md="12" lg="6" xg="6" style={{ paddingLeft: 20, paddingRight: 20 }}>
                                    <div className='form-row' style={{ width: '100%' }}>
                                        <div className="imageContainer" style={{ width: '70%', marginRight: 'auto', marginLeft: 'auto' }}>
                                            <img className="office-branch-card-image" src={image} />
                                        </div>
                                    </div>
    
                                    <div className="office-branch-card-title" style={{ marginTop: 30 }}>
                                        <h1 style={{ marginBottom: 0, color: '#EB5D60' }}>
                                            {officeName}
                                        </h1>
                                        <i className="fa fa-heart" style={{ display: 'flex', alignItems: 'center', fontSize: 20 }} />
                                    </div>
                                    <hr style={{ borderWidth: 2, borderBlockColor: '#133148', marginTop: 3 }} />
    
                                    <div className='services'>
                                        <row className='row-label-services'>
                                            <label for="services" class="form-label">Servicios</label>
                                        </row>
                                        <Row xs="12" md="12" lg="6" xg="6" style={{display: 'flex', justifyContent: 'center'}}>
                                            <ServEquipTarget name='Buffete'/>
                                            <ServEquipTarget name='Internet'/>
                                            <ServEquipTarget name='Estacionamiento'/>
                                        </Row>
                                    </div>
    
                                    <div className='equipment'>
                                        <row className='row-label-equipment'>
                                            <label for="equipment" class="form-label">Equipamiento</label>
                                        </row>
                                        <Row xs="12" md="12" lg="6" xg="6" style={{display: 'flex', justifyContent: 'center'}}>
                                            <ServEquipTarget name='Monitores'/>
                                            <ServEquipTarget name='Proyector'/>
                                        </Row>
                                    </div>
    
                                    <div className='capacity'>
                                        <label for="capacity" class="form-label">Capacidad <strong className="infoDetail">{capacity}</strong></label>
                                    </div>
    
                                    <div className='number-of-tables'>
                                        <label for="number-of-tables" className="form-label">Cantidad de mesas <strong className="infoDetail">{tables}</strong></label>
                                    </div>
                                </Col>
    
                                <Col xs="12" md="12" lg="6" xg="6" style={{ paddingLeft: 20, paddingRight: 20 }}>
                                    <div className='sucursal'>
                                        <label for="sucursal" class="form-label">Sucursal <strong className="infoDetail">{officeBranch}</strong></label>
                                    </div>
    
                                    <div className='office-type'>
                                        <label for="office-type" class="form-label">Tipo de oficina <strong className="infoDetail">{officeType}</strong></label>
                                    </div>
    
                                    <div className='price-hour'>
                                        <label for="price-hour" className="form-label">Precio por hora $ <strong className="infoDetail">{price}</strong></label>
                                    </div>
    
                                    <div className='availability'>
                                        <label for="availability" class="form-label">Disponibilidad <strong className="infoDetail">{enabled}</strong></label>
                                    </div>
    
                                    <div className='description'>
                                        <label for="description" class="form-label">Descripción </label>
                                        <label for="description" style={{fontSize: 14}}>
                                            {description}
                                        </label>
                                    </div>
    
                                    <div className='description'>
                                        <label for="reviews" class="form-label" style={{marginBottom: 20}}>Reseñas</label>
                                        <Reviews />
                                    </div>
                                </Col>
                            </div>
                            <hr />
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <Link to="/admin/offices">
                                    <Button className='btn btn-primary' id='servicesButton'>
                                        Aceptar
                                    </Button>
                                </Link>
                            </div>
                        </form>
                    </CardBody>
                </Card>
            </Row>
        </div>
    );
}
