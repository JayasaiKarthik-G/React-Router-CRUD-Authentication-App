import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    IconButton
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LogoutIcon from '@mui/icons-material/Logout';

function NavBar() {

    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("user"));

    const [open, setOpen] = useState(false);

    function handleLogout() {
        localStorage.removeItem("user");
        navigate("/login", { replace: true });
        setOpen(false);
    }

    return (
        <>
            <AppBar
                position="fixed"
                sx={{
                    backgroundColor: "#020617",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.35)"
                }}
            >
                <Toolbar>

                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            flexGrow: 1
                        }}
                    >
                        <ManageAccountsIcon
                            sx={{ color: "#06B6D4" }}
                        />

                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: "bold",
                                color: "#06B6D4",
                                fontSize: {
                                    xs: "0.9rem",
                                    sm: "1.2rem"
                                }
                            }}
                        >
                            User Management System
                        </Typography>
                    </Box>

                    {/* Desktop Menu */}

                    <Box
                        sx={{
                            display: {
                                xs: "none",
                                md: "flex"
                            },
                            gap: 2
                        }}
                    >
                        {!user ? (
                            <>
                                <Button
                                    component={Link}
                                    startIcon={<HomeIcon />}
                                    to="/"
                                    sx={{ color: "#F8FAFC" }}
                                >
                                    Home
                                </Button>

                                <Button
                                    component={Link}
                                    to="/login"
                                    startIcon={<LoginIcon />}
                                    sx={{ color: "#F8FAFC" }}
                                >
                                    Login
                                </Button>

                                <Button
                                    component={Link}
                                    to="/reg"
                                    variant="contained"
                                    startIcon={<AppRegistrationIcon />}
                                    sx={{
                                        backgroundColor: "#06B6D4",
                                        "&:hover": {
                                            backgroundColor: "#0891B2"
                                        }
                                    }}
                                >
                                    Register
                                </Button>
                            </>
                        ) : (
                            <>
                                <Button
                                    component={Link}
                                    to="/home"
                                    startIcon={<HomeIcon />}
                                    sx={{ color: "#F8FAFC" }}
                                >
                                    Home
                                </Button>

                                <Button
                                    variant="contained"
                                    color="error"
                                    startIcon={<LogoutIcon />}
                                    onClick={handleLogout}
                                >
                                    Logout
                                </Button>
                            </>
                        )}
                    </Box>

                    {/* Mobile Menu Button */}

                    <IconButton
                        sx={{
                            display: {
                                xs: "flex",
                                md: "none"
                            },
                            color: "#F8FAFC"
                        }}
                        onClick={() => setOpen(true)}
                    >
                        <MenuIcon />
                    </IconButton>

                </Toolbar>
            </AppBar>

            {/* Drawer */}

            <Drawer
                anchor="right"
                open={open}
                onClose={() => setOpen(false)}
                slotProps={{
                    paper: {
                        sx: {
                            width: {
                                xs: 160,
                                sm: 200
                            },
                            backgroundColor: "#1E293B",
                            color: "#F8FAFC"
                        }
                    }
                }}
            >
                <List>

                    {!user ? (
                        <>
                            <ListItem disablePadding>
                                <ListItemButton
                                    component={Link}
                                    to="/"
                                    onClick={() => setOpen(false)}
                                >
                                    <HomeIcon sx={{ mr: 1 }} />
                                    <ListItemText primary="Home" />
                                </ListItemButton>
                            </ListItem>

                            <ListItem disablePadding>
                                <ListItemButton
                                    component={Link}
                                    to="/login"
                                    onClick={() => setOpen(false)}
                                >
                                    <LoginIcon sx={{ mr: 1 }} />
                                    <ListItemText primary="Login" />
                                </ListItemButton>
                            </ListItem>

                            <ListItem disablePadding>
                                <ListItemButton
                                    component={Link}
                                    to="/reg"
                                    onClick={() => setOpen(false)}
                                >
                                    <AppRegistrationIcon sx={{ mr: 1 }} />
                                    <ListItemText primary="Register" />
                                </ListItemButton>
                            </ListItem>
                        </>
                    ) : (
                        <>
                            <ListItem disablePadding>
                                <ListItemButton
                                    component={Link}
                                    to="/home"
                                    onClick={() => setOpen(false)}
                                >
                                    <HomeIcon sx={{ mr: 1 }} />
                                    <ListItemText primary="Home" />
                                </ListItemButton>
                            </ListItem>

                            <ListItem disablePadding>
                                <ListItemButton
                                    onClick={handleLogout}
                                >
                                    <LogoutIcon sx={{ mr: 1 }} />
                                    <ListItemText primary="Logout" />
                                </ListItemButton>
                            </ListItem>
                        </>
                    )}

                </List>
            </Drawer>
        </>
    );
}

export default NavBar;