import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import { Facebook, Instagram, Twitter, YouTube } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'secondary.main',
        color: 'white',
        py: 6,
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
              COPYCATZ
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
              Your destination for quality apparel and accessories.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Shop
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="/" color="inherit" underline="hover" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                T-Shirts
              </Link>
              <Link href="/" color="inherit" underline="hover" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                Jerseys
              </Link>
              <Link href="/" color="inherit" underline="hover" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                Hoodies
              </Link>
              <Link href="/" color="inherit" underline="hover" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                Accessories
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Customer Service
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="/" color="inherit" underline="hover" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                Contact Us
              </Link>
              <Link href="/" color="inherit" underline="hover" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                Shipping Info
              </Link>
              <Link href="/" color="inherit" underline="hover" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                Returns
              </Link>
              <Link href="/" color="inherit" underline="hover" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                FAQ
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Follow Us
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton color="inherit" size="small" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                <Facebook />
              </IconButton>
              <IconButton color="inherit" size="small" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                <Instagram />
              </IconButton>
              <IconButton color="inherit" size="small" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                <Twitter />
              </IconButton>
              <IconButton color="inherit" size="small" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                <YouTube />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.1)', mt: 4, pt: 3, textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
            © {new Date().getFullYear()} CopyCatz. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
