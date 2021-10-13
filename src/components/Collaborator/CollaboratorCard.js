import { useFormik } from 'formik';
import React from 'react';
import Select from 'react-select';
import { Button, Col, Form, FormGroup } from 'reactstrap';
import { getStatus } from '../../utils/collaboratorTranslations';

export const CollaboratorCard = props => {
  React.useEffect(() => {
    props.loadCollaboratorRoles(props.id);
  }, [])

  const {
    id,
    name,
    email,
    status,
    officeBranchRoles,
    collaboratorRoles,
    updateCollaborator,
  } = props

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      roles: collaboratorRoles ? collaboratorRoles.map(role => {
        return { value: role.id, label: role.name }
      }) : [],
    },
    onSubmit: async ({roles}) => {
      const roleIds = roles.map(role => role.value)
      updateCollaborator(id, {
        name: name,
        roleIds: roleIds,
      })
    },
  });
  return (<>
    <div className='card-user card'>
      <div style={{ position: 'relative' }}>
        <div className='image' id='image' style={{ position: 'absolute' }}>
          <img alt='...' src='https://demos.creative-tim.com/paper-dashboard-pro-react/static/media/damir-bosnjak.efcaca50.jpg' />
        </div>
        <div>
          <div
            className='td-actions text-right'
            style={{
              alignItems: 'flex-end',
              display: 'flex',
              justifyContent: 'flex-end',
            }}>
            <button type='button' id='tooltip570363224' title="true" className="btn-round btn-icon btn-icon-mini btn-neutral btn btn-danger" style={{ marginRight: 5 }}>
              <i className='nc-icon nc-simple-remove'></i>
            </button>
          </div>
        </div>
      </div>
      <div className='card-body' style={{ minHeight: 100 }}>
        <div className='author' style={{ marginTop: -20 }}>
          <a href='#alguien' style={{ textDecoration: 'none' }}>
            <div style={{ justifyContent: 'center', display: 'flex' }}>
              <div
                className='avatar border-gray'
                style={{
                  width: 124,
                  height: 124,
                  position: 'relative',
                  backgroundColor: '#34B18A',
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignContent: 'center',
                  display: 'flex',
                }}>
                <h1 style={{
                  justifyContent: 'center',
                  marginBottom: 0,
                  fontSize: 60,
                  color: 'white',
                }}>C</h1>
              </div>
            </div>
          </a>
          <a href='#' style={{ textDecoration: 'none' }}>
            <h5>{name}</h5>
          </a>
          <p className='description'>{email}</p>
        </div>
      </div>
      <div className='card-footer'>
        <Col>
          <p className='description'>{getStatus(status)}</p>
        </Col>
        <Col>
          <Form onSubmit={formik.handleSubmit}>
            <FormGroup className='button-container'>
              <label htmlFor="roles">Roles</label>
              <Select
                className="react-select"
                classNamePrefix="react-select"
                id="roles"
                name="roles"
                placeholder="Roles"
                closeMenuOnSelect={false}
                isMulti
                value={formik.values.roles}
                onChange={value => formik.setFieldValue("roles", value)}
                onBlur={formik.handleBlur}
                options={officeBranchRoles ? officeBranchRoles.map(role => {
                  return { value: role.id, label: role.name }
                }) : []}
              />
            </FormGroup>
            <Button className="btn btn-primary" type="submit" disabled={formik.isSubmitting}>Actualizar</Button>
          </Form>
        </Col>
      </div>
    </div>
  </>)
};
