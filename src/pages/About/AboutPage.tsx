// src/pages/About/AboutPage.tsx
import React from 'react';
import { Container, Typography } from '@mui/material';

const AboutPage: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1" paragraph>
        Welcome to the Website Catalog! This platform helps users discover useful websites in various domains.
      </Typography>
    </Container>
  );
};

export default AboutPage;
