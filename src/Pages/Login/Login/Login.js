import { Container, Typography, TextField, CircularProgress, Alert, Button } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from './../../../Hooks/useAuth';


const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    return (
        <Container>
            <Typography variant="body1" gutterBottom>Login</Typography>
            <form onSubmit={handleLoginSubmit}>
                <TextField
                    sx={{ width: '75%', m: 1 }}
                    id="standard-basic"
                    label="Your Email"
                    name="email"
                    onChange={handleOnChange}
                    variant="standard" />
                <TextField
                    sx={{ width: '75%', m: 1 }}
                    id="standard-basic"
                    label="Your Password"
                    type="password"
                    name="password"
                    onChange={handleOnChange}
                    variant="standard" />

                <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login</Button>
                <br />
                <NavLink
                    style={{ textDecoration: 'none', color: 'black'}}
                    to="/register">
                    If you don't have an account. Please<Button>Register</Button>
                </NavLink>
                {isLoading && <CircularProgress />}
                {user?.email && <Alert severity="success">Login successfully!</Alert>}
                {authError && <Alert severity="error">{authError}</Alert>}
            </form>
            <Button onClick={handleGoogleSignIn} variant="contained">Google Sign In</Button>
        </Container>
    );
};

export default Login;