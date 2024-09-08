import React from 'react';
import { Typography } from '@mui/material';
import { fetchLatestCategories } from '../../services/websiteService';
import useFetchData from '../../hooks/fetchData';
import { Category } from '../../types/category';
import { CategoryCard } from '../CategoryCard/CategoryCard';
import { Carousel } from '../UI/Carousal/Carousal';

export const FeaturedCategories: React.FC = () => {
  const { data: categories } = useFetchData<Category>(fetchLatestCategories);

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Popular Categories
      </Typography>
      <Carousel items={categories.map(category => <CategoryCard category={category} />)} />
    </>
  );
};
