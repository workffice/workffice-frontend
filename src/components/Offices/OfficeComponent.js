import React from 'react';
import { Card, CardBody } from 'reactstrap';
import image from '../../assets/img/bg/rawpixel-com.jpg';
import './styles/OfficeComponent.css';

export const OfficeComponent = () => (
  <>
    <Card>
      <CardBody>
        <img className="office-branch-card-image" src={image} />
        <div className="office-branch-card-title" style={{ marginTop: 0 }}>
          <h4>
            Oficina Elena
          </h4>
          <i className="fa fa-heart" style={{display:'flex', alignItems:'center'}}/>
        </div>
        <hr />
        <div className='text'>
            <label class="form-label">
                Tipo de oficina: <small>Privada</small>
            </label>
        </div>

        <div className='text'>
            <label class="form-label">
                Precio p/hora: <small>Desde $500</small>
            </label>
        </div>

        <div className='text'>
            <label class="form-label">
                Sucursal: <small>Whale</small>
            </label>
        </div>
      </CardBody>
    </Card>
  </>
);
