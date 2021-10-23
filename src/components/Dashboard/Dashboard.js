import React from "react";
import { useFormik } from "formik";
import Select from 'react-select';
// react plugin used to create charts
import { Line } from "react-chartjs-2";
// react plugin for creating vector maps
// import { VectorMap } from "react-jvectormap";

// reactstrap components
import {
  Form,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  // Label,
  // FormGroup,
  // Input,
  // Table,
  Row,
  Col,
  Container,
  Table,
  // UncontrolledTooltip,
} from "reactstrap";

import {
  chartExample1,
  //   chartExample4,
  //   chartExample5,
  //   chartExample6,
  //   chartExample7,
  //   chartExample8,
} from "../../variables/charts.js";


function Dashboard(props) {
  const date = new Date().getMonth();
  const { offices, branch, collaborators } = props;
  const validate = values => {
    const errors = {};
    if (!values.year) {
      errors.year = 'Requerido.';
    }
    return errors;
  };

  const monthFilter = [
    { value: 'JANUARY', label: 'Enero' },
    { value: 'FEBRUARY', label: 'Febrero' },
    { value: 'MARCH', label: 'Marzo' },
    { value: 'APRIL', label: 'Abril' },
    { value: 'MAY', label: 'Mayo' },
    { value: 'JUNE', label: 'Junio' },
    { value: 'JULY', label: 'Julio' },
    { value: 'AUGUST', label: 'Agosto' },
    { value: 'SEPTEMBER', label: 'Septiembre' },
    { value: 'OCTOBER', label: 'Octubre' },
    { value: 'NOVEMBER', label: 'Noviembre' },
    { value: 'DECEMBER', label: 'Diciembre' },
  ];



  // const bookingOfficeForm = useFormik({
  //   initialValues: {
  //     month: 2021
  //   },
  //   validate,
  //   onChange: async (values) => {
  //     console.log(values)
  //     // const office = { privacy: values.office_type.value, enable: values.enabledOffice.value, ...values }
  //     // props.create(props.branch.id, office)
  //   },
  // });

  const amountOfficeForm = useFormik({
    initialValues: {
      monthOffice: monthFilter[date]
    },
    validate,
    onChange: async (values) => {
      console.log(values)
      // const office = { privacy: values.office_type.value, enable: values.enabledOffice.value, ...values }
      // props.create(props.branch.id, office)
    },
  });
  const amountYearForm = useFormik({
    initialValues: {
      year: 2021
    },
    validate,
    onChange: async (values) => {
      console.log(values)
      // const office = { privacy: values.office_type.value, enable: values.enabledOffice.value, ...values }
      // props.create(props.branch.id, office)
    },
  });
  const yearFilter = [
    { value: 2021, label: '2021' },
    { value: 2020, label: '2020' }
  ]
  let capacityTotal = 0;
  let collaboratorTotal = collaborators ? collaborators.length : 0;

  offices.map(office => capacityTotal += office.capacity)
  return (
    <>

      <div className="content">
        <Row style={{ display: 'grid', paddingTop: 40 }}>
          <Col xs="12" md="6" lg="12" xg="12">
            <h1>
              Estadísticas <small color="red">Generales</small>
            </h1>
            <hr />
          </Col>
        </Row>
        <Container>
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
                        <CardTitle tag="p">{collaboratorTotal} <i className="fa-solid fa-user-tie" ></i></CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats text-center">
                    Cantidad de colaboradores <br /> <i>{branch.name}</i>
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
                        <CardTitle tag="p">{capacityTotal} <i className="fa-solid fa-user-tie" ></i></CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats text-center">
                    Cantidad de lugares <br /> <i>{branch.name}</i>
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
                        <p className="card-category">Ingresos</p>
                        <CardTitle tag="p">$ 1.345</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats text-center">
                    Ingresos <br /> <i>{branch.name}</i>
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
        <Row>
          <Col xs="12" md="6" lg="12" xg="12">
            <h2>
              Ingresos de la<small color="red"> Sucursal</small>
            </h2>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col lg="6" sm="6">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Por oficina</CardTitle>
                <Row style={{ display: 'flex', alignContent: 'center', alignItems: 'flex-end' }}>
                  <Col sm="6">
                    <p className="card-category" style={{ color: '#34b18a' }}>Oficinas de la sucursal</p>
                  </Col>
                  <Col sm="6">
                    <Form onSubmit={amountOfficeForm.handleChange}>
                      <div className="pull-right pull-right-filter" style={{ width: '50%' }}>
                        <Select
                          className="react-select primary"
                          classNamePrefix="react-select"
                          name="monthOffice"
                          value={amountOfficeForm.values.monthOffice}
                          placeholder={amountOfficeForm.values.monthOffice}
                          onChange={value => amountOfficeForm.setFieldValue("monthOffice", value)}
                          onBlur={amountOfficeForm.handleBlur}
                          options={monthFilter}

                        />
                      </div>
                    </Form>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col md="12">
                    <Table>
                      <tbody>
                        <tr>
                          <td>
                          </td>
                          <td>USA</td>
                          <td className="text-right">2.920</td>
                          <td className="text-right">53.23%</td>
                        </tr>
                        <tr>
                          <td>
                          </td>
                          <td>Germany</td>
                          <td className="text-right">1.300</td>
                          <td className="text-right">20.43%</td>
                        </tr>
                        <tr>
                          <td>
                          </td>
                          <td>Australia</td>
                          <td className="text-right">760</td>
                          <td className="text-right">10.35%</td>
                        </tr>
                        <tr>
                          <td>
                          </td>
                          <td>United Kingdom</td>
                          <td className="text-right">690</td>
                          <td className="text-right">7.87%</td>
                        </tr>
                        <tr>
                          <td>
                          </td>
                          <td>Romania</td>
                          <td className="text-right">600</td>
                          <td className="text-right">5.94%</td>
                        </tr>
                        <tr>
                          <td>
                          </td>
                          <td>Brasil</td>
                          <td className="text-right">550</td>
                          <td className="text-right">4.34%</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6" sm="6">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">
                  Por año
                </CardTitle>
                <Row>
                  <Col sm="6">
                    <div className="numbers pull-left">$34,657</div>
                  </Col>
                  <Col sm="6">
                    <div className="pull-right pull-right-filter" style={{ width: '36%' }}>
                      <Select
                        className="react-select primary"
                        classNamePrefix="react-select"
                        name="year"
                        value={amountYearForm.values.year}
                        placeholder={amountYearForm.values.year}
                        onChange={value => amountYearForm.setFieldValue("year", value)}
                        onBlur={amountYearForm.handleBlur}
                        options={yearFilter}

                      />
                    </div>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <h6 className="big-title">
                  Total ingresos mensuales
                </h6>
                <Line
                  data={chartExample1.data}
                  options={chartExample1.options}
                  height={280}
                  width={726}
                />
              </CardBody>
            </Card>
          </Col>

        </Row>
        <Row>
          <Col xs="12" md="6" lg="12" xg="12">
            <h2>
              Reservas por<small color="red"> Oficinas</small>
            </h2>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col lg="6" sm="6">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Por oficina</CardTitle>
                <p className="card-category" style={{ color: '#34b18a' }}>Oficinas de la sucursal</p>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col md="12">
                    <Table>
                      <tbody>
                        <tr>
                          <td>
                          </td>
                          <td>USA</td>
                          <td className="text-right">2.920</td>
                          <td className="text-right">53.23%</td>
                        </tr>
                        <tr>
                          <td>
                          </td>
                          <td>Germany</td>
                          <td className="text-right">1.300</td>
                          <td className="text-right">20.43%</td>
                        </tr>
                        <tr>
                          <td>
                          </td>
                          <td>Australia</td>
                          <td className="text-right">760</td>
                          <td className="text-right">10.35%</td>
                        </tr>
                        <tr>
                          <td>
                          </td>
                          <td>United Kingdom</td>
                          <td className="text-right">690</td>
                          <td className="text-right">7.87%</td>
                        </tr>
                        <tr>
                          <td>
                          </td>
                          <td>Romania</td>
                          <td className="text-right">600</td>
                          <td className="text-right">5.94%</td>
                        </tr>
                        <tr>
                          <td>
                          </td>
                          <td>Brasil</td>
                          <td className="text-right">550</td>
                          <td className="text-right">4.34%</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>

      </div>
      {/* <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Global Sales by Top Locations</CardTitle>
                <p className="card-category">All products that were shipped</p>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col md="6">
                    <Table responsive>
                      <tbody>
                        <tr>
                          <td>
                            <div className="flag">
                              <img
                                alt="..."
                                src={require("../../assets/img/flags/US.png").default}
                              />
                            </div>
                          </td>
                          <td>USA</td>
                          <td className="text-right">2.920</td>
                          <td className="text-right">53.23%</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="flag">
                              <img
                                alt="..."
                                src={require("../../assets/img/flags/DE.png").default}
                              />
                            </div>
                          </td>
                          <td>Germany</td>
                          <td className="text-right">1.300</td>
                          <td className="text-right">20.43%</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="flag">
                              <img
                                alt="..."
                                src={require("../../assets/img/flags/AU.png").default}
                              />
                            </div>
                          </td>
                          <td>Australia</td>
                          <td className="text-right">760</td>
                          <td className="text-right">10.35%</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="flag">
                              <img
                                alt="..."
                                src={require("../../assets/img/flags/GB.png").default}
                              />
                            </div>
                          </td>
                          <td>United Kingdom</td>
                          <td className="text-right">690</td>
                          <td className="text-right">7.87%</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="flag">
                              <img
                                alt="..."
                                src={require("../../assets/img/flags/RO.png").default}
                              />
                            </div>
                          </td>
                          <td>Romania</td>
                          <td className="text-right">600</td>
                          <td className="text-right">5.94%</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="flag">
                              <img
                                alt="..."
                                src={require("../../assets/img/flags/BR.png").default}
                              />
                            </div>
                          </td>
                          <td>Brasil</td>
                          <td className="text-right">550</td>
                          <td className="text-right">4.34%</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                  <Col className="ml-auto mr-auto" md="6">
                    <VectorMap
                      map={"world_mill"}
                      backgroundColor="transparent"
                      zoomOnScroll={false}
                      containerStyle={{
                        height: "300px",
                      }}
                      containerClassName="map"
                      regionStyle={{
                        initial: {
                          fill: "#e4e4e4",
                          "fill-opacity": 0.9,
                          stroke: "none",
                          "stroke-width": 0,
                          "stroke-opacity": 0,
                        },
                      }}
                      series={{
                        regions: [
                          {
                            values: mapData,
                            scale: ["#AAAAAA", "#444444"],
                            normalizeFunction: "polynomial",
                          },
                        ],
                      }}
                    />
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <Card className="card-tasks">
              <CardHeader>
                <CardTitle tag="h4">Tasks</CardTitle>
                <h5 className="card-category">Backend development</h5>
              </CardHeader>
              <CardBody>
                <div className="table-full-width table-responsive">
                  <Table>
                    <tbody>
                      <tr>
                        <td>
                          <FormGroup check>
                            <Label check>
                              <Input defaultChecked type="checkbox" />
                              <span className="form-check-sign" />
                            </Label>
                          </FormGroup>
                        </td>
                        <td className="img-row">
                          <div className="img-wrapper">
                            <img
                              alt="..."
                              className="img-raised"
                              src={
                                require("../../assets/img/faces/clem-onojeghuo-3.jpg")
                                  .default
                              }
                            />
                          </div>
                        </td>
                        <td className="text-left">
                          Sign contract for "What are conference organizers
                          afraid of?"
                        </td>
                        <td className="td-actions text-right">
                          <Button
                            className="btn-round btn-icon btn-icon-mini btn-neutral"
                            color="info"
                            id="tooltip42906017"
                            title=""
                            type="button"
                          >
                            <i className="nc-icon nc-ruler-pencil" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip42906017"
                          >
                            Edit Task
                          </UncontrolledTooltip>
                          <Button
                            className="btn-round btn-icon btn-icon-mini btn-neutral"
                            color="danger"
                            id="tooltip570363224"
                            title=""
                            type="button"
                          >
                            <i className="nc-icon nc-simple-remove" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip570363224"
                          >
                            Remove
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <FormGroup check>
                            <Label check>
                              <Input type="checkbox" />
                              <span className="form-check-sign" />
                            </Label>
                          </FormGroup>
                        </td>
                        <td className="img-row">
                          <div className="img-wrapper">
                            <img
                              alt="..."
                              className="img-raised"
                              src={
                                require("../../assets/img/faces/erik-lucatero-2.jpg")
                                  .default
                              }
                            />
                          </div>
                        </td>
                        <td className="text-left">
                          Lines From Great Russian Literature? Or E-mails From
                          My Boss?
                        </td>
                        <td className="td-actions text-right">
                          <Button
                            className="btn-round btn-icon btn-icon-mini btn-neutral"
                            color="info"
                            id="tooltip584875601"
                            title=""
                            type="button"
                          >
                            <i className="nc-icon nc-ruler-pencil" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip584875601"
                          >
                            Edit Task
                          </UncontrolledTooltip>
                          <Button
                            className="btn-round btn-icon btn-icon-mini btn-neutral"
                            color="danger"
                            id="tooltip517629613"
                            title=""
                            type="button"
                          >
                            <i className="nc-icon nc-simple-remove" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip517629613"
                          >
                            Remove
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <FormGroup check>
                            <Label check>
                              <Input defaultChecked type="checkbox" />
                              <span className="form-check-sign" />
                            </Label>
                          </FormGroup>
                        </td>
                        <td className="img-row">
                          <div className="img-wrapper">
                            <img
                              alt="..."
                              className="img-raised"
                              src={
                                require("../../assets/img/faces/kaci-baum-2.jpg")
                                  .default
                              }
                            />
                          </div>
                        </td>
                        <td className="text-left">
                          Using dummy content or fake information in the Web
                          design process can result in products with unrealistic
                        </td>
                        <td className="td-actions text-right">
                          <Button
                            className="btn-round btn-icon btn-icon-mini btn-neutral"
                            color="info"
                            id="tooltip792337830"
                            title=""
                            type="button"
                          >
                            <i className="nc-icon nc-ruler-pencil" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip792337830"
                          >
                            Edit Task
                          </UncontrolledTooltip>
                          <Button
                            className="btn-round btn-icon btn-icon-mini btn-neutral"
                            color="danger"
                            id="tooltip731952378"
                            title=""
                            type="button"
                          >
                            <i className="nc-icon nc-simple-remove" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip731952378"
                          >
                            Remove
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <FormGroup check>
                            <Label check>
                              <Input type="checkbox" />
                              <span className="form-check-sign" />
                            </Label>
                          </FormGroup>
                        </td>
                        <td className="img-row">
                          <div className="img-wrapper">
                            <img
                              alt="..."
                              className="img-raised"
                              src={
                                require("../../assets/img/faces/clem-onojeghuo-3.jpg")
                                  .default
                              }
                            />
                          </div>
                        </td>
                        <td className="text-left">
                          But I must explain to you how all this mistaken idea
                          of denouncing pleasure
                        </td>
                        <td className="td-actions text-right">
                          <Button
                            className="btn-round btn-icon btn-icon-mini btn-neutral"
                            color="info"
                            id="tooltip825783733"
                            title=""
                            type="button"
                          >
                            <i className="nc-icon nc-ruler-pencil" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip825783733"
                          >
                            Edit Task
                          </UncontrolledTooltip>
                          <Button
                            className="btn-round btn-icon btn-icon-mini btn-neutral"
                            color="danger"
                            id="tooltip285089652"
                            title=""
                            type="button"
                          >
                            <i className="nc-icon nc-simple-remove" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip285089652"
                          >
                            Remove
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="fa fa-refresh spin" />
                  Updated 3 minutes ago
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col md="6">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">2021 Sales</CardTitle>
                <p className="card-category">All products including Taxes</p>
              </CardHeader>
              <CardBody>
                <Bar
                  data={chartExample4.data}
                  options={chartExample4.options}
                />
              </CardBody>
              <CardFooter>
                <div className="legend">
                  <i className="fa fa-circle text-info" />
                  Tesla Model S <i className="fa fa-circle text-danger" />
                  BMW 5 Series
                </div>
                <hr />
                <div className="stats">
                  <i className="fa fa-check" />
                  Data information certified
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="3">
            <Card>
              <CardHeader>
                <CardTitle>Email Statistics</CardTitle>
                <p className="card-category">Last Campaign Performance</p>
              </CardHeader>
              <CardBody style={{ height: "253px" }}>
                <Doughnut
                  data={chartExample5.data}
                  options={chartExample5.options}
                  className="ct-chart ct-perfect-fourth"
                  height={300}
                  width={456}
                />
              </CardBody>
              <CardFooter>
                <div className="legend">
                  <i className="fa fa-circle text-info" />
                  Open
                </div>
                <hr />
                <div className="stats">
                  <i className="fa fa-calendar" />
                  Number of emails sent
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col md="3">
            <Card>
              <CardHeader>
                <CardTitle>New Visitators</CardTitle>
                <p className="card-category">Out Of Total Number</p>
              </CardHeader>
              <CardBody style={{ height: "253px" }}>
                <Doughnut
                  data={chartExample6.data}
                  options={chartExample6.options}
                  className="ct-chart ct-perfect-fourth"
                  height={300}
                  width={456}
                />
              </CardBody>
              <CardFooter>
                <div className="legend">
                  <i className="fa fa-circle text-warning" />
                  Visited
                </div>
                <hr />
                <div className="stats">
                  <i className="fa fa-check" />
                  Campaign sent 2 days ago
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col md="3">
            <Card>
              <CardHeader>
                <CardTitle>Orders</CardTitle>
                <p className="card-category">Total number</p>
              </CardHeader>
              <CardBody style={{ height: "253px" }}>
                <Doughnut
                  data={chartExample7.data}
                  options={chartExample7.options}
                  className="ct-chart ct-perfect-fourth"
                  height={300}
                  width={456}
                />
              </CardBody>
              <CardFooter>
                <div className="legend">
                  <i className="fa fa-circle text-danger" />
                  Completed
                </div>
                <hr />
                <div className="stats">
                  <i className="fa fa-clock-o" />
                  Updated 3 minutes ago
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col md="3">
            <Card>
              <CardHeader>
                <CardTitle>Subscriptions</CardTitle>
                <p className="card-category">Our Users</p>
              </CardHeader>
              <CardBody style={{ height: "253px" }}>
                <Doughnut
                  data={chartExample8.data}
                  options={chartExample8.options}
                  className="ct-chart ct-perfect-fourth"
                  height={300}
                  width={456}
                />
              </CardBody>
              <CardFooter>
                <div className="legend">
                  <i className="fa fa-circle text-secondary" />
                  Ended
                </div>
                <hr />
                <div className="stats">
                  <i className="fa fa-history" />
                  Total users
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row> */}

    </>
  );
}

export default Dashboard;
