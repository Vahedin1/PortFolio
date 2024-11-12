import React from 'react';
import { Box } from '@mui/material';
import ResponsiveAppBar from './AppBar';
import Footer from './Footer';
import SideContent from './SideContent';

export default function MainLayout({ children }) {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <ResponsiveAppBar />

            <Box sx={{ display: 'flex', flex: 1 }}>
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
