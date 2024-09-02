// src/components/Layout/Footer.tsx
import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={{ py: 3, backgroundColor: '#f1f1f1' }}>
      <Container>
        <Typography variant="body2" color="textSecondary" align="center">
          © 2024 Website Catalog. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
