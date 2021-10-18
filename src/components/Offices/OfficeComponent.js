import PropTypes from 'prop-types';
import React from 'react';
import { Button, Card, CardBody, CardHeader } from 'reactstrap';
import image from '../../assets/img/bg/rawpixel-com.jpg';
import './styles/OfficeComponent.css';

export const OfficeComponent = ({ office, officeBranch, displayBookingButton }) => {

  const { name, privacy, price } = office;

  return (
    <>
      <Card>
        <CardBody>
          <img className="office-branch-card-image" src={image} />
          <CardHeader>
            <h5>{name}</h5>
            {
              displayBookingButton ?
                <Button
                  className="btn btn-primary"
                  color="primary"
                  type="submit"
                >
                  Alquilar Oficina
                </Button>
                : <div></div>
            }
          </CardHeader>
          <hr />
          <div className='text'>
            <label className="form-label">
              Tipo de oficina: <small>{privacy === 'SHARED' ? 'Compartida' : 'Privada'}</small>
            </label>
          </div>

          <div className='text'>
            <label className="form-label">
              Precio p/hora:  <small>{`$ ${price}`}</small>
            </label>
          </div>

          <div className='text'>
            <label className="form-label">
              Sucursal: <small>{officeBranch ? officeBranch.name : ""}</small>
            </label>
            <label className="form-label">
              Teléfono: <small>{officeBranch ? officeBranch.phone : ""}</small>
            </label>
          </div>
        </CardBody>
      </Card>
    </>
  );
}


OfficeComponent.propTypes = {
  officeBranch: PropTypes.shape({
    name: PropTypes.string,
    phone: PropTypes.string
  }),
  office: PropTypes.shape({
    name: PropTypes.string,
    privacy: PropTypes.string,
    price: PropTypes.number
  }),
  displayBookingButton: PropTypes.bool,
}