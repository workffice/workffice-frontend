import PropTypes from 'prop-types';
import React from 'react';
import { Badge, Button, Card, CardBody, CardHeader, Col, Label, Row } from 'reactstrap';
import { Cloudinary } from '../Common/Cloudinary/Cloudinary';
import './styles/OfficeComponent.css';

export const OfficeComponent = ({ office, officeBranch, displayBookingButton }) => {

  const {
    name,
    privacy,
    price,
    imageUrl,
    capacity,
    table,
  } = office;

  const getOfficeType = () => {
    if (privacy === "SHARED")
      return <Badge color="info">Compartida</Badge>
    return <Badge color="danger">Privada</Badge>
  }
  return (
    <>
      <Card>
        <CardBody>
          <Cloudinary className="office-branch-card-image" publicId={imageUrl} />
          <CardHeader>
            <h5>{name}</h5>
            <Row>
              <Col>
                <h6 className="form-label">
                  Sucursal <small>{officeBranch ? officeBranch.name : ""}</small>
                </h6>
              </Col>
              <Col>
                <h6 className="form-label">
                  Contacto <small>{officeBranch ? officeBranch.phone : ""}</small>
                </h6>
              </Col>
            </Row>
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
            <Label className="form-label">
              Tipo de oficina: {getOfficeType()}
            </Label>
          </div>

          <div className='text'>
            <Label className="form-label">
              Precio por hora:  <small>{`$ ${price}`}</small>
            </Label>
          </div>
          <div className='text'>
            <Label className="form-label">
              Capacidad:  <small>{capacity} personas</small>
            </Label>
          </div>
          <hr />
          {
            privacy === "SHARED" ? <Row>
              <Col md="12">
                <h5 style={{margin:"0"}}>Mesas</h5>
              </Col>
              <Col>
                <div className='text'>
                  <Label className="form-label">
                    Cantidad:  <small>{table.quantity}</small>
                  </Label>
                </div>
              </Col>
              <Col>
                <div className='text'>
                  <Label className="form-label">
                    Capacidad:  <small>{table.capacity}</small>
                  </Label>
                </div>
              </Col>
            </Row> : <></>
          }
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