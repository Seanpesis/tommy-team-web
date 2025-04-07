import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Box, Fade, IconButton } from '@mui/material';
import { useScrollTrigger } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import theme from './theme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import WhatsAppButton from './components/WhatsAppButton';

// These components will be created later
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';

// Scroll to top button component
function ScrollTop(props: { children: React.ReactElement }) {
  const { children } = props;
  const [mounted, setMounted] = useState(false);
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!mounted) return;
    
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
        behavior: 'smooth',
      });
    }
  };

  if (!mounted) return null;

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 1000,
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-4px)',
          },
        }}
      >
        {children}
      </Box>
    </Fade>
  );
}

function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            bgcolor: 'background.default',
          }}
        >
          <Navbar />
          <Box component="main" sx={{ flexGrow: 1 }}>
            <div id="back-to-top-anchor" />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Box>
          <ScrollTop>
            <IconButton
              color="primary"
              size="large"
              sx={{
                bgcolor: 'background.paper',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                width: 48,
                height: 48,
                '&:hover': {
                  bgcolor: 'background.paper',
                  boxShadow: '0 6px 16px rgba(0,0,0,0.2)',
                },
              }}
            >
              <KeyboardArrowUpIcon sx={{ fontSize: 28 }} />
            </IconButton>
          </ScrollTop>
          <WhatsAppButton />
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
