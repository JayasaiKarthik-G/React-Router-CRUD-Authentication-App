import React from 'react';

import {
    Box,
    Container,
    Typography,
    Stack
} from '@mui/material';

function Footer() {

    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: "#020617",
                borderTop: "1px solid #334155",
                mt: "auto",
                py: 3
            }}
        >
            <Container maxWidth="lg">

                <Stack
                    direction={{
                        xs: "column",
                        sm: "column",
                        md: "row"
                    }}
                    spacing={2}
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        px: 1
                    }}
                >

                    <Typography
                        variant="h6"
                        sx={{
                            color: "#06B6D4",
                            fontWeight: "bold",
                            fontSize: {
                                xs: "1rem",
                                sm: "1.1rem"
                            }
                        }}
                    >
                        User Management System
                    </Typography>

                    <Typography
                        variant="body2"
                        sx={{
                            color: "#CBD5E1",
                            textAlign: "center",
                            fontSize: {
                                xs: "0.8rem",
                                sm: "0.9rem"
                            }
                        }}
                    >
                        Manage registration, login and profile information securely.
                    </Typography>

                    <Typography
                        variant="body2"
                        sx={{
                            color: "#94A3B8",
                            fontSize: {
                                xs: "0.75rem",
                                sm: "0.85rem"
                            }
                        }}
                    >
                        © {new Date().getFullYear()} UMS
                    </Typography>

                </Stack>

            </Container>
        </Box>
    );
}

export default Footer;