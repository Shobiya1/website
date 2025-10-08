import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Typography,
  Grid,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/mockData';

const CategoryPage = () => {
  const { categoryId } = useParams();
  const [sortBy, setSortBy] = useState('featured');
  const [selectedSize, setSelectedSize] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const category = categories.find(c => c.id === categoryId);
  let filteredProducts = products.filter(p => p.category_id === categoryId);

  if (selectedSize !== 'all') {
    filteredProducts = filteredProducts.filter(p => p.sizes.includes(selectedSize));
  }

  if (priceRange !== 'all') {
    const [min, max] = priceRange.split('-').map(Number);
    filteredProducts = filteredProducts.filter(p => {
      if (max) {
        return p.price >= min && p.price <= max;
      }
      return p.price >= min;
    });
  }

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return b.featured ? 1 : -1;
    }
  });

  const allSizes = [...new Set(products.flatMap(p => p.sizes))];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{ fontWeight: 700, fontSize: { xs: '1.75rem', md: '2.5rem' } }}
        >
          {category?.name || 'Products'}
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          {category?.description}
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: 2,
          mb: 4,
          flexWrap: 'wrap',
        }}
      >
        <FormControl size="small" sx={{ minWidth: { xs: '100%', sm: 200 } }}>
          <InputLabel>Sort By</InputLabel>
          <Select
            value={sortBy}
            label="Sort By"
            onChange={(e) => setSortBy(e.target.value)}
          >
            <MenuItem value="featured">Featured</MenuItem>
            <MenuItem value="price-low">Price: Low to High</MenuItem>
            <MenuItem value="price-high">Price: High to Low</MenuItem>
            <MenuItem value="name">Name</MenuItem>
          </Select>
        </FormControl>

        <FormControl size="small" sx={{ minWidth: { xs: '100%', sm: 150 } }}>
          <InputLabel>Size</InputLabel>
          <Select
            value={selectedSize}
            label="Size"
            onChange={(e) => setSelectedSize(e.target.value)}
          >
            <MenuItem value="all">All Sizes</MenuItem>
            {allSizes.map(size => (
              <MenuItem key={size} value={size}>{size}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl size="small" sx={{ minWidth: { xs: '100%', sm: 150 } }}>
          <InputLabel>Price Range</InputLabel>
          <Select
            value={priceRange}
            label="Price Range"
            onChange={(e) => setPriceRange(e.target.value)}
          >
            <MenuItem value="all">All Prices</MenuItem>
            <MenuItem value="0-30">$0 - $30</MenuItem>
            <MenuItem value="30-50">$30 - $50</MenuItem>
            <MenuItem value="50-100">$50 - $100</MenuItem>
            <MenuItem value="100">$100+</MenuItem>
          </Select>
        </FormControl>

        {(selectedSize !== 'all' || priceRange !== 'all') && (
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            {selectedSize !== 'all' && (
              <Chip
                label={`Size: ${selectedSize}`}
                onDelete={() => setSelectedSize('all')}
                color="primary"
                variant="outlined"
              />
            )}
            {priceRange !== 'all' && (
              <Chip
                label={`Price: $${priceRange.replace('-', ' - $')}`}
                onDelete={() => setPriceRange('all')}
                color="primary"
                variant="outlined"
              />
            )}
          </Box>
        )}
      </Box>

      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Showing {sortedProducts.length} products
      </Typography>

      <Grid container spacing={3}>
        {sortedProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>

      {sortedProducts.length === 0 && (
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography variant="h6" color="text.secondary">
            No products found matching your filters
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default CategoryPage;
