import React from 'react';
import { Breadcrumbs, Link, Typography } from '@mui/material';

const BreadcrumbsNavigation: React.FC = () => {
  return (
    <Breadcrumbs aria-label="breadcrumb" sx={{ my: 2 }}>
      <Link underline="hover" color="inherit" href="/">
        Home
      </Link>
      <Link underline="hover" color="inherit" href="/categories">
        Categories
      </Link>
      <Typography color="text.primary">Website Detail</Typography>
    </Breadcrumbs>
  );
};

export default BreadcrumbsNavigation;
