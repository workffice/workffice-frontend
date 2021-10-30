import React, { useState } from 'react';
import { Card, CardBody, CardHeader, Col, Collapse, Label, Row } from 'reactstrap';

const FrequentQuestions = () => {

    const [openedCollapses, setOpenedCollapses] = useState("");

    const collapsesToggle = (collapse) => {
        console.log('collapse: ', collapse);
        if (openedCollapses === collapse) {
            setOpenedCollapses("");
        } else {
            setOpenedCollapses(collapse);
        }
    };

    return (
        <div className="content">
            <Row style={{ display: 'grid', paddingTop: 40 }}>
                <Col xs="12" md="6" lg="12" xg="12">
                    <h1>
                        Preguntas <Label style={{ color: "#EB5D60" }}>frecuentes</Label>
                    </h1>
                    <hr />
                </Col>
            </Row>
            <Row>
                <div
                    aria-multiselectable={true}
                    className="card-collapse"
                    id="accordion"
                    role="tablist"
                    style={{
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        width: '95%'
                    }}
                >
                    <h3 
                        style={{
                            color:"#34B18A",
                            marginBottom: 0,
                            marginTop: "1%",
                        }}>
                            Para los Inquilinos
                    </h3>
                    <Card className="card-plain" style={{marginLeft:"2%"}}>
                        <CardHeader role="tab">
                            <a
                                aria-expanded={openedCollapses === "collapseOne"}
                                href="#"
                                data-parent="#accordion"
                                data-toggle="collapse"
                                onClick={(e) => { e.preventDefault(); collapsesToggle("collapseOne") }}
                            >
                                <Row style={{display: "flex", justifyContent: "space-between"}}>
                                    <div className='text'>
                                        <Label className="form-label" style={{ fontSize: 18, marginTop: "auto", marginBottom:"auto" }}>
                                            - ¿Cómo registrarme en Workffice?
                                        </Label>
                                    </div>
                                    <i 
                                        className="nc-icon nc-minimal-down" 
                                        style={{
                                            marginTop: "auto", 
                                            marginBottom:"auto",
                                            color:"#133148",
                                            fontWeight: 'bold',
                                        }}
                                    />
                                </Row>
                            </a>
                        </CardHeader>
                        <Collapse
                            role="tabpanel"
                            isOpen={openedCollapses === "collapseOne"}
                        >
                            <CardBody>
                                Anim pariatur cliche reprehenderit, enim eiusmod high life
                                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                                non cupidatat skateboard dolor brunch. Food truck quinoa
                                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                                put a bird on it squid single-origin coffee nulla assumenda
                                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                                excepteur butcher vice lomo. Leggings occaecat craft beer
                                farm-to-table, raw denim aesthetic synth nesciunt you probably
                                haven't heard of them accusamus labore sustainable VHS.
                            </CardBody>
                        </Collapse>
                    </Card>
                    <Card className="card-plain" style={{marginLeft:"2%"}}>
                        <CardHeader role="tab">
                            <a
                                aria-expanded={openedCollapses === "collapseTwo"}
                                href="#"
                                data-parent="#accordion"
                                data-toggle="collapse"
                                onClick={(e) => { e.preventDefault(); collapsesToggle("collapseTwo") }}
                            >
                                <Row style={{display: "flex", justifyContent: "space-between"}}>
                                    <div className='text'>
                                        <Label className="form-label" style={{ fontSize: 18, marginTop: "auto", marginBottom:"auto" }}>
                                            - ¿Cómo reservo una oficina?
                                        </Label>
                                    </div>
                                    <i 
                                        className="nc-icon nc-minimal-down" 
                                        style={{
                                            marginTop: "auto", 
                                            marginBottom:"auto",
                                            color:"#133148",
                                            fontWeight: 'bold',
                                        }}
                                    />
                                </Row>
                            </a>
                        </CardHeader>
                        <Collapse
                            role="tabpanel"
                            isOpen={openedCollapses === "collapseTwo"}
                        >
                            <CardBody>
                                Anim pariatur cliche reprehenderit, enim eiusmod high life
                                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                                non cupidatat skateboard dolor brunch. Food truck quinoa
                                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                                put a bird on it squid single-origin coffee nulla assumenda
                                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                                excepteur butcher vice lomo. Leggings occaecat craft beer
                                farm-to-table, raw denim aesthetic synth nesciunt you probably
                                haven't heard of them accusamus labore sustainable VHS.
                            </CardBody>
                        </Collapse>
                    </Card>
                    <Card className="card-plain" style={{marginLeft:"2%"}}>
                        <CardHeader role="tab">
                            <a
                                aria-expanded={openedCollapses === "collapseThree"}
                                href="#"
                                data-parent="#accordion"
                                data-toggle="collapse"
                                onClick={(e) => { e.preventDefault(); collapsesToggle("collapseThree") }}
                            >
                                <Row style={{display: "flex", justifyContent: "space-between"}}>
                                    <div className='text'>
                                        <Label className="form-label" style={{ fontSize: 18, marginTop: "auto", marginBottom:"auto" }}>
                                            - ¿Cómo comprar una membresía?
                                        </Label>
                                    </div>
                                    <i 
                                        className="nc-icon nc-minimal-down" 
                                        style={{
                                            marginTop: "auto", 
                                            marginBottom:"auto",
                                            color:"#133148",
                                            fontWeight: 'bold',
                                        }}
                                    />
                                </Row>
                            </a>
                        </CardHeader>
                        <Collapse
                            role="tabpanel"
                            isOpen={openedCollapses === "collapseThree"}
                        >
                            <CardBody>
                                Anim pariatur cliche reprehenderit, enim eiusmod high life
                                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                                non cupidatat skateboard dolor brunch. Food truck quinoa
                                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                                put a bird on it squid single-origin coffee nulla assumenda
                                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                                excepteur butcher vice lomo. Leggings occaecat craft beer
                                farm-to-table, raw denim aesthetic synth nesciunt you probably
                                haven't heard of them accusamus labore sustainable VHS.
                            </CardBody>
                        </Collapse>
                    </Card>
                    <Card className="card-plain" style={{marginLeft:"2%"}}>
                        <CardHeader role="tab">
                            <a
                                aria-expanded={openedCollapses === "collapseFour"}
                                href="#"
                                data-parent="#accordion"
                                data-toggle="collapse"
                                onClick={(e) => { e.preventDefault(); collapsesToggle("collapseFour") }}
                            >
                                <Row style={{display: "flex", justifyContent: "space-between"}}>
                                    <div className='text'>
                                        <Label className="form-label" style={{ fontSize: 18, marginTop: "auto", marginBottom:"auto" }}>
                                            - ¿Cómo realizar una reseña?
                                        </Label>
                                    </div>
                                    <i 
                                        className="nc-icon nc-minimal-down" 
                                        style={{
                                            marginTop: "auto", 
                                            marginBottom:"auto",
                                            color:"#133148",
                                            fontWeight: 'bold',
                                        }}
                                    />
                                </Row>
                            </a>
                        </CardHeader>
                        <Collapse
                            role="tabpanel"
                            isOpen={openedCollapses === "collapseFour"}
                        >
                            <CardBody>
                                Anim pariatur cliche reprehenderit, enim eiusmod high life
                                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                                non cupidatat skateboard dolor brunch. Food truck quinoa
                                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                                put a bird on it squid single-origin coffee nulla assumenda
                                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                                excepteur butcher vice lomo. Leggings occaecat craft beer
                                farm-to-table, raw denim aesthetic synth nesciunt you probably
                                haven't heard of them accusamus labore sustainable VHS.
                            </CardBody>
                        </Collapse>
                    </Card>
                    <Card className="card-plain" style={{marginLeft:"2%"}}>
                        <CardHeader role="tab">
                            <a
                                aria-expanded={openedCollapses === "collapseFive"}
                                href="#"
                                data-parent="#accordion"
                                data-toggle="collapse"
                                onClick={(e) => { e.preventDefault(); collapsesToggle("collapseFive") }}
                            >
                                <Row style={{display: "flex", justifyContent: "space-between"}}>
                                    <div className='text'>
                                        <Label className="form-label" style={{ fontSize: 18, marginTop: "auto", marginBottom:"auto" }}>
                                            - ¿Cómo realizar una operación de pago y que medios de pago tengo disponible?
                                        </Label>
                                    </div>
                                    <i 
                                        className="nc-icon nc-minimal-down" 
                                        style={{
                                            marginTop: "auto", 
                                            marginBottom:"auto",
                                            color:"#133148",
                                            fontWeight: 'bold',
                                        }}
                                    />
                                </Row>
                            </a>
                        </CardHeader>
                        <Collapse
                            role="tabpanel"
                            isOpen={openedCollapses === "collapseFive"}
                        >
                            <CardBody>
                                Anim pariatur cliche reprehenderit, enim eiusmod high life
                                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                                non cupidatat skateboard dolor brunch. Food truck quinoa
                                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                                put a bird on it squid single-origin coffee nulla assumenda
                                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                                excepteur butcher vice lomo. Leggings occaecat craft beer
                                farm-to-table, raw denim aesthetic synth nesciunt you probably
                                haven't heard of them accusamus labore sustainable VHS.
                            </CardBody>
                        </Collapse>
                    </Card>
                    <Card className="card-plain" style={{marginLeft:"2%", marginBottom:"2%"}}>
                        <CardHeader role="tab">
                            <a
                                aria-expanded={openedCollapses === "collapseSix"}
                                href="#"
                                data-parent="#accordion"
                                data-toggle="collapse"
                                onClick={(e) => { e.preventDefault(); collapsesToggle("collapseSix") }}
                            >
                                <Row style={{display: "flex", justifyContent: "space-between"}}>
                                    <div className='text'>
                                        <Label className="form-label" style={{ fontSize: 18, marginTop: "auto", marginBottom:"auto" }}>
                                            - ¿Cómo puedo ver el historial de mis reservas?
                                        </Label>
                                    </div>
                                    <i 
                                        className="nc-icon nc-minimal-down" 
                                        style={{
                                            marginTop: "auto", 
                                            marginBottom:"auto",
                                            color:"#133148",
                                            fontWeight: 'bold',
                                        }}
                                    />
                                </Row>
                            </a>
                        </CardHeader>
                        <Collapse
                            role="tabpanel"
                            isOpen={openedCollapses === "collapseSix"}
                        >
                            <CardBody>
                                Anim pariatur cliche reprehenderit, enim eiusmod high life
                                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                                non cupidatat skateboard dolor brunch. Food truck quinoa
                                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                                put a bird on it squid single-origin coffee nulla assumenda
                                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                                excepteur butcher vice lomo. Leggings occaecat craft beer
                                farm-to-table, raw denim aesthetic synth nesciunt you probably
                                haven't heard of them accusamus labore sustainable VHS.
                            </CardBody>
                        </Collapse>
                    </Card>

                    <h3 
                        style={{
                            color:"#34B18A",
                            marginBottom: 0,
                            marginTop: "2%",
                        }}>
                            Para los propietarios de oficina
                    </h3>
                    <Card className="card-plain" style={{marginLeft:"2%"}}>
                        <CardHeader role="tab">
                            <a
                                aria-expanded={openedCollapses === "collapseSeven"}
                                href="#"
                                data-parent="#accordion"
                                data-toggle="collapse"
                                onClick={(e) => { e.preventDefault(); collapsesToggle("collapseSeven") }}
                            >
                                <Row style={{display: "flex", justifyContent: "space-between"}}>
                                    <div className='text'>
                                        <Label className="form-label" style={{ fontSize: 18, marginTop: "auto", marginBottom:"auto" }}>
                                            - ¿Cómo registrarme en Workffice?
                                        </Label>
                                    </div>
                                    <i 
                                        className="nc-icon nc-minimal-down" 
                                        style={{
                                            marginTop: "auto", 
                                            marginBottom:"auto",
                                            color:"#133148",
                                            fontWeight: 'bold',
                                        }}
                                    />
                                </Row>
                            </a>
                        </CardHeader>
                        <Collapse
                            role="tabpanel"
                            isOpen={openedCollapses === "collapseSeven"}
                        >
                            <CardBody>
                                Anim pariatur cliche reprehenderit, enim eiusmod high life
                                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                                non cupidatat skateboard dolor brunch. Food truck quinoa
                                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                                put a bird on it squid single-origin coffee nulla assumenda
                                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                                excepteur butcher vice lomo. Leggings occaecat craft beer
                                farm-to-table, raw denim aesthetic synth nesciunt you probably
                                haven't heard of them accusamus labore sustainable VHS.
                            </CardBody>
                        </Collapse>
                    </Card>
                    <Card className="card-plain" style={{marginLeft:"2%"}}>
                        <CardHeader role="tab">
                            <a
                                aria-expanded={openedCollapses === "collapseEight"}
                                href="#"
                                data-parent="#accordion"
                                data-toggle="collapse"
                                onClick={(e) => { e.preventDefault(); collapsesToggle("collapseEight") }}
                            >
                                <Row style={{display: "flex", justifyContent: "space-between"}}>
                                    <div className='text'>
                                        <Label className="form-label" style={{ fontSize: 18, marginTop: "auto", marginBottom:"auto" }}>
                                            - ¿Cómo crear un perfil colaborador?
                                        </Label>
                                    </div>
                                    <i 
                                        className="nc-icon nc-minimal-down" 
                                        style={{
                                            marginTop: "auto", 
                                            marginBottom:"auto",
                                            color:"#133148",
                                            fontWeight: 'bold',
                                        }}
                                    />
                                </Row>
                            </a>
                        </CardHeader>
                        <Collapse
                            role="tabpanel"
                            isOpen={openedCollapses === "collapseEight"}
                        >
                            <CardBody>
                                Anim pariatur cliche reprehenderit, enim eiusmod high life
                                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                                non cupidatat skateboard dolor brunch. Food truck quinoa
                                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                                put a bird on it squid single-origin coffee nulla assumenda
                                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                                excepteur butcher vice lomo. Leggings occaecat craft beer
                                farm-to-table, raw denim aesthetic synth nesciunt you probably
                                haven't heard of them accusamus labore sustainable VHS.
                            </CardBody>
                        </Collapse>
                    </Card>
                    <Card className="card-plain" style={{marginLeft:"2%"}}>
                        <CardHeader role="tab">
                            <a
                                aria-expanded={openedCollapses === "collapseNine"}
                                href="#"
                                data-parent="#accordion"
                                data-toggle="collapse"
                                onClick={(e) => { e.preventDefault(); collapsesToggle("collapseNine") }}
                            >
                                <Row style={{display: "flex", justifyContent: "space-between"}}>
                                    <div className='text'>
                                        <Label className="form-label" style={{ fontSize: 18, marginTop: "auto", marginBottom:"auto" }}>
                                            - ¿Cómo crear una sucursal?
                                        </Label>
                                    </div>
                                    <i 
                                        className="nc-icon nc-minimal-down" 
                                        style={{
                                            marginTop: "auto", 
                                            marginBottom:"auto",
                                            color:"#133148",
                                            fontWeight: 'bold',
                                        }}
                                    />
                                </Row>
                            </a>
                        </CardHeader>
                        <Collapse
                            role="tabpanel"
                            isOpen={openedCollapses === "collapseNine"}
                        >
                            <CardBody>
                                Anim pariatur cliche reprehenderit, enim eiusmod high life
                                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                                non cupidatat skateboard dolor brunch. Food truck quinoa
                                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                                put a bird on it squid single-origin coffee nulla assumenda
                                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                                excepteur butcher vice lomo. Leggings occaecat craft beer
                                farm-to-table, raw denim aesthetic synth nesciunt you probably
                                haven't heard of them accusamus labore sustainable VHS.
                            </CardBody>
                        </Collapse>
                    </Card>
                    <Card className="card-plain" style={{marginLeft:"2%"}}>
                        <CardHeader role="tab">
                            <a
                                aria-expanded={openedCollapses === "collapseTen"}
                                href="#"
                                data-parent="#accordion"
                                data-toggle="collapse"
                                onClick={(e) => { e.preventDefault(); collapsesToggle("collapseTen") }}
                            >
                                <Row style={{display: "flex", justifyContent: "space-between"}}>
                                    <div className='text'>
                                        <Label className="form-label" style={{ fontSize: 18, marginTop: "auto", marginBottom:"auto" }}>
                                            - ¿Cómo crear una oficina?
                                        </Label>
                                    </div>
                                    <i 
                                        className="nc-icon nc-minimal-down" 
                                        style={{
                                            marginTop: "auto", 
                                            marginBottom:"auto",
                                            color:"#133148",
                                            fontWeight: 'bold',
                                        }}
                                    />
                                </Row>
                            </a>
                        </CardHeader>
                        <Collapse
                            role="tabpanel"
                            isOpen={openedCollapses === "collapseTen"}
                        >
                            <CardBody>
                                Anim pariatur cliche reprehenderit, enim eiusmod high life
                                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                                non cupidatat skateboard dolor brunch. Food truck quinoa
                                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                                put a bird on it squid single-origin coffee nulla assumenda
                                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                                excepteur butcher vice lomo. Leggings occaecat craft beer
                                farm-to-table, raw denim aesthetic synth nesciunt you probably
                                haven't heard of them accusamus labore sustainable VHS.
                            </CardBody>
                        </Collapse>
                    </Card>
                    <Card className="card-plain" style={{marginLeft:"2%"}}>
                        <CardHeader role="tab">
                            <a
                                aria-expanded={openedCollapses === "collapseEleven"}
                                href="#"
                                data-parent="#accordion"
                                data-toggle="collapse"
                                onClick={(e) => { e.preventDefault(); collapsesToggle("collapseEleven") }}
                            >
                                <Row style={{display: "flex", justifyContent: "space-between"}}>
                                    <div className='text'>
                                        <Label className="form-label" style={{ fontSize: 18, marginTop: "auto", marginBottom:"auto" }}>
                                            - ¿Cómo configuro la disponibilidad de mis oficinas?
                                        </Label>
                                    </div>
                                    <i 
                                        className="nc-icon nc-minimal-down" 
                                        style={{
                                            marginTop: "auto", 
                                            marginBottom:"auto",
                                            color:"#133148",
                                            fontWeight: 'bold',
                                        }}
                                    />
                                </Row>
                            </a>
                        </CardHeader>
                        <Collapse
                            role="tabpanel"
                            isOpen={openedCollapses === "collapseEleven"}
                        >
                            <CardBody>
                                Anim pariatur cliche reprehenderit, enim eiusmod high life
                                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                                non cupidatat skateboard dolor brunch. Food truck quinoa
                                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                                put a bird on it squid single-origin coffee nulla assumenda
                                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                                excepteur butcher vice lomo. Leggings occaecat craft beer
                                farm-to-table, raw denim aesthetic synth nesciunt you probably
                                haven't heard of them accusamus labore sustainable VHS.
                            </CardBody>
                        </Collapse>
                    </Card>
                    <Card className="card-plain" style={{marginLeft:"2%"}}>
                        <CardHeader role="tab">
                            <a
                                aria-expanded={openedCollapses === "collapseTwelve"}
                                href="#"
                                data-parent="#accordion"
                                data-toggle="collapse"
                                onClick={(e) => { e.preventDefault(); collapsesToggle("collapseTwelve") }}
                            >
                                <Row style={{display: "flex", justifyContent: "space-between"}}>
                                    <div className='text'>
                                        <Label className="form-label" style={{ fontSize: 18, marginTop: "auto", marginBottom:"auto" }}>
                                            - ¿Cómo crear una membresía?
                                        </Label>
                                    </div>
                                    <i 
                                        className="nc-icon nc-minimal-down" 
                                        style={{
                                            marginTop: "auto", 
                                            marginBottom:"auto",
                                            color:"#133148",
                                            fontWeight: 'bold',
                                        }}
                                    />
                                </Row>
                            </a>
                        </CardHeader>
                        <Collapse
                            role="tabpanel"
                            isOpen={openedCollapses === "collapseTwelve"}
                        >
                            <CardBody>
                                Anim pariatur cliche reprehenderit, enim eiusmod high life
                                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                                non cupidatat skateboard dolor brunch. Food truck quinoa
                                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                                put a bird on it squid single-origin coffee nulla assumenda
                                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                                excepteur butcher vice lomo. Leggings occaecat craft beer
                                farm-to-table, raw denim aesthetic synth nesciunt you probably
                                haven't heard of them accusamus labore sustainable VHS.
                            </CardBody>
                        </Collapse>
                    </Card>
                    <Card className="card-plain" style={{marginLeft:"2%"}}>
                        <CardHeader role="tab">
                            <a
                                aria-expanded={openedCollapses === "collapseThirteen"}
                                href="#"
                                data-parent="#accordion"
                                data-toggle="collapse"
                                onClick={(e) => { e.preventDefault(); collapsesToggle("collapseThirteen") }}
                            >
                                <Row style={{display: "flex", justifyContent: "space-between"}}>
                                    <div className='text'>
                                        <Label className="form-label" style={{ fontSize: 18, marginTop: "auto", marginBottom:"auto" }}>
                                            - ¿Cómo ver una reserva de oficina y su verificación?
                                        </Label>
                                    </div>
                                    <i 
                                        className="nc-icon nc-minimal-down" 
                                        style={{
                                            marginTop: "auto", 
                                            marginBottom:"auto",
                                            color:"#133148",
                                            fontWeight: 'bold',
                                        }}
                                    />
                                </Row>
                            </a>
                        </CardHeader>
                        <Collapse
                            role="tabpanel"
                            isOpen={openedCollapses === "collapseThirteen"}
                        >
                            <CardBody>
                                Anim pariatur cliche reprehenderit, enim eiusmod high life
                                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                                non cupidatat skateboard dolor brunch. Food truck quinoa
                                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                                put a bird on it squid single-origin coffee nulla assumenda
                                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                                excepteur butcher vice lomo. Leggings occaecat craft beer
                                farm-to-table, raw denim aesthetic synth nesciunt you probably
                                haven't heard of them accusamus labore sustainable VHS.
                            </CardBody>
                        </Collapse>
                    </Card>
                    <Card className="card-plain" style={{marginLeft:"2%"}}>
                        <CardHeader role="tab">
                            <a
                                aria-expanded={openedCollapses === "collapseFourteen"}
                                href="#"
                                data-parent="#accordion"
                                data-toggle="collapse"
                                onClick={(e) => { e.preventDefault(); collapsesToggle("collapseFourteen") }}
                            >
                                <Row style={{display: "flex", justifyContent: "space-between"}}>
                                    <div className='text'>
                                        <Label className="form-label" style={{ fontSize: 18, marginTop: "auto", marginBottom:"auto" }}>
                                            - ¿Cómo enviar una noticia a mis inquilinos?
                                        </Label>
                                    </div>
                                    <i 
                                        className="nc-icon nc-minimal-down" 
                                        style={{
                                            marginTop: "auto", 
                                            marginBottom:"auto",
                                            color:"#133148",
                                            fontWeight: 'bold',
                                        }}
                                    />
                                </Row>
                            </a>
                        </CardHeader>
                        <Collapse
                            role="tabpanel"
                            isOpen={openedCollapses === "collapseFourteen"}
                        >
                            <CardBody>
                                Anim pariatur cliche reprehenderit, enim eiusmod high life
                                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                                non cupidatat skateboard dolor brunch. Food truck quinoa
                                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                                put a bird on it squid single-origin coffee nulla assumenda
                                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                                excepteur butcher vice lomo. Leggings occaecat craft beer
                                farm-to-table, raw denim aesthetic synth nesciunt you probably
                                haven't heard of them accusamus labore sustainable VHS.
                            </CardBody>
                        </Collapse>
                    </Card>
                    <Card className="card-plain" style={{marginLeft:"2%"}}>
                        <CardHeader role="tab">
                            <a
                                aria-expanded={openedCollapses === "collapseFiveteen"}
                                href="#"
                                data-parent="#accordion"
                                data-toggle="collapse"
                                onClick={(e) => { e.preventDefault(); collapsesToggle("collapseFiveteen") }}
                            >
                                <Row style={{display: "flex", justifyContent: "space-between"}}>
                                    <div className='text'>
                                        <Label className="form-label" style={{ fontSize: 18, marginTop: "auto", marginBottom:"auto" }}>
                                            - ¿Cómo generar un reporte?
                                        </Label>
                                    </div>
                                    <i 
                                        className="nc-icon nc-minimal-down" 
                                        style={{
                                            marginTop: "auto", 
                                            marginBottom:"auto",
                                            color:"#133148",
                                            fontWeight: 'bold',
                                        }}
                                    />
                                </Row>
                            </a>
                        </CardHeader>
                        <Collapse
                            role="tabpanel"
                            isOpen={openedCollapses === "collapseFiveteen"}
                        >
                            <CardBody>
                                Anim pariatur cliche reprehenderit, enim eiusmod high life
                                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                                non cupidatat skateboard dolor brunch. Food truck quinoa
                                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                                put a bird on it squid single-origin coffee nulla assumenda
                                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                                excepteur butcher vice lomo. Leggings occaecat craft beer
                                farm-to-table, raw denim aesthetic synth nesciunt you probably
                                haven't heard of them accusamus labore sustainable VHS.
                            </CardBody>
                        </Collapse>
                    </Card>
                </div>
            </Row>
        </div>
    )
}

export default FrequentQuestions;
