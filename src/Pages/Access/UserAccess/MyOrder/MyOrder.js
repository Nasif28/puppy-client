import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import useFirebase from './../../../../Hooks/useFirebase';
import { Table } from 'react-bootstrap';

const MyOrder = () => {
    const { user } = useFirebase();
    const [myBooking, setMyBooking] = useState([]);
    const [control, setConrol] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:5000/myOrder/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setMyBooking(data));
    }, [control, user?.email]);


    // DELETE BOOKING
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure you want to cancel?');
        if (proceed) {
            fetch(`http://localhost:5000/deleteMyOrder/${id}`, {
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
        <div className="container">
            <h2 className="text-success tw-bold mb-3">My Orders</h2>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Tour PLace</th>
                        <th>Status</th>
                    </tr>
                </thead>
                {myBooking?.map((pd, index) => (
                    <tbody>
                        <tr>
                            <td>{index}</td>
                            <td>{pd?.name}</td>
                            <td>{pd?.email}</td>
                            <td>{pd?.number}</td>
                            <td>{pd?.ordered.name}</td>
                            <td>{pd?.status}</td>
                            <button onClick={() => handleDelete(pd._id)} className="btn bg-danger p-2 text-white">Cancel</button>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    );
};

export default MyOrder;