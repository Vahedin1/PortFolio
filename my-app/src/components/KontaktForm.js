import React, { useState } from "react";
import { Box, Button, Alert, Snackbar, TextField, FormControl, InputLabel, MenuItem, Select, FormHelperText } from "@mui/material";
import emailjs from 'emailjs-com';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const colors = {
    white: "#FFFFFF",
    orange: '#FFA500',
    blue: '#1e1e2d',
    gray: "#7A7979",
    black: '#000000',
    green: '#097969',
};

const KontaktForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        queryType: "",
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");

    // Handler for text input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handler for phone input changes
    const handlePhoneChange = (value) => {
        setFormData({ ...formData, phone: value });
    };

    // Basic email validation
    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    // Validation function
    const validateForm = () => {
        const newErrors = {};

        if (!formData.name) newErrors.name = "Name is required";
        if (!formData.email || !validateEmail(formData.email)) newErrors.email = "Valid email is required";
        if (!formData.phone) newErrors.phone = "Phone number is required";
        if (!formData.message) newErrors.message = "Message is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async () => {
        if (!validateForm()) return;

        setIsSubmitting(true);

        try {
            // Email sending logic with emailjs
            await emailjs.send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                formData,
                process.env.REACT_APP_EMAILJS_USER_ID
            );
            setSnackbarMessage("Message sent successfully!");
            setOpenSnackbar(true);
            setFormData({
                name: "",
                email: "",
                phone: "",
                message: "",
                queryType: "",
            });
        } catch (error) {
            setSnackbarMessage("Failed to send message. Try again later.");
            setOpenSnackbar(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Box
            className="slide-card"
            sx={{
                maxWidth: "80%",
                margin: "0 auto",
                padding: 2,
                display: "flex",
                flexDirection: "column",
                gap: 2,
                borderRadius: "8px",
                border: "1px solid #ddd",
                backgroundColor: colors.white,
                '@media (max-width: 600px)': {
                    padding: 1,
                    maxWidth: '100%', // Full width on smaller screens
                },
            }}
        >
            <TextField
                name="name"
                label="Name & Surname"
                value={formData.name}
                onChange={handleInputChange}
                variant="outlined"
                fullWidth
                required
                error={!!errors.name}
                helperText={errors.name}
                sx={{
                    backgroundColor: colors.white,
                }}
            />

            <TextField
                name="email"
                label="Email"
                value={formData.email}
                onChange={handleInputChange}
                variant="outlined"
                fullWidth
                required
                error={!!errors.email}
                helperText={errors.email}
                sx={{
                    backgroundColor: colors.white,
                }}
            />

            <FormControl fullWidth sx={{ '@media (max-width: 600px)': { marginTop: '16px' } }}>
                <PhoneInput
                    country="rs"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    inputStyle={{
                        width: '100%',
                        height: '56px',
                        fontSize: '16px',
                        borderRadius: '4px',
                    }}
                    inputProps={{
                        name: 'phone',
                        required: true,
                    }}
                />
                {errors.phone && <FormHelperText error>{errors.phone}</FormHelperText>}
            </FormControl>

            <FormControl fullWidth error={!!errors.queryType} sx={{ '@media (max-width: 600px)': { marginTop: '16px' } }}>
                <InputLabel
                    sx={{
                        backgroundColor: colors.white,
                    }}>
                    Query Type
                </InputLabel>
                <Select
                    name="queryType"
                    value={formData.queryType}
                    required
                    onChange={handleInputChange}
                    sx={{
                        backgroundColor: colors.white,
                    }}
                >
                    <MenuItem value="General Inquiry">General Inquiry</MenuItem>
                    <MenuItem value="Support">Support</MenuItem>
                    <MenuItem value="Feedback">Feedback</MenuItem>
                </Select>
                {errors.queryType && <FormHelperText error>{errors.queryType}</FormHelperText>}
            </FormControl>

            <TextField
                name="message"
                label="Message"
                value={formData.message}
                onChange={handleInputChange}
                variant="outlined"
                fullWidth
                required
                multiline
                rows={4}
                error={!!errors.message}
                helperText={errors.message}
                sx={{
                    backgroundColor: colors.white,
                }}
            />

            <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                disabled={isSubmitting}
                sx={{ backgroundColor: colors.black }}
            >
                {isSubmitting ? 'Senden...' : 'Senden'}
            </Button>

            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={() => setOpenSnackbar(false)}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert onClose={() => setOpenSnackbar(false)} severity="info" sx={{ width: '100%' }}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default KontaktForm;
