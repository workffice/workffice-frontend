import { includes } from 'lodash-es';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Row } from 'reactstrap';
import { ACCESS_TYPE_READ, COLLABORATOR_FORBIDDEN_MESSAGE, getErrorMessage } from '../../utils/collaboratorTranslations';
import { EmptyComponent } from '../Common/Empty/EmptyComponent';
import Forbidden from '../Common/Forbidden/Forbidden';
import { Notification } from '../Common/Notification/Notification';
import { CollaboratorCard } from './CollaboratorCard';

export const Collaborators = ({
  notification,
  hideNotification,
  collaborators,
  collaboratorRoles,
  officeBranchRoles,
  loadCollaborators,
  loadCollaboratorRoles,
  loadOfficeBranchRoles,
  onUpdate,
  officeBranch,
  permission,
}) => {

  React.useEffect(() => {
    loadCollaborators(officeBranch.id);
  }, [])
  React.useEffect(() => {
    loadOfficeBranchRoles(officeBranch.id);
  }, [])

  React.useEffect(() => {
    if (notification.show)
      setTimeout(() => {
        hideNotification()
      }, 2000)
  })

  const renderCollaborators = () => {
    if (permission.isForbidden && includes(permission.resources, "collaborator"))
      return <Forbidden message={COLLABORATOR_FORBIDDEN_MESSAGE} />
    else {
      return collaborators && collaborators.length !== 0 ? collaborators.map(collaborator => {
        return <Col key={collaborator.id} xs="10" md="4" lg="4" xg="4">
          <CollaboratorCard
            {...collaborator}
            officeBranchRoles={officeBranchRoles}
            loadCollaboratorRoles={loadCollaboratorRoles}
            collaboratorRoles={collaboratorRoles ? collaboratorRoles[collaborator.id] : []}
            updateCollaborator={onUpdate}
          />
        </Col>
      }) : <EmptyComponent />
    }
  }

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
      <Notification
        show={notification.show && notification.isError}
        isError={true}
        message={getErrorMessage(notification.errorCode, ACCESS_TYPE_READ)}
        hideNotification={hideNotification}
      />
      <Notification
        show={notification.show && notification.isSuccess}
        message="El colaborador se actualizo correctamente"
        hideNotification={hideNotification}
      />
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
        {renderCollaborators()}
      </Row>
    </div>
  )
};
