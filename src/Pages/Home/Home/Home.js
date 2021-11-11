import React from 'react';
import Reviews from '../Reviews/Reviews';
import Welcome from '../Welcome/Welcome';
import Banner from './../Banner/Banner';
import BreedsDemo from './../BreedsDemo/BreedsDemo';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <BreedsDemo></BreedsDemo>
            <Reviews></Reviews>
            <Welcome></Welcome>
        </div>
    );
};

export default Home;