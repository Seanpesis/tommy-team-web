import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  IconButton,
  Badge,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Snackbar,
  Alert,
  useTheme,
  Fade,
  InputAdornment,
  Chip,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import SearchIcon from '@mui/icons-material/Search';
import emailjs from 'emailjs-com';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';

// Initialize EmailJS
emailjs.init('P3ul-UrQzgiYE-Eqa');

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  stock: number;
}

interface CartItem extends Product {
  quantity: number;
}

const Products = () => {
  const theme = useTheme();
  const [products] = useState<Product[]>([
    {
      id: 1,
      name: 'עמדת טעינה AC 22kW',
      description: 'עמדת טעינה AC 22kW כולל 7 מטר כבל הטענה ',
      price: 1990.00,
      image: '/product1.jpg',
      category: 'עמדות טעינה',
      stock: 10,
    },
    {
      id: 2,
      name: 'עמדת טעינה AC 22kW',
      description: 'עמדת טעינה AC 22kW כולל 7 מטר כבל הטענה כולל התקנה',
      price: 4400.00,
      image: '/product1.jpg',
      category: 'עמדות טעינה',
      stock: 10,
    },
    {
      id: 3,
      name: 'עמדת טעינה AC 22kW',
      description: 'עמדת טעינה AC 22kW כולל 7 מטר כבל הטענה ',
      price: 1990.00,
      image: '/product2.jpg',
      category: 'עמדות טעינה',
      stock: 10,
    },
    {
      id: 4,
      name: 'עמדת טעינה AC 22kW',
      description: 'עמדת טעינה AC 22kW כולל 7 מטר כבל הטענה כולל התקנה',
      price: 4400.00,
      image: '/product2.jpg',
      category: 'עמדות טעינה',
      stock: 10,
    },
    {
        id: 5,
        name: 'Voltec 22kw עם 6מטר כבל מובנה',
        description: 'Voltec 22kw עם 6מטר כבל מובנה כולל התקנה עד 20 מטר . מגיע עם אפליקציה בעברית ומגיע עם צ׳יפים',
        price: 4900.00,
        image: '/product3.jpg',
        category: 'עמדות טעינה',
        stock: 10,
      },
  ]);

  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [orderFormOpen, setOrderFormOpen] = useState(false);
  const [orderForm, setOrderForm] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');

  const categories = ['all', ...Array.from(new Set(products.map((p) => p.category)))];

  const filteredProducts = products
    .filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

  const handleAddToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        if (existingItem.quantity >= product.stock) {
          setSnackbar({
            open: true,
            message: 'הגעת למגבלת המלאי הזמין',
            severity: 'error',
          });
          return prevCart;
        }
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    setSnackbar({
      open: true,
      message: 'המוצר נוסף לסל בהצלחה!',
      severity: 'success',
    });
  };

  const handleRemoveFromCart = (productId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    setSnackbar({
      open: true,
      message: 'המוצר הוסר מהסל',
      severity: 'success',
    });
  };

  const handleQuantityChange = (productId: number, change: number) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.id === productId) {
          const newQuantity = item.quantity + change;
          if (newQuantity < 1) {
            handleRemoveFromCart(productId);
            return item;
          }
          if (newQuantity > item.stock) {
            setSnackbar({
              open: true,
              message: 'הגעת למגבלת המלאי הזמין',
              severity: 'error',
            });
            return item;
          }
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const handleOrderSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await emailjs.send(
        'service_z1cjrrj',
        'template_b8d50dl',
        {
          order_id: Math.floor(Math.random() * 1000000),
          orders: cart.map(item => ({
            name: item.name,
            units: item.quantity,
            price: item.price * item.quantity,
            image_url: item.image
          })),
          cost: {
            shipping: 0,
            tax: 0,
            total: cartTotal
          },
          email: orderForm.email,
          sender_name: orderForm.name,
          sender_phone: orderForm.phone,
          sender_email: orderForm.email
        },
        'P3ul-UrQzgiYE-Eqa'
      );

      setSnackbar({
        open: true,
        message: 'ההזמנה נשלחה בהצלחה! ניצור איתך קשר בהקדם.',
        severity: 'success',
      });
      setCart([]);
      setOrderFormOpen(false);
      setOrderForm({
        name: '',
        email: '',
        phone: '',
      });
    } catch (error) {
      console.error('Error sending order:', error);
      setSnackbar({
        open: true,
        message: 'אירעה שגיאה בשליחת ההזמנה. אנא נסה שוב.',
        severity: 'error',
      });
    }
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

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
          המוצרים שלנו
        </Typography>

        {/* Filters and Search */}
        <Box sx={{ mb: 6 }}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                placeholder="חיפוש מוצרים..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl fullWidth>
                <InputLabel>קטגוריה</InputLabel>
                <Select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  label="קטגוריה"
                >
                  {categories.map((category) => (
                    <MenuItem key={category} value={category}>
                      {category === 'all' ? 'הכל' : category}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl fullWidth>
                <InputLabel>מיין לפי</InputLabel>
                <Select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  label="מיין לפי"
                >
                  <MenuItem value="name">שם</MenuItem>
                  <MenuItem value="price-asc">מחיר: מהנמוך לגבוה</MenuItem>
                  <MenuItem value="price-desc">מחיר: מהגבוה לנמוך</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Box>

        {/* Products Grid */}
        <Grid container spacing={4}>
          {filteredProducts.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Fade in timeout={1000} style={{ transitionDelay: `${index * 100}ms` }}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: theme.shadows[8],
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="300"
                    image={product.image}
                    alt={product.name}
                    sx={{ 
                      objectFit: 'contain',
                      bgcolor: 'background.default',
                      p: 1,
                      borderRadius: '16px 16px 0 0',
                      borderBottom: 1,
                      borderColor: 'divider'
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2" sx={{ fontWeight: 600 }}>
                      {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {product.description}
                    </Typography>
                    <Typography variant="h6" color="primary" sx={{ fontWeight: 700 }}>
                      ₪{product.price.toFixed(2)}
                    </Typography>
                    <Box sx={{ mt: 2 }}>
                      <Chip
                        label={product.category}
                        color="primary"
                        variant="outlined"
                        size="small"
                      />
                    </Box>
                  </CardContent>
                  <CardActions>
                    <Button
                      fullWidth
                      variant="contained"
                      color="primary"
                      onClick={() => handleAddToCart(product)}
                      disabled={product.stock === 0}
                    >
                      {product.stock === 0 ? 'אזל מהמלאי' : 'הוסף לסל'}
                    </Button>
                  </CardActions>
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid>

        {/* Cart Icon */}
        <Box sx={{ 
          position: 'fixed',
          top: 80,
          right: 24,
          zIndex: 1200,
          display: 'flex',
          justifyContent: 'flex-end',
        }}>
          <IconButton
            onClick={() => setCartOpen(true)}
            sx={{
              bgcolor: 'primary.main',
              color: 'white',
              '&:hover': {
                bgcolor: 'primary.dark',
              },
              ml: 'auto',
              mr: 0,
              position: 'relative',
            }}
          >
            <Badge 
              badgeContent={cart.length} 
              color="error"
              sx={{
                '& .MuiBadge-badge': {
                  animation: cart.length > 0 ? 'bounce 0.5s ease-in-out' : 'none',
                },
                '@keyframes bounce': {
                  '0%, 100%': { transform: 'scale(1)' },
                  '50%': { transform: 'scale(1.2)' },
                }
              }}
            >
              <ShoppingCartIcon />
            </Badge>
            {cart.length > 0 && (
              <Typography
                variant="caption"
                sx={{
                  position: 'absolute',
                  bottom: -20,
                  right: '50%',
                  transform: 'translateX(50%)',
                  bgcolor: 'primary.main',
                  color: 'white',
                  px: 1,
                  py: 0.5,
                  borderRadius: 1,
                  fontSize: '0.75rem',
                  whiteSpace: 'nowrap',
                }}
              >
                ₪{cartTotal.toFixed(2)}
              </Typography>
            )}
          </IconButton>
        </Box>

        {/* Cart Dialog */}
        <Dialog
          open={cartOpen}
          onClose={() => setCartOpen(false)}
          maxWidth="sm"
          fullWidth
        >
          <DialogTitle>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6">סל קניות</Typography>
              <IconButton onClick={() => setCartOpen(false)}>
                <CloseIcon />
              </IconButton>
            </Box>
          </DialogTitle>
          <DialogContent>
            {cart.length === 0 ? (
              <Box sx={{ textAlign: 'center', py: 4 }}>
                <ShoppingCartIcon sx={{ fontSize: 48, color: 'text.secondary', mb: 2 }} />
                <Typography variant="h6" color="text.secondary">
                  הסל ריק
                </Typography>
              </Box>
            ) : (
              <List>
                {cart.map((item) => (
                  <ListItem
                    key={item.id}
                    secondaryAction={
                      <Box sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: 1,
                        bgcolor: 'background.default',
                        p: 1,
                        borderRadius: 1,
                        border: 1,
                        borderColor: 'divider'
                      }}>
                        <IconButton
                          size="small"
                          onClick={() => handleQuantityChange(item.id, -1)}
                          disabled={item.quantity <= 1}
                          sx={{
                            '&:hover': {
                              bgcolor: 'action.hover',
                            },
                            '&.Mui-disabled': {
                              bgcolor: 'action.disabledBackground',
                            }
                          }}
                        >
                          <RemoveIcon fontSize="small" />
                        </IconButton>
                        <Typography 
                          sx={{ 
                            minWidth: 40, 
                            textAlign: 'center',
                            fontWeight: 600,
                            color: 'primary.main'
                          }}
                        >
                          {item.quantity}
                        </Typography>
                        <IconButton
                          size="small"
                          onClick={() => handleQuantityChange(item.id, 1)}
                          disabled={item.quantity >= item.stock}
                          sx={{
                            '&:hover': {
                              bgcolor: 'action.hover',
                            },
                            '&.Mui-disabled': {
                              bgcolor: 'action.disabledBackground',
                            }
                          }}
                        >
                          <AddIcon fontSize="small" />
                        </IconButton>
                        <IconButton
                          edge="end"
                          onClick={() => handleRemoveFromCart(item.id)}
                          sx={{ 
                            ml: 1,
                            color: 'error.main',
                            '&:hover': {
                              bgcolor: 'error.lighter',
                            }
                          }}
                        >
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                      </Box>
                    }
                  >
                    <ListItemAvatar>
                      <Avatar
                        src={item.image}
                        alt={item.name}
                        sx={{ width: 60, height: 60, mr: 2 }}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={item.name}
                      secondary={`₪${item.price} x ${item.quantity}`}
                    />
                  </ListItem>
                ))}
              </List>
            )}
          </DialogContent>
          {cart.length > 0 && (
            <DialogActions sx={{ p: 3, pt: 0 }}>
              <Box sx={{ width: '100%' }}>
                <Typography variant="h6" gutterBottom>
                  סה"כ: ₪{cartTotal.toFixed(2)}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={() => setOrderFormOpen(true)}
                >
                  להזמנה
                </Button>
              </Box>
            </DialogActions>
          )}
        </Dialog>

        {/* Order Form Dialog */}
        <Dialog
          open={orderFormOpen}
          onClose={() => setOrderFormOpen(false)}
          maxWidth="sm"
          fullWidth
        >
          <DialogTitle sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            borderBottom: 1,
            borderColor: 'divider',
            pb: 2
          }}>
            <Typography variant="h6">פרטי ההזמנה</Typography>
            <Typography variant="h6" color="primary">
              ₪{cartTotal.toFixed(2)}
            </Typography>
          </DialogTitle>
          <DialogContent sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                required
                fullWidth
                label="שם מלא"
                value={orderForm.name}
                onChange={(e) => setOrderForm({ ...orderForm, name: e.target.value })}
                sx={{ mb: 2 }}
              />
              <TextField
                required
                fullWidth
                label="טלפון"
                value={orderForm.phone}
                onChange={(e) => setOrderForm({ ...orderForm, phone: e.target.value })}
                sx={{ mb: 2 }}
              />
              <TextField
                required
                fullWidth
                label="אימייל"
                type="email"
                value={orderForm.email}
                onChange={(e) => setOrderForm({ ...orderForm, email: e.target.value })}
                sx={{ mb: 2 }}
              />
              <Box sx={{ 
                p: 2, 
                bgcolor: 'background.default',
                borderRadius: 1,
                border: 1,
                borderColor: 'divider'
              }}>
                <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                  סיכום ההזמנה:
                </Typography>
                {cart.map((item) => (
                  <Box key={item.id} sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                    <Typography variant="body2">
                      {item.name} x {item.quantity}
                    </Typography>
                    <Typography variant="body2">
                      ₪{(item.price * item.quantity).toFixed(2)}
                    </Typography>
                  </Box>
                ))}
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  mt: 1,
                  pt: 1,
                  borderTop: 1,
                  borderColor: 'divider'
                }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    סה"כ לתשלום:
                  </Typography>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    ₪{cartTotal.toFixed(2)}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </DialogContent>
          <DialogActions sx={{ p: 3, pt: 0 }}>
            <Button onClick={() => setOrderFormOpen(false)}>ביטול</Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleOrderSubmit}
              disabled={!orderForm.name || !orderForm.phone || !orderForm.email}
              sx={{ minWidth: 150 }}
            >
              שלח הזמנה
            </Button>
          </DialogActions>
        </Dialog>

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

        {/* Important Info Section */}
        <Box sx={{ mt: 8, mb: 8 }}>
          <Typography
            variant="h3"
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
            חשוב שתדעו!
          </Typography>
          
          <Fade in timeout={1000}>
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
                <video
                  src="/info.mp4"
                  controls
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                  }}
                />
              </Box>
            </Box>
          </Fade>
        </Box>
      </Container>
    </Box>
  );
};

export default Products; 