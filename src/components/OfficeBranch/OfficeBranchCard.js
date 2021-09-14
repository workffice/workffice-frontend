import React from 'react';
import { Card, CardBody } from 'reactstrap';
import image from '../../assets/img/bg/office1.jpg';

export const OfficeBranchCard = (props) => (
  <>
    <Card>
      <CardBody>
        <img className="office-branch-card-image" src={image} />
        <div className="office-branch-card-title">
          <h5>
            <small>{props.branch.name}</small>
          </h5>
          <i className="fa fa-heart" />
        </div>
        <hr />
        <p>
          <b>{props.branch.location.province}, {props.branch.location.city}, {props.branch.location.street}</b>
        </p>
        <p><b>Contacto: </b>{props.branch.phone}</p>
      </CardBody>
    </Card>
  </>
);
