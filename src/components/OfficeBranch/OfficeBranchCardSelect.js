import React from 'react';
import { useHistory } from 'react-router';
// import { Link } from 'react-router-dom';
import { Button, Card, CardBody } from 'reactstrap';
import image from '../../assets/img/bg/office1.jpg';

export const OfficeBranchCardSelect = (props) => {
  const { branch } = props;
  const history = useHistory();
  const select = () => {
    props.select(branch.id);
    history.push('/admin/offices');
  }
  return (
    <>
      {/* <Link to={{ pathname: `/admin/offices` }} style={{ color: 'white', textDecoration: 'none' }}> */}
      <Card>
        <CardBody>
          <img className="office-branch-card-image" src={image} />
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
      {/* </Link> */}
    </>
  );
}
