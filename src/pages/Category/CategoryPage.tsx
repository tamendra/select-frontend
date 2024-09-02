import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Grid, Typography } from '@mui/material';
import useFetchData from '../../hooks/fetchData';
import { fetchAllCategories } from '../../services/websiteService';
import { CategoryCard } from '../../components/CategoryCard/CategoryCard';
import { Category } from '../../types';

const CategoryPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Fetch category ID from URL params

  const { data: categories } = useFetchData<Category>(fetchAllCategories, id);

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Category: {id}
      </Typography>
      <Grid container spacing={4}>
        {categories.map((category) => (
          <Grid item xs={12} sm={6} md={4} key={category.id}>
            <CategoryCard category={category} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CategoryPage;
