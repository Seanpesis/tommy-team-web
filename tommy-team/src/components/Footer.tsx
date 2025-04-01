import React from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        py: 3,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography variant="body2" color="text.secondary" align="center">
            {`© ${currentYear} כל הזכויות שמורות - Sean Pesis `}
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            <IconButton
              component="a"
              href="https://www.facebook.com/share/1BaaSubQqF/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: 'primary.main',
                '&:hover': {
                  color: 'primary.dark',
                  transform: 'translateY(-2px)',
                },
                mr: 1,
              }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.instagram.com/tommyteam_electric?igsh=MTZvaTJtdjR6ZWs4Mg=="
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: 'primary.main',
                '&:hover': {
                  color: 'primary.dark',
                  transform: 'translateY(-2px)',
                },
                mr: 4,
              }}
            >
              <InstagramIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 