import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  useTheme,
  useMediaQuery,
  IconButton,
  Drawer,
  List,
  ListItem,
  Paper,
  Divider,
} from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const menuItems = [
    { text: 'דף הבית', path: '/' },
    { text: 'אודותינו', path: '/about' },
    { text: 'המוצרים שלנו', path: '/products' },
    { text: 'צרו קשר', path: '/contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ 
      textAlign: 'right',
      height: '100%',
      bgcolor: 'background.paper',
      display: 'flex',
      flexDirection: 'column',
      p: 2,
    }}>
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        mb: 3,
        p: 1,
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <img
            src="/logo.png"
            alt="Toomy Team Electric"
            style={{ height: '40px', width: 'auto' }}
          />
          <Typography variant="h6" color="primary" sx={{ fontWeight: 600 }}>
            Toomy Team Electric
          </Typography>
        </Box>
        <IconButton
          color="inherit"
          aria-label="close drawer"
          edge="end"
          onClick={handleDrawerToggle}
          sx={{
            color: 'primary.main',
            '&:hover': {
              bgcolor: 'primary.light',
              color: 'white',
            },
          }}
        >
          <MenuIcon />
        </IconButton>
      </Box>
      <Divider sx={{ mb: 2 }} />
      <List>
        {menuItems.map((item) => (
          <ListItem
            key={item.text}
            disablePadding
            sx={{
              mb: 1,
              '&:last-child': { mb: 0 },
            }}
          >
            <Button
              component={Link}
              to={item.path}
              onClick={handleDrawerToggle}
              fullWidth
              sx={{
                justifyContent: 'flex-end',
                py: 2,
                px: 3,
                borderRadius: 2,
                color: 'text.primary',
                '&:hover': {
                  bgcolor: 'primary.light',
                  color: 'white',
                },
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 500 }}>
                {item.text}
              </Typography>
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar 
      position="sticky" 
      sx={{ 
        bgcolor: 'background.paper',
        boxShadow: 'none',
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ minHeight: '80px' }}>
          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ color: 'primary.main' }}
              >
                <MenuIcon />
              </IconButton>
              <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 1,
                    bgcolor: 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  <img
                    src="/logo.png"
                    alt="Toomy Team Electric"
                    style={{ height: '40px', width: 'auto' }}
                  />
                  <Typography
                    variant="h6"
                    component="span"
                    sx={{
                      fontWeight: 700,
                      color: 'primary.main',
                      display: { xs: 'none', sm: 'block' },
                    }}
                  >
                    Tommy Team Electric
                  </Typography>
                </Paper>
              </Box>
            </>
          ) : (
            <>
              <Box sx={{ flexGrow: 1 }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 1,
                    bgcolor: 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                  }}
                >
                  <img
                    src="/logo.png"
                    alt="Toomy Team Electric"
                    style={{ height: '50px', width: 'auto' }}
                  />
                  <Typography
                    variant="h5"
                    component="span"
                    sx={{
                      fontWeight: 700,
                      color: 'primary.main',
                    }}
                  >
                    Tommy Team Electric
                  </Typography>
                </Paper>
              </Box>
              <Box sx={{ display: 'flex', gap: 2 }}>
                {menuItems.map((item) => (
                  <Button
                    key={item.text}
                    component={Link}
                    to={item.path}
                    color="inherit"
                    sx={{
                      fontWeight: 500,
                      '&:hover': {
                        color: 'primary.main',
                      },
                    }}
                  >
                    {item.text}
                  </Button>
                ))}
              </Box>
            </>
          )}
        </Toolbar>
      </Container>

      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 280,
            borderLeft: 'none',
            boxShadow: 3,
            right: 0,
            left: 'auto',
            transform: 'translateX(0)',
          },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar; 