import React from 'react';
import { Button, Nav } from 'react-bootstrap';
import './Banner.css'
import { HashLink } from 'react-router-hash-link';

const Banner = () => {
    return (
        <>
            <div className="row banner text-start">
                <div className="col-md-6 p-5">
                    <div>
                        <h1 className="title">PUPPY</h1>
                        <h3 className="title1">A Trusted Shop for Pure Breed</h3>
                        <p className="text-white py-5">
                            PUPPY the Number one Dog shop around that brings all – inclusive well known Breeds authentic Dog straight into your location regardless where ever you are in BANGLADESH. We will Reach in your Doorstep No matter where you live. Stay tuned With PUPPY the name you can trust.
                        </p>
                        <Nav.Link as={HashLink} to="/breeds"><Button className="btn btn-success fw-bold px-4">Explore Breeds</Button></Nav.Link>
                    </div>
                </div>

                <div className="col-md-6">

                </div>
            </div>
        </>
    );
};

export default Banner;