import React from 'react';
import { Container } from '@mui/material';
import HeroSection from '../../components/HeroSection/HeroSection';
import { FeaturedCategories } from '../../components/PopularCategories/PopularCategories';
import { PopularWebsites } from '../../components/FeaturedWebsites/FeaturedWebsites';
import { RecentlyAddedWebsites } from '../../components/RecentlyAddedWebsites/RecentlyAddedWebsite';

const Homepage = () => {
  return (
    <Container maxWidth="lg">
      <HeroSection />
      <FeaturedCategories />
      <PopularWebsites />
      <RecentlyAddedWebsites />
    </Container>
  );
};

export default Homepage;
