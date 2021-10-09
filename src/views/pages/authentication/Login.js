import React from 'react';

import {
  Alert,
  Button,
  Card,
  CardHeader,
  CardBody,
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
import { useHistory } from 'react-router-dom';
import { Loading } from '../../../components/Loading/Loading';
import { customizedErrorAuth } from '../../../infra/errorsAuth';
import { useDispatch } from 'react-redux';
import { HIDE_ERROR } from '../../../stores/actions';


const Login = (props) => {
  const { loading, error } = props;
  const history = useHistory();
  const dispatch = useDispatch()
  const validate = values => {
    const errors = {};
    if (!values.password) {
      errors.password = 'Requerido.';
    } else if (! /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i.test(values.password)) {
      errors.password = 'La contraseña debe tener 8 caracteres o más, y \n almenos un caracter, un número y una mayuscula';
    } else if (values.password.trim().length === 0) {
      errors.password = 'La contraseña no puede tener solos espacios'
    }
    if (!values.email) {
      errors.email = 'Requerido.';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Dirección de email inválida.';
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: async (credentials) => {
      await props.onLogin(credentials);
      error.message === null && history.push("/office-branch/select");
    }
  });

  React.useEffect(() => {
    if (error.show) {
      setTimeout(() => {
        dispatch({ type: HIDE_ERROR })
      }, 2500);
    }
  }, [error]);

  React.useEffect(() => {
    document.body.classList.toggle('login-page');
    return function cleanup() {
      document.body.classList.toggle('login-page');
    };
  });

  return (
    <div className="login-page">
      <Container>
        <Row
          style={{ textAlign: 'center' }}
        >
          <Col className="ml-auto mr-auto" lg="4" md="6">
            {/* LOGIN FORM */}
            {
              loading ? <Loading /> : (
                <Form onSubmit={formik.handleSubmit}>
                  <Card className="card-login">
                    <CardHeader>
                      {
                        <Alert
                          isOpen={error.show && error.message!==null}
                          color="danger"
                          fade={false}
                        // transition={{ ...Fade.defaultProps, unmountOnExit: true }}
                        >
                          {customizedErrorAuth(error.message)}
                        </Alert>
                      }
                      <h3 className="header text-center">Login</h3>
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
                            placeholder="Correo.."
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
                      <Button
                        block
                        className="btn-round"
                        color="success"
                        type="submit"
                      >
                        Iniciar Sesión
                      </Button>
                    </CardBody>
                  </Card>
                </Form>
              )

            }

          </Col>
        </Row>
      </Container>
      <div
        className={props.loading ? 'background-loading' : 'full-page-background'}
        style={{
          backgroundImage: `url(${require('../../../assets/img/bg/office1.jpg').default
            })`,
        }}
      />
    </div >
  );
}

export default Login;
