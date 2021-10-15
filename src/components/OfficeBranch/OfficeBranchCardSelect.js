import { CloudinaryContext, Image } from 'cloudinary-react';
import React from 'react';
import { useHistory } from 'react-router';
import { Button, Card, CardBody } from 'reactstrap';

export const OfficeBranchCardSelect = (props) => {
  const { branch } = props;
  const history = useHistory();
  const select = () => {
    props.select(branch.id);
    history.push('/admin/offices');
  }
  return (
    <>
      <Card>
        <CardBody>
          <CloudinaryContext cloudName="workffice">
            <div>
              <Image publicId={branch.images[0].url !== '' ? branch.images[0].url : "sample"} width="0.5" />
            </div>
          </CloudinaryContext>
          <div className="office-branch-card-title">
            <h5>
              <small>{branch.name}</small>
            </h5>
          </div>
          <hr />
          <p>
            <b>{branch.location.province}, {branch.location.city}, {branch.location.street}</b>
          </p>
          <Button className="btn-round" color="primary" size="large" onClick={select}>Administrar</Button>
        </CardBody>
      </Card>
    </>
  );
}
