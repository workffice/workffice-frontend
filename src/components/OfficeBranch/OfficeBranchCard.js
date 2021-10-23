import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody } from 'reactstrap';
import { Cloudinary } from '../Common/Cloudinary/Cloudinary';

export const OfficeBranchCard = ({ branch }) => {
  const images = branch.images
  return (
    <>
      {branch &&
        <Link to={`/admin/office-branch?id=${branch.id}`} exact style={{ color: 'white', textDecoration: 'none' }}>
          <Card>
            <CardBody>
              <Cloudinary className="office-branch-card-image" publicId={images ? images[0] : ""} />
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
