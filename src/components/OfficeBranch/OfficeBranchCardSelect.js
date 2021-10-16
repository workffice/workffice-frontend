import { CloudinaryContext, Image } from 'cloudinary-react';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { Button, Card, CardBody, ListGroup, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

export const OfficeBranchCardSelect = ({ branch, select, selected, currentOfficeBranch }) => {
  const history = useHistory();
  const onSelect = () => {
    select(branch.id);
  }
  useEffect(() => {
    if (selected)
      history.push('/admin/offices');
  }, [currentOfficeBranch ? currentOfficeBranch.id : ""])

  return (
    <>
      <Card>
        <CardBody>
          <CloudinaryContext cloudName="workffice">
            <div>
              <Image publicId={branch.images ? branch.images[0].url || "sample" : "sample"} width="0.5" />
            </div>
          </CloudinaryContext>
          <ListGroup>
            <ListGroupItemHeading>
              <small>{branch.name}</small>
            </ListGroupItemHeading>
            <ListGroupItemText>
              {branch.collaborator ? "Colaborador" : "Dueño"}
            </ListGroupItemText>
            <ListGroupItemText>
              <b>{branch.location.province}, {branch.location.city}, {branch.location.street}</b>
            </ListGroupItemText>
            <Button className="btn-round" color="primary" size="large" onClick={onSelect}>Administrar</Button>
          </ListGroup>
        </CardBody>
      </Card>
    </>
  );
}
