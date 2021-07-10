
import React from "react";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  // Label,
  // FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

function Register() {
  React.useEffect(() => {
    document.body.classList.toggle("register-page");
    return function cleanup() {
      document.body.classList.toggle("register-page");
    };
  });
  return (
    <div className="register-page">
      <Container>
        <Row>
          <Col className="ml-auto" lg="5" md="5">
            <div className="info-area info-horizontal mt-5">
              <div className="icon icon-primary">
                <i className="nc-icon nc-tv-2" />
              </div>
              <div className="description">
                <h5 className="info-title">Simple y rápido</h5>
                <p className="description">
                  Te registras, buscas la oficina que necesitas, pagás tu reserva y 
                  comenza a utilizarla.
                </p>
              </div>
            </div>
            <div className="info-area info-horizontal">
              <div className="icon icon-primary">
                <i className="nc-icon nc-html5" />
              </div>
              <div className="description">
                <h5 className="info-title">Oficinas</h5>
                <p className="description">
                  Encontrá oficinas privadas o compartidas con los servicios que necesitás
                  para realizar tu trabajo.
                </p>
              </div>
            </div>
            <div className="info-area info-horizontal">
              <div className="icon icon-info">
                <i className="nc-icon nc-atom" />
              </div>
              <div className="description">
                <h5 className="info-title">Reserva</h5>
                <p className="description">
                  Gestioná tus horarios de alquiler de manera rápida y sencilla.
                </p>
              </div>
            </div>
          </Col>
          <Col className="mr-auto" lg="4" md="6">
            <Card className="card-signup text-center">
              <CardHeader>
                <CardTitle tag="h4">Creemos tu cuenta</CardTitle>
              </CardHeader>
              <CardBody>
                <Form action="" className="form" method="">
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="fa fa-user" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Nombre..." type="text" />
                  </InputGroup>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="fa fa-user" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Apellido..." type="text" />
                  </InputGroup>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="fa fa-envelope" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Correo..." type="email" />
                  </InputGroup>
                  {/* <FormGroup check className="text-left">
                    <Label check>
                      <Input defaultChecked type="checkbox" />
                      <span className="form-check-sign" />I agree to the{" "}
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        terms and conditions
                      </a>
                      .
                    </Label>
                  </FormGroup> */}
                </Form>
              </CardBody>
              <CardFooter>
                <Button
                  className="btn-round"
                  color="info"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  Crear cuenta
                </Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Container>
      <div
        className="full-page-background"
        style={{
          backgroundImage: `url(${require("../../assets/img/bg/Office.jpg").default
            })`,
        }}
      />
    </div>
  );
}

export default Register;
