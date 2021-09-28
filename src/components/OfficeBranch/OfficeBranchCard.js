import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody } from 'reactstrap';
import image from '../../assets/img/bg/office1.jpg';

export const OfficeBranchCard = ({branch}) => (
  <>
    <Link to={{ pathname: `/admin/office-branch/${branch.id}` }} style={{ color: 'white', textDecoration: 'none' }}>
      <Card>
        <CardBody>
          <img className="office-branch-card-image" src={image} />
          <div className="office-branch-card-title">
            <h5>
              <small>{branch.name}</small>
            </h5>
            <i className="fa fa-heart" />
          </div>
          <hr />
          <p>
            <b>{branch.location.province}, {branch.location.city}, {branch.location.street}</b>
          </p>
          <p><b>Contacto: </b>{branch.phone}</p>
        </CardBody>
      </Card>
    </Link>
  </>
);
