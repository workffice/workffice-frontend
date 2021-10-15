import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody } from 'reactstrap';
import { Cloudinary } from '../Common/Cloudinary/Cloudinary';

export const OfficeBranchCard = ({ branch }) => {

  return (
    <>
      {branch &&
        <Link to={{ pathname: `/admin/office-branch/${branch.id}` }} style={{ color: 'white', textDecoration: 'none' }}>
          <Card>
            <CardBody>
              <Cloudinary className="office-branch-card-image" publicId={branch.images ? branch.images[0].url : ""} />
              <div className="office-branch-card-title">
                <h5>
                  <small>{branch.name}</small>
                </h5>
                <i className="fa fa-heart" />
              </div>
              <hr />
              <p>
                <b>{branch.location ? branch.location.province : branch.province}, {branch.location ? branch.location.city : branch.city} {branch.location ? branch.location.street : null}</b>
              </p>
              <p><b>Contacto: </b>{branch.phone}</p>
            </CardBody>
          </Card>
        </Link>
      }
    </>
  );
}
