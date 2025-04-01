import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Snackbar,
  Alert,
  Paper,
  useTheme,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Contact = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  });
  const [loading, setLoading] = useState(false);

  const contactInfo = [
    {
      icon: <LocationOnIcon sx={{ fontSize: 40 }} />,
      title: 'כתובת',
      details: 'רחוב ההסתדרות 193, חולון ',
      description: 'ממוקם במרכז העיר',
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 40 }} />,
      title: 'טלפון',
      details: '050-9663366',
      description: 'זמינים בשעות העבודה',
    },
    {
      icon: <EmailIcon sx={{ fontSize: 40 }} />,
      title: 'אימייל',
      details: 'Kobi203258@gmail.com',
      description: 'נשיב בהקדם האפשרי',
    },
    {
      icon: <AccessTimeIcon sx={{ fontSize: 40 }} />,
      title: 'שעות פעילות',
      details: 'א-ה: 8:00-19:00',
      description: 'ו: 8:00-13:00',
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSnackbar({
          open: true,
          message: 'ההודעה נשלחה בהצלחה! ניצור איתך קשר בהקדם.',
          severity: 'success',
        });

        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSnackbar({
        open: true,
        message: 'אירעה שגיאה בשליחת ההודעה. אנא נסה שוב.',
        severity: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h1"
          component="h1"
          align="center"
          sx={{
            mb: 6,
            fontWeight: 700,
            color: 'primary.main',
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -16,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 80,
              height: 4,
              bgcolor: 'primary.main',
              borderRadius: 2,
            },
          }}
        >
          צרו קשר
        </Typography>

        <Grid container spacing={4}>
          {/* Contact Information Cards */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {contactInfo.map((info, index) => (
                <Paper
                  key={index}
                  elevation={2}
                  sx={{
                    p: 3,
                    height: '100%',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: theme.shadows[8],
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      mb: 2,
                      color: 'primary.main',
                    }}
                  >
                    {info.icon}
                    <Typography
                      variant="h6"
                      component="h3"
                      sx={{ mr: 2, fontWeight: 600 }}
                    >
                      {info.title}
                    </Typography>
                  </Box>
                  <Typography variant="h6" sx={{ mb: 1, fontWeight: 500 }}>
                    {info.details}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {info.description}
                  </Typography>
                </Paper>
              ))}
            </Box>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={8}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                height: '100%',
                bgcolor: 'background.paper',
              }}
            >
              <Typography variant="h4" component="h2" sx={{ mb: 4, fontWeight: 600 }}>
                שלחו לנו הודעה
              </Typography>
              <Box component="form" onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="שם מלא"
                      name="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      dir="rtl"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="טלפון"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      dir="rtl"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="אימייל"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      dir="rtl"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="הודעה"
                      name="message"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      dir="rtl"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      fullWidth
                      sx={{
                        py: 1.5,
                        fontSize: '1.1rem',
                        fontWeight: 600,
                      }}
                      disabled={loading}
                    >
                      {loading ? 'משלח...' : 'שלח הודעה'}
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>
        </Grid>

        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        >
          <Alert
            onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
            severity={snackbar.severity}
            sx={{ width: '100%' }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default Contact;
