import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Table, Card } from 'react-bootstrap';
import './ManageBreeds.css'

const ManageBreeds = () => {
    const [breeds, setBreeds] = useState([]);
    const [control, setConrol] = useState(false);

    useEffect(() => {
        fetch("https://stormy-woodland-18044.herokuapp.com/breeds")
            .then((res) => res.json())
            .then((data) => setBreeds(data));
    }, [control]);


    // DELETE BOOKING
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure you want to remove this Breed?');
        if (proceed) {
            fetch(`https://stormy-woodland-18044.herokuapp.com/manageBreeds/${id}`, {
                method: "DELETE",
                headers: { "content-type": "application/json" },
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount) {
                        setConrol(!control);
                        alert('deleted successfully');
                    } else {
                        setConrol(false);
                    }
                });
        }
    };

    return (
        <div className="container lg-mx-5">
            <h2 className="text-success tw-bolder mt-3 mb-5">Manage Breeds</h2>
            <h3>Totall Breed: {breeds?.length}</h3>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                {breeds?.map((pd, index) => (
                    <tbody>
                        <tr>
                            <td>{index}</td>
                            <td className="manageImg"><Card.Img src={pd?.img} /></td>
                            <td><h3>{pd?.name}</h3></td>
                            <td><button onClick={() => handleDelete(pd._id)} className="btn bg-danger p-2 text-white">Remove</button></td>

                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    );
};

export default ManageBreeds;