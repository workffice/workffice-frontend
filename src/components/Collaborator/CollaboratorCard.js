import React from 'react';
import { Col } from 'reactstrap';
import { EmptyComponent } from '../Empty/EmptyComponent';

export const CollaboratorCard = props => {
  React.useEffect(() => {
    props.loadCollaboratorRoles(props.id);
  }, [])

  const {
    name,
    email,
    status,
    officeBranchRoles,
    collaboratorRoles,
  } = props

  console.log(collaboratorRoles)
  const getStatus = (status) => {
    switch (status) {
      case "PENDING": return "PENDIENTE"
      case "ACTIVE": return "ACTIVO"
      case "INACTIVE": return "INACTIVO"
    }
  }
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
          <a href='#alguien' style={{ textDecoration: 'none' }}>
            <h5>{name}</h5>
          </a>
          <p className='description'>{email}</p>
        </div>
      </div>
      <div className='card-footer'>
        <Col>
          <p className='description'>{getStatus(status)}</p>
        </Col>
        <hr />
        <div className='button-container'>
          <Col>
            <div className='ml-auto col-sm-12 col-12 col-md-12 col-lg-12'>
              <h5>
                <br />
                <small>Roles actuales</small>
              </h5>
            </div>
            {collaboratorRoles ?
              collaboratorRoles.map(role => <p key={role.id}>{role.name}</p>)
              : <EmptyComponent />}
          </Col>
          <Col>
            <div className='ml-auto col-sm-12 col-12 col-md-12 col-lg-12'>
              <h5>
                <br />
                <small>Roles de la sucursal</small>
              </h5>
            </div>
            {officeBranchRoles ?
              officeBranchRoles.map(role => <p key={role.id}>{role.name}</p>)
              : <EmptyComponent />}
          </Col>
        </div>
      </div>
    </div>
  </>)
};
