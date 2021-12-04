import React, { useState } from 'react';
import { Row, Col, Card, CardBody, Button } from 'reactstrap';
import image from '../../assets/img/bg/rawpixel-com.jpg';
import './styles/OfficeStyle.css';
import { ServEquipTarget } from '../ServicesEquip/ServEquipTarget';
import Reviews from '../reviews/Reviews';
import { Loading } from '../Common/Loading/Loading';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export const OfficeDetailComponent = () => {

    // const { officeName, capacity, tables, officeBranch, officeType, price, enabled, description } = props;
    const reviews = [];
    const loadingReviews = false;

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
    };

    const [slider, setSlider] = useState(null)

    const renderReviews = () => {
        if (loadingReviews)
            return (
                <Col xs="4">
                    <Loading></Loading>
                </Col>
            )
        if (reviews && reviews.length === 0)
            return (
                <div>
                    <p>Aún no hay reseñas de esta oficina</p>
                </div>
            )
        else
            return (
                <>
                    <Col md="1" style={{ display: "flex", alignItems: "center" }}>
                        <Button
                            color="primary"
                            className="btn-round btn-icon"
                            onClick={() => slider.slickPrev()}
                        >
                            <i className="nc-icon nc-minimal-left" />
                        </Button>
                    </Col>
                    <Col md="10">
                        <Slider ref={s => setSlider(s)} {...settings} className="slider">
                            {reviews.map(review => {
                                return (
                                    <Col key={review.id}>
                                        <div>
                                            <Reviews />
                                        </div>
                                    </Col>
                                )
                            })}
                        </Slider>
                    </Col>
                    <Col md="1" style={{ display: "flex", alignItems: "center" }}>
                        <Button
                            color="primary"
                            className="btn-round btn-icon btn-primary"
                            onClick={() => slider.slickNext()}
                        >
                            <i className="nc-icon nc-minimal-right" />
                        </Button>
                    </Col>
                </>
            )
    }

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
                <Card style={{ width: '80%', marginLeft: '10%', marginRight: '10%' }}>
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
                                            {/* {officeName} */}
                                            Oficina Elena
                                        </h1>
                                    </div>
                                    <hr style={{ borderWidth: 2, borderBlockColor: '#133148', marginTop: 3 }} />

                                    <div className='services'>
                                        <row className='row-label-services'>
                                            <label for="services" class="form-label">Servicios</label>
                                        </row>
                                        <Row xs="12" md="12" lg="6" xg="6" style={{ display: 'flex', justifyContent: 'center' }}>
                                            <ServEquipTarget name='Buffete' />
                                            <ServEquipTarget name='Internet' />
                                            {/* <ServEquipTarget name='Estacionamiento'/> */}
                                        </Row>
                                    </div>

                                    <div className='equipment'>
                                        <row className='row-label-equipment'>
                                            <label for="equipment" class="form-label">Equipamiento</label>
                                        </row>
                                        <Row xs="12" md="12" lg="6" xg="6" style={{ display: 'flex', justifyContent: 'center' }}>
                                            <ServEquipTarget name='Monitores' />
                                            <ServEquipTarget name='Proyector' />
                                        </Row>
                                    </div>

                                    <div className='equipment' style={{ marginBottom: 20 }}>
                                        <label for="reviews" class="form-label" style={{ marginBottom: 20 }}>Reseñas</label>
                                    </div>
                                </Col>

                                <Col xs="12" md="12" lg="6" xg="6" style={{ paddingLeft: 20, paddingRight: 20 }}>
                                    <div className='sucursal'>
                                        <label for="sucursal" class="form-label">Sucursal: <strong className="infoDetail">Torre Emilia</strong></label>
                                    </div>

                                    <div className='office-type'>
                                        <label for="office-type" class="form-label">Tipo de oficina: <strong className="infoDetail">Privada</strong></label>
                                    </div>

                                    <div className='price-hour'>
                                        <label for="price-hour" className="form-label">Precio por hora: $<strong className="infoDetail">500</strong></label>
                                    </div>

                                    <div className='availability'>
                                        <label for="availability" class="form-label">Disponibilidad: <strong className="infoDetail">Disponible</strong></label>
                                    </div>

                                    <div className='capacity'>
                                        <label for="capacity" class="form-label">Capacidad: <strong className="infoDetail">10 personas</strong></label>
                                    </div>

                                    <div className='number-of-tables'>
                                        <label for="number-of-tables" className="form-label">Cantidad de mesas: <strong className="infoDetail">8</strong></label>
                                    </div>

                                    <div className='description'>
                                        <label for="description" class="form-label">Descripción </label>
                                        <label for="description" style={{ fontSize: 14 }}>
                                            La oficina compartida A es espaciosa y cómoda para trabajar en grupo. Posee varios servicios que te permitirán
                                            aprovechar el tiempo al máximo.
                                        </label>
                                    </div>
                                </Col>
                            </div>
                            <Row style={{ paddingBottom: "5%", display: "flex", justifyContent: "center" }}>
                                {renderReviews()}
                            </Row>
                            <hr />
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <Link to="/admin/offices">
                                    <Button className='btn-round btn-primary' id='servicesButton'>
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
