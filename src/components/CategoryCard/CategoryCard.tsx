import React from 'react';
import { Button, Card, CardActions, CardContent, Link, Typography } from '@mui/material';
import { Category } from '../../types/category';
import { Link as RouterLink } from 'react-router-dom';
import { getTranslation } from '../../services/translationService';
import { AppRoute } from '../../routes/constants';

interface WebsiteCardProps {
  category: Category;
}

export const CategoryCard: React.FC<WebsiteCardProps> = ({ category }) => {
  return (
    <Card sx={{
      display: 'flex', flexDirection: 'column',
      height: '100%', width: '100%'
    }}>
      <CardContent sx={{ flex: 1 }}>
        <Typography variant='h5'>{category.name}</Typography>
        <Typography variant='body2' color='textSecondary'>
          {category.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ marginTop: 'auto' }}>
        <Link component={RouterLink} to={AppRoute.EXPLORE_CATEGORY + '/' + category.name} underline='none'>
          <Button size='small' color='primary'>
            {getTranslation('TXT_EXPLORE')}
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};
