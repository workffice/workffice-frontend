import React from 'react';
import { Card, CardBody } from 'reactstrap';
import image from '../../../assets/img/bg/rawpixel-com.jpg';
import './styles/OfficeComponent.css';

export const OfficeComponentCopy = () => {

  // const { office, officeBranch } = props;
  // const { name, privacy, price } = office;

  return (
    <>
      <Card>
        <CardBody>
          <img className="office-branch-card-image" src={image} />
          <div className="office-branch-card-title" style={{ marginTop: 30 }}>
            <h5 style={{ marginBottom: 0 }}>
              Oficina 1
            </h5>
            <i className="fa fa-heart" style={{ display: 'flex', alignItems: 'center' }} />
          </div>
          <hr />
          <div className='text'>
            <label className="form-label">
              Tipo de oficina: <small>Privada</small>
            </label>
          </div>

          <div className='text'>
            <label className="form-label">
              Precio p/hora:  <small>$ 500</small>
            </label>
          </div>

          <div className='text'>
            <label className="form-label">
              Sucursal: <small>Sucursal 1</small>
            </label>
            <label className="form-label">
              Teléfono: <small>261548262</small>
            </label>
          </div>
        </CardBody>
      </Card>
    </>
  );
}
