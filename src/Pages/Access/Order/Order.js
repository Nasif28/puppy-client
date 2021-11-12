import React from 'react';
import './Order.css'
import { useForm } from 'react-hook-form';
import useAuth from './../../../Hooks/useAuth';
import { useParams } from 'react-router';
import { useState } from 'react';
import { useEffect } from 'react';
import { axios } from 'axios';
import { Button } from 'react-bootstrap';

const Order = (props) => {
    // Show Single breeds by ID
    const { breedId } = useParams();
    const [breeds, setBreeds] = useState({});
    const axios = require('axios');
    
    useEffect(() => {
        fetch(`https://stormy-woodland-18044.herokuapp.com/breeds/${breedId}`)
            .then(res => res.json())
            .then(data => setBreeds(data));
    }, [])


    // Click and Book Survice
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();

    const onSubmit = data => {
        data.status = "Panding";
        data.ordered = breeds;
        axios.post('https://stormy-woodland-18044.herokuapp.com/order', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Ordered Successfully');
                    reset();
                }
            });
    };

    return (
        <div className="container">
            <h1 className="fw-bold text-success my-5">Details of {breeds?.name}</h1>
            <div className="row">
                <div className="col-12 col-md-12 col-lg-8">
                    <img className="img-fluid" src={breeds?.img} alt="" />
                    <h2 className="fw-bold text-success">{breeds?.name}</h2>
                    <p>Rank: {breeds?.rank} || Cost: ${breeds?.cost} || Origin: {breeds?.origin} || Color: {breeds?.colors} || Life Span: {breeds?.lifeSpan}</p>
                </div>

                <div className="col-12 col-md-12 col-lg-4 mt-5">
                    <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                        <input defaultValue={user.displayName} {...register("name")} />
                        <input defaultValue={user.email} {...register("email", { required: true })} />
                        {errors.email && <span className="error">This field is required</span>}
                        <input placeholder="Address" defaultValue="" {...register("address")} />
                        <input placeholder="Phone Number" defaultValue="" {...register("number")} />
                        <input className="btn btn-success" type="submit" value="Order" />
                    </form>
                </div>
            </div>

            <h2 className="mt-5 fw-bold text-success">Description of {breeds?.name} </h2>
            <p>{breeds?.description}</p>
            <Button href="/home" className="btn fw-bolder btn-success px-5 mt-3">Go Home</Button>

        </div>
    );
};

export default Order;