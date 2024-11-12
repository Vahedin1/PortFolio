import React from "react";

// Material UI Components
import { Box, Container, Typography, IconButton } from "@mui/material";
import { Instagram, GitHub, LinkedIn } from "@mui/icons-material";

const colors = {
    white: "#FFFFFF",
    orange: '#FFA500',
    blue: '#1e1e2d',
    gray: "#7A7979",
    black: '#000000',
    red: "#FF0000",  // Added red color
    hoverBlue: "#0000FF",  // Added hover blue color for icons
};

const Footer = () => {
    return (
        <Box sx={{
            backgroundColor: colors.blue,  // Updated to blue background
            color: colors.white,
            paddingY: { xs: 3, sm: 4 }, // Adjust padding for different screen sizes
            textAlign: 'center',
        }}>
            <Container
                maxWidth="false"
                sx={{
                    maxWidth: { xs: "100%", sm: "1300px" },
                    margin: "0 auto",
                    textAlign: 'center',
                }}
            >
                {/* Follow Me Section */}
                <Typography variant="h6" align="center" gutterBottom sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                    Follow Me
                </Typography>

                {/* Social Media Icons */}
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: { xs: 1, sm: 2 },
                    marginBottom: 2,
                }}>
                    <IconButton
                        component="a"
                        href="https://instagram.com/vaha_dubinsko/"
                        target="_blank"
                        sx={{
                            color: colors.white,
                            '&:hover': {
                                color: colors.hoverBlue,  // Hover effect with blue color
                                transform: 'scale(1.5)',
                            },
                            fontSize: { xs: '2rem', sm: '2.5rem' }, // Adjust icon size for smaller screens
                        }}
                        aria-label="Instagram"
                    >
                        <Instagram />
                    </IconButton>
                    <IconButton
                        component="a"
                        href="https://github.com/vahedin1"
                        target="_blank"
                        sx={{
                            color: colors.white,
                            '&:hover': {
                                color: colors.hoverBlue,  // Hover effect with blue color
                                transform: 'scale(1.5)',
                            },
                            fontSize: { xs: '2rem', sm: '2.5rem' }, // Adjust icon size for smaller screens
                        }}
                        aria-label="GitHub"
                    >
                        <GitHub />
                    </IconButton>
                    <IconButton
                        component="a"
                        href="https://www.linkedin.com/in/yourusername"
                        target="_blank"
                        sx={{
                            color: colors.white,
                            '&:hover': {
                                color: colors.hoverBlue,  // Hover effect with blue color
                                transform: 'scale(1.5)',
                            },
                            fontSize: { xs: '2rem', sm: '2.5rem' }, // Adjust icon size for smaller screens
                        }}
                        aria-label="LinkedIn"
                    >
                        <LinkedIn />
                    </IconButton>
                </Box>

                {/* Horizontal Divider */}
                <Box sx={{ borderBottom: "2px solid #444", marginY: { xs: 2, sm: 3 } }} />

                {/* Copyright */}
                <Typography variant="body2" align="center" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>
                    &copy; VAHA. All Rights Reserved
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
