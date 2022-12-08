import useFirebase from './../../../Hooks/useFirebase';
import { Card, Col, Row, Spinner, Container } from 'react-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react';
import './Reviews.css'
import { Rating } from '@mui/material';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);
    const { user } = useFirebase();

    useEffect(() => {
        fetch('https://puppy.onrender.com/reviewAdd')
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
                                        {review?.img ?
                                            <Card.Img className="reviewImg w-10 mx-auto border border-success border-2 rounded-circle" src={review?.img} />
                                            :
                                            <Card.Img className="reviewImg w-10 mx-auto border border-success border-2 rounded-circle" src={'https://dm0qx8t0i9gc9.cloudfront.net/watermarks/image/rDtN98Qoishumwih/scared-cartoon-face-expression_XkDKCZ_SB_PM.jpg'} />
                                        }
                                        <Card.Body>
                                            <Card.Title className="text-success fw-bold">{review?.name}</Card.Title>
                                            <Card.Text className="">
                                                <p><small>{review?.email}</small></p>
                                                <hr />
                                                <Rating name="read-only" value={review?.rating} readOnly />
                                                <hr />
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