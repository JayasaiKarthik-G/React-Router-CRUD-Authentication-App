import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import API_URL from "../api";
import LoginIcon from '@mui/icons-material/Login';

import {
    Box,
    Paper,
    Typography,
    TextField,
    Button,
    Stack
} from '@mui/material';


function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem("user");

        if (user) {
            navigate("/home", { replace: true });
        }
    }, [navigate]);

    async function handleLogin(event) {
        event.preventDefault();

        if (email.trim() === "" || password.trim() === "") {
            alert("Please fill all details");
            return;
        }

        try {

            const response = await axios.get(
                `${API_URL}/users?email=${email}&password=${password}`
            );

            if (response.data.length > 0) {

                localStorage.setItem(
                    "user",
                    JSON.stringify(response.data[0])
                );

                alert("Login Successful");

                navigate("/home", { replace: true });

            } else {
                alert("Invalid Email or Password");
            }

        } catch (error) {
            console.log(error);
            alert("Login Failed");
        }
    }

    return (
        <Box
            sx={{
                minHeight: "100vh",
                backgroundColor: "#0F172A",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                p: {
                    xs: 2,
                    sm: 3
                }
            }}
        >
            <Paper
                elevation={10}
                sx={{
                    backgroundColor: "#1E293B",
                    color: "#F8FAFC",
                    borderRadius: 4,
                    width: {
                        xs: "100%",
                        sm: 420,
                        md: 450
                    },
                    p: {
                        xs: 3,
                        sm: 4
                    }
                }}
            >
                <Typography
                    variant="h4"
                    textAlign="center"
                    fontWeight="bold"
                    sx={{
                        fontSize: {
                            xs: "2rem",
                            sm: "2.3rem"
                        },
                        mb: 5
                    }}
                >
                    Login
                </Typography>

                <form onSubmit={handleLogin}>
                    <Stack spacing={2.5}>

                        <TextField
                            label="Email"
                            fullWidth
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    backgroundColor: "#334155",
                                    color: "#F8FAFC"
                                },
                                "& .MuiInputLabel-root": {
                                    color: "#CBD5E1"
                                },
                                "& .MuiInputLabel-root.Mui-focused": {
                                    color: "#06B6D4"
                                }
                            }}
                        />

                        <TextField
                            label="Password"
                            type="password"
                            fullWidth
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    backgroundColor: "#334155",
                                    color: "#F8FAFC"
                                },
                                "& .MuiInputLabel-root": {
                                    color: "#CBD5E1"
                                },
                                "& .MuiInputLabel-root.Mui-focused": {
                                    color: "#06B6D4"
                                }
                            }}
                        />

                        <Button
                            type="submit"
                            variant="contained"
                            startIcon={<LoginIcon />}
                            size="large"
                            sx={{
                                backgroundColor: "#06B6D4",
                                py: 1.5,
                                fontWeight: "bold",
                                "&:hover": {
                                    backgroundColor: "#0891B2"
                                }
                            }}
                        >
                            Login
                        </Button>

                        <Typography
                            textAlign="center"
                            sx={{
                                color: "#CBD5E1"
                            }}
                        >
                            New User?{" "}
                            <Link
                                to="/reg"
                                style={{
                                    color: "#06B6D4",
                                    textDecoration: "none",
                                    fontWeight: "bold"
                                }}
                            >
                                Register Here
                            </Link>
                        </Typography>

                    </Stack>
                </form>
            </Paper>
        </Box>
    );
}

export default Login;