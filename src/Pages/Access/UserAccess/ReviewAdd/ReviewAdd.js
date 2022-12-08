import React from 'react';
import useAuth from './../../../../Hooks/useAuth';
import { useForm } from 'react-hook-form';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

const ReviewAdd = () => {
    const axios = require('axios');
    const [value, setValue] = React.useState(0);

    // Click and Book Survice
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();

    const onSubmit = data => {
        data.rating = value;
        data.img = user?.photoURL;
        axios.post('https://puppy.onrender.com/reviewAdd', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Review Added Successfully');
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

                <Box
                    sx={{ '& > legend': { mt: 2 }, }}>
                    <Typography component="legend">Please Add Rating</Typography>
                    <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }} 
                    />
                </Box>

                <input className="btn btn-success" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ReviewAdd;