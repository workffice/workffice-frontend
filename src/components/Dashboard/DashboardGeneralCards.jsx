import React, { useEffect } from 'react'
import { Card, CardBody, CardFooter, CardTitle, Col, Row } from 'reactstrap'

export const DashboardGeneralCards = (props) => {
  const { reportOfficeYear } = props.reports;
  const total = () => {
    if (reportOfficeYear.length > 0) {
      return reportOfficeYear.reduce((prevValue, currentValue) => {
        return prevValue += currentValue.totalAmount;
      }, 0);
    }
  }
  useEffect(() => {
    total();
  }, [reportOfficeYear])
  return (
    <Row>
      <Col lg="4" md="6" sm="6">
        <Card className="card-stats">
          <CardBody>
            <Row>
              <Col md="4" xs="5">
                <div className="icon-big text-center icon-warning">
                  <i className="fa fa-users text-primary" />
                </div>
              </Col>
              <Col md="8" xs="7">
                <div className="numbers">
                  <p className="card-category">Colaboradores</p>
                  <CardTitle tag="p">{props.collaboratorTotal} <i className="fa-solid fa-user-tie" ></i></CardTitle>
                  <p />
                </div>
              </Col>
            </Row>
          </CardBody>
          <CardFooter>
            <hr />
            <div className="stats text-center">
              Cantidad de colaboradores <br /> <i>{props.branch.name}</i>
            </div>
          </CardFooter>
        </Card>
      </Col>
      <Col lg="4" md="6" sm="6">
        <Card className="card-stats">
          <CardBody>
            <Row>
              <Col md="4" xs="5">
                <div className="icon-big text-center icon-warning">
                  <i className="fa fa-user text-warning" />
                </div>
              </Col>
              <Col md="8" xs="7">
                <div className="numbers">
                  <p className="card-category">Capacidad</p>
                  <CardTitle tag="p">{props.capacityTotal} <i className="fa-solid fa-user-tie" ></i></CardTitle>
                  <p />
                </div>
              </Col>
            </Row>
          </CardBody>
          <CardFooter>
            <hr />
            <div className="stats text-center">
              Cantidad de lugares <br /> <i>{props.branch.name}</i>
            </div>
          </CardFooter>
        </Card>
      </Col>
      <Col lg="4" md="6" sm="6">
        <Card className="card-stats">
          <CardBody>
            <Row>
              <Col md="4" xs="5">
                <div className="icon-big text-center icon-warning">
                  <i className="nc-icon nc-money-coins text-success" />
                </div>
              </Col>
              <Col md="8" xs="7">
                <div className="numbers">
                  <p className="card-category">Ingresos del Año</p>
                  <CardTitle tag="p">$ {total() ? total() : 0}</CardTitle>
                  <p />
                </div>
              </Col>
            </Row>
          </CardBody>
          <CardFooter>
            <hr />
            <div className="stats text-center">
              Ingresos <br /> <i>{props.branch.name}</i>
            </div>
          </CardFooter>
        </Card>
      </Col>
    </Row>
  )
}
