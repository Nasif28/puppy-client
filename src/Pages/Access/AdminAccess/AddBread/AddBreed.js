import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddBreed.css'

const AddBreed = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        axios.post('https://stormy-woodland-18044.herokuapp.com/breeds', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }

    return (
        <div className="add-service">
            <h2 className="text-success fw-bolder mt-5">Please Add a New Breed</h2>

            <div className="row">

                <div className="col-12 col-md-2 col-lg-3"></div>

                <div className="col-12 col-md-8 col-lg-6">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("rank", { required: true, maxLength: 20 })} placeholder="Type Rank Number" />
                        <input {...register("name", { required: true, maxLength: 20 })} placeholder="Breed Name" />
                        <input {...register("origin", { required: true, maxLength: 20 })} placeholder="Origin Name" />
                        <input {...register("colors", { required: true, maxLength: 20 })} placeholder="Color Available" />
                        <input {...register("lifespan", { required: true, maxLength: 20 })} placeholder="Life Span Limit" />
                        <input type="number" {...register("cost")} placeholder="Total Cost" />
                        <input {...register("img")} placeholder="Img URL" />
                        <textarea {...register("shortDescription")} placeholder="Short Description" />
                        <textarea {...register("description")} placeholder="Full Description" />
                        <input className="btn btn-success" type="submit" value="Add Breed" />
                    </form>
                </div>

                <div className="col-12 col-md-2 col-lg-3"></div>

            </div>
        </div>
    );
};

export default AddBreed;