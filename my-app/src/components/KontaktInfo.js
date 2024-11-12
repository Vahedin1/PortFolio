import React from "react";
import { Grid, Typography } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const colors = {
    white: "#FFFFFF",
    orange: '#FFA500',
    blue: '#1e1e2d',
    gray: "#7A7979",
    black: '#000000',
};

const KontaktInfo = () => {
    return (
        <Grid container spacing={3} sx={{
            backgroundColor: "#004f54",
            color: "#FFFFFF",
            padding: { xs: 2, sm: 4 },
            justifyContent: 'center',
            textAlign: 'center'
        }}>
            <Grid item xs={12} sm={2}>
                <LocationOnIcon fontSize="large" sx={{ fontSize: { xs: '2rem', sm: '2.5rem' } }} />
                <Typography variant="h6" sx={{ fontSize: { xs: '1rem', sm: '1.25rem' }, fontWeight: 600 }}>
                    ADDRESS
                </Typography>
                <Typography sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>Sjenica</Typography>
                <Typography sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>Pešterska bb</Typography>
            </Grid>

            <Grid item xs={12} sm={2}>
                <PhoneIcon fontSize="large" sx={{ fontSize: { xs: '2rem', sm: '2.5rem' } }} />
                <Typography variant="h6" sx={{ fontSize: { xs: '1rem', sm: '1.25rem' }, fontWeight: 600 }}>
                    PHONE
                </Typography>
                <Typography sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>+381 063 8077687</Typography>
            </Grid>

            <Grid item xs={12} sm={2}>
                <EmailIcon fontSize="large" sx={{ fontSize: { xs: '2rem', sm: '2.5rem' } }} />
                <Typography variant="h6" sx={{ fontSize: { xs: '1rem', sm: '1.25rem' }, fontWeight: 600 }}>
                    EMAIL
                </Typography>
                <Typography sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>hamidovicvahedin1@gmail.com</Typography>
            </Grid>

            <Grid item xs={12} sm={2}>
                <GitHubIcon fontSize="large" sx={{ fontSize: { xs: '2rem', sm: '2.5rem' } }} />
                <Typography variant="h6" sx={{ fontSize: { xs: '1rem', sm: '1.25rem' }, fontWeight: 600 }}>
                    GITHUB
                </Typography>
                <Typography sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>github.com/Vahedin1</Typography>
            </Grid>

            <Grid item xs={12} sm={2}>
                <LinkedInIcon fontSize="large" sx={{ fontSize: { xs: '2rem', sm: '2.5rem' } }} />
                <Typography variant="h6" sx={{ fontSize: { xs: '1rem', sm: '1.25rem' }, fontWeight: 600 }}>
                    LINKEDIN
                </Typography>
                <Typography sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>linkedin.com/Vahedin1</Typography>
            </Grid>
        </Grid>
    );
};

export default KontaktInfo;
