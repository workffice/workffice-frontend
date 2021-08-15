import React from 'react';

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col,
  Row,
  FormGroup,
} from 'reactstrap';

import { useFormik } from 'formik';

function Login() {
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
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: ' ',
      password: '',
      userType: ' ',
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  React.useEffect(() => {
    document.body.classList.toggle('login-page');
    return function cleanup() {
      document.body.classList.toggle('login-page');
    };
  });
  return (
    <div className="login-page">
      <Container>
        <Row>
          <Col className="ml-auto mr-auto" lg="4" md="6">
            {/*LOGIN FORM */}
            <Form onSubmit={formik.handleSubmit}>
              <Card className="card-login">
                <CardHeader>
                  <CardHeader>
                    <h3 className="header text-center">Login</h3>
                  </CardHeader>
                </CardHeader>
                <CardBody>
                  <FormGroup
                    className={formik.errors.email ? 'has-danger' : ''}>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="fa fa-envelope" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        name="email"
                        placeholder="Email.."
                        type="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                      />
                    </InputGroup>
                    {formik.errors.email && formik.touched.email ? (
                      <div className="error">{formik.errors.email}</div>
                    ) : null}
                  </FormGroup>
                  <FormGroup
                    className={formik.errors.password ? 'has-danger' : ''}>
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
                        autoComplete="off"
                      />
                    </InputGroup>
                    {formik.errors.password && formik.touched.password ? (
                      <div className="error">{formik.errors.password}</div>
                    ) : null}
                  </FormGroup>
                  <br />
                </CardBody>
                <CardFooter>
                  <Button
                    block
                    className="btn-round mb-3"
                    color="success"
                    type="submit">
                    Iniciar Sesión
                  </Button>
                </CardFooter>
              </Card>
            </Form>
          </Col>
        </Row>
      </Container>
      <div
        className="full-page-background"
        style={{
          backgroundImage: `url(${
            require('../../../assets/img/bg/office1.jpg').default
          })`,
        }}
      />
    </div>
  );
}

export default Login;
