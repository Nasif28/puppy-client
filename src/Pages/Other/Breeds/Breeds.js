import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Breed from './../Breed/Breed';
import { Spinner, Row, Container } from 'react-bootstrap';

const Breeds = () => {
    const [breeds, setBreeds] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch('https://stormy-woodland-18044.herokuapp.com/breeds')
            .then(res => res.json())
            .then(data => {
                setBreeds(data)
                setLoading(true)
            });
    }, [])

    return (
        <Container className="my-5">
            <h2 className="text-success fw-bold my-3">Choose Breeds</h2>
            {
                loading ? (
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {
                            breeds.map(breed => <Breed
                                key={breed.rank}
                                breed={breed}
                            ></Breed>)
                        }
                    </Row>
                ) : (<Spinner animation="border" variant="danger" />)
            }
        </Container>
    );
};

export default Breeds;