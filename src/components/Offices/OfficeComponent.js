import React from 'react';
import { Card, CardBody } from 'reactstrap';
import image from '../../assets/img/bg/rawpixel-com.jpg';
import './styles/OfficeComponent.css';

export const OfficeComponent = (props) => {

  const { officeName, officeType, price, officeBranch } = props;
  return (
    <>
      <Card>
        <CardBody>
          <img className="office-branch-card-image" src={image} />
          <div className="office-branch-card-title" style={{ marginTop: 30 }}>
            <h5 style={{marginBottom: 0}}>
              {officeName}
            </h5>
            <i className="fa fa-heart" style={{display:'flex', alignItems:'center'}}/>
          </div>
          <hr />
          <div className='text'>
              <label class="form-label">
                  Tipo de oficina: <small>{officeType}</small>
              </label>
          </div>
  
          <div className='text'>
              <label class="form-label">
                  Precio p/hora: <small>{`Desde $${price}`}</small>
              </label>
          </div>
  
          <div className='text'>
              <label class="form-label">
                  Sucursal: <small>{officeBranch}</small>
              </label>
          </div>
        </CardBody>
      </Card>
    </>
  );
}
