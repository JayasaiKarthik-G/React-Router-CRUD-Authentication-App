import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import API_URL from "../api";

import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

import {
    Box,
    Paper,
    Typography,
    TextField,
    Button,
    Stack
} from '@mui/material';

function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    let navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem("user");

        if (user) {
            navigate("/home", { replace: true });
        }
    }, [navigate]);

    async function handleSubmit(event) {
        event.preventDefault();

        if (
            name.trim() == "" ||
            email.trim() == "" ||
            number.trim() == "" ||
            password.trim() == "" ||
            confirmPassword.trim() == ""
        ) {
            alert("Please fill all the details.");
            return;
        }

        let namePattern = /^[A-Za-z ]{3,30}$/;
        let emailPattern = /^[a-z0-9._-]{3,30}@gmail[.]com$/;
        let numberPattern = /^[6-9][0-9]{9}$/;
        let passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\W).{8,30}$/;

        if (!namePattern.test(name)) {
            alert("Name must be atleast 3 characters.");
            return;
        }

        if (!emailPattern.test(email)) {
            alert("Please check once your email.");
            return;
        }

        if (!numberPattern.test(number)) {
            alert("Mobile number must be 10 digits.");
            return;
        }

        if (!passwordPattern.test(password)) {
            alert("Password must be strong.");
            return;
        }

        if (password != confirmPassword) {
            alert("passwords do not match");
            return;
        }

        try {

            const response = await axios.get(`${API_URL}/users`);

            const users = response.data;

            const existingUser = users.find(
                (user) => user.email === email
            );

            if (existingUser) {
                alert("Email already registered");
                return;
            }

            const numericIds = users
                .map(user => Number(user.id))
                .filter(id => !isNaN(id));

            const newId = numericIds.length > 0
                ? Math.max(...numericIds) + 1
                : 1;
                
            let obj = {
                id: newId,
                name,
                email,
                number,
                password
            };

            await axios.post(`${API_URL}/users`, obj);

            alert("Registration Completed Successfully");

            navigate("/login", { replace: true });

        } catch (error) {
            console.log(error);
            alert("Registration Failed");
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
                        sm: 450,
                        md: 500
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
                    Registration
                </Typography>

                <form onSubmit={handleSubmit}>
                    <Stack spacing={2.5}>

                        <TextField
                            label="Name"
                            fullWidth
                            value={name}
                            onChange={(e) => setName(e.target.value)}
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
                            label="Mobile Number"
                            fullWidth
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
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

                        <TextField
                            label="Confirm Password"
                            type="password"
                            fullWidth
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
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
                            startIcon={<AppRegistrationIcon />}
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
                            Register Now
                        </Button>

                        <Typography
                            textAlign="center"
                            sx={{ color: "#CBD5E1" }}
                        >
                            Already Registered?{" "}
                            <Link
                                to="/login"
                                style={{
                                    color: "#06B6D4",
                                    textDecoration: "none",
                                    fontWeight: "bold"
                                }}
                            >
                                Login Here
                            </Link>
                        </Typography>

                    </Stack>
                </form>
            </Paper>
        </Box>
    );
}

export default Register;