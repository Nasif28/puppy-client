import React from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const DashboardNav = () => {
    const { logout, admin } = useAuth();

    return (
        <div>
            <h1 className="text-success fw-bolder my-3">Welcome to Dashboard</h1>

            <Navbar className="justify-content-center border" justify variant="tabs" defaultActiveKey="/dashboard">

                {admin ?
                    <Navbar>
                        <Nav>
                            <Nav.Link as={Link} to="/dashboard/addBreed">Add a Breed</Nav.Link>
                            <Nav.Link as={Link} to="/dashboard/manageBreeds">Manage Breeds</Nav.Link>
                            <Nav.Link as={Link} to="/dashboard/manageOrders">Manage Orders</Nav.Link>
                            <Nav.Link as={Link} to="/dashboard/makeAdmin">Make Admin</Nav.Link>
                        </Nav>
                    </Navbar>
                    :
                    <Navbar>
                        <Nav>
                            <Nav.Link as={Link} to="/dashboard/payment">Payment</Nav.Link>
                            <Nav.Link as={Link} to="/dashboard/myOrders">My Orders</Nav.Link>
                            <Nav.Link as={Link} to="/dashboard/reviewAdd">Add Review</Nav.Link>
                        </Nav>
                    </Navbar>
                }

            </Navbar>
        </div >
    );
};

export default DashboardNav;