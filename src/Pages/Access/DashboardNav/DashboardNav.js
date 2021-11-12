import React from 'react';
import { Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const DashboardNav = () => {
    const { user, logout, admin } = useAuth();

    return (
        <div>
            <h1 className="text-success fw-bolder my-3">Welcome to Dashboard</h1>

            <Nav justify variant="tabs" defaultActiveKey="/dashboard">
                {!admin &&
                    <Nav.Item>
                        <Nav.Link as={Link} to="/dashboard/payment">Payment</Nav.Link>
                    </Nav.Item>
                }
                {!admin &&
                    <Nav.Item>
                        <Nav.Link as={Link} to="/dashboard/myOrders">My Orders</Nav.Link>
                    </Nav.Item>
                }
                {!admin &&
                    <Nav.Item>
                        <Nav.Link as={Link} to="/dashboard/reviewAdd">Add Review</Nav.Link>
                    </Nav.Item>
                }

                {admin &&
                    <Nav.Item>
                        <Nav.Link as={Link} to="/dashboard/addBreed">Add a Breed</Nav.Link>
                    </Nav.Item>
                }
                {admin &&
                    <Nav.Item>
                        <Nav.Link as={Link} to="/dashboard/manageBreeds">Manage Breeds</Nav.Link>
                    </Nav.Item>
                }
                {admin &&
                    <Nav.Item>
                        <Nav.Link as={Link} to="/dashboard/manageOrders">Manage Orders</Nav.Link>
                    </Nav.Item>
                }
                {admin &&
                    <Nav.Item>
                        <Nav.Link as={Link} to="/dashboard/makeAdmin">Make Admin</Nav.Link>
                    </Nav.Item>
                }
                {user?.email ?
                    <Nav.Item>
                        <Button onClick={logout} className="btn fw-bolder btn-success me-2">Logout</Button>
                    </Nav.Item> : ''
                }
            </Nav>
        </div >
    );
};

export default DashboardNav;