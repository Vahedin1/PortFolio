// Kontakt.js
import React from "react";
import { Grid } from "@mui/material";
import KontaktInfo from "../components/KontaktInfo";
import KontaktForm from "../components/KontaktForm";

const colors = {
    white: "#FFFFFF",
    orange: '#FFA500',
    blue: '#1e1e2d',
    gray: "#7A7979",
    black: '#000000',
};


export default function Kontakt() {
    return (
        <>
            <KontaktInfo />
            <Grid container spacing={2} marginTop="20px" marginBottom="20px" sx={{ minHeight: '100vh', justifyContent: 'center', alignItems: 'center', bgcolor: colors.orange }}>
                <Grid item xs={12} md={8}>
                    <KontaktForm />
                </Grid>
            </Grid>
        </>
    );
}
