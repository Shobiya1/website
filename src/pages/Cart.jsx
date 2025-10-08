import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Button,
  Divider,
  Paper,
} from '@mui/material';
import { Add, Remove, Delete } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, updateQuantity, removeFromCart, getCartTotal, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
            Your cart is empty
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Add some products to get started!
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/')}
            sx={{ mt: 2 }}
          >
            Continue Shopping
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        sx={{ fontWeight: 700, mb: 4, fontSize: { xs: '1.75rem', md: '2.5rem' } }}
      >
        Shopping Cart
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          {cartItems.map((item) => (
            <Card key={item.cartItemId} sx={{ mb: 2, display: 'flex', p: 2 }}>
              <CardMedia
                component="img"
                image={item.image_url}
                alt={item.name}
                sx={{
                  width: { xs: 100, sm: 150 },
                  height: { xs: 100, sm: 150 },
                  objectFit: 'cover',
                  borderRadius: 1,
                }}
              />
              <CardContent sx={{ flex: 1, p: { xs: 1, sm: 2 } }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    mb: 1,
                  }}
                >
                  <Box>
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{
                        fontWeight: 600,
                        fontSize: { xs: '1rem', sm: '1.25rem' },
                        cursor: 'pointer',
                        '&:hover': { color: 'primary.main' },
                      }}
                      onClick={() => navigate(`/product/${item.id}`)}
                    >
                      {item.name}
                    </Typography>
                    <Box sx={{ mt: 1 }}>
                      <Typography variant="body2" color="text.secondary">
                        Size: {item.size}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Color: {item.color}
                      </Typography>
                    </Box>
                  </Box>
                  <IconButton
                    size="small"
                    onClick={() => removeFromCart(item.cartItemId)}
                    sx={{ color: 'error.main' }}
                  >
                    <Delete />
                  </IconButton>
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mt: 2,
                    flexWrap: 'wrap',
                    gap: 2,
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <IconButton
                      size="small"
                      onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                      sx={{ border: 1, borderColor: 'divider' }}
                    >
                      <Remove fontSize="small" />
                    </IconButton>
                    <Typography sx={{ minWidth: 40, textAlign: 'center', fontWeight: 600 }}>
                      {item.quantity}
                    </Typography>
                    <IconButton
                      size="small"
                      onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                      sx={{ border: 1, borderColor: 'divider' }}
                    >
                      <Add fontSize="small" />
                    </IconButton>
                  </Box>

                  <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main' }}>
                    ${(item.price * item.quantity).toFixed(2)}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          ))}

          <Button
            variant="outlined"
            color="error"
            startIcon={<Delete />}
            onClick={clearCart}
            sx={{ mt: 2 }}
          >
            Clear Cart
          </Button>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={2} sx={{ p: 3, position: 'sticky', top: 80 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>
              Order Summary
            </Typography>

            <Box sx={{ my: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="body1">Subtotal</Typography>
                <Typography variant="body1" fontWeight={600}>
                  ${getCartTotal().toFixed(2)}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="body1">Shipping</Typography>
                <Typography variant="body1" fontWeight={600} color="success.main">
                  Free
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="body1">Tax</Typography>
                <Typography variant="body1" fontWeight={600}>
                  ${(getCartTotal() * 0.1).toFixed(2)}
                </Typography>
              </Box>

              <Divider sx={{ my: 2 }} />

              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <Typography variant="h6" fontWeight={700}>
                  Total
                </Typography>
                <Typography variant="h6" fontWeight={700} color="primary.main">
                  ${(getCartTotal() * 1.1).toFixed(2)}
                </Typography>
              </Box>
            </Box>

            <Button
              variant="contained"
              size="large"
              fullWidth
              sx={{ mb: 2, py: 1.5 }}
            >
              Proceed to Checkout
            </Button>

            <Button
              variant="outlined"
              size="large"
              fullWidth
              onClick={() => navigate('/')}
            >
              Continue Shopping
            </Button>

            <Box sx={{ mt: 3, p: 2, bgcolor: 'background.paper', borderRadius: 1 }}>
              <Typography variant="body2" color="text.secondary" textAlign="center">
                Secure checkout • Free shipping on orders over $50
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Cart;
