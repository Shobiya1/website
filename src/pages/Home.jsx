import { Container, Box, Typography, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/mockData';

const Home = () => {
  const navigate = useNavigate();
  const featuredProducts = products.filter(p => p.featured);

  return (
    <>
      <Box
        sx={{
          bgcolor: 'background.paper',
          py: { xs: 6, md: 10 },
          backgroundImage: 'linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%)',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h1"
                component="h1"
                gutterBottom
                sx={{
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                  fontWeight: 700,
                  color: 'text.primary',
                }}
              >
                Discover Your Style
              </Typography>
              <Typography
                variant="h5"
                color="text.secondary"
                paragraph
                sx={{
                  fontSize: { xs: '1rem', md: '1.25rem' },
                  mb: 4,
                  lineHeight: 1.5,
                }}
              >
                Premium quality apparel and accessories for everyone. Shop the latest trends and classics.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => navigate('/category/1')}
                  sx={{ px: 4, py: 1.5 }}
                >
                  Shop Now
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => window.scrollTo({ top: 600, behavior: 'smooth' })}
                  sx={{ px: 4, py: 1.5 }}
                >
                  View Collection
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg"
                alt="Hero"
                sx={{
                  width: '100%',
                  height: { xs: 300, md: 400 },
                  objectFit: 'cover',
                  borderRadius: 2,
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h3"
          component="h2"
          textAlign="center"
          gutterBottom
          sx={{
            mb: 6,
            fontWeight: 700,
            fontSize: { xs: '1.75rem', md: '2.5rem' },
          }}
        >
          Shop by Category
        </Typography>
        <Grid container spacing={3}>
          {categories.map((category) => (
            <Grid item xs={12} sm={6} md={3} key={category.id}>
              <Box
                onClick={() => navigate(`/category/${category.id}`)}
                sx={{
                  cursor: 'pointer',
                  position: 'relative',
                  borderRadius: 2,
                  overflow: 'hidden',
                  height: { xs: 200, md: 250 },
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    '& img': {
                      filter: 'brightness(0.8)',
                    },
                  },
                }}
              >
                <Box
                  component="img"
                  src={category.image_url}
                  alt={category.name}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'filter 0.3s',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    bgcolor: 'rgba(0,0,0,0.6)',
                    color: 'white',
                    p: 2,
                  }}
                >
                  <Typography variant="h6" fontWeight={600}>
                    {category.name}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h3"
          component="h2"
          textAlign="center"
          gutterBottom
          sx={{
            mb: 6,
            fontWeight: 700,
            fontSize: { xs: '1.75rem', md: '2.5rem' },
          }}
        >
          Featured Products
        </Typography>
        <Grid container spacing={3}>
          {featuredProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Home;
