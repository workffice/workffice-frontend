import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { Badge, Button, Card, CardBody, CardHeader, Col, Label, Row, UncontrolledTooltip } from 'reactstrap';
import { Cloudinary } from '../Common/Cloudinary/Cloudinary';
import './styles/OfficeComponent.css';

export const OfficeComponent = ({ office, officeBranch, displayBookingButton, displayEditButton }) => {
  const {
    id,
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
          <Cloudinary className="office-branch-card-image" height="300" publicId={imageUrl} />
          <CardHeader>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
              <h5 style={{ marginBottom: "0", marginRight: "3%" }}>{name}</h5>
              {
                displayEditButton ?
                  <div>
                    <Link to={`/admin/offices/edit?id=${id}`}>
                      <Button id="right" color="primary" className="btn-round btn-icon" size="sm"><i className="nc-icon nc-ruler-pencil"></i></Button>
                      <UncontrolledTooltip placement="right" target="right" delay={0}>
                        Editar oficina
                      </UncontrolledTooltip>
                    </Link>
                  </div> : <></>
              }
            </div>
            <Row>
              <Col>
                <div className='text'>
                  <Label className="form-label">
                    Sucursal <small>{officeBranch ? officeBranch.name : ""}</small>
                  </Label>
                </div>
              </Col>
              <Col>
                <div className='text' style={{marginBottom: 0}}>
                  <Label className="form-label">
                    Contacto <small>{officeBranch ? officeBranch.phone : ""}</small>
                  </Label>
                </div>
              </Col>
            </Row>
            {
              displayBookingButton ?
                <Link to={`/admin/create-booking?id=${id}`}>
                  <Button
                    className="btn btn-primary"
                    color="primary"
                    type="submit"
                  >
                    Alquilar oficina
                  </Button>
                </Link>
                : <div></div>
            }
          </CardHeader>
          <hr />
          <Col>
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
          </Col>
          <hr />
          {
            privacy === "SHARED" ?
              <Col>
                <Row>
                  <Col md="12">
                    <h5 style={{ margin: "0" }}>Mesas</h5>
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
                </Row>
              </Col> : <></>
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
  displayEditButton: PropTypes.bool
}