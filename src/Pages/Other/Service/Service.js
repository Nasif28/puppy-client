import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { _id, title, Place, guide, shortDescription, day, img } = props.service;

    return (
        <Col>
            <Card className="text-start h-100">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className="text-success fw-bolder">{title}</Card.Title>
                    <Card.Text>
                        <small>{guide}</small>
                        <p></p>
                        <h6>Location: {Place}</h6>
                        <h6>Duration: {day}</h6>
                        <p></p>
                        <p>{shortDescription}</p>
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Link to={`/booking/${_id}`}>
                        <Button variant="success" className="w-100">Details & Booking</Button>
                    </Link>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Service;