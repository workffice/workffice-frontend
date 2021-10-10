import React from 'react';
import { Card, CardBody } from 'reactstrap';
import './styles/OfficeComponent.css';

export const MembershipComponent = (props) => {

  const { membership } = props;
  const { name, description, price } = membership;

  return (
    <>
      <Card style={{marginRight: '5%'}}>
        <CardBody>
          <div className="office-branch-card-title">
            <h5 style={{ marginBottom: 0 }}>
              {name}
            </h5>
            <i className="fa fa-check" style={{ display: 'flex', alignItems: 'center' }} />
          </div>
          <hr />
          <div className='text'>
            <label className="form-label">
              Oficinas: <small>Oficina 1, oficina 2</small>
            </label>
          </div>

          <div className='text'>
            <label className="form-label">
              Precio:  <small>{`$ ${price}`}</small>
            </label>
          </div>

          <div className='text'>
            <label className="form-label">
              Días: <small>Lunes, Martes, miércoles</small>
            </label>
          </div>

          <div className='text'>
            <label className="form-label">
              Descripción: <small>{description}</small>
            </label>
          </div>
        </CardBody>
      </Card>
    </>
  );
}
