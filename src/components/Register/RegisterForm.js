import React, { useState } from 'react';
import { useFormik } from 'formik';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from 'reactstrap';
// import { useHistory } from 'react-router-dom';

export const RegisterForm = props => {
  // const history = useHistory();
  const [userCredentials, setUserCredentials] = useState(undefined);

  const validate = values => {
    const errors = {};
    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password.length < 8) {
      errors.password = 'Must be 8 characters or more';
    }
    if (!values.type) {
      errors.type = 'Required';
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
      email: 'admin@mail.com',
      password: '123456789',
      type: 'OFFICE_HOLDER',
    },
    validate,
    onSubmit: async values => {
      setUserCredentials(values);
      console.info("UserCredential",userCredentials);
      await props.onRegister(userCredentials);
      // history.push('/');
    },
  });
  return (
    <Form className="form" onSubmit={formik.handleSubmit}>
      <Card className="card-signup text-center">
        <CardHeader>
          <CardTitle tag="h4">Creemos tu cuenta</CardTitle>
        </CardHeader>
        <CardBody>
          <FormGroup
            className={
              formik.errors.email && formik.touched.email
                ? 'has-danger'
                : 'has-success'
            }>
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
                value={formik.values.email}
              />
            </InputGroup>
            {formik.errors.email &&
              formik.touched.email &&
              formik.validateOnChange.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
          </FormGroup>
          <FormGroup
            className={
              formik.errors.password && formik.touched.password
                ? 'has-danger'
                : 'has-success'
            }>
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
            {formik.errors.password &&
              formik.touched.password &&
              formik.validateOnChange.password ? (
              <div className="error">{formik.errors.password}</div>
            ) : null}
          </FormGroup>
          <FormGroup>
            <Input
              type="select"
              name="type"
              id="select"
              onChange={formik.handleChange}
              value={formik.values.type}>
              <option value="RENTER">Usuario Cliente</option>
              <option value="OFFICE_HOLDER">Propietario de oficinas</option>
            </Input>
          </FormGroup>
        </CardBody>
        <CardFooter>
          <Button
            className="btn-round"
            color="info"
            type="submit"
            disabled={formik.isSubmitting}>
            Crear cuenta
          </Button>
        </CardFooter>
      </Card>
    </Form>
  );
};
