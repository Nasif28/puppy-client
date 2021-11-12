import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from '../../../Contexts/AuthProvider';
import ManageBreeds from '../AdminAccess/ManageBreeds/ManageBreeds';
import ManageOrder from '../AdminAccess/ManageOrder/ManageOrder';
import MyOrder from '../UserAccess/MyOrder/MyOrder';
import ReviewAdd from '../UserAccess/ReviewAdd/ReviewAdd';
import AddBreed from './../AdminAccess/AddBread/AddBreed';
import MakeAdmin from './../AdminAccess/MakeAdmin/MakeAdmin';
import Payment from '../UserAccess/Payment/Payment';
import DashboardNav from '../DashboardNav/DashboardNav';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';

const Dashboard = () => {

    return (
        <div className="container mx-auto">
            <AuthProvider>
                <Router>
                    <DashboardNav></DashboardNav>
                    <Switch>

                        <Route exact path="/dashboard/payment">
                            <Payment></Payment>
                        </Route>

                        <Route path="/dashboard/myOrders">
                            <MyOrder></MyOrder>
                        </Route>

                        <Route path="/dashboard/reviewAdd">
                            <ReviewAdd></ReviewAdd>
                        </Route>

                        <AdminRoute path="/dashboard/addBreed">
                            <AddBreed></AddBreed>
                        </AdminRoute>

                        <AdminRoute path="/dashboard/manageBreeds">
                            <ManageBreeds></ManageBreeds>
                        </AdminRoute>

                        <AdminRoute path="/dashboard/manageOrders">
                            <ManageOrder></ManageOrder>
                        </AdminRoute>

                        <AdminRoute path="/dashboard/makeAdmin">
                            <MakeAdmin></MakeAdmin>
                        </AdminRoute>

                    </Switch>
                </Router>
            </AuthProvider>
        </div>
    );
};

export default Dashboard;