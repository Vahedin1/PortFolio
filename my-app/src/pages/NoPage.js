
import { Typography } from '@mui/material';

const colors = {
    white: "#FFFFFF",
    orange: '#FFA500',
    blue: '#1e1e2d',
    gray: "#7A7979",
    black: '#000000',
};


export default function NoPage() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <div style={{ flex: '1 0 auto' }}>
                <Typography sx={{
                    textDecoration: "none",
                    fontFamily: 'Bahnschrift, Arial, sans-serif',
                    fontWeight: 700,
                    letterSpacing: "0rem",
                    textAlign: "center",
                    marginTop: '200px',
                    marginBottom: '50px',
                    fontSize: {
                        sm: '2rem',
                        xs: '1rem',
                    }
                }}>
                    Error 404 - Nicht gefunden
                    <br />
                    Error 404: Not Found
                </Typography>
            </div>

        </div>

    );
}