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
  Paper,
  useMediaQuery,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import StarIcon from '@mui/icons-material/Star';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

const Home = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [mounted, setMounted] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    setMounted(true);
  }, []);

  const features = [
    {
      icon: <LocalShippingIcon sx={{ fontSize: 40 }} />,
      title: 'משלוחים מהירים',
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
      name: 'דניאל אסייג',
      role: 'לקוח ',
      text: 'שירות מעולה ומוצרים איכותיים. ממליץ בחום!',
      rating: 5,
    },
    {
      name: 'בתיה אהרונוביץ',
      role: 'לקוחה ',
      text: 'המחירים הטובים ביותר בשוק והשירות מקצועי',
      rating: 5,
    },
    {
      name: 'אמנון בלד',
      role: 'בעל מוסך',
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

  const handleVideoPlay = () => {
    setVideoPlaying(true);
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

      {/* Video Section */}
      <Box sx={{ py: 8, bgcolor: 'background.paper', position: 'relative', overflow: 'hidden' }}>
        <Container maxWidth="lg">
          <Fade in timeout={1000}>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontWeight: 700,
                  color: 'primary.main',
                  position: 'relative',
                  display: 'inline-block',
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
                קצת עלינו
              </Typography>
            </Box>
          </Fade>
          
          <Fade in timeout={1000} style={{ transitionDelay: '200ms' }}>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                maxWidth: '800px',
                margin: '0 auto',
                borderRadius: 2,
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 15px 40px rgba(0,0,0,0.3)',
                },
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  paddingTop: '56.25%', // 16:9 aspect ratio
                  bgcolor: 'black',
                }}
              >
                {!videoPlaying ? (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      background: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))',
                    }}
                    onClick={handleVideoPlay}
                  >
                    <PlayCircleOutlineIcon
                      sx={{
                        fontSize: 80,
                        color: 'white',
                        opacity: 0.8,
                        transition: 'all 0.3s ease-in-out',
                        '&:hover': {
                          opacity: 1,
                          transform: 'scale(1.1)',
                        },
                      }}
                    />
                    <Typography
                      variant="h6"
                      sx={{
                        color: 'white',
                        mt: 2,
                        fontWeight: 500,
                        textShadow: '1px 1px 3px rgba(0,0,0,0.5)',
                      }}
                    >
                      לחצו לצפייה בסרטון
                    </Typography>
                  </Box>
                ) : (
                  <video
                    src="/homevid.mp4"
                    controls
                    autoPlay
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                    }}
                  />
                )}
              </Box>
            </Box>
          </Fade>
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
