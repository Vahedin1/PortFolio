import React from 'react';
import { Box, Typography, Avatar, Button, Divider, LinearProgress } from '@mui/material';
import { Download, Language, GitHub } from '@mui/icons-material';

const colors = {
    blue: '#1e1e2d',
    white: '#FFFFFF',
    gray: '#e6e1e1',
    black: "#000000",
};


export default function SideContent() {
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

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <div style={{ flex: '1 0 auto' }}>
                <Box
                    sx={{
                        width: 300,
                        backgroundColor: colors.blue,
                        color: colors.white,
                        display: 'flex',
                        flexDirection: 'column',
                        padding: 3,
                        position: 'relative', // Fix the sidebar on the left side
                        top: '90px', // Add space to move it below the AppBar
                        height: '100%', // Adjust height to fit within the viewport
                        flexShrink: 0,
                        
                    }}
                >
                    {/* Profile Information */}
                    <Box sx={{ textAlign: 'center', mb: 3 }}>
                        <Avatar
                            src="../assets/my-img.png"
                            sx={{ width: 100, height: 100, mx: 'auto', mb: 2 }}
                        />
                        <Typography variant="h6">Vahedin Hamidovic</Typography>
                        <Typography variant="body2">Front-end Developer & Python & AI Developer</Typography>
                    </Box>

                    <Divider sx={{ my: 3, borderColor: '#444' }} />

                    {/* Personal Details */}
                    <Box sx={{ mb: 3 }}>
                        <Typography>Residence: Serbia</Typography>
                        <Typography>City: Sjenica</Typography>
                        <Typography>Age: 20</Typography>
                    </Box>

                    {/* Language Skills */}
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

                    {/* Tools and Technologies */}
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                        <Language />
                        <GitHub />
                        {/* Add more icons as needed */}
                    </Box>

                    {/* Download CV Button */}
                    <Button
                        variant="contained"
                        color="warning"
                        startIcon={<Download />}
                        sx={{ mt: 'auto' }}
                    >
                        Download CV
                    </Button>
                </Box>
            </div>
        </div>
    );
}
