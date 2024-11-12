import React from "react";

// Material UI Components
import { Box, Container, Typography, IconButton } from "@mui/material";
import { Instagram, GitHub, LinkedIn } from "@mui/icons-material";

const colors = {
    blue: '#1e1e2d',
    white: '#FFFFFF',
    gray: '#e6e1e1',
    black: "#000000",
};

const Footer = () => {
    return (
        <Box sx={{
            backgroundColor: colors.blue,
            color: colors.white,
            paddingY: 2,
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
                <Typography variant="h6" align="center" gutterBottom>
                    Follow Me
                </Typography>

                {/* Social Media Icons */}
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 2,
                    marginBottom: 2
                }}>
                    <IconButton
                        component="a"
                        href="https://www.instagram.com/yourusername"
                        target="_blank"
                        sx={{ color: colors.white }}
                        aria-label="Instagram"
                    >
                        <Instagram />
                    </IconButton>
                    <IconButton
                        component="a"
                        href="https://github.com/yourusername"
                        target="_blank"
                        sx={{ color: colors.white }}
                        aria-label="GitHub"
                    >
                        <GitHub />
                    </IconButton>
                    <IconButton
                        component="a"
                        href="https://www.linkedin.com/in/yourusername"
                        target="_blank"
                        sx={{ color: colors.white }}
                        aria-label="LinkedIn"
                    >
                        <LinkedIn />
                    </IconButton>
                </Box>

                {/* Horizontal Divider */}
                <Box sx={{ borderBottom: "2px solid #444", marginY: 2 }} />

                {/* Copyright */}
                <Typography variant="body2" align="center">
                <br/>
                    &copy; VAHA. All Rights Reserved
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
