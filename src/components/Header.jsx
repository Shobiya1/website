import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Container,
  InputBase,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Menu as MenuIcon,
  ShoppingCart,
  Search as SearchIcon,
  Person,
  Favorite,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const navigate = useNavigate();
  const { getCartCount } = useCart();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'T-Shirts', path: '/category/1' },
    { label: 'Jerseys', path: '/category/2' },
    { label: 'Hoodies', path: '/category/3' },
    { label: 'Accessories', path: '/category/4' },
  ];

  const handleMenuClick = (path) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <AppBar position="sticky" color="default" elevation={1} sx={{ bgcolor: 'white' }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            {isMobile && (
              <IconButton
                edge="start"
                color="inherit"
                onClick={() => setMobileMenuOpen(true)}
                sx={{ mr: 1 }}
              >
                <MenuIcon />
              </IconButton>
            )}

            <Typography
              variant="h5"
              component="div"
              onClick={() => navigate('/')}
              sx={{
                fontWeight: 700,
                color: 'primary.main',
                cursor: 'pointer',
                flexGrow: isMobile ? 1 : 0,
              }}
            >
              COPYCATZ
            </Typography>

            {!isMobile && (
              <Box sx={{ display: 'flex', gap: 3, ml: 6 }}>
                {menuItems.map((item) => (
                  <Typography
                    key={item.path}
                    onClick={() => handleMenuClick(item.path)}
                    sx={{
                      cursor: 'pointer',
                      fontWeight: 500,
                      fontSize: '0.95rem',
                      color: 'text.primary',
                      '&:hover': {
                        color: 'primary.main',
                      },
                      transition: 'color 0.2s',
                    }}
                  >
                    {item.label}
                  </Typography>
                ))}
              </Box>
            )}

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {!isMobile && searchOpen && (
                <InputBase
                  placeholder="Search products..."
                  autoFocus
                  sx={{
                    ml: 1,
                    flex: 1,
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 1,
                    px: 2,
                    py: 0.5,
                  }}
                  onBlur={() => setSearchOpen(false)}
                />
              )}

              <IconButton color="inherit" onClick={() => setSearchOpen(!searchOpen)}>
                <SearchIcon />
              </IconButton>

              {!isMobile && (
                <>
                  <IconButton color="inherit">
                    <Favorite />
                  </IconButton>
                  <IconButton color="inherit">
                    <Person />
                  </IconButton>
                </>
              )}

              <IconButton color="inherit" onClick={() => navigate('/cart')}>
                <Badge badgeContent={getCartCount()} color="primary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="left"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      >
        <Box sx={{ width: 250 }}>
          <Typography
            variant="h6"
            sx={{ p: 2, fontWeight: 700, color: 'primary.main' }}
          >
            COPYCATZ
          </Typography>
          <List>
            {menuItems.map((item) => (
              <ListItem
                button
                key={item.path}
                onClick={() => handleMenuClick(item.path)}
              >
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
