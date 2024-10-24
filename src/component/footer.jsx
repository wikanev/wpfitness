import React from 'react';
import { Box, Typography } from '@mui/material';
import './footer.css';

const Footer = () => (
    <div clasName="footer">
  <Box sx={{ textAlign: 'center', bgcolor: 'primary.main', color: 'white', height: '5vh'}}>
    <Typography variant="body1">
      &copy; {new Date().getFullYear()} Wikan Pinandhito - Fitness App
    </Typography>
  </Box>
  </div>
);

export default Footer;
