import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  useTheme,
  Fade,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import StarIcon from '@mui/icons-material/Star';

const Home = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const features = [
    {
      icon: <LocalShippingIcon sx={{ fontSize: 40 }} />,
      title: 'משלוח מהיר',
      description: 'משלוחים מהירים לכל הארץ עם מעקב בזמן אמת',
    },
    {
      icon: <SupportAgentIcon sx={{ fontSize: 40 }} />,
      title: 'שירות מעולה',
      description: 'צוות מקצועי וזמין לכל שאלה או בעיה',
    },
    {
      icon: <VerifiedUserIcon sx={{ fontSize: 40 }} />,
      title: 'איכות מובטחת',
      description: 'מוצרים איכותיים עם אחריות מלאה',
    },
  ];

  const testimonials = [
    {
      name: 'דוד כהן',
      role: 'לקוח קבוע',
      text: 'שירות מעולה ומוצרים איכותיים. ממליץ בחום!',
      rating: 5,
    },
    {
      name: 'רחל לוי',
      role: 'בעלת חנות',
      text: 'המחירים הטובים ביותר בשוק והשירות מקצועי',
      rating: 5,
    },
    {
      name: 'יוסי אברהם',
      role: 'לקוח חדש',
      text: 'מאוד מרוצה מהמוצרים ומהשירות המהיר',
      rating: 5,
    },
  ];

  const handleNavigate = (path: string) => {
    navigate(path);
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
          color: 'white',
          backgroundImage: mounted ? `url("/hero-bg.jpg")` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.6) 100%)',
            zIndex: 1,
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.3) 100%)',
            zIndex: 1,
          },
        }}
      >
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
          <Fade in timeout={1000}>
            <Box>
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontSize: { xs: '2.5rem', md: '4rem' },
                  fontWeight: 700,
                  mb: 3,
                  textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                  background: 'linear-gradient(45deg, #ffffff 30%, #f0f0f0 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                ברוכים הבאים ל-Tommy Team Electric
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  mb: 4,
                  textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                  opacity: 0.9,
                }}
              >
                הפתרונות החכמים שלך לתשתיות חשמל מתקדמות
              </Typography>
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={() => handleNavigate('/products')}
                sx={{
                  py: 2,
                  px: 4,
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 25px rgba(0,0,0,0.3)',
                  },
                }}
              >
                צפה במוצרים שלנו
              </Button>
            </Box>
          </Fade>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: 8, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            component="h2"
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
            למה אנחנו?
          </Typography>
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Fade in timeout={1000} style={{ transitionDelay: `${index * 200}ms` }}>
                  <Card
                    sx={{
                      height: '100%',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: theme.shadows[8],
                      },
                    }}
                  >
                    <CardContent sx={{ textAlign: 'center', p: 4 }}>
                      <Box sx={{ color: 'primary.main', mb: 2 }}>
                        {feature.icon}
                      </Box>
                      <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 600 }}>
                        {feature.title}
                      </Typography>
                      <Typography color="text.secondary">
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            component="h2"
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
            מה הלקוחות אומרים
          </Typography>
          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Fade in timeout={1000} style={{ transitionDelay: `${index * 200}ms` }}>
                  <Card
                    sx={{
                      height: '100%',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: theme.shadows[8],
                      },
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Box sx={{ display: 'flex', mb: 2 }}>
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <StarIcon key={i} sx={{ color: 'primary.main' }} />
                        ))}
                      </Box>
                      <Typography
                        variant="body1"
                        sx={{ mb: 3, fontStyle: 'italic' }}
                      >
                        "{testimonial.text}"
                      </Typography>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {testimonial.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {testimonial.role}
                      </Typography>
                    </CardContent>
                  </Card>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          py: 8,
          bgcolor: 'primary.main',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" component="h2" sx={{ mb: 3, fontWeight: 700 }}>
            מוכנים להתחיל?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            צרו איתנו קשר עוד היום לקבלת הצעת מחיר מותאמת אישית
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => handleNavigate('/contact')}
            sx={{
              py: 2,
              px: 4,
              fontSize: '1.2rem',
              fontWeight: 600,
              boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 25px rgba(0,0,0,0.3)',
              },
            }}
          >
            צור קשר
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 