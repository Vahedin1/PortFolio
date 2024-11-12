import React from 'react';
import { Box } from '@mui/material';
import ResponsiveAppBar from './AppBar';
import Footer from './Footer';
import SideContent from './SideContent';

const colors = {
    white: "#FFFFFF",
    orange: '#FFA500',
    blue: '#1e1e2d',
    gray: "#7A7979",
    black: '#000000',
};

export default function MainLayout({ children }) {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <ResponsiveAppBar />

            <Box sx={{ display: 'flex', flex: 1 ,zindex: 1100, boxShadow: 'none'}}>
                {/* Sidebar */}
                <SideContent />

                {/* Main Content */}
                <Box sx={{ flex: 1, padding: 3 }}>
                    {children}
                </Box>
            </Box>

            <Footer />
        </Box>
    );
}