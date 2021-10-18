import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import {
    Button, Card,
    CardBody, Col,
    Container, Form, Row
} from 'reactstrap';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Cloudinary } from '../Common/Cloudinary/Cloudinary';
import { EmptyComponent } from '../Common/Empty/EmptyComponent';
import { Loading } from '../Common/Loading/Loading';
import { OfficeComponent } from '../Offices/OfficeComponent';


export const OfficeBranchDetail = ({ loadOfficeBranch, officeBranch, officeBranchIdAdmin, loadOffices, offices, loadingOffices }) => {
    const query = new URLSearchParams(useLocation().search);
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
    };

    const [slider, setSlider] = useState(null)

    useEffect(() => {
        if (query.get("id") === null) {
            console.log(officeBranchIdAdmin)
            loadOfficeBranch(officeBranchIdAdmin)
        }
        loadOfficeBranch(query.get("id"))
    }, [query.get("id")])
    useEffect(() => {
        if (officeBranch)
            loadOffices(officeBranch.id)
    }, [officeBranch ? officeBranch.id : ""])

    const renderOffices = () => {
        if (loadingOffices)
            return (
                <Col xs="4">
                    <Loading></Loading>
                </Col>
            )
        if (offices && offices.length === 0)
            return <EmptyComponent />
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
                            {offices.map(office => {
                                return (
                                    <Col key={office.id}>
                                        <Link to="#" style={{ textDecoration: 'none' }}>
                                            <div>
                                                <OfficeComponent displayBookingButton={true} office={office} officeBranch={officeBranch} />
                                            </div>
                                        </Link>
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
                        Detalle sucursal <label style={{ color: "#EB5D60" }}>{officeBranch ? officeBranch.name : ""}</label>
                    </h1>
                    <hr />
                </Col>
            </Row>

            <Container>
                <Form >
                    <Card style={{ paddingLeft: 20, paddingRight: 20 }}>
                        <CardBody>
                            <Row>
                                <Col xs="12" md="12" lg="6" xg="6" style={{ paddingLeft: 20, paddingRight: 20 }}>
                                    <div>
                                        <div className="imageContainer">
                                            <Cloudinary className="office-branch-card-image" publicId={officeBranch ? officeBranch.images[0].url : ""} />
                                        </div>
                                    </div>

                                </Col>

                                <Col xs="12" md="12" lg="6" xg="6" style={{ paddingLeft: 20, paddingRight: 20, marginTop: 'auto', marginBottom: 'auto' }}>
                                    <div style={{ marginBottom: 30 }}>
                                        <h3 style={{ marginBottom: 10 }}>Dirección</h3>
                                        {
                                            officeBranch !== null ?
                                                <h6 style={{ color: "#EB5D60", marginLeft: 20 }}>
                                                    {officeBranch.location.street} - {officeBranch.location.city} {officeBranch.location.zipCode}, {officeBranch.location.province}
                                                </h6>
                                                : <h6></h6>
                                        }
                                    </div>

                                    <div>
                                        <h3 style={{ marginBottom: 10 }}>Descripción</h3>
                                        <label style={{ marginLeft: 20, fontSize: 15 }}>
                                            {officeBranch ? officeBranch.description : ""}
                                        </label>
                                    </div>

                                    <div style={{ marginLeft: 15, marginTop: 20 }}>
                                        <Row>
                                            <h3 style={{ marginBottom: 10 }}>Oficinas registradas</h3>
                                            <strong style={{ color: "#34B18A", marginLeft: 20, fontSize: 25 }}>{offices ? offices.length : 0}</strong>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>

                            <Row style={{ display: 'grid', paddingTop: 40 }}>
                                <Col xs="12" md="6" lg="12" xg="12">
                                    <h1 style={{ marginBottom: 0 }}>
                                        Oficinas de  <label style={{ color: "#EB5D60" }}>{officeBranch ? officeBranch.name : ""}</label>
                                    </h1>
                                    <hr />
                                </Col>
                            </Row>
                            <Row style={{ paddingBottom: "5%", display: "flex", justifyContent:"center"}}>
                                {renderOffices()}
                            </Row>
                        </CardBody>
                    </Card>
                </Form>
            </Container>
        </div >
    );
}
