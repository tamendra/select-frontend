// src/pages/WebsiteDetail/WebsiteDetailPage.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Button } from '@mui/material';

const WebsiteDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Fetch website ID from URL params

  // Temporary mock data - Replace with data from API later
  const website = {
    id: 1,
    title: 'Google',
    description: 'A popular search engine.',
    url: 'https://google.com',
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        {website.title}
      </Typography>
      <Typography variant="body1" paragraph>
        {website.description}
      </Typography>
      <Button variant="contained" color="primary" href={website.url} target="_blank">
        Visit Website
      </Button>
    </Container>
  );
};

export default WebsiteDetailPage;
