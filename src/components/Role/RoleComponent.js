import React from 'react';
import { Card, CardBody } from 'reactstrap';
import './styles/RolComponent.css';

export const RoleComponent = ({name, permissions}) => {
  const getAccessLabel = access => {
    switch(access) {
      case "WRITE": return "LECTURA / ESCRITURA"
      case "READ": return "LECTURA"
    }
  }
  
  return (
    <>
      <Card style={{ marginRight: '5%' }}>
        <CardBody>
          <div className="office-branch-card-title">
            <h5 style={{ marginBottom: 0 }}>
              {name}
            </h5>
          </div>
          <hr />
          {
            permissions && permissions.map((permission) =>
              <div className='text'>
                <label className="form-label">
                {permission.resource} : <small>{getAccessLabel(permission.access)}</small>
                </label>
              </div>
            )
          }
        </CardBody>
      </Card>
    </>
  );
}
