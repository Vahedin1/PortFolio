import React, { useState } from 'react';
import { Grid, Typography, Box, Link, Paper } from '@mui/material';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiPython } from 'react-icons/si';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions'; // Material UI icon

// Define icons directly here since you've removed the Icons.js file
export const HtmlIcon = () => <SiHtml5 color="#E34F26" />; // HTML icon color
export const CssIcon = () => <SiCss3 color="#1572B6" />; // CSS icon color
export const JsIcon = () => <SiJavascript color="#F7DF1E" />; // JavaScript icon color
export const ReactIcon = () => <SiReact color="#61DAFB" />; // React icon color
export const MuiIcon = () => <IntegrationInstructionsIcon style={{ color: '#007FFF', fontSize: 40 }} />; // Material UI icon color
export const PythonIcon = () => <SiPython color="#3776AB" />; // Python icon color

const colors = {
    white: "#FFFFFF",
    orange: '#FFA500',
    blue: '#1e1e2d',
    gray: "#7A7979",
    black: '#000000',
};

// Map icon names to actual icons
const iconMapping = {
    html: <HtmlIcon />,
    css: <CssIcon />,
    js: <JsIcon />,
    react: <ReactIcon />,
    mui: <MuiIcon />,
    python: <PythonIcon />,
};

const Projects = ({ projects = [] }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <Grid container spacing={3} sx={{ bgcolor: colors.blue }}>
            {projects.length > 0 ? (
                projects.map((project, index) => (
                    <Grid
                        item
                        xs={12}
                        sm={4}
                        md={4}
                        key={index}
                        style={{
                            position: 'relative',
                            cursor: 'pointer',
                            height: '300px',
                        }}
                        onMouseEnter={() => setHoveredIndex(index)}  // Set index on hover
                        onMouseLeave={() => setHoveredIndex(null)}   // Clear on mouse leave
                    >
                        <Link
                            href={project.url}
                            style={{ textDecoration: 'none', display: 'block', height: '100%', width: '100%' }}
                        >
                            <Paper
                            
                                style={{
                                    position: 'relative',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-end',
                                    backgroundColor: colors.blue,
                                    overflow: 'hidden',  // Ensure no overflow
                                    borderRadius: '8px', // Optional: add rounded corners
                                }}
                            >
                                {hoveredIndex === index ? (
                                    <video
                                        src={project.video}
                                        style={{
                                            objectFit: 'cover',
                                            width: '100%',
                                            height: '100%',
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                        }}
                                        muted
                                        autoPlay
                                        loop
                                    />
                                ) : (
                                    <img
                                        src={project.img}
                                        alt={project.title}
                                        style={{
                                            objectFit: 'cover',
                                            width: '100%',
                                            height: '100%',
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            opacity: project.imgOpacity || 1,  // Apply dynamic opacity here
                                        }}
                                    />
                                )}

                                {/* Add background overlay with opacity */}
                                <div
                                    style={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '35%',
                                        backgroundColor: colors.blue,
                                        opacity: project.overlayOpacity || 0.6, // Apply dynamic overlay opacity
                                        zIndex: 1,
                                    }}
                                ></div>

                                {/* Project Title and Icons */}
                                <div
                                    style={{
                                        position: 'relative',
                                        zIndex: 2,
                                        textAlign: 'left',
                                        padding: '10px',
                                        color: colors.white,
                                    }}
                                >
                                    <Typography variant="h6" style={{ color: project.titleColor }}>
                                        {project.title}
                                    </Typography>

                                    {/* Render icons dynamically */}
                                    <div style={{ display: 'flex', gap: '10px' }}>
                                        {project.icons.map((iconName) => {
                                            const icon = iconMapping[iconName];
                                            const isMuiIcon = iconName === 'mui'; // Check if it's a Material UI icon
                                            const fontSize = isMuiIcon ? 45 : 45; // Apply different font sizes

                                            return (
                                                icon && (
                                                    <Box key={iconName} sx={{ fontSize }}>
                                                        {icon}
                                                    </Box>
                                                )
                                            );
                                        })}
                                    </div>
                                </div>
                            </Paper>
                        </Link>
                    </Grid>
                ))
            ) : (
                <Typography>No projects available.</Typography>
            )}
        </Grid>
    );
};

export default Projects;
