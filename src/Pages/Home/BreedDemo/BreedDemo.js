import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BreedDemo = (props) => {
    const { _id, rank, name, cost, origin, img, colors, lifeSpan, shortDescription } = props.breed;

    return (
        <Col>
            <Card className="card">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className="text-success fw-bold">{name}</Card.Title>
                    <Card.Text className="text-start">
                        <p><span>Rank:</span> {rank}</p>
                        <p><span>Cost:</span> ${cost}</p>
                        <p><span>Origin:</span> {origin}</p>
                        <p><span>Color:</span> {colors}</p>
                        <p><span>Life Span:</span> {lifeSpan}</p>
                        <p className="description">{shortDescription}</p>
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Link to={`/order/${_id}`}>
                        <Button variant="success" className="w-100">Details</Button>
                    </Link>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default BreedDemo;