import React from 'react';
// import { useDispatch } from 'react-redux';
// import { useHistory } from 'react-router-dom';
import {
    Row,
    Col,
    Card,
    CardBody,
    Button,
    Form,
    CardHeader,
    // Alert,
    Container,
} from 'reactstrap';
import Slider from 'react-slick';
// import { hideNotification } from '../../stores/actions';
import image from '../../../assets/img/bg/rawpixel-com.jpg';
import './styles/OfficeBranchStyle.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { OfficeComponentCopy } from './OfficeComponentCopy';
import { Link } from 'react-router-dom';


export const OfficeBranch = () => {
    // const history = useHistory();
    // const dispatch = useDispatch();
    // const { notification } = props;

    // React.useEffect(() => {
    //     if (props.office !== null) {
    //         history.push('/admin/offices');
    //     }
    // }, [props.office]);

    // React.useEffect(() => {
    //     if (notification.show) {
    //         setTimeout(() => {
    //             dispatch(hideNotification());
    //         }, 2500);
    //     }
    // }, [notification]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <div className="content">
            <Row style={{ display: 'grid', paddingTop: 40 }}>
                <Col xs="12" md="6" lg="12" xg="12">
                    <h1>
                        Detalle sucursal <label style={{ color: "#EB5D60" }}>Torre Emilia</label>
                    </h1>
                    <hr />
                </Col>
            </Row>

            <Container>
                <Form >
                    <Card style={{ paddingLeft: 20, paddingRight: 20 }}>
                        <CardHeader>
                            {
                                // <Alert
                                //     isOpen={notification.show && notification.isError}
                                //     color="danger"
                                //     fade={false}
                                // >
                                //     {'Ocurrió un error. Intente nuevamente'}
                                // </Alert>
                            }
                        </CardHeader>
                        <CardBody>
                            <Row>
                                <Col xs="12" md="12" lg="6" xg="6" style={{ paddingLeft: 20, paddingRight: 20 }}>
                                    <div>
                                        <div className="imageContainer">
                                            <img className="office-branch-card-image" src={image} />
                                        </div>
                                    </div>

                                </Col>

                                <Col xs="12" md="12" lg="6" xg="6" style={{ paddingLeft: 20, paddingRight: 20, marginTop: 'auto', marginBottom: 'auto' }}>
                                    <div style={{ marginBottom: 30 }}>
                                        <h3 style={{ marginBottom: 10 }}>Dirección</h3>
                                        <h6 style={{ color: "#EB5D60", marginLeft: 20 }}>Julio Argentino Roca 349, Mendoza</h6>
                                    </div>

                                    <div>
                                        <h3 style={{ marginBottom: 10 }}>Descripción</h3>
                                        <label style={{ marginLeft: 20, fontSize: 15 }}>
                                            ¡Bienvenidos a Torre Emilia coworking! Un lugar perfecto para
                                            realizar reuniones o trabajar solo. Contamos con varios servicios para
                                            tu comodidad.
                                        </label>
                                    </div>

                                    <div style={{ marginLeft: 15, marginTop: 20 }}>
                                        <Row>
                                            <h3 style={{ marginBottom: 10 }}>Oficinas registradas</h3>
                                            <strong style={{ color: "#34B18A", marginLeft: 20, fontSize: 25 }}>5</strong>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>

                            <Row style={{ display: 'grid', paddingTop: 40 }}>
                                <Col xs="12" md="6" lg="12" xg="12">
                                    <h1 style={{ marginBottom: 0 }}>
                                        Oficinas de  <label style={{ color: "#EB5D60" }}>Torre Emilia</label>
                                    </h1>
                                    <hr />
                                </Col>
                            </Row>
                            <div className="carrusel-contenedor">
                                <Slider {...settings} className="slider">
                                    <Col>
                                        <Link to="#" style={{ textDecoration: 'none' }}>
                                            <div>
                                                <OfficeComponentCopy />
                                            </div>
                                        </Link>
                                    </Col>
                                    <Col>
                                        <Link to="#" style={{ textDecoration: 'none' }}>
                                            <div>
                                                <OfficeComponentCopy />
                                            </div>
                                        </Link>
                                    </Col>
                                    <Col>
                                        <Link to="#" style={{ textDecoration: 'none' }}>
                                            <div>
                                                <OfficeComponentCopy />
                                            </div>
                                        </Link>
                                    </Col>
                                    <Col>
                                        <Link to="#" style={{ textDecoration: 'none' }}>
                                            <div>
                                                <OfficeComponentCopy />
                                            </div>
                                        </Link>
                                    </Col>
                                    <Col>
                                        <Link to="#" style={{ textDecoration: 'none' }}>
                                            <div>
                                                <OfficeComponentCopy />
                                            </div>
                                        </Link>
                                    </Col>
                                    <Col>
                                        <Link to="#" style={{ textDecoration: 'none' }}>
                                            <div>
                                                <OfficeComponentCopy />
                                            </div>
                                        </Link>
                                    </Col>
                                    <Col>
                                        <Link to="#" style={{ textDecoration: 'none' }}>
                                            <div>
                                                <OfficeComponentCopy />
                                            </div>
                                        </Link>
                                    </Col>
                                </Slider>
                            </div>

                            <Row>
                                <Col style={{ display: 'flex', justifyContent: 'center' }}>
                                    <Button
                                        className="btn btn-primary"
                                        color="primary"
                                        type="submit"
                                    >
                                        Alquilar Oficina
                                    </Button>
                                    <Button
                                        type="reset"
                                        className="btn btn-primary"
                                        color="danger"
                                        style={{ backgroundColor: '#EB5D60', minWidth: 107 }}
                                    >
                                        Cancelar
                                    </Button>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Form>
            </Container>
        </div >
    );
}
