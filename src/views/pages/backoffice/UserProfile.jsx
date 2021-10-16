
import { CloudinaryContext, Image } from 'cloudinary-react';
import { includes } from "lodash-es";
import React from "react";
import {
    Card, CardBody,
    CardFooter, CardHeader, CardTitle, Col, Row
} from "reactstrap";
import avatar from "../../../assets/img/faces/erik-lucatero-2.jpg";
import { EmptyComponent } from "../../../components/Common/Empty/EmptyComponent";
import Forbidden from "../../../components/Common/Forbidden/Forbidden";
import { Notification } from "../../../components/Common/Notification/Notification";
import { UserUpdate } from "../../../components/User/UserUpdate";
import { COLLABORATOR_FORBIDDEN_MESSAGE } from "../../../utils/collaboratorTranslations";
import CollaboratorRow from "./CollaboratorRow";

export const UserProfile = ({
    userMe,
    onUpdate,
    collaborators,
    notification,
    hideNotification,
    loadCollaborators,
    officeBranch,
    permission,
}) => {
    React.useEffect(() => {
        loadCollaborators(officeBranch.id);
    }, [collaborators ? collaborators.length : 0])
    const { name, bio } = userMe || {}
    React.useEffect(() => {
        setTimeout(() => {
            hideNotification()
        }, 2000)
    }, [notification.show])

    const renderCollaborators = () => {
        if (permission.isForbidden && includes(permission.resources, "collaborator"))
            return <Forbidden message={COLLABORATOR_FORBIDDEN_MESSAGE} />
        return collaborators ? collaborators.map(collaborator => {
            return <CollaboratorRow key={collaborator.id} {...collaborator} />
        }) : < EmptyComponent />
    }
    return (
        <div className="content">
            <Row style={{ paddingTop: 30 }}>
                <Col md="4">
                    <Card className="card-user">
                        <div className="image">
                            <CloudinaryContext cloudName="workffice">
                                <div>
                                    <Image publicId="sample" width="0.5" />
                                </div>
                            </CloudinaryContext>
                        </div>
                        <CardBody>
                            <div className="author">
                                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                    <img
                                        alt="..."
                                        className="avatar border-gray"
                                        src={avatar}
                                    />
                                    <h5 className="title">{name || "N/A"}</h5>
                                </a>
                            </div>
                            <p className="description text-center">{bio}</p>
                        </CardBody>
                        <CardFooter>
                            <hr />
                            <div className="button-container">
                                <Row>
                                    <Col className="ml-auto">
                                        <h5>
                                            4 <br />
                                            <small>Sucursales</small>
                                        </h5>
                                    </Col>
                                    <Col className="mr-auto">
                                        <h5>
                                            8.5 <br />
                                            <small>Valoración</small>
                                        </h5>
                                    </Col>
                                </Row>
                            </div>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle tag="h4">Colaboradores de {officeBranch.name}</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <ul className="list-unstyled team-members">
                                {renderCollaborators()}
                            </ul>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="8">
                    <Notification
                        show={notification.show && notification.isSuccess}
                        message="El usuario se actualizo correctamente"
                        hideNotification={hideNotification}
                    />
                    <UserUpdate update={onUpdate} {...userMe}></UserUpdate>
                </Col>
            </Row>
        </div>

    );
}

export default UserProfile;
