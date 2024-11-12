// MainLayout.js
import React from 'react';
import { Box } from '@mui/material';
import ResponsiveAppBar from './AppBar'; // Adjusted import path to match your structure
import Footer from './Footer';          // Corrected relative path
import SideContent from './SideContent';

export default function MainLayout({ children }) {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <ResponsiveAppBar />

            <Box sx={{ display: 'flex', flex: 1 }}>
                <SideContent />

                {/* Main content */}
                <Box sx={{ flex: 1, padding: 3, minHeight: 'calc(100vh - 64px - 80px)', display: 'flex', flexDirection: 'column'  }}>
                    {children}
                </Box>
            </Box>

            <Footer />
        </Box>
    );
}
