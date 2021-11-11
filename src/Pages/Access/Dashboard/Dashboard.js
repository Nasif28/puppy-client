import React from 'react';
import ManageBreeds from '../AdminAccess/ManageBreeds/ManageBreeds';
import ManageOrder from '../AdminAccess/ManageOrder/ManageOrder';
import MyOrder from '../UserAccess/MyOrder/MyOrder';
import ReviewAdd from '../UserAccess/ReviewAdd/ReviewAdd';
import AddBreed from './../AdminAccess/AddBread/AddBreed';

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <AddBreed></AddBreed>
            <ManageBreeds></ManageBreeds>
            <ManageOrder></ManageOrder>
            <MyOrder></MyOrder>
            <ReviewAdd></ReviewAdd>
        </div>
    );
};

export default Dashboard;