import * as React from 'react';
import { Button, Typography, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import Projects from './Projects';

const colors = {
    white: "#FFFFFF",
    orange: '#FFA500',
    blue: '#1e1e2d',
    gray: "#7A7979",
    black: '#000000',
};

export default function AboutMe({ projects }) {
    const recentProjects = projects.slice(0, 9);

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                padding: '20px',
                backgroundColor: '#f4f6f9',
            }}
        >
            <div style={{ flex: '1 0 auto' }}>
                {/* About Me Section */}
                <Paper
                    elevation={3}
                    sx={{
                        padding: '20px',
                        marginBottom: '20px',
                        '@media (max-width: 600px)': {
                            padding: '15px',
                        },
                    }}
                >
                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: 'bold',
                            marginBottom: '10px',
                            fontSize: '2.5rem',
                            '@media (max-width: 600px)': {
                                fontSize: '1.8rem', // Adjust font size for mobile
                            },
                        }}
                    >
                        About Me
                    </Typography>
                    <Typography
                        variant="body1"
                        paragraph
                        sx={{
                            fontSize: '1.1rem',
                            '@media (max-width: 600px)': {
                                fontSize: '1rem', // Adjust font size for mobile
                            },
                        }}
                    >
                        — EST 2023 — Hi there I'm VAHA — Front End Developer & Python Developer. I take pride in providing beautifully designed, well thought out and animated websites to the masses.
                        Let's work together and bring your project to life and give it the razzle-dazzle it deserves. We don't take ourselves too seriously — just the work we do. Take care.
                    </Typography>
                </Paper>

                {/* Education Section */}
                <Paper
                    elevation={3}
                    sx={{
                        padding: '20px',
                        marginBottom: '20px',
                        '@media (max-width: 600px)': {
                            padding: '15px',
                        },
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 'bold',
                            marginBottom: '10px',
                            fontSize: '1.8rem',
                            '@media (max-width: 600px)': {
                                fontSize: '1.5rem',
                            },
                        }}
                    >
                        Education
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 'bold',
                            fontSize: '1.2rem',
                            '@media (max-width: 600px)': {
                                fontSize: '1.1rem',
                            },
                        }}
                    >
                        Python & AI Developer
                    </Typography>
                    <Typography
                        variant="body1"
                        paragraph
                        sx={{
                            fontSize: '1.1rem',
                            '@media (max-width: 600px)': {
                                fontSize: '1rem',
                            },
                        }}
                    >
                        IT Academy - Graduated 2024
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 'bold',
                            fontSize: '1.2rem',
                            '@media (max-width: 600px)': {
                                fontSize: '1.1rem',
                            },
                        }}
                    >
                        Microsoft Development Program
                    </Typography>
                    <Typography
                        variant="body1"
                        paragraph
                        sx={{
                            fontSize: '1.1rem',
                            '@media (max-width: 600px)': {
                                fontSize: '1rem',
                            },
                        }}
                    >
                        IT Academy - Currently Enrolled
                    </Typography>
                </Paper>

                {/* Recent Projects Section */}
                <Paper
                    elevation={3}
                    sx={{
                        padding: '20px',
                        marginBottom: '20px',
                        '@media (max-width: 600px)': {
                            padding: '15px',
                        },
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 'bold',
                            marginBottom: '10px',
                            fontSize: '1.8rem',
                            '@media (max-width: 600px)': {
                                fontSize: '1.5rem',
                            },
                        }}
                    >
                        Recent Projects
                    </Typography>

                    {/* Use the Projects component and pass only recent projects */}
                    <Projects projects={recentProjects} />

                    <Button
                        variant="contained"
                        color="primary"
                        component={Link}
                        to="/projects"
                        sx={{
                            marginTop: '10px',
                            '@media (max-width: 600px)': {
                                width: '100%', // Make the button full width on mobile
                            },
                        }}
                    >
                        View All Projects
                    </Button>
                </Paper>
            </div>
        </div>
    );
}
