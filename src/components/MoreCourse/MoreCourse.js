import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const MoreCourse = (props) => {
    const { title, instructor, price, description, img } = props.morecourse;
    return (
        <Col>
            <Card className="mx-auto w-100 h-100 m-3 p-3">
                <Card.Img variant="top" src={img} className="card-image" />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <h6>Instructor: {instructor}</h6>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <h5>Price: ${price}</h5><br />
                    <Button variant="primary" className="m-2">Purches</Button>{' '}
                    <Button variant="outline-success">Details</Button>{' '}
                </Card.Body>
            </Card>
        </Col>
    );
};

export default MoreCourse;