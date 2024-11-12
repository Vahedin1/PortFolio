import React, { useState, useEffect } from 'react';
import { Box, Typography, Avatar, Button, Divider, LinearProgress, IconButton } from '@mui/material';
import { Download, Menu, Close, Phone, Email, LocationOn } from '@mui/icons-material';

const colors = {
    white: "#FFFFFF",
    orange: '#FFA500',
    blue: '#1e1e2d',
    gray: "#7A7979",
    black: '#000000',
};

export default function SideContent() {
    const [menuOpen, setMenuOpen] = useState(true); // Default to open on desktop
    const [isMobile, setIsMobile] = useState(false); // Track if it's mobile view

    const languages = [
        { label: 'Bosnian', value: 100 },
        { label: 'English', value: 75 },
        { label: 'Serbian', value: 100 },
    ];

    const skills = [
        { label: 'HTML', value: 100 },
        { label: 'CSS', value: 80 },
        { label: 'JavaScript', value: 60 },
        { label: 'Python', value: 75 },
        { label: 'React', value: 80 },
        { label: 'Material UI', value: 80 },
        { label: 'Git', value: 85 },
    ];

    // Adjust menu visibility on window resize
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Set mobile if screen width is 768px or less
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Initial check on mount

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Update the menu state based on screen size
    useEffect(() => {
        if (isMobile) {
            setMenuOpen(false); // Close menu by default on mobile
        } else {
            setMenuOpen(true); // Open menu by default on desktop
        }
    }, [isMobile]); // Re-run whenever `isMobile` changes

    // Handle menu toggle (open/close)
    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            {/* Menu Toggle Button */}
            <IconButton
                onClick={handleMenuToggle}
                sx={{
                    color: colors.white,
                    position: 'absolute',
                    top: '250px',
                    left: menuOpen ? '300px' : '0px', // Move button when the menu is toggled
                    zIndex: 1000,
                    backgroundColor: colors.gray,
                    padding: '10px',
                    borderRadius: '50%',
                    boxShadow: 3,
                    transition: 'left 0.3s ease',
                }}
            >
                {menuOpen ? <Close /> : <Menu />}
            </IconButton>

            {/* Side Content */}
            <Box
                sx={{
                    width: { xs: '100%', sm: '300px' }, // 100% width on mobile, 300px on desktop
                    backgroundColor: colors.blue,
                    color: colors.white,
                    display: 'flex',
                    flexDirection: 'column',
                    padding: 3,
                    marginTop: '0px',
                    height: '100%',
                    position: menuOpen ? 'relative' : 'absolute', // Adjust based on menu state
                    left: menuOpen ? 0 : '-750px', // Slide effect for opening/closing
                    top: 0,
                    transition: 'left 0.3s ease',
                    zIndex: 100,
                }}
            >
                {/* Profile Information */}
                <Box sx={{ textAlign: 'center', mb: 3 }}>
                    <Avatar
                        src="../assets/my-img.png"
                        sx={{
                            width: 200,
                            height: 200,
                            mx: 'auto',
                            mb: 2,
                            bgcolor: colors.white,
                        }}
                    />
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: colors.orange }}>
                        Vahedin Hamidovic
                    </Typography>
                    <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
                        Front-end Developer & Python & AI Developer
                    </Typography>
                </Box>

                <Divider sx={{ my: 3, borderColor: '#444' }} />

                {/* Personal Details */}
                <Typography variant="h6" sx={{ mb: 1, color: colors.orange }}>
                    Personal Details
                </Typography>
                <Box sx={{ mb: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                        <LocationOn sx={{ mr: 1 }} />
                        <Typography>Serbia - Sjenica</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                        <Phone sx={{ mr: 1 }} />
                        <Typography>+381 063 8077687</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                        <Email sx={{ mr: 1 }} />
                        <Typography>hamidovicvahedin1@gmail.com</Typography>
                    </Box>
                </Box>

                {/* Language Skills */}
                <Typography variant="h6" sx={{ mb: 1, color: colors.orange }}>
                    Language Skills
                </Typography>
                <Box sx={{ mb: 3 }}>
                    {languages.map((lang, index) => (
                        <Box key={index} sx={{ mb: 2 }}>
                            <Typography variant="body2">{lang.label}</Typography>
                            <LinearProgress
                                variant="determinate"
                                value={lang.value}
                                sx={{ height: 8, borderRadius: 5, backgroundColor: '#2d2d44' }}
                            />
                        </Box>
                    ))}
                </Box>

                {/* Technical Skills */}
                <Typography variant="h6" sx={{ mb: 1, color: colors.orange }}>
                    Technical Skills
                </Typography>
                <Box sx={{ mb: 3 }}>
                    {skills.map((skill, index) => (
                        <Box key={index} sx={{ mb: 2 }}>
                            <Typography variant="body2">{skill.label}</Typography>
                            <LinearProgress
                                variant="determinate"
                                value={skill.value}
                                sx={{ height: 8, borderRadius: 5, backgroundColor: '#2d2d44' }}
                            />
                        </Box>
                    ))}
                </Box>

                {/* Download CV Button */}
                <Button variant="contained" color="warning" startIcon={<Download />}>
                    Download CV
                </Button>
            </Box>
        </div>
    );
}
