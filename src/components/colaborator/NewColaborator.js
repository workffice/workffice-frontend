import { useFormik } from 'formik';
import React from 'react';
import { useHistory } from 'react-router';
import { Row, Col, Card, CardBody, Form, CardHeader, Alert } from 'reactstrap';

export const NewColaborator = (props) => {
  const { officeBranches } = props;
  const { error } = props;
  const history = useHistory();
  const validate = values => {
    const errors = {};
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
      name: '',
      email: '',
      roleIds: ["e486e009-a132-47cd-bb83-3c38d1c15ea9"]
    },
    validate,
    onSubmit: async (credentials) => {
      console.log('credentials: ', credentials);
      await props.onCreateColaborator(credentials, officeBranches.data[0].id);
      history.push('/admin/colaborators')
    }
  })

  return (

    <div className="content">
      <Row style={{ display: 'grid', paddingTop: 40 }}>
        <Col xs="6" md="6" lg="12" xg="12">
          <h1>
            Nuevo <small color="red">Colaborador</small>
          </h1>
          <hr />
        </Col>
      </Row>

      <Row>
        <Form onSubmit={formik.handleSubmit} style={{ width: '100%' }}>
          <Card style={{ width: '100%' }}>
            <CardHeader>
              {
                formik.errors && <Alert isOpen={error.show} color="danger">{error}</Alert>
              }
            </CardHeader>
            <CardBody>
              <div class="office-branch-card-title colaborator" style={{ display: 'block', marginTop: 0 }}>
                <row>
                  <div class="mb-3">
                    <label
                      for="nameColaborator"
                      class="form-label"
                      style={{ fontSize: 20, color: '#081620' }}
                    >
                      Nombre
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="nameColaborator"
                      name='name'
                      placeholder="Nombre del colaborador"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.name}
                    />
                  </div>
                  <div className={formik.errors.email ? 'has-danger mb-3' : 'mb-3'}>
                    <label
                      for="emailColaborator"
                      class="form-label"
                      style={{ fontSize: 20, color: '#081620' }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="emailColaborator"
                      name='email'
                      placeholder="nombre@ejemplo.com"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                    />
                    {formik.errors.email && formik.touched.email ? (
                      <div className="error">{formik.errors.email}</div>
                    ) : null}
                  </div>
                </row>
              </div>
              <hr />
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div class="col-auto">
                  <button type="submit" class="btn btn-primary mb-3">Aceptar</button>
                </div>
                <div class="col-auto">
                  <button type="reset" class="btn btn-primary mb-3" style={{ backgroundColor: '#EB5D60' }}>Cancelar</button>
                </div>
              </div>
            </CardBody>
          </Card>
        </Form>
      </Row>
    </div>
  )
};
