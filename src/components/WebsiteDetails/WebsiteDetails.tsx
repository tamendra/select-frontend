import React from 'react';
import { Typography, Box } from '@mui/material';

interface WebsiteDetailsProps {
  description: string;
  features: string[];
}

const WebsiteDetails: React.FC<WebsiteDetailsProps> = ({ description, features }) => {
  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h5" component="h3" gutterBottom>
        About this Website
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        {description}
      </Typography>
      <Typography variant="h6" gutterBottom>
        Key Features:
      </Typography>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>
            <Typography variant="body2" color="text.secondary">
              {feature}
            </Typography>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default WebsiteDetails;
