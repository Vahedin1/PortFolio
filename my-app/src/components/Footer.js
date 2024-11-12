import React from "react";

// Material UI Components
import { Box, Container, Typography } from "@mui/material";

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


                {/* Horizontal Divider */}
                <Box sx={{ borderBottom: "2px solid #444", marginY: 2 }} />

                {/* Copyright */}
                <Typography variant="body2" align="center">
                    &copy; VAHA. All Rights Reserved
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;