import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_URL from "../api";
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

import {
    Box,
    Paper,
    Typography,
    TextField,
    Button,
    Stack,
    Divider
} from '@mui/material';

function Home() {

    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("user"));

    const [name, setName] = useState(user?.name || "");
    const [email, setEmail] = useState(user?.email || "");
    const [number, setNumber] = useState(user?.number || "");
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        if (!user) {
            navigate("/reg", { replace: true });
        }
    }, []);

    if (!user) return null;

    async function handleUpdate() {

        try {

            const updatedUser = {
                ...user,
                name,
                email,
                number
            };

            await axios.put(
                `${API_URL}/users/${user.id}`,
                updatedUser
            );

            localStorage.setItem(
                "user",
                JSON.stringify(updatedUser)
            );

            alert("Profile Updated Successfully");

            setEditMode(false);

        } catch (error) {
            console.log(error);
            alert("Update Failed");
        }
    }

    async function handleDelete() {

        const result = window.confirm(
            "Are you sure you want to delete your account?"
        );

        if (!result) return;

        try {

            await axios.delete(
                `${API_URL}/users/${user.id}`
            );

            localStorage.removeItem("user");

            alert("Account Deleted Successfully");

            navigate("/reg", { replace: true });

        } catch (error) {
            console.log(error);
            alert("Delete Failed");
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
                        sm: 550,
                        md: 650
                    },
                    p: {
                        xs: 3,
                        sm: 4,
                        md: 5
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
                            sm: "2.3rem",
                            md: "2.5rem"
                        },
                        mb: 2
                    }}
                >
                    User Profile
                </Typography>

                <Divider
                    sx={{
                        mb: 4,
                        borderColor: "#334155"
                    }}
                />

                <Stack spacing={3}>

                    <TextField
                        label="Name"
                        value={name}
                        disabled={!editMode}
                        onChange={(e) => setName(e.target.value)}
                        fullWidth
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                backgroundColor: "#334155",
                                color: "#F8FAFC"
                            },

                            "& .MuiInputLabel-root": {
                                color: "#F8FAFC"
                            },

                            "& .MuiInputLabel-root.Mui-focused": {
                                color: "#06B6D4"
                            },

                            "& .MuiInputLabel-root.Mui-disabled": {
                                color: "#F8fAfC84"
                            },

                            "& .MuiInputBase-input.Mui-disabled": {
                                WebkitTextFillColor: "#F8fAfC84"
                            }
                        }}
                    />

                    <TextField
                        label="Email"
                        value={email}
                        disabled={!editMode}
                        onChange={(e) => setEmail(e.target.value)}
                        fullWidth
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                backgroundColor: "#334155",
                                color: "#F8FAFC"
                            },

                            "& .MuiInputLabel-root": {
                                color: "#F8FAFC"
                            },

                            "& .MuiInputLabel-root.Mui-focused": {
                                color: "#06B6D4"
                            },

                            "& .MuiInputLabel-root.Mui-disabled": {
                                color: "#F8FAFC84"
                            },

                            "& .MuiInputBase-input.Mui-disabled": {
                                WebkitTextFillColor: "#F8FAFC84"
                            }
                        }}
                    />

                    <TextField
                        label="Mobile Number"
                        value={number}
                        disabled={!editMode}
                        onChange={(e) => setNumber(e.target.value)}
                        fullWidth
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                backgroundColor: "#334155",
                                color: "#F8FAFC"
                            },

                            "& .MuiInputLabel-root": {
                                color: "#F8FAFC"
                            },

                            "& .MuiInputLabel-root.Mui-focused": {
                                color: "#06B6D4"
                            },

                            "& .MuiInputLabel-root.Mui-disabled": {
                                color: "#F8FAFC84"
                            },

                            "& .MuiInputBase-input.Mui-disabled": {
                                WebkitTextFillColor: "#F8FAFC84"
                            }
                        }}
                    />

                    {!editMode ? (
                        <Button
                            variant="contained"
                            startIcon={<EditIcon />}
                            onClick={() => setEditMode(true)}
                            sx={{
                                backgroundColor: "#06B6D4",
                                py: 1.4,
                                fontWeight: "bold",
                                "&:hover": {
                                    backgroundColor: "#0891B2"
                                }
                            }}
                        >
                            Edit Profile
                        </Button>
                    ) : (
                        <Button
                            variant="contained"
                            startIcon={<SaveIcon/>}
                            color="success"
                            onClick={handleUpdate}
                            sx={{
                                py: 1.4,
                                fontWeight: "bold"
                            }}
                        >
                            Save Changes
                        </Button>
                    )}

                    <Button
                        variant="contained"
                        startIcon={<DeleteIcon/>}
                        color="error"
                        onClick={handleDelete}
                        sx={{
                            py: 1.4,
                            fontWeight: "bold"
                        }}
                    >
                        Delete Account
                    </Button>

                </Stack>
            </Paper>
        </Box>
    );
}

export default Home;