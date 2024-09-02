// src/components/FeaturedWebsites/FeaturedWebsites.tsx

import React from 'react';
import { Box, Typography } from '@mui/material';
import { getTranslation } from '../../services/translationService';
import useFetchData from '../../hooks/fetchData';
import { Website } from '../../types/website';
import { fetchFeaturedWebsites } from '../../services/websiteService';
import { Carousel } from '../UI/Carousal/Carousal';
import WebsiteCard from '../WebsiteCard/WebsiteCard';

const FeaturedWebsites: React.FC = () => {
  const { data: websites } = useFetchData<Website>(fetchFeaturedWebsites);

  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h4" gutterBottom>
        {getTranslation('TXT_FEATURED_WEBSITES')}
      </Typography>
      <Carousel items={websites.map(website => <WebsiteCard website={website} />)} />
    </Box >
  );
};

export default FeaturedWebsites;
