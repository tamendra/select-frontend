import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent } from '@mui/material';
import { Website } from '../../types';

interface WebsiteOverviewProps {
  website: Website
}

const WebsiteOverview: React.FC<WebsiteOverviewProps> = ({ website }) => {
  return (
    <Card sx={{ display: 'flex', my: 4 }}>
      <CardMedia
        component="img"
        sx={{ width: 300 }}
        image={website.image}
        alt={website.title}
      />
      <CardContent sx={{ flex: 1 }}>
        <Typography component="h2" variant="h4" gutterBottom>
          {website.title}
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          {website.shortDescription}
        </Typography>
        <Box sx={{ my: 2 }}>
          <Button variant="contained" color="primary" href={website.url} target="_blank">
            Visit Website
          </Button>
        </Box>
        <Typography variant="body2" color="text.secondary">
          Category: {website.category} | Added: {website.addedDate} | Visits: {website.visits}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WebsiteOverview;
