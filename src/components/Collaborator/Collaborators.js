import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button, Alert } from 'reactstrap';
import { getErrorMessage } from '../../utils/collaboratorTranslations';
import { EmptyComponent } from '../Common/Empty/EmptyComponent';
import { CollaboratorCard } from './CollaboratorCard';

export const Collaborators = props => {
  React.useEffect(() => {
    props.loadCollaborators(props.officeBranch.id);
  }, [])
  React.useEffect(() => {
    props.loadOfficeBranchRoles(props.officeBranch.id);
  }, [])

  const {
    notification,
    hideNotification,
    collaborators,
    collaboratorRoles,
    officeBranchRoles,
    loadCollaboratorRoles,
    onUpdate,
  } = props

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
      {notification.show && notification.isError ?
      <Alert isOpen={notification.show} color="danger">
        {getErrorMessage(notification.errorCode)}
        <button type="button" class="close" aria-label="Close" onClick={hideNotification}><span aria-hidden="true">×</span></button>
      </Alert>
      : <Alert isOpen={notification.show} color="success">
        El colaborador se actualizo correctamente
        <button type="button" class="close" aria-label="Close" onClick={hideNotification}><span aria-hidden="true">×</span></button>
      </Alert>}
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
          return <Col key={collaborator.id} xs="10" md="4" lg="4" xg="4">
            <CollaboratorCard
              {...collaborator}
              officeBranchRoles={officeBranchRoles}
              loadCollaboratorRoles={loadCollaboratorRoles}
              collaboratorRoles={collaboratorRoles ? collaboratorRoles[collaborator.id] : []}
              updateCollaborator={onUpdate}
            />
          </Col>
        }) : <EmptyComponent />}
      </Row>
    </div>
  )
};
