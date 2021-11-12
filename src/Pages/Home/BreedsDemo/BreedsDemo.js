import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import BreedDemo from './../BreedDemo/BreedDemo';

const BreedsDemo = (props) => {
    const [breedDemo, setBreedDemo] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch('https://stormy-woodland-18044.herokuapp.com/breeds')
            .then(res => res.json())
            .then(data => {
                setBreedDemo(data)
                setLoading(true)
            });
    }, [])
    const breeds = breedDemo.slice(0, 6);

    return (
        <Container className="my-5">
            <h2 className="text-success fw-bold my-3">Choose Breeds</h2>
            {
                loading ? (
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {
                            breeds.map(breed => <BreedDemo
                                key={breed.rank}
                                breed={breed}
                            ></BreedDemo>)
                        }
                    </Row>
                ) : (<Spinner animation="border" variant="danger" />)
            }
        </Container>
    );
};

export default BreedsDemo;