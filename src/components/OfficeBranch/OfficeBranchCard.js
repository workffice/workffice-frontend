import React from 'react'
import { Card, CardBody } from 'reactstrap';
import image from "../../assets/img/bg/office1.jpg";

export const OfficeBranchCard = () => {
    return (
        <>
            <Card>
                <CardBody>
                    <img className="office-branch-card-image" src={image} />
                    <div className="office-branch-card-title">
                        <h6>WHALE coworking</h6>
                        <i className="fa fa-heart"></i>
                    </div>
                    <hr />
                    <p><b>Julio Argentino Roca 379, Mendoza</b></p>
                </CardBody>
            </Card>
        </>
    )
}
