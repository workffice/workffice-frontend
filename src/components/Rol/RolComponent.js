import React from 'react';
import { Card, CardBody } from 'reactstrap';
import './styles/RolComponent.css';

export const RolComponent = (props) => {

  const { rol } = props;
  const { rolName, resource, active } = rol;

  const isActive = active === true;

  return (
    <>
      <Card style={{ marginRight: '5%' }}>
        <CardBody>
          <div className="office-branch-card-title">
            <h5 style={{ marginBottom: 0 }}>
              {rolName}
            </h5>
            {
              isActive 
                ? <label style={{ display: 'flex', alignItems: 'center' }}>activo</label>
                : <label style={{ display: 'flex', alignItems: 'center' }}>Inactivo</label>
            }
          </div>
          <hr />
          {
            resource && resource.map((resource) =>
              <div className='text'>
                <label className="form-label">
                {`${resource.name}: `} <small>{`${resource.label}`}</small>
                </label>
              </div>
            )
          }
        </CardBody>
      </Card>
    </>
  );
}
