import React from 'react';
import { Card, CardBody } from 'reactstrap';
import './styles/OfficeComponent.css';

export const MembershipComponent = (props) => {

  const { membership } = props;
  const { name, description, price, active} = membership;

  const isActive = active === true;

  return (
    <>
      <Card style={{marginRight: '5%'}}>
        <CardBody>
          <div className="office-branch-card-title">
            <h5 style={{ marginBottom: 0 }}>
              {name}
            </h5>
            {
              isActive 
                ? <label style={{ display: 'flex', alignItems: 'center' }}>activo</label>
                : <label style={{ display: 'flex', alignItems: 'center' }}>Inactivo</label>
            }
          </div>
          <hr />
          <div className='text'>
            <label className="form-label">
              Oficinas: <small style={{fontSize: 15}}>Oficina 1, oficina 2</small>
            </label>
          </div>

          <div className='text'>
            <label className="form-label">
              Precio:  <small style={{fontSize: 15}}>{`$ ${price}`}</small>
            </label>
          </div>

          <div className='text'>
            <label className="form-label">
              Días: <small style={{fontSize: 15}}>Lunes, Martes, miércoles</small>
            </label>
          </div>

          <div className='text'>
            <label className="form-label">
              Descripción: <small style={{fontSize: 15}}>{description}</small>
            </label>
          </div>
        </CardBody>
      </Card>
    </>
  );
}
