import React from 'react';
import useAuth from './../../../../Hooks/useAuth';
import { useForm } from 'react-hook-form';
import { FloatingLabel, Form } from 'react-bootstrap';

const ReviewAdd = () => {
    const axios = require('axios');

    // Click and Book Survice
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();

    const onSubmit = data => {
        axios.post('http://localhost:5000/reviewAdd', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Reviewed Successfully');
                    reset();
                }
            });
    };

    return (
        <div className="container">
              <h2 className="text-success tw-bold my-3">Add Review</h2>
            <h4 className=" ">Please Add a Review</h4>
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={user.displayName} {...register("name")} />
                <input defaultValue={user.email} {...register("email", { required: true })} />
                {errors.email && <span className="error">This field is required</span>}
                <input defaultValue="" placeholder="Review" {...register("review")} />
                
                <FloatingLabel className="my-3" controlId="floatingSelect" label="Rating" {...register("rating")}>
                    <Form.Select aria-label="Floating label select example">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </Form.Select>
                </FloatingLabel>

                <input className="btn btn-success" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ReviewAdd;