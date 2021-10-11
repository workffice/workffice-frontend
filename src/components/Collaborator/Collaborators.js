import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'reactstrap';
import { readFromLocalStorage } from '../../infra/api/localStorage';
import { EmptyComponent } from '../Empty/EmptyComponent';
import { CollaboratorCard } from './CollaboratorCard';

export const Collaborators = props => {
  React.useEffect(() => {
    props.loadCollaborators(readFromLocalStorage('officeBranch').id);
  }, [])

  const { collaborators } = props
  return (
    <div className="content">
      <Row style={{ display: 'grid', paddingTop: 40 }}>
        <Col xs="12" md="12" lg="12" xg="12">
          <h1>
            Gestionar <small color="red">Colaboradores</small>
          </h1>
          <hr />
        </Col>
      </Row>
      <Row style={{ justifyContent: 'center' }}>
        <Col
          xs="6"
          md="6"
          lg="12"
          xg="12"
          style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <Button className="btn-round" color="primary" size="medium" >
            <Link to='/admin/new-collaborator' style={{ color: 'white', textDecoration: 'none' }}>
              {' '}
              <i className="fa fa-plus" />
              {' '} Nuevo Colaborador
            </Link>
          </Button>
        </Col>
      </Row>

      <Row style={{ justifyContent: 'center' }}>
        {collaborators ? props.collaborators.map(collaborator => {
          return <Col xs="10" md="4" lg="4" xg="4">
            <CollaboratorCard key={collaborator.id} {...collaborator}/>
          </Col>
        }) : <EmptyComponent/>}
      </Row>
    </div>
  )
};
