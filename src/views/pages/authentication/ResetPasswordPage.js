import React from 'react'
import { useFormik } from 'formik'
import { useHistory } from 'react-router-dom';
import { Alert, Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap'
import { Loading } from '../../../components/Loading/Loading';


export const ResetPasswordPage = props => {
    const { loading, error } = props;
    const history = useHistory();

    const validate = values => {
        const errors = {};
        if (!values.password) {
            errors.password = 'Requerido.';
        } else if (values.password.length < 8) {
            errors.password = 'La contraseña debe tener 8 caracteres o más.';
        }
        return errors;
    };

    const formik = useFormik({
        initialValues: {
            password: ''
        },
        validate,
        onSubmit: async values => {
            await props.onResetPassword(values);
            setTimeout(() => {
                history.push('/auth/confirmation-password');
            }, 1200);
        }
    });
    React.useEffect(() => {
        document.body.classList.toggle('login-page');
        return function cleanup() {
            document.body.classList.toggle('login-page');
        };
    });
    return (
        <div className='login-page'>
            <Container>
                <Row style={{ textAlign: 'center' }}>
                    <Col className="mr-auto ml-auto" lg="4" md="6">
                        {
                            loading ? <Loading /> : (
                                <Form className="form" onSubmit={formik.handleSubmit}>
                                    <Card className="card-login">
                                        <CardHeader>
                                            {
                                                <Alert
                                                    isOpen={error !== null}
                                                    color="danger"
                                                >
                                                    <span>Usuario o contraseña incorrectos.</span>
                                                </Alert>
                                            }
                                            <h3>Por favor ingrese su contraseña</h3>
                                        </CardHeader>
                                        <CardBody>
                                            <FormGroup className={formik.errors.password ? 'has-danger' : ''}>
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
                                                Restablecer
                                            </Button>
                                        </CardBody>
                                    </Card>
                                </Form>
                            )}
                    </Col>
                </Row>
            </Container>
            <div
                className={props.loading ? 'background-loading' : 'full-page-background'}
                style={{
                    backgroundImage: `url(${require('../../../assets/img/bg/ana-bernardo.jpg').default
                        })`,
                }}
            />
        </div>
    )
}
