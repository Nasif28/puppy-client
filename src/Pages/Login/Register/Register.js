import { Container, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from './../../../Hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <Container>
            <Typography className="text-success fw-bolder" variant=" h1 body1" gutterBottom>Register</Typography>
            {!isLoading && <form onSubmit={handleLoginSubmit}>
                <TextField
                    sx={{ width: '75%', m: 1 }}
                    id="standard-basic"
                    label="Your Name"
                    name="name"
                    onBlur={handleOnBlur}
                    variant="standard" />
                <TextField
                    sx={{ width: '75%', m: 1 }}
                    id="standard-basic"
                    label="Your Email"
                    name="email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" />
                <TextField
                    sx={{ width: '75%', m: 1 }}
                    id="standard-basic"
                    label="Your Password"
                    type="password"
                    name="password"
                    onBlur={handleOnBlur}
                    variant="standard" />
                <TextField
                    sx={{ width: '75%', m: 1 }}
                    id="standard-basic"
                    label="ReType Your Password"
                    type="password"
                    name="password2"
                    onBlur={handleOnBlur}
                    variant="standard" />

                <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Register</Button>
                <br />
                <NavLink
                    style={{ textDecoration: 'none', color: 'black' }}
                    to="/login">
                    Already have an Account? Please<Button>Login</Button>
                </NavLink>
            </form>}
            {isLoading && <CircularProgress />}
            {user?.email && <Alert severity="success">User Created successfully!</Alert>}
            {authError && <Alert severity="error">{authError}</Alert>}
        </Container>
    );
};

export default Register;