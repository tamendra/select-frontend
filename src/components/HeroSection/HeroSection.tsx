// src/components/HeroSection/HeroSection.tsx

import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

const HeroSection: React.FC = () => {
  return (
    <Box sx={{ textAlign: 'center', my: 4 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Discover the Best Websites for Your Needs!
      </Typography>
      <Typography variant="h5" color="textSecondary" paragraph>
        Explore a curated catalog of the most useful websites for learning, productivity, entertainment, and more.
      </Typography>
      <Button variant="contained" color="primary" size="large" sx={{ mt: 2 }}>
        Start Exploring
      </Button>
      <TextField
        label="Search Websites"
        variant="outlined"
        sx={{ mt: 4, width: '100%', maxWidth: 600 }}
        placeholder="Search by name or category..."
      />
    </Box>
  );
};

export default HeroSection;
