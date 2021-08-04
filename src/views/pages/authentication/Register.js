
import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  // Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
// import { connect } from 'react-redux';
// import { createStart } from '../../stores/actions/auth';
import { useFormik } from "formik";
import { RegisterInfo } from "../../../components/RegisterInfo/RegisterInfo";

// const mapDispatchToProps = (dispatch) => ({
//   create: (data) => dispatch(createStart(data)),
// });

// onCreate = async (data) => {
//   const { createUser } = this.props;
//   if (data) {
//     createUser(data);
//   }
// }

function Register() {

  const validate = values => {
    const errors = {};
    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password.length < 8) {
      errors.password = 'Must be 8 characters or more';
    }

    if (!values.userType) {
      errors.userType = 'Required';
    }

    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    return errors;
  };


  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      userType: '',
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

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
            <RegisterInfo />
          </Col>
          <Col className="mr-auto" lg="4" md="6">
            <Card className="card-signup text-center">
              <CardHeader>
                <CardTitle tag="h4">Creemos tu cuenta</CardTitle>
              </CardHeader>
              <CardBody>
                {/* FORMULARIO REGISTRO*/}
                <Form action="" className="form" method="" onSubmit={formik.handleSubmit}>
                  <FormGroup className={formik.errors.email && formik.touched.email ? 'has-danger' : 'has-success'}>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="fa fa-user" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        name="email"
                        placeholder="Email.."
                        type="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email} />
                    </InputGroup>
                    {formik.errors.email && formik.touched.email && formik.validateOnChange.email? <div className="error">{formik.errors.email}</div> : null}
                  </FormGroup>
                  <FormGroup className={formik.errors.password && formik.touched.password ? 'has-danger' : 'has-success'}>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="fa fa-key" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        name="password"
                        placeholder="Contraseña..."
                        type="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                      />
                    </InputGroup>
                    {formik.errors.password && formik.touched.password  && formik.validateOnChange.password? <div className="error">{formik.errors.password}</div> : null}
                  </FormGroup>
                  <FormGroup>
                    <Input type="select" name="userType" id="select">
                      <option value="RENTER">Usuario Cliente</option>
                      <option value="OFFICE_HOLDER">Propietario de oficinas</option>
                    </Input>
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
                <Button
                  className="btn-round"
                  color="info"
                  type="submit"
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
          backgroundImage: `url(${require("../../../assets/img/bg/Office.jpg").default
            })`,
        }}
      />
    </div>
  );
}

export default Register;
