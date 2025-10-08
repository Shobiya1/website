import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  IconButton,
  Chip,
} from '@mui/material';
import { ShoppingCart, Favorite } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const discount = product.compare_price
    ? Math.round(((product.compare_price - product.price) / product.compare_price) * 100)
    : 0;

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        transition: 'all 0.3s',
        position: 'relative',
        '&:hover': {
          transform: 'translateY(-4px)',
        },
      }}
      onClick={() => navigate(`/product/${product.id}`)}
    >
      {discount > 0 && (
        <Chip
          label={`-${discount}%`}
          color="primary"
          size="small"
          sx={{
            position: 'absolute',
            top: 12,
            left: 12,
            zIndex: 1,
            fontWeight: 700,
          }}
        />
      )}

      <IconButton
        sx={{
          position: 'absolute',
          top: 8,
          right: 8,
          zIndex: 1,
          bgcolor: 'white',
          '&:hover': { bgcolor: 'white', color: 'primary.main' },
        }}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Favorite />
      </IconButton>

      <CardMedia
        component="img"
        image={product.image_url}
        alt={product.name}
        sx={{
          height: { xs: 200, sm: 250, md: 300 },
          objectFit: 'cover',
        }}
      />

      <CardContent sx={{ flexGrow: 1, pb: 2 }}>
        <Typography
          variant="h6"
          component="div"
          gutterBottom
          sx={{
            fontSize: { xs: '1rem', md: '1.1rem' },
            fontWeight: 600,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {product.name}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mb: 2,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {product.description}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box>
            <Typography
              variant="h6"
              component="span"
              sx={{ fontWeight: 700, color: 'primary.main' }}
            >
              ${product.price}
            </Typography>
            {product.compare_price && (
              <Typography
                variant="body2"
                component="span"
                sx={{
                  ml: 1,
                  textDecoration: 'line-through',
                  color: 'text.secondary',
                }}
              >
                ${product.compare_price}
              </Typography>
            )}
          </Box>

          <IconButton
            color="primary"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/product/${product.id}`);
            }}
            sx={{
              bgcolor: 'primary.main',
              color: 'white',
              '&:hover': {
                bgcolor: 'primary.dark',
              },
            }}
          >
            <ShoppingCart />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
