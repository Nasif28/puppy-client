import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Table } from 'react-bootstrap';

const ManageOrder = () => {
    const [booking, setBooking] = useState([]);
    const [control, setConrol] = useState(false);
    const [status, setStatus] = useState(false);

    useEffect(() => {
        fetch("https://stormy-woodland-18044.herokuapp.com/manageOrder")
            .then((res) => res.json())
            .then((data) => setBooking(data));
    }, [control, status]);


    // DELETE BOOKING
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            fetch(`https://stormy-woodland-18044.herokuapp.com/deleteManageOrder/${id}`, {
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

    // HANDLE STATUS
    const handleStatus = (id) => {
        axios.put(`https://stormy-woodland-18044.herokuapp.com/updateStatus`, { id })
            .then(res => console.log("Your order Approved"))
            .then((data) => setStatus(true))
    };

    return (
        <div className="container">
            <h2 className="text-success tw-bolder mt-3 mb-5">Manage All Order</h2>
            <h3>Totall Bookings: {booking?.length}</h3>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Breed</th>
                        <th>Status</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                {booking?.map((pd, index) => (
                    <tbody>
                        <tr>
                            <td>{index}</td>
                            <td>{pd?.name}</td>
                            <td>{pd?.email}</td>
                            <td>{pd?.number}</td>
                            <td>{pd?.ordered.name}</td>
                            <td>
                                {(pd.status === 'Approved') ? <button className="btn bg-warning mx-2 text-white">{pd?.status}</button> :
                                    <button onClick={() => handleStatus(pd._id)} className="btn bg-primary mx-2 text-white">{pd?.status}</button>
                                }
                            </td>
                            <td>
                                <button onClick={() => handleDelete(pd._id)} className="btn bg-danger p-2 text-white">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    );
};

export default ManageOrder;