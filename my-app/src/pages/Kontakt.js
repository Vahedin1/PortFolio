import React, { useState } from "react";
import { Box, Button, Grid, Alert, Snackbar, MenuItem, Select, TextField, FormControl, InputLabel, FormHelperText, Typography } from "@mui/material";
import emailjs from 'emailjs-com';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const colors = {
    white: "#FFFFFF",
    orange: "#FF6A1A",
    brown: "#532912",
    gray: "#7A7979",
    orange2: "#AA4D1B",
    darkbrown: "#29180E",
    darkYellow: "#DAA520",
    black: '#000000',
};

const ContactForm = () => {
    const [formData, setFormData] = useState({
        company: "",
        name: "",
        email: "",
        phone: "",
        message: "",
        queryType: "",
        gender: "", 
        captchaError: "",
    });
    const [errors, setErrors] = useState({});  // Track which fields are invalid
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");

    const [charLimitErrors, setCharLimitErrors] = useState({
        company: "",
        name: "",
        email: "",
        message: "",
    }); // New state to track char limit errors

    const handleChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
            captchaError: "",
        }));

        setErrors((prevErrors) => ({
            ...prevErrors,
            [e.target.name]: '',
        }));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === "company" && value.length > 50) {
            setSnackbarMessage("Maximale Zeichenbegrenzung für Firma erreicht.");
            setOpenSnackbar(true);
            setCharLimitErrors((prev) => ({ ...prev, company: "Maximale Zeichen erreicht!" }));
            return;
        }

        if (name === "name" && value.length > 100) {
            setSnackbarMessage("Maximale Zeichenbegrenzung für Vor- & Nachname erreicht.");
            setOpenSnackbar(true);
            setCharLimitErrors((prev) => ({ ...prev, name: "Maximale Zeichen erreicht!" }));
            return;
        }

        if (name === "email" && value.length > 100) {
            setSnackbarMessage("Maximale Zeichenbegrenzung für E-Mail erreicht.");
            setOpenSnackbar(true);
            setCharLimitErrors((prev) => ({ ...prev, email: "Maximale Zeichen erreicht!" }));
            return;
        }

        if (name === "message" && value.length > 500) {
            setSnackbarMessage("Maximale Zeichenbegrenzung für Nachricht erreicht.");
            setOpenSnackbar(true);
            setCharLimitErrors((prev) => ({ ...prev, message: "Maximale Zeichen erreicht!" }));
            return;
        }

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        // Clear character limit error when user types before reaching limit
        if (value.length <= 50 && name === "company") {
            setCharLimitErrors((prev) => ({ ...prev, company: "" }));
        }
        if (value.length <= 100 && name === "name") {
            setCharLimitErrors((prev) => ({ ...prev, name: "" }));
        }
        if (value.length <= 100 && name === "email") {
            setCharLimitErrors((prev) => ({ ...prev, email: "" }));
        }
        if (value.length <= 500 && name === "message") {
            setCharLimitErrors((prev) => ({ ...prev, message: "" }));
        }
    };

    const validateEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name) {
            newErrors.name = "Vor- & Nachname sind erforderlich";
        }

        // Email field
        if (!validateEmail(formData.email)) {
            newErrors.email = "Ungültige E-Mail-Adresse";
        }

        // Phone field (can add additional validation if needed)
        if (!formData.phone) {
            newErrors.phone = "Telefonnummer ist erforderlich";
        }

        // Message field
        if (!formData.message) {
            newErrors.message = "Nachricht ist erforderlich";
        }

        // Query Type field
        if (!formData.queryType) {
            newErrors.queryType = "Anfrageart ist erforderlich";
        }

        // Gender field
        if (!formData.gender) {
            newErrors.gender = "Geschlecht ist erforderlich";
        }

        return newErrors;
    };

    const resetForm = () => {
        setFormData({
            company: "",
            name: "",
            email: "",
            phone: "",
            message: "",
            queryType: "",
            gender: "", // Reset gender
            captchaError: "",
        });
        setErrors({});
        setCharLimitErrors({});  // Reset character limit error state
    };

    const isFormValid = () => {
        const { name, email, phone, message, queryType, gender } = formData;
        return name && email && phone && message && queryType && gender && validateEmail(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setIsSubmitting(false);
            return;
        }

        try {
            const result = await emailjs.send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    phone: formData.phone,
                    company: formData.company,
                    queryType: formData.queryType,
                    gender: formData.gender, // Send gender as part of the form data
                },
                process.env.REACT_APP_EMAILJS_USER_ID
            );
            console.log('E-Mail erfolgreich gesendet:', result.text);
            resetForm();
            setSnackbarMessage('Formular erfolgreich abgesendet!');
            setOpenSnackbar(true);

        } catch (error) {
            setSnackbarMessage('Fehler beim Senden der E-Mail. Bitte versuche es später noch einmal.');
            setOpenSnackbar(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Box
            className="slide-card"
            sx={{
                maxWidth: 600,
                margin: "0 auto",
                padding: 2,
                display: "flex",
                flexDirection: "column",
                gap: 2,
                marginTop: '80px',
                marginBottom: '50px',
                borderRadius: "8px",
                border: "1px solid #ddd",
                transition: 'transform 0.3s, box-shadow 0.3s',
                transform: 'scale(1)',
                zIndex: -1,
                '&:hover::before': {
                    transform: 'scale(1.05) translateZ(0) !important',
                },
            }}
        >
            {/* Name TextField */}
            <TextField
                name="name"
                label="Vor- & Nachname"
                value={formData.name}
                onChange={handleInputChange}
                variant="outlined"
                fullWidth
                required
                sx={{ marginTop: '5px' }}
                inputProps={{ maxLength: 150 }} // Character limit for name
            />
            {charLimitErrors.name && <Typography color="red" variant="body2">{charLimitErrors.name}</Typography>}

            {/* Gender Select */}
            <FormControl fullWidth>
                <InputLabel htmlFor="gender" sx={{ backgroundColor: colors.white, color: formData.gender ? colors.gray : colors.gray, padding: '0 5px' }}>
                    Geschlecht *
                </InputLabel>
                <Select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                    sx={{
                        borderColor: errors.gender ? 'red' : '',
                    }}
                >
                    <MenuItem value="male">Männlich</MenuItem>
                    <MenuItem value="female">Weiblich</MenuItem>
                </Select>
            </FormControl>
            {errors.gender && <FormHelperText error>{errors.gender}</FormHelperText>}

            {/* Firma TextField */}
            <TextField
                name="company"
                label="Firma"
                value={formData.company}
                onChange={handleInputChange}
                variant="outlined"
                fullWidth
                sx={{ marginTop: '5px' }}
                inputProps={{ maxLength: 100 }} // Add character limit here
            />

            {/* Query Type Select */}
            <FormControl fullWidth>
                <InputLabel htmlFor="queryType" sx={{ padding: '0 5px', backgroundColor: colors.white, color: formData.queryType ? colors.gray : colors.gray }}>
                    Anfrageart *
                </InputLabel>
                <Select
                    name="queryType"
                    value={formData.queryType}
                    onChange={handleChange}
                    sx={{
                        borderColor: errors.queryType ? 'red' : '',
                    }}
                >
                    <MenuItem value="Allgemeine Fragen">
                        <em style={{ color: colors.black }}>Allgemeine Fragen</em>
                    </MenuItem>
                    <MenuItem value="Maurerarbeiten">
                        <em style={{ color: colors.black }}>Maurerarbeiten</em>
                    </MenuItem>
                    <MenuItem value="Stahlbetonbau">
                        <em style={{ color: colors.black }}>Stahlbetonbau</em>
                    </MenuItem>
                    <MenuItem value="Abbruch u. Umbau">
                        <em style={{ color: colors.black }}>Abbruch u. Umbau</em>
                    </MenuItem>
                    <MenuItem value="Reparaturen/Sanierung">
                        <em style={{ color: colors.black }}>Reparaturen/Sanierung</em>
                    </MenuItem>
                    <MenuItem value="Gartengestaltung">
                        <em style={{ color: colors.black }}>Gartengestaltung</em>
                    </MenuItem>
                </Select>
            </FormControl>
            {errors.queryType && <FormHelperText error>{errors.queryType}</FormHelperText>}

            {/* Email TextField */}
            <TextField
                name="email"
                label="E-Mail"
                value={formData.email}
                onChange={handleInputChange}
                variant="outlined"
                fullWidth
                required
                sx={{ marginTop: '5px' }}
                inputProps={{ maxLength: 150 }} // Character limit for email
            />
            {charLimitErrors.email && <Typography color="red" variant="body2">{charLimitErrors.email}</Typography>}

            {/* Phone Input */}
            <PhoneInput
                country={'de'}
                value={formData.phone}
                onChange={(phone) => setFormData((prevData) => ({ ...prevData, phone }))}
                inputStyle={{
                    width: '100%',
                    height: '56px',
                    borderColor: errors.phone ? 'red' : '',
                    paddingLeft: '50px', // to adjust for the country code padding
                }}
                containerStyle={{ width: '100%' }}
                sx={{
                    margin: 0, padding: 0, marginBottom: '5px'
                }}
            />
            {errors.phone && <FormHelperText error>{errors.phone}</FormHelperText>}

            {/* Message TextField */}
            <TextField
                name="message"
                label=""
                value={formData.message}
                onChange={handleInputChange}
                variant="outlined"
                fullWidth
                multiline
                rows={8}
                required
                sx={{ marginTop: '5px' }}
                inputProps={{ maxLength: 1000 }} // Character limit for message
            />
            {charLimitErrors.message && <Typography color="red" variant="body2">{charLimitErrors.message}</Typography>}

            {/* Submit Button */}
            <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                disabled={isSubmitting || !isFormValid()}
                sx={{ backgroundColor: colors.black }}
            >
                {isSubmitting ? 'Senden...' : 'Senden'}
            </Button>

            {/* Snackbar Notification */}
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

export default function Kontakt() {
    return (
        <>
            <Grid container spacing={2} marginTop={'70px'} marginBottom={'0px'} sx={{ minHeight: '100vh', justifyContent: 'center', alignItems: 'center' }}>
                <Grid item xs={12} md={8}>
                    <ContactForm />
                </Grid>
            </Grid>
        </>
    );
}
