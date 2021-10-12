import { useFormik } from 'formik';
import React from 'react';
import Select from 'react-select';
import { Row, Col, Card, CardBody, Form, CardHeader, Alert, FormGroup } from 'reactstrap';
import { getErrorMessage } from '../../utils/collaboratorTranslations';

export const NewCollaborator = ({ error, officeBranchRoles, loadOfficeBranchRoles, createCollaborator }) => {
  React.useEffect(() => {
    loadOfficeBranchRoles()
  }, [])
  const validate = values => {
    const errors = {};
    if (!values.collaboratorName) {
      errors.name = "Requerido"
    }
    if (!values.collaboratorEmail) {
      errors.email = 'Requerido'
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.collaboratorEmail)
    ) {
      errors.email = 'Dirección de email inválida.'
    }
    if (values.roles.length == 0)
      errors.roles = 'Debe elegir al menos un rol'
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      collaboratorName: "",
      collaboratorEmail: "",
      roles: []
    },
    validate,
    onSubmit: async ({ collaboratorName, collaboratorEmail, roles }) => {
      await createCollaborator({
        email: collaboratorEmail,
        name: collaboratorName,
        roleIds: roles.map(role => role.value)
      });
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
                <Alert isOpen={error.show} color="danger">{getErrorMessage(error.errorCode)}</Alert>
              }
            </CardHeader>
            <CardBody>
              <div className="office-branch-card-title colaborator" style={{ display: 'block', marginTop: 0 }}>
                <div>
                  <FormGroup className={formik.errors.name ? 'has-danger mb-3' : 'mb-3'}>
                    <label
                      for="collaboratorName"
                      class="form-label"
                      style={{ fontSize: 20, color: '#081620' }}
                    >
                      Nombre
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="collaboratorName"
                      name='collaboratorName'
                      placeholder="Nombre del colaborador"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.collaboratorName}
                    />
                    {formik.errors.name ? (
                      <div className="error">{formik.errors.name}</div>
                    ) : null}
                  </FormGroup>
                  <FormGroup className={formik.errors.email ? 'has-danger mb-3' : 'mb-3'}>
                    <label
                      for="collaboratorEmail"
                      className="form-label"
                      style={{ fontSize: 20, color: '#081620' }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="collaboratorEmail"
                      name='collaboratorEmail'
                      placeholder="nombre@ejemplo.com"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.collaboratorEmail}
                    />
                    {formik.errors.email ? (
                      <div className="error">{formik.errors.email}</div>
                    ) : null}
                  </FormGroup>
                  <FormGroup className={formik.errors.roles ? 'has-danger mb-3' : 'mb-3'}>
                    <label
                      className="form-label"
                      style={{ fontSize: 20, color: '#081620' }}
                      htmlFor="roles">
                      Roles
                    </label>
                    <Select
                      className="react-select"
                      classNamePrefix="react-select"
                      id="roles"
                      name="roles"
                      placeholder="Roles"
                      closeMenuOnSelect={false}
                      isMulti={true}
                      value={formik.values.roles}
                      onChange={value => formik.setFieldValue("roles", value)}
                      onBlur={formik.handleBlur}
                      options={officeBranchRoles ? officeBranchRoles.map(role => {
                        return { value: role.id, label: role.name }
                      }) : []}
                    />
                    {formik.errors.roles ? (
                      <div className="error">{formik.errors.roles}</div>
                    ) : <div></div>}
                  </FormGroup>
                </div>
              </div>
              <hr />
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="col-auto">
                  <button type="submit" className="btn btn-primary mb-3">Aceptar</button>
                </div>
                <div className="col-auto">
                  <button type="reset" className="btn btn-primary mb-3" style={{ backgroundColor: '#EB5D60' }}>Cancelar</button>
                </div>
              </div>
            </CardBody>
          </Card>
        </Form>
      </Row>
    </div>
  )
};
