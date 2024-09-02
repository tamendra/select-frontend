// src/pages/Home/Home.tsx

import React from 'react';
import { Container } from '@mui/material';
import HeroSection from '../../components/HeroSection/HeroSection';
import PopularCategories from '../../components/PopularCategories/PopularCategories';
import FeaturedWebsites from '../../components/FeaturedWebsites/FeaturedWebsites';

const Home: React.FC = () => {
  return (
    <Container>
      <HeroSection />
      <PopularCategories />
      <FeaturedWebsites />
    </Container>
  );
};

export default Home;
