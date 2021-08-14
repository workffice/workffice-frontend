import React from 'react';
import { Card, CardBody } from 'reactstrap';
import image from '../../assets/img/bg/office1.jpg';

export const OfficeBranchCard = () => (
  <>
    <Card>
      <CardBody>
        <img className="office-branch-card-image" src={image} />
        <div className="office-branch-card-title">
          <h5>
            WHALE <small>Coworking</small>
          </h5>
          <i className="fa fa-heart" />
        </div>
        <hr />
        <p>
          <b>Julio Argentino Roca 379, Mendoza</b>
        </p>
      </CardBody>
    </Card>
  </>
);
