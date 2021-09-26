import React from 'react'
import { Card, CardBody, CardTitle, CardFooter, CardText } from 'reactstrap';
import './styles/reviewsStyles.css';

const Reviews = () => {
    return (
        <Card>
            <CardBody className="cardBodyStyles">
                <div className="icon icon-primary">
                    <i className="fa fa-quote-right" style={{ fontSize: 40, color: '#34B18A' }} />
                </div>
                <CardText className="text">With supporting Text below as a natural lead-in to additional content.</CardText>
                <CardFooter>
                    <CardTitle className="name">Gina Andrew</CardTitle>
                </CardFooter>
            </CardBody>
        </Card>
    )
}

export default Reviews;
