import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import {
    Box,
    Paper,
    Typography,
    Button
} from '@mui/material';

function LandingPage() {

    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem("user");

        if (user) {
            navigate("/home", { replace: true });
        }
    }, [navigate]);

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
                        md: 550
                    },
                    p: {
                        xs: 3,
                        sm: 4,
                        md: 5
                    },
                    textAlign: "center"
                }}
            >
                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: "bold",
                        mb: 3,
                        fontSize: {
                            xs: "2rem",
                            sm: "2.5rem",
                            md: "3rem"
                        }
                    }}
                >
                    User Management System
                </Typography>

                <Typography
                    sx={{
                        color: "#CBD5E1",
                        mb: 4,
                        fontSize: {
                            xs: "0.95rem",
                            sm: "1rem"
                        }
                    }}
                >
                    This is a simple React + JSON Server CRUD application
                    for managing user registration, login and profile.
                </Typography>

                <Button
                    component={Link}
                    to="/login"
                    variant="contained"
                    fullWidth
                    size="large"
                    sx={{
                        backgroundColor: "#06B6D4",
                        py: 1.5,
                        fontWeight: "bold",
                        borderRadius: 2,
                        "&:hover": {
                            backgroundColor: "#0891B2"
                        }
                    }}
                >
                    Go To Login
                </Button>
            </Paper>
        </Box>
    );
}

export default LandingPage;