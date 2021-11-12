import useFirebase from './../../../Hooks/useFirebase';
import { Card, Col, Row, Spinner, Container } from 'react-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);
    const { user } = useFirebase();

    useEffect(() => {
        fetch('https://stormy-woodland-18044.herokuapp.com/reviewAdd')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
                setLoading(true)
            });
    }, [])

    return (
        <Container className="App my-5">
            <h2 className="text-success fw-bold my-3">Clients Reviews</h2>
            {
                loading ? (
                    <Row xs={1} md={2} lg={4} className="g-4">
                        {
                            reviews?.map(review => (
                                <Col>
                                    <Card id="review" className="card1 p-3 h-100">
                                        <Card.Img className="reviewImg w-10 mx-auto border border-success border-2 rounded-circle" src={user?.photoURL} />
                                        <Card.Body>
                                            <Card.Title className="text-success fw-bold">{review?.name}</Card.Title>
                                            <Card.Text className="">
                                                <p><small>{review?.email}</small></p>
                                                <hr />

                                                <p>Rating: {review?.rating}</p>
                                                <p>{review?.review}</p>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                    </Row>
                ) : (<Spinner animation="border" variant="danger" />)
            }
        </Container>
    );
};

export default Reviews;