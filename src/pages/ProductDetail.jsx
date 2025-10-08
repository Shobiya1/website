import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Grid,
  Typography,
  Button,
  Box,
  IconButton,
  Chip,
  Divider,
  Card,
  CardMedia,
  ToggleButton,
  ToggleButtonGroup,
  useTheme,
  useMediaQuery,
  Snackbar,
  Alert,
} from '@mui/material';
import {
  Add,
  Remove,
  Favorite,
  FavoriteBorder,
  LocalShipping,
  Security,
  SwapHoriz,
} from '@mui/icons-material';
import { products } from '../data/mockData';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const product = products.find(p => p.id === productId);
  const relatedProducts = products.filter(
    p => p.category_id === product?.category_id && p.id !== productId
  ).slice(0, 4);

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [favorite, setFavorite] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  if (!product) {
    return (
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h5">Product not found</Typography>
      </Container>
    );
  }

  const discount = product.compare_price
    ? Math.round(((product.compare_price - product.price) / product.compare_price) * 100)
    : 0;

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert('Please select size and color');
      return;
    }
    addToCart(product, selectedSize, selectedColor, quantity);
    setSnackbarOpen(true);
  };

  const handleQuantityChange = (delta) => {
    const newQuantity = quantity + delta;
    if (newQuantity >= 1 && newQuantity <= product.stock_quantity) {
      setQuantity(newQuantity);
    }
  };

  return (
    <>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box>
              <Card elevation={0} sx={{ mb: 2, position: 'relative' }}>
                {discount > 0 && (
                  <Chip
                    label={`-${discount}%`}
                    color="primary"
                    sx={{
                      position: 'absolute',
                      top: 16,
                      left: 16,
                      zIndex: 1,
                      fontWeight: 700,
                    }}
                  />
                )}
                <CardMedia
                  component="img"
                  image={product.images[selectedImage]}
                  alt={product.name}
                  sx={{
                    width: '100%',
                    height: { xs: 300, sm: 400, md: 500 },
                    objectFit: 'cover',
                    borderRadius: 2,
                  }}
                />
              </Card>

              <Grid container spacing={1}>
                {product.images.map((image, index) => (
                  <Grid item xs={3} key={index}>
                    <Card
                      elevation={0}
                      onClick={() => setSelectedImage(index)}
                      sx={{
                        cursor: 'pointer',
                        border: selectedImage === index ? 2 : 1,
                        borderColor: selectedImage === index ? 'primary.main' : 'divider',
                        transition: 'all 0.2s',
                      }}
                    >
                      <CardMedia
                        component="img"
                        image={image}
                        alt={`${product.name} ${index + 1}`}
                        sx={{ height: { xs: 60, sm: 80 }, objectFit: 'cover' }}
                      />
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box>
              <Typography
                variant="h4"
                component="h1"
                gutterBottom
                sx={{ fontWeight: 700, fontSize: { xs: '1.5rem', md: '2rem' } }}
              >
                {product.name}
              </Typography>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                <Typography variant="h4" component="div" sx={{ fontWeight: 700, color: 'primary.main' }}>
                  ${product.price}
                </Typography>
                {product.compare_price && (
                  <Typography
                    variant="h6"
                    component="span"
                    sx={{ textDecoration: 'line-through', color: 'text.secondary' }}
                  >
                    ${product.compare_price}
                  </Typography>
                )}
              </Box>

              <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 3 }}>
                {product.description}
              </Typography>

              <Divider sx={{ my: 3 }} />

              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle1" gutterBottom fontWeight={600}>
                  Select Size
                </Typography>
                <ToggleButtonGroup
                  value={selectedSize}
                  exclusive
                  onChange={(e, value) => value && setSelectedSize(value)}
                  sx={{ flexWrap: 'wrap' }}
                >
                  {product.sizes.map((size) => (
                    <ToggleButton key={size} value={size} sx={{ px: 3 }}>
                      {size}
                    </ToggleButton>
                  ))}
                </ToggleButtonGroup>
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle1" gutterBottom fontWeight={600}>
                  Select Color
                </Typography>
                <ToggleButtonGroup
                  value={selectedColor}
                  exclusive
                  onChange={(e, value) => value && setSelectedColor(value)}
                  sx={{ flexWrap: 'wrap' }}
                >
                  {product.colors.map((color) => (
                    <ToggleButton key={color} value={color} sx={{ px: 3 }}>
                      {color}
                    </ToggleButton>
                  ))}
                </ToggleButtonGroup>
              </Box>

              <Box sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
                <Typography variant="subtitle1" fontWeight={600}>
                  Quantity
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <IconButton
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                    size="small"
                    sx={{ border: 1, borderColor: 'divider' }}
                  >
                    <Remove />
                  </IconButton>
                  <Typography sx={{ minWidth: 40, textAlign: 'center', fontWeight: 600 }}>
                    {quantity}
                  </Typography>
                  <IconButton
                    onClick={() => handleQuantityChange(1)}
                    disabled={quantity >= product.stock_quantity}
                    size="small"
                    sx={{ border: 1, borderColor: 'divider' }}
                  >
                    <Add />
                  </IconButton>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  ({product.stock_quantity} in stock)
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                <Button
                  variant="contained"
                  size="large"
                  fullWidth
                  onClick={handleAddToCart}
                  sx={{ py: 1.5 }}
                >
                  Add to Cart
                </Button>
                <IconButton
                  onClick={() => setFavorite(!favorite)}
                  sx={{
                    border: 1,
                    borderColor: 'divider',
                    color: favorite ? 'primary.main' : 'inherit',
                  }}
                >
                  {favorite ? <Favorite /> : <FavoriteBorder />}
                </IconButton>
              </Box>

              <Divider sx={{ my: 3 }} />

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <LocalShipping color="action" />
                  <Box>
                    <Typography variant="body2" fontWeight={600}>
                      Free Shipping
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      On orders over $50
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <SwapHoriz color="action" />
                  <Box>
                    <Typography variant="body2" fontWeight={600}>
                      Easy Returns
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      30-day return policy
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Security color="action" />
                  <Box>
                    <Typography variant="body2" fontWeight={600}>
                      Secure Payment
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      100% secure transactions
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {relatedProducts.length > 0 && (
          <Box sx={{ mt: 8 }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, mb: 4 }}>
              Related Products
            </Typography>
            <Grid container spacing={3}>
              {relatedProducts.map((product) => (
                <Grid item xs={12} sm={6} md={3} key={product.id}>
                  <ProductCard product={product} />
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </Container>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" sx={{ width: '100%' }}>
          Product added to cart!
        </Alert>
      </Snackbar>
    </>
  );
};

export default ProductDetail;
