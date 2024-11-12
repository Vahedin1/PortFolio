import React from "react";

// Material UI Components
import { Box, Container, Typography } from "@mui/material";

const colors = {
    white: "#FFFFFF",
    gray: "#e6e1e1",
    black: "#000000",

};




const Footer = () => {

    return (
        <Box sx={{
            backgroundColor: colors.black,
            color: colors.white,
        }}>
            <Container
                maxWidth="false"
                sx={{
                    maxWidth: { xs: "100%", sm: "1300px" },
                    margin: "0 auto",
                    marginTop: "0 auto",
                }}
            >


                {/* Horizontal Divider */}
                <Box sx={{ borderBottom: "2px solid #444", marginY: "20px" }} />

                {/* Copyright */}
                <Typography variant="body2" align="center">
                    &copy; 2024 | www.unger-bau.de

                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;